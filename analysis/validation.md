# Schritt 5: Mathematical Analysis & Validation

Stand: 16.10.2026. Schritt 5 abgeschlossen nach erneutem technischem Review und ausdrücklichem Finalisierungsauftrag des Nutzers.

## Auftrag und AI-Anteil

Die Forschungsfrage lautet: "How does the relationship between inflation and unemployment differ across Germany, France, and Spain from 2000 to 2024?"

Codex generierte `scripts/analyze_reference_data.py`, `tests/test_analyze_reference_data.py` und die zugehörige Dokumentation. Die Ergebnis-CSV wurde durch Ausführen des Skripts erzeugt, nicht durch manuelles Eintragen von Zahlen. Der relevante Originalauftrag steht in [04-statistics-tests.md](../ai-workflow/prompts/04-statistics-tests.md). Modell: `GPT-6.1 Sol, Medium` laut berichteter Nutzerauswahl, nicht unabhängig als Runtime-Metadatum verifiziert. Der Nutzer beauftragte den Abschluss und die Git-Integration nach erneuter technischer Prüfung; ein unabhängiger menschlicher Code-Audit wird nicht behauptet.

## Daten und Transformation

- Quelle: eingefrorene World-Bank-CSV aus Schritt 4, Basiscommit `952b6d4`.
- Datei: `data/reference/reference_2000_2024.csv`, 75 Länder-Jahr-Zeilen.
- Abruf: `2026-10-16T12:35:25Z`; World-Bank-Stand: `2026-10-08`.
- SHA-256 der Eingabe: `a7acc118d0c64556cb4917a502c3ace43ff2a414bc103ae264222fcf297b99e4`.
- Exakte sechs API-URLs: [data/API.md](../data/API.md); Quellmetadaten: `data/raw/world_bank_2000_2024_metadata.json`.
- x = Arbeitslosenquote `SL.UEM.TOTL.ZS`, y = CPI-Inflation `FP.CPI.TOTL.ZG`.
- Jahre einschließlich beider Grenzen: 2000–2024 und 2000–2019, getrennt je Land.
- CSV-Dezimaltexte werden für Statistik in Python-`float` umgewandelt. Keine Rundung vor der Berechnung, keine Imputation, Differenzierung, Verzögerung oder Ausreißerentfernung.
- Jede CSV-Zeile hält beide Indikatoren zusammen. Gruppierung erfolgt nach Land und Jahr; Duplikate und falsche Identitäten werden abgelehnt. Fehlende Jahreszeilen und leere Werte werden separat ausgewiesen. Ungültige Zahlen und NaN/Infinity brechen den Lauf ab.

## Minimaler Rechenweg

Für vollständige Paare berechnet das Skript zentrierte Summen `Sxx`, `Syy` und `Sxy` mit `math.fsum`. Dann gelten `beta = Sxy / Sxx`, `alpha = mean(y) - beta * mean(x)` und `r = Sxy / sqrt(Sxx * Syy)`. Regression: Inflation auf Arbeitslosigkeit, mit Achsenabschnitt.

Bei weniger als zwei Paaren bleiben alle Koeffizienten leer. Konstante Arbeitslosigkeit macht Korrelation und Regression undefiniert. Bei konstanter Inflation bleibt die horizontale Regression gültig (`beta = 0`), Pearson r bleibt undefiniert. CSV-Statusfelder erklären den Grund; ein leerer Koeffizient ist kein Nullwert. Rundungsabweichungen an den Grenzen von r werden auf [-1, 1] begrenzt.

## Geprüfte reale Ergebnisse

Nur für diese Tabelle auf sechs Nachkommastellen gerundet. Die CSV enthält die ungerundeten Float-Ausgaben.

| Land | Zeitraum | n | Pearson r | Steigung beta | Achsenabschnitt alpha |
|---|---|---:|---:|---:|---:|
| Deutschland | 2000–2024 | 25 | -0.295052 | -0.170424 | 2.956648 |
| Deutschland | 2000–2019 | 20 | 0.179100 | 0.042982 | 1.163504 |
| Frankreich | 2000–2024 | 25 | -0.643384 | -0.824322 | 8.983856 |
| Frankreich | 2000–2019 | 20 | -0.620633 | -0.589236 | 6.807746 |
| Spanien | 2000–2024 | 25 | -0.512283 | -0.184454 | 5.213712 |
| Spanien | 2000–2019 | 20 | -0.629159 | -0.159522 | 4.629601 |

Alle sechs Gruppen haben null ausgeschlossene Jahre. Für 2000–2024 ist der Betrag von r in Frankreich am größten, gefolgt von Spanien und Deutschland. Im kürzeren Zeitraum ist der Betrag in Spanien geringfügig größer als in Frankreich. Deutschlands Vorzeichen wechselt. Dies beschreibt eine Sensitivität gegenüber dem Zeitraum und identifiziert keine Ursache dafür. Beta hat die Einheit Prozentpunkte Inflation je Prozentpunkt Arbeitslosigkeit im geschätzten Zusammenhang.

## Tatsächlich ausgeführte Validierung

Am 16.10.2026 mit Python 3.13.15: Analysekommando und `unittest discover` wie in [README.md](README.md). Ergebnis: **19 Tests bestanden**, davon 13 neue Analyse- und 6 bestehende API-Tests.

| Testfall | Unabhängig bekanntes Ergebnis / Prüfziel |
|---|---|
| x=(1,2,3), y=(3,5,7) | r=1, beta=2, alpha=1 |
| x=(1,2,3), y=(5,3,1) | r=-1, beta=-2, alpha=7 |
| x=(-1,0,1), y=(1,-2,1) | r=0, beta=0, alpha=0 |
| x=(1,2,3), y=(1,1,4) | Sxx=2, Syy=6, Sxy=3; r=sqrt(3)/2, beta=1.5, alpha=-1 |
| Leere/einzelne Beobachtung; konstantes x/y | Undefinierte Statistik bzw. gültige horizontale Gerade |
| Fehlende Werte und Jahre | Nur vollständige Paare, genaue Ausschlussjahre, inklusive Zeitraumfilter |
| Umgekehrte CSV-Reihenfolge, Land/Jahr und Duplikate | Zuordnung bleibt erhalten; Duplikate werden abgelehnt |
| NaN, Infinity, ungültige Zahl, falscher Indikator/Ländercode/Jahr | Abbruch statt stiller Nutzung |
| Reale CSV, alle sechs Gruppen | Separat gelesen/gefiltert; Vergleich mit `statistics.correlation` und `statistics.linear_regression`, relative und absolute Toleranz 1e-12 |
| Gespeicherte CSV | Alle sechs Zeilen stimmen exakt mit Neuberechnung überein |

Die Bibliotheksprüfung verwendet eine separate CSV-Gruppierung und etablierte Statistikfunktionen statt der eigenen zentrierten Summen. Sie ist eine technische Gegenprüfung, kein menschlicher Audit. Die künstlichen Beispiele haben analytisch bekannte Lösungen.

### Tatsächlicher Fehler und Korrektur beim Review

Der erste Lauf bestand alle 19 Tests mit ganzzahligen Konstanten. Der anschließende Code-Review prüfte konstante Dezimalwerte: x=(0.1,0.1,0.1), y=(1,2,3) und x=(1,2,3), y=(0.1,0.1,0.1). Beide lieferten fälschlich `pearson_r=0.0` und Status `ok`. Die Mittelwertbildung kann 0.1 auf 0.10000000000000002 runden, sodass die zentrierte Quadratsumme trotz konstanter Werte größer als null ist. Die ursprüngliche Nullvarianzprüfung war dadurch unzureichend.

Beide bestehenden Konstanten-Tests wurden um `0.1`-Subtests erweitert. Tatsächlich beobachteter Lauf vor der Korrektur: `Ran 13 tests`, `FAILED (failures=2)`, jeweils `AssertionError: 0.0 is not None`. Die Korrektur erkennt konstante Reihen direkt mit `min(values) == max(values)` vor der Mittelwertbildung. Konstantes x ergibt undefinierte Koeffizienten; konstantes y ergibt undefiniertes r und exakt beta=0, alpha=0.1. Danach: `Ran 19 tests`, `OK`. Alle sechs realen Ergebniszeilen blieben unverändert. Das ist eine beobachtete Korrektur, kein erfundenes Präsentationsbeispiel. Weitere technische Hürde: V-004.

## Grenzen und menschliche Kontrolle

Die Jahresdaten liefern nur 20 bzw. 25 Beobachtungen je Land. Die Rechnung beschreibt gleichzeitige lineare Zusammenhänge; Zeitabhängigkeit, mögliche Strukturbrüche, andere Einflussgrößen und Erwartungen werden nicht modelliert. Es werden keine Signifikanztests, Unsicherheitsintervalle, Prognosen oder kausalen Effekte geschätzt. Die OLS-Gerade ist keine vollständige strukturelle Phillips-Kurve. Das Weglassen von 2020–2024 ist ein einfacher Zeitraumvergleich und beweist keine Robustheit gegen alle Modellprobleme. Live-Daten können später vom eingefrorenen Snapshot abweichen.

Der Abschlussreview durch Codex prüfte Variablenrichtung, bekannte Testlösungen, sechs Ergebniszeilen und Interpretation erneut. Der Nutzer autorisierte Finalisierung und Git-Integration. Dies ersetzt keinen unabhängigen menschlichen Code-Audit. Der Python-/TypeScript-Vergleich gehört zu Schritt 6 und ist noch nicht erfolgt.

## Relevanter Git-Diff

Entwicklungsbranch: `analysis/step-5-validation`, Ausgangspunkt `952b6d4`. Der ursprüngliche Auftrag ließ die Arbeit uncommitted; der Folgeauftrag autorisiert Commit, sichere Integration in `main` und Push. Commit-Nachweis: `analysis: finalize validated reference statistics` und Git-Historie (AW-008). Bestehende Roh- und Referenzdaten sowie Website-Dateien bleiben unverändert.

```powershell
git status --short --branch
git diff --stat
git diff -- README.md PROJECT_STATUS.md analysis/README.md data/data-dictionary.md docs/roadmap.md docs/workflow.md ai-workflow presentation research/methodology.md
git diff --no-index -- /dev/null analysis/scripts/analyze_reference_data.py
git diff --no-index -- /dev/null analysis/tests/test_analyze_reference_data.py
git diff --no-index -- /dev/null data/results/analysis_results.csv
git diff --check
# Nach dem Abschlusscommit: vollständiger Phasen-Diff inklusive neuer Dateien
git show --stat --oneline HEAD
git diff 952b6d4..HEAD
```

Neue ungetrackte Dateien fehlen in normalem `git diff`. `--no-index` macht sie ohne Staging sichtbar (Exitcode 1 bedeutet hier einen gefundenen Diff). Der tatsächliche Diff wurde durch Codex geprüft. Neue Dokumentationsdateien ebenfalls über `git status` und Dateiansicht prüfen. Es wurde kein Screenshot erzeugt; für die Präsentation kann später der echte Testlauf aufgenommen werden.
