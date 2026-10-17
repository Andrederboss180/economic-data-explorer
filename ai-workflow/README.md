# AI-Workflow und Nachweise

Dieser Ordner ist die wichtigste Grundlage für den Hauptteil der Präsentation.

## Dateien

- [log.md](log.md): relevante AI-Arbeitsschritte
- [validation-log.md](validation-log.md): echte Fehler, Prüfungen und Korrekturen
- [risk-register.md](risk-register.md): Schritt-7-Audit mit echten Fehlern, Kontrollen, verbleibenden Grenzen und M3/Lab-3/M8-Matrix
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

## Ursprünglich geplante Codex-Sitzungen (historischer Stand vor Chat 5)

| Chat | Umfang | Stand am 17.10.2026 |
|---|---|---|
| 1 | Projektstruktur, Literaturreview, Git, World-Bank-API | Abgeschlossen bis `952b6d4` |
| 2 | Mathematical Analysis & Validation | Abgeschlossen bei `4a28809` nach technischem Review und Nutzerauftrag zur Finalisierung |
| 3 | Website Development | Abgeschlossen bei `d1be8bc`: 6.1–6.3, technische Prüfungen und nutzerberichtete Browserreviews; AW-014 |
| 4 | Finalization & Presentation | Aktiv: Schritt 7 nach Dokumentationsreview und Abschlussauftrag abgeschlossen (AW-016). Schritt 8 als Nächstes, noch nicht begonnen |

Die Trennung begrenzt mitgeführten Gesprächskontext und hält die Phasen übersichtlich. Jede neue Sitzung rekonstruiert Wissen aus versionierten Dateien, Daten und Git-Historie. Vor dem Wechsel müssen freigegebene Änderungen committed und offene Punkte dokumentiert sein. Ein Chatwechsel setzt Nutzungskontingente nicht zurück; eine geringere Gesamtzahl an Tokens wird nicht garantiert oder als gemessen behauptet. Aktuelle Produktinformation: [OpenAI Pricing](https://learn.chatgpt.com/docs/pricing), geöffnet am 16.10.2026; kein Tokenexperiment dieses Projekts.

Chat 2: Codex, Modell `GPT-6.1 Sol, Medium` laut berichteter Nutzerauswahl, nicht unabhängig als Runtime-Metadatum verifiziert. Folienkonzept: [Context Management](../presentation/slides/06-codex-git.md#context-management-in-ai-assisted-development).

Chat 4: relevante Codex-Aufträge auf Englisch, deutsche Arbeitsnotizen. Kein kontrollierter Sprach-/Tokenvergleich und kein notwendiger Tokenvorteil behauptet. Nutzerberichtete Wartezeiten/Expertise, historische Screenshots und heutige Produktregeln sind im [Audit](risk-register.md) getrennt. Der neue Chat setzt weder geltende Fünf-Stunden- noch Wochenkontingente zurück.

## Tatsächliche Fortsetzung: Codex Chat 5 – Presentation Preparation

17.10.2026: Chat 4 schloss Schritt 7 bei `389564b` ab. Die ursprünglich dort mitgeplante Präsentation wird zusätzlich in Chat 5 vorbereitet. Damit existieren fünf nummerierte Projektchats; es wird kein weiterer separater Risiko-Chat erfunden. Der Vier-Chat-Plan oben bleibt als historische Planung erhalten.

Chat 5 begann mit einer ausdrücklich read-only beauftragten Evidenzinventur; Repository unverändert. Der Folgeauftrag Schritt 8.1 erlaubt jetzt [15 vollständige Folienpläne](../presentation/slide-plans/README.md), Navigation, Zeitbudget und aktuelle Dokumentation. Bestätigt: 15 Minuten, 15 Folien, Canva. Alle Pläne werden zuerst vorbereitet, danach einzeln mit ChatGPT/Nutzer geprüft, verstanden und gestaltet. [Prompt 09](prompts/09-slide-blueprints.md), AW-017/V-013. Kein Produktcode, Datenwechsel, neues Experiment, finales Deck oder Commit. Modelle früherer Chats werden nicht als Metadaten dieser Sitzung übernommen.
