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

## Geplante Ergebnisdatei

| Spalte | Bedeutung |
|---|---|
| `country_code` | analysiertes Land |
| `start_year` | Beginn des Zeitraums |
| `end_year` | Ende des Zeitraums |
| `n` | Zahl vollständiger Beobachtungen |
| `pearson_r` | lineare Korrelation |
| `intercept_alpha` | geschätzter Achsenabschnitt |
| `slope_beta` | geschätzte Steigung |
| `r_squared` | optionales Bestimmtheitsmaß |

Die Ergebnisdatei gehört zur späteren Analysephase und wurde noch nicht erstellt.
