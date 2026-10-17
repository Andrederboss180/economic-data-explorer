import { useId, useState } from 'react'
import { type CompleteObservation, type Statistics, STATUS_TEXT } from '../statistics/analysis'

const WIDTH = 660
const HEIGHT = 400
const LEFT = 70
const RIGHT = 24
const TOP = 28
const BOTTOM = 64

function domain(values: number[]): [number, number] {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const pad = max === min ? Math.max(Math.abs(min) * 0.1, 1) : (max - min) * 0.12
  return [min - pad, max + pad]
}

export function regressionEndpoints(points: CompleteObservation[], stats: Statistics) {
  if (stats.regressionStatus !== 'ok' || stats.slope === null || stats.meanX === null || stats.meanY === null || points.length < 2) return null
  const xs = points.map((row) => row.unemployment)
  const min = Math.min(...xs)
  const max = Math.max(...xs)
  // Centered prediction avoids unnecessary cancellation in alpha + beta*x.
  const endpoints = [min, max].map((x) => ({ x, y: stats.meanY! + stats.slope! * (x - stats.meanX!) }))
  return endpoints.every((point) => Number.isFinite(point.y)) ? endpoints : null
}

export default function Scatterplot({ points, statistics, label }: { points: CompleteObservation[]; statistics: Statistics; label: string }) {
  const id = useId()
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const selected = points.find((point) => point.year === selectedYear)
  if (!points.length) return <p className="chart-empty">No complete annual observations are available to plot.</p>
  const line = regressionEndpoints(points, statistics)
  const [xMin, xMax] = domain(points.map((point) => point.unemployment))
  const [yMin, yMax] = domain([...points.map((point) => point.inflation), ...(line?.map((point) => point.y) ?? [])])
  if (![xMin, xMax, yMin, yMax, xMax - xMin, yMax - yMin].every(Number.isFinite)) {
    return <p className="chart-empty">The values exceed the supported chart range.</p>
  }
  const x = (value: number) => LEFT + (value - xMin) / (xMax - xMin) * (WIDTH - LEFT - RIGHT)
  const y = (value: number) => HEIGHT - BOTTOM - (value - yMin) / (yMax - yMin) * (HEIGHT - TOP - BOTTOM)
  const ticks = [0, 1, 2, 3, 4]

  return <figure className="scatterplot">
    <figcaption><strong>Inflation and unemployment</strong><span>{label} · {points.length} annual observations</span></figcaption>
    <div className="chart-scroll" role="region" aria-label="Scatterplot, scroll horizontally on narrow screens" tabIndex={0}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="group" aria-labelledby={`${id}-title`} aria-describedby={`${id}-desc`}>
        <title id={`${id}-title`}>{label}: inflation versus unemployment</title>
        <desc id={`${id}-desc`}>Unemployment on the horizontal axis, inflation on the vertical axis, both in percent. Each point is one complete annual observation. Hover, focus or tap a point to inspect its year and values.</desc>
        {ticks.map((tick) => {
          const xv = xMin + tick / 4 * (xMax - xMin)
          const yv = yMin + tick / 4 * (yMax - yMin)
          return <g key={tick} className="chart-grid" aria-hidden="true">
            <line x1={LEFT} x2={WIDTH - RIGHT} y1={y(yv)} y2={y(yv)} />
            <text x={LEFT - 12} y={y(yv) + 4} textAnchor="end">{yv.toFixed(1)}</text>
            <text x={x(xv)} y={HEIGHT - BOTTOM + 24} textAnchor="middle">{xv.toFixed(1)}</text>
          </g>
        })}
        <path className="chart-axis" d={`M${LEFT},${TOP}V${HEIGHT - BOTTOM}H${WIDTH - RIGHT}`} fill="none" />
        <text className="axis-label" x={(LEFT + WIDTH - RIGHT) / 2} y={HEIGHT - 12} textAnchor="middle">Unemployment rate (% of labor force)</text>
        <text className="axis-label" transform={`translate(18 ${(TOP + HEIGHT - BOTTOM) / 2}) rotate(-90)`} textAnchor="middle">Inflation rate (annual %)</text>
        {line && <line className="regression-line" aria-label="OLS regression line" x1={x(line[0].x)} y1={y(line[0].y)} x2={x(line[1].x)} y2={y(line[1].y)} />}
        {points.map((point) => {
          const detail = `${point.year}: inflation ${point.inflation.toFixed(2)}%, unemployment ${point.unemployment.toFixed(2)}%`
          return <circle key={point.year} cx={x(point.unemployment)} cy={y(point.inflation)} r={7}
            className={`chart-point ${selectedYear === point.year ? 'selected' : ''}`} tabIndex={0} role="button"
            aria-label={detail} aria-pressed={selectedYear === point.year}
            onMouseEnter={() => setSelectedYear(point.year)} onFocus={() => setSelectedYear(point.year)}
            onClick={() => setSelectedYear(point.year)} onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedYear(point.year) }
              if (event.key === 'Escape') setSelectedYear(null)
            }}><title>{detail}</title></circle>
        })}
      </svg>
    </div>
    <div className="chart-legend"><span><i className="point-key" /> Annual observation</span>{line && <span><i className="line-key" /> OLS regression · observed unemployment range</span>}</div>
    {!line && <p className="chart-note">Regression line unavailable. {STATUS_TEXT[statistics.regressionStatus]}</p>}
    <p className="point-detail" aria-live="polite">{selected
      ? `${selected.year} · Inflation ${selected.inflation.toFixed(2)}% · Unemployment ${selected.unemployment.toFixed(2)}%`
      : 'Hover, tap or Tab to a point to inspect its year and values. Scroll the chart horizontally on narrow screens.'}</p>
  </figure>
}
