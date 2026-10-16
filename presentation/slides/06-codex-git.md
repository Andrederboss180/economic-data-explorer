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

Kleine Statuszeile: `Feature branches and pull requests are optional and have not been used yet.`

## Visuelle Idee

Eine horizontale Review-Schleife mit einem echten, kurzen `.gitignore`-Diff in der Mitte und den drei Commit-IDs darunter. Kein GitHub-Dashboard nachbauen. Für die finale Folie einen gut lesbaren Terminal-Screenshot aus dem Repository verwenden.

## Sprechertext auf Englisch

> Codex can change many lines quickly, so I use Git as a review layer. I inspect the working-tree diff, stage only the reviewed files and inspect the staged diff before committing. The project history contains three real checkpoints before this documentation update: the initial structure, the verified literature review and a focused correction to the ignore rules. The local main branch tracks origin main, and the first push to GitHub succeeded. This gives me a reproducible history and a safe point to return to if a later AI-generated change is wrong. We have not used feature branches or pull requests yet.

## Beleggrenze

Die Befehlsfolge zeigt den reproduzierbaren Projektablauf, ist aber kein wortgetreues Terminalprotokoll der ersten Einrichtung. Belegt sind der aktuelle Remote, das Tracking von `main`, die Commit-Historie und der erfolgreiche erste Push. Die Sichtbarkeit des GitHub-Repositories wurde nicht verifiziert und wird daher nicht behauptet.

## Nachweise

- `docs/git-guide.md`
- `docs/workflow.md`
- `git status --short --branch`
- `git remote -v`
- `git branch -vv`
- `git log --oneline --decorate --graph --all`
