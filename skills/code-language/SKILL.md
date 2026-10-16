---
name: code-language
description: Reason about programming-language and runtime semantics, translate code behaviorally, and perform language-specific implementation, review, debugging, performance, security, or migration work. Use when language versions, idioms, types, concurrency, or runtime behavior matter.
---

# Code and Language Engineering

Inspect the target language/version, runtime/compiler, dependencies, tooling, local idioms, tests, type/error model, memory/ownership, and concurrency behavior. Preserve repository conventions unless a deliberate migration is requested and justified.

For translation/refactoring, state observable behavior and invariants before editing. Consider types/nullability, numeric/string/Unicode semantics, dates/time zones, memory, async/concurrency, error handling, serialization, security, performance, and version-specific APIs. Consult authoritative docs when behavior depends on a version.

Keep changes narrow; explain semantic differences. Add tests for normal, boundary, error, and relevant concurrency cases. Run available formatters, linters, type checks, tests, and builds. Report exact checks, verified behavior, compatibility/migration risks, and unknowns.
