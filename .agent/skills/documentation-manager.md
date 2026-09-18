---
name: documentation-manager
description: Keeps Creatye Studio documentation synchronized with implementation and Jaxx state.
trigger: After meaningful changes to architecture, contracts, domain behavior, milestones, decisions, or project state.
allowedTools:
  - read
version: 0.1.0
---

# documentation-manager

## Responsibility

Keep documentation synchronized with the system without duplicating Jaxx sources of truth.

## Procedure

After relevant changes, check whether they affect:

1. Architecture
2. Contracts
3. Domain behavior
4. Product behavior
5. Current state
6. Active milestone
7. Decisions
8. Verification evidence

Update only the appropriate source.

## Sources of truth

Use native Jaxx files for:

- State: `.agent/STATE.md`
- Plan: `.agent/PLAN.md`
- Progress: `.agent/PROGRESS.md`
- Decisions: `.agent/DECISIONS.md`
- Verification: `.agent/VERIFICATION.md`

Use `docs/` for durable project knowledge that is not already represented by a native Jaxx file.

## Guardrails

- Do not create duplicate STATE, PLAN, PROGRESS, DECISIONS, or VERIFICATION files.
- Do not invent missing product details to make documentation feel complete.
- Keep `docs/project/CONTEXT_INDEX.md` current as new docs are added.
- Documentation must follow implementation and decisions; it must not silently replace them.
