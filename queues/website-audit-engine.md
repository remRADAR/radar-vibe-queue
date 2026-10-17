# Website Audit Engine Queue

**Trigger:** audit a website, check security, assess accessibility, review SEO/indexability, evaluate performance or reliability, or prepare an evidence-driven web readiness report.

## Copy-ready prompt

> Use the `website-audit-engine` skill. Begin by stating the target, audit objective, date/coverage, access level, authorization, constraints, and acceptance criteria. Distinguish public observation, authorized source inspection, and authenticated infrastructure audit; do not infer access or claim checks that were not executed.
>
> Assess applicable performance/Core Web Vitals, security, WCAG 2.2 AA accessibility, reliability/operations, scalability, maintainability, SEO/indexability, and content integrity controls. Use statuses PASS, PARTIAL, FAIL, NOT VERIFIED, and NOT APPLICABLE plus Critical/High/Medium/Low/Informational severity.
>
> For every meaningful finding, include the affected URL/file/component/system, evidence, impact, remediation, and verification method. Separate confirmed defects, hypotheses, and recommendations. Run only authorized, non-destructive checks; protect secrets and personal data; do not deploy or change production.
>
> Use the control catalog and report template references. Finish with exact commands/checks and results, unverified areas, prioritized remediation, retest steps, and an explicit production-safety statement. For an approved audit-and-implementation request, coordinate with the `full-stack-react-motion-design-engine` only after the audit is prioritized.
