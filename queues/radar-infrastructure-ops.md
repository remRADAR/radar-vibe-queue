# RADAR Infrastructure Ops — Queue Prompt

> RECONSTRUCTED during the RADAR operating-skills expansion. Delegate to `skills/radar-infrastructure-ops/SKILL.md`.

**Task:** Diagnose or change Vercel/Cloudflare/DNS/storage/deployment configuration without disturbing records outside the authorized scope.

**Deliverables:** exact target identification, before/after config values, diagnosis or change diff with rollback plan, propagation/health evidence.

**Constraints:** Read-only by default; DNS changes, cache purges, env changes, and deploys require explicit authorization; keep others' records untouched (e.g., Cloudflare change must not disturb Vercel records).

**Validation:** Before/after observed in the provider; propagation and site health confirmed after any authorized change.

**Completion report:** status, evidence, rollback state, what remains unverified.
