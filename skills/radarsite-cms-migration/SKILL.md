---
name: radarsite-cms-migration
description: Migration of legacy WordPress/InfinityFree content into the RADARSite CMS, including media recovery, featured images, taxonomy mapping, and content reconciliation. Use for legacy imports, media URL recovery, and CMS data migration. Dry-run and preservation by default; destructive migration steps require authorization.
---

# RADARSite CMS Migration

> RECONSTRUCTED: Authored during the RADAR operating-skills expansion; the original expansion package was not available. Validate against the live RADARSite codebase before relying on file paths.

## Purpose and scope

Move legacy WordPress/InfinityFree content and media into the RADARSite CMS (Next.js) safely: content extraction, sanitization, media recovery, featured-image restoration, taxonomy mapping, and reconciliation. Out of scope: infrastructure changes (radar-infrastructure-ops), new features (web-development).

## Triggers

Legacy WordPress export, InfinityFree import, missing featured images, media URL recovery, CMS data migration, article reconciliation, content sanitizer defects.

## Required inputs

Legacy export files or source access, target CMS repo state, mapping rules (taxonomy, media origin), and authorization boundary for writes.

## Procedure

1. Inspect the source export and the target codebase (e.g., sanitizers, migration scripts, media handling in the RADARSite repo) before any change.
2. Build an inventory: posts, media references, featured images, taxonomies; record counts and gaps as evidence.
3. Plan the migration: preserve the source data untouched; establish backups; make scripts idempotent (safe to re-run); define reconciliation checks.
4. Dry run first. Report counts migrated, skipped, and unresolved items.
5. Fix defects found during migration (e.g., unbalanced-tag sanitizer bugs causing hydration errors) with regression tests.
6. On explicit authorization, run the real migration; reconcile against the inventory; verify published image references resolve.

## Capability and permission checks

Verify access to the export files, the target repo, and any storage/CDN tooling actually needed. Never assume a connector or CLI exists.

## Safety boundaries and approval gates

Never delete or overwrite legacy source data. No destructive migration, production data changes, or bulk writes without explicit authorization. Keep migrations idempotent and reversible.

## Verification

Dry-run reports, reconciliation counts, and image-reference checks (every migrated reference resolves 200) are the evidence. A script exiting 0 is not migration correctness.

## Failure and escalation

On mapping gaps, corrupt media, or sanitizer defects: record under KNOWN DEFECTS in HANDOFF.md, propose the fix, escalate approval-requiring steps to the user.

## Handoff and continuity

Use the agent-continuation ledger: inventory, migration state, unresolved items, next step.

## Completion criteria

Migration executed under authorization with reconciled evidence, or a dry-run report plus blocker list delivered.
