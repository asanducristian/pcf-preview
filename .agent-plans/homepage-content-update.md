## Scope
Update `index.html` and `acasa.html` with the homepage requirements from the livrabil specification: change the cumulative deal value to €2.5bn, replace relative experience wording with a founding-year placeholder, update the homepage positioning/About copy in English and Romanian, and use the requested `[PCF: ...]` format for unresolved PCF information.

## Out of scope
The separate About, Expertise, Team, Portfolio, News, CSR, PHP, and global navigation pages are not changed in this task.

## Open questions
None. Use `[PCF: FOUNDING YEAR]` for the founding year and `[PCF: data needed]` for any other missing PCF-provided information.

## Steps
1. Locate the homepage About and Expertise text in both language files.
2. Replace the English homepage copy with the approved specification text and requested placeholders.
3. Translate the corresponding homepage copy into Romanian while preserving the same facts and placeholders.
4. Search both files for the old €1.5bn and relative-years wording, then review the diff for unintended changes.

## Risk flags
This touches the public homepage content in both language paths, but does not change application logic, data, APIs, or server configuration.
