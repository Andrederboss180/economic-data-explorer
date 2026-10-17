# Quellen pro Folie

Diese Datei wird parallel zum Deck gepflegt. Eine Quelle kommt erst hinein, wenn sie geprüft wurde.

| Folie | Behauptung oder Visual | Quelle | Fundstelle / Abrufdatum | Status |
|---:|---|---|---|---|
| 1 | Definition der Phillips-Kurve | Noch offen | – | Zu prüfen |
| 1 | Indikatordefinitionen | World Bank, genaue Seite offen | – | Zu prüfen |
| 2 | Daten und Kennzahlen | eigener Referenzdatensatz und Analyse | `analysis/validation.md`, Datenabruf 16.10.2026 | Referenzwerte vorhanden; finale Folienauswahl offen |
| 3 | Projektworkflow | Repository-Artefakte | fortlaufend | In Arbeit |
| früher Einschub | Ordnerstruktur und Rollen | tatsächliche Repository-Verzeichnisse, README und `docs/folder-structure.md` | Inventar 17.10.2026 | Anforderung/Ordner geprüft; eigene Folie noch nicht erstellt |
| 4 | Ideation-Prompt und Auswahl | eigener dokumentierter Chat | übernommen | Vorhanden |
| 4b | Source Matrix und Audit | Hindrayanto et al. (2019); Bulligan & Viviano (2017); Faber & Züllig (2025, SNB WP 12/2025) | Matrixseiten; zentrale Ergebnisse unabhängig auf PDF pp. 4, 20 und 3 geprüft | Minimalumfang abgeschlossen; kein vollständiger Human Audit |
| 5 | Endpoint, JSON-Struktur und Validierung | World Bank Indicators API und eigener Referenzabruf | sechs URLs, Metadaten und echter PowerShell-Screenshot; Abruf 2026-10-16 | Technisch validiert; Screenshot vorhanden |
| 6 | Codex/Git-Beispiel | lokales Repository und Git-Historie | `git status`, `git remote -v`, `git branch -vv`, Commits `5afcb89`, `dc9fe71`, `fa62b33` | Inhalt verifiziert; finaler Screenshot offen |
| 7A | Echter `0.1`-Fehler, Setup und Kapazität | V-003 bis V-005, `analysis/validation.md`, Commit `4a28809`; vorhandenes Kapazitätsbild | Berichte/Code/Git und statisches Bild am 17.10.2026 geprüft | Notizen vorbereitet; kein separater historischer Fehlercommit/Test-Screenshot |
| 7B | Menschliche Kontrolle und AI-Abhängigkeit | `ai-workflow/risk-register.md`, Website-Checkliste, Nutzerbericht im Prompt 08 | Stand 17.10.2026; historische Limitbilder getrennt | Dokumentationsreview abgeschlossen, Finalisierung beauftragt; kein vollständiger Human Audit |
| 8 | Lessons learned | eigener Projektverlauf | – | Noch offen |

Externe Fakten und Bilder erhalten später eine Quellenangabe in den Sprecher- oder Foliennotizen. Datencharts nennen Quelle und Datenstand sichtbar auf der Folie.

Schritt-7-Lecture-Bezüge beruhen auf nutzerbereitgestellten M3-/M8-Foliennummern und Lab-3-Aufgaben, nicht auf in Chat 4 gelesenen lokalen PDFs. Aktuelle Produktinformation: [OpenAI Pricing](https://learn.chatgpt.com/docs/pricing#what-are-the-usage-limits-for-my-plan), geöffnet am 17.10.2026; Abweichung zur historischen 5-Stunden-Anzeige im [Audit](../ai-workflow/risk-register.md) erläutert. Englische Prompts und Zeit-/Expertiseangaben stammen aus dem Projekt bzw. Nutzerbericht; keine Tokenmessung.

## Offizielle Links für den Literatur-Nachweis

- [Hindrayanto et al. (2019), DOI](https://doi.org/10.1016/j.econlet.2018.11.021)
- [Bulligan & Viviano (2017), open-access article](https://link.springer.com/article/10.1186/s40173-017-0087-z)
- [Faber & Züllig (2025), SNB Working Paper 12/2025](https://www.snb.ch/public/asset/en/www-snb-ch/publications/research/working-papers/2025/working_paper_2025_12/publications0_en/working_paper_2025_12.pdf)
