---
name: radar-editorial-publishing
description: Editorial workflow and publication-readiness for RADARCharts content moving from Notion drafts through review to publish. Use for draft triage, editorial review, publication readiness checks, and editorial pipeline coordination. Review and preparation by default; publishing requires explicit authorization.
---

# RADAR Editorial Publishing

> RECONSTRUCTED: Authored during the RADAR operating-skills expansion; the original expansion package was not available. Adjust freely to match live editorial practice.

## Purpose and scope

Move RADAR editorial content from Notion draft through review to a publish-ready state, with clear readiness evidence and an explicit approval gate before anything goes live. Scope: editorial quality, readiness checks, pipeline coordination. Out of scope: code changes (web-development), publishing execution without authorization.

## Triggers

Notion editorial drafts, publication readiness, editorial review, content pipeline, draft triage, copy readiness for RADARCharts articles.

## Required inputs

Draft ID/URL in Notion, target publication and date, style/taxonomy references, and the reviewer/authorizer identity.

## Procedure

1. Verify the draft exists, its current state, and last edit; record the source and timestamp.
2. Read the draft against RADAR editorial criteria: headline, structure, factual claims, sourcing, media, taxonomy, and SEO metadata (coordinate with radar-seo-knowledge-engineering for structured data).
3. Classify each issue as blocking, recommended, or optional. Distinguish quoted/FACT vs claim needing a source.
4. Produce a publication-readiness report: ready / not ready + exact blocking items.
5. On explicit authorization only, execute the publish step via a verified connector; confirm the live state afterward.

## Capability and permission checks

Confirm a Notion connector is actually available and scoped to the draft before claiming to read or publish. A written procedure is not an installed capability.

## Safety boundaries and approval gates

Publishing, scheduling, deleting, or modifying live content requires exact authorization with the exact content identified. Never publish unverified claims or unreferenced quotes. Do not expose draft content publicly.

## Verification

Draft state observed via the connector; readiness report lists every blocking item resolved before "ready". Publication confirmed only by observing the live URL.

## Failure and escalation

If the draft is missing, the connector fails, or a factual claim cannot be sourced: stop, mark BLOCKED or NOT READY with the exact reason, and escalate to the user.

## Handoff and continuity

Record draft ID, review findings, decision, and next step in the project HANDOFF.md (agent-continuation protocol).

## Completion criteria

Readiness report delivered with evidence, or publication executed and verified under explicit authorization.
