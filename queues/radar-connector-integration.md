# RADAR Connector Integration — Queue Prompt

> RECONSTRUCTED during the RADAR operating-skills expansion. Delegate to `skills/radar-connector-integration/SKILL.md`.

**Task:** Integrate an external API/MCP connector/webhook into a RADAR system using verified, authorized access.

**Deliverables:** current API contract notes, integration design (auth, scopes, errors, retries, idempotency, webhook signature verification), implementation, and tested happy/error paths.

**Constraints:** Verify live API docs and actual connector availability first; least-privilege scopes; secrets never in code/logs; production credentials and live account connections require authorization; sandbox before production.

**Validation:** End-to-end calls observed, including at least one error-path test.

**Completion report:** status, verification evidence, scopes in use, remaining risks, next approval gate.
