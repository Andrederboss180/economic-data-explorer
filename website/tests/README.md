# Website-Tests

## Automatisierte Tests

- API-Antwort wird korrekt in Jahreswerte übersetzt.
- Reihen werden über das Jahr und nicht über Listenposition verbunden.
- `null`-Werte werden ausgeschlossen und gezählt.
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
