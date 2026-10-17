# Slide plans: first content draft

Codex Chat 5 – Presentation Preparation, Step 8.1, 17 October 2026. Baseline: `389564b`; website: `d1be8bc`. Steps 1–7 remain complete. These are substantive content blueprints for human review, not finished slides.

Confirmed by the user: 15 slides, 15 minutes, final editor Canva. Slide copy is English; presenter explanations and preliminary speaking notes are German. Final presentation language/delivery can be refined during review. No Canva project, PPTX or PDF has been created.

## Navigation and timing budget

| Slide | Proposed English title | Plan | Seconds |
|---:|---|---|---:|
| 01 | Economic Data Explorer | [Title](01-title.md) | 20 |
| 02 | The Project | [Project](02-the-project.md) | 65 |
| 03 | Our AI Research Workflow | [Workflow](03-ai-research-workflow.md) | 50 |
| 04 | Ideation & Feedback | [Ideation](04-ideation-feedback.md) | 50 |
| 05 | Literature Review | [Literature](05-literature-review.md) | 75 |
| 06 | Project Structure | [Structure](06-project-structure.md) | 40 |
| 07 | Human, ChatGPT & Codex | [Roles](07-human-chatgpt-codex.md) | 55 |
| 08 | Git & Version Control | [Git](08-git-version-control.md) | 60 |
| 09 | World Bank API | [API](09-world-bank-api.md) | 65 |
| 10 | AI-Assisted Analysis | [Analysis](10-ai-assisted-analysis.md) | 65 |
| 11 | Website Development | [Website](11-website-development.md) | 60 |
| 12 | Context Management | [Context](12-context-management.md) | 50 |
| 13 | Reproducibility & AI Disclosure | [Reproduction/disclosure](13-reproducibility-ai-disclosure.md) | 60 |
| 14 | Failures & Fixes | [Failures](14-failures-fixes.md) | 75 |
| 15 | Limitations & Lessons Learned | [Lessons](15-limitations-lessons.md) | 60 |

- Part 1, slides 1–3: 2:15. Slide 3 is the workflow bridge; only slides 1–2 mainly introduce the economic project.
- Part 2, slides 4–13: 9:40.
- Part 3, slides 14–15: 2:15.
- Total estimated speaking time: **850 seconds = 14:10**. Buffer within 15:00: **50 seconds**, for transitions and pauses. These are planning estimates, not measured rehearsal results; extra Q&A would need a separate allowance.

## How to use the plans

Review slide 1 with ChatGPT and the user, explain the topic, refine content, then design that slide in Canva. Continue sequentially after review. The complete draft makes dependencies visible but is not final acceptance of every sentence. Each file separates minimal slide copy from supporting evidence, German explanations and preliminary first-person notes. More supporting material is available than should be spoken.

Use native Canva text, tables and diagrams where practical. Reuse actual screenshot evidence. Do not turn proposed layouts into simulated application screens or invented historical logs. [Older slide notes](../README.md) remain unchanged; this directory supplies the new numbering.

## Shared evidence boundaries

- Frozen reference: 75 complete country-year pairs and 150 indicator observations, retrieved `2026-10-16T12:35:25Z`; source update `2026-10-08`. Six country-period statistical results.
- Final plot/statistics/comparison screenshots `171727`, `171745`, `171800` show **2000–2019, n=20**. They cannot be labelled 2000–2024.
- 71 website tests and 19 Python tests are documented historical totals, not tests rerun for these plans. Automated checks and user-reported manual checks stay distinct.
- No full independent human code audit; no M6 LLM measurement; no controlled token/productivity/context experiment. Waiting-time estimates remain personal reports.
- Four chats were originally planned. Chat 4 completed risk review; the additional Chat 5 prepares the presentation. Old records retain their historical wording.
- Course mappings follow [course alignment](../../docs/course-alignment.md). Exact lecture/PDF slide references are pending verification; numbers inherited from the [risk matrix](../../ai-workflow/risk-register.md) are explicitly user-supplied.
- Literature findings are reused from the recorded source/human checks. Original PDF excerpts still need selection/checking before final Canva use. Local paper PDFs exist but are excluded from Git; official links remain in the source matrix.
- No live website snapshot fallback or tested presentation contingency. No current remote sharing/visibility confirmation.
- The old `data/API.md` screenshot name is stale; use [Erste API request.png](../assets/screenshots/Erste%20API%20request.png), with the rename documented in AW-014. No data documentation was changed for this task.

## Review and evidence navigation

- [Current deck outline and historical storyboard](../deck-outline.md)
- [Evidence checklist](../evidence-checklist.md)
- [Historical source ledger](../sources.md) (old slide numbering; each new plan lists its own evidence)
- [Prompt and constraints](../../ai-workflow/prompts/09-slide-blueprints.md)
- [AI workflow record, AW-017](../../ai-workflow/log.md)
- [Preparation validation, V-013](../../ai-workflow/validation-log.md)

## Remaining necessary work

Select readable existing evidence excerpts; check exact lecture citations and original literature excerpt; confirm title metadata; review first-person wording; design sequentially in Canva; check final citations, readability and timings; rehearse the contingency. Missing historical failing-test footage must remain missing, not be recreated.

## Technical preparation check

The corrected documentation check passed for all 15 substantive plans and their 11 content sections, numbering/titles and the 850-second budget. Across the 26 new/changed Markdown files, 310 local links/anchors resolve; UTF-8, final newlines, whitespace, code fences, heading spacing and table columns passed. All 17 new files were included in Git whitespace checks without staging. A separate read-only standard-library calculation confirmed the six stored statistical result rows; no website/Python product test suite or live API request was rerun. This technical check is not human content approval or final visual/rehearsal validation. Actual check-script correction and limits are recorded in V-013.
