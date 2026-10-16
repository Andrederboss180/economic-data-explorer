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
