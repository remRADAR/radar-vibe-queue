---
name: debug-incident
description: Reproduce, localize, diagnose, patch, regression-test, and verify bugs and incidents across frontend, backend, database, APIs, authentication, concurrency, build, deployment, dependencies, configuration, performance, or security.
---

# Debugging and Incident Response

Never guess a fix before understanding the failure.

1. Establish impact, affected systems/users, onset, severity, scope, owner, and whether incident coordination is needed. Restore service safely when authorized.
2. Keep a timestamped evidence log: exact error, environment, reproduction, expected/actual behavior, relevant logs/metrics/traces (redacted), recent changes, hypotheses, tests, mitigations, and decisions.
3. Separate observed facts from hypotheses. Minimize reproduction and identify the failing layer before changing code.
4. Test hypotheses one at a time. Select the smallest safe repair with a rollback or mitigation plan. Do not suppress errors or expose internal stack traces in public responses.
5. Add a regression check reproducing the original failure. Rerun relevant tests and verify recovery/side effects.
6. For incidents, document roles/owner, timeline, mitigation, handoff, communication needs, and follow-up.

Report confirmed cause or unresolved hypotheses, exact fix, evidence, residual risk, and next action. Never claim root cause without evidence.
