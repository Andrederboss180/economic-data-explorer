import { useEffect, useState } from 'react'
import { COUNTRIES, INDICATORS, loadCountry, type CountryCode, type CountryData } from './api/worldBank'

type LoadState =
  | { status: 'loading'; country: CountryCode }
  | { status: 'error'; country: CountryCode; message: string }
  | { status: 'ready'; country: CountryCode; data: CountryData }

const numberFormat = new Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

function formatValue(value: number | null) {
  return value === null ? <span className="missing">Missing</span> : numberFormat.format(value)
}

export default function App() {
  const [country, setCountry] = useState<CountryCode>('DEU')
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<LoadState>({ status: 'loading', country: 'DEU' })

  useEffect(() => {
    let active = true
    loadCountry(country).then(
      (data) => { if (active) setState({ status: 'ready', country, data }) },
      (error: unknown) => {
        if (active) setState({ status: 'error', country, message: error instanceof Error ? error.message : 'The data could not be loaded.' })
      },
    )
    // A previous country's response must never replace the current selection.
    return () => { active = false }
  }, [country, attempt])

  const current = state.country === country ? state : { status: 'loading' as const }
  const data = current.status === 'ready' ? current.data : null
  const complete = data?.observations.filter((row) => row.inflation !== null && row.unemployment !== null).length ?? 0

  return (
    <div className="page">
      <header className="topbar">
        <a className="wordmark" href="#main"><span className="brand-icon" aria-hidden="true">E</span> Economic Data Explorer</a>
        <span className="course-label">Generative AI for Data Science</span>
      </header>

      <main id="main">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">EUROPEAN ECONOMIES · 2000–2024</p>
          <h1 id="page-title">Two indicators.<br /><span>A quarter century of change.</span></h1>
          <p className="lede">Explore annual inflation and unemployment in Germany, France and Spain, directly from the World Bank.</p>
        </section>

        <section className="explorer" aria-labelledby="observations-title">
          <div className="controls">
            <div className="country-control">
              <label htmlFor="country">Country</label>
              <select id="country" value={country} onChange={(event) => setCountry(event.target.value as CountryCode)}>
                {Object.entries(COUNTRIES).map(([code, name]) => <option key={code} value={code}>{name}</option>)}
              </select>
            </div>
            <div className="period"><span>Observation period</span><strong>2000–2024</strong><small>Annual data · 25 years</small></div>
            <div className="provider"><span className="source-dot" aria-hidden="true" /> World Bank Indicators API</div>
          </div>

          <div className="data-heading">
            <div><p className="eyebrow">COUNTRY DATA</p><h2 id="observations-title">{COUNTRIES[country]} <span>/ Annual observations</span></h2></div>
            {data && <span className="count">{complete} / 25 complete pairs</span>}
          </div>

          <div role="status" aria-live="polite" className={`status ${current.status}`}>
            {current.status === 'loading' && `Loading ${COUNTRIES[country]} data from the World Bank…`}
            {data && `Data loaded · Retrieved ${new Date(data.retrievedAt).toLocaleString('en-GB', { timeZone: 'UTC' })} UTC`}
            {current.status === 'error' && 'Data unavailable'}
          </div>

          {current.status === 'error' && <div className="error-box" role="alert">
            <h3>We couldn’t load these observations.</h3><p>{current.message}</p>
            <button onClick={() => { setState({ status: 'loading', country }); setAttempt((value) => value + 1) }}>Retry World Bank request</button>
          </div>}

          {data && <>
            {complete < 25 && <p className="incomplete" role="note">
              {25 - complete} years have at least one missing value. Missing values are shown explicitly and are never replaced with zero.
              {complete === 0 && ' No complete annual pairs are available.'}
            </p>}
            <div className="table-scroll" tabIndex={0} role="region" aria-label={`${COUNTRIES[country]} annual data, scroll to see all years`}>
              <table>
                <caption>{COUNTRIES[country]}, 2000–2024. Values displayed to two decimal places.</caption>
                <thead><tr><th scope="col">Year</th><th scope="col">Inflation<small>Consumer prices · annual %</small></th><th scope="col">Unemployment<small>% of labor force · modeled ILO estimate</small></th></tr></thead>
                <tbody>{data.observations.map((row) => <tr key={row.year}><th scope="row">{row.year}</th><td>{formatValue(row.inflation)}</td><td>{formatValue(row.unemployment)}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="table-note">25 requested years · {complete} complete pairs · {25 - complete} incomplete years. Display rounding does not change the retrieved values.</p>
          </>}
        </section>

        <section className="context" aria-label="Data source and reading notes">
          <div>
            <p className="eyebrow">01 / DATA SOURCE</p><h2>Public data. Traceable sources.</h2>
            <p>Source: World Bank Indicators API. Each country uses the same two indicator definitions.</p>
            <ul className="sources">{Object.entries(INDICATORS).map(([key, indicator]) => {
              const source = data?.sources[key as keyof typeof INDICATORS]
              return <li key={key}>
                <a href={`https://data.worldbank.org/indicator/${indicator.code}`}>{indicator.label} ↗</a>
                <code>{indicator.code}</code>
                <small>World Bank last update: {source?.lastUpdated ?? 'Not available'}</small>
                {source && <a className="api-link" href={source.url}>View API response ↗</a>}
              </li>
            })}</ul>
            <p className="fine-print">The source update date describes the World Bank dataset; it is separate from this page’s retrieval time. Loaded country data is reused until you reload the page.</p>
          </div>
          <div>
            <p className="eyebrow">02 / READING THE DATA</p><h2>A starting point for research.</h2>
            <p>Annual observations are joined by country and year, in ascending year order. Missing records and null values appear as “Missing”; no values are imputed.</p>
            <p>Inflation measures annual consumer price changes. Unemployment is the share of the labor force without work, based on modeled ILO estimates.</p>
            <p>Live data may be revised and can differ from the project’s frozen reference dataset. These observations alone do not establish a causal relationship between inflation and unemployment.</p>
          </div>
        </section>
      </main>
      <footer><span>Economic Data Explorer</span><span>An AI-assisted research &amp; development project</span></footer>
    </div>
  )
}
