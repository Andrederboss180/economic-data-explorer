# Codex Chat 4: Step 7 documentation and evidence audit

- Datum: 17.10.2026
- Werkzeug: Codex, Shell/Git, lokale Datei-/Bildansicht und offizielle OpenAI-Dokumentation. Keine zusätzlich unabhängig verifizierte Modell-/Effort-Angabe.
- Basis: sauberer `main` mit lokalem `origin/main` bei `d1be8bc`; Arbeitsbranch `docs/step-7-risk-audit`.
- Ergebnis bei Erstübergabe: [Risikoregister und Lecture-Matrix](../risk-register.md), [zwei mögliche Folien](../../presentation/slides/07-risks-failures-limitations.md), AW-015/V-011. Damals menschlicher Review offen, kein Commit; Folgeauftrag zur Finalisierung unten.

## Tatsächlich verwendeter Prompt: wörtlicher Auszug

```text
This task is documentation and evidence auditing only.

- Do not change working website or analysis code.
- Do not perform additional econometric research.
- Do not create new, unnecessary experiments.
- Do not fabricate results, measurements or screenshots.
- Preserve the established project organization.
- Avoid excessive documentation duplication.
- Review the complete Git diff.
- Run relevant Markdown and whitespace checks.

Keep Step 7 uncommitted and ready for human review.
```

## Weitere Vorgaben desselben Auftrags, zusammengefasst

Kontext anhand README, Status, Roadmap, Workflow, Logs, Präsentationsnotizen und Git rekonstruieren. Vier-Chat-Strategie erhalten. Schritte 1–6 abgeschlossen; nur Schritt 7 bearbeiten. Tatsächliche Fehler/Betriebsprobleme, aktiv geminderte Risiken und verbleibende Grenzen trennen. Mit M3, Lab 3 und M8 anhand nutzerbereitgestellter Folien-/Übungsnummern verbinden; keine ungelesenen lokalen PDFs als geprüft ausgeben.

Floating-Point-Fehler, Python-Setup, Website-Abhängigkeiten/Testpfade, Kapazitäts-/Compaction-Probleme sowie gegebenenfalls belegte Git-/OneDrive-/Ownership-Probleme prüfen. Originalquellenprüfung, feste Testdaten, unabhängige Rechenwege, manuelle API-Stichproben, kurze Aufgaben und Git-Checkpoints als Kontrollen bewerten, ohne Risikofreiheit zu behaupten.

Nutzerberichte getrennt dokumentieren: größere Aufgaben manchmal ungefähr zehn Minuten; Wartezeit nicht immer produktiv genutzt, obwohl der Agent oft mehr erledigte als der Nutzer selbst in derselben Zeit. Einmal Codex-Kontingent trotz ChatGPT Pro erschöpft und ungefähr eine Stunde bis zum Reset gewartet. Begrenzte persönliche Python-/TypeScript-Kenntnisse verhindern Audit/Reparatur beliebig komplexen generierten Codes.

Englische Codex-Aufträge als Kommunikationswahl festhalten; keinen notwendigen Tokenvorteil gegenüber Deutsch behaupten. Kein kontrollierter Sprach-/Tokenvergleich durchgeführt. Neue Chats begrenzen Kontext, setzen aber Fünf-Stunden-/Wochenkontingente nicht zurück. Aktuelle Produktregeln von historischen Bildern/Nutzerberichten unterscheiden.

Lecture-Matrix mit sechs geforderten Spalten erstellen. Zwei mögliche englische Risikofolien vorbereiten. Separaten frühen Ordnerstruktur-Einschub in Deck-Outline/Checkliste festhalten, ohne Folie zu erstellen. Evidenz, Kategorien, Lecture-Bezug, Dateien, Unsicherheiten und Git-Status berichten. Vor Commit und Schritt 8 stoppen.

## Folgeauftrag: Finalize Step 7 – Risks, Failures & Limitations

Der Nutzer beauftragt am 17.10.2026 ausdrücklich den finalen Review aller Änderungen einschließlich beider neuen Dateien. Evidenzarten, Nutzerberichte, korrekten `0.1`-Fehler, M3-/M8-Bezüge, Ordnerstruktur-Folie und vier Chats prüfen; nur bestätigte Dokumentationsfehler korrigieren. Markdown-Links/-Struktur, UTF-8 und Whitespace prüfen; keine Code-/Daten-/Dependencyänderungen. Danach vollständigen Stand stagen und prüfen, Schritt 7 abschließen, Schritt 8 als Nächstes markieren, auf `docs/step-7-risk-audit` mit `docs: finalize AI risks failures and limitations` committen, möglichst per Fast-forward nach `main` integrieren, normal pushen und Remote-Hash/sauberen Baum verifizieren. Vor Schritt 8/finalem Deck stoppen. Dies ersetzt das ursprüngliche Commit-Verbot für die geprüfte Step-7-Dokumentation, nicht die wissenschaftlichen Prüfgrenzen (AW-016/V-012).
