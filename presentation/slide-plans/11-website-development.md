# 11. Website Development

## Purpose

Show visible product evolution through small, tested AI implementation tasks.

## Main takeaway

The website grew from a live-data table into an interactive explorer through separately checked development stages.

## Verified project evidence

- 6.1 foundation: React/TypeScript/Vite, live World Bank fetch, validated year joining, table, loading/error states and in-memory cache; `29b974f`.
- 6.2: native SVG scatterplot, OLS line, r/β/n and local period filter; `b74f4c3`.
- 6.3: three-country comparison with shared period and independent country loading/error/retry states; final website commit `d1be8bc`: [final report](../../website/tests/step-6-3-validation.md).
- Historical offline website test counts increased 32 → 65 → 71. Python stayed at 19; lint/type-check/build and separate live checks are documented in the three validation reports. Counts alone do not prove completeness.
- Seven actual website screenshots exist: two earlier table-based views and five final views. The final plot/statistics/comparison captures show 2000–2019, n=20. They are static evidence, not a recorded interaction test.
- The user reported six specific 6.1 browser checks and later informal reviews. No comprehensive device/accessibility/failure-path audit: [6.1](../../website/tests/step-6-1-validation.md), [6.3](../../website/tests/step-6-3-validation.md).

## Proposed on-slide text (English)

**Table → Interactive plot → Country comparison**

6.1 Live data table

6.2 Local filters and checked statistics

6.3 Comparison and independent country states

Historical website checks: 32 → 65 → 71 tests

Footer: Actual screenshots; final comparison shown for 2000–2019. User-reported browser review.

## Proposed visual layout

Before/after composition: crop the earlier table screenshot `160431` and the final comparison `171800`, linked by a small stage label for the plot `171727`. Make the final comparison the largest image; use the plot only if readable. If needed show two images and describe the intermediate stage orally. Label periods separately. No recreated application screen, new UI design or fake interactivity.

## Presenter understanding (German)

React organisiert die Oberfläche in Komponenten. TypeScript unterstützt die Prüfung von Datentypen. Vite dient als Entwicklungs- und Build-Werkzeug. Für den Vortrag reicht die Idee: Die Website kam in kleinen Teilschritten hinzu. Ein Cache hält bereits geladene Daten im Speicher. Der Zeitraumfilter arbeitet lokal, deshalb muss die API beim reinen Filtern nicht neu abgefragt werden. Automatisierte Oberflächentests prüfen Verhalten, aber nicht automatisch visuelle Lesbarkeit auf jedem Gerät.

## Draft speaking notes (German)

Die Website entstand in drei abgegrenzten Schritten. Zuerst gab es eine Tabelle mit echten Live-Daten. Danach kamen Diagramm, Zeitraumwahl und die geprüften Kennzahlen hinzu. Im letzten Schritt wurden alle drei Länder in einer Vergleichstabelle gegenübergestellt. Die Bilder zeigen echte Entwicklungsstände. Der finale Ausschnitt zeigt 2000 bis 2019. Codex prüfte Code und Verhalten automatisiert; ich habe die Website im Browser angesehen und bedient. Meine Rückmeldung war ein informeller Nutzercheck, keine vollständige Prüfung jedes Fehlerpfads oder Geräts. Die kleinen Schritte erleichterten es, Anforderungen und Ergebnisse zu vergleichen.

## Lecture connection

M10: Codex implementation through bounded tasks. M8: acceptance criteria and test/review gates. M5: real API integration. Exact lecture slide numbers pending; [mapping](../../docs/course-alignment.md).

## Evidence paths

- [6.1 report](../../website/tests/step-6-1-validation.md), [6.2 report](../../website/tests/step-6-2-validation.md), [6.3 report](../../website/tests/step-6-3-validation.md)
- [Earlier table view](../assets/screenshots/Screenshot%202026-10-16%20160431.png), [earlier sources/table view](../assets/screenshots/Screenshot%202026-10-16%20160453.png)
- [Final hero](../assets/screenshots/Screenshot%202026-10-16%20171706.png), [plot, 2000–2019](../assets/screenshots/Screenshot%202026-10-16%20171727.png)
- [Statistics, 2000–2019](../assets/screenshots/Screenshot%202026-10-16%20171745.png), [comparison, 2000–2019](../assets/screenshots/Screenshot%202026-10-16%20171800.png), [sources](../assets/screenshots/Screenshot%202026-10-16%20171822.png)
- [Website README](../../website/README.md), [comparison component](../../website/src/components/CountryComparison.tsx)
- Git: `29b974f`, `b74f4c3`, `d1be8bc`.

## Missing assets / open questions

- Select two readable crops during Canva review; all proposed source images already exist.
- No live demo is required by this plan. If one is later added, rehearse it and prepare a tested contingency separately.

## Estimated speaking time

60 seconds.
