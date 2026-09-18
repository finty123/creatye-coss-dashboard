# Plan

High-level roadmap for Creatye Studio. Ordered by priority.

## Milestones

### M000 - Project Agent Foundation
- [x] Specialize the Jaxx control plane for Creatye Studio.
- [x] Create project-specific Jaxx skills for context, architecture, design, and documentation governance.
- [x] Create the minimal docs foundation under `docs/`.
- [x] Register initial project decisions in `.agent/DECISIONS.md`.
- [x] Establish the initial project state.
- [x] Verify the foundation with `jaxx doctor`, `jaxx verify`, `jaxx skill list`, and `git status`.

### M001 - Product Architecture
- [x] Define product vision and product principles.
- [x] Define capability map without turning it into a sitemap.
- [x] Define consolidated product domains and boundaries.
- [x] Define core product objects and conceptual lifecycles.
- [x] Define macro product journeys.
- [x] Define Desktop vs Mobile WebApp product scope.
- [x] Define official product terminology.
- [x] Update context index for M001 documents.
- [x] Verify with `jaxx doctor`, `jaxx verify`, `git diff --check`, and `git status`.

### M002 - Design System
- [ ] Define design system foundations.
- [ ] Preserve Desktop Web and Mobile WebApp as distinct experiences with shared foundations.

### M005 - Technical Stack
- [ ] Decide the technical stack.
- [ ] Document structural technology choices through native Jaxx decisions.

## Working agreements
- One feature = one branch = one agent.
- Every meaningful action is appended to `AGENT_LOG.jsonl`.
- Conflict resolution for shared files: `git pull --rebase`.
- Jaxx is the official control plane.
- Do not create duplicate files for state, plan, progress, decisions, or verification.
- Documentation follows implementation and decisions.
