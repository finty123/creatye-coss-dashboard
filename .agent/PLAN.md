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
- [x] Formalize approved visual direction and reference board.
- [x] Document visual lock for sidebar, command center, data UI, studio, mobile, analytics, typography, and controls.
- [x] Document calibration surfaces.
- [x] Document Desktop Studio and Mobile Studio calibration direction.
- [x] Document dashboard, data UI, analytics, and control finishing direction.
- [x] Update context index for M004.5 documents.
- [x] Register major visual calibration ADRs in `.agent/DECISIONS.md`.
- [x] Verify with `jaxx doctor`, `jaxx verify`, `git diff --check`, and `git status`.

### M005 - Technical Architecture
- [x] Define architecture style, topology, application layers, repository structure, and dependency rules.
- [x] Define database, auth/security, multi-tenancy, storage/media, async processing, idempotency, scheduling, and transaction/concurrency architecture.
- [x] Define integration, automation, publishing, analytics, AI, notification, observability, deployment, environment, testing, and legacy mapping architecture.
- [x] Create system diagrams for context, runtime, media, Meta webhooks, automation runtime, and scheduled publishing.
- [x] Register durable technical ADRs in `.agent/DECISIONS.md`.
- [x] Update context index for M005 documents.
- [x] Verify with `jaxx doctor`, `jaxx verify`, `git diff --check`, and `git status`.

### M006 - Repository Foundation + Design System Implementation
- [x] Create repository foundation.
- [x] Implement npm workspaces TypeScript monorepo foundation.
- [x] Create Next.js Web App Router foundation.
- [x] Create buildable Worker foundation.
- [x] Implement design tokens and reusable UI components.
- [x] Implement Desktop shell, Mobile shell, design-system playground, and calibration surfaces.
- [x] Add M006 implementation guide and context index routing.
- [x] Verify install, typecheck, lint, build, visual review, Jaxx, diff check, and git status.
- [x] Implement the product-owner-requested visual remediation while preserving the technical foundation.
- [x] Generate and inspect the eight required remediation screenshots against the actual Visual Reference Pack.
- [x] Audit all 31 visual references and map concrete parity requirements before the definitive refactor.
- [x] Implement the definitive visual refactor across foundations, shell, Command Center, Automations, Desktop Studio, and Mobile Studio.
- [x] Generate, compare, correct, and inspect definitive screenshots at every required viewport.
- [x] Recalibrate the product shell into the original Creatye Canvas visual language with Creatye navigation and persistent System/Light/Dark support.
- [x] Implement the `/pages` workspace with Botcake-inspired organization and Creatye design-system execution.
- [x] Expand responsive automated diagnostics to Dashboard, Pages, Automations, Templates, Studio, and Design System.
- [x] Adapt the Jaxx project skills and control-plane state to the current implemented product instead of historical reference packs.
- [ ] Receive explicit product-owner visual approval.

### M007 - Core + Database + Authentication
- [ ] Begin only when explicitly requested.

### M006.5 - Frontend UX Completion
- [x] Complete discovery and create the frontend route/screen implementation matrix.
- [x] Finalize the global product shell and navigation interactions.
- [x] Complete Dashboard and Pages/Page Detail.
- [x] Complete Models/Templates.
- [x] Complete Video Studio and Image Studio journeys.
- [x] Complete Automations, Automation Detail, Activity, and Workflow Builder.
- [x] Complete Publishing and Analytics.
- [x] Complete Settings, Help/Feedback, and Mobile UX.
- [x] Complete global state, pagination, search/filter/sort, and cross-flow validation.
- [x] Complete real rendered review across routes, target widths, and themes.
- [x] Pass full technical and Jaxx verification, then publish only with explicit user authorization.

### M006.6 - Authenticated Visual Calibration
- [x] Audit the available authenticated Luma session without changing account state or consuming credits.
- [x] Record sanitized structural evidence for shell, navigation, surfaces, typography, controls, chips, cards, states, responsive behavior, and dark mode.
- [x] Replace Page Hero Headers with compact contextual tops across shared product pages.
- [x] Calibrate Creatye semantic colors, sidebar geometry, icon rail behavior, controls, tabs, chip rails, cards, steppers, and internal scrollbars.
- [x] Preserve Creatye routes, product vocabulary, fixtures, interactions, themes, and backend boundaries.
- [x] Update the design-system guardian and durable Creatye Canvas contract.
- [x] Verify typecheck, lint, production build, interactive states, focus, images, and horizontal overflow across 85 rendered scenarios.

### M006.7 - Product-owner visual correction pass
- [x] Replace pastel-biased foundations with the audited Luma light/dark neutral roles.
- [x] Increase the Home blue atmosphere by 50% and restore a restrained ambient wash on product routes.
- [x] Restore the original sparse Home composition and project positioning.
- [x] Expand product routes to the available work area and align compact titles/actions with the reference shell.
- [x] Move route search into the top utility pill and provide global Search in the sidebar.
- [x] Align Pages operational columns and add Agendamentos navigation to `/publishing`.
- [x] Place route actions below the fixed utility pill, standardize desktop action height, and apply the owner profile avatar.
- [x] Validate search interactions, theme tokens, typecheck, lint, production build, and 85 responsive visual scenarios.

## Working agreements
- One feature = one branch = one agent.
- Every meaningful action is appended to `AGENT_LOG.jsonl`.
- Conflict resolution for shared files: `git pull --rebase`.
- Jaxx is the official control plane.
- Do not create duplicate files for state, plan, progress, decisions, or verification.
- Documentation follows implementation and decisions.
