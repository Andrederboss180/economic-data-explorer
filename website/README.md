# Website: Economic Data Explorer

Der Code der interaktiven Website entsteht in diesem Ordner. Aktuell ist die Produkt- und Architekturentscheidung dokumentiert; die technische Initialisierung folgt nach Literatur- und API-Prüfung.

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

## Vorläufige Technik

- React
- TypeScript
- Vite oder vergleichbar schlankes Build-Setup
- Noch auszuwählende Chart-Bibliothek
- Berechnung im Browser
- Python-Skript als unabhängige Referenz

Die konkrete Bibliothekswahl erfolgt erst beim Setup und wird in `docs/decisions.md` ergänzt.

## Geplante Ordnerstruktur

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

## Definition of Done

- Alle Funktionen der ersten Version sind nutzbar.
- Werte im Diagramm und in den Kennzahlen stammen aus denselben gefilterten Beobachtungen.
- TypeScript- und Python-Ergebnisse stimmen überein.
- Quelle, Zeitraum, Indikatoren und Grenzen sind sichtbar.
- Eine Person kann die Website nach README-Anleitung lokal starten.
- Automatisierte Tests und ein dokumentierter manueller Testlauf sind vorhanden.
