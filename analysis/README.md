# Analyse

Dieser Ordner enthält die unabhängige, reproduzierbare Berechnung außerhalb der Website.

## Geplanter Aufbau

- `scripts/`: API-Abruf, Datenaufbereitung und Statistik
- `tests/`: Tests für Jahresverknüpfung, fehlende Werte und bekannte Kennzahlen
- `notebooks/`: optionale Exploration; finale Ergebnisse müssen auch ohne Notebook reproduzierbar sein

## Geplante Schritte

1. Rohdaten über dokumentierte URLs abrufen.
2. Indikatorreihen nach Land und Jahr verbinden.
3. Fehlende Werte protokollieren.
4. Referenz-CSV und Metadaten schreiben.
5. Statistik für beide Zeiträume berechnen.
6. Ergebnisse gegen bekannte Testfälle und Website-Berechnung vergleichen.

## Abnahmekriterien

- Gleiche Eingangsdaten liefern reproduzierbar gleiche Resultate.
- Ein fehlender Wert reduziert `n` genau um die betroffene Jahresbeobachtung.
- Perfekt steigende Testdaten liefern `r = 1`.
- Perfekt fallende Testdaten liefern `r = -1`.
- Ein Datensatz ohne Variation erzeugt eine verständliche Fehlermeldung oder `not available`, keinen irreführenden Zahlenwert.
- Python- und TypeScript-Ergebnisse stimmen innerhalb einer festgelegten numerischen Toleranz überein.
