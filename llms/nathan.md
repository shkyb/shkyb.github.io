# Nathan — Case Study

**URL:** https://shakib.design/projects/nathan

## Summary

An AI-powered mobile app designed to reduce household food waste by learning purchasing patterns and quietly rewriting shopping lists. Academic project at Politecnico di Milano, course: Envisioning AI Through Design. Sixteen weeks, team of five.

**Shakib's role:** AI/UX hybrid — AI & data architecture lead + UI design & design system lead.

---

## Problem

Italian households waste an average of 65 kg of food per person per year. The root cause is not laziness or carelessness — it is a structural gap between what people plan to buy, what they actually purchase, and what they consume before it expires. Existing apps require manual input and conscious behaviour change. Nathan's premise: the AI should do the work, not the user.

---

## AI Architecture (Shakib's design)

- **Receipt OCR pipeline** — Mindee OCR for digitising grocery receipts; string alignment and fuzzy matching for SKU normalisation across retailers
- **Classification layer** — categorises items (produce, dairy, packaged, etc.) to weight forecasting sensitivity
- **LSTM forecasting model** — learns individual household purchasing patterns over time; progressively rewrites the next shopping list to reduce over-purchasing
- **LLM fallback** — ChatGPT query for unmatched or ambiguous product names outside the classifier's confidence threshold
- **Data fail-safes** — designed for cold-start scenarios (new users with no history) and data sparsity

---

## UX & Design

- Applied UX psychology principles — Miller's Law (chunking), Hick's Law (choice reduction), Fitts's Law (target sizing), Selective Attention — to wireframe all core flows
- Designed the complete design system from scratch: DM Sans typography, colour palette, iconography, **33 reusable/customisable components**
- Produced **81 hi-fi Figma screens** across onboarding, home, shopping list, receipt scanning, and waste tracking flows
- Ran usability testing across three methods: **5-second test**, **SEQ**, **PrEmo** — with 4 participants. Redesigned the home screen and onboarding copy in response.

---

## Outcomes

- Faculty recognition from Enrico Priora (UX/UI faculty lead) on design quality
- 38-page design report, two presentation decks, interactive Figma prototype (81 screens), AI architecture diagram
- Dominant PrEmo emotion: satisfaction

---

## Tools & Methods

Figma, FigJam. Concepts: LSTM forecasting, OCR pipelines (Mindee), LLM fallback architecture, fuzzy matching, UX psychology principles. Testing: 5-second test, SEQ, PrEmo.

---

## Team

Shakib Alipour (AI architecture + design system), Filippo Randon, Marjan Mehrabi, Dilara Tanriöven, Erika Caffo. Politecnico di Milano, Mar–Jun 2024.
