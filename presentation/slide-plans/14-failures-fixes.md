# 14. Failures & Fixes

## Purpose

Open reflection with genuine failures and distinguish corrected code from setup and service interruptions.

## Main takeaway

A green test run did not guarantee correct behavior, and documented corrections were more useful than assuming the AI output was reliable.

## Verified project evidence

- Statistical bug: the first 19-test run covered integer constants and passed. Review then found constant `0.1` series returning r=0 instead of undefined. Two added decimal subtests failed before the fix; direct equality checks before averaging corrected the behavior; all 19 tests then passed. Real country results were unchanged: [analysis report](../../analysis/validation.md), V-004.
- Corrected code and regression tests exist in `4a28809`; the failing intermediate code/run was not separately committed or captured as a screenshot.
- Python setup: `python.exe` initially resolved to a Windows Store placeholder. Installation of Python 3.13.15 and tests with bytecode cache disabled allowed execution: V-003 / [API notes](../slides/05-world-bank-api.md).
- Website tooling: TypeScript 7.0.2 conflicted with the ESLint parser dependency; supported 6.0.3 was used. Three test-path failures were corrected using `node:path.resolve`; subsequent 32-test foundation checks passed: V-005 / [6.1 report](../../website/tests/step-6-1-validation.md).
- Actual screenshot shows “Compaction interrupted” and model capacity errors. It does not prove lost files or successful recovery by switching models: [image](../assets/screenshots/Limitation%2C%20model%20is%20at%20capasity.png).

## Proposed on-slide text (English)

**A passing test suite still missed an edge case**

Constant 0.1 values: r=0 was wrong

Added decimal checks failed; direct equality fixed the bug

19 Python tests passed after correction

Other interruptions: Python setup, website dependencies/test paths, model capacity

Footer: Documented historical runs; real country results unchanged. No archived failing-run screenshot.

## Proposed visual layout

Main visual: actual current constant-check code beside the actual decimal test. Caption them “corrected code and regression tests, 4a28809”. A compact secondary row identifies the setup/dependency corrections and a small real capacity-image crop. The first draft should not give each problem an equal panel. No fabricated red/green terminal screen, false fix commit or reproduced historic failure.

## Presenter understanding (German)

Computer speichern Dezimalzahlen häufig nur näherungsweise. Bei identischen 0,1-Werten kann die Mittelwertrechnung einen winzigen Rundungsrest erzeugen. Die ursprüngliche Prüfung erkannte deshalb die konstante Reihe nicht zuverlässig. Für eine konstante Variable ist die Korrelation undefiniert, nicht null. Ein zusätzlicher Test machte die Lücke sichtbar. Bei konstantem y kann trotzdem eine horizontale Regressionsgerade gültig sein. Setup- und Dienstprobleme sind andere Fehlerarten; sie ändern nicht automatisch die Wirtschaftsdaten.

## Draft speaking notes (German)

Der wichtigste echte Fehler betraf konstante Dezimalwerte. Die ersten Tests waren grün, aber der anschließende Codex-Review fand für identische 0,1-Werte eine Korrelation von null. Richtig wäre undefiniert gewesen. Ergänzte Dezimaltests schlugen tatsächlich fehl. Nach einer direkten Gleichheitsprüfung vor der Mittelwertrechnung bestanden alle neunzehn Tests. Die realen Länderergebnisse blieben unverändert. Ich habe den Fehler nicht persönlich im Code entdeckt. Weitere Hürden waren die Python-Einrichtung, inkompatible Website-Abhängigkeiten und falsche Testpfade. Das echte Bild zeigt außerdem eine Kapazitätsunterbrechung bei der Kontextkomprimierung. Nicht für jede Unterbrechung haben wir eine technische Ursache oder Wiederherstellung vollständig nachgewiesen.

## Lecture connection

M3: reasoning brittleness and validation; M8: harness dependencies, monitoring and tool limits. Supplied M3 slide 47 and M8 slides 9–16 are recorded in the [risk matrix](../../ai-workflow/risk-register.md); precise lecture references need PDF checking. No empirical sycophancy, injection or context-decay experiment is claimed.

## Evidence paths

- [Historical failure and correction](../../analysis/validation.md)
- [Current constant detection](../../analysis/scripts/analyze_reference_data.py), [decimal regression tests](../../analysis/tests/test_analyze_reference_data.py)
- [Validation log V-003–V-005](../../ai-workflow/validation-log.md), [risk register F1–F4](../../ai-workflow/risk-register.md)
- [Website setup corrections](../../website/tests/step-6-1-validation.md)
- [Actual capacity/compaction screenshot](../assets/screenshots/Limitation%2C%20model%20is%20at%20capasity.png)
- [Preserved reflection notes](../slides/07-risks-failures-limitations.md)
- Git: snapshot/setup `952b6d4`; corrected statistics `4a28809`; website foundation `29b974f`; risk reflection `389564b`.

## Missing assets / open questions

- Select legible code/test and capacity crops; the code and source image exist.
- No historical failing-run screenshot exists. Use the record explicitly; do not create substitute historical evidence.

## Estimated speaking time

75 seconds. Spend most of it on the statistical edge case; group the other interruptions briefly.
