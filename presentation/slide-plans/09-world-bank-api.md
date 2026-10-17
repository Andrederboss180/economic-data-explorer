# 09. World Bank API

## Purpose

Explain a real data API call and the transformation from separate indicator responses into paired observations.

## Main takeaway

Six traceable World Bank responses became a validated dataset by matching indicators on country and year.

## Verified project evidence

- Three countries × two indicators × 25 years = 150 source observations, combined into 75 complete country-year rows. Frozen snapshot retrieval: `2026-10-16T12:35:25Z`; all six source updates: `2026-10-08`: [metadata](../../data/raw/world_bank_2000_2024_metadata.json).
- Six response checks passed; no nulls, missing years or duplicate years in that snapshot. The code still handles/reports missing values; zero observed missing values is not a universal API guarantee.
- Actual German inflation request and response are visible in [PowerShell evidence](../assets/screenshots/Erste%20API%20request.png). Saved JSON for 2024 contains `value: 2.2564981433876`.
- Python retrieval validates HTTP/JSON structure, identity, pagination, years and values before writing the snapshot: [script](../../analysis/scripts/fetch_world_bank_data.py).
- The separate France 2024 unemployment spotcheck (`7.4`) was performed by Codex through PowerShell, not an independent human auditor: [API documentation](../../data/API.md).

## Proposed on-slide text (English)

**Request → JSON → Match country/year → Validate**

```text
/country/DEU/indicator/FP.CPI.TOTL.ZG
?format=json&date=2000:2024&per_page=100
```

6 responses · 150 indicator observations · 75 complete pairs

**Data API, not an LLM API**

Footer: World Bank snapshot, retrieved 16 Oct 2026; source update 8 Oct 2026.

## Proposed visual layout

Use a readable crop of the real PowerShell request/metadata, followed by one shortened actual JSON observation and one paired CSV record. Use editable parameter labels. Shortened JSON must say “fields omitted”. The screenshot's regional decimal commas and JSON decimal points represent the same stored value. Do not shrink the entire tall screenshot to an unreadable strip.

## Presenter understanding (German)

Eine API ist eine festgelegte Schnittstelle für Datenabfragen. Die URL sagt der World Bank, welches Land, welcher Indikator und welche Jahre benötigt werden. JSON ist das strukturierte Antwortformat. Eine einzelne Reihe enthält nur einen Indikator; die beiden Reihen müssen über Land und Jahr verbunden werden. 150 Einzelwerte ergeben deshalb 75 Paare. Ein LLM erzeugt Antworten auf Prompts; diese Daten-API liefert gespeicherte Zahlen und verwendet keine LLM-Tokens.

## Draft speaking notes (German)

Hier sieht man einen echten PowerShell-Aufruf. Die Adresse wählt Deutschland, Inflation und den Zeitraum. Die Antwort enthält Metadaten und Jahreswerte. Für drei Länder und zwei Indikatoren wurden sechs Antworten gespeichert. Codex schrieb das Python-Skript, das Identität, Jahre, fehlende Werte und Duplikate prüft. Die Reihen werden über Land und Jahr verbunden. So entstehen aus 150 Einzelbeobachtungen 75 vollständige Paare. Die Daten stammen aus der World Bank, nicht aus dem Gedächtnis eines Sprachmodells. Der Datenstand und die ursprünglichen Antworten bleiben nachvollziehbar gespeichert.

## Lecture connection

M5: endpoints, request parameters, structured responses and validation. Exact lecture slide number pending; [course alignment](../../docs/course-alignment.md). This is conventional data access; no LLM-as-measurement experiment from M6.

## Evidence paths

- [API endpoints and historical checks](../../data/API.md)
- [Provenance metadata](../../data/raw/world_bank_2000_2024_metadata.json)
- [Actual DEU inflation JSON](../../data/raw/world_bank_DEU_FP.CPI.TOTL.ZG_2000_2024_raw.json)
- [Combined CSV](../../data/reference/reference_2000_2024.csv)
- [Retrieval script](../../analysis/scripts/fetch_world_bank_data.py), [API tests](../../analysis/tests/test_fetch_world_bank_data.py)
- [Real PowerShell screenshot](../assets/screenshots/Erste%20API%20request.png)
- Git: `952b6d4`. The API document retains an old screenshot name; use the existing renamed image linked here, as documented in AW-014.

## Missing assets / open questions

- Select the screenshot crop and readable CSV row in Canva; evidence is already available.
- Check official indicator definition pages before adding a verbatim definition to the final slide; the blueprint uses recorded indicator names.

## Estimated speaking time

65 seconds.
