# Economic Data Explorer

Dieses Repository enthält das gesamte AI-Kursprojekt: Forschungsfrage, Literaturarbeit, Datenbeschaffung, statistische Analyse, Website, dokumentierten AI-Workflow und Präsentation.

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
- [x] Lokales Git-Repository auf `main` vorbereitet
- [ ] Literaturrecherche durchführen und Quellen prüfen
- [ ] Datenpipeline und Referenzdatensatz erstellen
- [ ] Analyse implementieren und unabhängig validieren
- [ ] Website implementieren und testen
- [ ] Präsentation erstellen, rendern und prüfen

Den detaillierten Stand pflegen wir in [PROJECT_STATUS.md](PROJECT_STATUS.md).

## Ordnerstruktur

| Ordner | Inhalt |
|---|---|
| `docs/` | Projektbrief, Kursbezug, Workflow, Roadmap, Entscheidungen und Git-Anleitung |
| `research/` | Forschungsfrage, Methodik, Literatur und Quellen |
| `data/` | Rohdaten, eingefrorener Referenzdatensatz, bereinigte Daten und Ergebnisse |
| `analysis/` | Python-Skripte, Tests und optionale Notebooks |
| `website/` | Website-Code, Tests, Designnotizen und veröffentlichte Referenzdaten |
| `ai-workflow/` | Prompts, AI-Log, Validierung, Risiken und Nachweise |
| `presentation/` | Storyboard, Folieninhalte, Sprechertext, Quellen und Medien |
| `archive/` | Unveränderte Ausgangsmaterialien und ältere Stände |

Eine geführte Navigation steht in [docs/README.md](docs/README.md).

## Geplante technische Architektur

1. Die Website lädt Inflations- und Arbeitslosigkeitsdaten live über die World-Bank-API.
2. Der Browser verbindet die Jahreswerte und berechnet Korrelation sowie lineare Regression.
3. Ein versionierter Referenzdatensatz hält den Präsentationsstand reproduzierbar.
4. Ein unabhängiges Python-Skript prüft Daten und Kennzahlen.
5. Eine eigene Datenbank ist nicht vorgesehen.

Die Architektur ist in [docs/decisions.md](docs/decisions.md) dokumentiert.

## Nächster Arbeitsschritt

Als Nächstes folgt die Literaturrecherche zur Phillips-Kurve. Dabei sammeln wir zwei bis drei geeignete Originalquellen, prüfen die Fundstellen selbst und dokumentieren Prompt, Prüfung und Ergebnis im AI-Workflow-Log.

## Git-Schnellstart

```powershell
git status
git add .
git commit -m "docs: document literature review"
```

Für neue größere Arbeitspakete nutzen wir einen kurzen Feature-Branch. Die genauen Befehle stehen in [docs/git-guide.md](docs/git-guide.md).

## Arbeitsprinzip

Jeder relevante AI-Schritt hinterlässt vier Nachweise: Aufgabe, verwendeter Prompt, menschliche Prüfung und übernommenes oder verworfenes Ergebnis. So entsteht die Präsentation während der Projektarbeit und nicht erst am Ende.
