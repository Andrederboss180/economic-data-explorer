import { COUNTRIES, type CountryCode } from '../api/worldBank'
import { type CountryRequest } from '../api/useCountryData'
import { analyzeObservations, STATUS_TEXT, type EndYear } from '../statistics/analysis'

export default function CountryComparison({ requests, selectedCountry, endYear }: {
  requests: Record<CountryCode, CountryRequest>
  selectedCountry: CountryCode
  endYear: EndYear
}) {
  return <section className="explorer comparison" aria-labelledby="comparison-title">
    <div className="data-heading"><div>
      <p className="eyebrow">SAME PERIOD · SAME DEFINITIONS</p>
      <h2 id="comparison-title">Country comparison <span>/ 2000–{endYear}</span></h2>
    </div></div>
    <p className="comparison-note">Compare each country separately using complete annual pairs. The country and period controls above also apply here; changing country highlights its row.</p>
    <div className="comparison-scroll" role="region" tabIndex={0} aria-label="Country comparison table, scroll horizontally on narrow screens">
      <table>
        <caption>Country comparison, 2000–{endYear}. Correlation and slope rounded to three decimal places.</caption>
        <thead><tr><th scope="col">Country</th><th scope="col">Pearson r</th><th scope="col">OLS slope β</th><th scope="col">Complete pairs n</th></tr></thead>
        <tbody aria-live="polite">{(Object.keys(COUNTRIES) as CountryCode[]).map((code) => {
          const { state, retry } = requests[code]
          const analysis = state.status === 'ready' ? analyzeObservations(state.data.observations, code, endYear) : null
          return <tr key={code} className={selectedCountry === code ? 'selected-country' : ''} aria-busy={state.status === 'loading'}>
            <th scope="row">{COUNTRIES[code]} {selectedCountry === code && <span className="selected-label">Selected</span>}
              {state.status === 'ready' && <div className="comparison-source">
                <small>Source updates: inflation {state.data.sources.inflation.lastUpdated ?? 'not available'};<br /> unemployment {state.data.sources.unemployment.lastUpdated ?? 'not available'}</small>
                <a href={state.data.sources.inflation.url} aria-label={`Inflation API for ${COUNTRIES[code]}`}>Inflation API</a> · <a href={state.data.sources.unemployment.url} aria-label={`Unemployment API for ${COUNTRIES[code]}`}>Unemployment API</a>
              </div>}
            </th>
            {state.status === 'loading' && <td colSpan={3} className="comparison-message">Loading {COUNTRIES[code]} data from the World Bank…</td>}
            {state.status === 'error' && <td colSpan={3} className="comparison-message error">
              <p>{state.message}</p><button onClick={retry}>Retry {COUNTRIES[code]} data</button>
            </td>}
            {analysis && <>
              <td data-testid={`comparison-r-${code}`}>{analysis.statistics.r?.toFixed(3) ?? 'Not available'}
                {analysis.statistics.r === null && <small>{STATUS_TEXT[analysis.statistics.correlationStatus]}</small>}</td>
              <td data-testid={`comparison-slope-${code}`}>{analysis.statistics.slope?.toFixed(3) ?? 'Not available'}
                {analysis.statistics.slope === null && <small>{STATUS_TEXT[analysis.statistics.regressionStatus]}</small>}</td>
              <td data-testid={`comparison-n-${code}`}>{analysis.statistics.n}
                <small>{analysis.expectedYears - analysis.statistics.n} incomplete years</small></td>
            </>}
          </tr>
        })}</tbody>
      </table>
    </div>
    <p className="comparison-note">Source: World Bank Indicators API. r and β describe associations, not causal effects. β: percentage points of inflation per percentage point of unemployment. Source update dates may differ by country or indicator; live values may be revised.</p>
  </section>
}
