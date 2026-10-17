# 07. Human, ChatGPT & Codex

## Purpose

Make the real division of labor and the limits of independent review explicit.

## Main takeaway

The human set goals and accepted outcomes, ChatGPT supported planning, and Codex implemented and technically checked the work.

## Verified project evidence

- [Workflow role table](../../docs/workflow.md) assigns objectives, scope and acceptance to the user; planning/explanations/task formulation to ChatGPT Chat; implementation/tests/documentation and authorized Git steps to Codex.
- Human checks actually recorded: three literature headline findings and three analytical comparisons; six reported 6.1 browser checks; later informal website reviews: [literature validation](../../research/literature/exercise-2.3-validation.md), [website final review](../../website/tests/step-6-3-validation.md).
- Codex implemented Python and TypeScript, executed tests and the separate PowerShell spotcheck, reviewed diffs and documented limits: AW-005–AW-014 in the [log](../../ai-workflow/log.md).
- The separate library and cross-language calculations are technical checks. They are not a separate human reviewer. Limited Python/TypeScript expertise and no comprehensive human code audit remain explicit: [risk register](../../ai-workflow/risk-register.md).

## Proposed on-slide text (English)

| Human | ChatGPT | Codex |
|---|---|---|
| Objectives and scope | Planning and explanations | Implementation |
| Source and browser checks | Task specifications | Technical tests |
| Acceptance and interpretation | Review guidance | Documentation and Git |

**Technical checks do not replace independent human judgment**

## Proposed visual layout

An editable three-column responsibility table. Under it, show one concrete example: human requirement “compare three countries”, ChatGPT-supported task specification, Codex implementation/test report, human informal browser acceptance. Use existing records as small source labels, not fake portraits or simulated chat screenshots. Responsibilities, not tool capabilities in general, are the subject.

## Presenter understanding (German)

ChatGPT Chat war die Gesprächsebene für Ideen, Verständnis und Aufträge. Codex konnte im Projekt Dateien lesen und ändern sowie Werkzeuge wie Tests und Git ausführen. Das ist eine Arbeitsaufteilung, keine Garantie voneinander unabhängiger Prüfer. Wenn Codex seinen eigenen Code prüft, bleibt es AI-gestützte Kontrolle. Ein persönlicher Browsercheck zeigt Bedienbarkeit, aber nicht automatisch die Richtigkeit jeder Codezeile.

## Draft speaking notes (German)

Ich habe Ziele, Umfang und Annahmeentscheidungen festgelegt. ChatGPT unterstützte mich bei Planung, Erklärungen und der Formulierung kleiner Aufgaben. Codex setzte diese Aufgaben im Repository um, führte technische Prüfungen aus und dokumentierte die Ergebnisse. Selbst geprüft habe ich zentrale Literaturbefunde und die Website im Browser. Die PowerShell-Gegenprobe und die Testläufe führte dagegen Codex aus. Meine Programmierkenntnisse reichen nicht für einen vollständigen unabhängigen Code-Audit. Diese Grenze gehört zur Offenlegung der Arbeitsteilung.

## Lecture connection

M8: model plus tool environment, scoped tasks and acceptance gates. M3 / Lab 3 Exercise 4.2: independent judgment and responsibility. The [risk matrix](../../ai-workflow/risk-register.md) records supplied M8 slide references 9–12 and Lab 3 attribution; exact PDF references have not been independently checked and remain pending.

## Evidence paths

- [Role definitions](../../docs/workflow.md)
- [AI log AW-003, AW-005, AW-010, AW-012, AW-014](../../ai-workflow/log.md)
- [Literature human-review record](../../research/literature/exercise-2.3-validation.md)
- [6.1 manual checks](../../website/tests/step-6-1-validation.md), [6.3 boundaries](../../website/tests/step-6-3-validation.md)
- [Risks R13/R14](../../ai-workflow/risk-register.md)
- Git: `29b974f`, `b74f4c3`, `d1be8bc`.

## Missing assets / open questions

- Confirm during rehearsal that the first-person account matches the user's own experience; do not expand reported checks into an audit.
- Check exact lecture references before displaying slide numbers.

## Estimated speaking time

55 seconds.
