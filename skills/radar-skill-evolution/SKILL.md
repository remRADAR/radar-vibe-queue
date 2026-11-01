---
name: radar-skill-evolution
description: Keep the RADAR skill collection up to date. Audits skill freshness from registry/skills.json, researches developments and future events per domain using dated sources, drafts skill upgrades on branches, and routes them through governance as draft PRs. Proposes only - the owner authorizes merges, activations, and status changes. Use for skill upgrades, freshness audits, technology watch, and research-driven improvements.
---

# RADAR Skill Evolution

The Core Brain's self-improvement loop: audit freshness, research what changed, propose upgrades - never self-merge.

## Workflow

1. **Snapshot**: read `registry/skills.json`. Build a freshness table: per skill - version, `governance.last_reviewed`, days since review. Tiers: FRESH < 30 days, AGING 30-90, STALE > 90 (CI warns past 180).
2. **Prioritize**: stale skills first, then high-churn domains (security, platforms, APIs), then owner-flagged skills.
3. **Research**: per skill or domain, search official docs, changelogs, release notes, security advisories, and news. Every claim cites a dated source; prefer primary sources; unknown stays unknown (record in `knowledge/GAPS.md`).
4. **Impact analysis**: does the finding change the skill's steps, triggers, dependencies, limitations, or verification criteria? Minor drift - patch; new best practice - new section; obsolete workflow - rewrite proposal.
5. **Draft upgrades**: on a dedicated branch - bump the skill version, update `SKILL.md`, add a dated [HISTORY] note with sources, update the registry entry (version, `last_reviewed`, triggers if terminology shifted), and run `node tools/validate-registry.mjs` and `node tests/routing.test.mjs`.
6. **Governance gate**: open a draft PR with a research digest (findings, sources, dates, changes). The owner reviews, merges, and activates. Evolution never merges, activates, or deprecates skills itself.
7. **Record gaps**: research that found nothing updates `knowledge/GAPS.md`; never manufacture content.
8. **Cadence**: run weekly or on a per-domain rotation from an agent runtime with scheduled tasks (for example Vibe scheduled tasks). The repository does not run autonomously; automation lives in the runtime, authority stays with the owner.

## Red lines

- Propose only: no merge, activation, or deprecation without owner authorization.
- No fabricated facts: every claim carries a source and date.
- Forecasts about future events are [PROPOSAL] with rationale, never [FACT].
- Every upgrade PR keeps registry validation and routing tests green.
