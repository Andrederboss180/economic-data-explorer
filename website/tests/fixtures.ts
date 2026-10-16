import { COUNTRIES, INDICATORS, type CountryCode } from '../src/api/worldBank'

// Synthetic transport fixtures only; these are not economic observations.
export function payload(country: CountryCode = 'DEU', key: keyof typeof INDICATORS = 'inflation') {
  return [
    { page: 1, pages: 1, total: 2, lastupdated: '2026-10-08' },
    [2001, 2000].map((year) => ({
      countryiso3code: country,
      country: { value: COUNTRIES[country] },
      indicator: { id: INDICATORS[key].code },
      date: String(year),
      value: year === 2000 ? 0 : -1.25,
    })),
  ] as const
}

export function response(value: unknown, status = 200): Response {
  return { ok: status === 200, status, json: async () => value } as Response
}
