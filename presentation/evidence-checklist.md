# Nachweis-Checkliste für die Präsentation

## Folie 1: Forschungsfrage

- [ ] Indikatordefinitionen offiziell geprüft
- [ ] zwei bis drei Literaturquellen bestätigt
- [ ] Zeitraum und Länder korrekt
- [ ] keine kausale Formulierung

## Folie 2: Website und Ergebnis

- [x] fünf nutzerbereitgestellte Website-Screenshots lokal vorhanden und als statische Bildevidenz angesehen; Links im 6.3-Bericht
- [ ] geeignete Website-Screenshots für die Folien auswählen
- [ ] Ergebniswerte gegen Python geprüft
- [ ] Abrufdatum oder Referenzdatenstand genannt
- [ ] Achsen, Einheiten und `n` sichtbar

## Folie 3: Workflow

- [ ] pro Station ein echter Nachweis
- [ ] Reihenfolge entspricht dem tatsächlichen Projektverlauf
- [ ] AI-Einsatz und menschliche Kontrolle unterscheidbar

## Folie 4: Ideation

- [x] finaler Ideation-Prompt gespeichert
- [x] drei Alternativen dokumentiert
- [x] Auswahlkriterien dokumentiert
- [x] menschliche Entscheidung dokumentiert
- [ ] lesbarer Promptausschnitt oder Screenshot erstellt

## Folie 5: API

- [x] echter Endpoint
- [x] echte, gekürzte JSON-Antwort
- [x] tatsächliche Antwortstruktur und Parameter dokumentiert
- [x] Datenchecks ausgeführt
- [x] Abrufdatum und World-Bank-`lastupdated` vorhanden
- [x] Unterschied zwischen Daten-API und LLM-API erklärt
- [x] echter PowerShell-Screenshot mit Endpoint, Metadaten und fünf Werten vorhanden

## Source-grounded literature review

- [x] Exercise-2.3-Prompt unverändert dokumentiert
- [x] drei Papers mit offiziellen Links zitiert
- [x] jede faktische Matrixzelle mit PDF-Seiten versehen
- [x] AI-gestützte Bilanz 12 direkte Belege, 3 Synthesen, 0 erkannte Erfindungen dokumentiert
- [x] Status als AI-gestützter Audit gekennzeichnet
- [x] drei Hauptaussagen vom Studierenden selbst auf PDF-Seiten 4, 20 und 3 geprüft
- [x] drei Cross-paper comparisons als angemessene analytische Interpretationen freigegeben
- [x] klar vermerkt, dass keine vollständige menschliche Prüfung aller 15 Zellen erfolgte

## Folie 6: Codex und Git

- [x] tatsächlicher Branch- und Remote-Tracking-Status dokumentiert
- [x] begrenzter, verständlicher Diff-Ablauf erklärt
- [x] echte Commit-IDs und Verlauf dokumentiert
- [x] erfolgreicher erster Push belegt
- [x] Feature-Branches tatsächlich für Schritte 5 und 6.1 verwendet; kein Pull Request behauptet
- [ ] finalen Terminal-Screenshot für die Folie erstellen

## Folie 7: Validierung

### Ergänzende Evidenz aus Website-Schritt 6.1

- [x] 32 Website-Tests und 19 Python-Tests erneut bestanden; Lint/Typecheck/Build geprüft
- [x] separater Live-Test: 18 echte Werte gegen eingefrorene CSV geprüft
- [x] sechs persönliche Browserchecks vom Nutzer berichtet, getrennt von Automatisierung dokumentiert
- [x] Deutschland-Inflation 2024 ungefähr 2.26 % und Frankreich-Arbeitslosigkeit 2024 gleich 7.4 % manuell bestätigt
- [x] Nutzbarkeit bei schmalem Browserfenster nutzerberichtet bestätigt
- [ ] lokaler Website-Screenshot aus 6.1 (damals nicht bereitgestellt/erstellt)

Nachweis: [Website-Validierung und Prüfgrenzen](../website/tests/step-6-1-validation.md), AW-010. Keine zusätzlichen Browser-/Geräteprüfungen oder vollständiger Code-Audit behauptet.

- [ ] tatsächlicher Fehler oder echte Hochrisiko-Prüfung
- [ ] reproduzierbarer Nachweis
- [ ] Korrektur und erneuter Test
- [ ] keine konstruierte Fehlergeschichte

### Abschluss Website-Schritt 6.3

- [x] AI-generierter Vergleich und gemeinsame Länderzustände im Feature-Branch nachvollziehbar
- [x] 71 Website-Tests, 19 Python-Tests und alle sechs numerischen Referenzgruppen erneut geprüft
- [x] ESLint, TypeScript, Build und separater Live-Check bestanden
- [x] erfolgreicher informeller Browser-/Visualreview nutzerberichtet, getrennt von automatisierten Tests

Fünf nutzerbereitgestellte Website-Screenshots bei Wiederaufnahme am 17.10. lokal vorhanden: Hero/Einleitung, Auswahl/Plot, Kennzahlen/Jahrestabelle, Vergleich und Quellen. Codex sah die statischen Bilder an; [konkrete Bildlinks und Prüfgrenzen](../website/tests/step-6-3-validation.md), AW-014/V-010. Weitere frühere Website- und Workflow-/Nutzungslimitbilder unverändert erhalten; noch keine inhaltliche Risikoauswertung. Keine umfassende Keyboard-/Geräte-/Endpoint-Retryprüfung oder eigener Codex-Browserlauf bestätigt. Diese Evidenznotizen beginnen weder Schritt 7 noch die finale Präsentation.

## Folie 8: Lessons learned

- [ ] Aussagen aus dem echten Projektverlauf abgeleitet
- [ ] konkreter AI-Nutzen
- [ ] konkrete menschliche Verantwortung
- [ ] fachliche und technische Grenze

## Finale Qualitätsprüfung

- [ ] Vorgaben des Professors vollständig geprüft
- [ ] Quellen pro Folie dokumentiert
- [ ] keine Platzhalter oder illustrativen Zahlen übrig
- [ ] Folien gerendert und visuell geprüft
- [ ] Schrift auf Präsentationsdistanz lesbar
- [ ] Vortrag einmal mit Zeitmessung geprobt
- [ ] Offline- oder API-Ausfallplan getestet
