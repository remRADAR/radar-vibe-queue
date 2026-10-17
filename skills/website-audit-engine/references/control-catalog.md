# Website Audit Control Catalog

Use only controls applicable to the target and access level. Record evidence and the execution method for every selected control.

| ID | Domain | Control | Typical evidence |
|---|---|---|---|
| PERF-01 | Performance | Measure LCP, INP, and CLS on representative routes/devices. | Lab or field result with URL, viewport, and date |
| PERF-02 | Performance | Review critical resources, caching, compression, image/media weight, and third-party cost. | Waterfall, response headers, bundle/media report |
| PERF-03 | Performance | Check mobile layout, input responsiveness, and low-power behavior. | Device test or NOT VERIFIED |
| SEC-01 | Security | Verify authentication and authorization boundaries, including object/tenant access. | Authorized test result or source path |
| SEC-02 | Security | Check secret handling, error disclosure, validation, upload controls, and dependency risk. | Code/config/dependency evidence without secret values |
| SEC-03 | Security | Review TLS, cookies, CORS, CSP, HSTS, frame, content-type, and referrer controls as relevant. | Header capture and configuration |
| A11Y-01 | Accessibility | Check semantic structure, names/labels, headings, keyboard access, focus, and status updates. | Automated/manual result by route |
| A11Y-02 | Accessibility | Check contrast, zoom/reflow, forms/errors, media alternatives, and reduced motion. | Manual or tool evidence |
| REL-01 | Reliability | Verify health checks, logging, monitoring, alerts, timeouts, retries, and error states. | Runtime/config/test evidence |
| REL-02 | Reliability | Verify backup, recovery, rollback, deployment safety, and incident readiness. | Authorized operational evidence |
| SCALE-01 | Scalability | Review caching, database/storage access, queues, async work, limits, and rate controls. | Source/config/telemetry evidence |
| SCALE-02 | Scalability | Check degraded behavior under representative concurrency or load. | Authorized test result or NOT VERIFIED |
| MAINT-01 | Maintainability | Review architecture, component boundaries, tests, dependency updates, and documentation. | Repository inspection and test output |
| MAINT-02 | Maintainability | Verify CI/CD gates, configuration separation, and ownership/rollback paths. | Workflow/config evidence |
| SEO-01 | SEO | Check status codes, canonical URLs, metadata, structured data, social previews, and rendering. | HTML/header/crawler evidence |
| SEO-02 | SEO | Check sitemap, robots, internal links, redirects, and indexability. | Retrieved files and route crawl |
| CONTENT-01 | Content | Check broken links, stale/duplicate content, media integrity, captions, and transcripts. | Crawl/media/editorial evidence |
| CONTENT-02 | Content | Check image dimensions/formats/alt text and CMS publication/error states. | Asset inspection and source/runtime evidence |

## Status definitions

- **PASS:** The control was executed and evidence meets the stated criterion.
- **PARTIAL:** Some paths, roles, devices, or conditions pass while coverage or behavior is incomplete.
- **FAIL:** Executed evidence demonstrates a defect or unmet requirement.
- **NOT VERIFIED:** The check could not be executed with available access, tools, time, or source.
- **NOT APPLICABLE:** The control does not apply, with a reason recorded.

## Risk definitions

- **Critical:** Active or likely severe compromise, data exposure, loss of core service, or blocker to safe release.
- **High:** Material security, accessibility, reliability, or user-impact risk requiring prioritized remediation.
- **Medium:** Significant quality, performance, maintainability, or discoverability issue with bounded impact.
- **Low:** Limited impact or localized improvement.
- **Informational:** Observation or recommendation without a demonstrated defect.
