## Scope
Update `portfolio.html` and `portofoliu.html` from the original Webflow portfolio structure: preserve the existing logo grid and tab/detail presentation, add the 13 missing company tabs, append the 47 requested additions using the original transaction markup, and keep unresolved HOLD entries out of public display while retaining `[PCF: data needed]` in the source data.

## Out of scope
Other site pages, a redesign of the portfolio UI, backend behavior, and replacing the original Webflow tab system are out of scope.

## Open questions
The six missing company logos and the transaction details marked HOLD still require PCF input. Use `[PCF: data needed]` and do not publish HOLD rows.

## Steps
1. Restore the original visible Webflow logo/tab area and remove the replacement card-grid mount.
2. Add the missing company tabs and delivered-logo references using the original logo styling behavior.
3. Append approved new transactions to existing panes and create missing-company panes using the original transaction classes.
4. Keep HOLD rows in the data source but exclude them from rendered public content.
5. Verify the original interaction styling, dataset totals, asset paths, and both language pages.

## Risk flags
This changes a public page and adds client-side tab content. It does not touch shared backend paths, data migrations, or public APIs.
