# Projektstatus

- **Letzte Aktualisierung:** 16.10.2026
- **Phase:** Schritt 6 – Website Development aktiv; 6.2 abgeschlossen, als Nächstes 6.3 – Country Comparison & Website Finalization
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
| Website | 6.1 und 6.2 abgeschlossen | 65 Website-Tests bestanden; informeller Browser-/Visualcheck vom Nutzer bestätigt; als Nächstes 6.3 |
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

6.2 ist nach erneutem technischem Review und erfolgreichem, vom Nutzer berichtetem informellem Browser-/Visualcheck abgeschlossen. 65 Website- und 19 Python-Tests, Lint/Typecheck/Build erneut bestanden; alle sechs eingefrorenen Gruppen stimmen mit Python innerhalb vereinbarter Toleranz überein. Der Nutzer hat die Website geöffnet und bedient und Aussehen/Funktionalität positiv bewertet; keine vollständige Checklisten-, Keyboard-, Network-Tab- oder Geräteprüfung behauptet. Daten, Python-Analyse und API-Client unverändert. [Prüfbericht](website/tests/step-6-2-validation.md), AW-012. Abschlusscommit auf `web/step-6-2-visualization` und sichere Integration/Push ausdrücklich beauftragt; Git-Historie und Abschlussbericht belegen den tatsächlichen Stand. Als Nächstes **6.3 – Country Comparison & Website Finalization**, noch nicht begonnen. Schritte 7/8 nicht begonnen.

Die vier geplanten Codex-Chats und ihre Übergabe über versionierte Dateien stehen in [ai-workflow/README.md](ai-workflow/README.md). Chat 2 ist abgeschlossen, Chat 3 aktiv; Chat 4 bleibt geplant. Die Modellangabe `GPT-6.1 Sol, Medium` gehört zum nutzerberichteten Chat 2 und wird nicht ungeprüft auf Chat 3 übertragen.

## Noch zu bestätigen

- Exaktes Abgabedatum einschließlich Jahr und Zeitzone
- Präsentationssprache: derzeit Englisch für Folientext und Deutsch für Arbeitsnotizen angenommen
- Tatsächliche Zeit- oder Folienvorgabe des Professors; bisher ist nur „höchstens drei Folien zum Projekt selbst“ dokumentiert
- Ob es ein vorgegebenes Präsentationstemplate gibt
- Sichtbarkeit und spätere Freigabeeinstellungen des GitHub-Repositories; aus der lokalen Konfiguration wird keine Aussage „privat“ oder „öffentlich“ abgeleitet
