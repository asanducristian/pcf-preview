## Scope
Normalize every card in `news.html` and `stiri.html` to the exact light and dark card structures supplied by the user, alternating light/dark while preserving each article's existing text, date, source, description, and URL.

## Out of scope
Do not change article ordering, article content, navigation, or unrelated page styling.

## Open questions
None.

## Steps
1. Extract each existing card's source/date, title, description content, article URL, and button text.
2. Rebuild each card using the supplied light or dark template based on its position.
3. Verify both pages contain 28 static cards, alternate consistently, and have no runtime news script dependency.

## Risk flags
This rewrites the public news-card markup on two pages. No API, database, or migration is involved; verify links and rendered contrast after deployment.
