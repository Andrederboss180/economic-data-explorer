# Codex task: Step 6.2 – Interactive Data Visualization

Datum: 16.10.2026. Werkzeug: Codex; keine unabhängig verifizierte spezifische Modell-/Effort-Angabe. Kontext aus Repository, Basis `29b974f`, sauberem/fetched synchronisiertem `main`. Bestehende React/TypeScript/Vite-Website erweitern, Daten/Analyse unverändert lassen. Vier-Chat-Plan bleibt in [../README.md](../README.md).

## Relevanter Originalauftrag (wörtliche Abschnitte)

Implement Step 6.2: Interactive Data Visualization.

Create a feature branch named `web/step-6-2-visualization`, based on the current main.

Add the following features to the existing website:

### A. Interactive scatterplot

- X-axis: unemployment rate (%)
- Y-axis: inflation rate (%)
- One point per valid country-year observation
- Clear axis labels and units
- Tooltip or equivalent interaction showing year, inflation and unemployment
- Clean, modern, responsive appearance
- Accessible labels and readable presentation

### B. Regression line

- Display the simple OLS regression line of inflation on unemployment.
- Calculate it from the currently selected country and period.
- Draw the line only across the observed unemployment range.
- Handle undefined or degenerate regressions safely.

### C. Statistical summary

Display:
- Pearson correlation coefficient (r)
- OLS regression slope (β)
- Number of complete observations (n)

Use an appropriate, consistent number of decimal places.

Add a short note that these are descriptive associations, not evidence of causality.

### D. Period selection

Allow switching between:
- 2000–2024
- 2000–2019

Changing the period must update:
- Scatterplot
- Regression line
- Correlation
- Regression slope
- Observation count

Preserve the existing country selection.

Do not make unnecessary additional API requests when only the period changes. Filter the already retrieved observations locally.

### E. Existing functionality

Keep the annual data table, source information, loading indicators, error handling, retry behavior and caching working.

Do not implement a multi-country comparison view yet. That belongs to Step 6.3.

## Statistical correctness (wörtlich)

Implement the minimal TypeScript calculations needed for live browser data.

Match the mathematical definitions used in our already validated Python implementation.

Use the stored Step 5 reference dataset and analysis results for automated cross-checks.

The six country-period combinations must be tested against the existing reference results at an appropriate numerical tolerance.

Also test:
- Known artificial datasets with simple expected results
- Missing observations
- Constant input values
- Too few observations
- Numerical stability for floating-point inputs

Remember the real floating-point bug discovered during Step 5. Avoid reintroducing the same issue.

Important: The reference CSV is a fixed snapshot, while the website uses live API data. Future World Bank revisions may cause live results to differ from the snapshot. Do not treat such differences as automatic implementation errors.

## Validation and stop (wörtlich)

Run:
- Existing and new website tests
- TypeScript type-check
- ESLint
- Production build
- Relevant Python tests
- git diff --check
- Review of all changed and untracked files

Document in existing project files:
- The actual Codex development task
- Key implementation decisions
- AI-generated code and human review points
- Numerical validation against Python
- Any actual errors and corrections
- Relevant evidence for the final AI-course presentation

Focus on AI-assisted software development, reproducibility, automated testing and validation.

Prepare a short manual browser validation checklist for the user, including changes of country and period, scatterplot interaction, regression line and responsive layout.

Do not claim that a real-browser test was performed unless it actually was.

Do not commit, merge or push.

Do not begin Step 6.3 or Steps 7–8.

Leave Step 6.2 uncommitted and ready for review.

## Entscheidungen und Ergebnis der Erstübergabe (vor Folgeauftrag AW-012)

Native SVG statt neuer Chart-Abhängigkeit; lokale gemeinsame Datenfilterung, kompensierte zentrierte Statistik mit direkter Konstantenerkennung; siehe D-009. Codex generierte Code und Tests, die tatsächlichen Testläufe erzeugten den Zahlenvergleich. [Validierungsbericht und offene manuelle Checkliste](../../website/tests/step-6-2-validation.md), AW-011/V-007. Kein Commit, keine neue Präsentationsdatei, keine behauptete Browserprüfung.
