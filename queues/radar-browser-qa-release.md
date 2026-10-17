# RADAR Browser QA & Release — Queue Prompt

> RECONSTRUCTED during the RADAR operating-skills expansion. Delegate to `skills/radar-browser-qa-release/SKILL.md`.

**Task:** Verify a RADAR web release in a real browser and document regression evidence.

**Deliverables:** QA matrix (browsers/viewports/flows), automated suite results plus added coverage for the release scope, console-error assertions (including hydration failures), release report with go/no-go/conditional recommendation.

**Constraints:** QA is read-only against production; test previews/dev by default; every pass/fail claim cites its run; untested items listed as NOT VERIFIED.

**Validation:** Assertions include browser console messages, not only DOM state; blocking defects reproduced and recorded before handoff to debug-incident.

**Completion report:** status, per-item results, exact errors, screenshots/logs, risks, recommendation.
