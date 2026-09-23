# Frontend Completion Map

## Purpose

This document is the execution contract for the frontend-only completion of Creatye Studio. The current Creatye Canvas implementation is the visual source of truth. Legacy Creatye documentation contributes functional knowledge only.

No backend, authentication provider, database, Meta API, queue, storage, rendering pipeline, analytics ingestion, or AI provider is implemented in this milestone. All product behavior uses typed frontend fixtures and local state with explicit future integration seams.

## Discovery summary

### Current complete

- Creatye Canvas semantic tokens and reusable UI primitives.
- Desktop floating shell, sidebar, mobile bottom navigation, and System/Light/Dark appearance menu.
- Internal `/design-system` route.
- Buildable Next.js and worker foundations.

### Current partial

- Dashboard creation surface and recent board entry.
- Connected Pages list.
- Templates grid.
- Automation overview cards.
- Video Studio calibration shell.
- Mobile Studio calibration flow.

### Missing or placeholder

- Global search/account/mobile navigation interactions.
- Page detail and Page-scoped operational views.
- Complete template search/filter/sort/detail/create/edit/use flows.
- Complete Video Studio Select/Edit/Review/Publish/History journey.
- Dedicated Image Studio.
- Automation detail, activity, settings, analytics, and workflow builder.
- Publishing calendar/list/detail/reschedule flows.
- Analytics product area.
- Product Settings and Help/Feedback routes.
- Loading, filtered-empty, error, success, partial, processing, disabled, and pagination coverage across data surfaces.
- Cross-domain routes currently represented by hash links or dead controls.

### Out of scope

- Login, registration, password recovery, and authenticated session implementation.
- Real workspace/account switching.
- Real Meta OAuth or provider connection.
- Production persistence, jobs, rendering, publishing, analytics, and AI execution.
- Legacy Inbox, Contacts, Responses, media importer, and background-removal as standalone primary products.

## Implementation matrix

| Screen | Route | Platform | Current status | Functions required | Legacy context | Creatye patterns | Phase |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Global shell | all desktop routes | Desktop/Narrow | Partial | search, account menu, mobile drawer, valid navigation | screens, components | floating sidebar, top actions, command UI | 1 |
| Dashboard | `/` | All | Partial | create journey, recent work, attention, schedule, recommendations | overview, flows, publishing, integrations | AI composer, spatial boards, restrained operational rail | 2 |
| Pages list | `/pages` | All | Partial | search, platform/status/sort, pagination, connect, selection | screens, state, integrations | Botcake-inspired organization in Creatye Canvas | 3 |
| Page detail | `/pages/[pageId]` | All | Missing | overview, content, publishing, automations, analytics, settings | Meta/Page flows | page header, tabs, dense lists, contextual actions | 3 |
| Models library | `/templates` | All | Partial | search, filters, view, favorites, pagination, preview, create/edit/use | templates, media, AI | approved media cards and filters | 4 |
| Video Studio Select | `/studio?step=select` | Desktop/Narrow | Partial | search, tags, page, ratio, batch selection, pagination | Studio batches, media | creator workspace and media cards | 5 |
| Video Studio Edit | `/studio?step=customize` | Desktop/Narrow | Partial | tools, canvas, clips, captions, audio, undo/redo, inspector | media pipeline, templates, AI | current Studio shell | 5 |
| Video Studio Review | `/studio?step=review` | Desktop/Narrow | Missing | variants, warnings, destination compatibility, summary | batches, publishing | focused review composition | 5 |
| Video Studio Publish | `/studio?step=publish` | All | Partial | destinations, caption, schedule, validation, draft, success | publishing, state machines | social composer | 5 |
| Studio History | `/studio?step=history` | All | Missing | processing, scheduled, failed, retry, details, pagination | batch/job states | operational list/cards | 5 |
| Image Studio | `/image-studio` | All | Missing | create, edit, variants, review, publish, history | image batch, media, AI | Studio identity with image-specific composition | 6 |
| Automations list | `/automations` | All | Partial | tabs, search, filters, pagination, create, duplicate, status actions | workflow operations | operational cards/list | 7 |
| Automation detail | `/automations/[automationId]` | All | Missing | flow summary, activity, analytics, settings | workflow/run state | contextual product tabs | 7 |
| Workflow builder | `/automations/[automationId]/builder` | Desktop/Narrow | Missing | canvas, node library, selection, connect, inspector, zoom, validation | editor, states, flows | full-canvas Creatye editor | 8 |
| Automation activity | `/automations/[automationId]?tab=activity` | All | Missing | executions, filters, pagination, details, failures | runs/logs/resumes | dense operational list | 8 |
| Publishing | `/publishing` | All | Missing | calendar/list/agenda, filters, statuses, details, reschedule, retry | publishing, jobs, state | integrated operational area | 9 |
| Analytics | `/analytics` | All | Missing | overview/content/pages/automation/publishing, filters, insights, actions | insights flow | content-first charts and ranked media | 10 |
| Settings | `/settings` | All | Missing | account, workspace, appearance, notifications, connections, security, usage | auth, integrations, environment | settings navigation and forms | 11 |
| Help & feedback | `/help` | All | Missing | search, shortcuts, resources, issue and feedback forms | current product scope | quiet support surface | 12 |
| Mobile Studio | `/mobile` | Mobile | Partial | complete navigation, functional filters/tools/publish/history | Studio/mobile audit | app-like bottom navigation and sheets | 13 |

## Interaction contract

- Search, filters, sorting, tabs, pagination, selection, bulk actions, menus, drawers, dialogs, forms, toggles, schedules, fake save/publish, and state previews must mutate local typed state.
- Buttons and links must lead to a valid route, open a working surface, or expose a clearly disabled state with explanation.
- Data-driven areas must expose appropriate loading, empty, filtered-empty, error, success, partial, disabled, and processing states.
- Cross-flow context is carried in query parameters where production routing will later use persisted IDs.

## Fixture strategy

- Product types and realistic records live under `apps/web/src/lib/` rather than inside route components.
- Fixtures include enough volume and status variety for filters and pagination.
- Local mutation simulates saves, status changes, retries, scheduling, and success feedback.
- Future services can replace fixture selectors without changing route composition.

## Responsive contract

- 1024-1200 px remains Desktop with prioritized metadata and collapsible secondary regions.
- 720 px and below uses the existing mobile navigation and touch-first sheets/actions where the domain belongs on Mobile.
- Required review sizes: 1440, 1200, 1024, and 390 px, with light and dark coverage.

## Backend integration seams

- Pages -> social connection and Page services.
- Studio -> media, template, render/batch, AI, and publishing services.
- Automations -> workflow definition, execution, activity, and provider services.
- Publishing -> schedule, destination validation, queue, and provider services.
- Analytics -> typed events, aggregates, provider insights, and AI recommendation services.
- Settings -> identity, workspace, notification, integration, security, and usage services.
