# Website-Tests

Schritt 6.1 abgeschlossen: **32 Offline-Tests und 1 separater Live-Test erneut bestanden**; zusätzlich **sechs persönliche Browserchecks vom Nutzer als bestanden berichtet**. Befehle, Live-Werte, Fehlerkorrekturen, manuelle Ergebnisse und Prüfgrenzen stehen im [Validierungsbericht](step-6-1-validation.md). Die folgende Liste beschreibt den Zielausbau; Statistik, Filter und Diagramme sind noch nicht implementiert. Nächster Auftrag: 6.2 – Interactive Data Visualization.

## Automatisierte Tests

- API-Antwort wird korrekt in Jahreswerte übersetzt.
- Reihen werden über das Jahr und nicht über Listenposition verbunden.
- `null`-Werte bleiben in der Tabelle sichtbar und werden gezählt; spätere Statistik verwendet nur vollständige Paare.
- Zeitraumfilter umfasst Start- und Endjahr.
- Korrelation und Regression stimmen für bekannte Testdaten.
- Länderauswahl verwendet den korrekten Code.
- Fehlerzustände zeigen keine alten Kennzahlen.

## Manueller Testlauf

Später dokumentieren wir pro Browser:

| Test | Erwartung | Ergebnis | Datum |
|---|---|---|---|
| Startansicht | Deutschland, 2000–2024, verständlicher Ladezustand | Offen | – |
| Länderwechsel | Diagramm und Kennzahlen wechseln gemeinsam | Offen | – |
| Zeitraumwechsel | Nur Zeitraum ändert sich, Daten bleiben korrekt | Offen | – |
| Tooltip | Jahr und beide Messwerte sichtbar | Offen | – |
| API-Ausfall | Verständliche Meldung, keine irreführenden Werte | Offen | – |
| Methodik | Quelle, Indikatoren und Grenzen auffindbar | Offen | – |
