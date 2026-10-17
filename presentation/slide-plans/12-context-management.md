# 12. Context Management

## Purpose

Explain session transitions and distinguish the original four-chat plan from the actual fifth preparation chat.

## Main takeaway

Fresh sessions recovered project knowledge from versioned files and Git rather than assuming access to earlier conversations.

## Verified project evidence

- The original plan had four scoped chats: (1) foundations/literature/Git/API, (2) analysis, (3) website, (4) finalization and presentation: [historical plan](../../ai-workflow/README.md), AW-006.
- Actual recorded allocation: Chat 1 ended at `952b6d4`; Chat 2 at `4a28809`; Chat 3 at `d1be8bc`; Chat 4 completed risk review at `389564b`. Presentation preparation now uses Chat 5, per the current user instruction and AW-017.
- Chat 4 was the planned finalization session but completed risk review only. Chat 5 is the additional presentation session; do not invent an extra numbered risk chat.
- Handoffs read status, README, roadmap, logs and Git. The previous read-only Chat 5 inventory found a clean baseline at `389564b`.
- The [capacity screenshot](../assets/screenshots/Limitation%2C%20model%20is%20at%20capasity.png) shows compaction interruption, not measured quality loss. No controlled token-saving or context-quality experiment was performed.
- Switching chats is a context-management step, not a reset of account usage allowances. Historical limits are not universal current plan rules.

## Proposed on-slide text (English)

**Four chats planned. Presentation preparation moved to Chat 5.**

1 Foundations and API

2 Analysis

3 Website

4 Risk review

5 Presentation preparation

Session → status, evidence and Git → fresh session

No measured token savings. Chat switching does not reset usage allowances.

## Proposed visual layout

Editable five-stop timeline with the four existing completion hashes and “draft, uncommitted” for Chat 5. Under it, show one real status-file excerpt beside a short read/check/continue handoff. The original four-chat plan remains labelled historical. Do not imply that chat numbers are Git branches or that all conversations automatically share memory.

## Presenter understanding (German)

Kontext ist das Wissen, das eine Sitzung gerade zur Verfügung hat. Eine neue Sitzung muss nicht den gesamten alten Chat kennen, wenn Entscheidungen und offene Punkte in Dateien stehen. Git identifiziert den passenden Stand. Diese Methode hilft bei Übergaben, kann aber veraltete Dokumentation übernehmen. Der Chatwechsel ändert nicht das Nutzungskonto. Dass englische Prompts oder kürzere Chats Tokens eingespart hätten, wurde nicht gemessen.

## Draft speaking notes (German)

Ursprünglich waren vier Chats geplant. Die ersten drei behandelten Grundlagen und API, Analyse und Website. Im vierten Chat wurde die Risikoauswertung abgeschlossen. Die Präsentation bereiten wir jetzt zusätzlich in Chat fünf vor. Neue Sitzungen lesen die Projektdateien und prüfen Git, statt einen automatisch gemeinsamen Gesprächskontext vorauszusetzen. Das macht Übergaben nachvollziehbar. Es funktioniert aber nur, wenn Status und offene Punkte gepflegt werden. Einen Tokenvorteil haben wir nicht gemessen, und ein neuer Chat setzt Nutzungslimits nicht zurück.

## Lecture connection

M3: context degradation is a risk; this project did not measure it experimentally. M9: explicit handoffs. M8: tool/harness limits. Supplied M3 slides 25–27/33–36 and M8 9–12 are recorded in the [risk matrix](../../ai-workflow/risk-register.md), not independently verified PDF citations; check later.

## Evidence paths

- [Historical chat plan and current extension](../../ai-workflow/README.md)
- [AI log AW-006, AW-014–AW-017](../../ai-workflow/log.md), [current status](../../PROJECT_STATUS.md)
- [Preserved context-management notes](../slides/06-codex-git.md)
- [Risk register F4/R11](../../ai-workflow/risk-register.md), [unperformed token experiment](../../ai-workflow/token-experiment.md)
- [Compaction interruption screenshot](../assets/screenshots/Limitation%2C%20model%20is%20at%20capasity.png)
- [Chat 5 preparation prompt](../../ai-workflow/prompts/09-slide-blueprints.md)
- Git: `952b6d4`, `4a28809`, `d1be8bc`, `389564b`.

## Missing assets / open questions

- Select a short status excerpt from the reviewed preparation state; label Chat 5 as uncommitted until a later authorized commit.
- Verify exact course slide references. No new token/context experiment is needed.

## Estimated speaking time

50 seconds.
