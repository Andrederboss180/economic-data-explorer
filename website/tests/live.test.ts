import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { expect, it } from 'vitest'
import { createCountryLoader } from '../src/api/worldBank'

// Explicit opt-in network check. Never rewrites the reproducible baseline.
it('compares selected live values for all three countries against the verified CSV', async () => {
  const csv = readFileSync(resolve('../data/reference/reference_2000_2024.csv'), 'utf8').trim().split(/\r?\n/).slice(1).map((line) => line.split(','))
  const load = createCountryLoader()
  const results = await Promise.all((['DEU', 'FRA', 'ESP'] as const).map((country) => load(country)))
  const report = []
  for (const data of results) {
    expect(data.observations.filter((row) => row.inflation !== null && row.unemployment !== null)).toHaveLength(25)
    for (const year of [2000, 2019, 2024]) {
      const live = data.observations.find((row) => row.year === year)!
      const reference = csv.find((row) => row[0] === data.countryCode && Number(row[2]) === year)!
      for (const [key, column] of [['inflation', 3], ['unemployment', 4]] as const) {
        const baseline = Number(reference[column])
        expect(live[key]).not.toBeNull()
        expect(Math.abs(live[key]! - baseline)).toBeLessThanOrEqual(1e-12 * Math.max(1, Math.abs(baseline)))
      }
      report.push({ country: data.countryCode, year, inflation: live.inflation, unemployment: live.unemployment })
    }
    console.info(JSON.stringify({ country: data.countryCode, retrievedAt: data.retrievedAt, completePairs: 25, inflationLastUpdated: data.sources.inflation.lastUpdated, unemploymentLastUpdated: data.sources.unemployment.lastUpdated }))
  }
  console.table(report)
})
