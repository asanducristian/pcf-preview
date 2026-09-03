+## Scope

Update both `news.html` and `stiri.html` with the 12 NEWS-1 articles at the beginning, using the specification's exact Romanian titles on both language pages; remove the three NEWS-2 Mihai Murgu articles; and add visible NEWS-3 date placeholders in the form `[PCF: date needed]` to existing undated articles without sorting or reordering them.

## Out of scope

No translation or rewriting of the 12 supplied titles. No changes to the HOLD decision beyond displaying date placeholders. No unrelated news-copy cleanup or external-link validation.

## Open questions

None. The requested placeholder will use `[PCF: date needed]` for existing articles whose dates were not supplied.

## Steps

1. Read the current news-card structure and identify the three exact removal targets.
2. Add the 12 specification entries, with their supplied dates, publications, URLs, and Romanian titles, to both pages in the first position.
3. Remove the three Mihai Murgu cards from both pages.
4. Add visible date placeholders to the remaining legacy cards without changing their order.
5. Verify article counts, target removal, first-position insertion, placeholder coverage, and HTML/diff integrity.

## Risk flags

This changes public editorial content and shared English/Romanian news presentation. No data migration or dependency changes are involved; preserve all supplied external URLs and existing card layout.

