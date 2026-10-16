# Roadmap

Die Reihenfolge folgt dem Risiko: Zuerst sichern wir fachliche Grundlage und Datenqualität, danach bauen wir Analyse, Website und Präsentation.

## Meilenstein 0: Projektbasis

**Status:** abgeschlossen

Fertig, wenn:

- Forschungsfrage und Scope dokumentiert sind
- Ordnerstruktur und Git-Repository existieren
- AI-Log, Validierungslog und Risikoregister bereitstehen
- Präsentationsstoryboard die vorhandene Ideation aufnimmt

## Meilenstein 1: Literaturbasis

**Status:** abgeschlossen für den vereinbarten Minimalumfang

Fertig, wenn:

- zwei bis drei relevante Originalquellen verifiziert sind
- jede Quelle eine stabile URL oder DOI und vollständige bibliografische Angaben besitzt
- die für das Projekt verwendete Aussage mit Fundstelle dokumentiert ist
- AI-Zusammenfassungen mit dem Original abgeglichen wurden

Erfüllt am 14.10.2026: Der AI-gestützte Audit deckte 12 faktische Zellen und 3 Cross-paper comparisons ab. Die drei zentralen Ergebnisse wurden unabhängig auf den Original-PDF-Seiten 4, 20 und 3 bestätigt; die drei Vergleiche wurden als angemessene eigene Interpretationen freigegeben. Dies ist kein vollständiger menschlicher Zell-für-Zell-Audit.

## Schritt 3: Git & Version Control (M7)

**Status:** abgeschlossen am 16.10.2026

Erfüllt, weil:

- das lokale Repository aus dem OneDrive-Ordner in `C:\Users\andre\Präsentation (alles)` verschoben wurde
- `.gitignore`, Staging, Commits und Diff-Prüfungen im echten Projekt verwendet wurden
- `main` den Remote-Branch `origin/main` verfolgt
- der erste Push zum GitHub-Remote erfolgreich war
- der tatsächliche Verlauf mit `5afcb89`, `dc9fe71` und `fa62b33` dokumentiert ist

Stand nach Schritt 3: Feature-Branches und Pull Requests wurden noch nicht verwendet. Schritt 5 verwendet erstmals `analysis/step-5-validation`; ein Pull Request wurde nicht verwendet.

## Schritt 4 / Meilenstein 2: API und Referenzdaten (M5)

**Status:** abgeschlossen am 16.10.2026

Fertig, wenn:

- beide Indikatoren für alle drei Länder abrufbar sind
- JSON-Struktur und Fehlersituationen verstanden sind
- Jahre korrekt verbunden und fehlende Werte dokumentiert werden
- ein Referenzdatensatz mit Abrufdatum und API-URLs gespeichert ist
- Tests den Abruf und die Transformation abdecken

Erfüllt am 16.10.2026: Sechs API-Antworten wurden erfolgreich validiert. Der Snapshot enthält 150 Quellbeobachtungen, die kombinierte CSV 75 vollständige Länder-Jahr-Zeilen. Es wurden keine `null`-Werte, fehlenden Jahre oder Duplikate gefunden. Codex-Review und sechs Unit-Tests bestanden; ein separater Live-Abruf über PowerShell bestätigte Frankreichs Arbeitslosenquote 2024 (`7.4`) exakt gegen die CSV. Dies ist eine technische Gegenprüfung, kein vollständiger unabhängiger menschlicher Audit.

## Schritt 5 / Meilenstein 3: Mathematical Analysis & Validation

**Status:** abgeschlossen am 16.10.2026 nach erneutem technischem Review und ausdrücklichem Abschlussauftrag des Nutzers

Fertig, wenn:

- Pearson `r`, Regressionssteigung und `n` pro Land berechnet werden
- beide Zeiträume verfügbar sind
- bekannte Testdaten erwartete Ergebnisse liefern
- eine zweite Implementierung oder Bibliothek die Resultate bestätigt
- Grenzen der Methode formuliert sind

Technischer Nachweis: [Analyse und Validierung](../analysis/validation.md), sechs Ergebniszeilen, 13 neue Analyse-Tests plus 6 bestehende API-Tests bestanden. Alle sechs realen Gruppen mit `statistics` gegengeprüft. Code, Ergebnisse und vollständiger Diff erneut geprüft; der tatsächliche `0.1`-Fehler samt Korrektur ist dokumentiert. Abschlussauftrag und Git-Nachweise: AW-008. Als Nächstes folgt Schritt 6 – Website Development in Chat 3.

## Schritt 6 / Meilenstein 4: Website Development

**Status:** aktiv; 6.1 und 6.2 abgeschlossen; als Nächstes 6.3 – Country Comparison & Website Finalization (noch nicht begonnen)

6.1: React/TypeScript/Vite-Grundlage, Live-Tabelle, Quellen und Cache abgeschlossen; sechs nutzerberichtete Browserchecks separat von Automatisierung dokumentiert. [Historische Nachweise](../website/tests/step-6-1-validation.md), AW-010.

6.2: SVG-Visualisierung, OLS über beobachtete X-Spanne, r/β/n und lokale Zeitraumfilter abgeschlossen. Erneut 65 Website-Tests, 19 Python-Tests, Lint/Typecheck/Build bestanden; sechs eingefrorene Gruppen gegen Python geprüft. Nutzer berichtet positiven informellen Browser-/Visualcheck, ohne vollständige Detailcheckliste zu bestätigen. [Nachweise und Grenzen](../website/tests/step-6-2-validation.md), AW-012. Keine neue Abhängigkeit oder API-Anfrage beim Zeitraumwechsel; Daten/Analyse/API unverändert. Sichere Git-Finalisierung ausdrücklich autorisiert. 6.3 und Schritte 7/8 nicht begonnen; Schritt 6 insgesamt nicht abgeschlossen.

Fertig, wenn:

- Auswahl für Land und Zeitraum funktioniert
- Lade-, Fehler- und Leerzustände verständlich sind
- Diagramm und Kennzahlen aus denselben Daten berechnet werden
- Quellen und Methodik sichtbar sind
- automatisierte und manuelle Tests dokumentiert sind

## Meilenstein 5: Präsentation

Fertig, wenn:

- höchstens drei Folien hauptsächlich das Projekt erklären
- Ideation, API, Codex/Git und Validierung durch echte Nachweise belegt sind
- jede Zahl und Quelle geprüft ist
- Folien und Sprechertext zeitlich getestet wurden
- finale Datei gerendert und visuell kontrolliert wurde

## Zeitplanung

Die konkrete Tagesplanung wird ergänzt, sobald Abgabejahr, Zeitzone, Vortragsdauer und Template bestätigt sind. Bis dahin steuert die Meilensteinreihenfolge die Arbeit.
