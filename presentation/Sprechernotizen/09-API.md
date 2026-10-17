1. Wie funktioniert deine Website wirklich?
Deine Website verwendet Live-Daten aus der World Bank API. Sie basiert also nicht einfach auf einer fest eingebauten CSV-Datei.
Der Ablauf ist folgender:
User selects a country
Germany, France or Spain


World Bank API
Live inflation and unemployment data


Website displays results
Scatterplot, statistics and comparison


Allerdings gibt es eine wichtige Feinheit: Nicht jede Änderung löst eine neue API-Abfrage aus.
- Wenn neue Länderdaten benötigt werden, werden sie über die World Bank API angefragt.
- Bereits abgerufene Daten können zwischengespeichert werden (Caching).
- Wenn du zwischen 2000–2024 und 2000–2019 wechselst, werden die vorhandenen Daten lokal gefiltert.
Der gespeicherte Datensatz in deinem Projektordner ist dagegen ein Referenz-Snapshot. Er dient dazu, Berechnungen zu überprüfen und Ergebnisse später reproduzieren zu können.
Das sind zwei unterschiedliche Aufgaben. Genau so war es laut deiner Projektdokumentation vorgesehen.
2. Was gehört auf Folie 9 und was auf Folie 11?
Ich würde das bewusst trennen.
Folie 9 – World Bank API	Folie 11 – Website Development
Wie funktioniert eine API-Abfrage?	Wie hat Codex die Website gebaut?
Was bedeuten URL und Parameter?	Wie nutzt die Website die API?
Wie wurden Daten gespeichert und geprüft?	Wie funktionieren Diagramme und Interaktionen?
Auf Folie 9 kannst du die Verbindung zur Website bereits kurz erwähnen. Den tatsächlichen Aufbau erklären wir auf Folie 11.




Was solltest du am Screenshot erklären?
Deine tatsächliche API-Adresse:
https://api.worldbank.org/v2/country/DEU/indicator/FP.CPI.TOTL.ZG?format=json&date=2000:2024&per_page=100


Bestandteil	Bedeutung
api.worldbank.org	Adresse der Daten-API
DEU	Deutschland
FP.CPI.TOTL.ZG	Inflationsrate
format=json	Antwort als JSON
date=2000:2024	Untersuchungszeitraum
per_page=100	Bis zu 100 Einträge pro Seite
Die World Bank liefert für diese Abfrage 25 Jahreswerte. Eine Abfrage für Arbeitslosigkeit liefert die zweite Datenreihe, die dann über das Jahr zugeordnet werden kann.





Sprechernotiz
Für die Wirtschaftsdaten habe ich die World Bank API verwendet. Eine API ist eine Schnittstelle, über die man Daten von einem anderen System abrufen kann.
Hier sieht man meinen ersten eigenen API-Aufruf über PowerShell.
In der URL lege ich fest, welche Daten ich erhalten möchte. DEU steht beispielsweise für Deutschland, anschließend folgt der Indikator für Inflation und schließlich der Zeitraum von 2000 bis 2024.
Die Antwort kommt im JSON-Format und enthält die entsprechenden Jahreswerte.
Anschließend hat Codex den Datenabruf mit Python automatisiert. Für drei Länder und jeweils zwei Indikatoren wurden insgesamt sechs API-Antworten abgerufen.
Die 150 Einzelwerte wurden über Land und Jahr zu 75 vollständigen Beobachtungspaaren zusammengeführt und auf fehlende Werte und Duplikate geprüft.
Wichtig ist dabei: Diese Zahlen wurden nicht von ChatGPT erfunden, sondern stammen direkt aus der World Bank.
Meine Website verwendet ebenfalls die World Bank API, während die gespeicherten Referenzdaten zur späteren Überprüfung dienen.