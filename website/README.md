# Website: Economic Data Explorer

**Schritt 6 – Website Development einschließlich 6.3 abgeschlossen.** Live-Einzelansicht und Drei-Länder-Vergleich: 71 Website-Tests, 19 Python-Tests, ESLint/TypeScript/Build und separater Live-Test erneut bestanden. Erfolgreicher informeller Browser-/Visualreview vom Nutzer berichtet; fünf Website-Screenshots bei Wiederaufnahme lokal vorhanden und als Bildevidenz geprüft. [6.3-Abschlussbericht, Bildlinks und Prüfgrenzen](tests/step-6-3-validation.md). Als Nächstes Schritt 7; nicht Teil dieses Auftrags.

## Vergleich in 6.3

Die vorhandene Zeitraumwahl steuert auch alle drei Vergleichszeilen. Landwahl markiert die aktive Zeile und wechselt weiterhin Plot und Jahrestabelle. r/β auf drei Stellen, n als vollständige Paare; fehlende/undefinierte Werte mit Erklärung. Je Land bleiben Source-Update-Daten und API-Links zugeordnet. Auf schmalen Fenstern ist die beschriftete Vergleichstabelle intern scrollbar.

Der neue kleine Hook `src/api/useCountryData.ts` übernimmt die bisherige Lade-/Retrylogik pro Land. Einzelansicht und Vergleich teilen denselben Länderzustand, sodass Retry aus beiden Ansichten konsistent ist. Alle Länder werden beim Start geladen (sechs Indikatoranfragen). Ein Länderfehler entfernt keine erfolgreichen anderen Ergebnisse; Retry betrifft nur das betroffene Land. Zeitraum-/Länderwechsel nach dem Laden verwenden Cache/lokale Filter, keine neuen Requests. API-Client, Cacheimplementierung und Statistikfunktionen unverändert, keine neue Abhängigkeit.

## Bedienung und Prüfung von 6.2

Land und Zeitraum auswählen. Punkte per Hover, Tab/Fokus, Enter/Leertaste oder Klick/Touch inspizieren; der Detailtext nennt Jahr und beide Werte, Escape setzt die Auswahl zurück. Die gestrichelte OLS-Gerade endet an der beobachteten Arbeitslosen-Spanne. r und β erscheinen auf drei Dezimalstellen, n ganzzahlig; undefinierte Werte mit Begründung. Deskriptive Interpretation und β-Einheit bleiben sichtbar.

Diagramm, Statistik und Tabelle verwenden dieselben lokal ausgewählten Jahre und vollständigen Paare; die Tabelle bewahrt zusätzlich fehlende Werte. 2000–2019 filtert bereits geladene Daten, ohne neue Requests. Ein Länderwechsel behält den Zeitraum. Schmale Fenster können den Chartbereich horizontal scrollen, damit Achsen lesbar bleiben.

Code: [`src/statistics/analysis.ts`](src/statistics/analysis.ts), [`src/components/Scatterplot.tsx`](src/components/Scatterplot.tsx). [Numerischer Vergleich, Testbefehle und Prüfgrenzen](tests/step-6-2-validation.md). 65 Website- und 19 Python-Tests erneut bestanden; Lint/Typecheck/Build erfolgreich. Der Nutzer hat die Website im echten Browser bedient und Aussehen/Funktionalität informell bestätigt. Detaillierte Keyboard-/Netzwerk-/Geräteprüfungen sind dadurch nicht belegt. Live-Revisionen können von der eingefrorenen Referenz abweichen; das allein ist kein Rechenfehler.

## Lokal starten

Voraussetzung: Node.js 24 LTS empfohlen (getestet: 24.11.1), npm (getestet: 11.6.2). Unterstützte Node-Versionen stehen in `package.json`.

```powershell
cd "C:\Users\andre\Präsentation (alles)\website"
npm ci
npm run dev
```

Die vom Terminal ausgegebene URL öffnen, normalerweise `http://127.0.0.1:5173/`. Mit `Ctrl+C` stoppen. Eine Internetverbindung zur World Bank ist erforderlich; kein API-Key, Backend oder `.env` nötig. Für eine lokale Produktionsvorschau: `npm run build`, dann `npm run preview` und die ausgegebene URL öffnen. Vite bindet nur an Loopback.

```powershell
npm run lint
npm run typecheck
npm test
npm run build
# Separater Online-Check; kann bei API-Revisionen bewusst fehlschlagen:
npm run validate:live
```

Implementierung: [`src/api/worldBank.ts`](src/api/worldBank.ts) enthält Definitionen, Parser, Jahresverknüpfung und Request-Cache; [`src/App.tsx`](src/App.tsx) zeigt Lade-, Fehler-, Leer- und Erfolgszustände. Entscheidungen: [D-006/D-008](../docs/decisions.md). Automatisierte Prüfungen, Live-Werte, echte Fehler und separat gekennzeichnete nutzerberichtete Browserchecks: [tests/README.md](tests/README.md).

## API-Verhalten (Grundlage aus 6.1, erweitert in 6.3)

- Zwei parallele native `fetch`-Aufrufe je Land, in 6.3 für alle drei Länder beim Start. Exakte URLs und Definitionen wie [data/API.md](../data/API.md); kein Proxy. Der Promise-Cache verhindert doppelte Requests unter StrictMode/Rerender.
- HTTP-Fehler, ungültiges JSON, falsche Identität, Duplikate, ungültige Jahre/Zahlen und unerwartete Pagination führen zu einer sichtbaren Fehlermeldung. Timeout: 30 Sekunden je Anfrage, Retry per Schaltfläche.
- Jede angeforderte Jahreszeile bleibt sichtbar. `null` und fehlende Jahresdatensätze erscheinen als „Missing“, ohne Imputation; vollständige Paare und unvollständige Jahre werden gezählt. Im Unterschied zum streng vollständigen Snapshot-Abruf werden fehlende Jahre hier zur Anzeige erhalten. In späterer Statistik dürfen nur vollständige Paare verwendet werden.
- Zahlen bleiben intern als JavaScript-`number` erhalten, entsprechend den Python-`float`-Eingaben für die Analyse. Nur die Anzeige rundet; die Statistik aus 6.2 verwendet ungerundete vollständige Paare.
- `lastupdated` wird pro Indikator ausgewiesen; fehlende Metadaten heißen „Not available“. Der Abrufzeitpunkt steht separat in UTC.
- Erfolgreiche Daten und laufende Promises werden je Land im Arbeitsspeicher gecacht, auch unter React StrictMode. Kein erneuter Abruf bei Rerender oder Rückkehr zu einem geladenen Land. Ein Seitenreload leert den Cache. Fehlgeschlagene Abrufe werden entfernt, damit Retry erneut abruft. Veraltete Länderantworten werden nicht angezeigt.
- Keine automatische Snapshot-Ausweichlösung: Ein API-Fehler bleibt sichtbar. Der versionierte Referenzdatensatz wird ausschließlich zum Testen gelesen und unverändert gelassen.

## Produktversprechen

Studierende können untersuchen, wie Inflation und Arbeitslosigkeit in Deutschland, Frankreich und Spanien zwischen 2000 und 2024 zusammenhängen. Die Website erklärt Kennzahlen und Grenzen so, dass das Ergebnis nicht als Kausalität missverstanden wird.

## Funktionen der ersten Version

- Land: Germany, France oder Spain
- Zeitraum: 2000–2024 oder 2000–2019
- Live-Abruf beider World-Bank-Indikatoren
- Scatterplot mit Jahreswerten im Tooltip
- Regressionsgerade
- Pearson `r`, Regressionssteigung `β` und Beobachtungen `n`
- Vergleichsansicht aller drei Länder
- Methodik, Datenquelle, Abrufstatus und Einschränkungen
- Eingefrorener Referenzdatensatz im Repository als unabhängige Validierungsbasis (kein Website-Download)

## Geplante Nutzerführung

1. Website startet mit Deutschland und 2000–2024.
2. Ein Ladehinweis erklärt, dass Daten von der World Bank abgerufen werden.
3. Diagramm und Kennzahlen erscheinen erst nach erfolgreicher Validierung.
4. Ein Länder- oder Zeitraumwechsel aktualisiert dieselbe Ansicht.
5. Die Vergleichsansicht setzt alle Länder mit identischen Definitionen gegenüber.
6. Methodik und Quelle bleiben direkt erreichbar.

## Festgelegte Technik

- React
- TypeScript
- Vite und npm; exakte Paketversionen mit Lockfile
- Native SVG-Visualisierung ohne zusätzliche Chart-Bibliothek (6.2)
- Berechnung im Browser
- Python-Skript als unabhängige Referenz

ESLint, TypeScript und Vitest mit jsdom/React Testing Library prüfen die Website. Keine zusätzliche UI-, Chart-, Routing- oder Datenverwaltungsbibliothek. Hosting bleibt offen.

## Ordnerstruktur (Zielausbau)

```text
website/
├── public/
│   └── reference-data/
├── src/
│   ├── api/
│   ├── components/
│   ├── statistics/
│   ├── types/
│   └── App.tsx
├── tests/
└── design/
```

## Zustände, die sichtbar gestaltet werden müssen

- Laden
- API-Fehler
- Unvollständige Daten
- Zu wenige Beobachtungen
- Erfolgreiche Analyse
- Referenzdaten-Demo, falls später umgesetzt

## Definition of Done für Schritt 6 (vereinbarter Umfang 6.1–6.3 erfüllt)

- Alle Funktionen der ersten Version sind nutzbar.
- Werte im Diagramm und in den Kennzahlen stammen aus denselben gefilterten Beobachtungen.
- TypeScript- und Python-Ergebnisse stimmen überein.
- Quelle, Zeitraum, Indikatoren und Grenzen sind sichtbar.
- Eine Person kann die Website nach README-Anleitung lokal starten.
- Automatisierte Tests und nutzerberichtete Browserreviews sind dokumentiert; keine vollständige manuelle Accessibility-/Geräteprüfung behauptet.
