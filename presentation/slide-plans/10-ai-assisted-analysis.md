# 10. AI-Assisted Analysis

## Purpose

Show how generated statistical code was checked with known solutions and separate calculations, using minimal mathematics.

## Main takeaway

Generated calculations became more credible through known test cases, library checks and a separate Python–TypeScript comparison.

## Verified project evidence

- Codex wrote the Python analysis and tests; executing the script produced six result rows, three countries × two periods: [analysis validation](../../analysis/validation.md).
- The Python implementation was checked against `statistics.correlation` and `statistics.linear_regression` using separately grouped CSV data; relative/absolute tolerance `1e-12`.
- A known synthetic test has x=(1,2,3), y=(3,5,7): r=1, slope=2 and intercept=1. Tests also cover missing values, country/year alignment, undefined statistics and stored results: [Python tests](../../analysis/tests/test_analyze_reference_data.py).
- Later TypeScript calculations were checked against all six frozen Python groups, coefficient tolerance `1e-12 * max(1, |reference|)`, n exact: [6.2 validation](../../website/tests/step-6-2-validation.md).
- Historical final totals: 19 Python tests and 71 website tests. The website total includes API/UI/comparison tests, not 71 statistics tests. Not rerun in this preparation task.
- The separate implementation/library checks are technical independence, not a separate human audit. AI also wrote tests. Keep the actual decimal bug for slide 14.

## Proposed on-slide text (English)

**Codex implementation, explicit numerical checks**

Known test data: x=(1,2,3), y=(3,5,7)

Expected: r=1, slope=2

Python calculation ↔ standard-library check

Browser calculation ↔ 6 frozen Python results

Footer: Historical checks; 19 Python tests, 71 website tests overall. No complete human code audit.

## Proposed visual layout

One small editable synthetic test table labelled “test data”, beside a short comparison chain for the real six groups. Select an actual assertion from the test file rather than drawing a fake green terminal result. An optional later current test capture needs a real rerun and date. The slide explains the controls; failure/correction belongs on slide 14.

## Presenter understanding (German)

Python berechnet die Referenzergebnisse außerhalb der Website. TypeScript berechnet im Browser. Pearson r beschreibt den linearen Zusammenhang; die OLS-Steigung beschreibt die angepasste Gerade. Bei Testdaten mit y=2x+1 kennen wir die richtige Lösung bereits. Zusätzlich wurden echte Ergebnisse mit Bibliotheksfunktionen und später mit dem Browsercode verglichen. Eine Toleranz erlaubt winzige Rundungsunterschiede. Mehrere technische Prüfwege sind wertvoll, aber AI-generierte Tests können dieselbe falsche Annahme wie der Code enthalten.

## Draft speaking notes (German)

Codex hat die statistischen Funktionen und Tests geschrieben. Ich wollte die erzeugten Zahlen nicht einfach übernehmen. Ein Kontrollanker waren kleine Testdaten mit bekannter Lösung. Für dieses Beispiel müssen Korrelation eins und Steigung zwei herauskommen. Außerdem wurde die Python-Rechnung technisch mit Funktionen der Standardbibliothek geprüft. Später wurden alle sechs Länder-Zeitraum-Ergebnisse mit der TypeScript-Rechnung verglichen. Das kontrolliert unterschiedliche Rechenwege und die Umsetzung im Browser. Diese Prüfungen führte Codex aus. Sie ersetzen keinen vollständigen menschlichen Code-Audit, besonders weil auch die Tests AI-generiert sind.

## Lecture connection

M3: validate reasoning/calculations rather than accept fluent answers. M8: verification burden and acceptance criteria. M10: scoped implementation. Supplied reference M3 slide 47 is recorded in the [risk matrix](../../ai-workflow/risk-register.md), but exact PDF numbering is still pending verification.

## Evidence paths

- [Analysis validation and formulas](../../analysis/validation.md)
- [Python implementation](../../analysis/scripts/analyze_reference_data.py), [Python tests](../../analysis/tests/test_analyze_reference_data.py)
- [Stored six results](../../data/results/analysis_results.csv)
- [TypeScript implementation](../../website/src/statistics/analysis.ts), [statistics tests](../../website/tests/statistics.test.ts)
- [Cross-language validation](../../website/tests/step-6-2-validation.md), [final totals](../../website/tests/step-6-3-validation.md)
- Git: `4a28809`, `b74f4c3`, `d1be8bc`.

## Missing assets / open questions

- Select one readable actual assertion or test-report excerpt. A final terminal capture is optional and does not yet exist.
- Rehearse “technical independence” versus “independent human review”.

## Estimated speaking time

65 seconds.
