# 06. Project Structure

## Purpose

Show where evidence lives before explaining roles, Git and implementation.

## Main takeaway

The repository links sources, data, code and checks so that decisions can be traced and new sessions can recover context.

## Verified project evidence

- Actual versioned areas: `research/`, `data/`, `analysis/`, `website/`, `ai-workflow/`, `docs/`, `presentation/`; `archive/` preserves starting conversations.
- `PROJECT_STATUS.md` records handoffs; `AGENTS.md` defines repository working rules. Historical handoffs are documented in [AW-006 onward](../../ai-workflow/log.md).
- `data/processed/`, `analysis/notebooks/`, chart/image asset directories and presentation exports contain placeholders only at the preparation baseline. `website/public/reference-data/` has a README, not a downloadable dataset.
- Local `Literatur/` and `Vorlesungsfolien/` PDFs, dependencies and generated website output are excluded from Git. The old [folder guide](../../docs/folder-structure.md) is a planning document and is not a complete current file inventory.

## Proposed on-slide text (English)

```text
research/      Questions and source checks
data/          Raw responses, snapshot, results
analysis/      Python scripts and tests
website/       Interactive application and tests
ai-workflow/   Prompts, decisions, validation, risks
docs/          Workflow and design decisions
presentation/  Plans, notes and real evidence
```

Handoff files: `PROJECT_STATUS.md` and `AGENTS.md`

## Proposed visual layout

An editable reduced repository tree with one short purpose per directory. Emphasize the path from a source to a result and its validation record. This is a verified text representation, not a fabricated Explorer screenshot. Keep local-only PDFs, generated output and empty directories out of the main tree.

## Presenter understanding (German)

Ein Repository ist der Projektordner mit seiner Git-Historie. Die Ordner trennen unterschiedliche Aufgaben. Beispielsweise liegt die Originalantwort der API unter data, die Berechnung unter analysis und der Prüfbericht neben dem Code. Diese Trennung hilft beim Suchen und verhindert, dass eine neue Sitzung nur von einem alten Chat abhängt. Ein Ordnername beweist allerdings noch keinen Inhalt.

## Draft speaking notes (German)

Die Struktur macht sichtbar, woher eine Aussage stammt. Forschung und Quellenprüfung liegen getrennt von Daten und Programmcode. Im AI-Workflow-Ordner stehen Aufträge, Prüfungen und bekannte Grenzen. Neue Codex-Sitzungen lesen außerdem den Projektstatus und die Arbeitsregeln. So bleibt Wissen im Projekt erhalten. Lokale Papers und automatisch erzeugte Dateien gehören nicht alle zur versionierten Evidenz.

## Lecture connection

M9: inspectable inputs, outputs and handoffs. M7: versioned project artifacts. Exact lecture slide numbers pending; [course alignment](../../docs/course-alignment.md). Folder organization supports reproducibility but does not establish that a fresh-machine reproduction has succeeded.

## Evidence paths

- [Project overview](../../README.md), [status](../../PROJECT_STATUS.md), [rules](../../AGENTS.md)
- [Decision record](../../docs/decisions.md), [workflow](../../docs/workflow.md)
- [Data provenance](../../data/raw/world_bank_2000_2024_metadata.json)
- [AI log](../../ai-workflow/log.md), [reference-data placeholder README](../../website/public/reference-data/README.md)
- [.gitignore](../../.gitignore)
- Git: `5afcb89` established the structure; current preparation baseline `389564b`.

## Missing assets / open questions

- Create the readable editable tree during Canva design; no new screenshot is required.

## Estimated speaking time

40 seconds. Use one traceability example, not a tour of every file.
