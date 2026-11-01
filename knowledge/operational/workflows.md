# RADAR Operational Knowledge

> Purpose: canonical standard operating procedures and working standards. | Owner: CZA OF REM | Last reviewed: 2026-11-01 | Status: verified as of review

## Documentation and reporting standards

- **[FACT]** All RADAR outputs use the standard report vocabulary: FACT/VERIFIED, OBSERVATION, INFERENCE/HYPOTHESIS, UNKNOWN/NOT VERIFIED, RECOMMENDATION, ACTION COMPLETED. (Source: `QUEUE.md`)
- **[FACT]** Cross-agent continuity is ledger-based: every multi-session project keeps a `HANDOFF.md` per the `skills/agent-continuation` protocol; the filesystem is the source of truth over the ledger. (Source: `skills/agent-continuation/SKILL.md`)

## Git and change management

- **[FACT]** Doctrine: dedicated feature branches, focused reversible changes, validation runs before claiming results, no merge/deploy/delete on production without explicit authorization. (Source: owner working preferences; `AGENTS.md` operating contract)
- **[FACT]** PREPARE/EXECUTE separation: show the exact action/payload before consequential, hard-to-reverse actions unless already authorized or covered by a dedicated approval flow. (Source: `AGENTS.md`)

## Artist intake workflow

- **[FACT]** Standard flow: artist emails press assets → team confirms receipt, reviews assets → artist scheduled to go "ON THE RADAR" → release featured on the blog and playlists. (Source: owner correspondence patterns, verified 2026-11-01)

## Editorial pipeline

- **[FACT]** Editorial operations run in Notion: an Editorial Command Centre and an Editorial Pipeline database with a clean article template and a visual "Spotlight" template (Oct 2026); published artist features exist (e.g., DESIGNER, La Vida, Hustler coverage). (Source: owner knowledge base)
- **[UNKNOWN]** The approved house-style guide: the article-writing standards page is explicitly provisional; editorial rules are unverified (GAP-OPS-01). Treat editorial rules as provisional until owner-approved.

## Release management and QA

- **[FACT]** Release readiness practice: inventory release assets, check metadata completeness (ISRC/UPC, splits, PRO registration), verify rights chain, mark each item VERIFIED or UNKNOWN, then a dated readiness report — defined in pending skill `music-artist-success` (PR #1, reconstructed; confirm against live practice). 
- **[FACT]** Release verification practice: browser QA with pass/fail evidence per flow, console-error assertions, and explicit VERIFIED/PARTIALLY_VERIFIED/BLOCKED status — defined in pending skill `radar-browser-qa-release` (PR #1, reconstructed).
- **[UNKNOWN]** Formal release calendar and sign-off authority. GAP-OPS-02.

## Security and secrets

- **[FACT]** Never expose or store passwords, API keys, access tokens, or credentials; secrets stay server-side. (Source: core law, all skills)
