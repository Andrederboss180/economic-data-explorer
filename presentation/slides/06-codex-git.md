# Presentation notes: Codex and Git development

## Kernaussage

Git macht AI-generierte Änderungen prüfbar: Erst zeigt der Diff jede Änderung, dann speichert ein Commit den freigegebenen Stand und der Push sichert ihn im verbundenen GitHub-Repository.

## Empfohlener Titel

**Codex and Git review loop**

## Exakter Folientext auf Englisch

**Review before commit**

```text
git status
git diff
git add <reviewed files>
git diff --staged
git commit -m "..."
git push
```

**Evidence from this project**

- `5afcb89` initial project structure
- `dc9fe71` verified literature documentation
- `fa62b33` focused `.gitignore` correction
- `main` tracks `origin/main`; first push succeeded

**Why it matters with Codex**

Diffs expose AI-generated changes before acceptance. Commits preserve reproducible checkpoints and allow a deliberate revert if a later change is wrong.

Kleine Statuszeile: `Step 5 uses the analysis/step-5-validation feature branch. No pull request has been used.`

## Visuelle Idee

Eine horizontale Review-Schleife mit einem echten, kurzen `.gitignore`-Diff in der Mitte und den drei Commit-IDs darunter. Kein GitHub-Dashboard nachbauen. Für die finale Folie einen gut lesbaren Terminal-Screenshot aus dem Repository verwenden.

## Sprechertext auf Englisch

> Codex can change many lines quickly, so I use Git as a review layer. I inspect the working-tree diff, stage only the reviewed files and inspect the staged diff before committing. The early project history contains three real checkpoints: the initial structure, the verified literature review and a focused correction to the ignore rules. The local main branch tracks origin main, and the first push to GitHub succeeded. This gives me a reproducible history and a safe point to return to if a later AI-generated change is wrong. Step 5 uses a feature branch for review before integration into main. We have not used a pull request.

## Beleggrenze

Die Befehlsfolge zeigt den reproduzierbaren Projektablauf, ist aber kein wortgetreues Terminalprotokoll der ersten Einrichtung. Belegt sind der aktuelle Remote, das Tracking von `main`, die Commit-Historie und der erfolgreiche erste Push. Die Sichtbarkeit des GitHub-Repositories wurde nicht verifiziert und wird daher nicht behauptet.

## Nachweise

- `docs/git-guide.md`
- `docs/workflow.md`
- `git status --short --branch`
- `git remote -v`
- `git branch -vv`
- `git log --oneline --decorate --graph --all`

## Context Management in AI-Assisted Development

Einfaches zukünftiges Folienkonzept, als kurzer Teil der Codex-/Git-Folie oder je nach Vortragszeit als Workflow-Einschub. Kein fertiger Foliensatz und kein zusätzlicher Projekt-Erklärblock.

**Title:** Context Management in AI-Assisted Development

**Visual:** AI Session → Git & Documentation → New AI Session

**Slide copy:**

> Project knowledge is reconstructed from version-controlled files.

Unter den Stationen stehen kurz `Task and changes`, `Reviewed code, data, status and decisions`, `Read files and continue`.

**Sprechnotiz:** Vier geplante Chats trennen (1) Grundlagen/Literatur/Git/API, (2) Analyse/Validierung, (3) Website und (4) Finalisierung/Präsentation. Chats 1–2 sind abgeschlossen, Chats 3–4 geplant. Die neue Sitzung liest `PROJECT_STATUS.md`, README, Roadmap, AI-Log und Git-Historie. Der Übergang braucht dokumentierte offene Punkte und freigegebene Commits. Dadurch muss nicht die ganze frühere Unterhaltung mitgeführt werden. Chatwechsel setzt Nutzungslimits nicht zurück. Wir behaupten weder garantierte noch gemessene Tokenersparnis. Aktuelle Nutzungshinweise: [OpenAI Pricing](https://learn.chatgpt.com/docs/pricing), geöffnet am 16.10.2026.

**Nachweis:** Chat 2 begann mit sauberem Arbeitsbaum auf `952b6d4`; die Dateien lieferten den Stand nach Schritt 4. Vier-Chat-Plan: `ai-workflow/README.md`. Modell für Chat 2: `GPT-6.1 Sol, Medium` laut berichteter Nutzerauswahl, nicht unabhängig als Runtime-Metadatum verifiziert.

## Mathematical Analysis & Validation: Review-Beispiel für diese Folie

**Aussage:** AI-generated calculations become reviewable through known test cases and a separate library check.

**Auf die Folie:** Ein kleines künstliches Beispiel, ausdrücklich als Testdaten markiert: x=(1,2,3), y=(3,5,7), erwartete Steigung 2, erwartetes r=1. Daneben ein später aufzunehmender echter Terminalausschnitt des Testlaufs. Tatsächlich bestanden am 16.10.2026 19 Tests (13 Analyse + 6 API). Kein Screenshot liegt hierfür bereits vor.

**AI contribution:** Codex generierte Analyse-Skript, 13 Tests und Dokumentation. Das Skript erzeugte sechs reale Ergebniszeilen aus dem eingefrorenen World-Bank-Snapshot.

**Technical control:** Bekannte Lösungen für positive, negative, unkorrelierte und nicht perfekte Beispiele; fehlende Werte und konstante Variablen; alle sechs realen Gruppen gegen `statistics.correlation`/`linear_regression` innerhalb rel./abs. 1e-12. Eine gespeicherte Ergebnisdatei wird gegen Neuberechnung geprüft.

**Human responsibility:** Code, Variablenrichtung, bekannte Lösungen, reale Ergebniszeilen und Interpretation vor Commit prüfen. Der Nutzer beauftragte den Abschluss nach erneutem Codex-Review ausdrücklich. Ein unabhängiger menschlicher Code-Audit wird damit nicht behauptet.

**Observed error and correction:** Der erste Testlauf deckte konstante ganzzahlige Reihen ab. Beim Review lieferten konstante `0.1`-Werte fälschlich r=0 statt undefiniert, weil die Mittelwertbildung minimale Rundungsreste erzeugte. Zwei ergänzte Dezimal-Subtests schlugen tatsächlich fehl. Direkte Gleichheitsprüfung vor der Mittelwertbildung behob den Fehler; danach bestanden alle 19 Tests. Die sechs realen Ergebniszeilen änderten sich nicht. Dieses Beispiel eignet sich auch für Folie 7. Ausführlicher Nachweis in `analysis/validation.md` und V-004. Zusätzlich scheiterte der erste Branch-Befehl an Sandbox-Rechten und gelang mit freigegebenen Rechten.

**Limit:** Deskriptive OLS mit 20/25 Jahresbeobachtungen, keine kausale oder vollständige strukturelle Phillips-Kurve. Zeitraumabhängigkeit bleibt sichtbar.

**Nachweise:** `ai-workflow/prompts/04-statistics-tests.md`, `analysis/validation.md`, `analysis/scripts/analyze_reference_data.py`, `analysis/tests/test_analyze_reference_data.py`, `data/results/analysis_results.csv`, AW-006/AW-007/AW-008 und V-004. Der Analysebericht enthält die relevanten Diff-Befehle. Entwicklungsbranch: `analysis/step-5-validation`; Finalisierung und Git-Integration vom Nutzer beauftragt. Schritt 6 wurde nicht begonnen.
