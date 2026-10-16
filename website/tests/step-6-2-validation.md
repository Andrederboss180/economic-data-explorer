# Step 6.2 – Interactive Data Visualization: validation

Stand: 16.10.2026. **6.2 abgeschlossen** nach erneutem technischem Review und nutzerberichtetem erfolgreichem informellem Browser-/Visualcheck. Basis `29b974f`, Entwicklungsbranch `web/step-6-2-visualization`. Der Finalisierungsauftrag autorisiert Commit, sichere Integration in `main` und Push. Vor Beginn sauberer/synchronisierter `main`; vor Finalisierung erneut Fetch und `main...origin/main = 0 0`. Als Nächstes **6.3 – Country Comparison & Website Finalization**, noch nicht begonnen; Schritte 7–8 nicht gestartet.

## Umsetzung und AI-Anteil

Codex ergänzte native SVG-Visualisierung, TypeScript-Statistik, Zeitraumwahl, Tests und Dokumentation. Keine zusätzlichen Pakete und keine Änderung von API-Client, Cache, Python-Referenzanalyse oder historischen Daten. Aufgabe/Prompt: [06-website-visualization.md](../../ai-workflow/prompts/06-website-visualization.md), Entscheidungen: D-009 in [docs/decisions.md](../../docs/decisions.md), AI-Nachweis: AW-011.

- X = Arbeitslosigkeit in % der Erwerbsbevölkerung, Y = CPI-Inflation in jährlichen %. Ein Punkt je vollständigem Land-Jahr-Paar.
- Native SVG-Punkte mit Jahres-/Wertbeschriftung, `<title>`, Hover, Fokus, Enter/Leertaste und Klick/Touch. Ein persistenter, live angekündigter Detailtext zeigt Jahr und beide Werte. Escape setzt die Auswahl zurück. Auswahl wird beim Land-/Zeitraumwechsel zurückgesetzt.
- OLS-Gerade nur vom kleinsten bis zum größten beobachteten Arbeitslosenwert; keine Extrapolation. Die Y-Achse umfasst auch die Linienenden, damit diese nicht abgeschnitten werden. Gestrichelte Linie und beschriftete Legende unterscheiden sie von Punkten.
- Zeitraum 2000–2024 oder 2000–2019, inklusive Grenzen. Land bleibt erhalten. Ein gemeinsamer lokal gefilterter Datensatz liefert Diagramm, Regression, r, β, n und die bestehende Tabelle. Fehlende Werte bleiben in der Tabelle sichtbar und zählen nicht als Punkte/Paare.
- r und β auf drei Dezimalstellen, n ganzzahlig; Tabelle/Interaktion wie bisher auf zwei Stellen. Keine Rundung der Recheneingaben. β-Einheit und deskriptive Interpretation stehen neben den Kennzahlen; keine Kausalität beansprucht.
- Keine neue API-Anfrage beim Zeitraumwechsel. Der bestehende Länder-/Promise-Cache, Ladezustand, Retry und Schutz gegen verspätete Länderantworten bleiben erhalten. Neue API-Anfragen betreffen wie bisher erstmals ausgewählte Länder.
- Chartbreite passt sich an; auf schmalen Fenstern scrollt nur der beschriftete Chartbereich horizontal (Mindestbreite 540 px für lesbare Achsen). Kennzahlen stapeln sich bei sehr schmalem Fenster. Die Tabelle bleibt separat scrollbar.

## Mathematische Definition und Randfälle

Wie Python: Pearson r und OLS von Inflation auf Arbeitslosigkeit mit Achsenabschnitt. Zentrierte Summen Sxx, Syy, Sxy; β=Sxy/Sxx, α=mean(y)−β·mean(x). TypeScript verwendet kompensierte Neumaier-Summation. Zunächst relativ zum ersten Wert zentrieren, um kleine Variation bei großem Zahlenoffset zu erhalten. r wird auf [-1,1] begrenzt. Keine Imputation, Ausreißerentfernung, Verzögerung oder neue Transformation wirtschaftlicher Werte.

Die aus Schritt 5 bekannte Korrektur ist von Anfang an enthalten: tatsächliche Gleichheit vor Mittelwertbildung prüfen. Konstantes x einschließlich `0.1` → r/Regression undefiniert; konstantes y einschließlich `0.1` → r undefiniert, β=0, α=y und horizontale Gerade. Unter zwei vollständigen Paaren → Kennzahlen undefiniert, n bleibt korrekt, keine Gerade. Fehlende Daten → kein erfundener Punkt. Nichtendliche Inputs werden abgelehnt; numerischer Über-/Unterlauf führt zu erklärtem `Not available` statt NaN/Infinity. Nicht darstellbare extreme Achsenbereiche erhalten einen Leerzustand. Das ist defensive Behandlung synthetischer Extremfälle, kein behauptetes World-Bank-Datenproblem.

## Tatsächlich ausgeführte Prüfungen

Im Ordner `website/`:

```powershell
npm run lint
npm run typecheck
npm test -- --disableConsoleIntercept
npm run build
```

Ergebnis: **65 Website-Tests bestanden** (27 bestehende API-Tests, 23 Statistiktests, 8 Charttests, 7 App-Tests); Lint, TypeScript und Vite-Build bestanden. Die 32 bisherigen Tests sind weiter abgedeckt; vorhandene UI-Tests wurden um Chart-/Zeitraumassertionen erweitert. Zusätzlich **19 bestehende Python-Tests bestanden**, Aufruf vom Root wie [analysis/README.md](../../analysis/README.md). Node 24.11.1, npm 11.6.2, Python 3.13.15; Paketdefinition und Lockfile unverändert.

Neue Prüfungen: vier analytisch bekannte Mini-Datensätze, leere/einzelne Beobachtung, konstantes x/y jeweils mit Integer und `0.1`, kleine Dezimalvariation, großer Offset `1e12`, numerischer Überlauf und NaN/Infinity; korrekte Länder-/Zeitraum-/Paarfilterung einschließlich 2019/2020, fehlende Jahre und Nullwerte. Keine Mutation der Eingaben. Charttests prüfen Achsen/Einheiten, Punktanzahl, beobachtete Liniengrenzen, horizontale/undefinierte Gerade, Interaktionen und finite SVG-Koordinaten. App-Test prüft gemeinsamen Wechsel von Punkten, Linie, r, β, n und Tabellenzeilen, Rücksetzen alter Details und unveränderte Request-Zahl unter StrictMode/Rerender/Zeitraumwechsel/Länderrückkehr. Fehlerzustände zeigen keine alten Kennzahlen oder Plots.

### Gegenprüfung aller sechs eingefrorenen Python-Ergebnisse

Input ausschließlich `data/reference/reference_2000_2024.csv`, Vergleich gegen `data/results/analysis_results.csv` aus Schritt 5. Toleranz je Koeffizient: `|TS − Python| <= 1e-12 * max(1, |Python|)`. n und Ausschlussanzahl exakt gleich, Statusfelder gleich. Tabelle auf sechs Stellen gerundet; tatsächlich getestete Ergebnisse stammen aus dem TypeScript-Lauf.

| Land | Zeitraum | n | TypeScript r | TypeScript β | TypeScript α |
|---|---|---:|---:|---:|---:|
| Germany | 2000–2024 | 25 | -0.295052 | -0.170424 | 2.956648 |
| Germany | 2000–2019 | 20 | 0.179100 | 0.042982 | 1.163504 |
| France | 2000–2024 | 25 | -0.643384 | -0.824322 | 8.983856 |
| France | 2000–2019 | 20 | -0.620633 | -0.589236 | 6.807746 |
| Spain | 2000–2024 | 25 | -0.512283 | -0.184454 | 5.213712 |
| Spain | 2000–2019 | 20 | -0.629159 | -0.159522 | 4.629601 |

Maximale absolute Abweichungen im tatsächlichen Lauf: r `1.1102230246251565e-16`, β `2.7755575615628914e-17`, α `8.881784197001252e-16`. Keine Ausschlüsse in diesen sechs Referenzgruppen. Der Test gibt ungerundete Werte und Abweichungen mit `--disableConsoleIntercept` aus. Bekannte Testlösungen und die bereits unabhängig mit `statistics` validierten Python-Ergebnisse bilden getrennte Kontrollanker.

Die Website berechnet aus **Live-Daten**, nicht aus dieser Ergebnistabelle. Eine spätere World-Bank-Revision kann die Website-Ergebnisse gegenüber dem Snapshot verändern und ist für sich genommen kein Implementierungsfehler. Hier wurde kein neuer Live-Vergleich als Statistiknachweis verwendet; API-Logik unverändert. Die historischen Live-Abrufe und persönlichen Nutzerchecks für 6.1 stehen unverändert im [6.1-Bericht](step-6-1-validation.md).

## Tatsächliche Probleme und Grenzen

Der erste ausgeführte neue Testlauf bestand alle 64 Tests; anschließend wurde ein zusätzlicher Länderwechseltest ergänzt, danach 65 Tests bestanden. Kein fehlgeschlagener Testlauf oder neuer fachlicher Fehler wird erfunden. Beim Code-Review vor dem Lauf wurde der gespeicherte x-Mittelwert für den Sonderfall konstanter Inflation korrekt berechnet; die horizontale Gerade blieb dabei mathematisch unverändert. Im damaligen Codex-Lauf war keine Browseroberfläche verfügbar, daher kein eigener Browserlauf/Screenshot. jsdom-Ereignisse und SVG-Attribute prüfen Verhalten/Geometrie, keine visuelle Lesbarkeit. Die folgende spätere Nutzerprüfung ergänzt diese historische Grenze.

## Nutzerberichteter informeller Browser-/Visualcheck und Abschlussprüfung

Im Folgeauftrag „Finalize Step 6.2 – Interactive Data Visualization“ bestätigt der Nutzer, die Website im echten Browser geöffnet und bedient zu haben; visuelles Erscheinungsbild und Funktionalität sehen gut aus. **Erfolgreicher informeller Nutzercheck**, kein von Codex durchgeführter Browserlauf und keine unabhängige Bestätigung aller Checklistenpunkte. Insbesondere keine Keyboard-/Screenreaderprüfung, Network-Tab-Requestzählung oder physische Geräteprüfung berichtet. Browser/Version, genaue Fensterbreiten und Screenshots nicht mitgeteilt. Die detaillierte Checkliste unten bleibt ohne einzelne menschliche Bestätigung.

Erneute technische Prüfung am 16.10.2026: 65 Website-Tests, 19 Python-Tests, ESLint, TypeScript und Produktionsbuild bestanden. Alle sechs gefrorenen Länder-Zeitraum-Gruppen erneut innerhalb der oben genannten Toleranz bestätigt; maximale Abweichungen unverändert. Tests bestätigen gemeinsame Datenfilterung für Plot/Linie/Statistik/Tabelle, Zeitraumwechsel ohne zusätzliche Requests sowie bestehende Lade-/Fehler-/Retry-/Cache-/Quellzustände. Kein blockierendes Codeproblem gefunden, keine Funktionsänderung für die Finalisierung nötig. AW-012/V-008 dokumentieren diesen Abschluss getrennt von AW-011/V-007.

## Detaillierte manuelle Checkliste (nicht einzeln bestätigt)

Start wie [website/README.md](../README.md): `cd website`, `npm ci` falls erforderlich, `npm run dev`, Terminal-URL öffnen.

1. Germany/2000–2024: Plot, gestrichelte Gerade, drei Kennzahlen, Quellinformationen und Jahrestabelle laden; X=Arbeitslosigkeit, Y=Inflation mit Einheiten. n entspricht der Zahl der vollständigen Paare (bei unverändertem Datenstand 25).
2. Auf 2000–2019 wechseln: Punkte ab 2020 verschwinden, Linie/r/β/n und Tabelle wechseln gemeinsam; Land bleibt Germany. Bei unverändertem Snapshot n=20. Im Netzwerkpanel dürfen **keine neuen World-Bank-Requests** entstehen. Zurückwechseln ebenfalls ohne neue Requests.
3. France und Spain jeweils für beide Zeiträume testen; Rückkehr zu geladenem Land nutzt Cache. Historische Referenzwerte stehen oben; Abweichungen bei Live-Daten erst auf Datenrevision prüfen.
4. Mehrere Punkte mit Maus, Tab/Fokus, Enter/Leertaste und Klick/Touch wählen: Jahreszahl, Inflation und Arbeitslosigkeit stimmen mit der Tabellenzeile; Escape setzt Detailauswahl zurück. Beim Land-/Periodenwechsel keine alten Details anzeigen.
5. Linienenden mit kleinstem/größtem Arbeitslosenwert der ausgewählten vollständigen Tabellenzeilen abgleichen: keine Verlängerung über die beobachtete X-Spanne. Deskriptiven Hinweis und β-Einheit lesen.
6. Schmales Fenster (z.B. 375 px) und Desktop/Zoom prüfen: Auswahl erreichbar, Kennzahlen lesbar, Chart innerhalb seines Bereichs scrollbar, Achsen und Details sichtbar; Fokus sichtbar. Keine physische Mobilgeräte- oder Accessibility-Zertifizierung behaupten.
7. Optional Netzwerkausfall vor einem noch nicht geladenen Land simulieren: Fehler statt alter Analyse; Verbindung wiederherstellen und Retry prüfen. Laden/Fehler und Quellen bleiben erreichbar.

Ergebnisse erst nach tatsächlicher Durchführung ergänzen; Browser/Version, Datum und getestete Breite möglichst notieren. Keine 6.1-Prüfung als 6.2-Prüfung übernehmen.

## Abschlussreview und Dateien

`git diff --check` und separate `git diff --no-index --check` für alle neuen Dateien bestanden; UTF-8-Inhalte, relative Dokumentlinks und alle Diffs/Inhalte geprüft. Daten-/Analyse-/Forschungsinhalte entsprechen den Git-Blobs von `29b974f`. Referenz-CSV, Ergebnis-CSV, API-Client, Paketdefinition und Lockfile zusätzlich byte-identisch. Keine erkannten Secret-Muster in den Änderungen; `.env`, `node_modules` und `dist` weiter ignoriert. Staged Diff vor dem autorisierten Abschlusscommit kontrollieren; tatsächlicher Commit-/Merge-/Push-Nachweis über Git-Historie und Abschlussbericht.

**6 neue Dateien:**

- `website/src/statistics/analysis.ts`
- `website/src/components/Scatterplot.tsx`
- `website/tests/statistics.test.ts`
- `website/tests/Scatterplot.test.tsx`
- `website/tests/step-6-2-validation.md`
- `ai-workflow/prompts/06-website-visualization.md`

**15 geänderte Dateien:**

- `website/src/App.tsx`, `website/src/styles.css`, `website/tests/App.test.tsx`
- `website/README.md`, `website/tests/README.md`
- `README.md`, `PROJECT_STATUS.md`
- `docs/decisions.md`, `docs/roadmap.md`, `docs/workflow.md`
- `ai-workflow/README.md`, `ai-workflow/log.md`, `ai-workflow/validation-log.md`, `ai-workflow/prompts/README.md`
- `presentation/slides/06-codex-git.md` (nur bestehende AI-Workflow-Notizen)

Historische Erstübergabe: uncommitted auf `web/step-6-2-visualization`, 15 geänderte und 6 neue Dateien. Folgeauftrag: informelle menschliche Prüfung bestätigt, erneute technische Prüfung bestanden, Commit `web: finalize validated interactive visualization` auf demselben Branch autorisiert; ausschließlich sichere Fast-forward-Integration und normaler Push. Keine neue Funktion, keine Arbeit an 6.3 oder Schritten 7–8. Die Arbeitsteilung Nutzer / ChatGPT Chat / Codex ist kurz im [Projektworkflow](../../docs/workflow.md) dokumentiert.
