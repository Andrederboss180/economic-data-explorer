# Seitenstruktur und einfacher Wireframe

Die Website soll wie ein ruhiges Lernwerkzeug wirken, nicht wie ein dichtes Dashboard.

```text
┌────────────────────────────────────────────────────────────┐
│ Economic Data Explorer                                     │
│ Inflation and unemployment across three European countries │
├────────────────────────────────────────────────────────────┤
│ Country: [Germany ▼]     Period: [2000–2024 ▼]             │
│ Data status: World Bank data loaded · retrieved …           │
├───────────────────────────────────────┬────────────────────┤
│                                       │ Pearson r          │
│ Scatterplot                           │ Slope β            │
│ Unemployment on x-axis                │ Observations n     │
│ Inflation on y-axis                   │                    │
│ Regression line and year tooltips     │ Short reading aid  │
│                                       │                    │
├───────────────────────────────────────┴────────────────────┤
│ Country comparison                                        │
│ One consistent table or small-multiple comparison          │
├────────────────────────────────────────────────────────────┤
│ Methodology · Data source · Limitations                    │
└────────────────────────────────────────────────────────────┘
```

## Inhaltliche Leitlinien

- Achsen nennen Variable und Einheit vollständig.
- Tooltips zeigen Land, Jahr, Inflation und Arbeitslosigkeit.
- Farbe unterstützt den Ländervergleich, ersetzt aber keine Beschriftung.
- Die Regressionslinie erhält keine kausale Beschriftung.
- `n` steht nahe bei den Kennzahlen, weil fehlende Werte die Vergleichbarkeit beeinflussen.
- Der Hinweis „Correlation does not imply causation“ wird erklärt und nicht nur als Schlagwort gezeigt.

## Noch offen

- genaue Farbpalette
- Chart-Bibliothek
- mobile Darstellung
- Hosting
- Verhalten bei Ausfall der Live-API
