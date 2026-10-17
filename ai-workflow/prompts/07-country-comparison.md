# Codex task: Step 6.3 – Country Comparison & Website Finalization

Datum: 16.10.2026. Werkzeug: Codex; keine zusätzliche verifizierte Modell-/Effort-Angabe. Basis `b74f4c3`. Kontext aus Repository/Git rekonstruiert; die Vier-Chat-Strategie und Rollenverteilung bleiben in den vorhandenen Workflow-Dateien.

## Relevanter Originalauftrag (wörtliche Auszüge)

Implement a simple, responsive country comparison section.

It should display Germany, France and Spain side by side in one comparison table for the currently selected time period.

Columns:

- Country
- Pearson correlation coefficient (r)
- OLS regression slope (β)
- Number of complete observations (n)

Requirements:

1. Calculate each country's values from live World Bank API data, not hardcoded reference results.
2. Reuse the existing API client, caching and validated TypeScript statistical functions.
3. The existing time-period selection controls the comparison table.
4. Changing the time period should filter already fetched observations locally, without redundant API requests.
5. Highlight the currently selected country subtly, if this can be done without complicating the interface.
6. Keep the existing single-country scatterplot and annual table unchanged in behavior.
7. Handle loading, missing values and individual API failures gracefully. A failed country request should not cause successfully loaded country results to disappear unnecessarily.
8. Keep the comparison understandable on narrow screens.
9. Do not add unnecessary charting libraries or external services.

Prefer one straightforward comparison table, not three additional charts.

Review the existing interface for a small number of actual usability issues.

Fix genuine problems only. Avoid cosmetic redesigns, new features and unnecessary animations.

Do not add user accounts, authentication, a database, forecasting or additional economic indicators.

Tests should be deterministic where possible. Keep live API integration tests separate from tests using fixed fixtures.

Do not modify the original World Bank reference snapshot or validated Python calculations.

Record:

- The actual Codex development prompt
- Important technical decisions
- What AI implemented
- Automated tests and numerical validation
- Any real errors and their corrections
- Git changes
- Human checks still required

Update the existing documentation and presentation evidence notes without creating unnecessary duplicate material.

Do not claim that a real-browser test has happened unless the user confirms it.

Prepare a brief manual review checklist for the final website.

Run all relevant:

- Website tests
- Python tests
- ESLint
- TypeScript type-check
- Production build
- Git whitespace checks

Review all changed and untracked files.

Do not commit, merge or push.

Do not start Step 7 or Step 8.

Leave Step 6.3 ready for human review.

## Ergänzende Vorgaben aus demselben Auftrag

Sauberes und mit `origin/main` synchronisiertes `main` prüfen; Branch `web/step-6-3-comparison` anlegen. Alle sechs Länder-Zeitraum-Kombinationen gegen vorhandene Referenzdaten/Python-Ergebnisse prüfen; Länder-/Zeitraumwechsel, fehlende Werte, Teilfehler/Retry, Request-Zahl und Lade-/Fehleranzeige testen. Bestehende Funktionalität erhalten, nicht unnötig umstrukturieren. Am Ende Funktionen, Dateien, Tests, Grenzen, Start, manuelle Checkliste und Git-Status melden.

## Ergebnis und Prüfgrenze bei Erstübergabe (vor Folgeauftrag AW-014)

Codex implementierte eine Vergleichstabelle und eine kleine gemeinsame Länder-Ladezustandslogik; API-Client, Cache, Statistikformeln und Referenzen unverändert. Entscheidungen D-010, AI-Log AW-013, Validierung V-009 und [6.3-Bericht](../../website/tests/step-6-3-validation.md). Menschliche Prüfung steht aus; keine Screenshots oder Browserprüfungen behauptet. Kein Commit/Merge/Push.
