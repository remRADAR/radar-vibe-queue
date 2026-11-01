# RADAR Technical Platform Knowledge

> Purpose: canonical technical infrastructure and tooling facts. | Owner: CZA OF REM | Last reviewed: 2026-11-01 | Status: verified as of review; verify live state before acting

## GitHub

- **[FACT]** Organization: `remRADAR`. Public repositories include `radar-vibe-queue` (this repo, default branch `main`) and `RADARMatrix`; `RADARMusic` exists on `main`. (Source: repository audit 2026-11-01)
- **[FACT]** Git workflow doctrine: dedicated feature branches, focused reversible changes, validation runs, no merge/deploy without authorization. (Source: owner working preferences)
- **[FACT]** This repository follows zero-dependency, plain-Markdown portability: no runtime, no build step, no npm dependencies; validation and tests are plain Node ESM scripts run in CI.

## Deployment and hosting

- **[FACT]** RADARMusic is a Vite SPA designed for Vercel-style serverless endpoints. (Source: RADARMusic breakdown, Sep 2026)
- **[PROPOSAL]** Cloudflare D1 as RADARMatrix storage at milestone M7 — proposed, not decided (GAP-TEC-02).
- **[UNKNOWN]** Which RADAR properties run on Vercel/Cloudflare, DNS layout, environment and secret management. GAP-TEC-01. Never assume a deployment target; verify.

## Data and storage

- **[FACT]** RADARMatrix retired its Supabase project (v0.8); RADARMusic treats Supabase as optional (Auth, data model planned in Phase 1). (Sources: knowledge base 2026-11-01)

## Editorial and office tooling

- **[FACT]** Editorial pipeline runs in Notion (Editorial Command Centre + Editorial Pipeline database, article and Spotlight templates, Oct 2026). (Source: owner knowledge base)
- **[FACT]** Owner-held private sources (Google Drive, Gmail archives, corporate documents) are referenced by name only in this public repository. (See `knowledge/README.md` rule 2.)

## Integration and AI tooling

- **[FACT]** RADARMatrix v0.8 defines 9 MCP tool contracts behind a gateway (auth → RBAC → workspace isolation → audit). (Source: knowledge base 2026-11-01)
- **[FACT]** Skill consumption environments observed: Mistral Vibe (skills under `skills/`), Manus (skill import from GitHub paths), and generic agents (repository-as-context). (Source: `README.md` import instructions)

## Known limitations

- **[FACT]** RADARMatrix: tool execution still dev stubs; audit console-only; no TS type-check in CI (as of M1a, 2026-11-01).
