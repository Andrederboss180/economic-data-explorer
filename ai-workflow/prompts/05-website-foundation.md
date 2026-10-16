# Chat 3: Step 6.1 – Website foundation

Datum: 16.10.2026. Werkzeug: Codex; Sites-Skill ausschließlich für lokale Arbeit. Keine unabhängig bestätigte Modell-/Effort-Angabe für Chat 3. Kontext aus versionierten Dateien wiederhergestellt; Basis `4a28809`. Die Vier-Chat-Strategie bleibt in [../README.md](../README.md).

## Originalauftrag des Nutzers (relevante Fassung, wörtliche Abschnitte)

### Restore context

First inspect the existing repository and relevant documentation:

- README.md
- PROJECT_STATUS.md
- docs/roadmap.md
- docs/workflow.md
- ai-workflow/log.md
- research/research-question.md
- website/README.md
- data/API.md
- analysis/README.md
- analysis/validation.md

Also inspect existing scripts, tests, results, and Git history.

The version-controlled project documentation is the source of truth. Do not rely on previous Codex chat context.

Current status:

- Steps 1–5 completed, reviewed, committed and pushed.
- Latest completed phase commit: `4a28809`.
- Current branch: `main`, clean working tree.
- Step 6 – Website Development is next.
- No website functionality has been implemented yet.

Our deliberate Codex session structure:

- Chat 1: Project setup, Literature Review, Git and APIs – completed
- Chat 2: Mathematical Analysis & Validation – completed
- Chat 3: Website Development – current
- Chat 4: Finalization & Presentation – planned

Preserve this context-management strategy in the project documentation. Avoid duplicating existing documentation.

### Working principles

1. Follow the existing roadmap strictly and sequentially.
2. Make small, isolated, easily testable changes.
3. Inspect existing files before creating or modifying them.
4. Avoid unnecessary refactoring, dependencies and abstractions.
5. Prefer React, TypeScript and Vite if no website framework has already been established.
6. Reuse validated data definitions and analysis logic from the existing project. Do not silently change calculations.
7. Never invent economic observations or test results.
8. Document meaningful AI contributions, decisions, failures and validation evidence for the final presentation.
9. Review Git diffs and run appropriate tests.
10. Do not commit or push until the current substep has been reviewed.
11. Do not start Step 7 or Step 8.

### Immediate task – Step 6.1: Website foundation and live data retrieval

Implement ONLY the initial website foundation:

1. Inspect the existing `website/` directory and its documentation.
2. Set up the minimal application using the agreed framework.
3. Create a clean, responsive page with the project name, short description and country selection.
4. Implement live World Bank API retrieval for inflation and unemployment for the selected country, covering 2000–2024.
5. Parse and combine the two API responses into country-year observations.
6. Handle loading, API errors, missing values and unexpected response formats.
7. Display a small, readable table of the retrieved observations, including year, inflation and unemployment.
8. Show the World Bank data source and, where available, its last-update date.
9. Validate a small selection of live values against our already verified reference CSV.
10. Ensure API calls are not unnecessarily repeated when filtering or rerendering.

Keep the foundation simple. Do not implement charts, correlation, regression, country comparisons or other advanced UI features yet.

### Documentation and validation

Document this first website substep in the existing project structure:

- Exact Codex task
- Framework and implementation decisions
- Relevant API integration details
- Actual tests and validation results
- Problems encountered and their solutions
- Relevant Git changes
- Useful evidence for the final AI-workflow presentation

Provide simple instructions for starting the website locally.

Run available linting, type-checking, build and relevant tests.

Run `git diff --check` and inspect all changed and untracked files.

### Stop and report

Do not commit or push.

Report:

- Files created or modified
- How to start the website
- Whether live API retrieval works
- Validation and test results
- Problems and limitations
- Current Git status

We will review Step 6.1 before committing, then continue with the next small website feature.

Begin implementation now.

## Ergänzende Vorgaben aus demselben Auftrag (Zusammenfassung)

Website auf Englisch, modern/minimalistisch/responsiv. Forschungsfrage und Länder/Indikatoren unverändert. Endziel umfasst später Zeitraumwahl, Scatterplot/Regression/Kennzahlen und Vergleich; diese gehören ausdrücklich nicht zu 6.1. Live World-Bank-Daten direkt aus dem Browser, wo technisch möglich, und die vorhandene CSV als reproduzierbare Validierungsbasis. Keine Konten, Datenbank oder dekorativen Funktionen.

## Ergebnis und Kontrolle der Erstübergabe (vor Folgeauftrag AW-010)

Implementierung und Entscheidungen: [website/README.md](../../website/README.md), [docs/decisions.md](../../docs/decisions.md). Tatsächliche Prüfungen, Live-Stichprobe und offene Browserprüfung: [Validierung](../../website/tests/step-6-1-validation.md). AI-Anteil und Übernahmeentscheidung: AW-009; tatsächliche Probleme: V-005. Menschlicher Review steht aus, Änderungen bleiben uncommitted auf `web/step-6-1-foundation`.
