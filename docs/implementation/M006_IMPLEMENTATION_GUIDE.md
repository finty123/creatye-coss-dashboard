# M006 Implementation Guide

M006 establishes the repository foundation and implemented design system for Creatye Studio.

Current milestone status: visual remediation implemented and awaiting product-owner visual review.

It does not implement product backend features, authentication, database schema, Meta integration, queues, media processing, AI provider calls, or automation runtime.

## Repository structure

```text
apps/
  web/      Next.js App Router foundation and calibration routes.
  worker/   Dedicated TypeScript worker foundation.

packages/
  ui/              Design tokens, CSS, and reusable UI primitives.
  shared/          Narrow shared types.
  domain/          Domain constants and lifecycle vocabulary.
  observability/   Logging foundation.
```

M005 also defines future technical boundaries for `db`, `integrations`, `queue`, `media`, `analytics`, and `ai`.
M006 intentionally does not create placeholder packages for those areas because they do not yet contain real implementation.

## Commands

- Install: `npm install`
- Web dev: `npm -w @creatye/web run dev -- --hostname 127.0.0.1 --port 3000`
- Web production start after build: `npm -w @creatye/web run start -- --hostname 127.0.0.1 --port 3000`
- Worker build: `npm -w @creatye/worker run build`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`
- Build: `npm run build`
- Visual review: `npm run visual:review`

## Design system

- Tokens and CSS: `packages/ui/src/styles.css`
- Token types: `packages/ui/src/tokens.ts`
- Components: `packages/ui/src/components.tsx`

The token implementation includes light/dark semantics for canvas, surfaces, text, borders, brand/action, success, warning, danger, information, focus, spacing, radius, elevation, motion-sensitive states, control heights, layout measurements, breakpoints, and density-oriented composition.

Future UI must use existing tokens and components before creating new primitives.

## Routes

- `/` - Desktop Command Center calibration.
- `/automations` - Desktop Automations data UI calibration.
- `/studio` - Desktop Studio calibration.
- `/mobile` - Mobile shell and Mobile Studio calibration.
- `/design-system` - Internal design system playground.

## Responsive strategy

Desktop stays Desktop in narrow windows.

Narrow Desktop uses:

- collapsed sidebar;
- prioritized content;
- reduced secondary chrome;
- inspector collapse for Studio;
- card/list-first data UI.

Mobile uses a separate mobile shell with bottom navigation, top context, large preview, touch tools, and bottom sheets.

## Light and dark strategy

Light and dark modes share semantic tokens.

Dark mode uses layered surfaces and restrained contrast. It does not use neon green, pure black slabs, glow, or decorative gradients.

## Visual reference compliance

M006 adopts:

- Linear-inspired compact sidebar structure and active-state restraint;
- Brex/Ramp-inspired operational Command Center structure;
- modern operational cards and organized list blocks for data UI;
- current Creatye Studio workflow with refined surfaces and controls;
- current and approved mobile creator patterns through preview-forward mobile UI;
- Geist-like typography/control discipline.

It does not copy external brands, product semantics, exact layouts, colors, or spacing.

The final remediation screenshots are generated in `.agent/tmp/m006-visual-remediation-final-2026-09-18/`. The review set covers Command Center at 1440 and 1200, Automations at 1440, Studio at 1440 and 1200, Mobile at 390, and Design System in light and dark modes.

## Future UI governance

Before adding UI, check:

1. existing component;
2. existing pattern;
3. existing token;
4. platform-specific composition;
5. domain need.

Only create a new primitive when a real gap remains.
