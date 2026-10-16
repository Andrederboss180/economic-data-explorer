# Presentation notes: World Bank API

## Kernaussage

Ein kurzer, reproduzierbarer API-Abruf verwandelt sechs World-Bank-Antworten in einen geprüften Referenzdatensatz. Jede Zeile bleibt auf URL, Abrufzeit und Originalantwort zurückführbar.

## Empfohlener Titel

**World Bank API and data checks**

## Exakter Folientext auf Englisch

**Request**

```text
/country/DEU/indicator/FP.CPI.TOTL.ZG
?format=json&date=2000:2024&per_page=100
```

`country` selects Germany. `indicator` selects annual CPI inflation. The query requests JSON, 2000 to 2024 and up to 100 records.

**Response**

```text
page 1 of 1
total 25
last updated 2026-10-08
2024 value: 2.2564981433876
```

**Validation result**

- 6 of 6 responses passed
- 150 source observations produced 75 country-year rows
- 0 null values, missing years or duplicates

Kleine Quellenzeile: `World Bank Indicators API; retrieved 2026-10-16T12:35:25Z`

## Visuelle Idee

Eine zusammenhängende Kette mit drei echten Ausschnitten: links der Endpoint, in der Mitte die gekürzte JSON-Antwort und rechts die validierte CSV-Zeile. Darunter steht die Prüfzeile mit HTTP, Identität, Jahren, Nullwerten und Duplikaten. Keine dekorativen Dashboard-Karten verwenden.

Als Terminalausschnitt dient der vorhandene Screenshot `presentation/assets/screenshots/Screenshot 2026-10-16 142607.png`. Er zeigt den echten PowerShell-Abruf, die Metadaten und die fünf Werte für 2020 bis 2024.

## Sprechertext auf Englisch

> This is a conventional data API. The URL specifies the country, indicator, period and JSON format. The first element of the response contains metadata, while the second contains the yearly observations. My Python script checks the HTTP response, JSON structure, country, indicator, years, null values and duplicates before writing any files. All six requests passed. They produced 150 source observations and 75 combined country-year rows. The raw JSON stays unchanged, so every CSV value can be traced back to the original response.

## Daten-API und LLM-API

Ein zusätzlicher kurzer Satz im Vortrag:

> The World Bank API returns stored values selected by parameters. An LLM API generates a model response from a prompt. This data request uses no LLM tokens.

## Manueller Ersttest

Der erste PowerShell-Test für deutsche Inflation lieferte `page: 1`, `pages: 1`, `total: 25` und `lastupdated: 2026-10-08`. Die beobachteten Werte 2020 bis 2024 stehen vollständig in `data/API.md` und stimmen exakt mit dem gespeicherten Rohsnapshot überein.

Reproduzierbarer PowerShell-Befehl zum echten Endpoint:

```powershell
$response = Invoke-RestMethod -Uri 'https://api.worldbank.org/v2/country/DEU/indicator/FP.CPI.TOTL.ZG?format=json&date=2000:2024&per_page=100'
$response[0]
$response[1] | Select-Object -First 5 date,value
```

Gekürzter JSON-Ausschnitt aus dem gespeicherten Original (weitere Felder ausgelassen):

```json
{"countryiso3code":"DEU","date":"2024","value":2.2564981433876}
```

## Zusätzliche Prüf- und Erfahrungsnotizen

- Sechs Unit-Tests bestanden. Ein separater Codex-PowerShell-Abruf am `2026-10-16T13:01:16Z` bestätigte Frankreichs Arbeitslosenquote 2024: API `7.4`, CSV `7.4`, exakter Vergleich `True`. Vollständiger Befehl in `data/API.md`.
- Diese Gegenprüfung nutzt einen anderen Client, wurde aber ebenfalls von Codex ausgeführt. Sie ist kein unabhängiger menschlicher Audit.
- Reale Einrichtungshürde: `python.exe` war zunächst nur ein Windows-Store-Platzhalter. Nach Installation von Python 3.13.15 im Benutzerkontext lief das Skript über den vollständigen Interpreterpfad. Ein Cache-Schreibproblem bei `py_compile` wurde durch Syntaxprüfung und Tests mit `-B` umgangen.
- Möglicher Sprechsatz: “AI wrote the retrieval code, but I still needed a working Python installation and explicit checks against the original API response.”

## Nachweise

- `analysis/scripts/fetch_world_bank_data.py`
- `analysis/tests/test_fetch_world_bank_data.py`
- `data/API.md`
- `data/raw/world_bank_2000_2024_metadata.json`
- `data/reference/reference_2000_2024.csv`
- `presentation/assets/screenshots/Screenshot 2026-10-16 142607.png`
