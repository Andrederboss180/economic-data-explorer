# Website-Tests

6.3 abgeschlossen: **71 Offline-Website-Tests, 19 Python-Tests, ESLint/TypeScript/Build und separater Live-Test erneut bestanden**. Alle sechs Vergleichsgruppen gegen Python geprüft; Teilfehler, gezielter Retry, Markierung und Request-Zahl getestet. Erfolgreicher nutzerberichteter informeller Browser-/Visualreview; keine vollständige manuelle Detailprüfung. [Abschlussnachweise und Grenzen](step-6-3-validation.md), AW-014. Die folgenden 6.2-Angaben sind historische Evidenz.

6.2 abgeschlossen: **65 Offline-Tests und 19 Python-Tests erneut bestanden**, einschließlich aller sechs Referenzgruppen und Zeitraumwechsel ohne neue Requests. Lint/Typecheck/Build bestanden. Zusätzlich erfolgreicher **nutzerberichteter informeller Browser-/Visualcheck**, keine vollständige Checklistenbestätigung. [6.2-Prüfbericht und Grenzen](step-6-2-validation.md). Als Nächstes 6.3 – Country Comparison & Website Finalization; noch nicht begonnen. Historische 6.1-Evidenz bleibt im [6.1-Bericht](step-6-1-validation.md).

## Automatisierte Tests

- API-Antwort wird korrekt in Jahreswerte übersetzt.
- Reihen werden über das Jahr und nicht über Listenposition verbunden.
- `null`-Werte bleiben in der Tabelle sichtbar und werden gezählt; spätere Statistik verwendet nur vollständige Paare.
- Zeitraumfilter umfasst Start- und Endjahr.
- Korrelation und Regression stimmen für bekannte Testdaten.
- Länderauswahl verwendet den korrekten Code.
- Fehlerzustände zeigen keine alten Kennzahlen.

## Manueller Testlauf

Ein informeller Browser-/Visualcheck wurde vom Nutzer bestätigt. Die konkreten Einzelpunkte der [6.2-Checkliste](step-6-2-validation.md) wurden nicht separat bestätigt; die folgende Tabelle ist kein Beleg einer vollständigen manuellen Abnahme:

| Test | Erwartung | Ergebnis | Datum |
|---|---|---|---|
| Startansicht | Deutschland, 2000–2024, verständlicher Ladezustand | Offen | – |
| Länderwechsel | Diagramm und Kennzahlen wechseln gemeinsam | Offen | – |
| Zeitraumwechsel | Nur Zeitraum ändert sich, Daten bleiben korrekt | Offen | – |
| Tooltip | Jahr und beide Messwerte sichtbar | Offen | – |
| API-Ausfall | Verständliche Meldung, keine irreführenden Werte | Offen | – |
| Methodik | Quelle, Indikatoren und Grenzen auffindbar | Offen | – |
