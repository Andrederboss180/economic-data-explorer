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

## Separater früher Einschub: Repository structure and evidence

- [x] eigene frühe Folie nach der Workflow-Orientierung in der Deck-Outline vorgemerkt
- [x] tatsächliche Verzeichnisse `research/`, `data/`, `analysis/`, `website/`, `ai-workflow/`, `docs/`, `presentation/` am 17.10.2026 geprüft und Rollen zugeordnet
- [x] Einordnung als Workflow-/Git-/Reproduzierbarkeitsfolie, getrennt von Step 7; maximal drei hauptsächlich fachliche Projektfolien beibehalten
- [ ] tatsächlichen Dateibaum als lesbaren Text oder echten Explorer-/Terminalausschnitt für die spätere Folie auswählen
- [ ] prüfen, dass lokale Materialien und generierte Dateien nicht als vollständig versionierte Projektstruktur erscheinen

Nur Anforderung und vorhandene Verzeichnisse dokumentiert; keine neue Folie oder Aufnahme erstellt. [Outline](deck-outline.md).

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

- [x] echter `0.1`-Fehler anhand V-004, Analysebericht, Code/Tests und `4a28809` nachvollzogen
- [x] Fix und Regressionstests im aktuellen Code vorhanden; historischer Fehl-/Erfolgslauf protokolliert, kein separater Fehlercommit/Screenshot
- [x] Korrektur und damaliger erneuter 19-Test-Lauf dokumentiert; in Chat 4 keine Produkttests wiederholt
- [x] keine konstruierte Fehlergeschichte oder nachgestellte historische Terminalaufnahme

### Abschluss Website-Schritt 6.3

- [x] AI-generierter Vergleich und gemeinsame Länderzustände im Feature-Branch nachvollziehbar
- [x] 71 Website-Tests, 19 Python-Tests und alle sechs numerischen Referenzgruppen erneut geprüft
- [x] ESLint, TypeScript, Build und separater Live-Check bestanden
- [x] erfolgreicher informeller Browser-/Visualreview nutzerberichtet, getrennt von automatisierten Tests

Fünf nutzerbereitgestellte Website-Screenshots bei Wiederaufnahme am 17.10. lokal vorhanden: Hero/Einleitung, Auswahl/Plot, Kennzahlen/Jahrestabelle, Vergleich und Quellen. Codex sah die statischen Bilder an; [konkrete Bildlinks und Prüfgrenzen](../website/tests/step-6-3-validation.md), AW-014/V-010. Weitere frühere Website- und Workflow-/Nutzungslimitbilder unverändert erhalten. Keine umfassende Keyboard-/Geräte-/Endpoint-Retryprüfung oder eigener Codex-Browserlauf bestätigt. Beim damaligen Schritt-6-Abschluss war die Risikoauswertung noch nicht begonnen; der nachfolgende Chat-4-Audit ist separat dokumentiert.

### Schritt 7: zwei mögliche Risikofolien A/B

- [x] [A/B-Notizen](slides/07-risks-failures-limitations.md) mit englischen Aussagen und konkreten Code-/Git-/Bildbelegen vorbereitet
- [x] beobachtete Fälle, aktiv geminderte Risiken und verbleibende Grenzen im [Audit](../ai-workflow/risk-register.md) getrennt
- [x] vorhandenes Kapazitäts-/Compaction-Bild, Limitmeldung und Kontingentanzeige in Chat 4 tatsächlich geöffnet und verlinkt
- [x] ungefähr zehn Minuten pro größerer Aufgabe, unproduktive Wartezeit und ungefähr einstündiger Reset als Nutzerberichte gekennzeichnet; kein Zeit-/Leistungsbenchmark
- [x] OneDrive-Umzug belegt, kein unbelegter Ownership-/Datenverlustfehler behauptet
- [x] M3-/Lab-3-/M8-Matrix mit sechs geforderten Spalten erstellt; Foliennummern nur Nutzerkontext, lokale PDFs nicht als gelesen ausgegeben
- [x] Englisch als Kommunikationswahl dokumentiert; kein kontrollierter Sprach-/Tokenvergleich oder notwendiger Tokenvorteil behauptet
- [x] historische Limitbilder von heutiger Pro-Produktregel unterschieden; neue Chats setzen Kontingente nicht zurück
- [x] erneuter technischer Dokumentations-/Evidenzreview und ausdrücklicher Abschlussauftrag für Schritt 7 (AW-016); kein vollständiger unabhängiger menschlicher Audit behauptet
- [ ] spätere Auswahl lesbarer Ausschnitte; keine neue Aufnahme historischer Fehler fingieren

Die vorhandenen Bilder belegen Meldungen, keine umfassende Fehlerursache oder erfolgreich getestete Wiederherstellung. Prompt injection, Sycophancy und Kontextqualitätsabnahme wurden nicht systematisch getestet. Schritt 8 und finales Deck bleiben offen.

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
