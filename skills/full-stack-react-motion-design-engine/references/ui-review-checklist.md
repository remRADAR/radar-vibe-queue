# UI and Motion Review Checklist

Use this checklist after inspecting the actual project. Mark each item PASS, PARTIAL, FAIL, NOT VERIFIED, or NOT APPLICABLE and record evidence.

## Product and visual hierarchy

- The primary task and next action are clear without relying on animation.
- Heading, body, metadata, controls, and supporting content have a deliberate hierarchy.
- Spacing, alignment, typography, color, and density follow existing design tokens.
- Responsive behavior is defined for narrow, touch, keyboard, and wide layouts.
- Empty, loading, error, disabled, selected, hover, focus, and success states are coherent.
- Subjective polish recommendations are separated from usability defects.

## React and TypeScript

- Component boundaries match responsibility and reuse rather than arbitrary file size.
- Props, state, events, async data, and API responses are typed at meaningful boundaries.
- Existing routing, authentication, CMS, and API contracts are preserved.
- Effects have clear ownership and cleanup; no unnecessary rerender or stale closure is introduced.
- Loading, cancellation, retries, errors, and optimistic updates are handled where relevant.
- No dependency or abstraction is added without a demonstrated need.

## Accessibility

- Semantic HTML and heading order reflect the content structure.
- Keyboard navigation and visible focus work for all interactive elements.
- Color contrast, text resizing, zoom, labels, names, and error messaging are adequate.
- Dialogs, menus, carousels, tabs, and asynchronous updates have appropriate focus/state behavior.
- Motion is reduced or removed under `prefers-reduced-motion` without losing meaning.
- Content and task completion do not depend on color, hover, sound, or animation alone.

## Motion and interaction

- Every animation has a purpose: orientation, feedback, continuity, hierarchy, or state change.
- Transform and opacity are preferred for frequent animation; layout and paint cost are understood.
- Timing, easing, interruption, and exit behavior support user control and reading speed.
- Motion does not hijack scroll, delay navigation, conceal content, or create vestibular risk.
- Touch targets and interaction latency remain usable on mobile and low-power devices.
- Reduced-motion behavior is tested, not merely declared.

## Performance and verification

- Long lists, images, media, and expensive components use appropriate loading and rendering strategies.
- Animation and interaction responsiveness are checked on representative viewport/device conditions.
- Lint, type-check, tests, accessibility checks, and build checks are recorded with exact commands/results.
- Remaining unknowns are explicitly marked NOT VERIFIED.
