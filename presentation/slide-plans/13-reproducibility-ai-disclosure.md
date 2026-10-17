# 13. Reproducibility & AI Disclosure

## Purpose

Show how another person can trace calculations and identify AI contributions, closing the main workflow section.

## Main takeaway

Reproduction requires a fixed data baseline and runnable checks, while disclosure requires explicit records of who generated and verified the work.

## Verified project evidence

- Six raw JSON responses, exact API URLs, retrieval timestamp, source updates and a script hash are retained in [metadata](../../data/raw/world_bank_2000_2024_metadata.json).
- The frozen CSV has 75 complete pairs; the result CSV has six country-period rows. Analysis can run offline from the frozen input: [analysis instructions](../../analysis/README.md).
- Website setup uses its README, exact package versions and lockfile. Running the website still needs live API access; the snapshot is a validation baseline, not an implemented website fallback/download.
- Logs, prompt records, validation reports and Git document generation, checking, acceptance and remaining limitations. Some prompts are relevant excerpts/summaries rather than complete transcripts: [prompt index](../../ai-workflow/prompts/README.md).
- The student chose the question, checked selected original findings and reported browser review; Codex generated code/tests and performed technical checks. No comprehensive human code audit or fresh-machine reproduction is claimed.

## Proposed on-slide text (English)

**Reproduce the calculation**

Frozen data + metadata + scripts + tests

**Trace the AI contribution**

Prompts + validation logs + Git checkpoints

Human: scope, selected source/browser checks, interpretation

AI: planning support, code, tests and documentation

Footer: Live website needs the API; frozen analysis can run offline.

## Proposed visual layout

Use two editable evidence paths sharing the real `4a28809` checkpoint: data → calculation → checks, and prompt → AI change → review record. Small faithful excerpts from metadata and AW-008 provide concrete proof. Distinguish the online website from offline reference analysis. Keep command details in speaker notes rather than filling the slide with installation instructions.

## Presenter understanding (German)

Reproduzierbarkeit bedeutet hier: Mit denselben gespeicherten Daten und demselben Code sollen dieselben Referenzergebnisse entstehen. Neue Live-Daten können revidiert sein. Deshalb ist ein erneuter API-Abruf nicht dasselbe wie die Wiederholung der eingefrorenen Analyse. Metadaten beschreiben Herkunft und Zeitpunkt; eine Lockdatei hält Paketversionen fest. Offenlegung erklärt zusätzlich, welche Aufgaben AI und Mensch tatsächlich übernommen haben. Ein dokumentierter Ablauf ist noch kein Nachweis, dass er auf jedem fremden Rechner geprüft wurde.

## Draft speaking notes (German)

Für die Reproduktion speichern wir nicht nur Ergebniszahlen, sondern auch Rohantworten, URLs, Zeitstempel und Skripte. Die Python-Analyse kann mit dem eingefrorenen Datensatz offline wiederholt werden. Die Website arbeitet dagegen weiterhin mit Live-Daten. Prompts, Prüfberichte und Git zeigen, wie der Stand entstanden ist. Ich lege dabei offen, dass Codex Code und Tests erzeugt und die technischen Prüfungen ausgeführt hat. Meine eigenen Beiträge waren die Auswahl, bestimmte Quellen- und Browserchecks sowie die Interpretation. Die Dokumentation macht diese Arbeitsteilung prüfbar; einen vollständigen menschlichen Code-Audit oder einen Test auf jedem anderen Rechner behaupte ich nicht.

## Lecture connection

M9: reproducible workflow and disclosure. M7: versioned checkpoints. M8: monitoring and verification debt. Exact lecture slide numbers remain pending; [course alignment](../../docs/course-alignment.md). No M6 LLM measurement or experimental token savings.

## Evidence paths

- [Project README](../../README.md), [analysis instructions](../../analysis/README.md), [website instructions](../../website/README.md)
- [Metadata](../../data/raw/world_bank_2000_2024_metadata.json), [frozen CSV](../../data/reference/reference_2000_2024.csv), [results](../../data/results/analysis_results.csv)
- [Analysis script](../../analysis/scripts/analyze_reference_data.py), [Python tests](../../analysis/tests/test_analyze_reference_data.py)
- [Package definition](../../website/package.json), [lockfile](../../website/package-lock.json)
- [Prompts](../../ai-workflow/prompts/README.md), [AI log](../../ai-workflow/log.md), [validation log](../../ai-workflow/validation-log.md)
- Git: `952b6d4`, `4a28809`, `d1be8bc`, `389564b`.

## Missing assets / open questions

- Rehearse the final run instructions and demo contingency before presenting; do not overwrite the frozen snapshot merely to demonstrate retrieval.
- Decide how classmates receive the repository; remote visibility/sharing has not been verified. No public repository link should be promised yet.

## Estimated speaking time

60 seconds.
