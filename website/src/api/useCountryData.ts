import { useEffect, useState } from 'react'
import { loadCountry, type CountryCode, type CountryData } from './worldBank'

export type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; data: CountryData }

// One state per country is shared by its comparison row and selected-country view.
export function useCountryData(country: CountryCode) {
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<LoadState>({ status: 'loading' })
  useEffect(() => {
    let active = true
    loadCountry(country).then(
      (data) => { if (active) setState({ status: 'ready', data }) },
      (error: unknown) => {
        if (active) setState({ status: 'error', message: error instanceof Error ? error.message : 'The data could not be loaded.' })
      },
    )
    return () => { active = false }
  }, [country, attempt])

  return { state, retry: () => { setState({ status: 'loading' }); setAttempt((value) => value + 1) } }
}

export type CountryRequest = ReturnType<typeof useCountryData>
