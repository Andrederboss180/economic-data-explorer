# Git-Anleitung für dieses Projekt

## Grundidee

Git speichert nachvollziehbare Zwischenstände. `main` soll immer einen verständlichen und möglichst funktionierenden Stand enthalten. Größere Aufgaben bearbeiten wir in kurzen Branches und führen sie nach Prüfung zusammen.

## Tägliche Befehle

```powershell
git status
git diff
git add <datei-oder-ordner>
git diff --staged
git commit -m "docs: add verified literature notes"
```

## Feature-Branch anlegen

```powershell
git switch -c data/world-bank-api
```

Nach Fertigstellung und Prüfung:

```powershell
git switch main
git merge --no-ff data/world-bank-api
```

Den Branch löschen wir erst, wenn die Zusammenführung geprüft ist:

```powershell
git branch -d data/world-bank-api
```

## Empfohlene Branch-Namen

- `research/literature-review`
- `data/world-bank-api`
- `analysis/statistics`
- `web/scatterplot`
- `slides/ai-workflow`

## Commit-Stil

| Präfix | Beispiel |
|---|---|
| `docs:` | `docs: explain research scope` |
| `research:` | `research: add verified Phillips curve sources` |
| `data:` | `data: fetch World Bank indicators` |
| `analysis:` | `analysis: calculate country regressions` |
| `web:` | `web: add country selector` |
| `test:` | `test: cover missing annual values` |
| `slides:` | `slides: draft API workflow slide` |
| `fix:` | `fix: align years before correlation` |

## Was wir für die Präsentation sichern

- `git log --oneline --graph --decorate --all`
- Einen gut lesbaren Diff vor und nach einer Codex-Änderung
- Den Test, der einen Fehler sichtbar gemacht hat
- Den Commit, der den Fehler behoben hat

Screenshots kommen erst dann in `ai-workflow/evidence/screenshots/`, wenn sie eine echte Geschichte belegen.
