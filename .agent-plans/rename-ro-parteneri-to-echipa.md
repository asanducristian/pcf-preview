+## Scope

Rename the Romanian navigation label from „PARTENERI” to „ECHIPA”, point all Romanian navigation instances to the clean URL `/echipa`, and route the Romanian team page through that URL. Add permanent redirects from `/parteneri` and `/parteneri.html` to `/echipa`.

## Out of scope

The English `Team` navigation and URL are unchanged. Existing Romanian body-copy uses of the word „parteneri” are not changed.

## Open questions

None.

## Steps

1. Identify all Romanian navigation instances and the current Apache/Nginx URL rules.
2. Update the duplicated Romanian navigation links and the Romanian team page metadata.
3. Add Apache compatibility rules and provide the corresponding Nginx rules for deployment.
4. Verify no Romanian navigation still points to `parteneri.html`, and validate redirects/configuration behavior.

## Risk flags

This changes shared navigation across many pages and public URLs. No data migration or dependency changes are involved; preserve 301 redirects for old links.

