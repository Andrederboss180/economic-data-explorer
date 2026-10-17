# Step 7: Risks, failures and limitations

Zwei mögliche Folien, keine erstellten Slides. Englischer Folientext, deutsche Arbeitsnotizen; Vortragssprache weiterhin offen. Kategorien, Lecture-Matrix und Evidenzgrenzen: [Risikoregister](../../ai-workflow/risk-register.md). Zahlen sind historische Prüfergebnisse, keine in Chat 4 erneut ausgeführten Tests.

## Slide A: What Went Wrong? Real Failures and Fixes

**Aussage:** Ein grüner erster Testlauf reichte nicht aus; Review fand einen echten Fehler. Setup und Dienstverfügbarkeit verursachten zusätzliche Unterbrechungen.

**Möglicher Folientext:**

- Constant `0.1` values produced `r = 0` instead of an undefined correlation. Two decimal subtests failed before the fix, then all 19 Python tests passed.
- Python setup, incompatible TypeScript dependencies and test paths required corrections.
- Model capacity interrupted compaction. A Codex allowance stopped further work.

**Visual:** Ein lesbarer Ausschnitt der vorhandenen Konstantenprüfung und der beiden Testfälle als Hauptbeleg. Daneben ein enger Ausschnitt des echten Kapazitätsbilds. Setup-Probleme nur kurz benennen. Keine nachgebaute historische rote/grüne Terminalausgabe oder lange Fehlerliste.

**Echte Code-/Git-Belege:**

- `analysis/scripts/analyze_reference_data.py`, Zeilen 61–68: direkte Konstantenerkennung vor der Mittelwertbildung.
- `analysis/tests/test_analyze_reference_data.py`, Zeilen 45–60: Integer- und `0.1`-Subtests für konstantes x/y.
- Commit `4a28809` enthält korrigierten Code und Tests. Der fehlgeschlagene Zwischenstand wurde nicht separat committed.
- Historischer Lauf im [Analysebericht](../../analysis/validation.md): zwei fehlgeschlagene Subtests, danach 19 Tests bestanden. Kein archivierter Screenshot dieses Laufs vorhanden.
- [Kapazitäts-/Compaction-Bild](../assets/screenshots/Limitation%2C%20model%20is%20at%20capasity.png) in Chat 4 geöffnet; [Setup-/Websitekorrekturen](../../ai-workflow/validation-log.md), V-003 bis V-005.

**Sprechnotiz auf Englisch:**

> The first Python test run passed, but review exposed an edge case. Constant decimal values produced a correlation of zero even though correlation is undefined for a constant series. Two added decimal subtests failed before the correction. A direct equality check fixed the issue, and all nineteen tests then passed. The real country results stayed unchanged. Setup problems and model capacity also interrupted the workflow. These are documented events. We did not empirically test every failure mode from the lectures.

**Optional nur mündlich:** Nutzer berichtet gelegentlich ungefähr zehn Minuten pro größerer Aufgabe und einmal ungefähr eine Stunde bis zum Kontingentreset. Wartezeit nicht immer produktiv genutzt; Codex erledigte nach Nutzereinschätzung oft mehr als er selbst in derselben Zeit. Keine Zeitmessung oder Produktivitätsrate behaupten. [Limitbild](../assets/screenshots/Limitation%2C%20Kontingent%20ausgelaufen%2C%201h%20keine%20Codex%20Nutzung.png) zeigt Meldung/Reset-Zeit; keine universelle aktuelle Pro-Regel daraus ableiten.

**Lecture-Bezug:** M3 reasoning brittleness und Validierung (47); M8 Harness/limits (9–12), monitoring/verification debt (14–16). Nummern aus Nutzerkontext, keine lokale PDF-Prüfung.

## Slide B: Remaining Risks: Human Oversight and AI Dependence

**Aussage:** Die Kontrollen machen Ergebnisse prüfbarer; menschliches Urteil und technische Abhängigkeiten bleiben bestehen.

**Möglicher Folientext:**

- Limited Python and TypeScript expertise leaves cognitive surrender as a risk.
- AI wrote implementation and tests. Known solutions and library comparisons reduce verification debt, while gaps remain.
- Four scoped chats and Git checkpoints support context recovery. New chats do not reset usage allowances.
- Agent permissions and prompt injection remain risks. We did not fully audit technical hard constraints.

Kleine Quellen-/Grenzenzeile: `Public World Bank data. Descriptive results. Live data can change. Accessibility, device and failure-path checks remain incomplete.`

**Visual:** Kurzer echter Git-Verlauf mit `4a28809`, `29b974f`, `b74f4c3`, `d1be8bc` und daneben ein Ausschnitt der offenen manuellen [6.3-Checkliste](../../website/tests/step-6-3-validation.md). Diese zeigen geprüfte Checkpoints und ausstehende Prüfung. Neues Bildmaterial erst beim späteren Deckschritt aufnehmen; hier keine Screenshot-Erstellung.

**Sprechnotiz auf Englisch:**

> I remain responsible for the question, source checks, variable definitions and interpretation. My Python and TypeScript knowledge is limited, so I cannot independently audit or repair arbitrary complex generated code. Known solutions and separate library checks help, but AI-generated tests can share the implementation's assumptions. Four scoped chats and Git checkpoints help recover project context. Availability and usage allowances still affect the work. We have no complete accessibility, device or security audit, and the statistical relationships remain descriptive.

**Lecture-Bezug:** M3 25–27/33–36 (Kontext), 40–42/47 (cognitive surrender, independent judgment); Lab 3 4.2 (eigene Verantwortung); M8 9–12/14–20 (Harness, Gates, Prüfaufwand, harte Grenzen). Prompt injection und Sycophancy nicht als beobachtete Projektfehler darstellen.

## Auswahl und Abgrenzung

A und B sind die zwei möglichen Step-7-Folien. Die allgemeine Lessons-Learned-Folie soll deren Inhalt nicht wiederholen. Der separate frühe Ordnerstruktur-Einschub bleibt im Workflow-/Git-Teil. Höchstens drei Folien erklären hauptsächlich das Projekt; endgültige Gesamtzahl offen. Kein finales Deck oder Schritt 8 in diesem Auftrag.
