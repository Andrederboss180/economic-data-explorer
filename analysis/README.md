# Analyse

Dieser Ordner enthält die unabhängige, reproduzierbare Berechnung außerhalb der Website.

## Geplanter Aufbau

- `scripts/`: API-Abruf, Datenaufbereitung und Statistik
- `tests/`: Tests für Jahresverknüpfung, fehlende Werte und bekannte Kennzahlen
- `notebooks/`: optionale Exploration; finale Ergebnisse müssen auch ohne Notebook reproduzierbar sein

## Geplante Schritte

1. Rohdaten über dokumentierte URLs abrufen. **Umgesetzt**
2. Indikatorreihen nach Land und Jahr verbinden. **Umgesetzt für den Referenzdatensatz**
3. Fehlende Werte protokollieren. **Umgesetzt**
4. Referenz-CSV und Metadaten schreiben. **Umgesetzt**
5. Statistik für beide Zeiträume berechnen. **Abgeschlossen**
6. Ergebnisse gegen bekannte Testfälle und `statistics` prüfen. **Umgesetzt**
7. Website-Berechnung vergleichen. **Erst in Schritt 6**

## Abruf ausführen

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python313\python.exe" analysis/scripts/fetch_world_bank_data.py
```

Das Skript verwendet ausschließlich die Standardbibliothek. Es speichert die sechs Originalantworten, die Provenienzdatei und die kombinierte CSV.

## Leichte Tests ausführen

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python313\python.exe" -B -m unittest discover -s analysis/tests -v
```

Die Tests decken API-Validierung, bekannte statistische Ergebnisse, fehlende Werte, undefinierte Kennzahlen, Länder-Jahr-Zuordnung und die gespeicherte Ergebnisdatei ab. Am 16.10.2026 bestanden 19 Tests (6 API, 13 Analyse).

## Schritt 5 reproduzieren (offline)

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python313\python.exe" -B analysis/scripts/analyze_reference_data.py
& "$env:LOCALAPPDATA\Programs\Python\Python313\python.exe" -B -m unittest discover -s analysis/tests -v
```

Das erste Kommando liest ausschließlich `data/reference/reference_2000_2024.csv` und schreibt sechs Zeilen nach `data/results/analysis_results.csv`. Kein neuer API-Abruf und keine zusätzlichen Pakete sind nötig. Auf anderen Rechnern funktioniert derselbe Aufruf mit Python 3.10+ statt des lokalen Interpreterpfads. Details, Provenienz, reale Ergebnisse und Prüfgrenzen: [validation.md](validation.md).

## Abnahmekriterien

- Gleiche Eingangsdaten liefern reproduzierbar gleiche Resultate.
- Ein fehlender Wert reduziert `n` genau um die betroffene Jahresbeobachtung.
- Perfekt steigende Testdaten liefern `r = 1`.
- Perfekt fallende Testdaten liefern `r = -1`.
- Ein Datensatz ohne Variation erzeugt eine verständliche Fehlermeldung oder `not available`, keinen irreführenden Zahlenwert.
- Python- und TypeScript-Ergebnisse stimmen innerhalb einer festgelegten numerischen Toleranz überein.
