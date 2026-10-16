# AI-Workflow-Log

## AW-001: Ideation und Themenauswahl

- **Datum:** vor Projektstart, aus dem übernommenen Chat
- **Phase:** Ideation
**Status:** abgeschlossen

**Task**

Eine machbare Research Question finden, die Mathematik, Economics, öffentliche Daten, API-Nutzung, Website-Entwicklung und einen sichtbaren AI-Workflow verbindet.

**AI usage**

Ein strukturierter Ideation-Prompt gab Rolle, Kurskontext, Machbarkeit, gewünschte Datenquellen und Ausgabeformat vor. AI entwickelte mehrere Vorschläge und arbeitete drei Optionen mit Vor- und Nachteilen aus.

**Validation**

Die Optionen wurden nach Aufwand, Mathematikbezug, Economics-Bezug, Nutzwert der Website und Eignung zur Demonstration von AI bewertet. Der Nutzer traf die finale Auswahl selbst.

**Outcome**

Gewählt wurde der Economic Data Explorer. Der Umfang wurde auf Deutschland, Frankreich, Spanien, zwei World-Bank-Indikatoren und einfache lineare Statistik begrenzt. Die Alternativen wurden verworfen, weil sie zusätzliche LLM-Experimente und schwierigere Validierung erfordert hätten.

**Nachweise**

- `ai-workflow/prompts/01-ideation.md`
- `presentation/slides/04-ideation.md`
- `archive/Pasted text.txt`

## AW-002: Projektstruktur und Dokumentationssystem

- **Datum:** 14.10.2026
- **Phase:** Git und Projektaufbau
**Status:** technisch geprüft, menschliche Inhaltsprüfung ausstehend

**Task**

Alle bekannten Inhalte aus dem bisherigen Chat in einer dauerhaften, studentennahen Repository-Struktur sichern. Präsentation, Website, Forschung, Daten, Analyse und AI-Nachweise sollen getrennt, aber verlinkt sein.

**AI usage**

Codex fasste bestätigte Entscheidungen zusammen, trennte offene von abgeschlossenen Punkten, erstellte Dokumentationsdateien und bereitete ein Git-Repository auf `main` vor.

**Validation**

Dateibaum und interne Markdown-Links wurden geprüft. Die Archivkopie stimmt per SHA-256 mit dem bereitgestellten Ausgangstext überein. Git-Diff-Prüfung und Branch-Kontrolle waren erfolgreich. Der Nutzer soll Forschungsfrage, Scope und Präsentationsannahmen noch gegen die tatsächlichen Kursvorgaben abgleichen.

**Outcome**

Die Projektbasis ist angelegt. Unverifizierte Literatur und noch nicht abgerufene Daten bleiben sichtbar als offen markiert. Der nächste fachliche Schritt ist die Literaturrecherche.

**Nachweis**

- Initialer Git-Commit dieses Repositories

## AW-003: Lab 4, Exercise 2.3 Source Matrix

- **Datum:** 2026-10-14
- **Phase:** Literaturrecherche und Theorie
- **Modell:** GPT-6
- **Thinking effort:** medium
- **Status:** für den vereinbarten Minimalumfang abgeschlossen

**Task**

Die drei bereitgestellten Originalarbeiten nach Lab 4, Exercise 2.3 in einer Source Matrix mit Forschungsfrage, Daten, Methode, Hauptergebnis und Beziehung zu den anderen Papers zusammenfassen. Jede faktische Zelle sollte auf PDF-Seiten zurückgeführt werden.

**AI usage**

GPT-6 erstellte die Matrix aus den drei PDFs. Codex glich die Kernaussagen erneut mit den Originaltexten und offiziellen Quellenlinks ab und überführte Ergebnis, Audit und Präsentationsnotizen in die vorhandene Repository-Struktur.

**Validation**

Der AI-gestützte Audit fand 12 direkt durch die PDFs gestützte faktische Zellen und 3 Cross-paper comparisons. Keine Zelle wurde als erfunden erkannt; keine faktische Zelle musste in diesem Audit korrigiert werden. Diese Zahlen beschreiben einen AI-assisted source check, keinen vollständigen menschlichen Audit.

Der Studierende prüfte anschließend die drei zentralen Ergebnisse unabhängig in den Original-PDFs: Hindrayanto et al. auf PDF-Seite 4, Bulligan & Viviano auf PDF-Seite 20 sowie Faber & Züllig auf PDF-Seite 3. Alle drei Aussagen wurden bestätigt. Die drei Cross-paper comparisons wurden ebenfalls als angemessene analytische Interpretationen bewertet; sie bleiben ausdrücklich von direkten Paper-Befunden getrennt. Forschungsfrage, Daten und Methode jedes Papers wurden nicht zusätzlich vollständig menschlich Zell für Zell re-auditiert.

**Outcome**

Schritt 2 ist im vereinbarten Minimalumfang abgeschlossen. Die Literatur grenzt das Projekt klar ein: Die eigene Analyse bleibt deskriptiv und einfach. Sie darf keine strukturelle, kausale oder neuartige Phillips-Kurven-Schätzung behaupten. Lokale Paper-PDFs bleiben uncommitted; das Repository enthält Links, Zitationen, Seitenverweise und eigene Zusammenfassungen. Es werden für diesen Umfang keine weitere Literaturrecherche und keine Writing Exercises ergänzt.

**Nachweise**

- Prompt: `ai-workflow/prompts/02-literature-source-matrix.md`
- Matrix: `research/literature/exercise-2.3-source-matrix.md`
- Audit: `research/literature/exercise-2.3-validation.md`
- Präsentationsnotizen: `presentation/slides/04b-source-grounded-literature-review.md`
- Originalunterhaltung: `archive/Lab4 literature review original chat.txt`

## AW-004: GitHub-Verbindung und Git-Workflow

- **Datum:** 2026-10-16
- **Phase:** Git & Version Control (M7)
- **Status:** abgeschlossen

**Task**

Den tatsächlich verwendeten Git-Ablauf, die GitHub-Verbindung und den Wert von Git bei der Zusammenarbeit mit Codex dokumentieren. Schritt 3 soll erst nach Prüfung von Status, Remote und Historie abgeschlossen werden.

**AI usage**

Codex las den lokalen Git-Status und die Konfiguration aus, verglich `HEAD` mit `origin/main`, prüfte die Commit-Historie und formulierte daraus die Projektdokumentation sowie einen kurzen Präsentationsentwurf.

**Validation**

Vor der Dokumentationsänderung war der Arbeitsbaum sauber. `main` und `origin/main` zeigten beide auf `fa62b33`. `origin` war mit `https://github.com/Andrederboss180/economic-data-explorer.git` für Fetch und Push konfiguriert. Die Historie enthielt `5afcb89`, `dc9fe71` und `fa62b33`. Das Repository lag unter `C:\Users\andre\Präsentation (alles)` und damit nicht mehr im früheren OneDrive-Pfad. Die lokale Konfiguration belegt keine öffentliche oder private Sichtbarkeit des Remotes.

**Outcome**

Schritt 3 ist abgeschlossen. Die Dokumentation erklärt Diff-Prüfung, Staging, Commits, `.gitignore`, den Umzug aus OneDrive, Remote-Tracking und den ersten erfolgreichen Push. Feature-Branches und Pull Requests bleiben optionale, bisher nicht verwendete Arbeitsweisen. Schritt 4 – World Bank API (M5) ist als nächster, noch nicht begonnener Schritt markiert.

**Nachweise**

- `docs/git-guide.md`
- `docs/workflow.md`
- `presentation/slides/06-codex-git.md`
- lokale Ausgaben von `git status`, `git remote -v`, `git branch -vv` und `git log`

## AW-005: Minimaler World-Bank-API-Abruf

- **Datum:** 2026-10-16
- **Phase:** World Bank API (M5)
- **Status:** abgeschlossen; Codex-Review und technische Gegenprüfung durchgeführt

**Task**

Für Deutschland, Frankreich und Spanien die Inflations- und Arbeitslosenreihen 2000 bis 2024 ohne API-Key abrufen, validieren und als kleinen reproduzierbaren Snapshot speichern. Statistik und Website bleiben außerhalb dieses Schritts.

**AI usage**

Codex implementierte ein Python-Skript mit der Standardbibliothek sowie kleine Tests für Struktur-, Identitäts-, Jahres-, Nullwert- und Duplikatprüfungen. Die Rohantworten bleiben bytegetreu erhalten; Dezimalwerte werden ohne zusätzliche Float-Rundung in die CSV übertragen.

**Validation**

Der echte Abruf am `2026-10-16T12:35:25Z` lieferte sechs HTTP-200-Antworten. Jede Antwort enthielt Seite 1 von 1, 25 Jahresdatensätze und `lastupdated: 2026-10-08`. Alle sechs Reihen bestanden die Prüfungen. Insgesamt wurden 150 Quellbeobachtungen zu 75 Länder-Jahr-Zeilen verbunden. Es gab 0 `null`-Werte, 0 fehlende Jahresdatensätze und 0 Duplikate. Sechs Standardbibliothek-Tests bestanden.

Das erste manuelle PowerShell-Experiment für deutsche Inflation wurde separat dokumentiert. Seine Werte für 2020 bis 2024 stimmen exakt mit dem gespeicherten Rohsnapshot überein.

Zum Abschluss prüfte Codex den tatsächlichen Diff, `.gitignore` und die aufzunehmenden Dateien. Ein zusätzlicher Live-Abruf über PowerShell am `2026-10-16T13:01:16Z` bestätigte Frankreichs Arbeitslosenquote 2024 (`SL.UEM.TOTL.ZS`): API `7.4`, CSV `7.4`, exakter Textvergleich `True`. Der erste Vergleich hatte falsche CSV-Spaltennamen verwendet und wurde nach Header-Prüfung korrigiert. Befehl und Prüfgrenzen stehen in `data/API.md`. Das ist ein separater technischer Check durch Codex, kein unabhängiger menschlicher Vollaudit.

Abschlussauftrag: bestehende Step-4-Änderungen prüfen, Tracking der Daten und Nachweise sicherstellen, einen Frankreich-/Spanien-Wert direkt über PowerShell vergleichen, Tests und beide Diff-Prüfungen ausführen, Schritt 4 abschließen sowie auf `main` committen und pushen. Frühere archivierte Prompts und Antworten bleiben unverändert.

**Outcome**

Das Repository enthält das Abrufskript, sechs originale JSON-Antworten, eine Provenienzdatei, eine kombinierte CSV, Tests und M5-Präsentationsnotizen einschließlich echter Python-Installationshürde. Schritt 4 ist für den vereinbarten Minimalumfang abgeschlossen. Schritt 5 – Mathematical Analysis & Validation ist als Nächstes vorgesehen und wurde noch nicht begonnen. Der Abschluss wird im Commit `data: finalize validated World Bank API reference snapshot` festgehalten.

**Nachweise**

- Skript: `analysis/scripts/fetch_world_bank_data.py`
- Tests: `analysis/tests/test_fetch_world_bank_data.py`
- API-Dokumentation: `data/API.md`
- Provenienz: `data/raw/world_bank_2000_2024_metadata.json`
- Referenzdaten: `data/reference/reference_2000_2024.csv`
- Präsentationsnotizen: `presentation/slides/05-world-bank-api.md`
- Manueller Terminalnachweis: `presentation/assets/screenshots/Screenshot 2026-10-16 142607.png`

---

## AW-006: Kontextrekonstruktion und vier Codex-Chats

- **Datum:** 2026-10-16
- **Phase:** Chat 2, Vorbereitung von Schritt 5
- **Status:** dokumentiert; menschlicher Review ausstehend

**Task / AI usage:** Nutzerauftrag: Repository-Kontext wiederherstellen und vier geplante Chats mit Folienkonzept dokumentieren. Codex las README, Status, Roadmap, Workflow, Logs, Analyse-/Datendokumentation, Methodik und Präsentationsnotizen sowie Git-Status/Historie. Die genaue Modell-/Effort-Angabe `GPT-6.1 Sol, Medium` ist durch verfügbare Sitzungsmetadaten nicht bestätigt und wird nicht als Tatsache ausgegeben.

**Validation:** Sauberer Arbeitsbaum auf `main`, letzter Commit `952b6d4`; Schritte 1–4 laut Repository abgeschlossen. Keine frühere Chat-Historie als Beleg vorausgesetzt. Offizielle Pricing-Dokumentation für die Nutzungshinweise geöffnet; kein Tokenverbrauchsexperiment oder Effizienzgewinn behauptet.

**Outcome / Nachweise:** Vier-Chat-Plan in `ai-workflow/README.md`, Folienkonzept in `presentation/slides/06-codex-git.md`. Kontextwissen wird aus Git und Dokumentation rekonstruiert. Chatwechsel setzt Nutzungslimits nicht zurück und garantiert keine Tokenersparnis. Noch uncommitted.

## AW-007: Minimale Statistik und Validierung

- **Datum:** 2026-10-16
- **Phase:** Schritt 5 – Mathematical Analysis & Validation
- **Status:** technisch geprüft; menschlicher Review, Commit und Push ausstehend

**Task / AI usage:** Codex implementierte Pearson r und OLS von Inflation auf Arbeitslosigkeit für DEU/FRA/ESP, jeweils 2000–2024 und 2000–2019, ausschließlich aus der validierten CSV. Originalauftrag: `ai-workflow/prompts/04-statistics-tests.md`. Skript, 13 Analyse-Tests und begleitende Dokumentation wurden AI-generiert; die sechs Ergebniszeilen entstanden durch den tatsächlichen Skriptlauf.

**Validation:** Python 3.13.15; 19 Tests bestanden (13 Analyse + 6 API). Bekannte analytische Mini-Beispiele, Nullwert-/Zeitraum-/Identitätsprüfungen und separater Abgleich aller sechs realen Gruppen mit `statistics.correlation` und `statistics.linear_regression` (rel./abs. Toleranz 1e-12). Gespeicherte Ergebnisdatei gegen Neuberechnung geprüft. Codex prüfte den Diff einschließlich neuer Dateien und `git diff --check`; kein menschlicher Audit behauptet.

**Outcome:** Sechs reproduzierbare Ergebniszeilen, n=25 bzw. n=20, keine Ausschlüsse. Deutschlands r wechselt zwischen den Zeiträumen das Vorzeichen; Frankreich und Spanien bleiben negativ. Rein deskriptiv, keine kausale oder strukturelle Phillips-Kurven-Schätzung. Website und Schritt 6 nicht begonnen. Der Review fand einen tatsächlichen Rundungsfehler bei konstanten Dezimalreihen: zwei ergänzte `0.1`-Subtests schlugen vor der Korrektur fehl. Direkte Gleichheitsprüfung vor der Mittelwertbildung korrigierte die Konstantenerkennung; anschließend bestanden alle 19 Tests. Reale Ergebnisse unverändert. Fehler, Korrektur und Branch-Berechtigungshürde in V-004.

**Nachweise:** `analysis/scripts/analyze_reference_data.py`, `analysis/tests/test_analyze_reference_data.py`, `data/results/analysis_results.csv`, `analysis/validation.md` (Ergebnisse, Herkunft, Testfälle und Diff-Befehle), `presentation/slides/06-codex-git.md`. Branch `analysis/step-5-validation` auf Basis `952b6d4`; alles uncommitted zur gemeinsamen Prüfung.

## AW-008: Schritt 5 abschließen und versionieren

- **Datum:** 2026-10-16
- **Phase:** Abschluss von Chat 2 / Schritt 5
- **Status:** abgeschlossen nach erneutem technischem Review; Git-Integration ausdrücklich beauftragt
- **Werkzeug / Modell:** Codex, `GPT-6.1 Sol, Medium` laut berichteter Nutzerauswahl, nicht unabhängig als Runtime-Metadatum verifiziert. Dies ergänzt die anfänglich unbestätigte Angabe in AW-006.

**Task / Prompt:** Nutzerfolgeauftrag „Finalize Step 5 – Mathematical Analysis & Validation“: tatsächlichen Code, Tests, sechs Ergebniszeilen und kompletten Diff einschließlich neuer Dateien prüfen; echte `0.1`-Fehlerkorrektur und deskriptive Grenzen sichern; vier Chats dokumentieren, Modell nutzerberichtet ausweisen; Tests ausführen; Schritt 5 abschließen und Schritt 6 als Nächstes markieren; auf vorhandenem Feature-Branch committen, sicher bevorzugt per Fast-forward in `main` integrieren, `main` pushen und sauberen Arbeitsbaum verifizieren. Keine Website implementieren.

**Validation:** Erneut 19 Tests bestanden (13 Analyse + 6 API), einschließlich beider `0.1`-Regressionsfälle und unabhängig bekannter Lösungen. Alle sechs realen Gruppen mit `statistics` gegengeprüft (rel./abs. 1e-12). Neuberechnung erzeugt byte-identische Ergebnis-CSV; alle sechs Berichtzeilen stimmen einschließlich alpha mit den auf sechs Stellen gerundeten CSV-Werten überein. SHA-256 der Eingabe unverändert. Formeln entsprechen Pearson r und OLS mit Achsenabschnitt, x=Arbeitslosigkeit, y=Inflation. Keine kausale oder strukturelle Phillips-Kurven-Schätzung. Die zuvor tatsächlich beobachteten zwei fehlgeschlagenen Subtests bleiben als historische Chat-2-Evidenz beschrieben; kein neuer historischer Fehlerlauf wird behauptet. Kein unabhängiger menschlicher Code-Audit behauptet.

**Outcome:** Code und Ergebnisse unverändert übernommen; Status, Modellzuordnung und veraltete Branch-Aussagen korrigiert. Die Vier-Chat-Strategie und das Folienkonzept bleiben erhalten. Schritt 5 abgeschlossen, Schritt 6 / Chat 3 als Nächstes und noch nicht begonnen. Der ursprüngliche Auftrag zum Uncommitted-Lassen bleibt in der Promptablage historisch unverändert; der Folgeauftrag autorisiert die Git-Integration.

**Nachweise / Git:** `analysis/validation.md`, V-004, `analysis/tests/test_analyze_reference_data.py`, `data/results/analysis_results.csv`; vollständiger gestagter Diff und `git diff --check` vor Commit. Abschlusscommit auf `analysis/step-5-validation`: `analysis: finalize validated reference statistics`, Basis `952b6d4`. Hash und tatsächliches Merge-/Push-Ergebnis sind über Git-Historie und den Abschlussbericht nachvollziehbar. Für die Integration ausschließlich Fast-forward und normaler Push, kein Force-Push oder Verwerfen fremder Änderungen.

## Vorlage für neue Einträge

### AW-XXX: Kurzer Titel

- **Datum:** JJJJ-MM-TT
- **Phase:**
**Status:** geplant / geprüft / korrigiert / verworfen

**Task**

**AI usage**

**Validation**

**Outcome**

**Nachweise**

- Prompt:
- Datei oder Screenshot:
- Commit:
