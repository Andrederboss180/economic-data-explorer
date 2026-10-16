# Projektworkflow

Jede Phase erzeugt ein fachliches Ergebnis und einen Nachweis für die Präsentation.

| Nr. | Phase | AI-Einsatz | Menschliche Kontrolle | Ergebnis | Status |
|---:|---|---|---|---|---|
| 1 | Ideation und Forschungsfrage | Ideen erzeugen, Frage schärfen, Gegenargumente formulieren | Optionen nach Machbarkeit, Kursbezug und Prüfbarkeit auswählen | Finale Forschungsfrage und Scope | Abgeschlossen |
| 2 | Literatur und Theorie | Suchbegriffe, Source Matrix und Zusammenfassungen unterstützen | Drei zentrale Aussagen auf Originalseiten prüfen und Synthesen als Interpretationen freigeben | Drei Quellen; 12 faktische Zellen AI-geprüft; 3 Hauptaussagen menschlich bestätigt; kein vollständiger Human Audit | Abgeschlossen (Minimalumfang) |
| 3 | Git und Projektaufbau (M7) | Struktur und Dokumentation vorbereiten | Diffs vor dem Staging und den gestagten Stand vor dem Commit prüfen | Lokales Repository außerhalb von OneDrive; `main` verfolgt `origin/main`; erster GitHub-Push erfolgreich | Abgeschlossen |
| 4 | Datenbeschaffung (M5) | Minimalen Standardbibliothek-Abruf und Validierung implementieren | Echten Terminalnachweis nachvollziehen; Codex führte Datenchecks, sechs Unit-Tests und einen separaten PowerShell-Spotcheck aus; kein vollständiger Human Audit | 150 Quellbeobachtungen; 75 vollständige Länder-Jahr-Zeilen; Frankreich-Spotcheck bestanden | Abgeschlossen |
| 5 | Mathematical Analysis & Validation | Korrelation und Regression implementieren | Bekannte Testlösungen, `statistics`-Abgleich und erneuter Codex-Review; Abschluss vom Nutzer beauftragt | Sechs Ergebniszeilen; 19 Tests insgesamt bestanden | Abgeschlossen |
| 6 | Website | Grundlage, Live-Client und Tests für 6.1 implementiert | Nutzer bestätigt sechs persönliche Browserchecks; technische Prüfungen erneut bestanden | Live-Jahrestabelle mit Quellen, Fehlerbehandlung und Cache | 6.1 abgeschlossen; als Nächstes 6.2, noch nicht begonnen |
| 7 | Fehler und Grenzen | Risiken identifizieren und Erklärungen entwerfen | Nur tatsächlich beobachtete Fehler als Fälle verwenden | Risikoregister und Validierungsbeispiel | Laufend |
| 8 | Reproduzierbarkeit und Präsentation | Storyline und Formulierungen unterstützen | Jede Zahl, Quelle und Grafik prüfen | README, Folien und Sprechertext | Vorbereitet |

## Standardablauf pro Arbeitspaket

1. Ziel und Abnahmekriterien festlegen.
2. Prompt und Werkzeug dokumentieren.
3. Änderung in kleinem Umfang erzeugen.
4. Quelle, Code oder Ergebnis unabhängig prüfen.
5. Diff kontrollieren und Tests ausführen.
6. AI-Log aktualisieren.
7. Verständlichen Git-Commit erstellen.

Der ursprüngliche Chat-2-Auftrag endete vor dem Commit. Der Folgeauftrag autorisiert nach erneuter Prüfung Commit, sichere Integration in `main` und Push (AW-008). Die geplante Aufteilung auf vier Codex-Chats und die Übergabe über Git/Dokumentation stehen in [ai-workflow/README.md](../ai-workflow/README.md).

Chat 3 beginnt bei `4a28809`. Der ursprüngliche 6.1-Auftrag stoppte vor Commit/Push (AW-009). Der Folgeauftrag „Finalize Step 6.1 – Website Foundation“ meldet sechs persönliche Browserchecks und autorisiert nach erneutem technischem/staged Review den Abschlusscommit, sichere Integration in `main` und normalen Push (AW-010). Historische Prompts bleiben unverändert; spätere Website-Teilschritte und Schritte 7/8 sind nicht Teil dieses Finalisierungsauftrags.

## Workflow für die spätere Übersichtsgrafik

**Research question**

Ideation und Auswahlkriterien

**Evidence**

Literatur und World-Bank-Daten

**Implementation**

Codex-Aufgaben, Git-Branches und Tests

**Validation**

Quellenprüfung, Datenchecks und unabhängige Statistik

**Communication**

Website, README und Präsentation

Die finale Folie soll diese fünf Stationen als einfachen Prozess zeigen. Verbindungen und konkrete Nachweise werden erst ergänzt, wenn echte Artefakte vorliegen.
