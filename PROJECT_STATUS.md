# Projektstatus

- **Letzte Aktualisierung:** 16.10.2026
- **Phase:** Schritt 4 – World Bank API (M5) abgeschlossen; als Nächstes Schritt 5 – Mathematical Analysis & Validation
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
| Analyse | Geplant | Pearson-Korrelation, OLS-Steigung, Beobachtungszahl, Robustheitszeitraum |
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

Schritt 4 ist nach Codex-Review, sechs bestandenen Unit-Tests und einem separaten Live-PowerShell-Abgleich abgeschlossen. Frankreichs Arbeitslosenquote 2024 beträgt sowohl in der API als auch in der CSV exakt `7.4`. Das ist eine technische Gegenprüfung, kein vollständiger unabhängiger menschlicher Audit. Als Nächstes folgt Schritt 5 – Mathematical Analysis & Validation. Statistische Analyse und Website-Code wurden noch nicht begonnen.

## Noch zu bestätigen

- Exaktes Abgabedatum einschließlich Jahr und Zeitzone
- Präsentationssprache: derzeit Englisch für Folientext und Deutsch für Arbeitsnotizen angenommen
- Tatsächliche Zeit- oder Folienvorgabe des Professors; bisher ist nur „höchstens drei Folien zum Projekt selbst“ dokumentiert
- Ob es ein vorgegebenes Präsentationstemplate gibt
- Sichtbarkeit und spätere Freigabeeinstellungen des GitHub-Repositories; aus der lokalen Konfiguration wird keine Aussage „privat“ oder „öffentlich“ abgeleitet
