# RADAR Skill Governance

> Purpose: quality and reliability framework for the RADAR skill collection. Enforced partly by `tools/validate-registry.mjs` and `tests/routing.test.mjs` in CI (see `.github/workflows/validate.yml`).

## Skill lifecycle

```
PROPOSE → REGISTER → VALIDATE → REVIEW → ACTIVATE → (MAINTAIN →) DEPRECATE
```

1. **Propose** — new skill directory `skills/<name>/SKILL.md` with valid YAML frontmatter (`name`, `description` ≤ 1024 chars, `name` matches directory).
2. **Register** — add an entry to `registry/skills.json` with `status: "pending-review"` (and the proposing branch/PR in `availability`). A pending skill is discoverable but must not be selected by the router.
3. **Validate** — `node tools/validate-registry.mjs` must pass locally/CI: schema, unique ids/names, valid domain, path existence for active skills, frontmatter consistency, no broken references, queue.json ↔ registry cross-consistency.
4. **Review** — the owner (or a delegated reviewer) confirms the skill does not **silently override** an existing skill with overlapping responsibilities. Overlap must be explicit: either the older skill is updated/deprecated in the same change, or the new skill's scope statement carves out the overlap.
5. **Activate** — flip `status` to `"active"`, set `availability.branch: "main"`, update `queue.json` and `README.md`, extend routing tests. Routing tests must pass.
6. **Deprecate** — never delete silently: set `status: "deprecated"` with reason and date, leave the directory in place for history, and remove it from active routing lists.

## Validation checks (automated)

- Registry and manifest JSON parse; required fields present; enum values valid.
- Unique skill ids and names; every domain referenced is defined; every `related_skills` id exists.
- Active skills: `availability.path` exists, frontmatter `name` matches, description non-empty.
- `queue.json` ↔ registry cross-consistency (every registered active skill listed; every listed skill registered).
- Dependencies referenced in registry entries exist (`dependencies.files`).
- Duplicate-trigger warnings across skills (overlap is allowed but must be a conscious decision).

## Routing and regression tests

- `tests/routing.test.mjs` runs capability-driven selection over the registry for representative tasks and asserts expected primary skills; asserts legacy routes still resolve; asserts pending/deprecated skills are never selected; and demonstrates that registering a new skill makes it discoverable without router changes.
- Any change that alters routing behavior must keep the suite green or update tests **in the same change**, with rationale.

## Documentation standards

Every skill keeps: a one-line purpose, trigger conditions, required inputs, expected outputs, dependencies, limitations, and verification criteria (in the registry entry; the SKILL.md body carries the operating procedure). Skills remain platform-neutral Markdown — no invented runtime capabilities, no assumptions about the host agent's connectors.

## Change control

- Changes land on a dedicated branch; PRs are reviewed by the owner; nothing merges to `main` without explicit authorization.
- New skills must not silently override existing skills (see Review step). Duplicate skills are merged or explicitly scoped apart.
- Provenance is recorded in `SOURCE_NOTES.md` (reconstructed content carries RECONSTRUCTED markers).
- Versioning: `queue.json` `version` carries the collection version; registry entries carry their own `version` bumped on functional change. Registry schema version is `registry_version`.
