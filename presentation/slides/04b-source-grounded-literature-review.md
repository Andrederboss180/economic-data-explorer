# Presentation notes: Source-grounded literature review

Diese Notizen bereiten einen möglichen Workflow-Nachweis nach der Ideation-Folie vor. Die genaue Foliennummer wird erst beim finalen Deck festgelegt.

## Kernaussage

AI beschleunigte die Strukturierung der Literatur. Der eigentliche Aufwand lag im Zurückführen jeder Aussage auf eine konkrete PDF-Seite und im Trennen direkter Quellenbelege von eigener Synthese.

## Empfohlener Titel

**Source-grounded literature review**

## Exakter Folientext auf Englisch

**Exercise 2.3**

Three papers were summarized in a 15-cell source matrix.

**Preliminary AI-assisted audit**

- 12 cells had direct support in the PDFs
- 3 cells were cross-paper comparisons
- 0 fabricated cells detected

**Human review status**

- 3/3 headline findings checked on original PDF pages 4, 20 and 3
- 3/3 comparisons accepted as analytical interpretations
- No complete human cell-by-cell audit claimed

**Our research question**

Annual CPI inflation and unemployment in Germany, France and Spain, 2000–2024, using a simple descriptive comparison.

Kleine Quellenzeile: `Hindrayanto et al. (2019); Bulligan & Viviano (2017); Faber & Züllig (2025, SNB WP 12/2025)`

## Visuelle Idee

Eine zusammenhängende Prüfkette statt einzelner Karten:

1. Links ein kurzer Ausschnitt der AI-Matrix mit markierter Zelle.
2. In der Mitte die zugehörige PDF-Seite mit hervorgehobener Fundstelle.
3. Rechts die AI-Audit-Bilanz `12 direct support / 3 synthesis / 0 detected fabrication`.
4. Unten eine einzelne Zeile zur Abgrenzung der eigenen Forschungsfrage.

Die Fußnote `AI-assisted audit; human verification covered 3 headline findings and 3 analytical comparisons, not all 15 cells` muss direkt bei den Zahlen stehen.

## Sprechertext auf Englisch

> Lab 4 asks us to move from AI-generated literature summaries to a source-grounded matrix. I gave the model the three papers and requested five fields for each paper. The AI-assisted audit found direct PDF support for twelve factual cells. The remaining three cells compare the papers and therefore represent synthesis rather than a statement from one source. The audit detected no fabricated cells. I then checked the three headline findings myself on PDF pages four, twenty and three, and all three were supported. I also accepted the three comparisons as reasonable analytical interpretations. This does not mean that I independently re-audited all fifteen cells. The comparison clarified the scope of my own question: annual CPI inflation and unemployment for three countries with a simple descriptive method, not a replication of a structural Phillips-curve study.

## Verification burden, einfach erklärt

Die Matrix hatte nur drei Zeilen, erzeugte aber bereits 15 einzelne Prüfentscheidungen. Für eine saubere Prüfung mussten wir pro faktischer Zelle:

- das passende Paper und die richtige Version bestimmen
- die Aussage auf einer PDF-Seite lokalisieren
- Daten, Methode und Ergebnis getrennt prüfen
- direkte Paper-Aussagen von Cross-paper-Synthesen unterscheiden
- die menschliche Prüfung als eigenen Status führen

## Wie sich unsere Frage von den Papers unterscheidet

| Quelle | Wichtigster Unterschied zum Projekt |
|---|---|
| Hindrayanto et al. (2019) | Quartalsdaten, HICP-Trend-/Zykluskomponenten und Unobserved-Components-Modell bis 2017 |
| Bulligan & Viviano (2017) | Lohninflation, Zeitvariation und zusätzliche italienische Mikrodaten bis 2015 |
| Faber & Züllig (2025) | Dienstleistungspreise, Arbeitslosigkeitsgaps und nichtlineares 18-Länder-Panel bis 2024 |
| Eigenes Projekt | Jährliche CPI-Inflation und Arbeitslosigkeit, drei separate Länder, einfache deskriptive Statistik |

## Präsentationsgrenze

Die Aussage „0 fabricated cells detected“ darf nie ohne den Zusatz „AI-assisted audit“ gezeigt werden. Sie belegt das Ergebnis dieser Prüfung, nicht die generelle Zuverlässigkeit von GPT-6 und nicht eine vollständige menschliche Validierung aller 15 Zellen. Die separate menschliche Prüfung bezieht sich nur auf die drei Hauptergebnisse und die Einordnung der drei Vergleiche.

## Nachweise

- `research/literature/exercise-2.3-source-matrix.md`
- `research/literature/exercise-2.3-validation.md`
- `ai-workflow/prompts/02-literature-source-matrix.md`
- `archive/Lab4 literature review original chat.txt`
