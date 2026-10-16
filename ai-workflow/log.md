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

---

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
