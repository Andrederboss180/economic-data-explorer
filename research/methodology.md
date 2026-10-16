# Methodik

## 1. Datenabruf

Für jedes Land werden zwei Indikatorreihen aus der World-Bank-API abgerufen. Die Rohantwort bleibt für Debugging und Provenienz verfügbar. Zusätzlich wird ein Referenzdatensatz mit Abrufdatum gespeichert.

## 2. Datenaufbereitung

1. Nur die Jahre 2000 bis 2024 behalten.
2. Jahr als ganze Zahl und Messwert als Zahl interpretieren.
3. Inflations- und Arbeitslosenwerte über Land und Jahr verbinden.
4. Jahre ohne einen der beiden Werte ausschließen.
5. Ausschlüsse und verbleibende Beobachtungszahl protokollieren.
6. Daten aufsteigend nach Jahr sortieren.

Die Analyse darf Werte nicht allein aufgrund ihrer Größe entfernen. Ein möglicher Ausreißer wird sichtbar gemacht und in einer Sensitivitätsprüfung besprochen, nicht still gelöscht.

## 3. Pearson-Korrelation

Für gepaarte Beobachtungen `(u_i, π_i)` berechnen wir:

`r = cov(u, π) / (s_u · s_π)`

Vor der Berechnung prüfen wir:

- mindestens zwei vollständige Beobachtungen
- Variation in beiden Variablen
- identische Jahreszuordnung

## 4. Lineare Regression

Wir schätzen pro Land die einfache OLS-Gerade:

`π_i = α + βu_i + ε_i`

Die Steigung lässt sich im einfachen Modell als `β = cov(u, π) / var(u)` berechnen. Im Diagramm wird sie als Regressionsgerade angezeigt.

Interpretation: `β` beschreibt die geschätzte Veränderung der Inflation in Prozentpunkten bei einem zusätzlichen Prozentpunkt Arbeitslosigkeit innerhalb des beobachteten linearen Zusammenhangs. Diese Formulierung ist deskriptiv, nicht kausal.

## 5. Zeiträume

- Hauptanalyse: 2000 bis 2024
- Robustheitsanalyse: 2000 bis 2019

Beide Zeiträume verwenden dieselbe Aufbereitungs- und Berechnungslogik.

## 6. Validierung

- Handberechenbarer Mini-Datensatz mit bekannter positiver und negativer Korrelation
- Vergleich der TypeScript-Ergebnisse mit Python oder einer etablierten Statistikbibliothek
- Stichprobenprüfung einzelner Jahreswerte gegen die World-Bank-Antwort
- Test für fehlende Werte und falsch ausgerichtete Jahre
- Vergleich von `n` mit der Zahl sichtbarer Punkte im Diagramm

## 7. Ergebnisdarstellung

Pro Land zeigen wir Scatterplot, Regressionsgerade, `r`, `β` und `n`. Eine Tabelle fasst die Länder für beide Zeiträume zusammen. Aussagen beschreiben Richtung, Stärke und sichtbare Unterschiede, ohne Ursache-Wirkungs-Sprache.

## 8. Umsetzungsstand Schritt 5

Die Offline-Python-Analyse ist implementiert und mit bekannten Testlösungen sowie den separaten Standardbibliothek-Funktionen `statistics.correlation` und `statistics.linear_regression` geprüft. [Ergebnisbericht und Grenzen](../analysis/validation.md). Die Website und der Python-/TypeScript-Vergleich aus Abschnitt 6 stehen noch aus. Es werden keine Signifikanz, Kausalität oder vollständige strukturelle Phillips-Kurve beansprucht. Der Zeitraumvergleich ist eine einfache Sensitivitätsprüfung, kein umfassender Robustheitsnachweis.
