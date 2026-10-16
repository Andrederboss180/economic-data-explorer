# Projektstatus

- **Letzte Aktualisierung:** 16.10.2026
- **Phase:** Schritt 5 – Mathematical Analysis & Validation abgeschlossen; als Nächstes Schritt 6 – Website Development
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
| Website | Geplant | React und TypeScript als vorläufiger Stack |
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

Schritt 5 ist nach erneutem Codex-Review von Code, Tests, Ergebnisdatei und vollständigem Diff abgeschlossen. 19 Tests bestanden; alle sechs Gruppen stimmen mit `statistics` innerhalb rel./abs. 1e-12 überein. Keine Beobachtungen ausgeschlossen. Der Nutzer hat Abschluss, Commit auf `analysis/step-5-validation`, sichere Integration in `main` und Push ausdrücklich beauftragt. Dies ist kein unabhängiger menschlicher Code-Audit. Nachweise: [Analysebericht](analysis/validation.md) und AW-008. Als Nächstes folgt Chat 3 / Schritt 6 – Website Development; noch nicht begonnen.

Die vier geplanten Codex-Chats und ihre Übergabe über versionierte Dateien stehen in [ai-workflow/README.md](ai-workflow/README.md). Chat 2 ist abgeschlossen. Modell: `GPT-6.1 Sol, Medium` laut berichteter Nutzerauswahl, nicht unabhängig als Runtime-Metadatum verifiziert.

## Noch zu bestätigen

- Exaktes Abgabedatum einschließlich Jahr und Zeitzone
- Präsentationssprache: derzeit Englisch für Folientext und Deutsch für Arbeitsnotizen angenommen
- Tatsächliche Zeit- oder Folienvorgabe des Professors; bisher ist nur „höchstens drei Folien zum Projekt selbst“ dokumentiert
- Ob es ein vorgegebenes Präsentationstemplate gibt
- Sichtbarkeit und spätere Freigabeeinstellungen des GitHub-Repositories; aus der lokalen Konfiguration wird keine Aussage „privat“ oder „öffentlich“ abgeleitet
