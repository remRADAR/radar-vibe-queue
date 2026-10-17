---
name: radar-connector-integration
description: Integration engineering for RADAR systems — MCP servers, APIs, connectors, webhooks, and external services. Use for connector setup, API integration design, webhook verification, and external-service wiring. Design and implementation by default; production credentials and live service changes require authorization.
---

# RADAR Connector Integration

> RECONSTRUCTED: Authored during the RADAR operating-skills expansion; the original expansion package was not available. Verify every external service's current API contract against its live documentation before implementing.

## Purpose and scope

Design and implement integrations between RADAR systems and external services: MCP connectors, REST/GraphQL APIs, webhooks, OAuth flows, and background sync. Out of scope: infrastructure hosting config (radar-infrastructure-ops), app architecture in general (application-engineering, universal-agent-architect).

## Triggers

MCP, API integration, connector setup, webhook, OAuth, external service, sync job, third-party client wiring.

## Required inputs

The external service and its current API docs, required scopes, data flow direction, and where RADAR secrets and callbacks live.

## Procedure

1. Read the live, current documentation of the target service; record API version and auth model. Do not rely on memory or stale docs.
2. Design the contract: endpoints, payloads, error/retry policy, idempotency keys, rate limits, and secret storage.
3. Verify webhook authenticity: signature validation, replay protection, secret handling.
4. Implement with least-privilege scopes; keep secrets in the environment/secret store, never in code or logs.
5. Test against a sandbox/test account where possible; verify normal, error, retry, and duplicate-delivery paths.
6. Document the integration: what is wired, what is verified, what remains.

## Capability and permission checks

A connector named in documentation is not an installed capability. Confirm actual access before claiming integration works. Never print or commit credential values.

## Safety boundaries and approval gates

Creating production credentials, changing live service configuration, or connecting to real accounts requires explicit authorization. Sandbox first.

## Verification

End-to-end calls observed with expected responses, including at least one error-path test, are the evidence. A successful compile proves nothing.

## Failure and escalation

On contract mismatch, missing scopes, or unavailable sandbox: mark BLOCKED with the exact requirement and escalate for authorization or credentials.

## Handoff and continuity

Record the integration design, scopes, and verification state in the project ledger.

## Completion criteria

Working integration with tested happy/error paths, or a delivered design plus the exact blocker.
