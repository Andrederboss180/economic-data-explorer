Kurz: 
Während des gesamten Projekts habe ich versucht, meine AI-Nutzung möglichst transparent und reproduzierbar zu dokumentieren. Dazu gehören die verwendeten Prompts, Daten, Berechnungen, Tests und Git-Commits. Das gesamte Repository stelle ich für die Nachvollziehbarkeit zur Verfügung.

Lang:
Ein weiterer wichtiger Punkt aus der Vorlesung war die Reproduzierbarkeit und die transparente Offenlegung der AI-Nutzung.

Reproduzierbarkeit bedeutet, dass andere Personen nachvollziehen und wiederholen können, wie meine Ergebnisse entstanden sind.

Dafür haben wir die originalen World-Bank-Antworten, einen festen Referenzdatensatz, den Python-Code und die Tests gespeichert.

So können die statistischen Berechnungen mit denselben Daten erneut ausgeführt werden, auch ohne eine neue API-Abfrage.

Der zweite Punkt ist AI Disclosure, also die Offenlegung der AI-Nutzung.

Dafür haben wir unsere Prompts, Entscheidungen, Prüfberichte und Git-Commits dokumentiert. Dadurch wird nachvollziehbar, welche Aufgaben ChatGPT und Codex übernommen haben und welche Kontrollen ich selbst durchgeführt habe.

Das macht den Forschungsprozess transparenter. Allerdings haben wir keine vollständige unabhängige Reproduktion auf einem anderen Rechner durchgeführt.


---

1. Was bedeutet Reproducibility?
Stell dir vor, dein Professor möchte überprüfen, ob die Korrelationswerte auf deiner Website wirklich richtig berechnet wurden.
Dafür müsste er wissen: Welche Daten hast du verwendet? Welcher Code hat die Ergebnisse berechnet? Kann er die Berechnungen wiederholen?
Genau dafür haben wir Dateien gespeichert:
Data
75 gespeicherte Wertepaare

Python
Berechnungsskript

Results
6 Ergebnisgruppen



Wenn jemand dieselben gespeicherten Daten und den entsprechenden Code verwendet, sollte er die gleichen Referenzergebnisse erhalten.
Warum haben wir die Daten extra gespeichert? Weil die World Bank ihre Daten im Laufe der Zeit überarbeiten kann. Ein neuer Live-Abruf muss deshalb nicht dieselben Zahlen liefern wie damals.
Wichtig: Wir haben die Wiederholung dokumentiert und die Analyse technisch geprüft. Wir haben aber nicht nachgewiesen, dass das gesamte Projekt auf einem völlig fremden Rechner erfolgreich reproduziert wurde.
2. Was bedeutet AI Disclosure?
Disclosure bedeutet hier einfach Offenlegung der AI-Nutzung.
Du sollst zeigen, was wirklich von dir kam und was ChatGPT beziehungsweise Codex gemacht haben.
Beispielsweise:
- Du: Forschungsfrage ausgewählt, bestimmte Originalquellen geprüft, Website im Browser getestet.
- ChatGPT: Planung, Erklärungen, Erstellung von Codex-Aufträgen.
- Codex: Programmierung, automatisierte Tests, Dokumentation und Git-Arbeit.
Dazu habt ihr echte Nachweise gespeichert: Prompts, Entwicklungsprotokolle, Prüfberichte und Git-Commits.
Der entscheidende Unterschied zu Folie 7: Dort hast du die Rollen erklärt. Hier zeigst du, wie diese Arbeitsteilung dokumentiert und später überprüfbar ist.