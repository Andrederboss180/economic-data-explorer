# 08. Git & Version Control

## Purpose

Show how bounded AI changes became reviewable, named development checkpoints.

## Main takeaway

Feature branches, diffs and tested commits made AI-generated changes traceable before integration into main.

## Verified project evidence

- Actual branches and endpoints: `analysis/step-5-validation` → `4a28809`; `web/step-6-1-foundation` → `29b974f`; `web/step-6-2-visualization` → `b74f4c3`; `web/step-6-3-comparison` → `d1be8bc`; `docs/step-7-risk-audit` → `389564b`.
- Local main reflog records fast-forward integration of these branches. A fast-forward produces a linear history without an extra merge commit.
- Logs record working/staged diff review, technical checks and explicit user finalization instructions. This was Codex technical review with human authorization, not a comprehensive independent human code review: [AW-008–AW-016](../../ai-workflow/log.md).
- The real one-line `.gitignore` comment diff in `fa62b33` illustrates a small change, not a product defect correction. No pull requests were used.
- Baseline `main` and local `origin/main` both pointed to `389564b`; current remote visibility was not independently verified.

## Proposed on-slide text (English)

**Scoped change → Diff review → Checks → Commit → Integration**

`analysis/step-5-validation`  `4a28809`

`web/step-6-3-comparison`  `d1be8bc`

Feature branches, fast-forward integration

No pull requests. No complete human code audit.

## Proposed visual layout

Use a compact editable timeline with the actual commit IDs and branch labels. Pair it with one short real diff, selected using `git show fa62b33 -- .gitignore`. Caption the diff as a documentation clarification. Do not draw a branching merge graph with merge commits that never existed. Current terminal evidence may later be captured with its actual capture date, not passed off as a historical screen.

## Presenter understanding (German)

Ein Diff zeigt Änderungen gegenüber einem früheren Stand. Ein Commit speichert einen benannten Stand; seine ID identifiziert ihn. Ein Branch ist eine Arbeitslinie für eine abgegrenzte Aufgabe. Bei einem Fast-forward wird main auf den fertigen Nachfolger vorgezogen. Ein Push überträgt Commits zum Remote. Git speichert auch falschen Code, deshalb gehören Tests und Prüfung vor den Commit. Die Freigabe eines Commits ist nicht dasselbe wie ein vollständiges persönliches Code-Review.

## Draft speaking notes (German)

Git machte die Änderungen von Codex nachvollziehbar. Größere Arbeitspakete bekamen eigene Branches, etwa die Analyse und der Ländervergleich. Codex prüfte die Änderungen und führte die vereinbarten Tests aus. Nach meiner ausdrücklichen Freigabe wurden die fertigen Stände committed und in main übernommen. Die Integration erfolgte als Fast-forward, deshalb sieht die Historie linear aus. Pull Requests haben wir nicht benutzt. Git liefert nachvollziehbare Zwischenstände; die fachliche Richtigkeit muss zusätzlich geprüft werden.

## Lecture connection

M7: diffs, staging, commits, branches and remotes. M8: review and acceptance gates for agent work. Exact lecture slide numbers pending; [mapping](../../docs/course-alignment.md). Do not copy the early Git guide's historical “branches not yet used” statement as current status.

## Evidence paths

- [Git guide, early setup context](../../docs/git-guide.md)
- [AI log, later branch/finalization evidence](../../ai-workflow/log.md)
- [Analysis validation](../../analysis/validation.md), [website final validation](../../website/tests/step-6-3-validation.md)
- Git commands: `git branch -avv`; `git log --oneline --decorate --graph --all`; `git reflog show main`; `git show fa62b33 -- .gitignore`.
- Commits: `fa62b33`, `4a28809`, `29b974f`, `b74f4c3`, `d1be8bc`, `389564b`.

## Missing assets / open questions

- Select a readable current Git capture or use faithful editable command output; no final Git screenshot exists yet.

## Estimated speaking time

60 seconds.
