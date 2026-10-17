# 15. Limitations & Lessons Learned

## Purpose

Close with remaining responsibility, concrete next steps and the limits of the demonstrated workflow.

## Main takeaway

AI can accelerate the work, but scientific responsibility remains with the researcher.

## Verified project evidence

- Limited Python/TypeScript expertise and dependence on AI for complex repairs are user-reported; no comprehensive human code audit was completed: [risk register R13](../../ai-workflow/risk-register.md).
- AI wrote code and tests; shared assumptions remain possible. Nine literature detail cells lack additional human audit, and full manual accessibility/device/error-path checks remain open: [literature record](../../research/literature/exercise-2.3-validation.md), [manual checklist](../../website/tests/step-6-3-validation.md).
- User-reported waits of about ten minutes for some larger tasks and about an hour for one allowance reset are experiences, not measured averages/productivity gains. Actual limit screenshots support the existence of the displayed restriction, not a universal current plan rule.
- Live API revisions/outages remain possible; no website snapshot fallback or tested presentation contingency. Automated synthetic error tests do not establish every real-world failure path.
- Analysis is descriptive with 20/25 annual pairs per country. No causal identification, significance tests or full structural Phillips-curve model: [analysis limits](../../analysis/validation.md).
- Next steps below are proposals, not completed mitigations. Prompt injection and agent permissions remain untested general risks, not observed attacks.

## Proposed on-slide text (English)

**Keep the scope reviewable**

- Limited coding expertise and AI-generated tests
- Remaining verification work
- Service limits and live API dependence
- Descriptive results only

Next: targeted manual checks, rehearsed fallback, smaller tasks

**AI can accelerate the work. Scientific responsibility remains mine.**

## Proposed visual layout

One short set of remaining limits with directly paired next actions: audit a critical calculation, finish targeted manual checks, rehearse static evidence for API failure, plan own review work during waits. End with the final takeaway as the largest text. If useful, use a small real allowance-message crop; avoid repeating the capacity image from slide 14. Keep detailed risk terminology in notes.

## Presenter understanding (German)

„Cognitive surrender“ bedeutet, das eigene Urteil zu früh an AI abzugeben. „Verification debt“ ist angesammelter Prüfaufwand: Code und Aussagen entstehen schneller, als sie vollständig kontrolliert werden. Bekannte Lösungen und getrennte Rechenwege helfen, beseitigen aber nicht alle Lücken. Ein automatischer Test eines simulierten Fehlers ist auch kein vollständiger Test unter echten Netz- und Gerätebedingungen. Der nächste sinnvolle Schritt ist gezieltere Kontrolle, nicht automatisch mehr Funktionen.

## Draft speaking notes (German)

Meine wichtigste Grenze bleibt die eigene Programmiererfahrung. AI-generierter Code und AI-generierte Tests können dieselbe falsche Annahme teilen. Außerdem bleiben manuelle Prüfungen offen. Codex-Wartezeiten und Nutzungslimits waren praktische Abhängigkeiten; eine Zeitersparnis haben wir nicht gemessen. Auch die Live-API kann ausfallen oder revidierte Daten liefern. Beim nächsten Mal würde ich Aufgaben kleiner halten, Wartezeiten für eigene Prüfung nutzen und einen Ausfallplan vorher testen. Die Ergebnisse bleiben deskriptiv. Mein Fazit ist: AI kann Arbeit beschleunigen. Die wissenschaftliche Verantwortung bleibt bei mir.

## Lecture connection

M3: cognitive surrender, independent judgment and limits of model outputs. Lab 3 Exercise 4.2: personal responsibility. M8: verification debt, monitoring and limits. Supplied M3 40–42/47 and M8 14–20 are recorded in the [risk matrix](../../ai-workflow/risk-register.md); exact lecture/PDF references remain pending.

## Evidence paths

- [Risk register F5/F6, R6, R13–R15](../../ai-workflow/risk-register.md)
- [User-reported experience in prompt 08](../../ai-workflow/prompts/08-risks-failures-limitations.md)
- [Literature verification boundaries](../../research/literature/exercise-2.3-validation.md)
- [Website manual-check boundaries](../../website/tests/step-6-3-validation.md), [analysis limitations](../../analysis/validation.md)
- [Actual allowance restriction](../assets/screenshots/Limitation%2C%20Kontingent%20ausgelaufen%2C%201h%20keine%20Codex%20Nutzung.png), [remaining allowance display](../assets/screenshots/Wenig%20Kontingent.png)
- [Unperformed token experiment](../../ai-workflow/token-experiment.md)
- Git: final website `d1be8bc`; risk reflection `389564b`.

## Missing assets / open questions

- User should confirm the personal closing formulation during sequential review.
- Rehearse the presentation and contingency; do not mark proposed improvements completed.
- Verify exact lecture references if used on the slide.

## Estimated speaking time

60 seconds. Deliver the final sentence slowly and stop.
