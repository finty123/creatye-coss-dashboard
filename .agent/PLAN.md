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
- [x] Define design direction, principles, and visual language.
- [x] Define token architecture across primitive, semantic, component, and product/domain tokens.
- [x] Define light/dark color system with semantic usage.
- [x] Define typography roles and selection criteria.
- [x] Define spacing, grid, layout, and density foundations.
- [x] Define shape, border, container, and elevation rules.
- [x] Define iconography, motion, interaction states, and accessibility foundations.
- [x] Define component taxonomy without implementing production components.
- [x] Define editor UI, table/data-dense UI, data visualization, AI experience, platform design, and design governance.
- [x] Update context index for M002 documents.
- [x] Verify with `jaxx doctor`, `jaxx verify`, `git diff --check`, and `git status`.

### M003 - Web UX Architecture
- [x] Formalize the approved Desktop primary navigation model.
- [x] Define sidebar, workspace context, application shell, page header, global create, search/command, notifications, and settings behavior.
- [x] Document Home / Command Center, Pages, Content, Automations, Publishing, Analytics, AI, and cross-domain continuity.
- [x] Document editor architecture for Video Studio, Image Studio, and Flow Builder.
- [x] Document page archetypes, screen inventory, filters, bulk operations, data-dense patterns, system states, responsive desktop modes, and power-user patterns.
- [x] Update context index for M003 documents.
- [x] Register structural UX decisions in `.agent/DECISIONS.md`.
- [x] Verify with `jaxx doctor`, `jaxx verify`, `git diff --check`, and `git status`.

### M004 - Mobile WebApp UX Architecture
- [x] Formalize Mobile as operational companion, not compressed Desktop.
- [x] Define approved bottom navigation, global mobile shell, page context, notifications, settings, and contextual analytics/AI.
- [x] Document Home, Content, Create, Quick Video, Quick Image, Publishing, Activity, Page Detail, Automation Mobile, and Analytics Mobile.
- [x] Document Desktop-to-Mobile pattern translation, touch principles, mobile filters, mobile states, offline/connection awareness, density, capability matrix, screen inventory, and cross-domain flows.
- [x] Update context index for M004 documents.
- [x] Register structural Mobile UX decisions in `.agent/DECISIONS.md`.
- [x] Verify with `jaxx doctor`, `jaxx verify`, `git diff --check`, and `git status`.

### M004.5 - Visual Design Calibration
- [ ] Calibrate visual design direction after Mobile UX Architecture.
- [ ] Do not start until explicitly requested.

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
