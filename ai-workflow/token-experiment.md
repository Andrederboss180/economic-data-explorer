# Optionales Token- und Prompt-Experiment

Dieses Experiment ist eine kleine Ergänzung zu M1/M2. Es darf nicht vom Kernprojekt ablenken.

**Status am 17.10.2026:** Nicht durchgeführt, auch kein kontrollierter Englisch-/Deutsch-Tokenvergleich. Englische Codex-Aufträge sind eine Kommunikationswahl. Tokenbedarf hängt von Tokenizer und konkretem Text ab; keine gemessene Ersparnis oder generelle Sprachregel. Schritt 7 ergänzt keine Experimente. [Reflexion](risk-register.md).

## Frage

Verbessert ein strukturierter Prompt die Brauchbarkeit einer Codeantwort ausreichend, um den zusätzlichen Kontext zu rechtfertigen?

## Vergleich

**Kurzer Prompt**

```text
Write code to calculate a correlation.
```

**Strukturierter Prompt**

Der spätere Prompt soll Datentypen, fehlende Werte, mathematische Definition, Rückgabewert, Fehlerfälle und Tests nennen.

## Zu messen

- tatsächliche Tokens, falls das Werkzeug Nutzungsdaten ausweist
- sonst klar als Schätzung gekennzeichnete Tokenzahl
- Zahl notwendiger Rückfragen oder Korrekturen
- bestandene Tests
- manuell gefundene Probleme

## Entscheidungsregel

Wir führen das Experiment nur durch, wenn die verwendeten Werkzeuge die Daten ohne großen Zusatzaufwand liefern. Die World-Bank-API hat mit LLM-Tokens nichts zu tun; diese beiden Themen werden getrennt erklärt.
