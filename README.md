# Economic Data Explorer

Dieses Repository enthält Forschungsfrage, Literaturarbeit, Datenbeschaffung, statistische Analyse, Website, dokumentierten AI-Workflow und Präsentationsvorbereitung des AI-Kursprojekts. Die finale Präsentation ist in Canva fertiggestellt und wird separat als PDF eingereicht.

## Forschungsfrage

> How does the relationship between inflation and unemployment differ across Germany, France, and Spain from 2000 to 2024?

Deutsch: Wie unterscheidet sich der Zusammenhang zwischen Inflation und Arbeitslosigkeit in Deutschland, Frankreich und Spanien im Zeitraum 2000 bis 2024?

Wir untersuchen einen statistischen Zusammenhang. Wir behaupten keine Kausalität und testen nicht die vollständige moderne Phillips-Kurve.

## Fokus des Projekts

Das fachliche Produkt ist eine kleine interaktive Website. Der Schwerpunkt der Präsentation liegt jedoch auf dem nachvollziehbaren Arbeitsprozess:

- Wie AI bei Ideation, Recherche, Programmierung und Formulierung geholfen hat
- Wie die World-Bank-API verwendet und kontrolliert wurde
- Wie Codex-Aufgaben in kleine, prüfbare Schritte zerlegt wurden
- Wie Git Änderungen und Entscheidungen nachvollziehbar macht
- Wie AI-Ausgaben mit Quellen, Tests und unabhängigen Rechnungen überprüft wurden

## Aktueller Stand

- [x] Ideation abgeschlossen
- [x] Projektthema und Forschungsfrage ausgewählt
- [x] Minimaler Umfang und Website-Funktionen festgelegt
- [x] Projektstruktur und Dokumentationssystem angelegt
- [x] Daten, Analyse und Website in `main` versioniert
- [x] Literaturreview im vereinbarten Minimalumfang abgeschlossen
- [x] Minimalen API-Abruf und Referenzdatensatz prüfen und abschließen
- [x] Analyse implementieren und unabhängig validieren
- [x] Website implementieren und testen
- [x] Schritt 7 – Risks, Failures & Limitations dokumentieren und abschließen
- [x] Präsentation in Canva fertiggestellt; separate Abgabe als PDF

Historische Entwicklungsstände stehen in [PROJECT_STATUS.md](PROJECT_STATUS.md); dessen Präsentationsstatus ist noch nicht aktualisiert. Für den aktuellen Abgabestand gilt dieses README.

## Ordnerstruktur

| Ordner | Inhalt |
|---|---|
| `docs/` | Projektbrief, Kursbezug, Workflow, Roadmap, Entscheidungen und Git-Anleitung |
| `research/` | Forschungsfrage, Methodik, Literatur und Quellen |
| `data/` | Rohdaten, eingefrorener Referenzdatensatz, bereinigte Daten und Ergebnisse |
| `analysis/` | Python-Skripte, Tests und optionale Notebooks |
| `website/` | Website-Code, Tests und Designnotizen |
| `ai-workflow/` | Prompts, AI-Log, Validierung, Risiken und Nachweise |
| `presentation/` | Storyboard, Folieninhalte, Sprechertext, Quellen und Medien |
| `archive/` | Unveränderte Ausgangsmaterialien und ältere Stände |

Eine geführte Navigation steht in [docs/README.md](docs/README.md).

## Technische Architektur und Datenstände

1. Die Website lädt Inflations- und Arbeitslosigkeitsdaten live über die World-Bank-API.
2. Der Browser verbindet die Jahreswerte und berechnet Korrelation sowie lineare Regression.
3. Ein versionierter Referenzdatensatz hält den Präsentationsstand reproduzierbar.
4. Ein unabhängiges Python-Skript prüft Daten und Kennzahlen.
5. Eine eigene Datenbank ist nicht vorgesehen.

Die Architektur ist in [docs/decisions.md](docs/decisions.md) dokumentiert.

Die **Python-Referenzanalyse** verwendet den eingefrorenen Datensatz [reference_2000_2024.csv](data/reference/reference_2000_2024.csv): 75 vollständige Länder-Jahr-Paare aus dem Abruf vom `2026-10-16T12:35:25Z`, Quellenupdate `2026-10-08`. Sie berechnet sechs Länder-Zeitraum-Ergebnisse für 2000–2024 und 2000–2019. Originalantworten, API-URLs und Provenienz sind in [data/README.md](data/README.md) und [data/API.md](data/API.md) beschrieben.

Die **Website** lädt dagegen beide Indikatoren live über die World-Bank-API und berechnet die Kennzahlen im Browser. Sie benötigt Internetzugriff und hat keinen automatischen Rückgriff auf den Snapshot. Datenrevisionen können deshalb zu Abweichungen von den eingefrorenen Python-Ergebnissen führen. Der Snapshot dient der Reproduktion und Validierung, nicht als Offline-Datenquelle der Website. Startanleitung und Voraussetzungen: [website/README.md](website/README.md).

## Python-Analyse offline reproduzieren

Voraussetzung: Python 3.10 oder neuer (getestet mit Python 3.13.15), über `python` erreichbar. Im Repository-Hauptordner ausführen:

```powershell
python -B analysis/scripts/analyze_reference_data.py
```

Der Befehl liest ausschließlich `data/reference/reference_2000_2024.csv` und schreibt die sechs Ergebniszeilen nach [data/results/analysis_results.csv](data/results/analysis_results.csv); eine vorhandene Ergebnisdatei wird überschrieben. Es werden weder Internetzugriff noch zusätzliche Python-Pakete oder ein erneuter Datenabruf benötigt. Details, die Windows-Alternative mit vollständigem Interpreterpfad und vorhandene Testbefehle: [analysis/README.md](analysis/README.md). Bekannte Testlösungen, Standardbibliotheksvergleich, Ergebnisse und methodische Grenzen: [analysis/validation.md](analysis/validation.md).

## AI-Disclosure

- **ChatGPT:** Planung, Erklärungen und Formulierung von Aufgaben für Codex; außerdem Unterstützung bei Ideation, Literaturarbeit und Präsentationsvorbereitung. Für die Literaturmatrix ist `GPT-6` mit mittlerem Denkaufwand im [Literatur-Prüfbericht](research/literature/exercise-2.3-validation.md) dokumentiert. Für die übrigen ChatGPT-Schritte liegt keine vollständige Modellzuordnung vor.
- **Codex:** Implementierung der Python-Analyse und Website, Erstellung und Ausführung von Tests sowie technische Dokumentation und Git-Arbeit. Für Chat 2 / die Python-Analyse ist `GPT-6.1 Sol, Medium` als Nutzerauswahl dokumentiert, jedoch nicht unabhängig durch Runtime-Metadaten bestätigt; diese Angabe gilt nicht pauschal für weitere Sitzungen. Nachweis: [Analysebericht](analysis/validation.md).
- **Menschliche Kontrolle:** Der Studierende wählte Forschungsfrage und Umfang, prüfte ausgewählte zentrale Literaturbefunde am Original und berichtete persönliche Browserprüfungen. Die technischen Gegenprüfungen ersetzen keinen vollständigen unabhängigen menschlichen Code-Audit.

Relevante Aufträge, Prompts, Entscheidungen und Kontrollen stehen in [ai-workflow/README.md](ai-workflow/README.md), dem [Workflow-Log](ai-workflow/log.md), der [Promptablage](ai-workflow/prompts/README.md) und dem [Validierungslog](ai-workflow/validation-log.md). Die World-Bank-API ist eine Daten-API; es wurden keine LLM-konstruierten Analysevariablen erzeugt.

## Abgabestand und Präsentation

Die Präsentation ist laut Bestätigung des Studierenden in Canva fertig und wird separat als PDF eingereicht. Im Repository bleiben die [15 Folienpläne](presentation/slide-plans/README.md), Sprechertexte und Belege als Entwicklungsnachweise erhalten; sie sind nicht das finale Deck. Die damalige Vorbereitung ist unter AW-017/V-013 dokumentiert.

Schritte 1–7 sind abgeschlossen. Schritt 7 bei `389564b`: [Fehler, Risiken, Grenzen und Lecture-Matrix](ai-workflow/risk-register.md), [erhaltene Risikonotizen](presentation/slides/07-risks-failures-limitations.md). Schritt 6 bei `d1be8bc`: [Website-Abschlussnachweise und Prüfgrenzen](website/tests/step-6-3-validation.md). Die dort dokumentierten bestandenen Tests sind historische Nachweise und wurden für diese README-Aktualisierung nicht erneut ausgeführt.

Git-Stand vor dieser README-Aktualisierung: sauberer Arbeitsbaum auf `slides/step-8-1-blueprints` bei `b58e265`; `main` und das beim Abgabe-Audit direkt geprüfte Remote-`main` bei `389564b`. Die fünf zusätzlichen Präsentationsbranch-Commits sind bereits lokal committed und werden nicht pauschal nach `main` übernommen. Alle für die Offline-Analyse und Website erforderlichen Dateien liegen bereits in `main`. Diese README-Anpassung bleibt zunächst uncommitted auf dem aktuellen Branch.

## Git-Schnellstart

```powershell
git status
git add .
git commit -m "docs: document literature review"
```

Für neue größere Arbeitspakete nutzen wir einen kurzen Feature-Branch. Die genauen Befehle stehen in [docs/git-guide.md](docs/git-guide.md).

## Arbeitsprinzip

Jeder relevante AI-Schritt hinterlässt vier Nachweise: Aufgabe, verwendeter Prompt, menschliche Prüfung und übernommenes oder verworfenes Ergebnis. So entsteht die Präsentation während der Projektarbeit und nicht erst am Ende.
