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

**Noch offen:** Alle Ergebniswerte und die Aussage dieser Folie.

## Folie 3: Research workflow

**Zweck:** Den gesamten Prozess als Orientierung für den Hauptteil zeigen.

**Auf die Folie:**

1. Research question
2. Literature and data
3. Codex implementation
4. Validation
5. Website and presentation

**Visual:** Ein horizontaler Prozess mit je einem echten Artefakt unter den Stationen, zum Beispiel Prompt, Quelle, Commit, Test und Website.

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
- Feature-Branches und Pull Requests: optional, bisher nicht verwendet

**Visual:** Ein zusammenhängendes Beispiel von Aufgabe zu Änderung zu Prüfung. Terminalbefehle müssen groß genug lesbar sein.

**Vollständiger Entwurf:** [slides/06-codex-git.md](slides/06-codex-git.md)

## Folie 7: Validation, risks and one real correction

**Zweck:** Die wichtigste Qualitätssicherung konkret belegen.

**Auf die Folie:**

- ein tatsächlich beobachteter Fehler oder eine konkrete Hochrisiko-Prüfung
- wie der Fehler erkannt wurde
- wie die Korrektur verifiziert wurde
- zwei weitere Risiken in sehr kurzer Form

**Visual:** Vorher/Nachher oder Test fehlgeschlagen/Test bestanden. Keine erfundene Fehlergeschichte.

## Folie 8: Lessons learned

**Zweck:** Präzise beantworten, wo AI nützlich war und wo menschliches Urteil entscheidend blieb.

**Auf die Folie:**

- stärkster AI-Beitrag
- wichtigste menschliche Kontrolle
- Grenze des Projekts
- eine konkrete Verbesserung für den nächsten Durchlauf

**Visual:** Zwei gegenübergestellte Bereiche, AI contribution und human responsibility, ergänzt durch einen kurzen Ausblick.

## Dramaturgie in einem Satz

Eine kleine empirische Frage wird durch strukturierte AI-Unterstützung schneller umsetzbar, bleibt aber nur durch Quellenprüfung, Datentests, unabhängige Berechnung und Git nachvollziehbar.
