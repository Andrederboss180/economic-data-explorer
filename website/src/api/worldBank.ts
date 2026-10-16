export const COUNTRIES = { DEU: 'Germany', FRA: 'France', ESP: 'Spain' } as const
export type CountryCode = keyof typeof COUNTRIES

export const INDICATORS = {
  inflation: { code: 'FP.CPI.TOTL.ZG', label: 'Inflation, consumer prices (annual %)' },
  unemployment: {
    code: 'SL.UEM.TOTL.ZS',
    label: 'Unemployment, total (% of total labor force) (modeled ILO estimate)',
  },
} as const
type IndicatorKey = keyof typeof INDICATORS

export const YEARS = Array.from({ length: 25 }, (_, index) => 2000 + index)

export interface Observation {
  countryCode: CountryCode
  year: number
  inflation: number | null
  unemployment: number | null
}

export interface Series {
  values: Map<number, number | null>
  lastUpdated: string | null
  url: string
}

export interface CountryData {
  countryCode: CountryCode
  observations: Observation[]
  sources: Record<IndicatorKey, Series>
  retrievedAt: string
}

export function buildUrl(country: CountryCode, indicator: IndicatorKey): string {
  return `https://api.worldbank.org/v2/country/${country}/indicator/${INDICATORS[indicator].code}?format=json&date=2000:2024&per_page=100`
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function parseSeries(payload: unknown, country: CountryCode, key: IndicatorKey): Series {
  const invalid = (detail: string): never => {
    throw new Error(`Unexpected ${key} response: ${detail}.`)
  }
  if (!Array.isArray(payload) || payload.length !== 2) return invalid('expected metadata and observations')
  const [metadata, rawRows] = payload as unknown[]
  if (!isRecord(metadata)) return invalid('missing metadata')
  // A legitimate empty response may use null instead of an observation array.
  const rows = rawRows === null && metadata.total === 0 ? [] : rawRows
  if (!Array.isArray(rows)) return invalid('missing observation list')
  if (metadata.page !== 1 || (metadata.pages !== 1 && !(rows.length === 0 && metadata.pages === 0))) {
    return invalid('expected a single complete page')
  }
  if (metadata.total !== rows.length) return invalid('total does not match record count')

  const values = new Map<number, number | null>()
  for (const row of rows as unknown[]) {
    if (!isRecord(row)) return invalid('invalid observation')
    if (row.countryiso3code !== country || !isRecord(row.country) || row.country.value !== COUNTRIES[country]) {
      return invalid('country identity does not match')
    }
    if (!isRecord(row.indicator) || row.indicator.id !== INDICATORS[key].code) {
      return invalid('indicator does not match')
    }
    if (typeof row.date !== 'string' || !/^\d{4}$/.test(row.date)) return invalid('invalid year')
    const year = Number(row.date)
    if (!YEARS.includes(year)) return invalid('year outside 2000–2024')
    if (values.has(year)) return invalid(`duplicate year ${year}`)
    const value = row.value
    if (value !== null && (typeof value !== 'number' || !Number.isFinite(value))) {
      return invalid(`non-numeric value for ${year}`)
    }
    values.set(year, value)
  }
  const lastUpdated = typeof metadata.lastupdated === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(metadata.lastupdated)
    ? metadata.lastupdated : null
  return { values, lastUpdated, url: buildUrl(country, key) }
}

export function combineSeries(country: CountryCode, inflation: Series, unemployment: Series): Observation[] {
  // Join by country and year, never by response position. Preserve every requested year.
  return YEARS.map((year) => ({
    countryCode: country,
    year,
    inflation: inflation.values.get(year) ?? null,
    unemployment: unemployment.values.get(year) ?? null,
  }))
}

async function fetchSeries(country: CountryCode, key: IndicatorKey, fetcher: typeof fetch): Promise<Series> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 30000)
  try {
    const response = await fetcher(buildUrl(country, key), { signal: controller.signal })
    if (!response.ok) throw new Error(`World Bank returned HTTP ${response.status} for ${key}.`)
    let payload: unknown
    try {
      payload = await response.json()
    } catch (error) {
      throw new Error(`World Bank returned invalid JSON for ${key}.`, { cause: error })
    }
    return parseSeries(payload, country, key)
  } catch (error) {
    if (controller.signal.aborted) throw new Error(`The ${key} request timed out after 30 seconds. Please retry.`, { cause: error })
    if (error instanceof TypeError) throw new Error(`Could not reach the World Bank ${key} API. Check your connection and retry.`, { cause: error })
    throw error
  } finally {
    clearTimeout(timer)
  }
}

export function createCountryLoader(fetcher: typeof fetch = (input, init) => fetch(input, init)) {
  // Cache in-flight promises too: React StrictMode and quick return visits share requests.
  const cache = new Map<CountryCode, Promise<CountryData>>()
  return function load(country: CountryCode): Promise<CountryData> {
    const cached = cache.get(country)
    if (cached) return cached
    const request = Promise.all([
      fetchSeries(country, 'inflation', fetcher),
      fetchSeries(country, 'unemployment', fetcher),
    ]).then(([inflation, unemployment]): CountryData => ({
      countryCode: country,
      observations: combineSeries(country, inflation, unemployment),
      sources: { inflation, unemployment },
      retrievedAt: new Date().toISOString(),
    })).catch((error: unknown) => {
      cache.delete(country)
      throw error
    })
    cache.set(country, request)
    return request
  }
}

export const loadCountry = createCountryLoader()
