---
name: radar-infrastructure-ops
description: Production infrastructure operations for RADAR properties across Vercel, Cloudflare, DNS, storage, and deployment configuration. Use for infrastructure diagnosis, configuration review, and deployment planning. Read-and-plan by default; production changes require explicit authorization.
---

# RADAR Infrastructure Ops

> RECONSTRUCTED: Authored during the RADAR operating-skills expansion; the original expansion package was not available. Verify current provider capabilities against live dashboards/APIs before acting.

## Purpose and scope

Diagnose, review, and plan changes to RADAR production infrastructure: Vercel deployments, Cloudflare zones/DNS, caching, storage/CDN, environment configuration, and related deployment plumbing. Out of scope: application code (web-development), content (editorial skills).

## Triggers

Vercel, Cloudflare, DNS records, SSL, caching, storage buckets, deployment configuration, environment variables, production incidents of an infra nature.

## Required inputs

Exact property/domain and environment, the observed symptom or change request, current configuration (read-only), and the authorization boundary.

## Procedure

1. Identify the exact target: domain, zone, project, record, or config key. Never act on a guessed target.
2. Read current state read-only; record exact values, timestamps, and where they came from.
3. Diagnose: separate observed facts from hypotheses; test one hypothesis at a time.
4. Propose the exact change: diff, affected records, expected effect, rollback plan, blast radius.
5. On explicit authorization, apply the minimal change; verify propagation and site behavior; keep the rollback ready.

## Capability and permission checks

Confirm the relevant dashboard/API/connector is actually connected and scoped. Do not print secret values or .env contents — reference keys by name only.

## Safety boundaries and approval gates

DNS changes, cache purges, environment variable changes, production config edits, and deploys are consequential: exact authorization required each time. Check whether a change touches systems owned by others (e.g., a Cloudflare DNS issue while Vercel records must remain untouched).

## Verification

Before/after values observed in the provider, propagation checks, and site health checks are the evidence.

## Failure and escalation

On uncertain ownership, partial visibility, or a failed change: stop, restore rollback if authorized, record state in HANDOFF.md, escalate with the exact blocker.

## Handoff and continuity

Log the change, rationale, evidence, and rollback state in the project ledger.

## Completion criteria

Diagnosis or change delivered with before/after evidence and an explicit statement of what remains unverified.
