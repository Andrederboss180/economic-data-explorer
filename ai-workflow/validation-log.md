# Validierungslog

Hier sammeln wir tatsächliche Prüfungen und Fehler. Einträge werden erst als „Fehlerfall“ bezeichnet, wenn ein konkretes Problem beobachtet wurde.

## V-001: Übernahme des Ausgangschats

- **Datum:** 14.10.2026
- **Geprüft:** Welche Aussagen bereits entschieden und welche nur vorgeschlagen waren
**Methode:** Gesamten eingefügten Chat lesen, spätere Entscheidungen gegenüber früheren Vorschlägen priorisieren

**Ergebnis:**

- Bestätigt: Economic Data Explorer, finale Research Question, drei Länder, Zeitraum, Indikatoren, Live-API ohne Datenbank
- Vorläufig: React/TypeScript plus Python
- Offen: konkrete Literatur, reale Datenwerte, Chart-Bibliothek, Hosting, Präsentationsformat

**Korrektur:** Frühere Aussage „Website zeigt nur einen gespeicherten Datenstand“ wurde durch die spätere Entscheidung ersetzt: Live-API für die Website plus versionierter Referenzdatensatz.

## V-002: Source Matrix gegen Originaltexte

- **Datum:** 2026-10-14
- **Modell:** GPT-6, medium thinking effort
- **AI-Ausgabe oder Änderung:** Source Matrix zu drei Phillips-Kurven-Papers
- **Risiko:** Erfundenes Paper, falsch zugeordnete Aussage, übergeneralisierte Methode oder scheinbar quellenbasierte Cross-paper-Synthese
- **Prüfmethode:** (1) AI-gestützter Abgleich jeder faktischen Zelle mit den genannten PDF-Seiten und bibliografischer Abgleich über DOI oder offizielle Institution; (2) unabhängige menschliche Prüfung der drei zentralen Ergebnisse auf den Original-PDF-Seiten 4, 20 und 3 sowie menschliche Einordnung der drei Relationszellen
- **Beobachtung:** Der AI-assisted source check fand direkte Quellenstützung für 12 faktische Zellen, 3 analytische Cross-paper comparisons und 0 erkannte Fabrikationen. Der menschliche Minimalcheck bestätigte alle 3 zentralen Ergebnisse und bewertete alle 3 Vergleiche als angemessene Interpretationen, nicht als direkte Paper-Befunde.
- **Korrektur:** 0 faktische Zellen im AI-gestützten Audit. Faber & Züllig wird ausdrücklich als SNB-Working-Paper-Version 2025 geführt, nicht als Journalartikel 2026.
- **Ergebnis nach Prüfung:** Schritt 2 ist für den vereinbarten Minimalumfang abgeschlossen. Es erfolgte keine vollständige unabhängige Zell-für-Zell-Prüfung der gesamten Matrix; insbesondere Forschungsfrage, Daten und Methode bleiben auf der Ebene des AI-gestützten Quellenchecks.
- **Commit oder Nachweis:** `research/literature/exercise-2.3-validation.md`

## V-003: World-Bank-Abruf und Referenzdatensatz

- **Datum:** 2026-10-16
- **AI-Ausgabe oder Änderung:** Standardbibliothek-Skript für sechs World-Bank-Reihen, Rohsnapshot, Provenienz und kombinierte CSV
- **Risiko:** falsches Land oder falscher Indikator, unvollständige Jahre, Duplikate, still ersetzte Nullwerte, Rundungsverlust oder erfundene Daten
- **Prüfmethode:** Live-Abruf aller sechs URLs; programmgesteuerte Struktur- und Inhaltsvalidierung; sechs `unittest`-Fälle; separate CSV-Kontrolle auf Zeilen, Duplikate und leere Werte; Abgleich der deutschen Inflationswerte 2020 bis 2024 mit dem manuellen Terminalexperiment
- **Beobachtung:** 6 von 6 HTTP-Antworten bestanden. Jede enthielt 25 Jahre und `lastupdated: 2026-10-08`. Die CSV enthält 75 eindeutige Land-Jahr-Zeilen. Es wurden 0 Nullwerte, 0 fehlende Jahre und 0 Duplikate gefunden. Die fünf manuell beobachteten Inflationswerte stimmen exakt überein.
- **Korrektur:** Vor dem Lauf war kein nutzbarer Python-Interpreter vorhanden; `python.exe` zeigte nur auf den Windows-Store-Platzhalter. Python 3.13.15 wurde deshalb im Benutzerkontext installiert. Ein zusätzlicher `py_compile`-Versuch konnte im eingeschränkten Prozess keinen Cache-Ordner anlegen; Import und sechs Tests liefen erfolgreich mit deaktiviertem Bytecode-Cache.
- **Zusätzlicher Abschlusscheck:** Codex rief am `2026-10-16T13:01:16Z` Frankreichs Arbeitslosenindikator direkt über PowerShell ab. 2024: API `7.4`, CSV `7.4`, exakter Textvergleich `True`; `lastupdated: 2026-10-08`. Der erste Vergleichsversuch nutzte falsche CSV-Spaltennamen; nach Header-Prüfung bestand der Vergleich mit `country_code` und `unemployment_pct`. Ein eingeschränkter Netzwerkversuch scheiterte; der freigegebene Abruf gelang. Befehle und Ergebnis: `data/API.md`.
- **Ergebnis nach Prüfung:** Schritt 4 abgeschlossen nach Codex-Review, technischen Datenprüfungen und sechs bestandenen Unit-Tests. Der separate PowerShell-Client liefert einen zusätzlichen technischen Nachweis; es wird kein unabhängiger menschlicher Vollaudit behauptet.
- **Commit oder Nachweis:** `data/raw/world_bank_2000_2024_metadata.json`; Abschlusscommit `data: finalize validated World Bank API reference snapshot`

## V-004: Statistik mit bekannten Lösungen und Bibliotheksabgleich

- **Datum:** 2026-10-16
- **AI-Ausgabe:** Standardbibliothek-Analyse und 13 neue Tests; Modell `GPT-6.1 Sol, Medium` laut berichteter Nutzerauswahl, nicht unabhängig als Runtime-Metadatum verifiziert.
- **Risiko:** Variablen vertauscht, falsche Jahres-/Länderzuordnung, fehlende Werte als Null, scheinbar gültige undefinierte Kennzahl, ungeprüfte AI-Ergebniszahlen.
- **Prüfmethode:** Vier analytisch bekannte Mini-Beispiele, Randfälle, CSV-Validierung, getrennte CSV-Gruppierung mit `statistics.correlation`/`linear_regression`, alle sechs gespeicherten Ergebnisse gegen Neuberechnung. Bestehende sechs API-Tests mit ausgeführt.
- **Beobachtung und tatsächlicher Fehler:** Der erste 19-Test-Lauf bestand mit ganzzahligen Konstanten. Beim Code-Review lieferten konstante `0.1`-Reihen fälschlich `r=0.0` mit Status `ok`. Grund: Der Mittelwert kann auf `0.10000000000000002` runden; die Quadratsumme ist dann nicht exakt null. Zwei ergänzte Dezimal-Subtests schlugen vor der Korrektur fehl (`Ran 13 tests`, `FAILED (failures=2)`, `AssertionError: 0.0 is not None`).
- **Korrektur und erneute Prüfung:** Konstante Reihen vor der Mittelwertbildung direkt über `min(values) == max(values)` erkennen. Undefiniertes r bleibt leer; konstantes y behält beta=0 und den exakten konstanten Achsenabschnitt. Anschließend alle 19 Tests bestanden. Reale Ergebnisse unverändert: n=25 bzw. 20, keine Ausschlüsse; alle Koeffizienten stimmen mit der Bibliothek innerhalb rel./abs. 1e-12 überein. Das ist ein tatsächlicher Fehler mit nachgewiesener Korrektur.
- **Tatsächliche technische Hürde / Korrektur:** Der erste `git switch -c analysis/step-5-validation` konnte unter den Sandbox-Schreibrechten keine Branch-Referenz anlegen (`cannot lock ref`). Derselbe gezielte Branch-Befehl gelang mit freigegebenen erweiterten Rechten. Kein Commit und kein Push. Dies war eine Berechtigungshürde, kein Statistikfehler.
- **Ergebnis:** Technisch erneut geprüft; Abschluss vom Nutzer ausdrücklich beauftragt, kein unabhängiger menschlicher Code-Audit behauptet. `git diff --check` und Diff-Review als Abschlusskontrolle. Kein TypeScript-/Website-Vergleich vor Schritt 6.
- **Zusätzliche Abschlusskontrolle:** Die erste Prüfschleife für neue Dateien interpretierte Exitcode 1 von `git diff --no-index --check` fälschlich als Prozessfehler. Nach Korrektur der Exitcode-Auswertung (0/1 zulässig, keine Diagnoseausgabe) bestanden die Whitespace-Checks für alle fünf neuen Dateien. Relative Dateilinks in geänderten Markdown-Dateien lösen auf; `data/raw`, `data/reference` und `website` haben keinen Diff. Dies betraf nur die Prüfschleife, nicht Statistik oder Daten.
- **Erneuter Finalisierungscheck:** 19 Tests erneut bestanden; reproduzierte CSV byte-identisch; alle sechs Ergebniszeilen im Analysebericht stimmen einschließlich Achsenabschnitt mit der CSV überein. Die historischen Fehlerausgaben stammen aus dem tatsächlich beobachteten Chat-2-Lauf vor der Korrektur, nicht aus einem erfundenen oder in Git gespeicherten früheren Testlauf. Beim Abschluss scheiterte ein vorbereiteter Textänderungsbefehl an der Unicode-Übertragung über PowerShell-stdin, bevor er Dateien änderte; die gezielten Änderungen wurden anschließend mit `apply_patch` vorgenommen. AW-008 dokumentiert den autorisierten Abschluss.
- **Nachweise:** `analysis/validation.md`, `analysis/tests/test_analyze_reference_data.py`, `data/results/analysis_results.csv`; Basiscommit `952b6d4`; Abschlusscommit `analysis: finalize validated reference statistics` (Git-Historie, AW-008).

## V-005: Website 6.1 – tatsächliche Setup- und Prüfkorrekturen

- **Datum:** 2026-10-16
- **AI-Ausgabe:** React/TypeScript/Vite-Grundlage, Live-World-Bank-Client, Tabelle und Verhaltenstests.
- **Risiko:** inkompatible Tools, falsch verbundene Jahre, versteckte fehlende Werte, zusätzliche Requests oder verspätete Länderantworten.
- **Tatsächliche Fehler/Korrekturen:** Die erste Installation scheiterte an TypeScript 7.0.2, weil `typescript-eslint` nur `<6.1.0` unterstützte. Auf TypeScript 6.0.3 gewechselt, kein `--force`. Erster Offline-Lauf: 29 bestanden, 3 fehlgeschlagen, weil Vites dynamische Testdatei-URL-Transformation zu `website/tests/undefined` führte; `node:path.resolve` korrigiert die Testpfade. Typecheck fand zusätzlich die gemischte Testfalllisten-Inferenz und anschließend readonly-/mutable-Tupelkonflikt; explizite readonly-Tupel korrigiert. ESLint fand zwei geworfene Folgefehler ohne `cause`; Originalursachen werden nun erhalten. Ein gebündelter Dokumentationspatch wurde wegen doppelter Zieloperation (Delete/Add derselben Datei) vor Änderungen zurückgewiesen; als getrennte Updates/Add umgesetzt. Keine wirtschaftlichen Daten mussten korrigiert werden.
- **Umgebungshürden:** Branch-Anlage zunächst wegen `.git`-Schreibrechten abgelehnt, gezielter freigegebener Branch-Befehl erfolgreich. npm-Netzzugriff im eingeschränkten Prozess nicht erfolgreich, freigegebene Registry-/Installationsaufrufe erfolgreich. Ein optionaler Prozessinventaraufruf war nicht erlaubt; er wurde nicht für die Implementierung benötigt. Die erste neue-Dateien-Prüfschleife behandelte eine Git-LF/CRLF-Warnung als Fehler; die Prüfung wurde mit ausschließlich pro Aufruf deaktivierter SafeCRLF-Warnung wiederholt, ohne Dateien oder globale Git-Konfiguration zu ändern. Browserinventar leer, `Browser is not available: iab`; echte visuelle/Desktop-/Mobilprüfung bleibt offen. Keine dieser Hürden wird als wirtschaftlicher oder statistischer Fehler ausgegeben.
- **Prüfergebnis nach Korrektur:** 32 Offline-Website-Tests, 1 Online-Test, 19 bestehende Python-Tests, Lint/Typecheck/Build bestanden. 150 eingefrorene Zahlen aus Roh-JSON gegen CSV geprüft; 18 echte Live-Zahlen aus sechs API-Reihen gegen unveränderte CSV geprüft. Alle sechs Reihen vollständig, alle Source-Updates `2026-10-08`. Lokaler HTTP-200-Check und ein API-Origin-/CORS-Header-Check bestanden; kein echter Browserlauf behauptet. Diff-/Whitespace-Kontrolle einschließlich ungetrackter Dateien ohne Staging.
- **Nachweise / Grenze:** [Website-Validierung mit tatsächlichen Werten und offenen Checks](../website/tests/step-6-1-validation.md), AW-009, Prompt 05. Technische AI-Prüfung, kein unabhängiger menschlicher Audit. Branch `web/step-6-1-foundation`, Basis `4a28809`; kein Commit oder Push, Review ausstehend.

## V-006: Finalisierung 6.1 – technische Wiederholung und menschliche Browserchecks

- **Datum:** 2026-10-16
- **Prüfung:** Erneut 32 Website-Tests, 1 Live-Test, 19 Python-Tests, Lint/Typecheck/Build bestanden. Vollständiger Diff inklusive neuer Dateien und Whitespace geprüft; keine blockierenden Codeprobleme oder Scope-Verletzungen gefunden, keine Codekorrektur erforderlich. Referenzdaten/Statistik unverändert.
- **Menschliche Evidenz:** Nutzer berichtet sechs persönlich bestandene Browserchecks (Laden, drei Länder, Tabellenwechsel, Deutschland-Inflation 2024 ungefähr 2.26 %, Frankreich-Arbeitslosigkeit 2024 gleich 7.4 %, schmales Fenster). Dies ergänzt die historische Automatisierungsgrenze aus V-005; es wird kein nachträglicher Codex-Browserlauf erfunden. Keine Screenshots vorhanden oder erzeugt.
- **Grenzen:** Keine menschliche Netzwerkpanel-/Offline-/Tastaturprüfung oder physische Mobilgeräteprüfung berichtet; Fehler/Retry/Cache automatisiert geprüft. Kein vollständiger menschlicher Code-Audit.
- **Ergebnis / Nachweis:** 6.1 abgeschlossen; Git-Finalisierung ausdrücklich autorisiert (AW-010), [vollständiger Prüfbericht](../website/tests/step-6-1-validation.md). 6.2 bleibt nächster, nicht begonnener Auftrag.
- **Korrektur der Abschluss-Prüfschleife:** Ein pauschaler Bytevergleich aller bestehenden Dateien meldete die bereits ausgecheckte JSON-Provenienz wegen Windows-Zeilenenden als abweichend. Vergleich mit `git hash-object` gegen den Baseline-Blob bestätigte unveränderte versionierte Inhalte für alle Daten-/Analyse-/Forschungsdateien; Referenz- und Ergebnis-CSV sind zusätzlich byte-identisch. Keine Datei wurde dafür verändert.

## V-007: Website 6.2 – Gegenprüfung und unverfälschte Testevidenz

- **Datum:** 2026-10-16
- **Prüfung:** Pearson/OLS-Definition gegen bestehendes Python geprüft, vier bekannte synthetische Lösungen und alle sechs eingefrorenen Länder-Zeitraum-Ergebnisse getestet. Koeffizienten innerhalb Toleranz `1e-12 * max(1, |Python|)`; n/Ausschlüsse exakt. Direkte Konstantenerkennung für Integer und `0.1`, zu wenige/fehlende Werte, Floating-Point-Offsets, numerischer Überlauf und ungültige Inputs abgedeckt.
- **Tatsächlicher Verlauf:** Erster neuer Testlauf: 64 Tests bestanden. Kein neuer fehlgeschlagener Testlauf beobachtet oder behauptet. Review vor diesem Lauf korrigierte den gespeicherten x-Mittelwert im Sonderfall konstanter Inflation (anfangs erster x-Wert); die horizontale Regression war davon unverändert. Der historische `0.1`-Fehler wird durch direkte Gleichheitsprüfung vermieden, nicht nachträglich neu inszeniert. Ein weiterer Länderwechseltest wurde zur gezielten Absicherung ergänzt.
- **Ergebnis/Grenzen:** Abschließend 65 Website-Tests, Lint/Typecheck/Build und 19 Python-Tests bestanden. SVG-/UI-Ereignisse, Liniengrenzen, Zählungen, Filter- und Cacheverhalten automatisiert geprüft. Browserinventar leer, kein echter 6.2-Browser-/Layoutlauf oder Screenshot. Kein menschlicher Review für 6.2 behauptet; die 6.1-Nutzerprüfungen bleiben getrennt.
- **Nachweis:** [6.2-Bericht mit Zahlen, Befehlen und offener Checkliste](../website/tests/step-6-2-validation.md), AW-011/D-009. Basis `29b974f`, `web/step-6-2-visualization`; uncommitted zur Prüfung. Keine Referenz-/Pythonänderung, keine neuen Pakete, kein Ländervergleich oder spätere Phasen.

## V-008: Abschlussprüfung 6.2 und informeller Nutzercheck

- **Datum:** 2026-10-16
- **Tatsächliches Ergebnis:** 65 Website-Tests und 19 Python-Tests erneut bestanden, ebenso Lint/TypeScript/Build. Alle sechs eingefrorenen Gruppen stimmen mit der Python-Referenz innerhalb Toleranz überein. Code-/Diff-Review ohne blockierendes Problem; keine Funktionsänderung oder neuer Fehlerfall nötig. Whitespace, neue Dateien, unveränderte Daten/Analyse/API und ausgeschlossene Build-/Dependency-/Env-Dateien kontrolliert.
- **Menschliche Evidenz:** Nutzer berichtet persönlichen echten Browserbesuch mit Interaktion; Erscheinungsbild und Funktionalität sehen gut aus. Erfolgreicher informeller Check, keine unabhängige Bestätigung der gesamten Checkliste, Keyboard-Barrierefreiheit, Network-Tab-Requestzählung oder physischer Geräte. Kein Screenshot erfunden. Das ergänzt die historische fehlende menschliche Prüfung aus AW-011/V-007; kein eigener Codex-Browserlauf behauptet.
- **Nachweis / Freigabe:** [6.2-Bericht](../website/tests/step-6-2-validation.md), AW-012; Commit, sichere Integration und normaler Push ausdrücklich beauftragt. 6.2 abgeschlossen; 6.3 bleibt nächster, nicht begonnener Schritt.
- **Prüfskript-Korrektur:** Der Ignore-Check prüfte den nicht vorhandenen Ordner `website/coverage` zunächst wie einen Dateipfad. Prüfung eines Pfades darunter bestätigte die bestehende Directory-Ignore-Regel; keine `.gitignore`- oder Produktänderung nötig.

## V-009: Vergleich 6.3 – sechs Gruppen, Teilfehler und gemeinsame Zustände

- **Datum:** 2026-10-16
- **Tatsächliches Ergebnis:** Erster Implementierungslauf und abschließender Lauf mit 71 Website-Tests bestanden, ebenso Lint/TypeScript/Build und 19 Python-Tests. Sechs eingefrorene Gruppen durch API-Parser/Statistik gegen Python und gerundete Tabellenanzeige geprüft. Keine Produkt- oder Statistikfehler im Testlauf beobachtet; keine künstliche Fehlergeschichte.
- **Review-Korrekturen:** Die simulierte Teilfehler-Fixture beendet nach Review beide wartenden Indikatorpromises statt nur eines; kein offener Testrequest nötig. Alte Einzeltabellen-Tests wurden vor dem Lauf auf Caption-/Bereichsauswahl und sechs initiale Requests angepasst. Kein aufgegebener Abnahmepunkt: keine zusätzlichen Filterrequests, richtige Zahlen, keine alten Charts bei Fehler, Request-/Retrykontrolle bleiben geprüft. App-Testdatei auf LF vereinheitlicht; reine Zeilenendenkorrektur.
- **Kontrolle:** Erfolgreiche Zeilen bleiben bei langsamem/fehlerhaftem anderem Land sichtbar; Retry betrifft nur das Land und aktualisiert auch die Einzelansicht. Fehlende Werte/Metadaten erklärt statt erfunden. Separater Live-Test am `2026-10-16T15:06:34Z` bestanden, Source-Updates `2026-10-08`, 18 echte Werte stimmen mit Snapshot überein.
- **Grenze / Nachweis:** Browserinventar leer, kein echter 6.3-Browser-/Geräte-/Accessibilitycheck oder Screenshot behauptet. [6.3-Bericht und offene Checkliste](../website/tests/step-6-3-validation.md), AW-013/D-010. Technisch geprüft, menschlicher Review offen; kein Commit/Merge/Push, keine Schritte 7/8.

## V-010: Finaler Website-Review und dokumentierter Nutzercheck

- **Datum:** 2026-10-16
- **Tatsächliches Ergebnis:** 71 Website-Tests und 19 Python-Tests erneut bestanden, ESLint/TypeScript/Build erfolgreich. Alle sechs Referenzgruppen innerhalb dokumentierter Toleranz, n exakt; bestehende Visualisierung/Jahrestabelle, lokale Filter, Landesmarkierung, Cache, Teilfehler und Retry durch Tests abgedeckt. Separater Live-Check `2026-10-16T15:23:29Z` bestanden: alle sechs Reihen und 18 Snapshot-Stichproben. Kein blockierender Produktfehler festgestellt.
- **Menschlicher Nachweis:** Erfolgreicher informeller Browser-/Visualreview nutzerberichtet. Fünf Website-Screenshots bei Wiederaufnahme am 17.10. lokal vorhanden und von Codex als statische Bildevidenz angesehen/verlinkt; kein eigener Browserlauf. Weitere vom Nutzer ergänzte Workflow-/Websitebilder unverändert erhalten. Keine umfassende Tastatur-/Geräte-/Endpoint-Retryprüfung oder vollständige manuelle Detailabnahme behauptet. Alte fehlende Nutzerfreigabe aus V-009 bleibt historische Evidenz.
- **Unterbrechung:** Staging am 16.10. nicht ausgeführt, weil automatischer Approval-Review wegen Nutzungslimit ausfiel; kein Urteil, dass die Aktion unsicher sei. Keine Umgehung. Am 17.10. auf ausdrücklichen Nutzerauftrag fortgesetzt; Fetch bestätigt weiterhin synchrones main. Erneut 71 Website-Tests, 19 Python-Tests, ESLint, TypeScript und Build bestanden. Technisch geprüfter Code/Tests unverändert, neue Dokumentation und Bilder erneut geprüft.
- **Tatsächlicher Fehler / Korrektur:** Ein PowerShell-Pipe-Dokumentationsskript übertrug Nicht-ASCII-Zeichen als Fragezeichen und stoppte an einer Suchtext-Assertion. Nur Status-/AI-README-Text betroffen; mit Unicode-fähigem `apply_patch` korrigiert, weitere Texte direkt damit bearbeitet und vollständigen Diff/UTF-8 erneut geprüft. Keine Änderung von Daten, Statistik oder Produktcode nötig.
- **Scope / Git:** Alle geänderten/neuen Dateien, Whitespace, Links, ausgeschlossene Build-/Dependency-/Env-Dateien und unveränderte Daten/Analyse/API/Pakete kontrolliert. AW-014 autorisiert staged Review, Commit und sichere Integration/Push; tatsächliche Git-Nachweise im Verlauf/Abschlussbericht. Schritt 6 abgeschlossen; Schritte 7/8 nicht begonnen.

## V-011: Schritt-7-Dokumentationsaudit und Evidenzgrenzen

- **Datum:** 17.10.2026
- **Prüfmethode:** Historische Logs/Prüfberichte gegen vorhandene Code-/Testausschnitte, Promptablage und Git-Phasenstände abgeglichen; drei vorhandene Kapazitäts-/Limitbilder geöffnet. Nutzerangaben getrennt aufgenommen. Lecture-Foliennummern als Nutzerkontext gekennzeichnet, lokale PDFs nicht gelesen. Keine alten Fehler neu inszeniert, keine Produkt-/Statistiktests oder Live-Abrufe wiederholt.
- **Ergebnis des Audits:** `0.1`-Fehler, Python-Setup und Website-Tooling-Korrekturen protokolliert; Kapazität/Compaction und Kontingentmeldungen bildlich belegt. Kein nachgewiesener OneDrive-Datenverlust/Ownership-Fehler, kein Injection-/Sycophancy-/Kontextvergleichstest. Fehlender historischer Fehlercommit/Test-Screenshot ausdrücklich genannt. Zeit-, Pro- und Expertiseangaben bleiben Nutzerberichte. Heutige offizielle Pro-Limitbeschreibung von historischen UI-Bildern getrennt.
- **Tatsächlicher Fehler in Chat 4 / Korrektur:** Erster gebündelter `apply_patch`-Aufruf scheiterte vor jeder Änderung, weil `risk-register.md` zugleich als Delete und Add vorkam (`multiple operations target`). Danach als Update der bestehenden Datei und separate neue Dateien angewendet. Eine abschließende Mehrfachabfrage mit `git rev-parse --short` scheiterte (`Needed a single revision`); je Revision separat abgefragt. Beide Probleme betrafen Werkzeuge, keine Produktdaten. Beim Kontextabgleich außerdem veraltetes offenes Website-Häkchen im Haupt-README und Chat-3-Status in Context-Management-Sprechnotiz anhand `d1be8bc` korrigiert; historische Logs unverändert.
- **Abschlussprüfung:** Vollständigen Diff aller 16 geänderten Dateien und Inhalt beider neuen Markdown-Dateien gelesen. Einmalige Standardbibliothek-Prüfung aller 18 Markdown-Dateien bestanden: 116 lokale Links/Anker auflösbar; UTF-8, abschließender Zeilenumbruch, keine nachgestellten Leerzeichen/Tabs, geschlossene Codeblöcke, Überschriftenabstände/-hierarchie und konsistente Tabellenspalten. `git diff --check` ohne Befund. Scope-Diff für Website, Analyse, Daten, Forschung, Bildassets und `AGENTS.md` leer; Index leer. `main` und lokales `origin/main` unverändert bei `d1be8bc` (`0 0`); kein neuer Remote-Fetch behauptet. Kein Markdown-Linter-Paket installiert oder Produkttest wiederholt.
- **Nachweis / Grenze:** AW-015, [Risikoregister und Lecture-Matrix](risk-register.md), [Foliennotizen](../presentation/slides/07-risks-failures-limitations.md). Nur technische Dokumentationsprüfung; menschlicher Inhaltsreview offen, kein Commit/Schritt 8.

## V-012: Finaler Step-7-Review und Dokumentationsabschluss

- **Datum:** 17.10.2026
- **Prüfumfang:** Gesamte Step-7-Dokumentation einschließlich Prompt 08 und A/B-Notizen. A/B/C-Trennung, technische Unterbrechungen gegenüber Nutzererfahrung, Daten-/Methodengrenzen gegenüber persönlichen und LLM-/Agentenrisiken, M3/M8/Lab-3-Matrix und konkrete Evidenzpfade erneut geprüft. `0.1`-Fix und Regressionstests gegen Code und V-004 abgeglichen; konstantes y behält horizontale Regression, r bleibt undefiniert. Kein roter Zwischencommit oder historischer Fehler-Screenshot erfunden.
- **Bestätigungen:** Ordnerstruktur-Folie separat früh im Workflow-Teil vorgesehen; vier Chats/Übergaben in Context-Management-Notiz vorhanden; Englisch ohne Tokenvorteilsbehauptung, Zeit-/Kontingentangaben nutzerberichtet. Einzelne technische Sperren belegen keine umfassende Sandbox-Sicherheit; keine Prompt-injection-Abwehr getestet. Kein zusätzlicher fachlicher Fehler gefunden, nur laufende Statusangaben nach Abschlussauftrag aktualisiert. Frühere AW-015/V-011-Aussagen bleiben historische Erstübergabe.
- **Abschlusschecks:** Erneute Standardbibliothek-Prüfung bestanden: 18 Markdown-Dateien, 116 lokale Links/Anker; UTF-8, abschließender Zeilenumbruch, Whitespace, Codeblöcke, Überschriftenabstände/-hierarchie und Tabellenspalten geprüft. Arbeits- und staged `git diff --check` ohne Befund. Vollständiger Inhalts-/Diff-Review einschließlich beider neuer Dateien sowie des gesamten staged Diffs; ausschließlich Dokumentation. Scope-Diff für Website, Analyse, Daten, Forschung, Bildassets und `AGENTS.md` leer. Tatsächlicher Git-Abschluss im Abschlussbericht. Keine neuen Dependencies oder Produkt-/Statistiktests für den Dokumentationsabschluss.
- **Abschluss / Nachweis:** AW-016 und Prompt-08-Folgeauftrag autorisieren Commit auf `docs/step-7-risk-audit`, sichere Fast-forward-Integration und normalen Push. Schritt 7 abgeschlossen; Schritt 8 bleibt als Nächstes nicht begonnen. Kein vollständiger unabhängiger menschlicher Audit behauptet; kein finales Deck.

## V-013: Chat 5 / Schritt 8.1 – Inhaltspläne und Evidenzgrenzen

- **Datum:** 17.10.2026.
- **Prüfgegenstand:** 15 neue substantielle Inhaltspläne, Navigation/Zeitbudget, aktuelle Outline/Checkliste und Status-/AI-Dokumentation. Baseline `389564b`, Produktabschluss `d1be8bc`.
- **Methode:** Vorhandene Quellen-/API-/Analyse-/Websiteberichte, frühere Foliennotizen, tatsächliche Dateien und Git abgeglichen. Pflichtfelder/Titel/Nummern, lokale Markdown-Links, UTF-8, Whitespace/Codeblöcke/Tabellen und Zeitbudget technisch geprüft. Datenzahlen und sechs statistische Ergebniszeilen separat nur lesend kontrolliert; historische Produkttests nicht wiederholt. Alle veränderten/neuen Inhalte und Scope-Diff geprüft.
- **Tatsächliche technische Hürde:** Erste Anlage von `slides/step-8-1-blueprints` konnte unter eingeschränkten `.git`-Schreibrechten keine Referenz anlegen. Derselbe gezielt freigegebene Befehl gelang. Kein Produktfehler, keine erfundene Testfehlerserie.
- **Korrekturen der Prüfschleifen:** Der erste Dokumentationscheck verlangte pauschal mindestens 20 Zeichen pro Abschnitt und meldete die gültige kurze Zeitangabe „50 seconds.“ als leeres Feld. Die Längenregel wurde auf die inhaltlichen Abschnitte begrenzt; Zeitangaben werden separat als Sekundenwert geprüft. Eine weitere historische Präfixprüfung übergab einen Umlaut im Suchmarker über PowerShell-stdin nicht korrekt und meldete deshalb alte Logeinträge fälschlich als verändert. Der ASCII-Marker `## Vorlage` bestätigte die unveränderten historischen Einträge. Keine Inhaltskorrektur oder Produktänderung für diese beiden Prüfprobleme nötig. Die korrigierten Läufe bestanden.
- **Dokumentationsbefunde und Umgang:** Ursprünglicher Vier-Chat-Plan um tatsächlichen Chat 5 ergänzt, ohne alte Einträge oder Foliennotizen umzuschreiben. Alte Outline/Checkliste explizit als historisch gekennzeichnet; aktuelle 15er-Navigation davor ergänzt. `data/API.md` nennt noch den alten API-Bildnamen; neue Pläne verweisen auf tatsächlich vorhandenes `Erste API request.png`, Rename durch AW-014 belegt. Datendokumentation bleibt im autorisierten Scope unverändert. Präzise Lecture-Zahlen bleiben ungeprüfter Nutzerkontext; finale Quellenprüfung offen.
- **Inhaltliche Kontrolle:** n=20/25, sechs Gruppen, 75 Paare/150 Einzelbeobachtungen und Datenstand getrennt; 2000–2019-Screenshots nicht als 2000–2024 verwendet. 71 Website-/19 Python-Tests ausdrücklich historisch. Codex-Prüfungen nicht als persönliche Nutzerhandlungen; keine volle Codeprüfung, Zeit-/Tokenmessung, M6-Studie, Pull Requests oder historische Fehleraufnahme erfunden. `0.1`-Fehler bleibt mit Fix/Testcode und protokolliertem Lauf belegt.
- **Ergebnis:** 15 vollständige Pläne zur menschlichen Inhaltsreview. 850 Sekunden = 14:10, 50 Sekunden Puffer bis 15:00; Planwerte, keine Rehearsal-Messung. Korrigierter technischer Lauf bestanden: 26 neue/geänderte Markdown-Dateien, 310 lokale Links/Anker, konsistente Titel/Nummern/elf Inhaltsabschnitte, UTF-8/Zeilenende/Whitespace/Codeblöcke/Überschriften/Tabellen. 17 neue Dateien über `git diff --no-index --check` ohne Staging geprüft. Alle zitierten Projektcommits vorhanden. 75 CSV-Paare/150 Rohbeobachtungen und sechs gespeicherte Ergebniszeilen mit separater `statistics`-Rechnung innerhalb rel./abs. 1e-12 nur lesend bestätigt. Abschließender Scope- und Git-Diff-Check im Chat-5-Bericht. Keine finalen Slides, keine neuen Bildassets, kein Canva/PPTX/PDF. Änderungen uncommitted, Index leer.
- **Nachweise:** [Slide plans](../presentation/slide-plans/README.md), [Prompt 09](prompts/09-slide-blueprints.md), AW-017. Alte Logeinträge, Produktcode/-daten/-tests und ursprüngliche Foliennotizen unverändert. Menschliches Verständnis, finale Lecture-/Quellenstellen und Canva-Lesbarkeit werden erst im Einzelreview geprüft.

## Vorlage

### V-XXX: Titel

- **Datum:**
- **AI-Ausgabe oder Änderung:**
- **Risiko:**
- **Prüfmethode:**
- **Beobachtung:**
- **Korrektur:**
- **Ergebnis nach Prüfung:**
- **Commit oder Nachweis:**
