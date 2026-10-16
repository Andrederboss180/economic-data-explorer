import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { type CountryCode, type Observation } from '../src/api/worldBank'
import { analyzeObservations, calculateStatistics, type CompleteObservation, type EndYear } from '../src/statistics/analysis'

export const pointsFromPairs = (pairs: number[][]): CompleteObservation[] => pairs.map(([unemployment, inflation], index) => ({ countryCode: 'DEU', year: 2000 + index, unemployment, inflation }))

function close(actual: number | null, expected: number) {
  expect(actual).not.toBeNull()
  expect(Math.abs(actual! - expected)).toBeLessThanOrEqual(1e-12 * Math.max(1, Math.abs(expected)))
}

describe('known synthetic solutions, not economic observations', () => {
  it.each([
    { pairs: [[1, 3], [2, 5], [3, 7]], r: 1, slope: 2, intercept: 1 },
    { pairs: [[1, 5], [2, 3], [3, 1]], r: -1, slope: -2, intercept: 7 },
    { pairs: [[-1, 1], [0, -2], [1, 1]], r: 0, slope: 0, intercept: 0 },
    { pairs: [[1, 1], [2, 1], [3, 4]], r: Math.sqrt(3) / 2, slope: 1.5, intercept: -1 },
  ])('matches the analytical solution $r / $slope / $intercept', ({ pairs, r, slope, intercept }) => {
    const stats = calculateStatistics(pointsFromPairs(pairs))
    close(stats.r, r); close(stats.slope, slope); close(stats.intercept, intercept)
    expect(stats.n).toBe(3)
  })

  it.each([{ pairs: [] }, { pairs: [[1, 3]] }])('leaves too-small samples undefined: $pairs', ({ pairs }) => {
    const stats = calculateStatistics(pointsFromPairs(pairs))
    expect(stats.r).toBeNull()
    expect(stats.slope).toBeNull()
    expect(stats.intercept).toBeNull()
    expect(stats.regressionStatus).toBe('insufficient_observations')
  })

  it.each([1, 0.1])('detects constant unemployment %s before averaging', (value) => {
    const stats = calculateStatistics(pointsFromPairs([[value, 1], [value, 2], [value, 3]]))
    expect(stats.r).toBeNull(); expect(stats.slope).toBeNull()
    expect(stats.correlationStatus).toBe('constant_unemployment')
  })

  it.each([1, 0.1])('keeps a horizontal regression but undefined r for constant inflation %s', (value) => {
    const stats = calculateStatistics(pointsFromPairs([[1, value], [2, value], [3, value]]))
    expect(stats.r).toBeNull(); expect(stats.slope).toBe(0); expect(stats.intercept).toBe(value)
    expect(stats.regressionStatus).toBe('ok'); expect(stats.correlationStatus).toBe('constant_inflation')
  })

  it('retains small variation around a large floating-point offset', () => {
    const stats = calculateStatistics(pointsFromPairs([[1e12 + 1, 3], [1e12 + 2, 5], [1e12 + 3, 7]]))
    close(stats.r, 1); close(stats.slope, 2); close(stats.intercept, 1 - 2e12)
  })

  it('does not mistake small decimal variation for a constant series', () => {
    const pairs = [0.1, 0.10000001, 0.10000002].map((x) => [x, 2 * x])
    const stats = calculateStatistics(pointsFromPairs(pairs))
    close(stats.r, 1); close(stats.slope, 2); close(stats.intercept, 0)
  })

  it('returns explicit numerical-range status rather than NaN/Infinity', () => {
    const stats = calculateStatistics(pointsFromPairs([[1e200, 1], [2e200, 2]]))
    expect(stats.r).toBeNull(); expect(stats.slope).toBeNull()
    expect(stats.regressionStatus).toBe('numerical_range')
  })

  it.each([NaN, Infinity])('rejects a nonfinite complete input: %s', (value) => {
    expect(() => calculateStatistics(pointsFromPairs([[1, value], [2, 3]]))).toThrow('finite')
  })

  it('filters inclusively by country/period and counts only complete pairs without mutating inputs', () => {
    const observations: Observation[] = [
      ...pointsFromPairs([[1, 3], [2, 5]]),
      { countryCode: 'DEU', year: 2019, unemployment: 3, inflation: 7 },
      { countryCode: 'DEU', year: 2020, unemployment: 4, inflation: 0 },
      { countryCode: 'DEU', year: 2002, unemployment: null, inflation: 1 },
      { countryCode: 'DEU', year: 2003, unemployment: 2, inflation: null },
      { countryCode: 'FRA', year: 2000, unemployment: 100, inflation: 100 },
      { countryCode: 'DEU', year: 1999, unemployment: 100, inflation: 100 },
    ]
    observations.reverse()
    const before = structuredClone(observations)
    const analysis = analyzeObservations(observations, 'DEU', 2019)
    expect(analysis.rows.map((row) => row.year)).toEqual([2000, 2001, 2002, 2003, 2019])
    expect(analysis.statistics.n).toBe(3)
    expect(analysis.expectedYears - analysis.statistics.n).toBe(17)
    close(analysis.statistics.slope, 2)
    expect(observations).toEqual(before)
    expect(analyzeObservations(observations, 'DEU', 2024).statistics.n).toBe(4)
  })
})

function csvRows(path: string) {
  const [header, ...lines] = readFileSync(resolve(path), 'utf8').trim().split(/\r?\n/)
  const columns = header.split(',')
  return lines.map((line) => Object.fromEntries(line.split(',').map((value, index) => [columns[index], value])))
}

describe('frozen Step 5 Python results, independent of the live API', () => {
  const observations: Observation[] = csvRows('../data/reference/reference_2000_2024.csv').map((row) => ({
    countryCode: row.country_code as CountryCode, year: Number(row.year),
    inflation: row.inflation_pct === '' ? null : Number(row.inflation_pct),
    unemployment: row.unemployment_pct === '' ? null : Number(row.unemployment_pct),
  }))
  const expected = csvRows('../data/results/analysis_results.csv')

  it('covers exactly six expected country-period groups', () => {
    expect(expected.map((row) => `${row.country_code}/${row.end_year}`).sort()).toEqual(['DEU/2019', 'DEU/2024', 'ESP/2019', 'ESP/2024', 'FRA/2019', 'FRA/2024'])
  })

  it.each(expected)('matches Python for $country_code 2000–$end_year', (reference) => {
    const { statistics: stats, points, expectedYears } = analyzeObservations(observations, reference.country_code as CountryCode, Number(reference.end_year) as EndYear)
    close(stats.r, Number(reference.pearson_r))
    close(stats.slope, Number(reference.slope_beta))
    close(stats.intercept, Number(reference.intercept_alpha))
    expect(stats.n).toBe(Number(reference.n))
    expect(points).toHaveLength(stats.n)
    expect(expectedYears - stats.n).toBe(Number(reference.n_excluded))
    expect(stats.correlationStatus).toBe(reference.pearson_status)
    expect(stats.regressionStatus).toBe(reference.regression_status)
    console.info(JSON.stringify({ country: reference.country_code, endYear: Number(reference.end_year), n: stats.n,
      r: stats.r, slope: stats.slope, intercept: stats.intercept,
      absoluteError: { r: Math.abs(stats.r! - Number(reference.pearson_r)), slope: Math.abs(stats.slope! - Number(reference.slope_beta)), intercept: Math.abs(stats.intercept! - Number(reference.intercept_alpha)) } }))
  })
})
