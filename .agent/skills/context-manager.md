---
name: context-manager
description: Builds a minimal, task-specific context bundle for Creatye Studio work.
trigger: Before significant tasks, milestone work, domain changes, or any change that may touch more than one project area.
allowedTools:
  - read
version: 0.2.0
---

# context-manager

## Responsibility

Load only the context required for the current Creatye Studio task. The current implementation, native Jaxx files, and indexed project documentation take precedence over old visual studies or temporary evidence.

## Context model

TASK CONTEXT =

- Global rules
- Current state
- Active milestone
- Relevant domain
- Relevant architecture
- Relevant design context
- Impacted files
- Dependencies

## Procedure

Before meaningful work:

1. Read `AGENTS.md`, `.agent/STATE.md`, and `.agent/PLAN.md`.
2. Identify the task domain, target route, target platform, and active milestone.
3. Use `docs/project/CONTEXT_INDEX.md` to locate only the relevant durable documentation.
4. Inspect the current implementation before proposing a new pattern.
5. Identify impacted files, shared packages, direct dependencies, and verification commands.
6. State missing context or assumptions before acting when they can materially change the result.

## Current implementation routes

- Application shell and navigation: `apps/web/src/components/desktop-shell.tsx` and `mobile-shell.tsx`.
- Shared visual primitives and tokens: `packages/ui/src/components.tsx`, `styles.css`, and `tokens.ts`.
- Product compositions: `apps/web/src/components/screens/`.
- Pages workspace: `/pages` and `pages-calibration.tsx`.
- Internal visual contract: `/design-system` and `docs/design-system/creatye-canvas.md`.
- Automated responsive diagnostics: `scripts/visual-review.mjs`.

## Guardrails

- Never load all docs automatically.
- Do not load `.agent/tmp`, historical screenshots, or external reference packs as required context.
- Treat the current code, semantic tokens, and accepted project decisions as the visual source of truth.
- Never infer architecture from the legacy system without checking `docs/legacy/LEGACY_BOUNDARY.md`.
- Prefer native Jaxx files for state, plan, progress, decisions, and verification.
- Keep context progressive: broaden it only when the task proves it is needed.
