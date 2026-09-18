# Mobile UX Spec

This is the official entry point for Creatye Studio Mobile WebApp UX Architecture.

M004 formalizes an already-approved Mobile WebApp architecture. It does not redesign the architecture, reproduce Desktop, implement frontend, create React components, install dependencies, define technical architecture, or create database/API schemas.

## Experience model

Mobile is the operational companion, not the compressed control room.

Desktop:

- Configure.
- Build.
- Operate deeply.

Mobile:

- Monitor.
- Act.
- Publish.
- Approve.
- Correct.

Mobile is not Desktop responsive.

## Approved bottom navigation

The approved primary Mobile navigation is:

- Home.
- Content.
- Create.
- Publish.
- Activity.

Create is the central action.

Do not automatically add Pages, Automations, Analytics, Settings, or AI to bottom navigation. Those capabilities enter contextually.

## Shell model

The Mobile shell contains:

- Top context bar.
- Workspace / Page context.
- Notifications.
- Main content.
- Bottom Navigation.
- Optional sticky primary action.
- Bottom Sheets.
- Full-screen focused tasks.

Avoid desktop sidebar, complex top navigation, and multiple toolbars.

## Document map

- `NAVIGATION.md` - bottom navigation, Page context, and forbidden automatic nav additions.
- `APPLICATION_SHELL.md` - top context bar, workspace/page context, notifications, content area, bottom nav, sheets, focused tasks.
- `HOME.md` - Mobile command summary.
- `CONTENT_CREATE.md` - Content, Create, Quick Image, Quick Video, and templates.
- `PUBLISHING.md` - mobile publishing, agenda, statuses, and actions.
- `ACTIVITY.md` - operational monitoring center.
- `PAGE_CONTEXT.md` - Page selector, Page Detail, and context preservation.
- `AUTOMATION_MOBILE.md` - mobile automation monitoring and limited actions.
- `ANALYTICS_MOBILE.md` - contextual analytics and summary behavior.
- `MOBILE_PATTERNS.md` - Desktop-to-Mobile translations, touch principles, filters, offline awareness, and density.
- `SYSTEM_STATES.md` - mobile system states.
- `CAPABILITY_MATRIX.md` - Desktop vs Mobile capability matrix.
- `SCREEN_INVENTORY.md` - initial Mobile screen inventory.
- `CORE_WORKFLOWS.md` - cross-domain mobile flows.

## Context loading

Use this spec first for Mobile WebApp UX tasks. Load specialized docs only when the task needs them.

Examples:

- Mobile Home task -> `MOBILE_UX_SPEC.md`, `HOME.md`, relevant Design System docs.
- Mobile publishing -> `MOBILE_UX_SPEC.md`, `PUBLISHING.md`, Publishing product docs.
- Mobile automation -> `MOBILE_UX_SPEC.md`, `AUTOMATION_MOBILE.md`, Automation product docs.
- Mobile visual task -> `MOBILE_UX_SPEC.md`, `docs/design/PLATFORM_DESIGN.md`, relevant design foundation.
- Mobile state task -> `MOBILE_UX_SPEC.md`, `SYSTEM_STATES.md`, `MOBILE_PATTERNS.md` if offline/sync is involved.
