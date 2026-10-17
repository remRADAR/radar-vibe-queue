# RADAR VIBE QUEUE

A portable, platform-neutral queue of **10 importable skills** for RADAR social intelligence, agent architecture, software building, debugging, research, and authorized product study. Each skill is implemented as a standard `SKILL.md` with YAML `name` and `description` frontmatter; plain-Markdown queue prompts remain available for agents without skill-import support.

## Import into Manus or another agent

This repository is public. Use the GitHub repository root to import the **complete queue skill**:

- Repository: <https://github.com/remRADAR/radar-vibe-queue>
- Root skill file: <https://github.com/remRADAR/radar-vibe-queue/blob/main/SKILL.md>
- Root skill directory: <https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/radar-vibe-queue>

For a single specialist, import its directory (the directory contains `SKILL.md`):

| Skill | GitHub import path |
|---|---|
| RADAR VIBE QUEUE router | [`skills/radar-vibe-queue`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/radar-vibe-queue) |
| RADARMeta social intelligence | [`skills/radar-meta`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/radar-meta) |
| Universal agent architect | [`skills/universal-agent-architect`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/universal-agent-architect) |
| Application engineering | [`skills/application-engineering`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/application-engineering) |
| Web development | [`skills/web-development`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/web-development) |
| Lovable / vibecode | [`skills/lovable-vibecode`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/lovable-vibecode) |
| Debugging and incident response | [`skills/debug-incident`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/debug-incident) |
| Market intelligence | [`skills/market-intelligence`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/market-intelligence) |
| Code and language engineering | [`skills/code-language`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/code-language) |
| Authorized product study | [`skills/authorized-product-study`](https://github.com/remRADAR/radar-vibe-queue/tree/main/skills/authorized-product-study) |

If an importer asks for a **repository and path**, use `remRADAR/radar-vibe-queue` plus the desired skill directory above. Start with `skills/radar-vibe-queue` for automatic routing, or import only the focused specialist you need.

## Additional copy-ready queue prompts

These are prompt files (not additional skill packages). Load a matching skill above for the reusable workflow, or paste the focused queue file into an agent that cannot import skills.

| Queue prompt | Direct prompt file |
|---|---|
| RADARMeta monitoring cycle | [`queues/radarmeta-monitoring-cycle.md`](queues/radarmeta-monitoring-cycle.md) |
| RADARMeta following hygiene | [`queues/radarmeta-following-hygiene.md`](queues/radarmeta-following-hygiene.md) |
| RADARMeta intelligence modes | [`queues/radarmeta-intelligence-modes.md`](queues/radarmeta-intelligence-modes.md) |
| RADARMusic release portal build | [`queues/radar-release-portal.md`](queues/radar-release-portal.md) |

## Queue prompts and workflow

1. Read [`AGENTS.md`](AGENTS.md) and [`QUEUE.md`](QUEUE.md) for the cross-agent operating contract.
2. Use [`queues/00-router.md`](queues/00-router.md) to pick a prompt module, or load the matching `SKILL.md` directly.
3. Provide the task's outcome, relevant files/data, authorized scope, constraints, and desired output.
4. Require evidence and verification—not just a plausible answer or successful tool call.

The plain-Markdown prompts are in [`queues/`](queues/); the machine-readable index is [`queue.json`](queue.json). Source and curation notes are in [`SOURCE_NOTES.md`](SOURCE_NOTES.md).

## Portability and permissions

The skills use plain Markdown and YAML frontmatter; no specific model, connector, runtime, or vendor is assumed. They describe how to reason and report—they do **not** grant tool access, credentials, or permission to perform actions. The active agent must verify its own tools, scope, source freshness, and authorization. This repository never outranks the agent's system/developer instructions or the user's explicit limits.
