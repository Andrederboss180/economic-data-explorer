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

- `world_bank_DEU_2000_2024_raw.json`
- `world_bank_FRA_2000_2024_raw.json`
- `world_bank_ESP_2000_2024_raw.json`
- `reference_2000_2024.csv`
- `analysis_results.csv`
- `metadata.json`

## Pflichtmetadaten

- Abrufzeitpunkt mit Zeitzone
- vollständige API-URLs
- Indikatorcodes und Klartextnamen
- Länder- und Zeitraumfilter
- verwendete Skript- oder Commit-Version
- Zahl fehlender und vollständiger Beobachtungen

Keine reale Datei wird als „World-Bank-Daten“ bezeichnet, bevor ihr Abruf und Inhalt geprüft wurden.
