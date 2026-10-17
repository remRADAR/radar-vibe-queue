# Agent Continuation — Queue Prompt

Delegate to `skills/agent-continuation/SKILL.md`. Copy `skills/agent-continuation/templates/HANDOFF.template.md` to the project root as `HANDOFF.md`.

**Task:** Resume, continue, or hand off a build across agents without breaking prior implementations.

**Deliverables:** entry check (ledger vs. filesystem, source of truth), checkpoint updates during work, and a full exit update: verified facts with evidence, not-verified list, known defects, decisions, DO-NOT-TOUCH, pending approvals, and the single most important next step.

**Constraints:** Never revert or "clean up" prior agents' work without evidence of defect; record as you go, not at the end; every entry timestamped and attributed to the producing agent.

**Validation:** The next agent can resume correctly from the ledger alone.

**Completion report:** status, ledger updated, discrepancies found and how resolved.
