## Scope
Standardize the navigation and footer contact details for `stiri.html` and `news.html`: use `ECHIPĂ`/`Team` with the existing team-page links, use the standard English address on `news.html`, and ensure all Romanian page footer instances use the standard Romanian address.

## Out of scope
Do not change article content, page-specific active-state behavior, language-selector markup, or unrelated encoding issues.

## Open questions
None.

## Steps
1. Replace the partner navigation entry in both the menu and footer of `stiri.html` and `news.html` with the standard team entry used by the other pages.
2. Replace both English footer address instances in `news.html` with the standard multiline English address.
3. Audit Romanian page footer address instances and update any deviations to the standard Romanian address.
4. Search the finished files to verify the old navigation labels and non-standard addresses are absent from the targeted navigation/footer blocks.

## Risk flags
This touches shared navigation/footer markup duplicated across many public HTML pages. No data migrations or public APIs are involved; verify both the expanded menu and footer copies on each affected page.
