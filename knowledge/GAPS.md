# Knowledge Gap Registry

Explicit, tracked gaps in RADAR's canonical knowledge. A gap is a prompt to investigate and close — **never** an invitation to speculate. Each entry states what is missing, why it matters, and who can close it.

| ID | Gap | Why it matters | Can be closed by |
|---|---|---|---|
| GAP-ORG-01 | REM internal organizational structure (teams, roles beyond founder, reporting lines) | Routing and delegation need to know who owns what | Owner |
| GAP-ORG-02 | Formal mission/monetization statements (if any exist formally) | Strategic documents must not paraphrase informally expressed intent as official policy | Owner |
| GAP-PRJ-01 | **NairaLeap** — referenced in directives as a REM project; no verified documentation exists in any available source | Cannot be documented without manufacturing; may be pre-announcement or renamed | Owner |
| GAP-PRJ-02 | RADARSite technical architecture (stack, repo, hosting) beyond fragments; a CMS migration context implies a Next.js CMS and a legacy WordPress/InfinityFree source, but the architecture is undocumented here | Web engineering and migration work needs the actual codebase, not inference | Owner / repo access |
| GAP-PRJ-03 | RADARMusic production status since Sep 2026 (data-model Phase 1 outcome) | Status claims go stale silently | Owner |
| GAP-TEC-01 | Deployment infrastructure detail: which properties run on Vercel/Cloudflare, DNS layout, environment and secret management | Infrastructure work must not guess targets | Owner |
| GAP-TEC-02 | Database/storage decisions for RADARMatrix after the Supabase retirement (Cloudflare D1 at M7 is a *proposal*) | Storage milestone depends on owner confirmation | Owner (decision pending) |
| GAP-OPS-01 | Approved RADARCharts editorial house-style guide — the standards page is explicitly provisional; editorial rules are unverified | Editorial skill must not treat provisional rules as approved standards | Owner |
| GAP-OPS-02 | Formal release-management SOP beyond the artist intake flow and readiness checks | Multi-artist operations need a stable procedure | Owner |
| GAP-STR-01 | Monetization philosophy and business model details | Strategic documents must not infer business intent | Owner |
| GAP-STR-02 | Outcome of the GLITCH partnership pitch (sent 2026-10-03); relationship status unknown | Partnership decisions are owner-owned | Owner |

## Conventions

- Add a gap here the moment a task needs information that does not exist in the knowledge base.
- Close a gap by writing the verified fact into the relevant document, citing the source, then removing the row (or marking it closed with date and the closing document).
- A gap row may never be closed by inference, reconstruction, or plausible-sounding filler.
