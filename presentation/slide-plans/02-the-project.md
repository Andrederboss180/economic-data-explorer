# 02. The Project

## Purpose

Give enough economic context to understand the workflow, within one substantive project-introduction slide.

## Main takeaway

The explorer describes how the inflation–unemployment relationship differs across countries and periods, without identifying causal effects.

## Verified project evidence

- Research question: “How does the relationship between inflation and unemployment differ across Germany, France, and Spain from 2000 to 2024?” [Design](../../research/research-question.md).
- Annual CPI inflation `FP.CPI.TOTL.ZG` and unemployment `SL.UEM.TOTL.ZS` (modeled ILO estimate); 75 complete country-year pairs in the frozen World Bank snapshot: [metadata](../../data/raw/world_bank_2000_2024_metadata.json).
- Germany: Pearson r = −0.29505198262795945, n=25 for 2000–2024; r = +0.17910023322437824, n=20 for 2000–2019. Rounded only for display: [results](../../data/results/analysis_results.csv), [validation](../../analysis/validation.md).
- Literature connection: Hindrayanto et al. (2019) study price Phillips curves with a more complex model and find country heterogeneity; the recorded human check covers PDF p. 4. Our simple annual CPI comparison is not a replication: [matrix](../../research/literature/exercise-2.3-source-matrix.md).

## Proposed on-slide text (English)

**How does the inflation–unemployment relationship differ?**

Germany · France · Spain

World Bank annual data, 2000–2024

**Germany: the period matters**

| Period | Pearson r | n |
|---|---:|---:|
| 2000–2024 | −0.295 | 25 |
| 2000–2019 | +0.179 | 20 |

Descriptive association. No causal claim.

Source footer: World Bank snapshot, retrieved 16 Oct 2026; analysis_results.csv. Literature context: Hindrayanto et al. (2019).

## Proposed visual layout

One question and a compact editable two-row result table. Country and data labels provide context. A small literature citation connects the question to research without explaining econometric models. Do not place the 2000–2019 screenshot under a 2000–2024 result label. No new plot is necessary for this draft.

## Presenter understanding (German)

Inflation bezeichnet hier die jährliche Veränderung der Verbraucherpreise. Die Arbeitslosenquote bezieht sich auf die Erwerbsbevölkerung. Pearson r beschreibt Richtung und Stärke eines linearen Zusammenhangs zwischen −1 und +1. n ist die Anzahl vollständiger Jahrespaare. Deutschland zeigt, dass die Auswahl des Zeitraums das Ergebnis verändert. Daraus folgt keine Erklärung, warum sich die Werte ändern. Das Paper nutzt andere Variablenaufbereitungen und ein komplexeres Modell; unsere Rechnung ist eine bewusst einfache Beschreibung.

## Draft speaking notes (German)

Meine Frage war, wie sich der Zusammenhang zwischen Inflation und Arbeitslosigkeit in Deutschland, Frankreich und Spanien unterscheidet. Dafür verwenden wir jährliche Daten der World Bank von 2000 bis 2024. Ein Beispiel ist Deutschland: Über den ganzen Zeitraum ist die Korrelation leicht negativ. Für 2000 bis 2019 ist sie leicht positiv. Das zeigt die Abhängigkeit vom gewählten Zeitraum, aber keinen kausalen Effekt. Die Literatur, etwa Hindrayanto und Mitautoren, untersucht ähnliche Fragen mit deutlich komplexeren Modellen. Mein Projekt bleibt deskriptiv. Dieses kleine fachliche Beispiel bildet die Grundlage für den AI-Workflow, den ich jetzt erkläre.

## Lecture connection

M4: literature motivates and narrows the research question. M3: avoid overinterpretation of plausible outputs. Mapping: [course alignment](../../docs/course-alignment.md). Exact lecture slide numbers pending verification.

## Evidence paths

- [Research question](../../research/research-question.md), [methodology](../../research/methodology.md)
- [Frozen CSV](../../data/reference/reference_2000_2024.csv), [results CSV](../../data/results/analysis_results.csv)
- [Analysis validation](../../analysis/validation.md)
- [Source matrix](../../research/literature/exercise-2.3-source-matrix.md), [human-review record](../../research/literature/exercise-2.3-validation.md)
- Git: data `952b6d4`; analysis `4a28809`; literature `dc9fe71`.

## Missing assets / open questions

- Check readability of the question, result table and source footer together in Canva.
- Before final use, check the chosen literature sentence against its original page; use the existing verified finding, not a new theoretical claim.

## Estimated speaking time

65 seconds. Keep economic interpretation to this example.
