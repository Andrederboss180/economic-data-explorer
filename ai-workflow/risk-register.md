# Risikoregister

| ID | Risiko | Auswirkung | Gegenmaßnahme | Geplanter Nachweis | Status |
|---|---|---|---|---|---|
| R1 | AI erfindet oder verwechselt Literatur | Falsche Theorie oder Quellenangabe | Originalquelle, Metadaten und Fundstelle prüfen | Literatur-Tracker | Offen |
| R2 | Korrelation wird als Kausalität formuliert | Wissenschaftlich falsche Schlussfolgerung | Textprüfung und feste deskriptive Formulierungen | Präsentationsreview | Laufend |
| R3 | Codex implementiert Statistik falsch | Falsche Kennzahlen | Testdaten und unabhängige Python-Rechnung | Testprotokoll | Offen |
| R4 | API liefert fehlende oder geänderte Daten | Abweichende Resultate | Validierung, Abrufdatum und Referenzdatensatz | Datenmetadaten | Offen |
| R5 | Reihen werden nach Listenposition statt Jahr verbunden | Falsch gepaarte Beobachtungen | Join über Land und Jahr, gezielter Test | Unit-Test | Offen |
| R6 | World-Bank-API fällt beim Vortrag aus | Demo funktioniert nicht | Referenzdaten und optionaler Fallback | Probelauf | Offen |
| R7 | AI verändert funktionierenden Code außerhalb des Auftrags | Regression oder unerklärte Änderung | kleinen Scope vorgeben, Diff prüfen, Tests ausführen | Git-Diff | Laufend |
| R8 | Zu viel Funktionsumfang | Unfertige Website und schwache Dokumentation | Nicht-Ziele respektieren, Meilensteine abnehmen | Roadmap | Kontrolliert |
| R9 | Präsentation zeigt illustrative Werte wie echte Ergebnisse | Irreführung | Platzhalter deutlich markieren, nur geprüfte Daten übernehmen | Foliencheck | Laufend |
| R10 | Abgabevorgaben sind unvollständig übernommen | Formale Anforderungen verfehlt | Skript, Aufgabenblatt und Template später direkt prüfen | Anforderungsliste | Offen |

## Präsentationsregel

Die Folie „What went wrong?“ verwendet später bevorzugt einen echten Fall aus dem Validierungslog. Falls kein bedeutender Fehler auftritt, zeigen wir eine konkrete Prüfung, die ein plausibles Risiko ausgeschlossen hat. Wir erfinden keinen Fehler.
