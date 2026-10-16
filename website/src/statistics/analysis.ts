import { type CountryCode, type Observation } from '../api/worldBank'

export const PERIODS = [2024, 2019] as const
export type EndYear = typeof PERIODS[number]
export type CompleteObservation = Observation & { inflation: number; unemployment: number }
type Status = 'ok' | 'insufficient_observations' | 'constant_unemployment' | 'constant_inflation' | 'numerical_range'

export interface Statistics {
  n: number
  r: number | null
  slope: number | null
  intercept: number | null
  meanX: number | null
  meanY: number | null
  correlationStatus: Status
  regressionStatus: Status
}

// Neumaier compensated summation reduces rounding loss in centered sums.
function sum(values: number[]): number {
  let total = 0
  let correction = 0
  for (const value of values) {
    const next = total + value
    correction += Math.abs(total) >= Math.abs(value) ? (total - next) + value : (value - next) + total
    total = next
  }
  return total + correction
}

export function calculateStatistics(points: CompleteObservation[]): Statistics {
  const n = points.length
  const result: Statistics = {
    n, r: null, slope: null, intercept: null, meanX: null, meanY: null,
    correlationStatus: 'insufficient_observations', regressionStatus: 'insufficient_observations',
  }
  if (points.some((row) => !Number.isFinite(row.inflation) || !Number.isFinite(row.unemployment))) {
    throw new Error('Statistics require finite complete observations.')
  }
  if (n < 2) return result
  const x = points.map((row) => row.unemployment)
  const y = points.map((row) => row.inflation)
  // Test actual equality before averaging: constant decimal inputs can leave rounding residuals.
  if (x.every((value) => value === x[0])) {
    return { ...result, correlationStatus: 'constant_unemployment', regressionStatus: 'constant_unemployment' }
  }
  if (y.every((value) => value === y[0])) {
    const meanX = x[0] + sum(x.map((value) => value - x[0])) / n
    if (!Number.isFinite(meanX)) return { ...result, correlationStatus: 'numerical_range', regressionStatus: 'numerical_range' }
    return { ...result, slope: 0, intercept: y[0], meanX, meanY: y[0], correlationStatus: 'constant_inflation', regressionStatus: 'ok' }
  }
  // Center relative to an observed value first to retain small variation on large offsets.
  const offsetX = x.map((value) => value - x[0])
  const offsetY = y.map((value) => value - y[0])
  const meanOffsetX = sum(offsetX) / n
  const meanOffsetY = sum(offsetY) / n
  const dx = offsetX.map((value) => value - meanOffsetX)
  const dy = offsetY.map((value) => value - meanOffsetY)
  const xx = sum(dx.map((value) => value * value))
  const yy = sum(dy.map((value) => value * value))
  const xy = sum(dx.map((value, index) => value * dy[index]))
  const meanX = x[0] + meanOffsetX
  const meanY = y[0] + meanOffsetY
  const slope = xy / xx
  const intercept = meanY - slope * meanX
  const r = xy / Math.sqrt(xx) / Math.sqrt(yy)
  if (xx <= 0 || yy <= 0 || ![xx, yy, xy, meanX, meanY, slope, intercept, r].every(Number.isFinite)) {
    return { ...result, correlationStatus: 'numerical_range', regressionStatus: 'numerical_range' }
  }
  return { n, r: Math.max(-1, Math.min(1, r)), slope, intercept, meanX, meanY, correlationStatus: 'ok', regressionStatus: 'ok' }
}

export function analyzeObservations(observations: Observation[], country: CountryCode, endYear: EndYear) {
  const rows = observations.filter((row) => row.countryCode === country && row.year >= 2000 && row.year <= endYear)
    .sort((a, b) => a.year - b.year)
  const points = rows.filter((row): row is CompleteObservation => row.inflation !== null && row.unemployment !== null)
  return { rows, points, statistics: calculateStatistics(points), expectedYears: endYear - 2000 + 1 }
}

export const STATUS_TEXT: Record<Status, string> = {
  ok: '',
  insufficient_observations: 'At least two complete observations are needed.',
  constant_unemployment: 'Unemployment has no variation in this period.',
  constant_inflation: 'Inflation has no variation in this period; correlation is undefined.',
  numerical_range: 'The values exceed the supported numerical range.',
}
