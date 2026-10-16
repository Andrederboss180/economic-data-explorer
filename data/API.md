# World-Bank-API

## Endpoint

Basisformat:

```text
https://api.worldbank.org/v2/country/{COUNTRY}/indicator/{INDICATOR}?format=json&date={START}:{END}&per_page=100
```

Der Pfad wählt Land und Indikator. Die Query-Parameter legen JSON als Format, den Zeitraum 2000 bis 2024 und maximal 100 Einträge pro Seite fest. Für dieses Projekt ist kein API-Key nötig.

## Exakte URLs des Referenzabrufs

```text
https://api.worldbank.org/v2/country/DEU/indicator/FP.CPI.TOTL.ZG?format=json&date=2000:2024&per_page=100
https://api.worldbank.org/v2/country/DEU/indicator/SL.UEM.TOTL.ZS?format=json&date=2000:2024&per_page=100
https://api.worldbank.org/v2/country/FRA/indicator/FP.CPI.TOTL.ZG?format=json&date=2000:2024&per_page=100
https://api.worldbank.org/v2/country/FRA/indicator/SL.UEM.TOTL.ZS?format=json&date=2000:2024&per_page=100
https://api.worldbank.org/v2/country/ESP/indicator/FP.CPI.TOTL.ZG?format=json&date=2000:2024&per_page=100
https://api.worldbank.org/v2/country/ESP/indicator/SL.UEM.TOTL.ZS?format=json&date=2000:2024&per_page=100
```

## Parameter

| Teil | Bedeutung |
|---|---|
| `country/{COUNTRY}` | `DEU`, `FRA` oder `ESP` |
| `indicator/{INDICATOR}` | Inflations- oder Arbeitslosenindikator |
| `format=json` | Antwort als JSON |
| `date=2000:2024` | gewünschtes Jahresintervall |
| `per_page=100` | alle 25 erwarteten Jahreswerte in einer Antwort |

## Tatsächliche JSON-Struktur

Die Antwort ist ein Array mit zwei Elementen:

1. Metadaten mit `page`, `pages`, `per_page`, `total` und `lastupdated`.
2. Eine Liste von Beobachtungen. Jede Beobachtung enthält unter anderem Indikator, Land, ISO3-Code, Jahr und `value`.

Gekürztes Strukturbeispiel:

```json
[
  {"page": 1, "pages": 1, "total": 25, "lastupdated": "2026-10-08"},
  [
    {
      "indicator": {"id": "FP.CPI.TOTL.ZG"},
      "countryiso3code": "DEU",
      "date": "2024",
      "value": 2.2564981433876
    }
  ]
]
```

## Erster erfolgreicher manueller PowerShell-Abruf

Der erste manuelle Test verwendete Deutschland, den Inflationsindikator und 2000 bis 2024. Die folgende Abfrage reproduziert denselben Endpoint:

```powershell
$response = Invoke-RestMethod -Uri 'https://api.worldbank.org/v2/country/DEU/indicator/FP.CPI.TOTL.ZG?format=json&date=2000:2024&per_page=100'
$response[0]
$response[1] | Select-Object -First 5 date,value
```

Tatsächlich im Terminal beobachtete Metadaten:

| Feld | Wert |
|---|---:|
| `page` | 1 |
| `pages` | 1 |
| `total` | 25 |
| `lastupdated` | 2026-10-08 |

Tatsächlich beobachtete Werte:

| Jahr | Inflation |
|---:|---:|
| 2024 | 2.2564981433876 |
| 2023 | 5.94643667725823 |
| 2022 | 6.87257438551096 |
| 2021 | 3.06666666666673 |
| 2020 | 0.144877925813981 |

Diese Zahlen stammen aus dem realen Terminalabruf. Sie sind keine illustrativen oder von AI erzeugten Werte.

Der zugehörige unveränderte Terminalnachweis liegt unter `presentation/assets/screenshots/Screenshot 2026-10-16 142607.png`.

## Reproduzierbarer Python-Abruf

Vom Repository-Hauptordner genügt auf diesem Rechner ein Befehl:

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python313\python.exe" analysis/scripts/fetch_world_bank_data.py
```

Das Skript nutzt nur die Python-Standardbibliothek. Es ruft sechs Kombinationen ab, prüft jede Antwort und schreibt erst dann Rohdateien, CSV und Metadaten.

## Validierung des Abrufs vom 16.10.2026

- Abrufzeitpunkt: `2026-10-16T12:35:25Z`
- World-Bank-Feld `lastupdated`: `2026-10-08` in allen sechs Antworten
- HTTP-Status: sechsmal 200
- Pagination: sechsmal Seite 1 von 1
- Quellbeobachtungen: 150, also 6 Reihen mit jeweils 25 Jahresdatensätzen
- Kombinierte CSV: 75 Länder-Jahr-Zeilen
- Fehlende oder `null`-Werte: 0
- Fehlende Jahresdatensätze: 0
- Doppelte Land-Jahr-Einträge: 0
- Ergebnis: alle implementierten Prüfungen bestanden

Die vollständige maschinenlesbare Provenienz steht in `data/raw/world_bank_2000_2024_metadata.json`.

## Durchgeführte Prüfungen

- HTTP-Status und Netzwerkfehler
- gültiges JSON und erwartete Zweiteilung der Antwort
- richtiger Ländercode und Ländername
- richtiger Indikatorcode
- Jahreswerte ausschließlich von 2000 bis 2024
- genau ein Datensatz pro Land, Indikator und Jahr
- vollständige Jahresabdeckung
- numerischer Wert oder dokumentiertes `null`
- Übereinstimmung von `total` und Datensatzanzahl

`null` würde als leere CSV-Zelle erhalten und in den Metadaten mit Jahr dokumentiert. Das Skript ersetzt fehlende Werte weder durch null Prozent noch durch Schätzungen.

## Separater PowerShell-Spotcheck zum Abschluss

Am `2026-10-16T13:01:16Z` führte Codex einen zusätzlichen Live-Abruf über PowerShell aus. Er verwendet einen anderen Client als das Python-Skript:

```powershell
$response = Invoke-RestMethod -Uri 'https://api.worldbank.org/v2/country/FRA/indicator/SL.UEM.TOTL.ZS?format=json&date=2000:2024&per_page=100'
$live = @($response[1] | Where-Object { $_.date -eq '2024' })
$saved = @(Import-Csv data/reference/reference_2000_2024.csv | Where-Object { $_.country_code -eq 'FRA' -and $_.year -eq '2024' })
if ($live.Count -ne 1 -or $saved.Count -ne 1) { throw 'Expected one observation' }
$value = ([double]$live[0].value).ToString('R', [Globalization.CultureInfo]::InvariantCulture)
$value -ceq $saved[0].unemployment_pct
```

Ergebnis: Frankreich, `SL.UEM.TOTL.ZS`, 2024: API `7.4`, CSV `7.4`, exakter Textvergleich `True`. Das entspricht 7,4 % der Erwerbsbevölkerung. `lastupdated` war erneut `2026-10-08`. Für diesen kurzen Zahlenwert entsteht durch die PowerShell-Darstellung kein Präzisionsverlust; die Snapshot-Erstellung verwendet weiterhin `Decimal`.

Der erste Vergleichsversuch benutzte versehentlich die nicht vorhandenen CSV-Spalten `country` und `unemployment`. Nach Abgleich mit dem tatsächlichen Header wurde er mit `country_code` und `unemployment_pct` erfolgreich wiederholt. Die CSV musste nicht korrigiert werden. Ein anfänglicher Netzwerkversuch im eingeschränkten Prozess scheiterte; der freigegebene Live-Abruf gelang.

Dieser separate technische Abruf wurde durch Codex ausgeführt. Er belegt keine unabhängige menschliche Vollprüfung und prüft nur eine zusätzliche Beobachtung. Für diesen Spotcheck wurde kein Screenshot erstellt.

## Tatsächliche Python-Installationshürde

Anfangs zeigte `python.exe` nur auf den Windows-Store-Platzhalter. Für den echten Skriptlauf wurde Python 3.13.15 im Benutzerkontext installiert. Der oben angegebene Befehl verwendet deshalb den vollständigen Interpreterpfad. Ein `py_compile`-Versuch konnte im eingeschränkten Prozess keinen Cache-Ordner anlegen; die Syntaxprüfung und alle sechs Unit-Tests bestanden mit deaktiviertem Bytecode-Cache (`-B`).

## Daten-API und LLM-API

Die World-Bank-API liefert gespeicherte Datensätze anhand klarer Parameter zurück. Ein LLM-API-Aufruf erzeugt dagegen eine Modellantwort aus einem Prompt. Die World-Bank-API verwendet keine LLM-Tokens. `page`, `pages` und `total` beschreiben lediglich die Seiteneinteilung der Datenantwort.

## Noch nicht Teil dieses Schritts

Das Skript berechnet keine Korrelation oder Regression. Es enthält keine Website-Logik und verwendet keine Datenbank.
