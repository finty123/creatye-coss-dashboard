---
name: context-manager
description: Builds a minimal, task-specific context bundle for Creatye Studio work.
trigger: Before significant tasks, milestone work, domain changes, or any change that may touch more than one project area.
allowedTools:
  - read
version: 0.1.0
---

# context-manager

## Responsibility

Load only the context required for the current task. Do not load the entire documentation set by default.

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
2. Identify the task domain and active milestone.
3. Use `docs/project/CONTEXT_INDEX.md` to locate relevant documentation.
4. Identify impacted files and direct dependencies.
5. Load only the documents and files needed for the task.
6. State any missing context or assumptions before acting.

## Guardrails

- Never load all docs automatically.
- Never infer architecture from the legacy system without checking `docs/legacy/LEGACY_BOUNDARY.md`.
- Prefer native Jaxx files for state, plan, progress, decisions, and verification.
- Keep context progressive: broaden it only when the task proves it is needed.
