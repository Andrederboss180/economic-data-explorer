import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it, vi } from 'vitest'
import { buildUrl, combineSeries, createCountryLoader, parseSeries } from '../src/api/worldBank'
import { payload, response } from './fixtures'

describe('World Bank parsing and year joining', () => {
  it('uses the agreed country, indicator, inclusive period and page size', () => {
    expect(buildUrl('FRA', 'unemployment')).toBe('https://api.worldbank.org/v2/country/FRA/indicator/SL.UEM.TOTL.ZS?format=json&date=2000:2024&per_page=100')
    expect(buildUrl('ESP', 'inflation')).toContain('/ESP/indicator/FP.CPI.TOTL.ZG?')
  })

  it('joins reversed and misaligned years, preserves zero/negative values and exposes missing years/nulls', () => {
    const inflation = parseSeries(payload(), 'DEU', 'inflation')
    const unemploymentPayload = payload('DEU', 'unemployment')
    unemploymentPayload[1].reverse()
    const unemployment = parseSeries(unemploymentPayload, 'DEU', 'unemployment')
    unemployment.values.set(2000, 8)
    unemployment.values.set(2001, null)
    const rows = combineSeries('DEU', inflation, unemployment)
    expect(rows).toHaveLength(25)
    expect(rows[0]).toEqual({ countryCode: 'DEU', year: 2000, inflation: 0, unemployment: 8 })
    expect(rows[1]).toEqual({ countryCode: 'DEU', year: 2001, inflation: -1.25, unemployment: null })
    expect(rows[24]).toEqual({ countryCode: 'DEU', year: 2024, inflation: null, unemployment: null })
  })

  it('retains explicit null and accepts empty data without manufacturing values', () => {
    const input = structuredClone(payload())
    Object.assign(input[1][0], { value: null })
    expect(parseSeries(input, 'DEU', 'inflation').values.get(2001)).toBeNull()
    expect(parseSeries([{ page: 1, pages: 1, total: 0 }, null], 'DEU', 'inflation').values.size).toBe(0)
    expect(parseSeries([{ page: 1, pages: 0, total: 0 }, null], 'DEU', 'inflation').values.size).toBe(0)
  })

  it.each<readonly [string, () => unknown]>([
    ['top-level', () => ({ message: 'Invalid request' })],
    ['metadata', () => [null, []]],
    ['rows', () => [{ page: 1, pages: 1, total: 1 }, null]],
    ['pagination', () => [{ ...payload()[0], pages: 2 }, payload()[1]]],
    ['count', () => [{ ...payload()[0], total: 3 }, payload()[1]]],
    ['country', () => payload('FRA')],
    ['indicator', () => payload('DEU', 'unemployment')],
    ['duplicate', () => [payload()[0], [payload()[1][0], payload()[1][0]]]],
    ['year', () => [payload()[0], [{ ...payload()[1][0], date: '1999' }, payload()[1][1]]]],
    ['fractional year', () => [payload()[0], [{ ...payload()[1][0], date: '2001.5' }, payload()[1][1]]]],
    ...['3.2', true, undefined, NaN, Infinity].map((value) => [String(value), () => [payload()[0], [{ ...payload()[1][0], value }, payload()[1][1]]]] as const),
  ])('rejects invalid %s payloads', (_name, makePayload) => {
    expect(() => parseSeries(makePayload(), 'DEU', 'inflation')).toThrow('Unexpected inflation response')
  })

  it('treats absent source-update dates as unavailable', () => {
    expect(parseSeries([{ page: 1, pages: 1, total: 0 }, []], 'DEU', 'inflation').lastUpdated).toBeNull()
  })

  it.each(['DEU', 'FRA', 'ESP'] as const)('matches every stored %s observation against the frozen CSV', (country) => {
    const read = (code: string) => JSON.parse(readFileSync(resolve('../data/raw', `world_bank_${country}_${code}_2000_2024_raw.json`), 'utf8')) as unknown
    const rows = combineSeries(country,
      parseSeries(read('FP.CPI.TOTL.ZG'), country, 'inflation'),
      parseSeries(read('SL.UEM.TOTL.ZS'), country, 'unemployment'))
    const csv = readFileSync(resolve('../data/reference/reference_2000_2024.csv'), 'utf8').trim().split(/\r?\n/).slice(1)
    const expected = csv.map((line) => line.split(',')).filter((row) => row[0] === country)
    expect(expected).toHaveLength(25)
    for (const row of rows) {
      const reference = expected.find((entry) => Number(entry[2]) === row.year)!
      expect(row.inflation).toBe(Number(reference[3]))
      expect(row.unemployment).toBe(Number(reference[4]))
    }
  })
})

describe('request behavior', () => {
  function successfulFetch() {
    return vi.fn<typeof fetch>().mockImplementation(async (url) => {
      const country = String(url).includes('/FRA/') ? 'FRA' : 'DEU'
      return response(payload(country, String(url).includes('FP.CPI') ? 'inflation' : 'unemployment'))
    })
  }

  it('shares in-flight and successful requests and separates country caches', async () => {
    const fetcher = successfulFetch()
    const load = createCountryLoader(fetcher)
    const first = load('DEU')
    expect(load('DEU')).toBe(first)
    const result = await first
    expect(result.retrievedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/)
    expect(await load('DEU')).toBe(result)
    expect(fetcher).toHaveBeenCalledTimes(2)
    await load('FRA')
    expect(fetcher).toHaveBeenCalledTimes(4)
    await load('DEU')
    expect(fetcher).toHaveBeenCalledTimes(4)
  })

  it('evicts failures so explicit retry works', async () => {
    const fetcher = successfulFetch().mockResolvedValueOnce(response(null, 503))
    const load = createCountryLoader(fetcher)
    await expect(load('DEU')).rejects.toThrow('HTTP 503')
    await expect(load('DEU')).resolves.toHaveProperty('countryCode', 'DEU')
    expect(fetcher).toHaveBeenCalledTimes(4)
  })

  it('handles invalid JSON', async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue({ ok: true, json: async () => { throw new SyntaxError() } } as unknown as Response)
    await expect(createCountryLoader(fetcher)('DEU')).rejects.toThrow('invalid JSON')
  })

  it('handles network or browser CORS errors', async () => {
    const fetcher = vi.fn<typeof fetch>().mockRejectedValue(new TypeError('Failed to fetch'))
    await expect(createCountryLoader(fetcher)('DEU')).rejects.toThrow('Could not reach')
  })

  it('aborts stalled requests after 30 seconds', async () => {
    vi.useFakeTimers()
    try {
      const fetcher = vi.fn<typeof fetch>().mockImplementation((_url, init) => new Promise((_resolve, reject) => {
        init!.signal!.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')))
      }))
      const assertion = expect(createCountryLoader(fetcher)('DEU')).rejects.toThrow('timed out after 30 seconds')
      await vi.advanceTimersByTimeAsync(30000)
      await assertion
    } finally { vi.useRealTimers() }
  })
})
