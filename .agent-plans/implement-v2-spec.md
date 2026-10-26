## Scope
Implement the PCF v2 specification (`livrabil/new specs/Modificari_si_Completari_Site_PCF.docx` for EN, `..._RO.docx` for RO, both dated 15 Oct 2026) on the static site, on EN and RO page pairs, plus v1 items still open:
- All pages: phone +40 314 251 400 → +40 774 497 094 (visible text and `tel:` links).
- Home (`index.html` / `acasa.html`): new Summary, About Us, Expertise, Portfolio texts; "Since 2011" / "Din 2011"; remove NEWS section; CSR block points to the new CSR content instead of Arctic Ultra.
- About (`about.html` / `despre.html`): 4 new paragraphs; "Since 2011" / "Din 2011".
- Expertise (`expertise.html` / `expertiza.html`): new 3-paragraph intro; new Debt Restructuring section after Syndication & Club Loans; rewritten Sell Side and Buy Side; new LBO and MBO boxes.
- Team (`team.html` / `parteneri.html`): new titles, short and long bios for 5 people; email as icon; Diana's email (v1); LinkedIn icon only where a URL exists.
- News (`news.html` / `stiri.html`): commit the restored v1 NEWS-1 cards; English titles on `news.html`; add Sarmis Capital article; use v2 descriptions for Rodbun ×2, PetStar, Carmistin ×2.
- CSR (`csr.html` / `csr-ro.html`): new texts for Magic, Aurora, Ecoland; rebuild `csr-ro.html` to mirror the EN page.
- Portfolio (`js/portfolio-directory.js`, logos): grid order per the 23-client table; remove the 8 listed clients; add new clients; transactions newest first; 5 logos extracted from the .docx.
Source of truth is the Word files as written (bank names kept as in v2).

## Out of scope
- "Site Under Construction" page on pcf.ro (already done by the user).
- Old CSR campaign article pages (Arctic Ultra, Elbrus, Cursa pentru Educație): left as they are.
- Rewriting texts the spec does not supply (no invented RO translations of CSR org texts or Syndication text).
- Redesign, CSS refactors, encoding cleanup, `.htaccess` changes, deleting `our-partners.html`.
- Committing or deploying; the user commits after reviewing each step.

## Open questions
Sent to PCF in `livrabil/Intrebari_PCF_2026-10-20.md`; work proceeds with placeholders meanwhile:
- Q2 replace vs add for the 9 "actualizat" Portfolio clients — blocks final transaction lists for those clients.
- Q3 Chimcomplex, Evofarm, Romco System, Romelectro, Sigerom — keep or remove.
- Q4 truncated Aktor/Cargus sentence.
- Q5 whether transaction values are displayed.
- Q6 LinkedIn URLs; Q7 Sarmis logo; Q8 Sarmis/PetStar article links; Q9 RO Syndication text; Q10 RO CSR texts (add: RO CSR intro paragraph).
Placeholders are marked with `<!-- TODO PCF: ... -->` (HTML) or `// TODO PCF:` (JS).

## Steps
1. Commit the restored `news.html` / `stiri.html` (v1 NEWS-1 back, Murgu removed). Done when: both pages show 28 cards, no "Murgu", RO footer address correct.
2. Phone number across all HTML files. Done when: `grep "314 251 400\|40314251400"` returns nothing and footer/contact render the new number.
3. About EN + RO texts and "Since 2011". Done when: `about.html` and `despre.html` contain the 4 paragraphs and no founding-year placeholder.
4. Home EN + RO texts and "Since 2011" (Summary, About, Expertise, Portfolio blocks). Done when: texts match the docx and no placeholder remains.
5. Home: remove NEWS section and replace CSR block content. Done when: no NEWS block and no Arctic Ultra links on `index.html` / `acasa.html`; layout intact on desktop and mobile.
6. Expertise intro EN + RO. Done when: 3-paragraph intro with "Since 2011" on both pages.
7. Expertise: add Debt Restructuring section EN + RO, reusing the existing section markup. Done when: section appears after Syndication & Club Loans and its animation shows.
8. Expertise: rewrite Sell Side / Buy Side and add LBO / MBO boxes EN + RO. Done when: 4 boxes of similar length, layout holds at mobile width.
9. Team: titles and short/long bios EN + RO. Done when: all 5 profiles match the docx in both languages.
10. Team: email as icon, Diana's email, LinkedIn icon only for Mihai. Done when: 5 mail icons work, 1 LinkedIn icon, TODOs for the other 4.
11. News: English titles on `news.html` for the 12 v1 cards (v2 texts for the 5 it covers, own translation for 7). Done when: no Romanian titles on the EN page except proper names.
12. News: add Sarmis Capital card EN + RO, apply v2 descriptions to the 5 covered cards, PetStar link via Economedia. Done when: 13 new cards at the top, Sarmis without a link button and with a TODO.
13. CSR EN: update Magic, Aurora, Ecoland texts. Done when: `csr.html` matches the docx for those 3.
14. CSR RO: rebuild `csr-ro.html` with intro + 8 cards, RO texts for Magic/Aurora/Ecoland, EN texts with TODO for the other 5 and the intro. Done when: no Arctic/Elbrus content on `csr-ro.html` and card layout matches EN.
15. Portfolio logos: extract the 5 logos from the docx into the logo folder used by `portfolio-directory.js`. Done when: files exist and load.
16. Portfolio data: reorder to the 23-client table, remove the 8, add new clients with v2 transactions (EN + RO descriptions, newest first); Sarmis as text tile. Done when: grid shows 23 clients (+ the 5 undecided until Q3) in the right order and clicking each opens sorted transactions.
17. Portfolio "actualizat" clients: apply v2 lists once Q2/Q4/Q5 are answered. Done when: each of the 9 clients matches the confirmed rule.
18. Final pass: search all pages for "Murgu", "FOUNDING YEAR", "314 251 400", "Arctic" on Home, and list remaining `TODO PCF` markers for the client. Done when: only the expected TODOs remain.

## Risk flags
- Shared paths: header, menu and footer markup is duplicated in ~29 HTML files; step 2 edits all of them — verify with a search, not by eye.
- Webflow interactions: copied blocks carry `data-w-id` animation hooks; new blocks (steps 7, 8, 12, 14) must be checked in the browser for invisible or non-animating elements.
- `js/portfolio-directory.js` drives both Portfolio pages; a syntax error breaks both — check the browser console after steps 16–17.
- No data migrations and no public APIs. Public URLs unchanged.
- Commit history: commit `5536677` previously overwrote news work from an older copy — commit after each step and start each step from the current working tree.
