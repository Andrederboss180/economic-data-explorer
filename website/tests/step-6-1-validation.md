# Website-Validierung: Schritt 6.1

Stand: 16.10.2026. Schritt 6.1 abgeschlossen nach erneutem technischem Review und sechs vom Nutzer berichteten manuellen Browserprüfungen. Ausgangspunkt `4a28809`, Entwicklungsbranch `web/step-6-1-foundation`. Der Folgeauftrag autorisiert Commit, sichere Integration in `main` und Push. Dies ist kein vollständiger unabhängiger menschlicher Code-Audit.

## Reproduzieren

Im Ordner `website/`: `npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`. Separat mit Internet: `npm run validate:live`. Python-Regressionstests vom Repository-Hauptordner gemäß [analysis/README.md](../../analysis/README.md).

Getestet mit Node 24.11.1, npm 11.6.2 und Python 3.13.15. Paketversionen: `../package.json` und `../package-lock.json`. Primärdokumentation, am 16.10.2026 geöffnet: [Vite Setup](https://vite.dev/guide/), [World Bank API-Struktur](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures), [Indikatorabfragen](https://datahelpdesk.worldbank.org/knowledgebase/articles/898599-indicator-api-queries).

## Tatsächliche Ergebnisse

| Prüfung | Ergebnis |
|---|---|
| ESLint, null Warnungen erlaubt | Bestanden |
| TypeScript `tsc --noEmit` | Bestanden |
| Vitest, offline | 32 Tests bestanden: 27 API-/Datenprüfungen, 5 UI-Tests |
| Vite-Produktionsbuild | Bestanden |
| Bestehende Python-Tests | 19 bestanden; API/Analyse unverändert |
| Live-Vergleich | 1 separater Online-Test bestanden; sechs Reihen mit je 25 Jahreswerten; 18 Einzelwerte gegen CSV geprüft |
| Lokaler Vite-Server | Start erfolgreich; HTTP 200 und korrekter Seitentitel auf `http://127.0.0.1:5173/` |
| Browser-CORS-Voraussetzung | Separater GET des DEU-Inflationsendpoints mit `Origin: http://127.0.0.1:5173`: HTTP 200, `Access-Control-Allow-Origin: *` |

Die Offline-Tests prüfen: Zuordnung nach Jahr bei umgekehrter Reihenfolge, Nullwerte, ausgelassene Jahre, leere Reihen, echte Null/negative Werte, falsches Land/Indikator, Duplikate, Zeitraumgrenzen, Metadaten, Pagination, ungültige/nichtendliche Zahlen, HTTP- und JSON-Fehler, Netzwerkfehler, Timeout/Abort sowie Wiederholung nach Fehler. Alle 75 gespeicherten Länder-Jahr-Paare (150 Zahlen) werden vom TypeScript-Parser aus den originalen JSON-Dateien gegen die CSV geprüft, exakt nach Umwandlung beider Seiten in `number`.

Die UI-Tests prüfen Ladezustand, Tabelle/Quellen/Beobachtungszahlen, alle Werte fehlend, Länderwechsel ohne alte Tabelle, verspätete Antworten, Fehler/Retry und Request-Zahl unter StrictMode, Rerender und Rückkehr zu einem bereits geladenen Land. Synthetische Transportdaten in `fixtures.ts` sind ausdrücklich keine ökonomischen Ergebnisse.

## Echte Live-Stichprobe

Lauf von `npm run validate:live -- --disableConsoleIntercept`, `2026-10-16T13:45:02Z`. Alle sechs Antworten: `lastupdated = 2026-10-08`. Je Land 25 vollständige Paare, keine fehlenden Werte. Die folgenden Werte stammen aus dem tatsächlichen Lauf; alle 18 stimmen mit der unveränderten Referenz-CSV überein (Toleranz `1e-12 * max(1, |Referenz|)`). Die Toleranz betrifft Zahlenkonvertierung, keine fachlich erlaubte Revision.

| Land | Jahr | Inflation, annual % | Unemployment, % of labor force |
|---|---:|---:|---:|
| DEU | 2000 | 1.44026838719741 | 7.917 |
| DEU | 2019 | 1.44565976888253 | 3.163 |
| DEU | 2024 | 2.2564981433876 | 3.4 |
| FRA | 2000 | 1.67061991153283 | 10.218 |
| FRA | 2019 | 1.1067657411029 | 8.415 |
| FRA | 2024 | 1.99742599742599 | 7.4 |
| ESP | 2000 | 3.43351657103988 | 13.785 |
| ESP | 2019 | 0.699267137814226 | 14.104 |
| ESP | 2024 | 2.77406987275873 | 11.4 |

Quelle, URLs und unveränderter Referenzabruf: [data/API.md](../../data/API.md). Der Online-Test verwendet den produktiven TypeScript-Client unter Node und eine CSV-Gegenprüfung. Das ist kein Browser-CORS-Test und kein vollständiger Live-Vollaudit. Bei einer späteren World-Bank-Revision soll der Test fehlschlagen; dann Revision untersuchen, nicht den Snapshot still ersetzen.

## Tatsächliche Probleme und Korrekturen

- Branch-Erstellung benötigte gezielt erweiterte Schreibrechte auf `.git`; danach erfolgreich. Keine Commits.
- Der erste Paketinstallationsversuch scheiterte an TypeScript 7.0.2 versus `typescript-eslint`-Peerbereich `<6.1.0`. Statt `--force` wurde unterstütztes TypeScript 6.0.3 installiert. Anschließende Installation: 0 gemeldete npm-Sicherheitslücken.
- Erster Offline-Lauf: 29 Tests bestanden, 3 fehlgeschlagen. Vites Transformation eines dynamischen `new URL(..., import.meta.url)` für lokale Testdateien führte zu `website/tests/undefined`. Testpfade verwenden jetzt `node:path.resolve`, relativ zum dokumentierten npm-Arbeitsordner; der produktive Datenabruf war davon nicht betroffen.
- Typecheck fand eine uneindeutige Typinferenz der gemischten Testfallliste; die erste Tupelkorrektur war noch nicht mit den readonly-Einträgen vereinbar. Explizite readonly-Tupel lösten beide Diagnosen. ESLint fand außerdem zwei neu geworfene Fehler ohne `cause`; die ursprüngliche Fehlerursache wird nun erhalten. Danach alle Prüfungen bestanden.
- Browserinventar war leer; das Öffnen der lokalen Seite meldete `Browser is not available: iab`. Daher keine echte Browserausführung, keine visuellen Screenshots und keine manuelle Mobilprüfung behauptet. HTTP-, CORS-Header- und jsdom-Prüfungen ersetzen das nicht.

## Vom Nutzer berichtete manuelle Browservalidierung

Der Nutzer hat im Folgeauftrag „Finalize Step 6.1 – Website Foundation“ persönlich ausgeführte Tests in einem echten Browser bestätigt. Die folgenden sechs Ergebnisse sind **nutzerberichtet**, keine von Codex ausgeführten Browser- oder automatisierten Tests. Browsername/-version, genaue Fensterbreite und Testzeitpunkt wurden nicht mitgeteilt. Keine Screenshots wurden bereitgestellt oder erfunden.

| Persönlich geprüfter Punkt | Nutzerbericht |
|---|---|
| Website lädt ohne sichtbare Fehler | Bestanden |
| Germany, France und Spain auswählbar | Bestanden |
| Tabelle aktualisiert sich beim Länderwechsel | Bestanden |
| Deutschland, Inflation 2024 ungefähr 2.26 % | Bestanden |
| Frankreich, Arbeitslosigkeit 2024 gleich 7.4 % | Bestanden |
| Website bei schmalem Browserfenster weiter nutzbar | Bestanden |

Zusätzliche Prüfgrenzen: Keine menschliche Netzwerkpanel-Prüfung der Request-Zahl, kein manueller Offline-/Retry-Test, kein Tastatur-/Screenreader-Audit und kein Test auf einem physischen Mobilgerät berichtet. Cache, Fehler/Retry und veraltete Länderantworten sind automatisiert geprüft. Die ursprüngliche Browserautomatisierungs-Hürde bleibt als historischer Befund erhalten; die persönliche Nutzerprüfung ergänzt sie und wird nicht Codex zugeschrieben.

## Erneute Abschlussprüfung

Am 16.10.2026 erneut bestanden: ESLint, TypeScript, Vite-Build, 32 Offline-Website-Tests und 19 Python-Tests. Der separate Live-Test wurde bei `2026-10-16T14:11:44Z` erneut bestanden: sechs Reihen, je Land 25 vollständige Paare, dieselben 18 Stichprobenwerte wie oben und Source-Updates `2026-10-08`. Implementierungsreview bestätigt direkten `fetch` auf `api.worldbank.org`, keine eingebauten Beobachtungen oder Snapshot-Ausweichlösung und keine Funktionen aus 6.2. Keine Codeänderung für die Finalisierung nötig.

Kein Zeitraumfilter, Diagramm, Tooltip, Pearson r, Regression oder Ländervergleich in Schritt 6.1. Der spätere Python-/TypeScript-Statistikvergleich bleibt offen.

## Abschlussreview und Dateiumfang

`git diff --check` bestanden. Alle getrackten Diffs und neuen Inhalte geprüft, einschließlich separatem `git diff --no-index --check` für neue Dateien (SafeCRLF-Warnungen nur pro Prüfaufruf deaktiviert, keine globale Konfigurationsänderung). Relative Links in geänderten/neuen Markdown-Dateien lösen auf. Lockfile: 214 Einträge einschließlich plattformspezifischer optionaler Pakete, Registry-URLs/Integritäten und Root-Constraints geprüft; 190 Pakete beim ursprünglichen lokalen Installations-/Auditlauf, 0 damals gemeldete Sicherheitslücken. CSV-Dateien gegen `4a28809` byte-identisch, keine Änderungen an `analysis/`, `data/` oder `research/`. Präsentationsnotizen wurden ausschließlich im Finalisierungsauftrag ergänzt.

**17 neue Dateien:**

- `website/index.html`
- `website/package.json`, `website/package-lock.json`
- `website/tsconfig.json`, `website/vite.config.ts`, `website/vitest.live.config.ts`, `website/eslint.config.js`
- `website/src/main.tsx`, `website/src/App.tsx`, `website/src/styles.css`, `website/src/api/worldBank.ts`
- `website/tests/fixtures.ts`, `website/tests/worldBank.test.ts`, `website/tests/App.test.tsx`, `website/tests/live.test.ts`
- `website/tests/step-6-1-validation.md` (dieser Bericht)
- `ai-workflow/prompts/05-website-foundation.md`

**11 geänderte Dateien bei Erstübergabe:**

- `README.md`, `PROJECT_STATUS.md`
- `docs/decisions.md`, `docs/roadmap.md`, `docs/workflow.md`
- `ai-workflow/README.md`, `ai-workflow/log.md`, `ai-workflow/validation-log.md`, `ai-workflow/prompts/README.md`
- `website/README.md`, `website/tests/README.md`

Erstübergabe: `web/step-6-1-foundation`, `HEAD = main = origin/main = 4a28809`, ohne Commit/Push. `node_modules/` und `dist/` ignoriert; Prüfserver beendet. Der Finalisierungsauftrag ergänzt vorhandene Präsentationsnotizen/Checkliste, manuelle Prüfergebnisse und Statusdateien. AW-009/V-005 erhalten die Entwicklungsgeschichte, AW-010 dokumentiert die erneute Kontrolle und Git-Freigabe. Commit-Nachweis: `web: finalize validated website foundation`; tatsächlicher Hash und Merge-/Push-Status über Git-Historie und Abschlussbericht. Ausschließlich Fast-forward und normaler Push, keine erzwungene Integration. Nächster Auftrag: **6.2 – Interactive Data Visualization**, noch nicht begonnen.
