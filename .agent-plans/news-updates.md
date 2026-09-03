## Scope

Update the public News pages `news.html` and `stiri.html` with the 12 approved 2022–2025 articles from NEWS-1, keeping both language versions synchronized and preserving the existing alternating Webflow article design. Remove the three Mihai Murgu articles required by NEWS-2.

## Out of scope

Do not redesign the News page, alter older article copy or dates covered by NEWS-3 HOLD, or change unrelated navigation/footer content.

## Open questions

None. Article titles, dates, publications, and links are supplied by the specification.

## Steps

1. Add a shared News enhancement script containing the 12 approved articles in English and Romanian.
2. Insert the new articles at the top in reverse chronological order using the existing light/dark article classes.
3. Remove the three Mihai Murgu article sections from the rendered page.
4. Load the script on both language pages before Webflow initialization.
5. Verify all 12 articles, dates, links, language-specific labels, and removals.

## Risk flags

This changes two public static pages and adds a shared client-side content script. It does not touch APIs, migrations, authentication, or external data writes.

