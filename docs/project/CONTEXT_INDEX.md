# Context Index

Use this index to discover relevant project documentation without loading everything.

## Product

- `docs/project/PROJECT_CHARTER.md` - defined project facts, product scope, conceptual cycle, and experience principles.
- `docs/product/PRODUCT_VISION.md` - load when the task needs the product definition, target users, integrated operation, core loop, or product exclusions.
- `docs/product/PRODUCT_PRINCIPLES.md` - load when evaluating product direction, product trade-offs, anti-goals, AI positioning, or Desktop/Mobile experience principles.
- `docs/product/PRODUCT_MODEL.md` - load when a task needs actors, object families, or the operating loops.
- `docs/product/CAPABILITY_MAP.md` - load when a task needs to understand what the product must do without mapping capabilities to screens.

## Architecture

- Native decisions: `.agent/DECISIONS.md`
- `docs/product/DOMAIN_MAP.md` - load when changing or reasoning about product domains, responsibilities, ownership, or cross-domain relationships.
- `docs/product/CORE_OBJECTS.md` - load when using or naming core product objects, lifecycles, ownership, or relationships.
- No structural technical stack decision exists yet. Stack decisions begin in M005.

## Domains

- `docs/product/DOMAIN_MAP.md` - start here for domain boundaries.
- `docs/product/CORE_OBJECTS.md` - load when a task touches object ownership or lifecycle.
- `docs/product/PRODUCT_GLOSSARY.md` - load before naming concepts that may be ambiguous.
- For automation tasks, load `DOMAIN_MAP`, `CORE_OBJECTS`, and `PRODUCT_GLOSSARY`; then load `CAPABILITY_MAP` only if capability scope is needed.
- For content, media, video, image, or template tasks, load `PRODUCT_MODEL`, `CORE_OBJECTS`, and `PRODUCT_GLOSSARY`.
- Do not invent domain contracts beyond the product architecture without a new milestone decision.

## Design

- Current design principle: Web Desktop and Mobile WebApp are distinct experiences with shared foundations.
- `docs/product/PLATFORM_SCOPE.md` - load when deciding whether a capability belongs on Desktop Web, Mobile WebApp, or both.
- `docs/product/CORE_JOURNEYS.md` - load when preparing UX architecture for M003 or M004.
- `docs/design/DESIGN_SYSTEM_SPEC.md` - start here for any design-system, visual foundation, component taxonomy, platform design, or UI pattern task.
- `docs/design/DESIGN_PHILOSOPHY.md` - load when judging visual character, reference use, or anti-generic product aesthetics.
- `docs/design/DESIGN_PRINCIPLES.md` - load when evaluating design trade-offs or future component/pattern proposals.
- `docs/design/VISUAL_LANGUAGE.md` - load when working on hierarchy, surfaces, rhythm, or visual tone.
- `docs/design/TOKEN_ARCHITECTURE.md` - load before introducing or changing any design token.
- `docs/design/COLOR_SYSTEM.md` - load before using color semantics, status colors, data colors, or light/dark theme behavior.
- `docs/design/TYPOGRAPHY.md` - load for type roles, hierarchy, numeric/data text, or font selection criteria.
- `docs/design/SPACING_LAYOUT_DENSITY.md` - load for spacing, grid, desktop/mobile layout foundations, or density decisions.
- `docs/design/SHAPE_ELEVATION.md` - load for radius, cards, borders, containers, floating surfaces, and elevation.
- `docs/design/ICONOGRAPHY.md` - load before choosing or applying icon patterns.
- `docs/design/MOTION.md` - load for animation, transitions, feedback, and reduced-motion behavior.
- `docs/design/INTERACTION_STATES.md` - load for default, hover, focus, selected, disabled, loading, status, and operational states.
- `docs/design/ACCESSIBILITY.md` - load for accessibility requirements in any UI/UX task.
- `docs/design/COMPONENT_TAXONOMY.md` - load before proposing components or classifying shared/platform/domain ownership.
- `docs/design/EDITOR_UI_PRINCIPLES.md` - load for automation flow builder, video studio, image studio, canvas, inspector, toolbar, selection, drag/drop, or editor patterns.
- `docs/design/TABLE_DATA_DENSE_UI.md` - load for tables, lists, filters, sorting, bulk selection, dense management views, and responsive reduction of dense data.
- `docs/design/DATA_VISUALIZATION.md` - load for analytics, charts, metrics, trends, comparisons, legends, and dashboard decisions.
- `docs/design/AI_EXPERIENCE.md` - load for AI assist, generate, analyze, recommend, optimize, explain, uncertainty, applied changes, and undo patterns.
- `docs/design/PLATFORM_DESIGN.md` - load for Desktop Web vs Mobile WebApp platform design scope.
- `docs/design/DESIGN_GOVERNANCE.md` - load before creating new UI components, patterns, or tokens.

## Integrations

- Future integration documents will be created in their corresponding milestones.
- No integration architecture has been selected yet.

## Legacy

- `docs/legacy/LEGACY_BOUNDARY.md` - rules for using the old Creatye system as reference material.

## M001 document loading guide

- Product definition task -> `PRODUCT_VISION`, then `PRODUCT_PRINCIPLES`.
- Capability task -> `CAPABILITY_MAP`, then relevant domain section in `DOMAIN_MAP`.
- Domain task -> `DOMAIN_MAP`, `CORE_OBJECTS`, `PRODUCT_GLOSSARY`.
- Automation task -> automation section in `DOMAIN_MAP`, automation objects in `CORE_OBJECTS`, automation terms in `PRODUCT_GLOSSARY`.
- Publishing task -> publishing section in `DOMAIN_MAP`, publishing objects in `CORE_OBJECTS`, `PLATFORM_SCOPE` if platform experience is involved.
- Analytics or optimization task -> `DOMAIN_MAP`, `PRODUCT_PRINCIPLES`, `CORE_OBJECTS`.
- AI / Intelligence task -> `PRODUCT_PRINCIPLES`, `DOMAIN_MAP`, `CAPABILITY_MAP`.
- Desktop vs Mobile task -> `PLATFORM_SCOPE`, then `CORE_JOURNEYS` only when journey scope is needed.

## M002 design loading guide

- Visual component task -> `DESIGN_SYSTEM_SPEC`, then `COMPONENT_TAXONOMY`, then the relevant foundation document.
- Token task -> `DESIGN_SYSTEM_SPEC`, `TOKEN_ARCHITECTURE`, then `COLOR_SYSTEM`, `TYPOGRAPHY`, `SPACING_LAYOUT_DENSITY`, or `SHAPE_ELEVATION` as needed.
- Automation editor task -> `DESIGN_SYSTEM_SPEC`, `EDITOR_UI_PRINCIPLES`, `COMPONENT_TAXONOMY`, then automation sections in `DOMAIN_MAP` and `PRODUCT_GLOSSARY`.
- Video or image editor task -> `DESIGN_SYSTEM_SPEC`, `EDITOR_UI_PRINCIPLES`, `PLATFORM_DESIGN`, then relevant content/creative docs.
- Analytics task -> `DESIGN_SYSTEM_SPEC`, `DATA_VISUALIZATION`, then analytics sections in `DOMAIN_MAP` and `CAPABILITY_MAP`.
- Table or dense management task -> `DESIGN_SYSTEM_SPEC`, `TABLE_DATA_DENSE_UI`, `SPACING_LAYOUT_DENSITY`, then relevant product/domain docs.
- AI experience task -> `DESIGN_SYSTEM_SPEC`, `AI_EXPERIENCE`, then `PRODUCT_PRINCIPLES` and relevant domain docs.
- Desktop UX task -> `DESIGN_SYSTEM_SPEC`, `PLATFORM_DESIGN`, `SPACING_LAYOUT_DENSITY`, then relevant product docs.
- Mobile UX task -> `DESIGN_SYSTEM_SPEC`, `PLATFORM_DESIGN`, `ACCESSIBILITY`, then relevant product docs.
- Governance review -> `DESIGN_GOVERNANCE`, then the relevant specialized design document.

## Web UX

- `docs/ux/web/WEB_UX_SPEC.md` - start here for any Web Desktop UX architecture task.
- `docs/ux/web/INFORMATION_ARCHITECTURE.md` - load for area grouping, hierarchy, and capability-to-area placement.
- `docs/ux/web/NAVIGATION.md` - load for primary sidebar, workspace context, official navigation map, and transversal navigation concepts.
- `docs/ux/web/APPLICATION_SHELL.md` - load for shell, page header, global create, search/command, notifications, and settings access.
- `docs/ux/web/PRODUCT_AREAS.md` - load for Home, Pages, Content, Automations, Publishing, Analytics, AI, Notifications, and Settings behavior.
- `docs/ux/web/PAGE_ARCHETYPES.md` - load before designing list, detail, dashboard, editor, library, calendar, settings, full-canvas, or inspector-based surfaces.
- `docs/ux/web/SCREEN_INVENTORY.md` - load when reasoning about screen count, tabs, modals, overlays, and what should not become a screen.
- `docs/ux/web/CORE_WORKFLOWS.md` - load for macro desktop workflows.
- `docs/ux/web/CROSS_DOMAIN_FLOWS.md` - load when preserving Page, Content, Automation, Publishing, Analytics, or failure context across domains.
- `docs/ux/web/EDITOR_ARCHITECTURE.md` - load for Video Studio, Image Studio, Flow Builder, editor shell, canvas, inspector, and node/tool panels.
- `docs/ux/web/DATA_DENSE_PATTERNS.md` - load for filters, tables, bulk actions, publishing data, analytics density, and management views.
- `docs/ux/web/SYSTEM_STATES.md` - load for loading, empty, first-use, processing, queued, syncing, scheduled, success, partial success, warning, failed, offline, permission, and expired connection states.
- `docs/ux/web/RESPONSIVE_DESKTOP.md` - load for Wide, Standard, and Narrow Desktop behavior.
- `docs/ux/web/POWER_USER_PATTERNS.md` - load for shortcuts, command palette, quick navigation, multi-select, undo/redo, context actions, and quick create.

## M003 Web UX loading guide

- Web navigation task -> `WEB_UX_SPEC`, `NAVIGATION`, `APPLICATION_SHELL`.
- Application shell task -> `WEB_UX_SPEC`, `APPLICATION_SHELL`, `RESPONSIVE_DESKTOP`, relevant design-system docs.
- Pages task -> `WEB_UX_SPEC`, `PRODUCT_AREAS`, `CROSS_DOMAIN_FLOWS`, Page/Social Presence sections in product docs.
- Content task -> `WEB_UX_SPEC`, `PRODUCT_AREAS`, `CORE_WORKFLOWS`, Content/Creative Production sections in product docs.
- Automation UI task -> `WEB_UX_SPEC`, `EDITOR_ARCHITECTURE`, `PRODUCT_AREAS`, Automation domain docs, relevant design-system docs.
- Video Studio task -> `WEB_UX_SPEC`, `EDITOR_ARCHITECTURE`, Content/Creative Production docs, relevant design-system docs.
- Image Studio task -> `WEB_UX_SPEC`, `EDITOR_ARCHITECTURE`, Content/Creative Production docs, relevant design-system docs.
- Publishing task -> `WEB_UX_SPEC`, `PRODUCT_AREAS`, `DATA_DENSE_PATTERNS`, Publishing domain docs.
- Analytics task -> `WEB_UX_SPEC`, `PRODUCT_AREAS`, `DATA_DENSE_PATTERNS`, `docs/design/DATA_VISUALIZATION.md`, Analytics domain docs.
- AI UX task -> `WEB_UX_SPEC`, `PRODUCT_AREAS`, `docs/design/AI_EXPERIENCE.md`, relevant product domain docs.
- Narrow Desktop task -> `WEB_UX_SPEC`, `RESPONSIVE_DESKTOP`, `APPLICATION_SHELL`, `DATA_DENSE_PATTERNS` if dense data is involved.

## Mobile UX

- `docs/ux/mobile/MOBILE_UX_SPEC.md` - start here for any Mobile WebApp UX architecture task.
- `docs/ux/mobile/NAVIGATION.md` - load for bottom navigation, Page context entry, and forbidden automatic nav additions.
- `docs/ux/mobile/APPLICATION_SHELL.md` - load for top context bar, workspace/page context, notifications, main content, bottom nav, sheets, and focused tasks.
- `docs/ux/mobile/HOME.md` - load for Mobile Home command summary and attention/today/performance/opportunity behavior.
- `docs/ux/mobile/CONTENT_CREATE.md` - load for Content, Create, Quick Image, Quick Video, templates, and quick creation flows.
- `docs/ux/mobile/PUBLISHING.md` - load for mobile publishing agenda, views, statuses, and publishing actions.
- `docs/ux/mobile/ACTIVITY.md` - load for operational monitoring, processing, completed jobs, failures, and system warnings.
- `docs/ux/mobile/PAGE_CONTEXT.md` - load for Page selector, Page Detail, and Page context preservation.
- `docs/ux/mobile/AUTOMATION_MOBILE.md` - load for mobile automation status, health, executions, errors, simplified flow viewing, and limited actions.
- `docs/ux/mobile/ANALYTICS_MOBILE.md` - load for contextual analytics, analytics summary, trends, alerts, comparisons, and action paths.
- `docs/ux/mobile/MOBILE_PATTERNS.md` - load for Desktop-to-Mobile pattern translation, touch principles, mobile filters, offline/connection awareness, and mobile density.
- `docs/ux/mobile/SYSTEM_STATES.md` - load for mobile loading, skeleton, empty, processing, queued, syncing, failed, offline, permission, and expired connection states.
- `docs/ux/mobile/CAPABILITY_MATRIX.md` - load when comparing Desktop vs Mobile responsibility.
- `docs/ux/mobile/SCREEN_INVENTORY.md` - load when reasoning about Mobile screen count, sheets, tabs, dialogs, states, and bottom-nav exclusions.
- `docs/ux/mobile/CORE_WORKFLOWS.md` - load for cross-domain Mobile flows.

## M004 Mobile UX loading guide

- Mobile Home task -> `MOBILE_UX_SPEC`, `HOME`, relevant design-system docs.
- Mobile navigation task -> `MOBILE_UX_SPEC`, `NAVIGATION`, `APPLICATION_SHELL`.
- Mobile publishing task -> `MOBILE_UX_SPEC`, `PUBLISHING`, Publishing product docs.
- Mobile automation task -> `MOBILE_UX_SPEC`, `AUTOMATION_MOBILE`, Automation product docs.
- Mobile content/create task -> `MOBILE_UX_SPEC`, `CONTENT_CREATE`, Content/Creative Production product docs.
- Mobile Page context task -> `MOBILE_UX_SPEC`, `PAGE_CONTEXT`, Social Presence/Page product docs.
- Mobile analytics task -> `MOBILE_UX_SPEC`, `ANALYTICS_MOBILE`, Analytics product docs, `docs/design/DATA_VISUALIZATION.md`.
- Mobile visual task -> `MOBILE_UX_SPEC`, `docs/design/PLATFORM_DESIGN.md`, relevant design foundation.
- Mobile state/offline task -> `MOBILE_UX_SPEC`, `SYSTEM_STATES`, `MOBILE_PATTERNS`.
- Desktop-to-Mobile translation task -> `MOBILE_UX_SPEC`, `MOBILE_PATTERNS`, relevant Web UX and Design System docs.

## Visual Calibration

- `docs/design/calibration/VISUAL_CALIBRATION_SPEC.md` - start here for any visual calibration, visual lock, reference alignment, or implementation-prep visual task.
- `docs/design/calibration/VISUAL_DIRECTION.md` - load for visual personality, current Creatye preservation, brand posture, color/type/control/card/studio/mobile/analytics direction.
- `docs/design/calibration/REFERENCE_BOARD.md` - historical calibration rationale only; current implementation must use Creatye Canvas code and tokens as source of truth.
- `docs/design/calibration/CALIBRATION_SURFACES.md` - load when preparing or reviewing calibration surfaces.
- `docs/design/calibration/DESKTOP_STUDIO_DIRECTION.md` - load for Desktop Studio visual flow, Edit/Review/Publish Setup/Publish-Schedule journey, and Studio complexity guardrails.
- `docs/design/calibration/MOBILE_STUDIO_DIRECTION.md` - load for Mobile Studio as a first-class creation experience.
- `docs/design/calibration/DASHBOARD_DIRECTION.md` - load for Command Center visual direction.
- `docs/design/calibration/DATA_UI_DIRECTION.md` - load for card/list-first operational data UI.
- `docs/design/calibration/ANALYTICS_DIRECTION.md` - load for social/content-first analytics visuals.
- `docs/design/calibration/CONTROL_FINISHING.md` - load for typography, controls, buttons, inputs, tabs, dropdowns, and component finishing.

## M004.5 visual calibration loading guide

- Command Center visual task -> `VISUAL_CALIBRATION_SPEC`, `DASHBOARD_DIRECTION`, relevant design foundation docs.
- Desktop Studio task -> `VISUAL_CALIBRATION_SPEC`, `DESKTOP_STUDIO_DIRECTION`, `docs/ux/web/WEB_UX_SPEC.md`, relevant product docs.
- Mobile Studio task -> `VISUAL_CALIBRATION_SPEC`, `MOBILE_STUDIO_DIRECTION`, `docs/ux/mobile/MOBILE_UX_SPEC.md`, relevant product docs.
- Data UI task -> `VISUAL_CALIBRATION_SPEC`, `DATA_UI_DIRECTION`, relevant Web/Mobile UX docs.
- Analytics visual task -> `VISUAL_CALIBRATION_SPEC`, `ANALYTICS_DIRECTION`, relevant product and design docs.
- Controls/typography task -> `VISUAL_CALIBRATION_SPEC`, `CONTROL_FINISHING`, `docs/design/TYPOGRAPHY.md`, relevant component taxonomy.
- Current visual check -> `docs/design-system/creatye-canvas.md`, current route implementation, and the relevant specialized calibration doc.

## Technical Architecture

- `docs/architecture/TECHNICAL_ARCHITECTURE_SPEC.md` - authoritative entry point for M005 technical architecture.
- `docs/architecture/SYSTEM_CONTEXT.md` - load for system context diagrams and high-level responsibility split.
- `docs/architecture/RUNTIME_TOPOLOGY.md` - load for Web, Worker, Postgres, Redis, R2, provider, and observability runtime responsibilities.
- `docs/architecture/APPLICATION_ARCHITECTURE.md` - load for layers, validation, error model, transactions, and concurrency.
- `docs/architecture/REPOSITORY_STRUCTURE.md` - load for future monorepo layout, package ownership, and dependency rules.
- `docs/architecture/DOMAIN_BOUNDARIES.md` - load when mapping product domains to technical boundaries.
- `docs/architecture/DATA_ARCHITECTURE.md` - load for PostgreSQL, Prisma, schema, tenancy, status, retention, and time rules.
- `docs/architecture/AUTH_SECURITY_ARCHITECTURE.md` - load for authentication, authorization, workspace isolation, secrets, signed uploads, webhook security, and baseline security.
- `docs/architecture/INTEGRATION_ARCHITECTURE.md` - load for Meta/social provider isolation, webhook processing, Social Connection vs Page, and provider normalization.
- `docs/architecture/AUTOMATION_ARCHITECTURE.md` - load for automation authoring, versioning, runtime, execution, waits, and idempotency.
- `docs/architecture/MEDIA_PIPELINE_ARCHITECTURE.md` - load for R2, direct uploads, media processing, FFmpeg, Studio outputs, and render jobs.
- `docs/architecture/PUBLISHING_ARCHITECTURE.md` - load for Publication, Target, Publish Attempt, Published Content, scheduled publishing, and retries.
- `docs/architecture/ANALYTICS_ARCHITECTURE.md` - load for typed events, metrics, aggregation, and analytics event dimensions.
- `docs/architecture/AI_ARCHITECTURE.md` - load for AI provider abstraction, server-side model/prompt/usage/cost governance, and async AI work.
- `docs/architecture/OBSERVABILITY_RELIABILITY.md` - load for structured logs, correlation, reliability, outbox, retries, and idempotency.
- `docs/architecture/DEPLOYMENT_ARCHITECTURE.md` - load for deployment topology, environments, secrets, and worker hosting constraints.
- `docs/architecture/TESTING_ARCHITECTURE.md` - load for unit, integration, contract, and E2E test strategy.
- `docs/architecture/LEGACY_TECHNICAL_MAPPING.md` - load before using any legacy technical knowledge.

## M005 technical architecture loading guide

- Database task -> `TECHNICAL_ARCHITECTURE_SPEC`, `DATA_ARCHITECTURE`, `DOMAIN_BOUNDARIES`, relevant product docs.
- Auth/security task -> `AUTH_SECURITY_ARCHITECTURE`, `DATA_ARCHITECTURE`, relevant product/domain docs.
- Meta/social integration task -> `INTEGRATION_ARCHITECTURE`, `AUTH_SECURITY_ARCHITECTURE`, Social Presence product docs.
- Automation runtime task -> `AUTOMATION_ARCHITECTURE`, Automation product docs, relevant Web/Mobile UX docs.
- Video Studio infrastructure task -> `MEDIA_PIPELINE_ARCHITECTURE`, Desktop/Mobile Studio UX docs, Visual Calibration Studio docs.
- Image Studio infrastructure task -> `MEDIA_PIPELINE_ARCHITECTURE`, Desktop/Mobile Studio UX docs, Visual Calibration Studio docs.
- Publishing task -> `PUBLISHING_ARCHITECTURE`, Publishing UX docs, Social Presence docs.
- Analytics task -> `ANALYTICS_ARCHITECTURE`, Analytics visual calibration, Product Model.
- AI task -> `AI_ARCHITECTURE`, Product Principles, relevant domain docs.
- Worker/queue task -> `RUNTIME_TOPOLOGY`, `OBSERVABILITY_RELIABILITY`, relevant workload architecture doc.
- Repository setup task -> `REPOSITORY_STRUCTURE`, `APPLICATION_ARCHITECTURE`, `DOMAIN_BOUNDARIES`.
- Legacy review task -> `LEGACY_TECHNICAL_MAPPING`, then the relevant architecture doc.

## Implementation

- `docs/product/FRONTEND_COMPLETION_MAP.md` - discovery inventory and route-by-route frontend implementation matrix for M006.5.
- `docs/product/FRONTEND_COMPLETION_REPORT.md` - completed surfaces, interactions, states, responsive behavior, backend seams, validation evidence, and known limitations.
- `docs/design-system/luma-reference-audit.md` - sanitized read-only structural audit that separates observed facts, approximate values, Creatye adaptations, and non-copy boundaries.
- `docs/design-system/creatye-canvas.md` - implemented Creatye Canvas direction, semantic token contract, foundations, component inventory, calibration routes, and guardrails.
- `docs/design-system/responsiveness.md` - responsive behavior and evidence for 390, 768, 1100, 1440, and 1920 px.
- `docs/implementation/M006_IMPLEMENTATION_GUIDE.md` - start here for M006 repository structure, commands, design-system implementation locations, routes, responsive strategy, light/dark strategy, and future UI governance.
- `docs/design/reviews/M006_VISUAL_PARITY_AUDIT.md` - per-reference audit of all 31 local visual specifications and the required M006 corrections.
- `docs/design/reviews/M006_FINAL_VISUAL_PARITY.md` - final surface-to-reference mapping, concrete parity evidence, screenshot inventory, and remaining fixture-level differences.
- `apps/web/` - Next.js App Router foundation, shells, design-system playground, and visual calibration routes.
- `apps/web/src/components/product/product-ui.tsx` - shared product composition primitives for headers, search, tabs, pagination, dialogs, drawers, empty states, and notices.
- `apps/web/src/lib/product-fixtures.ts` - typed frontend fixtures for Pages, Templates, Studio, Automations, Publishing, and Analytics.
- `apps/worker/` - buildable TypeScript worker foundation.
- `packages/ui/` - implemented tokens, CSS, and reusable UI components.
- `packages/shared/`, `packages/domain/`, `packages/observability/` - shared primitives, domain vocabulary, and logging foundation.
- Future packages from M005 such as `db`, `integrations`, `queue`, `media`, `analytics`, and `ai` should be created only when their first real implementation lands.

## M006 implementation loading guide

- UI component task -> `docs/implementation/M006_IMPLEMENTATION_GUIDE.md`, `packages/ui/`, `docs/design/DESIGN_SYSTEM_SPEC.md`, `docs/design/calibration/VISUAL_CALIBRATION_SPEC.md`.
- Design token task -> `packages/ui/src/styles.css`, `docs/design/TOKEN_ARCHITECTURE.md`, `docs/design/COLOR_SYSTEM.md`, `docs/design/TYPOGRAPHY.md`, `docs/design/SHAPE_ELEVATION.md`.
- Desktop shell task -> `apps/web/src/components/desktop-shell.tsx`, `docs/ux/web/APPLICATION_SHELL.md`, `docs/ux/web/NAVIGATION.md`, `docs/design/calibration/VISUAL_DIRECTION.md`.
- Mobile shell task -> `apps/web/src/components/mobile-shell.tsx`, `docs/ux/mobile/APPLICATION_SHELL.md`, `docs/ux/mobile/NAVIGATION.md`, and current mobile route behavior.
- Studio UI task -> `apps/web/src/components/screens/desktop-studio-calibration.tsx`, `apps/web/src/components/screens/mobile-calibration.tsx`, `docs/design/calibration/DESKTOP_STUDIO_DIRECTION.md`, `docs/design/calibration/MOBILE_STUDIO_DIRECTION.md`.
- Command Center task -> `apps/web/src/components/screens/command-center.tsx`, `docs/design/calibration/DASHBOARD_DIRECTION.md`, and current Dashboard behavior.
- Pages task -> `apps/web/src/components/screens/pages-calibration.tsx`, `docs/ux/web/PRODUCT_AREAS.md`, `docs/design/calibration/DATA_UI_DIRECTION.md`, and Creatye Canvas tokens.
- Data UI / Automations task -> `apps/web/src/components/screens/automations-calibration.tsx`, `docs/design/calibration/DATA_UI_DIRECTION.md`, and current Automations behavior.
- Visual review task -> `scripts/visual-review.mjs`, current routes, and `docs/design-system/creatye-canvas.md`; diagnostics are screenshot-independent.
