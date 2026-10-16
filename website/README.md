# Website: Economic Data Explorer

**6.2 – Interactive Data Visualization ist abgeschlossen:** technische Prüfungen erneut bestanden, informeller Browser-/Visualcheck vom Nutzer positiv bestätigt. Scatterplot, OLS-Gerade, r/β/n und Zeitraumwahl ergänzen Live-Abruf, Tabelle, Quellen und Fehlerzustände ohne neue Abhängigkeit. Als Nächstes **6.3 – Country Comparison & Website Finalization**, noch nicht begonnen. Die 6.1-Checks und der informelle 6.2-Check bleiben getrennt dokumentiert.

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

## API-Verhalten in Schritt 6.1

- Zwei parallele native `fetch`-Aufrufe pro erstmals ausgewähltem Land. Exakte URLs und Definitionen wie [data/API.md](../data/API.md); kein Proxy.
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
- Download oder Verweis auf den eingefrorenen Referenzdatensatz

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

## Definition of Done für den gesamten Schritt 6 (noch nicht erfüllt)

- Alle Funktionen der ersten Version sind nutzbar.
- Werte im Diagramm und in den Kennzahlen stammen aus denselben gefilterten Beobachtungen.
- TypeScript- und Python-Ergebnisse stimmen überein.
- Quelle, Zeitraum, Indikatoren und Grenzen sind sichtbar.
- Eine Person kann die Website nach README-Anleitung lokal starten.
- Automatisierte Tests und ein dokumentierter manueller Testlauf sind vorhanden.
