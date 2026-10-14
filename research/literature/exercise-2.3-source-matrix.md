# Lab 4, Exercise 2.3: Source-grounded literature review

## Dokumentationsstatus

- **Datum:** 2026-10-14
- **Modell:** GPT-6
- **Thinking effort:** medium
- **Übung:** Lab 4, Exercise 2.3
- **Status:** Schritt 2 im vereinbarten Minimalumfang abgeschlossen: AI-gestützter Quellencheck aller Zellen; unabhängige menschliche Prüfung der drei Hauptergebnisse und Einordnung der drei Vergleiche. Kein vollständiger Human Audit aller Zellen.

## Forschungsfrage des Projekts

> How does the relationship between inflation and unemployment differ across Germany, France, and Spain from 2000 to 2024?

## Verwendeter Exercise-2.3-Prompt

```text
Build a table with one row per attached paper and the columns: research question, data, method, headline result, and relation to the other papers.
If a cell cannot be filled from the text, write "not in text".
```

Die vollständigen ursprünglichen Prompts und Antworten bleiben unverändert im Archiv erhalten. Die drei lokalen PDFs dienten nur der Prüfung und werden nicht in Git aufgenommen.

## Source matrix

Alle Seitenangaben beziehen sich auf die PDF-Seitenzählung im Viewer. Bei Hindrayanto et al. ist PDF-Seite 1 ein Repository-Deckblatt. Bei Faber und Züllig stehen Cover und Disclaimer vor dem eigentlichen Arbeitspapier.

| Paper | Research question | Data | Method | Headline result | Relation to the other papers |
|---|---|---|---|---|---|
| Hindrayanto, Samarina & Stanga (2019) | Ist die Phillips-Kurve im Euroraum und seinen fünf größten Volkswirtschaften noch nachweisbar, unterscheidet sich ihre Steigung zwischen Ländern und änderte sie sich nach der globalen Finanzkrise? _(PDF pp. 2–3)_ | Quartalsdaten 1985Q1–2017Q4 für Euroraum, Deutschland, Frankreich, Italien, Spanien und Niederlande. Verwendet werden annualisierte HICP-Inflation und Arbeitslosigkeit beziehungsweise daraus geschätzte Trend- und Zykluskomponenten. Euroraumdaten stammen aus dem EABCN Area Wide Model; Länderreihen aus Eurostat und OECD. _(PDF p. 3)_ | Unobserved-Components-Modell für Inflation und Arbeitslosigkeit. Trendinflation dient als Näherung für längerfristige Erwartungen; der Arbeitslosigkeitsgap misst Slack. Eine Interaktion mit einem Post-GFC-Dummy prüft Steigungsänderungen. _(PDF pp. 2–3)_ | Negativer und signifikanter Zusammenhang für Euroraum, Deutschland, Frankreich und Niederlande; für Italien und Spanien ist die geschätzte Steigung nicht signifikant. Die Steigungen unterscheiden sich zwischen Ländern und ändern sich nach der Finanzkrise nicht signifikant. _(PDF pp. 2, 4; zentrale Aussage unabhängig auf p. 4 geprüft)_ | Der eigenen Frage fachlich am nächsten, weil das Paper Preisinflation sowie Deutschland, Frankreich und Spanien untersucht. Es verwendet jedoch Quartalsdaten, Gaps und ein deutlich komplexeres Zeitreihenmodell. Im Gegensatz zu Bulligan & Viviano geht es um Preise statt Löhne; im Gegensatz zu Faber & Züllig um Länderergebnisse und Post-GFC-Stabilität statt Nichtlinearität. _(Menschlich als angemessene Cross-paper-Synthese bestätigt; kein direkter Paper-Befund)_ |
| Bulligan & Viviano (2017) | Hat sich die Sensitivität der Lohninflation gegenüber Arbeitsmarkt-Slack nach der globalen Finanzkrise in Deutschland, Frankreich, Italien und Spanien verändert? _(PDF pp. 1–2)_ | Makrodaten auf Quartalsbasis für 1999Q1–2015Q4 mit privatem nominalem Stundenlohnwachstum, Arbeitslosigkeit sowie vergangener oder erwarteter Inflation. Ergänzend verwenden die Autoren italienische INPS-Arbeitgeber- und Beschäftigtendaten. _(PDF pp. 3–6, 11)_ | Länderspezifische Phillips-Kurven, Instabilitätstests und zeitvariable Kernel-Regressionen. Für Italien kommen Firmen-Fixed-Effects und Mikroschätzungen auf Arbeitgeber- und Beschäftigtenebene hinzu. _(PDF pp. 5–9, 11–19)_ | Nach 2008 steigt die Sensitivität der Löhne gegenüber Arbeitslosigkeit in Italien, Spanien und je nach Spezifikation Frankreich; in Deutschland flacht der Zusammenhang ab. Die italienischen Mikroanalysen sprechen gegen eine rein kompositionsbedingte Erklärung. _(PDF pp. 1–2, 8–10, 20; zentrale Aussage unabhängig auf p. 20 geprüft)_ | Ergänzt die beiden Preis-Phillips-Kurven um Lohninflation und zeitliche Instabilität. Das Paper hilft zu erklären, warum Länderbeziehungen nicht konstant sein müssen, beantwortet die eigene CPI-Frage aber nicht direkt. _(Menschlich als angemessene Cross-paper-Synthese bestätigt; kein direkter Paper-Befund)_ |
| Faber & Züllig (2025), SNB Working Paper 12/2025 | Wird die Phillips-Kurve im Euroraum nichtlinear und deutlich steiler, wenn Arbeitsmärkte besonders angespannt sind? _(PDF pp. 3–5)_ | Quartalsdaten 2001Q1–2024Q4 für 18 Euroraumländer. Zentrale Variablen sind saisonbereinigte HICP-Dienstleistungspreisinflation, Arbeitslosigkeitsgap aus Eurostat-Arbeitslosigkeit und EC-NAWRU sowie relative Dienstleistungspreise. _(PDF pp. 10–11)_ | Länderpanel mit Länder- und Zeit-Fixed-Effects. Die Nichtlinearität wird über die Interaktion des Arbeitslosigkeitsgaps mit einem Tight-Labor-Market-Indikator geschätzt; bevorzugte Schätzung per 2SLS mit vier Quartalen verzögerten Instrumenten. _(PDF pp. 8–11)_ | Die Phillips-Kurve ist in normalen Zeiten flach, wird bei angespannten Arbeitsmärkten aber mindestens dreimal steiler. Der Großteil des Inflationsanstiegs nach der Pandemie wird trotzdem anderen Faktoren zugeschrieben. _(PDF pp. 3, 14–15, 23–24; zentrale Aussage unabhängig auf p. 3 geprüft)_ | Deckt fast genau den eigenen Zeitraum ab und warnt davor, dass eine lineare Regression wirtschaftlich relevante Nichtlinearität übersehen kann. Anders als Hindrayanto et al. und das eigene Projekt schätzt das Paper ein 18-Länder-Panel mit Dienstleistungspreisen und Arbeitslosigkeitsgaps statt drei separater einfacher Länderbeziehungen. _(Menschlich als angemessene Cross-paper-Synthese bestätigt; kein direkter Paper-Befund)_ |

## Quellenlinks

- Hindrayanto, I., Samarina, A., & Stanga, I. M. (2019). *Is the Phillips curve still alive? Evidence from the euro area*. Economics Letters, 174, 149–152. [Publisher's PDF via University of Groningen](https://pure.rug.nl/ws/portalfiles/portal/102712371/1_s2.0_S0165176518304804_main.pdf), [DOI](https://doi.org/10.1016/j.econlet.2018.11.021)
- Bulligan, G., & Viviano, E. (2017). *Has the wage Phillips curve changed in the euro area?* IZA Journal of Labor Policy, 6, Article 9. [Open-access article and PDF](https://link.springer.com/article/10.1186/s40173-017-0087-z), [DOI](https://doi.org/10.1186/s40173-017-0087-z)
- Faber, M., & Züllig, G. (2025). *Kinky Europe: Evidence from the regional Phillips curve in the euro area*. SNB Working Papers 12/2025. [SNB working-paper PDF](https://www.snb.ch/public/asset/en/www-snb-ch/publications/research/working-papers/2025/working_paper_2025_12/publications0_en/working_paper_2025_12.pdf)

## Einordnung der eigenen Forschungsfrage

Das Projekt repliziert keines der drei Papers. Es zeigt eine bewusst einfachere, deskriptive Analyse mit jährlichen World-Bank-Daten:

| Dimension | Eigenes Projekt | Abgrenzung zur Literatur |
|---|---|---|
| Ziel | Transparenter Vergleich der linearen Beziehung in drei Ländern | Keine strukturelle oder kausale Phillips-Kurven-Schätzung |
| Inflation | Jährliche CPI-Inflationsrate | Hindrayanto nutzt HICP-Komponenten, Bulligan Löhne, Faber & Züllig Dienstleistungspreise |
| Arbeitsmarkt | Gesamte Arbeitslosenquote | Hindrayanto und Faber & Züllig arbeiten mit geschätzten Gaps; Bulligan ergänzt Erwartungen und Mikrodaten |
| Zeitraum | 2000–2024 | Nur Faber & Züllig decken 2024 ab; die anderen enden 2017 beziehungsweise 2015 |
| Methode | Separate Scatterplots, Pearson-Korrelation und einfache OLS pro Land | Die Papers nutzen UC-Modelle, zeitvariable Schätzungen oder nichtlineare Panel-IV-Verfahren |
| Anspruch | Exploratives Lehr- und Visualisierungsprojekt | Kein Anspruch auf wissenschaftliche Neuheit oder kausale Identifikation |

## Inhaltliche Konsequenz für das Projekt

Die Website und Präsentation müssen die Analyse als **descriptive exploratory analysis** bezeichnen. Die Literatur zeigt drei Grenzen der einfachen linearen Darstellung: Länderheterogenität, zeitliche Veränderung und mögliche Nichtlinearität. Diese Grenzen werden erklärt, aber nicht durch zusätzliche komplexe Modelle beseitigt.
