# RADAR VIBE QUEUE

A portable, platform-neutral prompt queue for RADAR work across Manus and other AI agents. It turns the supplied Drive materials into a practical router plus focused, copy-ready agent prompts.

> **What this is:** a reusable prompt/skill library—not a task tracker, bot, or autonomous execution service.

## Start here

1. Add this repository to the agent's context, import it if the agent supports GitHub repositories, or copy the files into the agent workspace.
2. Ask the agent to read [`AGENTS.md`](AGENTS.md) and [`QUEUE.md`](QUEUE.md).
3. Route the task using [`queues/00-router.md`](queues/00-router.md), then load only the relevant queue file(s).
4. Provide the concrete goal, relevant files/data, authorized scope, constraints, and desired output.
5. Ask for evidence and verification—not just a plausible answer or a successful tool call.

## Queue modules

| Queue | Use it for |
|---|---|
| [`radarmeta-social-intelligence.md`](queues/radarmeta-social-intelligence.md) | RADARCharts social/account intelligence, community, trends, brand, growth, and review briefs |
| [`universal-agent-architect.md`](queues/universal-agent-architect.md) | Agent design, tool contracts, orchestration, memory, approvals, evaluation, and observability |
| [`application-engineering.md`](queues/application-engineering.md) | Product-to-implementation work across web, mobile, desktop, and services |
| [`web-development.md`](queues/web-development.md) | Web product design/build/review, accessibility, security, performance, and deployment checks |
| [`lovable-vibecode.md`](queues/lovable-vibecode.md) | Prompt-driven builders and AI-generated application code |
| [`debug-incident.md`](queues/debug-incident.md) | Reproduction, diagnosis, incident coordination, repair, and regression proof |
| [`market-intelligence.md`](queues/market-intelligence.md) | Evidence-based financial/company/market research and risk analysis |
| [`code-language.md`](queues/code-language.md) | Language/runtime-aware implementation, translation, review, and debugging |
| [`authorized-product-study.md`](queues/authorized-product-study.md) | Permitted product/website analysis and independent functional equivalents |

The machine-readable index is [`queue.json`](queue.json). Background and source decisions are in [`SOURCE_NOTES.md`](SOURCE_NOTES.md).

## Cross-agent portability

The files are plain Markdown and JSON; no specific model, connector, runtime, or vendor is assumed. For agents that support repository instructions, start with `AGENTS.md`. For agents with a skill-import feature, [`skills/radar-meta/SKILL.md`](skills/radar-meta/SKILL.md) is available in an Agent Skills-style format. Otherwise, paste the relevant queue file into the agent's context.

A queue file describes **how to reason and report**. It does not grant permissions or create connector access. The active agent must discover and verify its own tools, scopes, source freshness, and authorization before acting. This repository never outranks an agent's system/developer instructions or the user's explicit limits.

## Visibility

This repository is intentionally **private**. An agent needs GitHub access to import it. Making it public would let anyone view and copy the queue; choose public visibility only deliberately.
