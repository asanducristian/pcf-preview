## Scope
Normalize mojibake in the website's HTML and JavaScript-visible content, preserving already-correct UTF-8 text and existing markup, links, and behavior.

## Out of scope
No content rewrites, layout changes, CSR implementation, or unrelated cleanup.

## Open questions
None. The intended text is recoverable from the repeated encoding pattern and the existing Romanian/English copy.

## Steps
1. Identify affected published HTML/JS files and confirm the corruption is stored in file content rather than only terminal output.
2. Apply a conservative, iterative mojibake repair only to corrupted character runs.
3. Scan the site for remaining sequences such as `Ã`, `Â`, `â`, `Ä`, and `Å`, and verify representative CSR, navigation, news, and service text.
4. Review the diff for accidental changes outside text encoding.

## Risk flags
This touches shared HTML content across public pages and therefore has broad visible impact. It is not a data migration and does not change public APIs. The repair must be conservative because files contain a mixture of corrupted and valid UTF-8 text.
