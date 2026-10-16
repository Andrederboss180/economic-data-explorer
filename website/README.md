# Website: Economic Data Explorer

Schritt 6.1 ist abgeschlossen: technische Prüfungen erneut bestanden und sechs persönliche Browserchecks vom Nutzer bestätigt. Die englische Website zeigt Länderauswahl, Live-Abruf 2000–2024, eine scrollbare Jahrestabelle und Quellenmetadaten. Nächster Auftrag: **6.2 – Interactive Data Visualization**, noch nicht begonnen. Statistik, Zeitraumfilter und Ländervergleich bleiben spätere Teilschritte.

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
- Zahlen bleiben intern als JavaScript-`number` erhalten, entsprechend den Python-`float`-Eingaben für die Analyse. Nur die Tabellenanzeige rundet auf zwei Stellen. Noch keine Statistik im Browser.
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
- Noch auszuwählende Chart-Bibliothek
- Berechnung im Browser
- Python-Skript als unabhängige Referenz

ESLint, TypeScript und Vitest mit jsdom/React Testing Library prüfen die Grundlage. Keine UI-, Chart-, Routing- oder Datenverwaltungsbibliothek. Die Chart-Bibliothek und Hosting bleiben offen.

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
