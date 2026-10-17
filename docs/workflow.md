# Projektworkflow

Jede Phase erzeugt ein fachliches Ergebnis und einen Nachweis für die Präsentation.

| Nr. | Phase | AI-Einsatz | Menschliche Kontrolle | Ergebnis | Status |
|---:|---|---|---|---|---|
| 1 | Ideation und Forschungsfrage | Ideen erzeugen, Frage schärfen, Gegenargumente formulieren | Optionen nach Machbarkeit, Kursbezug und Prüfbarkeit auswählen | Finale Forschungsfrage und Scope | Abgeschlossen |
| 2 | Literatur und Theorie | Suchbegriffe, Source Matrix und Zusammenfassungen unterstützen | Drei zentrale Aussagen auf Originalseiten prüfen und Synthesen als Interpretationen freigeben | Drei Quellen; 12 faktische Zellen AI-geprüft; 3 Hauptaussagen menschlich bestätigt; kein vollständiger Human Audit | Abgeschlossen (Minimalumfang) |
| 3 | Git und Projektaufbau (M7) | Struktur und Dokumentation vorbereiten | Diffs vor dem Staging und den gestagten Stand vor dem Commit prüfen | Lokales Repository außerhalb von OneDrive; `main` verfolgt `origin/main`; erster GitHub-Push erfolgreich | Abgeschlossen |
| 4 | Datenbeschaffung (M5) | Minimalen Standardbibliothek-Abruf und Validierung implementieren | Echten Terminalnachweis nachvollziehen; Codex führte Datenchecks, sechs Unit-Tests und einen separaten PowerShell-Spotcheck aus; kein vollständiger Human Audit | 150 Quellbeobachtungen; 75 vollständige Länder-Jahr-Zeilen; Frankreich-Spotcheck bestanden | Abgeschlossen |
| 5 | Mathematical Analysis & Validation | Korrelation und Regression implementieren | Bekannte Testlösungen, `statistics`-Abgleich und erneuter Codex-Review; Abschluss vom Nutzer beauftragt | Sechs Ergebniszeilen; 19 Tests insgesamt bestanden | Abgeschlossen |
| 6 | Website | Grundlage, Visualisierung und Ländervergleich implementiert | Automatisierte Tests, unabhängiger Python-Abgleich und nutzerberichtete Browserreviews; Git-Abschluss ausdrücklich freigegeben | Live-Daten, Plot, Kennzahlen und Vergleich | Abgeschlossen (6.1–6.3), AW-014 |
| 7 | Risks, Failures & Limitations | Logs, Bilder und Nutzerberichte getrennt auditieren | Historische Nachweise gegen Code/Tests/Git prüfen; persönliche Erfahrung kennzeichnen | Risikoregister, Lecture-Matrix, zwei mögliche Risikofolien | Abgeschlossen nach Dokumentationsreview und Abschlussauftrag; AW-016 |
| 8 | Reproduzierbarkeit und Präsentation | Storyline und Formulierungen unterstützen | Jede Zahl, Quelle und Grafik prüfen | README, Folien und Sprechertext | Nicht begonnen; bestehende Vorbereitungsnotizen vorhanden |

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

6.2 beginnt sauber/synchronisiert bei `29b974f` auf `web/step-6-2-visualization`. Der Implementierungsauftrag stoppte vor Commit/Merge/Push (AW-011). Der Folgeauftrag bestätigt einen positiven informellen Nutzercheck und autorisiert nach erneuter technischer/staged Prüfung Commit, sichere Integration und normalen Push (AW-012). Die detaillierte Checkliste ist nicht vollständig menschlich bestätigt. Als Nächstes 6.3 – Country Comparison & Website Finalization; noch nicht begonnen, ebenso Schritte 7/8.

## Zusammenarbeit: Nutzer, ChatGPT Chat und Codex

6.3 startet bei `b74f4c3` auf `web/step-6-3-comparison` nach sauberem/synchronisiertem Handoff. Der ursprüngliche Implementierungsauftrag endet vor Commit/Merge/Push (AW-013). Der Folgeauftrag „Finalize Step 6.3 – Country Comparison & Website Development“ bestätigt den informellen Nutzerreview und autorisiert nach erneuten Prüfungen den Git-Abschluss (AW-014). [Abschlussnachweise](../website/tests/step-6-3-validation.md). Schritt 6 abgeschlossen; Schritte 7/8 noch nicht begonnen.

Chat 4 beginnt bei sauberem `main` mit lokalem `origin/main` auf `d1be8bc`. Nur Schritt 7 wurde beauftragt: [Evidenzaudit und Lecture-Matrix](../ai-workflow/risk-register.md), Foliennotizen und Ordnerstruktur-Anforderung. Die Erstübergabe blieb uncommitted (AW-015); der Folgeauftrag AW-016 autorisiert nach erneutem Review/Checks Commit auf `docs/step-7-risk-audit`, sichere Fast-forward-Integration und normalen Push. Schritt 7 abgeschlossen; Schritt 8 als Nächstes, noch nicht begonnen. Die früheren Absätze dokumentieren den jeweiligen historischen Übergabestand.

| Rolle | Aufgabe im Arbeitsmodell |
|---|---|
| Nutzer / Projektverantwortlicher | Sagt, welches Ergebnis gewünscht ist, begrenzt den Umfang, entscheidet über Vorschläge, prüft die Website persönlich und gibt den Git-Abschluss ausdrücklich frei. |
| ChatGPT Chat | Unterstützt Ideen, Planung, Verständnis und Formulierung kleiner Aufgaben; relevante Entscheidungen und Prompts werden als explizite Aufträge bzw. Dokumentation an die Umsetzung übergeben. |
| Codex | Rekonstruiert den Stand aus Repository/Git, implementiert den beauftragten Teilschritt, führt technische Prüfungen aus, dokumentiert Evidenz und Grenzen und versioniert nach Freigabe. |

Diese Arbeitsteilung ersetzt keine Quellen- oder Ergebnisprüfung. Ein Chatvorschlag ist kein getesteter Code; ein automatisierter Test ist kein menschlicher Browsercheck. Git-Diffs und getrennte Logs machen Übernahme und Kontrolle nachvollziehbar. Zwischen Chats wird kein automatisch gemeinsamer Kontext vorausgesetzt: versionierte Dateien und konkrete Nutzeraufträge bilden die Übergabe. Konkrete 6.2-Evidenz: unabhängiger Zahlenvergleich, 65 Website-Tests, informeller Nutzercheck und autorisierter Git-Checkpoint (AW-011/AW-012).

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
