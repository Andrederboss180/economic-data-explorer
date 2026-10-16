import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Scatterplot, { regressionEndpoints } from '../src/components/Scatterplot'
import { calculateStatistics, type CompleteObservation } from '../src/statistics/analysis'

const makePoints = (pairs: number[][]): CompleteObservation[] => pairs.map(([unemployment, inflation], index) => ({ countryCode: 'DEU', year: 2000 + index, unemployment, inflation }))
afterEach(cleanup)

describe('scatterplot geometry and interaction', () => {
  it('limits OLS endpoints to the observed unemployment range', () => {
    const points = makePoints([[3, 7], [1, 3], [2, 5]])
    expect(regressionEndpoints(points, calculateStatistics(points))).toEqual([{ x: 1, y: 3 }, { x: 3, y: 7 }])
  })

  it('shows one accessible point per complete pair, labels/units and regression line', () => {
    const points = makePoints([[1, 3], [2, 5], [3, 7]])
    const { container } = render(<Scatterplot points={points} statistics={calculateStatistics(points)} label="Germany, 2000–2024" />)
    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(screen.getByRole('group', { name: /Germany, 2000–2024/ })).toBeTruthy()
    expect(screen.getByText('Unemployment rate (% of labor force)')).toBeTruthy()
    expect(screen.getByText('Inflation rate (annual %)')).toBeTruthy()
    expect(container.querySelector('[aria-label="OLS regression line"]')).toBeTruthy()
    expect(container.innerHTML).not.toMatch(/(?:cx|cy|x1|x2|y1|y2)="(?:NaN|Infinity)/)
  })

  it('exposes year and both values by hover, focus, keyboard and click/tap', () => {
    const points = makePoints([[1, 3], [2, 5], [3, 7]])
    const { container } = render(<Scatterplot points={points} statistics={calculateStatistics(points)} label="Synthetic test" />)
    const [first, second, third] = screen.getAllByRole('button')
    const detail = () => container.querySelector('.point-detail')!.textContent
    fireEvent.mouseEnter(first)
    expect(detail()).toContain('2000 · Inflation 3.00% · Unemployment 1.00%')
    fireEvent.focus(second)
    expect(detail()).toContain('2001 · Inflation 5.00% · Unemployment 2.00%')
    fireEvent.keyDown(second, { key: 'Escape' })
    expect(detail()).toContain('Hover, tap or Tab')
    fireEvent.keyDown(third, { key: 'Enter' })
    expect(detail()).toContain('2002 · Inflation 7.00%')
    fireEvent.keyDown(first, { key: ' ' })
    expect(detail()).toContain('2000 · Inflation 3.00%')
    fireEvent.click(second)
    expect(detail()).toContain('2001 · Inflation 5.00%')
  })

  it('supports a horizontal regression when only inflation is constant', () => {
    const points = makePoints([[1, 0.1], [2, 0.1], [3, 0.1]])
    expect(regressionEndpoints(points, calculateStatistics(points))).toEqual([{ x: 1, y: 0.1 }, { x: 3, y: 0.1 }])
  })

  it.each([[[0.1, 1], [0.1, 2], [0.1, 3]], [[1, 3]]])('omits undefined lines and gives the reason for %j', (...pairs) => {
    const points = makePoints(pairs as number[][])
    const { container } = render(<Scatterplot points={points} statistics={calculateStatistics(points)} label="Synthetic test" />)
    expect(container.querySelector('.regression-line')).toBeNull()
    expect(screen.getByText(/Regression line unavailable/)).toBeTruthy()
    expect(container.innerHTML).not.toMatch(/(?:cx|cy)="(?:NaN|Infinity)/)
  })

  it('renders an empty state without an invented chart', () => {
    render(<Scatterplot points={[]} statistics={calculateStatistics([])} label="Empty test" />)
    expect(screen.queryByRole('group')).toBeNull()
    expect(screen.getByText(/No complete annual observations/)).toBeTruthy()
  })

  it('avoids nonfinite SVG coordinates for unsupported extreme ranges', () => {
    const points = makePoints([[-1e308, 1], [1e308, 2]])
    const { container } = render(<Scatterplot points={points} statistics={calculateStatistics(points)} label="Extreme test" />)
    expect(container.querySelector('svg')).toBeNull()
    expect(screen.getByText(/supported chart range/)).toBeTruthy()
  })
})
