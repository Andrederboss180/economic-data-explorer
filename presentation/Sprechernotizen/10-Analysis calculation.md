Nachdem wir die Daten von der World Bank abgerufen hatten, mussten wir daraus noch den statistischen Zusammenhang zwischen Inflation und Arbeitslosigkeit berechnen.

Dafür hat Codex zunächst Python-Code geschrieben, der unter anderem die Korrelation und eine lineare Regressionsgerade berechnet.

Da ich den AI-generierten Code nicht einfach ungeprüft übernehmen wollte, haben wir verschiedene technische Tests eingesetzt.

Hier sieht man ein einfaches Beispiel mit drei künstlichen Datenpunkten. Die richtige Lösung ist bereits bekannt: Die Korrelation beträgt eins und die Steigung zwei.

Damit konnten wir prüfen, ob der Code diese Werte korrekt berechnet.

Zusätzlich wurden die Ergebnisse mit Funktionen der Python-Standardbibliothek verglichen. Später wurden auch die Berechnungen der Website mit den gespeicherten Python-Ergebnissen abgeglichen.

Diese Tests hat Codex durchgeführt. Sie geben uns mehr Sicherheit, ersetzen aber keine vollständige unabhängige menschliche Codeprüfung.


Finale Sprechernotiz – etwas kürzer
Nachdem wir die Wirtschaftsdaten abgerufen hatten, mussten daraus die Korrelationen und Regressionsgeraden berechnet werden. Den entsprechenden Python-Code hat Codex geschrieben.
Um die AI-generierten Berechnungen zu kontrollieren, haben wir verschiedene Tests eingesetzt.
Hier sieht man ein ganz einfaches Beispiel: Drei künstliche Datenpunkte, bei denen die richtige Lösung bereits bekannt ist. Die Korrelation muss eins und die Steigung zwei betragen.
Codex hat solche Testfälle programmiert und die Berechnungen zusätzlich mit Funktionen der Python-Standardbibliothek verglichen.
Später haben wir auch die Ergebnisse der Website mit den Python-Referenzwerten abgeglichen.
Die Tests waren erfolgreich. Allerdings wurden sowohl der Code als auch die Tests von Codex erstellt. Deshalb erhöhen diese Prüfungen die Zuverlässigkeit, ersetzen aber keine vollständige unabhängige menschliche Codeprüfung.



-------------------------------
1. Was zeigt dein Python-Screenshot?
Codex hat einen Python-Code geschrieben, der Korrelationen und Regressionsgeraden berechnet. Anschließend hat Codex einen Test programmiert, der überprüft, ob diese Berechnungen stimmen.
Schauen wir auf die wichtigsten Zeilen:
Zeile 24
Testdaten und erwartetes Ergebnis

self.assert_coefficients(    [(1, 3), (2, 5), (3, 7)], 1, 2, 1)



Die drei Zahlenpaare sind künstliche Daten. Die letzten drei Zahlen sind die bekannten richtigen Ergebnisse:
- 1 = Korrelation
- 2 = Steigung der Geraden
- 1 = Achsenabschnitt
Die zugehörige Gerade lautet \(y=2x+1\).

Zeilen 17–21
Berechnung und Überprüfung

result = analysis.calculate_statistics(pairs)



Der Code berechnet die Ergebnisse und vergleicht sie anschließend mit den erwarteten Zahlen.
assertAlmostEqual bedeutet: Die berechneten Zahlen müssen bis auf winzige Rundungsabweichungen mit den erwarteten Werten übereinstimmen.


Das ist der gesamte Sinn des Screenshots: Codex hat nicht nur die mathematischen Funktionen programmiert, sondern auch einen Test mit einer bereits bekannten richtigen Lösung erstellt.
Der Screenshot beweist, dass der Test programmiert wurde. Dass er tatsächlich bestanden wurde, ergibt sich aus deinem dokumentierten Testbericht.
2. Was ist mit Standard Library und Python–TypeScript gemeint?
Python Standard Library
Python bringt bereits viele fertige Funktionen mit. Dazu gehört eine Statistikbibliothek, die beispielsweise Korrelationen berechnen kann.
Codex hat also zwei Rechnungen verglichen:
- Seine selbst programmierte statistische Berechnung.
- Eine bereits vorhandene Python-Funktion für dieselbe Berechnung.
Wenn beide dieselben Ergebnisse liefern, ist das ein zusätzlicher Hinweis darauf, dass der Code korrekt rechnet.
Die sechs Python–TypeScript-Vergleiche
Hier geht es um deine Website.
Python: Codex hat zunächst außerhalb der Website die statistischen Ergebnisse berechnet und gespeichert.
TypeScript: Später hat Codex die statistischen Funktionen auch für deine Website programmiert.
Dann wurde verglichen, ob beide Implementierungen dieselben Ergebnisse liefern.
Warum sechs Vergleiche?
3 Länder × 2 Zeiträume = 6 Ergebnisgruppen.
Für jede Gruppe wurden die Korrelation, die Steigung und der Achsenabschnitt verglichen. Die Werte stimmten innerhalb der festgelegten numerischen Toleranz überein.
Das war wichtig, damit deine Website nicht versehentlich andere statistische Ergebnisse anzeigt als die vorher überprüfte Python-Analyse.
------------------------------------




Angepasste Sprechernotiz
Nachdem wir die Wirtschaftsdaten abgerufen hatten, hat Codex einen Python-Code geschrieben, um daraus Korrelationen und Regressionsgeraden zu berechnen.
Natürlich wollte ich die AI-generierten Berechnungen nicht einfach ungeprüft übernehmen.
Deshalb haben wir verschiedene technische Tests eingesetzt. Hier sieht man einen echten Ausschnitt aus dem Python-Code.
Wir verwenden drei künstliche Datenpunkte, bei denen die richtige Lösung bereits bekannt ist. Der Test überprüft, ob das Programm genau diese Ergebnisse berechnet.
Zusätzlich wurden die Berechnungen mit fertigen Funktionen aus der Python-Standardbibliothek verglichen.
Später wurden auch die Berechnungen der Website mit den sechs gespeicherten Python-Ergebnissen abgeglichen.
Die Tests hat Codex ausgeführt und erfolgreich dokumentiert. Allerdings hat die AI sowohl den Code als auch die Tests geschrieben. Die Prüfungen erhöhen also die Zuverlässigkeit, ersetzen aber keine vollständige unabhängige menschliche Kontrolle.
