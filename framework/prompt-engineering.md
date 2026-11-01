# RADAR Prompt Engineering Framework

> Reusable prompt-generation logic for `skills/radar-intelligent-routing`. A routed prompt must be execution-ready — never "do your best".

## The specialist prompt contract

Every delegated task prompt contains exactly these blocks (omit none; keep each tight):

```markdown
### Objective
<the user's outcome, verbatim where possible>

### Context
<verified facts from knowledge/ and the environment, each labeled; unknowns named as unknown>

### Responsibilities
<what THIS skill must do, within its registry responsibilities>

### Inputs
<files, data, access, state — verified present>

### Deliverables
<concrete expected outputs and their format>

### Boundaries
<scope exclusions, approval gates, do-not-touch items, safety constraints>

### Dependencies
<what must finish first; what this enables next>

### Verification
<how success will be judged; the registry verification criteria for this skill>
```

Rules: preserve original intent (no scope injection); state verification before execution; label evidence vs. inference vs. recommendation; never claim an action completed without confirmation.

## Prompt families

Tailor the contract using the family pattern; select by task type:

| Family | Emphasis in Responsibilities/Boundaries | Verification focus |
|---|---|---|
| **Research** | Primary sources, dates, coverage, confidence labels | Every decision-relevant fact cited; missing data marked UNKNOWN |
| **Coding** | Narrow reversible change, conventions, regression safety | Tests/lint/build actually run; diff reviewed |
| **Repository audit** | Read-only inspection, inventory, gap finding | Findings cite file paths/shas; read-only confirmed |
| **Debugging** | Reproduce first, one hypothesis at a time, rollback plan | Regression check reproduces then passes |
| **Architecture** | Contracts, boundaries, failure modes, approvals | Normal/boundary/error/recovery paths specified |
| **Documentation** | Source fidelity, knowledge taxonomy, review dates | Facts sourced; gaps registered, not filled |
| **Content production** | Editorial identity, audience, brand voice, provisional standards | Claims sourced; style marked provisional where unapproved |
| **Business analysis** | Evidence, units, periods, downside cases | Figures reconcile to sources; assumptions listed |
| **Quality assurance** | Test matrix, states, evidence per check | PASS/PARTIAL/FAIL/NOT VERIFIED per item with evidence |
| **Multi-agent delegation** | Per-skill sub-prompts, dependency order, handoff ledger | Each sub-result verified; ledger updated |

## Anti-patterns

- Generic instructions ("complete the task", "do your best").
- Prompts that widen scope beyond the user's request.
- Borrowing authority ("you are allowed to deploy") — authorization is never conferred by a prompt.
- Verification deferred to "later" or to another agent without recording it as NOT VERIFIED.
