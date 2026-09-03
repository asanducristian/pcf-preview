# Mandatory redesign completion plan

## Scope

Complete the approved (non-HOLD) requirements in `livrabil/PCF_Specificatie_Modificari_Site.html`, beginning with shared navigation/routing and global copy, then completing the CSR redesign, and finally hardening the existing Team, Portfolio, and News implementations. PCF-dependent HOLD items remain visibly marked and are not invented or published.

## Out of scope

- Supplying missing PCF decisions or personal data (founding year, Diana's contact details, LinkedIn URLs, transaction confirmations, article dates).
- Rewriting unrelated legacy CSR articles or correcting unrelated historical text outside the specified pages.
- Rebuilding the site framework or migrating the static site to a different CMS/framework.

## Open questions

- Confirm that `/team/` should resolve to the existing `our-partners.html` content, with `/our-partners/` permanently redirected to it, rather than renaming the physical file.
- Confirm whether the final delivery must work with JavaScript disabled. The current Portfolio and News additions are injected at runtime; if static HTML is required, those entries must also be rendered into the source files.

## Steps

1. Update the shared English and Romanian navigation labels and links so every page consistently exposes Team and the correct About page; verify no stale `our partners` navigation labels remain.
2. Add the Team routing behavior: make `/team/` resolve correctly and add a permanent 301 from `/our-partners/`; verify both language pages and old external links.
3. Replace the footer address consistently across all English and Romanian pages with the approved Biharia Office Building address.
4. Apply the approved About correction from 1.5 to 2.5 billion euros, then verify the About page is reachable through the navigation and contains no broken required route.
5. Replace both CSR pages with the approved organization-card structure, introductory copy, supplied logos, and approved descriptions; leave the three confirmation-dependent descriptions and Ecoland explicitly marked as pending.
6. Verify the Team implementation against the required five-person grouping, card order, photos, bios, email fields, LinkedIn placeholders, and absence of phone numbers; record the remaining PCF-dependent fields separately.
7. Verify Portfolio against the required 38 companies and 98 transactions, including existing versus added versus HOLD states, missing-logo placeholders, state-guarantee wording, and bilingual page behavior.
8. Verify News runtime behavior on both language pages: 12 new articles, ordering, one link per article, removal of all three Mihai Murgu articles, and equal article counts; keep pre-2022 dates pending PCF confirmation.
9. Run a final static-link and placeholder audit across all HTML, JavaScript asset references, and the approved requirement IDs; manually smoke-test navigation, Team selectors, Portfolio tabs, and News/CSR rendering.

## Risk flags

- Shared/critical paths: yes. Navigation, footer, `.htaccess`, and shared page templates affect the entire site and need broad regression checks.
- Data migrations: no. This is a static-site content and routing change.
- Public APIs: yes, in the practical sense of public URLs. The `/team/` route and `/our-partners/` 301 must preserve external links and avoid 404s.
