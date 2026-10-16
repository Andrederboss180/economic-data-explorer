import { StrictMode } from 'react'
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import { createCountryLoader, type CountryData } from '../src/api/worldBank'

vi.mock('../src/api/worldBank', async (importOriginal) => {
  const original = await importOriginal<typeof import('../src/api/worldBank')>()
  return { ...original, loadCountry: vi.fn() }
})
import { loadCountry } from '../src/api/worldBank'
import { payload, response } from './fixtures'

const mockLoad = vi.mocked(loadCountry)
const makeData = (country: 'DEU' | 'FRA' | 'ESP') => createCountryLoader(async (url) => response(payload(country, String(url).includes('FP.CPI') ? 'inflation' : 'unemployment')))(country)
afterEach(() => { cleanup(); mockLoad.mockReset() })

describe('website states', () => {
  it('shows loading, data, missing values, source dates and counts', async () => {
    mockLoad.mockReturnValue(makeData('DEU'))
    render(<App />)
    expect(screen.getByRole('status').textContent).toContain('Loading Germany')
    await screen.findByRole('table')
    expect(screen.getAllByRole('row')).toHaveLength(26)
    expect(screen.getAllByText('Missing')).toHaveLength(46)
    expect(screen.getByText('2 / 25 complete pairs')).toBeTruthy()
    expect(screen.getAllByText('World Bank last update: 2026-10-08')).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /View API response/ })).toHaveLength(2)
  })

  it('clears old data on selection and ignores a slower previous country response', async () => {
    let resolveGermany!: (data: CountryData) => void
    mockLoad.mockImplementation((country) => country === 'DEU' ? new Promise((resolve) => { resolveGermany = resolve }) : makeData('FRA'))
    render(<App />)
    fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'FRA' } })
    expect(screen.getByRole('status').textContent).toContain('Loading France')
    expect(screen.queryByRole('table')).toBeNull()
    await screen.findByRole('table')
    await act(async () => resolveGermany(await makeData('DEU')))
    expect(screen.getByRole('table').textContent).toContain('France, 2000–2024')
  })

  it('shows errors without stale observations and allows retry', async () => {
    mockLoad.mockImplementationOnce(() => makeData('DEU')).mockRejectedValueOnce(new Error('World Bank returned HTTP 503.')).mockImplementationOnce(() => makeData('ESP'))
    render(<App />)
    await screen.findByRole('table')
    fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'ESP' } })
    await screen.findByRole('alert')
    expect(screen.queryByRole('table')).toBeNull()
    expect(screen.getByRole('alert').textContent).toContain('HTTP 503')
    fireEvent.click(screen.getByRole('button', { name: 'Retry World Bank request' }))
    await screen.findByRole('table')
    expect(screen.getByRole('table').textContent).toContain('Spain, 2000–2024')
  })

  it('shows all-missing data as unavailable pairs rather than zero observations', async () => {
    const data = await makeData('DEU')
    data.observations = data.observations.map((row) => ({ ...row, inflation: null, unemployment: null }))
    mockLoad.mockResolvedValue(data)
    render(<App />)
    await screen.findByRole('table')
    expect(screen.getByText('0 / 25 complete pairs')).toBeTruthy()
    expect(screen.getAllByText('Missing')).toHaveLength(50)
    expect(screen.getByRole('note').textContent).toContain('No complete annual pairs')
  })

  it('does not repeat HTTP calls under StrictMode, rerendering or return visits', async () => {
    const fetcher = vi.fn<typeof fetch>().mockImplementation(async (url) => {
      const country = String(url).includes('/FRA/') ? 'FRA' : 'DEU'
      return response(payload(country, String(url).includes('FP.CPI') ? 'inflation' : 'unemployment'))
    })
    mockLoad.mockImplementation(createCountryLoader(fetcher))
    const { rerender } = render(<StrictMode><App /></StrictMode>)
    await screen.findByRole('table')
    rerender(<StrictMode><App /></StrictMode>)
    expect(fetcher).toHaveBeenCalledTimes(2)
    fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'FRA' } })
    await waitFor(() => expect(screen.getByRole('table').textContent).toContain('France, 2000–2024'))
    fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'DEU' } })
    await waitFor(() => expect(screen.getByRole('table').textContent).toContain('Germany, 2000–2024'))
    expect(fetcher).toHaveBeenCalledTimes(4)
  })
})
