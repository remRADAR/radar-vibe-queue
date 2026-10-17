---
name: website-audit-engine
description: Perform evidence-driven website audits across performance, security, WCAG accessibility, reliability, scalability, maintainability, SEO, and content integrity. Use for website audits, security reviews, accessibility assessments, SEO checks, readiness reviews, or structured audit reporting.
---

# Website Audit Engine

Perform a structured, evidence-driven audit of a website or web application. Adapt to the available access level and distinguish publicly observable checks, authorized source-code inspection, and authenticated infrastructure review.

## Scope and access levels

Classify the audit before work:

- **Public observation:** URL behavior, rendered content, headers, redirects, robots/sitemap, metadata, links, media, and publicly exposed security signals.
- **Authorized source inspection:** repository code, configuration, dependencies, tests, CI/CD, deployment manifests, application architecture, data flows, and secrets handling without revealing secret values.
- **Authenticated infrastructure audit:** only with explicit access and authorization; inspect runtime telemetry, identity/access controls, storage, backups, queues, databases, limits, recovery, and operational controls.

Do not infer permission from a URL or repository. Do not probe private systems, bypass controls, alter production, submit forms with real side effects, expose secrets, or claim infrastructure findings without the required access.

## Procedure

1. State the target, date/coverage, audit objective, access level, constraints, and acceptance criteria.
2. Inventory routes, templates, API boundaries, assets, authentication, third-party services, deployment/runtime, and relevant user journeys. Preserve source freshness and record unavailable surfaces.
3. Assess the domains below using the control catalog reference. Record evidence as observed output, file path, test result, or explicit unknown.
4. Assign each control `PASS`, `PARTIAL`, `FAIL`, `NOT VERIFIED`, or `NOT APPLICABLE`. Use a separate risk scale: Critical, High, Medium, Low, Informational.
5. For each non-trivial finding, identify the affected URL, file, component, endpoint, or system; explain evidence, impact, remediation, owner/priority when known, and a verification method.
6. Separate confirmed defects from hypotheses and recommendations. Never mark a check passed because it was expected, configured in theory, or not executed.
7. Prioritize blockers and exploitable or user-harming issues. Note dependencies between security, accessibility, performance, reliability, and content findings.
8. Run only authorized, non-destructive checks. Preserve test output and avoid credentials or personal data in the report.
9. Re-test remediated findings where authorized and report residual risk, unverified areas, and the next approval gate.

## Audit domains

Cover the following where applicable:

- **Performance:** Core Web Vitals, loading/rendering waterfalls, caching, compression, image/media weight, JavaScript, third-party cost, responsive/mobile behavior, and resource priorities.
- **Security:** authentication and authorization boundaries, secret handling, input/output validation, dependency risk, uploads, error disclosure, cookies, TLS, CORS, CSP and relevant HTTP security headers.
- **Accessibility:** WCAG 2.2 AA semantics, headings, names/labels, keyboard and focus, contrast, zoom/reflow, forms, errors, status updates, media alternatives, and reduced motion.
- **Reliability and operations:** monitoring, alerting, health checks, logs, error handling, timeouts, retries, idempotency, backups, recovery objectives, rollback, incident readiness, and deployment safety.
- **Scalability:** caching, database access, connection/resource limits, storage, asynchronous work, queues, rate limits, concurrency, and failure behavior under load.
- **Maintainability:** architecture, component boundaries, code quality, tests, dependency updates, documentation, CI/CD, configuration, and ownership.
- **SEO and indexability:** status codes, canonical URLs, metadata, structured data, internal links, sitemap, robots, rendering/indexability, and social previews.
- **Content integrity:** broken links, media integrity, image optimization, captions/transcripts, duplicate/stale content, editorial metadata, CMS reliability, and publication states.

## Output contract

Use the template in `references/report-template.md`. Include an executive summary, scope/access statement, risk summary, domain results, detailed findings, evidence, remediation plan, verification plan, and limitations. A finding must include:

`ID | status | severity | domain | location | evidence | impact | remediation | verification`

For RADARSite or editorial products, preserve editorial identity, readable article hierarchy, brand tokens, artist/media context, responsive reading, CMS behavior, embedded media, and established routes. Recommend refinement without defaulting to generic AI landing-page aesthetics or motion that compromises reading, accessibility, or performance.

## Completion criteria

An audit is complete only when scope and access are explicit, applicable domains were assessed, every claim has evidence or is marked NOT VERIFIED, critical blockers are highlighted, remediation and verification are actionable, limitations are stated, and no production side effect occurred.
