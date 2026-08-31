## Scope
Update `our-partners.html` and `parteneri.html` into the requested Team pages while retaining the existing visual language. Add Leadership and Transaction Team groups, create reusable selectable entries for Mihai Iordan, Vlad Florea, Teodor Banu, Adrian Tudor, and Diana Anghel, use the delivered team photos, add short and expandable full bios, and show PCF placeholders for missing LinkedIn and Diana contact information.

## Out of scope
Other site pages, global navigation links outside the two Team pages, portfolio/news/CSR content, backend behavior, and replacing the low-resolution source photos are out of scope.

## Open questions
LinkedIn URLs for the four new people and Diana Anghel's email address are not supplied. Diana's joining year, prior career, and education are also pending PCF confirmation; display `[PCF: data needed]` for these values.

## Steps
1. Replace the legacy single-person Team interaction markup and hidden Mihai Murgu entry with a two-group Team directory.
2. Add matching English and Romanian entries with supplied photos, roles, emails where known, biographies, and PCF placeholders.
3. Add shared directory styling and interaction logic so selecting a person updates the photo/details panel and expands the full biography without changing the existing page shell.
4. Verify that Mihai Murgu is absent, all five people appear in both language versions, placeholders are consistent, and the old Team labels are removed from visible page content.

## Risk flags
This changes a public page and its client-side interaction behavior. It does not touch shared backend paths, data migrations, or public APIs.
