# Web UX Spec

This is the official entry point for Creatye Studio Web Desktop UX Architecture.

M003 formalizes an already-approved Web Desktop architecture. It does not redesign navigation, create final screens, implement frontend, create React components, install dependencies, define technical architecture, or create database/API schemas.

## Experience model

Creatye Studio Desktop is a productivity-first operational platform.

It should feel like one integrated content/social operation, not a collection of separate tools.

## Official primary navigation

The official primary navigation is:

- Home
- Pages
- Content
- Automations
- Publishing
- Analytics
- Settings

Do not add new primary sidebar items without a later structural decision.

Video Studio, Image Studio, Templates, Calendar, Media, and AI are not automatically primary sidebar items.

## Application model

The global shell contains:

- Persistent sidebar.
- Workspace selector.
- Main content area.
- Contextual page header.
- Optional contextual panels.
- Global Create.
- Search / Command.
- Notifications.
- Profile / Settings access.

The shell should avoid a giant global header, stacked horizontal bars, and excessive chrome. Operational area is the priority.

## Document map

- `INFORMATION_ARCHITECTURE.md` - official grouping model and concept hierarchy.
- `NAVIGATION.md` - sidebar, workspace context, official navigation map, and transversal entry points.
- `APPLICATION_SHELL.md` - shell, page header, global create, search/command, notifications, settings access.
- `PRODUCT_AREAS.md` - Home, Pages, Content, Automations, Publishing, Analytics, AI, Notifications, Settings.
- `PAGE_ARCHETYPES.md` - list/management, detail, dashboard, editor, library, calendar, settings, full-canvas, inspector-based.
- `SCREEN_INVENTORY.md` - conceptual screen inventory and rules for tabs, modals, overlays, and states.
- `CORE_WORKFLOWS.md` - macro user flows inside the desktop architecture.
- `CROSS_DOMAIN_FLOWS.md` - continuity rules and approved cross-domain flows.
- `EDITOR_ARCHITECTURE.md` - Video Studio, Image Studio, Flow Builder, shared editor shell.
- `DATA_DENSE_PATTERNS.md` - filters, tables, bulk operations, management views, and dense desktop behavior.
- `SYSTEM_STATES.md` - loading, empty, failed, expired connection, processing, queued, partial success, and related states.
- `RESPONSIVE_DESKTOP.md` - Wide, Standard, and Narrow Desktop modes.
- `POWER_USER_PATTERNS.md` - shortcuts, command palette, quick navigation, multi-select, undo/redo, bulk actions, quick create.

## Context loading

Use this spec first for any Web Desktop UX task. Load specialized docs only when the task needs them.

Examples:

- Navigation task -> `WEB_UX_SPEC.md`, `NAVIGATION.md`, `APPLICATION_SHELL.md`.
- Automation UI task -> `WEB_UX_SPEC.md`, `EDITOR_ARCHITECTURE.md`, automation sections in product docs, relevant design docs.
- Video Studio task -> `WEB_UX_SPEC.md`, `EDITOR_ARCHITECTURE.md`, Content/Creative Production docs, relevant design docs.
- Analytics task -> `WEB_UX_SPEC.md`, Analytics product docs, `DATA_DENSE_PATTERNS.md`, `docs/design/DATA_VISUALIZATION.md`.
- Narrow Desktop task -> `WEB_UX_SPEC.md`, `RESPONSIVE_DESKTOP.md`.
