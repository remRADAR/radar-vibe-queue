# RADARMatrix

> Purpose: canonical project intelligence for the parent intelligence system. | Owner: CZA OF REM | Last reviewed: 2026-11-01 | Status: verified as of 2026-11-01; repository facts drift — verify against the live repo

## Identity

- **[FACT]** RADARMatrix is the centralized intelligence and orchestration framework for RADARCharts by REM, becoming an **AI Development Operating System**. North Star: OUTCOME → CONTEXT → CAPABILITY → ROUTING → EXECUTION → VERIFICATION → CONTINUITY. (Source: `skills/radarmatrix` public mirror; owner directives)
- **[FACT]** Canonical repository: `remRADAR/RADARMatrix` (not RADARSite). (Source: owner knowledge base 2026-11-01)

## Architecture (as of 2026-10-28, main @ 93c1dc1)

- **[HISTORY]** v0.8 foundation on main @ `93c1dc1`: MCP gateway pipeline (auth → RBAC → workspace isolation → audit), 9 MCP tool contracts, deterministic plan-only agent router (1 coordinator + 8 specialist profiles, 11 skills), Brand Studio UI, JSON WorkspaceStore, zero npm dependencies. Supabase project retired.
- **[HISTORY]** **M1 pre-implementation review** completed 2026-11-01 (branch `phase1/discovery-and-foundation`, draft PR #1): recommended retiring `v0.9-production-hardening` (loose-provider security regression) and rewriting-then-retiring `v0.9-security-gate` (unrunnable test as authored); tests executed for real via GitHub Actions CI (Node 22, zero failures).
- **[HISTORY]** **M1a foundation consolidation** implemented and CI-verified 2026-11-01 (head `cf26383`): gateway converted to ESM and executed at runtime by tests; latent membership defect fixed; fail-fast test runner; 15 gateway integration-security tests on the real gateway; type-only adapter interfaces under `packages/contracts/`; CI green on Node 24.

## Standing doctrine (Nov 2026 directive)

- **[FACT]** Five target layers: **Matrix Core, Matrix IDE, Matrix Agents, Matrix Runtime, Matrix Deploy**.
- **[FACT]** Constraints: strict zero-budget; provider-independent runtime/agent adapters; never simulate execution; GitHub as source of truth; human approval gates for consequential actions; independence from RADARSite/Mistral/Manus as permanent dependencies.

## Open decisions (owner-owned — do not treat as settled)

- **[PROPOSAL]** Extend v0.8 in place; first agent = deterministic Repo Inspector over a read-only GitHub adapter; Cloudflare D1 storage at milestone M7. (Phase 1 build plan, awaiting owner confirmation)
- **[UNKNOWN]** v0.9 branch retirement, PR #1 merge, M2 production auth/membership design (explicitly deferred to owner).
- **[FACT]** Known limits after M1a: audit is console-only, tool execution is dev stubs, no TS type-check step in CI.

## Relationship to this repository

- **[FACT]** `remRADAR/radar-vibe-queue` is the canonical knowledge and skill foundation; RADARMatrix is the parent system that consumes it. Integration contract: `docs/RADARMATRIX-INTEGRATION.md`.
