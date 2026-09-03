## Scope
Remove the runtime `js/news-updates.js` dependency from `news.html` and `stiri.html`, keeping the 12 requested news articles as static HTML cards in each page.

## Out of scope
Do not change the article list, URLs, card copy, navigation, or unrelated site JavaScript.

## Open questions
None.

## Steps
1. Remove the `news-updates.js` script tag from both news pages.
2. Verify the 12 article cards remain present directly in both HTML files and that no Mihai Murgu cards are restored dynamically.
3. Verify each page has one document, 28 cards, and alternating light/dark card sections with matching contrast classes.

## Risk flags
This changes two public page entry points but does not change an external API, database, or migration. Browser behavior should be validated through static HTML counts and a hard refresh.
