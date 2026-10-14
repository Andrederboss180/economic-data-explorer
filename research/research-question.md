# Forschungsfrage und analytischer Rahmen

## Finale Forschungsfrage

> How does the relationship between inflation and unemployment differ across Germany, France, and Spain from 2000 to 2024?

## Untersuchungseinheit

Eine Beobachtung entspricht einem Land und einem Kalenderjahr mit einem gültigen Wert für beide Variablen. Die Länder werden separat analysiert. Ihre Werte werden nicht zu einer gemeinsamen Stichprobe zusammengelegt.

## Variablen

| Variable | Rolle im einfachen Modell | Einheit | World-Bank-Code |
|---|---|---|---|
| Arbeitslosenquote | erklärende Variable `u_t` | Prozent der Erwerbsbevölkerung | `SL.UEM.TOTL.ZS` |
| Inflation | abhängige Variable `π_t` | jährliche Veränderung des CPI in Prozent | `FP.CPI.TOTL.ZG` |

## Einfaches Modell

Für jedes Land schätzen wir:

`π_t = α + β u_t + ε_t`

Ausgewiesen werden:

- Pearson-Korrelationskoeffizient `r`
- OLS-Steigung `β`
- Zahl vollständiger Jahresbeobachtungen `n`

Optional kann `R²` als ergänzende Kennzahl berechnet werden. Für die Präsentation verwenden wir es nur, wenn wir seine Bedeutung einfach und korrekt erklären können.

## Arbeitshypothese

Die traditionelle Phillips-Kurve legt einen negativen kurzfristigen Zusammenhang nahe. Für jährliche nationale Daten über einen langen Zeitraum erwarten wir jedoch keinen stabilen oder kausal interpretierbaren Zusammenhang. Unterschiede zwischen Ländern und Zeiträumen sind plausibel.

Diese Hypothese ist eine theoretische Erwartung, kein bereits feststehendes Ergebnis.

## Robustheitsprüfung

Wir vergleichen den Hauptzeitraum 2000 bis 2024 mit 2000 bis 2019. Damit prüfen wir, ob Pandemie- und Inflationsjahre ab 2020 Richtung oder Stärke des einfachen Zusammenhangs deutlich verändern.

## Grenzen

- Korrelation und Regression zeigen keine Kausalität.
- Jahresdaten können zeitlich abhängig sein.
- Inflationserwartungen, Angebotsschocks und institutionelle Unterschiede fehlen.
- Der gewählte Arbeitslosenindikator basiert auf modellierten ILO-Schätzungen.
- Datenrevisionen der World Bank können historische Werte verändern.
- Kleine Stichproben machen einzelne Jahre einflussreich.

Die Ergebnisse beschreiben daher nur den linearen Zusammenhang im gewählten Datensatz.
