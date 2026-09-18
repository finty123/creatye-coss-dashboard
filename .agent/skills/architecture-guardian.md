---
name: architecture-guardian
description: Protects Creatye Studio architecture from structural drift and unreviewed technical decisions.
trigger: Before architectural changes, shared abstractions, data models, services, integrations, infrastructure, or cross-domain changes.
allowedTools:
  - read
version: 0.1.0
---

# architecture-guardian

## Responsibility

Protect the project architecture and prevent structural divergence.

## Procedure

Before architectural work:

1. Identify the existing architecture and ownership boundaries.
2. Read `.agent/DECISIONS.md` for prior decisions.
3. Check relevant project docs through `docs/project/CONTEXT_INDEX.md`.
4. Analyze dependencies and blast radius.
5. Check for existing mechanisms before creating a new one.
6. Record a new decision in `.agent/DECISIONS.md` when a structural decision is needed.

## Guardrails

- Do not create a second mechanism for something that already exists.
- Do not create parallel databases, tables, services, workflow engines, or infrastructure without analysis.
- Do not modify architecture silently.
- Do not choose structural technology only because it makes the immediate task easier.
- Do not ignore security, ownership, or domain boundaries.
- Treat the legacy Creatye system as reference material, not as the architecture base.
