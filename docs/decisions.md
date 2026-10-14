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

## D-006: Vorläufiger technischer Stack

**Status:** vorläufig

**Entscheidung:** React mit TypeScript für die Website, Python für Referenzabruf und unabhängige Validierung.

**Begründung:** TypeScript eignet sich für Browserlogik und interaktive Visualisierung. Python bietet eine leicht nachvollziehbare Gegenrechnung.

**Offen:** Paketmanager, Chart-Bibliothek, Hosting und genaue Projektvorlage werden beim Website-Setup festgelegt.

## D-007: Präsentationsformat bleibt offen

**Status:** offen

**Entscheidung:** Inhalte werden zunächst formatneutral in Markdown gepflegt.

**Optionen:** PowerPoint-Datei, programmatisch erzeugte PPTX oder bestehendes Uni-Template. Die Wahl erfolgt, sobald Template und Vortragsvorgaben vorliegen.
