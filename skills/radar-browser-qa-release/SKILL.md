---
name: radar-browser-qa-release
description: Browser-based QA and release verification for RADAR web properties — Playwright/browser testing, responsive checks, regression evidence, and release sign-off. Use for pre-release QA, cross-device verification, console-error checks, and documented regression testing.
---

# RADAR Browser QA & Release

> RECONSTRUCTED: Authored during the RADAR operating-skills expansion; the original expansion package was not available. Confirm available browser tooling in the working environment before committing to a QA plan.

## Purpose and scope

Verify RADAR web releases in a real browser: functional flows, responsive behavior, accessibility basics, console/network errors, and regression checks — and turn them into release evidence. Out of scope: fixing app bugs (debug-incident), infrastructure (radar-infrastructure-ops).

## Triggers

Release verification, regression testing, responsive checks, browser testing, Playwright suites, pre-deploy sign-off, hydration/console error checks.

## Required inputs

Target URL or local dev server, the release scope (what changed), key user flows, and acceptance criteria.

## Procedure

1. Read the release scope; list flows and pages to verify, including the specific changed areas.
2. Define the QA matrix: browsers, viewport sizes (mobile/tablet/desktop), and the exact assertions — including **console errors** (e.g., "Hydration failed"), network failures, and visual state.
3. Run automated suites if present (e.g., Playwright); add missing coverage for the release scope. A test passing while the browser logs errors is a failed check — assert on console messages, not only the DOM.
4. Exercise real flows manually where automation is absent: loading, empty, error, and success states.
5. Produce the release report: pass/fail per item, environment, exact errors, screenshots or logs as evidence, and an explicit VERIFIED / PARTIALLY_VERIFIED / BLOCKED status.

## Capability and permission checks

Verify a browser environment is actually available before promising browser evidence. Do not claim a test ran that did not.

## Safety boundaries and approval gates

QA is read-only against production; test against previews/dev by default. Deployment decisions belong to the authorizer, not to QA.

## Verification

Every pass/fail claim cites the run that produced it. Untested items are listed as NOT VERIFIED, never assumed.

## Failure and escalation

Blocking defects found: record exact reproduction under KNOWN DEFECTS in the ledger and hand to debug-incident; release sign-off is withheld until fixed and re-verified.

## Handoff and continuity

Attach the QA report and remaining risks to the project ledger for the next agent or reviewer.

## Completion criteria

QA matrix executed with evidence and a clear release recommendation: go / no-go / conditional.
