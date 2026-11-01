# RADAR Core Brain — Architecture

> The RADAR Core Brain is `remRADAR/radar-vibe-queue` acting as the canonical knowledge and skill foundation of the RADAR AI ecosystem. Its consumer is **RADARMatrix** (`remRADAR/RADARMatrix`), the parent intelligence system. This document explains the system to any agent, developer, or contributor **without requiring the original conversation**.

## What it is

An agent that uses this repository can: understand a request, understand RADAR's own knowledge, discover its available capabilities, select the appropriate specialist skills, engineer structured prompts, coordinate execution, verify results, and capture durable continuity. It is an **intelligent orchestrator**, not a passive prompt list.

## Component map

```mermaid
flowchart LR
    T[User task] --> R[radar-intelligent-routing skill]
    K[(knowledge/ — canonical facts + gaps)] --> R
    R -->|capability discovery| REG[(registry/skills.json)]
    REG -->|verified available skills| S1[skills/… specialist skills]
    R -->|structured prompts| F[framework/prompt-engineering.md]
    F --> S1
    S1 --> V[Verification per skill criteria]
    V --> C[Continuity: HANDOFF.md + knowledge/ updates via governance]
  ```

| Layer | Location | Responsibility |
|---|---|---|
| Knowledge | `knowledge/` | Canonical organizational, project, technical, operational, strategic facts + explicit gaps |
| Skill registry | `registry/skills.json` | Machine-readable capability catalog: domains, triggers, inputs/outputs, dependencies, limitations, verification criteria, status |
| Intelligent router | `skills/radar-intelligent-routing` | Task interpretation, context retrieval, capability discovery, selection, prompt engineering, orchestration, verification, continuity |
| Prompt framework | `framework/prompt-engineering.md` | Reusable templates that turn requests into execution-ready specialist prompts |
| Specialist skills | `skills/*` | Domain execution, each independently importable |
| Queue prompts | `queues/*` | Copy-ready per-task recipes for agents without skill import |
| Governance | `docs/GOVERNANCE.md` + `tools/validate-registry.mjs` | Skill lifecycle, validation, duplicate/broken-reference detection, change control |
| Tests & CI | `tests/` + `.github/workflows/validate.yml` | Routing and regression tests; registry validation; executed for real in CI |

## How routing decisions are made

1. **Task interpretation** — extract outcome, domain, project, constraints, deliverables, success criteria.
2. **Context retrieval** — search `knowledge/` for decisions, prior implementations, constraints.
3. **Capability discovery** — read `registry/skills.json`; consider only `status: active` skills; **verify the skill's path actually exists** in the current environment. A skill mentioned in documentation but not present is reported unavailable, with the closest supported alternative named.
4. **Skill selection** — match on domains and triggers; select the **smallest effective combination**; never activate everything.
5. **Prompt engineering** — build the specialist prompt per the framework template (objective, context, responsibilities, inputs, deliverables, boundaries, dependencies, verification). Preserve original intent; no scope injection.
6. **Orchestration** — single specialist; parallel independents; sequenced dependencies; primary + support; or a human clarification/approval gate.
7. **Verification** — check outputs against the registry's per-skill verification criteria; route failed work to the right specialist or escalate.
8. **Continuity** — capture durable decisions per `docs/GOVERNANCE.md` (review-gated for authoritative facts).

Routing is **capability-driven**: the router reads the registry at run time. Adding a skill = registering it + passing validation; no router rewrite. If the registry is unavailable, the legacy static map in `skills/radar-vibe-queue` is the fallback.

## Knowledge maintenance

Knowledge documents live in `knowledge/` under the contract in `knowledge/README.md`: verified facts vs. history vs. decisions vs. proposals vs. unknowns, each with source and review date. Missing knowledge becomes a tracked gap in `knowledge/GAPS.md` — never speculation. Authoritative organizational facts require owner review before canonical change.

## How RADARMatrix consumes this

See `docs/RADARMATRIX-INTEGRATION.md` for the integration contract (registry as capability catalog, knowledge as context source, CI as quality gate).

## Design principles

Preserve valuable existing work; modular over monolithic; no duplicated knowledge; capability-driven not name-driven; prefer existing tools; traceable decisions; zero paid dependencies; zero npm dependencies; no secrets; never assume production authorization.
