# Datenwörterbuch

## Geplanter Referenzdatensatz

| Spalte | Typ | Beispiel | Bedeutung |
|---|---|---|---|
| `country_code` | String | `DEU` | ISO-ähnlicher World-Bank-Ländercode |
| `country_name` | String | `Germany` | englischer Ländername |
| `year` | Integer | `2020` | Kalenderjahr |
| `inflation_pct` | Number oder leer | noch offen | jährliche CPI-Inflation in Prozent |
| `unemployment_pct` | Number oder leer | noch offen | Arbeitslosenquote in Prozent |
| `inflation_indicator` | String | `FP.CPI.TOTL.ZG` | Quellindikator |
| `unemployment_indicator` | String | `SL.UEM.TOTL.ZS` | Quellindikator |
| `retrieved_at` | ISO-Datum/Zeit | noch offen | Zeitpunkt des API-Abrufs |

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

Die Spalten werden beim Implementieren gegen die tatsächlichen API-Metadaten geprüft und bei Bedarf angepasst.
