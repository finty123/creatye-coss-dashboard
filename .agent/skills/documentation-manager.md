---
name: documentation-manager
description: Keeps Creatye Studio documentation synchronized with implementation and Jaxx state.
trigger: After meaningful changes to architecture, contracts, domain behavior, milestones, decisions, or project state.
allowedTools:
  - read
version: 0.2.0
---

# documentation-manager

## Responsibility

Keep Creatye Studio documentation synchronized with the current implementation without duplicating Jaxx sources of truth or preserving obsolete visual instructions.

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

For implemented UI changes, also check whether the route inventory, responsive coverage, theme behavior, or shared component contract changed.

Update only the appropriate source.

## Sources of truth

Use native Jaxx files for:

- State: `.agent/STATE.md`
- Plan: `.agent/PLAN.md`
- Progress: `.agent/PROGRESS.md`
- Decisions: `.agent/DECISIONS.md`
- Verification: `.agent/VERIFICATION.md`

Use `docs/` for durable project knowledge that is not already represented by a native Jaxx file.

## Update routing

- Current working status or blocker -> `STATE.md`.
- Milestone scope or acceptance item -> `PLAN.md`.
- Completed meaningful delivery -> `PROGRESS.md`.
- Durable technical or visual rule -> `DECISIONS.md`.
- Session proof -> generated through `jaxx session close` into `VERIFICATION.md`.
- Design-system contract -> `docs/design-system/` and `packages/ui/`.
- Route or screen-specific implementation notes -> relevant implementation/UX document.

## Guardrails

- Do not create duplicate STATE, PLAN, PROGRESS, DECISIONS, or VERIFICATION files.
- Do not invent missing product details to make documentation feel complete.
- Do not use screenshot folders as the source of truth or require them to understand current UI.
- Do not leave `STATE.md` pointing to an older session after a governance update.
- Keep fixture-only behavior explicitly labeled until backend integration exists.
- Keep `docs/project/CONTEXT_INDEX.md` current as new docs are added.
- Documentation must follow implementation and decisions; it must not silently replace them.
