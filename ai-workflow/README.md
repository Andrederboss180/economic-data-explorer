# AI-Workflow und Nachweise

Dieser Ordner ist die wichtigste Grundlage für den Hauptteil der Präsentation.

## Dateien

- [log.md](log.md): relevante AI-Arbeitsschritte
- [validation-log.md](validation-log.md): echte Fehler, Prüfungen und Korrekturen
- [risk-register.md](risk-register.md): Risiken und Gegenmaßnahmen
- [prompts/](prompts/): wichtige Prompts und ihr Zweck
- [token-experiment.md](token-experiment.md): optionaler, kleiner Promptvergleich
- `evidence/screenshots/`: ausgewählte Screenshots mit Aussagewert

## Was in das Log gehört

Ein Eintrag ist sinnvoll, wenn AI:

- eine fachliche Entscheidung beeinflusst
- Literatur oder Datenquellen vorschlägt
- Code oder Tests erzeugt
- eine Analyse interpretiert
- eine Präsentationsaussage formuliert
- einen Fehler verursacht oder bei seiner Behebung hilft

Nicht jede kurze Nachfrage muss gespeichert werden. Wir dokumentieren die Entscheidungen, die den Projektstand verändert haben.

## Vier Pflichtfelder

1. **Task:** Was wollten wir erreichen?
2. **AI usage:** Welches Werkzeug und welcher Prompt wurden verwendet?
3. **Validation:** Wie wurde die Ausgabe kontrolliert?
4. **Outcome:** Was wurde übernommen, verändert oder verworfen?

Später ergänzen wir Commit, Screenshot oder Datei als Nachweis.

## Geplante Codex-Sitzungen

| Chat | Umfang | Stand am 16.10.2026 |
|---|---|---|
| 1 | Projektstruktur, Literaturreview, Git, World-Bank-API | Abgeschlossen bis `952b6d4` |
| 2 | Mathematical Analysis & Validation | Abgeschlossen bei `4a28809` nach technischem Review und Nutzerauftrag zur Finalisierung |
| 3 | Website Development | Aktiv: 6.2 abgeschlossen nach technischer Prüfung und nutzerberichtetem informellem Browsercheck; als Nächstes 6.3 |
| 4 | Finalization & Presentation | Geplant |

Die Trennung begrenzt mitgeführten Gesprächskontext und hält die Phasen übersichtlich. Jede neue Sitzung rekonstruiert Wissen aus versionierten Dateien, Daten und Git-Historie. Vor dem Wechsel müssen freigegebene Änderungen committed und offene Punkte dokumentiert sein. Ein Chatwechsel setzt Nutzungskontingente nicht zurück; eine geringere Gesamtzahl an Tokens wird nicht garantiert oder als gemessen behauptet. Aktuelle Produktinformation: [OpenAI Pricing](https://learn.chatgpt.com/docs/pricing), geöffnet am 16.10.2026; kein Tokenexperiment dieses Projekts.

Chat 2: Codex, Modell `GPT-6.1 Sol, Medium` laut berichteter Nutzerauswahl, nicht unabhängig als Runtime-Metadatum verifiziert. Folienkonzept: [Context Management](../presentation/slides/06-codex-git.md#context-management-in-ai-assisted-development).
