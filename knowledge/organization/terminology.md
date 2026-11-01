# RADAR Terminology and Naming Conventions

> Purpose: canonical vocabulary across all RADAR systems and skills. | Owner: CZA OF REM | Last reviewed: 2026-11-01 | Status: verified as of review

## Brand terms

- **[FACT]** **REM / Royal Empire Management** — the entertainment company (see `organization/identity.md`).
- **[FACT]** **CZA OF REM** — the owner's professional name.
- **[FACT]** **RADARCharts by REM** — the music-discovery and chart platform.
- **[FACT]** **REMily** — the owner's affectionate term for artists/partners in correspondence ("Greetings REMily"). (Source: owner correspondence patterns, verified 2026-11-01)
- **[FACT]** **"going ON THE RADAR"** — dual use: the live platform, and the team's phrase for scheduling an artist's feature after assets are received. (Source: owner correspondence patterns, verified 2026-11-01)

## System and product terms

- **[FACT]** **RADARMatrix** — the centralized intelligence and orchestration framework and (in progress) AI Development Operating System for RADARCharts by REM. See `projects/radar-matrix.md`.
- **[FACT]** **RADAR Core Brain** — this repository's role: the canonical knowledge and skill foundation that RADARMatrix consumes. See `docs/ARCHITECTURE.md`.
- **[FACT]** **RADARMe** — AI-powered release intelligence app ("The iNDUSTRY Kit"). See `projects/radarme.md`.
- **[FACT]** **RADARMusic** — artist release portal product. See `projects/radarmusic.md`.
- **[FACT]** **REMBRANE** — the owner's internal brain/knowledge artifact, maintained privately; name recorded here for continuity, contents not public. (Source: owner-maintained knowledge base, verified 2026-11-01)

## Engineering vocabulary

- **[FACT]** **verified vs needs-review** — match-certainty labels in the RADARMusic resolver: the submitted Spotify/Apple source is verified; other store destinations are search links requiring review. (Source: RADARMusic project breakdown, verified 2026-11-01)
- **[FACT]** **Report vocabulary** — FACT/VERIFIED, OBSERVATION, INFERENCE/HYPOTHESIS, UNKNOWN/NOT VERIFIED, RECOMMENDATION, ACTION COMPLETED, as defined in `QUEUE.md`. All RADAR outputs use these labels.
- **[FACT]** **HANDOFF ledger** — the cross-agent continuity ledger defined by `skills/agent-continuation`.
- **[UNKNOWN]** **MERMAT** — corporate document type held with GINIVICK papers; exact meaning unverified. See `GAPS.md`.

## Naming conventions

- **[FACT]** Skill directories use kebab-case: `skills/<name>/SKILL.md`; RADAR-specific skills are prefixed `radar-`.
- **[FACT]** Queue prompts are kebab-case Markdown files under `queues/`; router prompt is `00-router.md`.
- **[FACT]** Products are CamelCase with RADAR prefix where brand-bearing: RADARMatrix, RADARMusic, RADARMe, RADARSite.
