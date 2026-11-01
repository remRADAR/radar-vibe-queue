# RADAR Core Brain — Migration and Adoption Guide

> How the repository moves from "portable prompt queue" (v1.2.0) to "canonical intelligence foundation" without losing anything that works. Last reviewed: 2026-11-01.

## Current state (audited 2026-11-01)

- `main`: 11 skill directories, 14 queue prompts, root router skill + static specialist map; `queue.json` v1.2.0 listing 10 skills (the `agent-continuation` skill was **not registered** — fixed by this migration) and 13 modules.
- Open PRs (both branch from `main` @ 8130958 and both touch `queue.json`, `README.md`, root `SKILL.md`, `queues/00-router.md`):
  - **PR #1** `feat/radar-operating-skills-expansion` — 8 new specialist skills + 8 queue prompts + `agent-continuation` registration (manifest v1.3.0: 22 modules / 19 skills). Content flagged RECONSTRUCTED.
  - **PR #2** `feat/website-audit-react-motion-engines` — 2 new engine skills + queue prompts (manifest: 12 skills / 15 modules).

## Target state

- `registry/skills.json`: capability-driven registry (12 active + pending entries), consumed by `skills/radar-intelligent-routing`.
- Canonical `knowledge/` with explicit gaps; governance, tests, and CI on every push/PR.
- Static router retained as fallback; the intelligent router supersedes it wherever file access exists.

## Adoption sequence

1. **Merge this foundation first** (branch `core-brain/foundation`) — it is additive: no existing skill deleted, no queue prompt removed, legacy routes preserved and covered by regression tests.
2. **Reconcile PR #1**: rebase onto the new `main`. Registration friction is now mechanical — for each new skill: validate frontmatter, add a `registry/skills.json` entry (`pending-review` → review → `active`), update `queue.json` + `README.md` counts, extend routing tests. Resolve the expected `queue.json`/`README.md`/`SKILL.md` conflicts in favor of the registry-consistent versions. Reconcile RECONSTRUCTED content against any recovered original expansion package before activating.
3. **Reconcile PR #2** the same way (note: `website-audit-engine` overlaps `web-development` and `full-stack-react-motion-design-engine` overlaps it as well — the governance review step exists exactly for this).
4. **Register any future skill via the lifecycle in `docs/GOVERNANCE.md`** — never by editing the router.

## Compatibility and risks

- **Duplicate router problem**: `radar-vibe-queue` (static) and `radar-intelligent-routing` (dynamic) coexist deliberately. Resolution rule: use the intelligent router when the runtime can read files; the static map is the documented fallback. Root `SKILL.md` drift was fixed by re-syncing it with `skills/radar-vibe-queue/SKILL.md`.
- **Import friction**: agents importing single skill directories see no `registry/` — unchanged behavior; the registry benefits whole-repo consumers (RADARMatrix first).
- **PR conflicts**: both open PRs pre-date the registry; they will conflict and must be rebased (step 2–3). Nothing in this migration merges, closes, or modifies them.
- **Public visibility**: this repository is public; knowledge documents follow the public-safety rule (`knowledge/README.md` rule 2). Owners should review the knowledge content in the PR before merge as the final gate.
- **Rollback**: everything is additive on one branch; revert the merge commit to return to v1.2.0 behavior. No production systems, credentials, or external state are touched.

## Definition of done for the foundation

1. Documented architecture ✔ (`docs/ARCHITECTURE.md`)
2. Canonical knowledge base with gaps ✔ (`knowledge/`)
3. Audited, preserved skill collection ✔ (audit recorded in PR; no deletions)
4. Machine-readable registry ✔ (`registry/skills.json`)
5. Intelligent routing skill ✔ (`skills/radar-intelligent-routing`)
6. Prompt engineering framework ✔ (`framework/prompt-engineering.md`)
7. Governance + validation ✔ (`docs/GOVERNANCE.md`, `tools/validate-registry.mjs`)
8. Routing + regression tests, executed in CI ✔ (`tests/routing.test.mjs`, `.github/workflows/validate.yml`)
9. RADARMatrix integration spec ✔ (`docs/RADARMATRIX-INTEGRATION.md`)
10. Migration guide ✔ (this document)
