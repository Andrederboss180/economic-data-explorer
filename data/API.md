# World-Bank-API

## Endpoints

Basisformat:

```text
https://api.worldbank.org/v2/country/{COUNTRY}/indicator/{INDICATOR}?format=json&date={START}:{END}&per_page=100
```

Beispiel Deutschland:

```text
https://api.worldbank.org/v2/country/DEU/indicator/FP.CPI.TOTL.ZG?format=json&date=2000:2024&per_page=100
https://api.worldbank.org/v2/country/DEU/indicator/SL.UEM.TOTL.ZS?format=json&date=2000:2024&per_page=100
```

## Parameter

| Parameter | Bedeutung |
|---|---|
| `country` | `DEU`, `FRA` oder `ESP` |
| `indicator` | Inflation oder Arbeitslosigkeit |
| `format=json` | Antwort als JSON |
| `date=2000:2024` | gewünschtes Jahresintervall |
| `per_page=100` | alle erwarteten Jahreswerte in einer Antwort |

## Zu prüfende Antwortstruktur

Die genaue JSON-Struktur wird erst nach einem echten Abruf dokumentiert. Erwartet werden Metadaten und eine Liste von Beobachtungen mit Land, Jahr, Indikator und Wert. Diese Erwartung darf nicht ungeprüft in Code festgeschrieben werden.

## Validierungscheckliste

- HTTP-Status und verständliche Fehlermeldung
- Antwort ist gültiges JSON
- erwarteter Indikatorcode
- erwarteter Ländercode
- jedes Jahr liegt im gewünschten Intervall
- doppelte Jahre werden erkannt
- `null`-Werte werden dokumentiert und nicht als null Prozent behandelt
- Werte sind numerisch und Einheiten stimmen
- Anzahl geladener Reihen wird angezeigt oder protokolliert
- Abrufdatum und vollständige URL werden gespeichert

## Laufzeitstrategie der Website

Die Website lädt für das gewählte Land beide Reihen. Bereits geladene Antworten dürfen während einer Sitzung im Browser zwischengespeichert werden. Ein Zeitraumwechsel filtert möglichst die vorhandenen 2000-bis-2024-Daten und löst keine unnötige neue Anfrage aus.

## Fehlerfälle

- API nicht erreichbar: verständlicher Hinweis und optionaler Demo-Modus mit Referenzdaten
- einzelne Reihe fehlt: keine Statistik berechnen
- Jahre passen nicht zusammen: nur Schnittmenge verwenden und Ausschlüsse nennen
- zu wenig Variation oder Beobachtungen: Kennzahl als nicht berechenbar kennzeichnen
