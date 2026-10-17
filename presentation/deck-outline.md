# Storyboard der Präsentation

Die Folienzahl ist ein Arbeitsstand. Inhalt und Reihenfolge sind stabil genug zum Sammeln von Nachweisen, aber erst nach Prüfung der echten Kursvorgaben final.

## Folie 1: Research question and scope

**Zweck:** Das Untersuchungsproblem in weniger als einer Minute verständlich machen.

**Auf die Folie:**

- finale Research Question
- Deutschland, Frankreich, Spanien
- Inflation und Arbeitslosigkeit, 2000–2024
- Hinweis: descriptive relationship, no causal claim

**Visual:** Eine einfache Europakarte oder ein reduziertes Ländermotiv zusammen mit zwei klar beschrifteten Variablen. Keine Ergebniszahlen, solange die Analyse fehlt.

**Benötigte Nachweise:** geprüfte Indikatordefinitionen und zwei bis drei Literaturquellen.

## Folie 2: Economic Data Explorer

**Zweck:** Das fertige Produkt und ein echtes Forschungsergebnis zeigen.

**Auf die Folie:**

- großer Screenshot oder Live-Demo-Ausschnitt der Website
- ein ausgewählter, geprüfter Ländervergleich
- eine kurze Lesehilfe zu `r`, `β` und `n`

**Visual:** Website-Screenshot plus echtes Diagramm. Der Screenshot soll die Interaktion zeigen, nicht die ganze Seite verkleinern.

**Stand nach Schritt 5:** Geprüfte Ergebniswerte stehen in `analysis/validation.md`; endgültige Folienaussage und Website-Screenshot folgen später.

## Folie 3: Research workflow

**Zweck:** Den gesamten Prozess als Orientierung für den Hauptteil zeigen.

**Auf die Folie:**

1. Research question
2. Literature and data
3. Codex implementation
4. Validation
5. Website and presentation

**Visual:** Ein horizontaler Prozess mit je einem echten Artefakt unter den Stationen, zum Beispiel Prompt, Quelle, Commit, Test und Website.

## Separater früher Einschub nach Folie 3: Repository structure and evidence

**Verbindlich vorgemerkt, noch keine Folie erstellt.** Eigene Folie im Workflow-/Git-/Reproduzierbarkeitsteil, nicht in der Step-7-Risikodiskussion. Die Arbeitsnummern bleiben bis zur finalen Reihenfolge vorläufig.

**Aussage:** Die tatsächliche Ordnerstruktur verbindet Quellen, Code, Prüfung und Präsentation mit nachvollziehbarer Evidenz.

**Auf die Folie:** ein reduzierter echter Repository-Baum mit Rollen:

- `research/`: Frage, Methodik und Literaturprüfung
- `data/`: originale API-Antworten, Referenz-CSV und berechnete Ergebnisse
- `analysis/`: Python-Skripte, Tests und Validierungsbericht
- `website/`: React-/TypeScript-Implementierung und Website-Tests
- `ai-workflow/`: Prompts, AI-Log, Fehlerkorrekturen und Risiken
- `docs/`: Statusübergänge, Entscheidungen, Workflow und Roadmap
- `presentation/`: Storyboard, Foliennotizen, Quellen und echte Screenshots

**Visual/Nachweis:** Die sieben Verzeichnisse existieren im am 17.10.2026 geprüften Arbeitsbaum. Später einen lesbaren tatsächlichen Dateibaum/Explorer-Ausschnitt aufnehmen oder den verifizierten Baum als Text setzen. `PROJECT_STATUS.md`, `AGENTS.md` und Git-Checkpoints kurz als Übergaberegeln zuordnen. Optional `archive/` als Ausgangsmaterial nennen; lokale `Literatur/`, `Vorlesungsfolien/`, `tmp/` und generierte Dateien nicht als vollständig versionierte Hauptartefakte ausgeben. Kein Screenshot wurde dafür neu erzeugt.

**Einordnung:** Workflow-Folie über Prüfbarkeit und Git, keine zusätzliche Ergebnis-/Projektvorstellung. Höchstens drei Folien bleiben hauptsächlich beim fachlichen Projekt. [Ordnerrollen](../README.md#ordnerstruktur), [Strukturnotizen](../docs/folder-structure.md), [Nachweischeckliste](evidence-checklist.md).

## Folie 4: Ideation and narrowing the question

**Zweck:** Zeigen, wie ein strukturierter Prompt Optionen erzeugte und wie der Mensch entschied.

**Auf die Folie:** Promptaufbau, drei Ideen, Auswahlkriterien und finale Entscheidung.

**Visual:** Eine Entscheidungsstrecke vom Prompt über drei Optionen zur gewählten Forschungsfrage.

**Vollständiger Entwurf:** [slides/04-ideation.md](slides/04-ideation.md)

### Möglicher Evidenz-Einschub nach Folie 4

**Source-grounded literature review:** Zeigt den Weg von drei PDFs zur 15-zelligen Source Matrix, die AI-gestützte Audit-Bilanz, den menschlichen Minimalcheck und die Abgrenzung der eigenen Forschungsfrage. Die Notizen stehen in [slides/04b-source-grounded-literature-review.md](slides/04b-source-grounded-literature-review.md). Je nach Vortragszeit wird dieser Inhalt eine eigene Folie oder ein kurzer Teil der Workflow-Folie.

## Folie 5: World Bank API and data checks

**Zweck:** API-Nutzung anschaulich und technisch einfach erklären.

**Auf die Folie:**

- ein gekürzter Endpoint mit markierten Parametern
- kleine echte JSON-Probe aus dem Deutschland-Abruf
- Verarbeitung: request, JSON, validate, save
- Ergebnis: sechs gültige Antworten, 150 Quellbeobachtungen, 75 CSV-Zeilen

**Visual:** API-Antwort und daraus entstandene zwei oder drei Datenzeilen. Kein großer Codeblock.

**Vollständiger Entwurf:** [slides/05-world-bank-api.md](slides/05-world-bank-api.md)

## Folie 6: Codex and Git development

**Zweck:** Kontrollierte AI-gestützte Entwicklung statt bloßer Codegenerierung zeigen.

**Auf die Folie:**

- Review-Schleife `git diff`, Staging, Prüfung und Commit
- echter Verlauf `5afcb89`, `dc9fe71`, `fa62b33`
- `main` verfolgt `origin/main`; erster Push war erfolgreich
- Schritt 5 verwendet `analysis/step-5-validation`; kein Pull Request verwendet

**Visual:** Ein zusammenhängendes Beispiel von Aufgabe zu Änderung zu Prüfung. Terminalbefehle müssen groß genug lesbar sein.

**Vollständiger Entwurf:** [slides/06-codex-git.md](slides/06-codex-git.md)

**Ergänzung aus Chat 2:** Derselbe Entwurf enthält das zukünftige Konzept "Context Management in AI-Assisted Development" (`AI Session → Git & Documentation → New AI Session`) und ein belegtes Statistik-/Testbeispiel. Je nach Vortragsdauer in Folie 6 integrieren oder als Workflow-Einschub verwenden; die endgültige Folienzahl bleibt offen.

## Mögliche Folie 7A: What Went Wrong? Real Failures and Fixes

**Aussage:** Der erste grüne Testlauf reichte nicht; Review fand den echten `0.1`-Fehler. Python-/Dependency-/Testpfadprobleme und Codex-Kapazität waren zusätzliche Betriebsprobleme.

**Visual:** Echter Fix-/Testausschnitt aus `4a28809`, kurzer Ausschnitt des vorhandenen Kapazitäts-/Compaction-Bilds. Historischer Fehlerlauf nur als protokollierten Lauf kennzeichnen; kein separater roter Testcommit/Screenshot vorhanden. Zeitangaben klar nutzerberichtet.

## Mögliche Folie 7B: Remaining Risks: Human Oversight and AI Dependence

**Aussage:** Begrenzte eigene Code-Expertise, offene menschliche Prüfungen und AI-generierte Tests lassen Verification debt und Cognitive surrender als Risiken bestehen. Vier Chats/Git helfen bei Übergaben; Verfügbarkeit, Kontingente und Agentenrechte bleiben Grenzen.

**Visual:** Echter Git-Verlauf und noch offene manuelle 6.3-Checkliste. Keine getestete Prompt-injection-Abwehr oder umfassenden technischen Hard Constraints behaupten.

**Notizen für beide:** [Step-7-Folien A/B](slides/07-risks-failures-limitations.md), [Risikoregister und M3/Lab-3/M8-Evidenzmatrix](../ai-workflow/risk-register.md). Zwei mögliche Folien, noch kein Deck. Literatur-/Statistik-/API-Kontrollen mindern Risiken; sie beweisen keine Fehlerfreiheit. Vorlesungsnummern stammen vom Nutzer, lokale PDFs wurden für Schritt 7 nicht gelesen.

## Folie 8: Lessons learned

**Zweck:** Präzise beantworten, wo AI nützlich war und wo menschliches Urteil entscheidend blieb.

Bei Verwendung beider Step-7-Folien hier nur konkrete persönliche Lernentscheidung und Verbesserung ergänzen, keine Wiederholung der Risikoliste. Endgültige Gesamtzahl und Vortragsdauer bleiben offen.

**Auf die Folie:**

- stärkster AI-Beitrag
- wichtigste menschliche Kontrolle
- Grenze des Projekts
- eine konkrete Verbesserung für den nächsten Durchlauf

**Visual:** Zwei gegenübergestellte Bereiche, AI contribution und human responsibility, ergänzt durch einen kurzen Ausblick.

## Dramaturgie in einem Satz

Eine kleine empirische Frage wird durch strukturierte AI-Unterstützung schneller umsetzbar, bleibt aber nur durch Quellenprüfung, Datentests, unabhängige Berechnung und Git nachvollziehbar.
