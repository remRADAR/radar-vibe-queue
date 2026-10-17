# Source notes and curation

This public queue was curated from user-provided research notes, an existing skill inventory, and an existing RADARMeta skill package. It contains newly organized, generalized skills and queue prompts; it does not mirror the original source folder or include its separate application project archive.

## Expansion provenance (2026-10-17, feat/radar-operating-skills-expansion)

The eight RADAR operating skills (radar-editorial-publishing, radarsite-cms-migration, radar-infrastructure-ops, music-artist-success, radar-seo-knowledge-engineering, radar-connector-integration, radar-browser-qa-release, radar-brand-knowledge-continuity) and their queue prompts are **reconstructed**, not copied from the original expansion package: the supplied ZIP archive and its `docs/AUDIT_AND_GAP_ANALYSIS.md` / `README_INTEGRATION_NOTES.md` were not available in the implementing environment. Their content was authored from the expansion brief and existing repository conventions, and each file carries a RECONSTRUCTED marker. If the original package surfaces, reconcile against these files and preserve the better implementation. This same integration corrected the agent-continuation inventory gap: the skill existed and was routed but was missing from `queue.json` and `README.md`; it is now registered (including `queues/agent-continuation.md`).

## Source set summary

- Existing RADARMeta workflows for social intelligence, monitoring, community, trends, brand, and safety.
- An existing skill inventory spanning agent design, application engineering, code languages, debugging, AI-builder workflows, market intelligence, product study, and web engineering.
- Research notes on agent contracts, approval gates, financial source quality, application security, incident response, accessibility, and generated-code verification.
- Repeated application and vibecoding notes were consolidated rather than duplicated.

## Excluded materials

- A separate application project archive's product brief and route-convention notes informed a focused release-portal queue; its source code and archive were not copied into this repository.
- Original Drive files were left unchanged. This public repository contains no Drive links, folder IDs, or original source archives.

## Editorial decisions

- Implemented the root router and every specialist module as a standalone `SKILL.md` with `name` and `description` frontmatter, while retaining plain-Markdown queue prompts for agents without skill import.
- Preserved platform-agnostic workflows; skills do not grant service access or permissions.
- Used research as design input, not as a claim that the repo's instructions grant access to any service or that referenced external documentation was re-checked live.
- Kept financial research analytical by default and separated recommendations from trading actions.
