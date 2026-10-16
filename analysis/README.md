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
5. Statistik für beide Zeiträume berechnen.
6. Ergebnisse gegen bekannte Testfälle und Website-Berechnung vergleichen.

## Abruf ausführen

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python313\python.exe" analysis/scripts/fetch_world_bank_data.py
```

Das Skript verwendet ausschließlich die Standardbibliothek. Es speichert die sechs Originalantworten, die Provenienzdatei und die kombinierte CSV.

## Leichte Tests ausführen

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python313\python.exe" -B -m unittest discover -s analysis/tests -v
```

Die Tests decken gültige Antworten, `null`-Werte, Duplikate, fehlende Jahre, falsche Indikatoren, ungültiges JSON und die URL-Parameter ab. Statistiktests bleiben Teil der späteren Analysephase.

## Abnahmekriterien

- Gleiche Eingangsdaten liefern reproduzierbar gleiche Resultate.
- Ein fehlender Wert reduziert `n` genau um die betroffene Jahresbeobachtung.
- Perfekt steigende Testdaten liefern `r = 1`.
- Perfekt fallende Testdaten liefern `r = -1`.
- Ein Datensatz ohne Variation erzeugt eine verständliche Fehlermeldung oder `not available`, keinen irreführenden Zahlenwert.
- Python- und TypeScript-Ergebnisse stimmen innerhalb einer festgelegten numerischen Toleranz überein.
