# RADARSite CMS Migration — Queue Prompt

> RECONSTRUCTED during the RADAR operating-skills expansion. Delegate to `skills/radarsite-cms-migration/SKILL.md`.

**Task:** Import/recover legacy WordPress/InfinityFree content, media, and featured images into the RADARSite CMS with reconciliation.

**Deliverables:** source inventory, migration plan (idempotent, reversible), dry-run report, defect fixes with regression tests, and post-migration reconciliation.

**Constraints:** Never delete/overwrite source data; dry run before real migration; destructive steps and production writes require explicit authorization.

**Validation:** Reconciliation counts match inventory; migrated image references resolve; sanitizer-type changes covered by regression tests.

**Completion report:** status, counts (migrated/skipped/unresolved), evidence, remaining risks, next approval gate.
