# Datenwörterbuch

## Referenzdatensatz

| Spalte | Typ | Beispiel | Bedeutung |
|---|---|---|---|
| `country_code` | String | `DEU` | ISO-ähnlicher World-Bank-Ländercode |
| `country_name` | String | `Germany` | englischer Ländername |
| `year` | Integer | `2020` | Kalenderjahr |
| `inflation_pct` | Dezimalzahl oder leer | `2.2564981433876` | jährliche CPI-Inflation in Prozent |
| `unemployment_pct` | Dezimalzahl oder leer | `3.4` | Arbeitslosenquote in Prozent, modellierte ILO-Schätzung |
| `inflation_indicator` | String | `FP.CPI.TOTL.ZG` | Quellindikator |
| `unemployment_indicator` | String | `SL.UEM.TOTL.ZS` | Quellindikator |
| `retrieved_at` | ISO-Datum/Zeit | `2026-10-16T12:35:25Z` | Zeitpunkt des API-Abrufs in UTC |

Der aktuelle Snapshot enthält 75 Zeilen und keine leeren Messwerte. Das Schema erlaubt trotzdem leere Felder, weil ein künftiger API-Abruf `null` liefern kann. Das Abrufskript ersetzt solche Werte nicht.

## Ergebnisdatei `results/analysis_results.csv`

| Spalte | Bedeutung |
|---|---|
| `country_code` | analysiertes Land |
| `country_name` | englischer Ländername |
| `start_year` | Beginn des Zeitraums |
| `end_year` | Ende des Zeitraums |
| `n` | Zahl vollständiger Beobachtungen |
| `pearson_r` | lineare Korrelation |
| `intercept_alpha` | geschätzter Achsenabschnitt |
| `slope_beta` | geschätzte Steigung |
| `n_excluded` | fehlende Jahreszeilen plus Jahre mit unvollständigem Wertepaar |
| `missing_years` | fehlende Jahreszeilen, mit Semikolon getrennt; leer = keine |
| `incomplete_years` | Jahre mit mindestens einem leeren Messwert, mit Semikolon getrennt; leer = keine |
| `pearson_status` | `ok`, `insufficient_observations`, `constant_unemployment` oder `constant_inflation` |
| `regression_status` | `ok`, `insufficient_observations` oder `constant_unemployment` |

Die Datei enthält sechs Zeilen für drei Länder und zwei inklusive Zeiträume. x ist Arbeitslosigkeit, y ist Inflation; beta misst Prozentpunkte Inflation je Prozentpunkt Arbeitslosigkeit im deskriptiven Zusammenhang. Undefinierte Koeffizienten bleiben leer und werden über die Statusspalte erklärt. Spätere Website-Parser müssen leere Koeffizienten als fehlend behandeln, nicht als 0. Kein zusätzliches R² für diesen Minimalumfang. Provenienz und Transformation: [Analysevalidierung](../analysis/validation.md).
