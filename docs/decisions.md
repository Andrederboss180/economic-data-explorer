# Entscheidungsprotokoll

## D-001: Economic Data Explorer als Thema

**Status:** beschlossen

**Entscheidung:** Der Economic Data Explorer ersetzt die Alternativen „AI vs. Mathematics“ und „AI Economic Fact Checker“.

**Begründung:** Öffentliche reale Daten, klarer Economics-Bezug, überschaubare Statistik, niedriger bis mittlerer Aufwand und eine verständliche Website-Demo.

**Konsequenz:** AI bleibt Werkzeug des Forschungsprozesses. Deshalb muss die Präsentation ihre Verwendung und Kontrolle besonders gut dokumentieren.

## D-002: Enger empirischer Umfang

**Status:** beschlossen

**Entscheidung:** Drei Länder, zwei Indikatoren, zwei Zeiträume und einfache lineare Methoden.

**Begründung:** Der Umfang reicht für eine überprüfbare Forschungsfrage und lässt Zeit für Dokumentation und Validierung.

## D-003: Live-API plus Referenzdatensatz

**Status:** beschlossen

**Entscheidung:** Die Website lädt World-Bank-Daten live. Zusätzlich liegt ein eingefrorener, versionierter Datensatz für Tests und Präsentation im Repository.

**Begründung:** Die Live-API demonstriert M5. Der Snapshot schützt die Reproduzierbarkeit, falls Daten später revidiert werden oder die API beim Vortrag nicht erreichbar ist.

**Konsequenz:** Ergebnisse auf Folien müssen das Abrufdatum und den verwendeten Datenstand nennen.

## D-004: Keine eigene Datenbank

**Status:** beschlossen

**Entscheidung:** Keine Datenbank oder serverseitige Persistenz.

**Begründung:** Der kleine öffentliche Datensatz benötigt keine eigene Datenhaltung. Eine Datenbank würde Aufwand erhöhen, ohne die Forschungsfrage zu verbessern.

## D-005: Keine laufende LLM-Abfrage in der Website

**Status:** beschlossen

**Entscheidung:** Die Website enthält keinen Chatbot und keine LLM-API.

**Begründung:** Der relevante AI-Einsatz liegt in Ideation, Recherche, Coding und Validierung. Dadurch vermeiden wir Kosten, Secrets und zusätzliche Fehlerquellen.

## D-006: Technischer Stack

**Status:** für Schritt 6.1 festgelegt am 16.10.2026

**Entscheidung:** React 19.3.1, TypeScript 6.0.3, Vite 8.3.4 und npm mit exakten Paketversionen/Lockfile für die Website; Python unverändert für Referenzabruf und unabhängige Validierung. Manuelles Minimalsetup im vorhandenen `website/`, damit bestehende Dokumentation erhalten bleibt. ESLint und Vitest/jsdom/React Testing Library für statische Prüfung und Verhaltenstests. Keine zusätzlichen Produktbibliotheken.

**Begründung:** TypeScript eignet sich für Browserlogik und interaktive Visualisierung. Python bietet eine leicht nachvollziehbare Gegenrechnung.

**Validierung:** Node 24.11.1, npm 11.6.2. TypeScript 7 wurde wegen des tatsächlich beobachteten ESLint-Parser-Peer-Konflikts verworfen; unterstütztes TypeScript 6 installiert, kein erzwungener Konflikt. [Nachweise](../website/tests/step-6-1-validation.md).

**Offen:** Chart-Bibliothek und Hosting. Keine Bereitstellung in Schritt 6.1.

## D-007: Präsentationsformat bleibt offen

**Status:** offen

**Entscheidung:** Inhalte werden zunächst formatneutral in Markdown gepflegt.

**Optionen:** PowerPoint-Datei, programmatisch erzeugte PPTX oder bestehendes Uni-Template. Die Wahl erfolgt, sobald Template und Vortragsvorgaben vorliegen.

## D-008: Einfacher Browserabruf mit Länder-Cache

**Status:** in Schritt 6.1 abgeschlossen; technische Prüfung und sechs nutzerberichtete Browserchecks dokumentiert

**Entscheidung:** Direkter nativer Browser-`fetch` mit zwei parallelen Indikatoranfragen, strikter Struktur-/Identitätsprüfung und 30-Sekunden-Timeout. Promise-Cache je Land für laufende und erfolgreiche Anfragen bis zum Seitenreload; Fehler aus dem Cache entfernen, expliziter Retry. Kein Proxy, Datenbank, persistenter Cache oder stiller Snapshot-Fallback.

**Begründung:** Vermeidet doppelte Abrufe unter StrictMode/Rerender und bei Rückkehr zu einem Land ohne zusätzliche Bibliothek. Alte Antworten dürfen die aktuelle Auswahl nicht überschreiben. Ein API-Fehler bleibt erkennbar.

**Fehlende Daten:** Für die Tabelle alle 25 Jahre erhalten, `null` und fehlende Jahresdatensätze sichtbar markieren, vollständige Paare zählen. Keine Imputation oder Änderung der validierten Statistikdefinitionen; spätere Berechnung verwendet ausschließlich vollständige Paare. Der strengere Python-Snapshot-Abruf bleibt unverändert. Zahlen nur zur Anzeige runden, Source-Update und Abrufzeitpunkt getrennt zeigen.

**Nachweis/Grenze:** Sechs Live-Reihen unter Node geladen, 18 Werte gegen Referenz geprüft, CORS-Header eines Endpoints bestätigt. jsdom-Tests prüfen Cache und Zustandswechsel. Ergänzend berichtet der Nutzer sechs bestandene persönliche Browserchecks einschließlich Länderwechsel, zweier Werte und schmalem Fenster. Kein physischer Mobilgerätetest oder vollständiger Audit berichtet; siehe [Validierung](../website/tests/step-6-1-validation.md).

## D-009: SVG-Scatterplot und gemeinsame lokale Datenbasis für 6.2

**Status:** 6.2 abgeschlossen; technische Prüfung und nutzerberichteter informeller Browser-/Visualcheck dokumentiert

**Entscheidung:** Native SVG-Komponente mit beschrifteten/fokussierbaren Punkten, persistenter Detailanzeige, Hover/Klick/Touch/Keyboard und gestrichelter OLS-Linie; keine neue Chart-Abhängigkeit. Auf schmalen Fenstern horizontaler Chart-Scroll statt unlesbar verkleinerter Achsentexte. Nutzer bewertet Bedienung und Aussehen im echten Browser informell positiv; spezifischer Keyboard-/Accessibility-/Gerätecheck nicht bestätigt.

**Datenfluss:** Die bestehende API lädt weiterhin 2000–2024. Zeitraumwahl 2024/2019 filtert lokal nach Land und inklusiven Jahren; ein gemeinsames Ergebnis versorgt Punkte, Linie, r, β, n und Tabelle. Fehlende Werte bleiben in Tabellenzeilen, nur vollständige Paare gehen in Statistik/Chart. Landwechsel behält den Zeitraum. API-/Cache-Code unverändert.

**Rechnung:** Gleiche Pearson-/OLS-Definition wie Python, kompensierte zentrierte Summen und direkte Konstantenerkennung vor Mittelwertbildung (inklusive historischem `0.1`-Fall). Keine künstliche Epsilon-Schwelle für Konstanten. Undefinierte Fälle erklärt, horizontale Regression bei konstantem y erhalten, numerischer Überlauf sicher behandelt. Linienvorhersage zentriert und nur zwischen beobachteten min/max x; keine Extrapolation. Drei Dezimalstellen für r/β nur zur Anzeige.

**Kontrolle/Grenze:** Alle sechs eingefrorenen Gruppen einschließlich α/r/β/n und Ausschlüssen gegen gespeicherte Python-Ergebnisse geprüft, Toleranz `1e-12 * max(1, |Python|)`. Kein neuer statistischer Schätzer, keine Änderung der Referenzen. Live-Revisionen können reale Websitewerte ändern; der Offlinevergleich isoliert Rechenfehler von späteren Datenständen. [Prüfbericht](../website/tests/step-6-2-validation.md). Keine 6.3-Vergleichsansicht oder Schritte 7/8.

## D-010: Ein Vergleich, drei unabhängige Länderzustände

**Status:** 6.3 abgeschlossen; technische Prüfung und erfolgreicher nutzerberichteter informeller Browser-/Visualreview, AW-014

**Entscheidung:** Eine Tabelle statt weiterer Charts. Bestehender API-/Promise-Cache und unveränderte Statistik bleiben die Grundlage. Die bisherige Lade-/Retry-/Cleanup-Logik wird in einen kleinen Hook extrahiert und je festem Ländercode aufgerufen. Vergleich und Einzelansicht verwenden dieselben drei Zustände, damit Retries nicht widersprüchliche Ansichten erzeugen. Fehler pro Land statt globalem `Promise.all` über Länder; erfolgreiche Zeilen bleiben sichtbar.

**Konsequenz:** Sechs initiale HTTP-Aufrufe statt der bisherigen zwei für die Einzelansicht. Länder-/Zeitraumwechsel nach Laden erzeugen keine neuen Requests; Retry nur für das fehlerhafte Land. Landwahl markiert den Vergleichseintrag und behält Einzelplotverhalten. Source-Update-Daten und URLs bleiben je Land/Indikator sichtbar; r/β/n gemeinsam lokal gefiltert, keine Referenzergebnisse im Produktcode. Scrollbare semantische Tabelle auf schmalen Fenstern. Kleine SVG-Labelkorrektur trennt Name/Beschreibung; keine Umgestaltung.

**Kontrolle:** Sechs Vergleichsgruppen aus fixen Original-JSON-Fixtures gegen Python, Request-Zahl unter StrictMode, Teilfehler/Laden/Retry, fehlende Werte und Quellenmetadaten getestet. Erfolgreicher informeller Browser-/Visualreview nutzerberichtet, keine vollständige Keyboard-/Geräte-/Retryprüfung; [Nachweise](../website/tests/step-6-3-validation.md), AW-013/AW-014. Keine neue Abhängigkeit, Daten-/Python-/Statistik-/API-Clientänderung oder Arbeit an Schritten 7/8.
