# Daten

## Ordner

| Pfad | Zweck | Git-Strategie |
|---|---|---|
| `raw/` | Unveränderte API-Antworten eines dokumentierten Abrufs | Kleiner Referenzabruf wird versioniert |
| `reference/` | Eingefrorener, präsentationsrelevanter CSV-Datensatz plus Metadaten | Wird versioniert |
| `processed/` | Verbundene und bereinigte Länder-Jahr-Daten | Wird versioniert, wenn reproduzierbar erzeugt |
| `results/` | Berechnete Kennzahlen und Vergleichstabellen | Wird versioniert, wenn reproduzierbar erzeugt |

Die Website verwendet grundsätzlich Live-Daten. Der Referenzdatensatz ermöglicht Tests, Offline-Demo und exakte Reproduktion der Präsentationszahlen.

## Namenskonvention

- `world_bank_DEU_FP.CPI.TOTL.ZG_2000_2024_raw.json`
- `world_bank_DEU_SL.UEM.TOTL.ZS_2000_2024_raw.json`
- entsprechende Dateien für `FRA` und `ESP`
- `reference_2000_2024.csv`
- `analysis_results.csv`
- `world_bank_2000_2024_metadata.json`

## Pflichtmetadaten

- Abrufzeitpunkt mit Zeitzone
- vollständige API-URLs
- Indikatorcodes und Klartextnamen
- Länder- und Zeitraumfilter
- verwendete Skript- oder Commit-Version
- Zahl fehlender und vollständiger Beobachtungen

## Aktueller Referenzabruf

Der Abruf vom `2026-10-16T12:35:25Z` enthält sechs unveränderte JSON-Antworten in `raw/`, die Provenienzdatei `raw/world_bank_2000_2024_metadata.json` und 75 kombinierte Länder-Jahr-Zeilen in `reference/reference_2000_2024.csv`.

Alle sechs Antworten bestanden die Struktur-, Identitäts-, Jahres-, Duplikat- und Vollständigkeitsprüfungen. Sie enthalten insgesamt 150 Quellbeobachtungen und keine `null`-Werte. Das World-Bank-Metadatenfeld `lastupdated` lautet in allen Antworten `2026-10-08`.

Der Abruf lässt sich mit dem dokumentierten Befehl in [API.md](API.md) wiederholen. Die vorhandenen Referenzdateien werden dabei bewusst durch einen neuen, mit neuem Zeitstempel dokumentierten Snapshot ersetzt.
