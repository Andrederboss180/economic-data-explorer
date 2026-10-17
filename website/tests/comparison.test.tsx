import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { StrictMode } from 'react'
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import { COUNTRIES, createCountryLoader, INDICATORS, type CountryCode } from '../src/api/worldBank'
import { response } from './fixtures'
import { analyzeObservations } from '../src/statistics/analysis'

vi.mock('../src/api/worldBank', async (importOriginal) => {
  const original = await importOriginal<typeof import('../src/api/worldBank')>()
  return { ...original, loadCountry: vi.fn() }
})
import { loadCountry } from '../src/api/worldBank'

const mockLoad = vi.mocked(loadCountry)
const comparison = () => screen.getByRole('table', { name: /^Country comparison,/ })
const countryRow = (country: CountryCode) => within(comparison()).getByRole('rowheader', { name: new RegExp(COUNTRIES[country]) }).closest('tr')!
const annualTable = () => screen.getByRole('table', { name: /Values displayed/ })

// Stored transport responses and Python results only; no network in these tests.
function rawPayload(country: CountryCode, key: keyof typeof INDICATORS): unknown[] {
  return JSON.parse(readFileSync(resolve('../data/raw', `world_bank_${country}_${INDICATORS[key].code}_2000_2024_raw.json`), 'utf8')) as unknown[]
}
function fixtureFetch() {
  return vi.fn<typeof fetch>().mockImplementation(async (url) => {
    const country = /country\/(DEU|FRA|ESP)\//.exec(String(url))![1] as CountryCode
    return response(rawPayload(country, String(url).includes('FP.CPI') ? 'inflation' : 'unemployment'))
  })
}
function csvRows(path: string) {
  const [header, ...lines] = readFileSync(resolve(path), 'utf8').trim().split(/\r?\n/)
  const columns = header.split(',')
  return lines.map((line) => Object.fromEntries(line.split(',').map((value, index) => [columns[index], value])))
}
const expected = csvRows('../data/results/analysis_results.csv')
afterEach(() => { cleanup(); mockLoad.mockReset() })

describe('comparison from the existing cached client', () => {
  it.each([2024, 2019])('renders all three validated Python results for 2000–%s', async (endYear) => {
    const load = createCountryLoader(fixtureFetch())
    mockLoad.mockImplementation(load)
    render(<App />)
    await waitFor(() => expect(screen.getByTestId('comparison-n-ESP').textContent).toContain('25'))
    if (endYear === 2019) fireEvent.change(screen.getByLabelText('Observation period'), { target: { value: '2019' } })
    for (const baseline of expected.filter((row) => Number(row.end_year) === endYear)) {
      const country = baseline.country_code
      const data = await load(country as CountryCode)
      const { statistics } = analyzeObservations(data.observations, country as CountryCode, endYear as 2019 | 2024)
      for (const [actual, saved] of [[statistics.r!, Number(baseline.pearson_r)], [statistics.slope!, Number(baseline.slope_beta)], [statistics.intercept!, Number(baseline.intercept_alpha)]]) {
        expect(Math.abs(actual - saved)).toBeLessThanOrEqual(1e-12 * Math.max(1, Math.abs(saved)))
      }
      expect(statistics.n).toBe(Number(baseline.n))
      expect(screen.getByTestId(`comparison-r-${country}`).firstChild!.textContent).toBe(Number(baseline.pearson_r).toFixed(3))
      expect(screen.getByTestId(`comparison-slope-${country}`).firstChild!.textContent).toBe(Number(baseline.slope_beta).toFixed(3))
      expect(screen.getByTestId(`comparison-n-${country}`).firstChild!.textContent).toBe(baseline.n)
    }
    expect(within(comparison()).getAllByRole('row')).toHaveLength(4)
    expect(within(countryRow('FRA')).getByText(/2026-10-08/)).toBeTruthy()
    expect(within(countryRow('ESP')).getByRole('link', { name: 'Inflation API for Spain' }).getAttribute('href')).toContain('/ESP/')
  })

  it('uses six HTTP calls total under StrictMode, period/country changes and rerenders', async () => {
    const fetcher = fixtureFetch()
    mockLoad.mockImplementation(createCountryLoader(fetcher))
    const { rerender } = render(<StrictMode><App /></StrictMode>)
    await screen.findByTestId('comparison-n-ESP')
    expect(fetcher).toHaveBeenCalledTimes(6)
    fireEvent.change(screen.getByLabelText('Observation period'), { target: { value: '2019' } })
    fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'FRA' } })
    expect(countryRow('FRA').className).toBe('selected-country')
    expect(countryRow('DEU').className).not.toBe('selected-country')
    expect(within(countryRow('FRA')).getByText('Selected')).toBeTruthy()
    expect(annualTable().textContent).toContain('France, 2000–2019')
    expect(screen.getByTestId('pearson-r').textContent).toBe(screen.getByTestId('comparison-r-FRA').textContent)
    fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'ESP' } })
    fireEvent.change(screen.getByLabelText('Observation period'), { target: { value: '2024' } })
    rerender(<StrictMode><App /></StrictMode>)
    expect(fetcher).toHaveBeenCalledTimes(6)
  })

  it('keeps successful rows while another country is loading or fails; retries only that country', async () => {
    const goodFetch = fixtureFetch()
    const rejectFrance: ((error: Error) => void)[] = []
    const fetcher = vi.fn<typeof fetch>().mockImplementation((url, init) => String(url).includes('/FRA/')
      ? new Promise((_resolve, reject) => { rejectFrance.push(reject) }) : goodFetch(url, init))
    mockLoad.mockImplementation(createCountryLoader(fetcher))
    render(<App />)
    await screen.findByTestId('comparison-n-ESP')
    expect(countryRow('FRA').textContent).toContain('Loading France')
    expect(countryRow('FRA').getAttribute('aria-busy')).toBe('true')
    await act(async () => { rejectFrance.forEach((reject) => reject(new TypeError('network unavailable'))) })
    expect(countryRow('FRA').textContent).toContain('Could not reach')
    expect(screen.getByTestId('comparison-n-DEU').firstChild!.textContent).toBe('25')
    expect(screen.getByTestId('comparison-n-ESP').firstChild!.textContent).toBe('25')
    const germanyValue = screen.getByTestId('comparison-r-DEU').textContent
    fetcher.mockImplementation(goodFetch)
    fireEvent.click(screen.getByRole('button', { name: 'Retry France data' }))
    await screen.findByTestId('comparison-n-FRA')
    expect(fetcher).toHaveBeenCalledTimes(8)
    expect(screen.getByTestId('comparison-r-DEU').textContent).toBe(germanyValue)
    expect(screen.getByTestId('comparison-n-ESP')).toBeTruthy()
  })

  it('shares failed selected-country retries between comparison and main view', async () => {
    const fetcher = fixtureFetch().mockResolvedValueOnce(response(null, 503))
    mockLoad.mockImplementation(createCountryLoader(fetcher))
    render(<App />)
    await screen.findByRole('alert')
    await screen.findByTestId('comparison-n-ESP')
    expect(screen.queryByTestId('pearson-r')).toBeNull()
    expect(countryRow('DEU').textContent).toContain('HTTP 503')
    fireEvent.click(screen.getByRole('button', { name: 'Retry Germany data' }))
    await screen.findByTestId('pearson-r')
    expect(screen.getByTestId('comparison-n-DEU').firstChild!.textContent).toBe('25')
    expect(fetcher).toHaveBeenCalledTimes(8)
  })

  it('handles missing/empty data and unavailable source dates without inventing values', async () => {
    const fetcher = vi.fn<typeof fetch>().mockImplementation(async (url) => {
      const country = /country\/(DEU|FRA|ESP)\//.exec(String(url))![1] as CountryCode
      if (country === 'FRA') return response([{ page: 1, pages: 0, total: 0 }, null])
      const key = String(url).includes('FP.CPI') ? 'inflation' : 'unemployment'
      const payload = rawPayload(country, key)
      if (country === 'DEU' && key === 'inflation') {
        const rows = payload[1] as { date: string; value: number | null }[]
        rows.find((row) => row.date === '2000')!.value = null
        delete (payload[0] as Record<string, unknown>).lastupdated
      }
      return response(payload)
    })
    mockLoad.mockImplementation(createCountryLoader(fetcher))
    render(<App />)
    await screen.findByTestId('comparison-n-ESP')
    expect(screen.getByTestId('comparison-n-DEU').firstChild!.textContent).toBe('24')
    expect(countryRow('DEU').textContent).toContain('inflation not available')
    expect(screen.getByTestId('comparison-n-FRA').firstChild!.textContent).toBe('0')
    expect(screen.getByTestId('comparison-r-FRA').textContent).toContain('Not available')
    expect(countryRow('FRA').textContent).toContain('At least two complete')
    fireEvent.change(screen.getByLabelText('Observation period'), { target: { value: '2019' } })
    expect(screen.getByTestId('comparison-n-DEU').firstChild!.textContent).toBe('19')
    expect(fetcher).toHaveBeenCalledTimes(6)
  })
})
