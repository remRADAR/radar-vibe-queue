# RADARMusic (release portal)

> Purpose: canonical project intelligence for the RADARMusic product. | Owner: CZA OF REM | Last reviewed: 2026-11-01 | Status: facts verified Sep 2026 — production status may have moved; see GAP-PRJ-03

## Product

- **[FACT]** Product: an artist pastes a Spotify/Apple Music URL; the resolver normalizes metadata and generates official store destinations, distinguishing `verified` sources from `needs-review` destinations. Includes authenticated `/dashboard` (Supabase Auth, `creator`/`admin` roles), analytics events, and Resend/Twilio notification channels. (Source: RADARMusic master project breakdown, verified Sep 2026)
- **[FACT]** Repository: `remRADAR/RADARMusic`, branch `main`, commit 82cc2d9 ("Improve Spotify release metadata matching") as of Sep 2026. Vite SPA with Vercel-style serverless endpoints and optional Supabase services. (Source: same)

## Known limitations (as of Sep 2026)

- **[FACT]** Not production-complete as a multi-tenant publishing platform: missing persistent release records, confirmed production Supabase, release ownership management, server-rendered published pages, and full provider adapters.

## Roadmap

- **[FACT]** Phase 1 is "make the data model real": Supabase project + `releases`, `release_destinations`, `creator_release_access`, `published_pages` tables. (Source: same)
- **[FACT]** A focused build prompt exists in this repository: `queues/radar-release-portal.md` (pairs with `skills/web-development`).

## Gaps

- **[UNKNOWN]** Outcome of Phase 1 and current production status. GAP-PRJ-03.
