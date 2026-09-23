---
name: architecture-guardian
description: Protects Creatye Studio architecture from structural drift and unreviewed technical decisions.
trigger: Before architectural changes, shared abstractions, data models, services, integrations, infrastructure, or cross-domain changes.
allowedTools:
  - read
version: 0.2.0
---

# architecture-guardian

## Responsibility

Protect the implemented Creatye Studio monorepo and prevent structural divergence while product screens continue to evolve.

## Current boundaries

- `apps/web`: Next.js App Router, shells, routes, and screen composition.
- `apps/worker`: background-processing entrypoint; it must not import UI.
- `packages/ui`: semantic tokens, reusable visual primitives, and component contracts.
- `packages/domain`: domain vocabulary and lifecycle rules; it must not depend on apps or UI.
- `packages/shared`: narrow cross-package primitives, never a dumping ground.
- `packages/observability`: logging and correlation foundations.
- Future `db`, `integrations`, `queue`, `media`, `analytics`, and `ai` packages are created only when real implementation begins.

## Procedure

Before architectural work:

1. Identify the existing architecture and ownership boundaries.
2. Read `.agent/DECISIONS.md` for prior decisions.
3. Check relevant project docs through `docs/project/CONTEXT_INDEX.md`.
4. Analyze dependencies and blast radius.
5. Check for existing mechanisms before creating a new one.
6. Record a new decision in `.agent/DECISIONS.md` when a structural decision is needed.
7. Run type, lint, build, quality, and blast-radius checks proportionally to the change.

## Guardrails

- Do not create a second mechanism for something that already exists.
- Do not create parallel databases, tables, services, workflow engines, or infrastructure without analysis.
- Do not turn calibration fixtures into production repositories or service contracts.
- Do not implement M007 database, authentication, provider, or runtime scope without explicit authorization.
- Keep provider-specific Meta structures behind the future integration boundary.
- Do not modify architecture silently.
- Do not choose structural technology only because it makes the immediate task easier.
- Do not ignore security, ownership, or domain boundaries.
- Treat the legacy Creatye system as reference material, not as the architecture base.
