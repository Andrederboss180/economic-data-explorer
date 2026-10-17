# Projektstatus

- **Letzte Aktualisierung:** 17.10.2026
- **Phase:** Schritt 6 – Website Development abgeschlossen; als Nächstes Schritt 7 – Risks, Failures & Limitations (noch nicht begonnen)
- **Abgabe laut bisherigem Chat:** 22. Oktober, 08:00 Uhr. Jahr und Zeitzone bitte noch bestätigen.

## Statusübersicht

| Arbeitsbereich | Status | Ergebnis / nächster Schritt |
|---|---|---|
| Ideation | Abgeschlossen | Drei Optionen verglichen, Economic Data Explorer gewählt |
| Forschungsfrage | Abgeschlossen | Länder, Indikatoren und Zeitraum festgelegt |
| Kursbezug | Vorbereitet | M1 bis M10 priorisiert und konkreten Nachweisen zugeordnet |
| Git | Abgeschlossen | Lokales Repository außerhalb von OneDrive, `main` verfolgt `origin/main`, erster Push zu GitHub erfolgreich |
| Literatur | Abgeschlossen (Minimalumfang) | 12 faktische Zellen AI-gestützt geprüft; 3 Hauptergebnisse unabhängig menschlich bestätigt; 3 Vergleiche als analytische Interpretationen freigegeben |
| Daten | Abgeschlossen | Sechs API-Antworten validiert; 150 Quellbeobachtungen und 75 vollständige Länder-Jahr-Zeilen; PowerShell-Spotcheck bestanden |
| Analyse | Abgeschlossen | Sechs Länder-Zeitraum-Ergebnisse; 13 Analyse-Tests plus 6 API-Tests bestanden; Abgleich mit `statistics` |
| Website | Abgeschlossen (6.1–6.3) | Live-Daten, Einzelplot, Statistik und Ländervergleich; technische Prüfungen und nutzerberichteter informeller Browser-/Visualreview dokumentiert |
| AI-Nachweise | Aktiv | Log, Promptablage, Validierungslog und Risikoregister angelegt |
| Präsentation | Inhaltlich vorbereitet | Storyboard sowie Notizen zu Ideation, Literaturreview und Git/Codex ausgearbeitet |

## Festgelegter Projektumfang

- Länder: Deutschland, Frankreich, Spanien
- Hauptzeitraum: 2000 bis 2024
- Robustheitszeitraum: 2000 bis 2019
- Inflation: `FP.CPI.TOTL.ZG`
- Arbeitslosigkeit: `SL.UEM.TOTL.ZS`
- Methoden: Pearson-Korrelation und einfache lineare Regression pro Land
- Datenquelle: World Bank Indicators API
- Website: Live-Daten, keine Datenbank, keine Benutzerkonten, kein KI-Chatbot

## Nächster Schritt

Schritt 6 einschließlich 6.3 ist abgeschlossen. 71 Website-Tests, 19 Python-Tests, ESLint, TypeScript, Build und separater Live-Check erneut bestanden; sechs eingefrorene Länder-Zeitraum-Gruppen stimmen mit Python überein. Der Nutzer bestätigt einen erfolgreichen informellen Browser-/Visualreview; die fünf Website-Screenshots sind bei Wiederaufnahme lokal vorhanden und als Bildevidenz geprüft. Keine vollständige manuelle Detailprüfung behauptet. [Abschlussnachweise und Bildlinks](website/tests/step-6-3-validation.md), AW-014. Git-Abschluss auf `web/step-6-3-comparison`, sichere Integration und Push ausdrücklich beauftragt; tatsächlicher Commit im Git-Verlauf/Abschlussbericht. Als Nächstes Schritt 7 – Risks, Failures & Limitations; Schritte 7/8 noch nicht begonnen.

Die vier geplanten Codex-Chats und ihre Übergabe über versionierte Dateien stehen in [ai-workflow/README.md](ai-workflow/README.md). Chats 1–3 sind fachlich abgeschlossen; Chat 4 bleibt für Finalization & Presentation geplant. Die Modellangabe `GPT-6.1 Sol, Medium` gehört zum nutzerberichteten Chat 2 und wird nicht ungeprüft auf Chat 3 übertragen.

## Noch zu bestätigen

- Exaktes Abgabedatum einschließlich Jahr und Zeitzone
- Präsentationssprache: derzeit Englisch für Folientext und Deutsch für Arbeitsnotizen angenommen
- Tatsächliche Zeit- oder Folienvorgabe des Professors; bisher ist nur „höchstens drei Folien zum Projekt selbst“ dokumentiert
- Ob es ein vorgegebenes Präsentationstemplate gibt
- Sichtbarkeit und spätere Freigabeeinstellungen des GitHub-Repositories; aus der lokalen Konfiguration wird keine Aussage „privat“ oder „öffentlich“ abgeleitet
