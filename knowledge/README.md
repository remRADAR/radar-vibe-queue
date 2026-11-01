# RADAR Canonical Knowledge Base

The authoritative, version-controlled knowledge foundation for the RADAR AI ecosystem. `remRADAR/RADARMatrix` (the parent intelligence system) and any RADAR agent consume these documents as canonical context before executing work routed by `skills/radar-intelligent-routing`.

## Architecture

| Domain | Document | Covers |
|---|---|---|
| Organizational identity | [`organization/identity.md`](organization/identity.md) | RADARCharts by REM, Royal Empire Management, brand positioning, objectives |
| Terminology | [`organization/terminology.md`](organization/terminology.md) | Brand and engineering vocabulary, naming conventions |
| Project intelligence | [`projects/`](projects/) | RADARMatrix, RADARMusic, RADARMe, RADARSite, ON THE RADAR |
| Technical knowledge | [`technical/platforms.md`](technical/platforms.md) | Repositories, environments, deployment, storage, integrations |
| Operational knowledge | [`operational/workflows.md`](operational/workflows.md) | SOPs, editorial pipeline, artist intake, release management, documentation standards |
| Strategic knowledge | [`strategic/vision.md`](strategic/vision.md) | Long-term vision, product direction, priorities, standing decisions |
| Gap registry | [`GAPS.md`](GAPS.md) | Explicit, tracked knowledge gaps — never silently filled |

## Document contract

Every knowledge document states its **purpose**, **owner**, **last-reviewed date**, and **status**, and separates:

- **[FACT]** — verified against an observed source; source and date cited.
- **[HISTORY]** — dated historical information; true as of its date, not necessarily current.
- **[DECISION]** — a decision actually taken, with date and rationale.
- **[PROPOSAL]** — a proposal awaiting owner decision; not current truth.
- **[UNKNOWN]** — a knowledge gap; see `GAPS.md`. Never manufactured.

## Rules

1. **Never manufacture missing information.** Where knowledge is unavailable, record a gap in `GAPS.md` instead of speculating.
2. **Public-safety.** This repository is public. Knowledge documents record only facts safe for public disclosure. Private documents, private links, credentials, and personal data are referenced **by name only** — never by URL, content, or identifier. This extends the repo's standing editorial decision that it contains no Drive links, folder IDs, or private source archives.
3. **One source of truth.** These documents are the canonical RADAR knowledge source. Where a conversation, transcript, or another repo disagrees, the disagreement is resolved by the owner and recorded here, not by silent overwrite.
4. **Traceability.** Facts cite their source (public URL, repository path, or "owner-maintained knowledge base, verified <date>"). Repository facts drift — verify against the live repo before relying on them.
5. **Freshness.** Documents are re-reviewed when the underlying reality changes; the last-reviewed date must move when content is edited.

## Ownership and review

Owner: **CZA OF REM (Tarzaa Gerald Caesar), RADARCharts by REM / Royal Empire Management**. Changes to authoritative organizational facts or sensitive project decisions require owner review — agents may propose edits on a branch but must not silently rewrite canonical facts. Routine factual maintenance (dates, cross-references, gap registration) does not require approval.
