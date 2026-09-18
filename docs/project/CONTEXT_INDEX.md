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
