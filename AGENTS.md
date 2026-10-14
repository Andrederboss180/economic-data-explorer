# Arbeitsregeln für AI-Unterstützung

Diese Regeln gelten für alle weiteren AI-gestützten Arbeitsschritte in diesem Repository.

## Projektziel

Erstelle einen kleinen, reproduzierbaren Economic Data Explorer und dokumentiere dabei den überprüften Einsatz von AI, API, Codex und Git. Eine nachvollziehbare Entwicklungsgeschichte ist wichtiger als zusätzliche Funktionen.

## Vor jeder Änderung

1. `PROJECT_STATUS.md` und die fachlich relevante README lesen.
2. Bestehende Dateien und Git-Status prüfen.
3. Keine offenen Annahmen als bestätigte Fakten darstellen.
4. Relevante Arbeit in kleine, separat prüfbare Schritte zerlegen.

## Nach jedem relevanten AI-Schritt

`ai-workflow/log.md` ergänzen mit:

- Aufgabe und gewünschtem Ergebnis
- Werkzeug oder Modell und verwendetem Prompt
- menschlicher oder technischer Prüfung
- übernommenem, verändertem oder verworfenem Ergebnis
- zugehörigem Commit oder Nachweis, sobald vorhanden

Tatsächliche Fehler und Korrekturen zusätzlich in `ai-workflow/validation-log.md` eintragen. Keine Fehler für die Präsentation erfinden.

## Wissenschaftliche Regeln

- Originalquellen öffnen und bibliografische Angaben prüfen.
- Korrelation nicht als Kausalität interpretieren.
- Datenquelle, Abrufdatum, API-URL, Indikator und Transformation dokumentieren.
- Fehlende Werte sichtbar behandeln und Beobachtungszahlen ausweisen.
- Kennzahlen mit einer unabhängigen Implementierung oder bekannten Testdaten kontrollieren.
- Reale Ergebnisse und illustrative Beispiele klar unterscheiden.

## Code-Regeln

- Verständliche Namen und kurze Funktionen verwenden.
- Komplexe Stellen knapp auf Deutsch oder Englisch kommentieren, je nach umgebendem Code.
- Tests für Datenverknüpfung, fehlende Werte und Statistik ergänzen.
- Zugangsdaten nie committen. `.env` verwenden, falls später doch Secrets nötig werden.
- Vor einem Commit Tests und Diff prüfen.

## Präsentationsregeln

- Maximal drei Folien dürfen hauptsächlich das Projekt erklären. Der Rest zeigt den AI-Workflow.
- Auf Folien nur verifizierte Zahlen, Quellen und echte Screenshots verwenden.
- Pro Folie eine klare Aussage und eine gut erkennbare visuelle Idee.
- Unbekannte Ergebnisse als Platzhalter markieren, nie schätzen oder erfinden.
- Entscheidungen, Grenzen und menschliche Kontrolle konkret benennen.

## Git-Regeln

- `main` bleibt präsentierbar.
- Größere Arbeitspakete in kurzen Feature-Branches entwickeln.
- Kleine, verständliche Commits mit Präfixen wie `docs:`, `data:`, `analysis:`, `web:`, `test:` und `slides:` erstellen.
- Keine bestehenden Änderungen des Nutzers überschreiben oder unbemerkt entfernen.
