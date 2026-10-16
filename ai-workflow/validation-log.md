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
