## Scope

Show each portfolio transaction's value beneath its transaction type on both the English and Romanian portfolio pages, including existing cards and cards generated from the livrabil data.

## Out of scope

No changes to transaction data, company lists, logos, translations, or the existing portfolio card interaction behavior.

## Open questions

None. The livrabil specifies the order as year, value, and transaction type, and the existing markup already contains the value block.

## Steps

1. Confirm the existing and generated portfolio card markup and identify the CSS rule hiding the value block.
2. Add the portfolio-specific visibility rule and value heading to the generated card template.
3. Verify both portfolio pages reference the shared renderer and that the rendered source contains the value structure.

## Risk flags

This touches a shared portfolio rendering path used by both language pages. It does not touch migrations or public APIs.
