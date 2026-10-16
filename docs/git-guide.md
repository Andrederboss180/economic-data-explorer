# Git-Anleitung für dieses Projekt

## Grundidee

Git speichert nachvollziehbare Zwischenstände. `main` soll immer einen verständlichen und möglichst funktionierenden Stand enthalten.

## Tatsächlich eingerichteter Stand

- Lokales Repository: `C:\Users\andre\Präsentation (alles)`
- Branch: `main`
- Remote: `origin` mit `https://github.com/Andrederboss180/economic-data-explorer.git`
- Tracking: `main` verfolgt `origin/main`
- Erster Push: erfolgreich; vor diesem Dokumentationsschritt zeigten `HEAD` und `origin/main` beide auf `fa62b33`
- Remote-Sichtbarkeit: nicht über die lokale Git-Konfiguration verifiziert; deshalb keine Behauptung „privat“ oder „öffentlich“

Das Repository wurde aus OneDrive in einen lokalen Ordner außerhalb der Synchronisierung verschoben. Dadurch sinkt das Risiko, dass OneDrive gleichzeitig mit Git Dateien im Arbeitsbaum oder im `.git`-Ordner verarbeitet.

## Unser realer Review-Ablauf

1. Codex oder der Studierende ändert einen kleinen, klar begrenzten Dateisatz.
2. `git diff` zeigt die noch nicht gestagten Änderungen zur menschlichen Prüfung.
3. `git add` übernimmt nur die geprüften Dateien in den nächsten Commit.
4. `git diff --staged` prüft genau den Stand, der committed wird.
5. `git commit` speichert einen benannten, reproduzierbaren Zwischenstand.
6. `git push` überträgt den geprüften Stand zu `origin/main`.

`.gitignore` hält lokale, generierte oder urheberrechtlich geschützte Dateien wie Paper-PDFs aus der Historie. Vor einem Commit verwenden wir zusätzlich `git diff --check`.

## Tägliche Befehle

```powershell
git status
git diff
git add <datei-oder-ordner>
git diff --staged
git commit -m "docs: add verified literature notes"
git push
```

## Warum Git bei der Zusammenarbeit mit Codex wichtig ist

- **Diff-Prüfung:** Codex kann viele Zeilen schnell ändern. `git diff` macht jede Änderung vor der Übernahme sichtbar.
- **Reproduzierbarkeit:** Commits verbinden einen dokumentierten Projektstand mit einer eindeutigen ID.
- **Rückkehr zu einem geprüften Stand:** Falls eine AI-Änderung ungeeignet ist, bleibt der vorherige Commit erhalten. Ein Revert soll bewusst und erst nach Prüfung erfolgen.

## Reale Commit-Beispiele

| Commit | Tatsächlicher Inhalt |
|---|---|
| `5afcb89` | Initiale Projektstruktur und Dokumentationssystem |
| `dc9fe71` | Source-grounded Literature Review abgeschlossen |
| `fa62b33` | `.gitignore` in einem separaten Korrektur-Commit präzisiert |

Diese Folge zeigt den Review-Gedanken: zuerst ein größerer dokumentierter Stand, danach eine kleine nachvollziehbare Korrektur.

## Verbindung mit GitHub

Die folgende Befehlsfolge entspricht dem verifizierten Endzustand. Die ursprüngliche Terminalhistorie wurde nicht archiviert, deshalb wird sie nicht als wortgetreues Protokoll ausgegeben.

```powershell
git remote add origin https://github.com/Andrederboss180/economic-data-explorer.git
git push -u origin main
git remote -v
git branch -vv
```

## Optionale Feature-Branches und Pull Requests

Feature-Branches und Pull Requests wurden bisher **nicht** verwendet. Sie sind eine Option für spätere größere Änderungen, aber kein bereits durchgeführter Projektschritt.

Beispiel für einen möglichen zukünftigen Branch:

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

## Mögliche zukünftige Branch-Namen

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
