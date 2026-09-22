# Decision Records

Format: lightweight ADRs.

## ADR-001: Jaxx is the official control plane
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Creatye Studio needs one project control plane for agent coordination, state, planning, decisions, progress, verification, and governance.
- **Decision:** Agent Jaxx is the official control plane. The "Agent Creatye" operating model is Jaxx plus `AGENTS.md`, project context, specialized skills, architectural governance, design governance, and documentation governance.
- **Consequences:** No parallel agent framework should be created for this repository.

## ADR-002: Codex and VS Code are the primary implementation environment
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Development needs a primary environment for agent-assisted implementation.
- **Decision:** Codex plus VS Code is the primary implementation environment.
- **Consequences:** Repository guidance and verification should assume this workflow unless a later decision changes it.

## ADR-003: Creatye Studio is the provisional operational name
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** The project needs an operational identity before final naming.
- **Decision:** Creatye Studio is the provisional operational name, and the repository remains `creatye-v2`.
- **Consequences:** Docs and Jaxx configuration may use Creatye Studio while allowing a future rename decision.

## ADR-004: Legacy Creatye is reference, not architecture
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** The old Creatye system contains useful knowledge but must not determine the new architecture by default.
- **Decision:** The legacy system is a reference for product, domain, integration, and experience knowledge. It is not the architecture base.
- **Consequences:** Any future reuse must be classified as REUSE, ADAPT, REWRITE, or DISCARD before action.

## ADR-005: Context is loaded progressively
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Agents need enough context to act safely without loading the whole project knowledge base.
- **Decision:** Context must be loaded progressively through task relevance: global rules, current state, active milestone, relevant domain, relevant architecture, relevant design context, impacted files, and dependencies.
- **Consequences:** Agents should use `docs/project/CONTEXT_INDEX.md` and the `context-manager` skill before significant work.

## ADR-006: Web Desktop and Mobile WebApp have distinct UX
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Creatye Studio will serve desktop productivity and mobile app-like workflows.
- **Decision:** Web Desktop is productivity-first. Mobile WebApp is app-first and touch-first. They share backend, domains, identity, foundations, primary tokens, and visual language, but may differ in navigation, composition, density, components, and flows.
- **Consequences:** Mobile must not be treated as simple responsive desktop.

## ADR-007: Structural decisions require explicit documentation
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Silent structural decisions create architecture drift and hidden coupling.
- **Decision:** No structural architecture decision should happen silently. Documentation must accompany meaningful implementation and decision changes.
- **Consequences:** Use `.agent/DECISIONS.md` for architectural decisions and keep documentation synchronized through the `documentation-manager` skill.

## ADR-008: Product architecture is organized around one integrated operation
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Creatye Studio combines creation, automation, publishing, distribution, analytics, intelligence, and optimization. These must not become disconnected product silos.
- **Decision:** The official product architecture is organized around the shared loop CREATE -> AUTOMATE -> PUBLISH / DISTRIBUTE -> ANALYZE -> OPTIMIZE -> REPEAT.
- **Consequences:** Capabilities and domains must serve the shared operation rather than isolated tool surfaces.

## ADR-009: M001 product domains are consolidated by responsibility
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Initial domain candidates had overlap between identity/workspace, social connection/page, media/content/video/image/template, and publishing/distribution.
- **Decision:** M001 consolidates domains as Workspace & Identity, Social Presence, Content Library, Creative Production, Automation, Publishing & Distribution, Analytics, Intelligence, Notification, and Settings & Governance.
- **Consequences:** Future product, UX, and technical work should preserve these ownership boundaries unless a later decision changes them.

## ADR-010: Intelligence and Analytics are cross-domain layers
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** AI and analytics can easily become isolated product areas that do not improve the operating loop.
- **Decision:** Intelligence and Analytics are product domains with cross-domain responsibilities. Analytics closes the loop; Intelligence assists and optimizes across relevant domains.
- **Consequences:** AI should not be modeled as a standalone chatbot, and analytics should not be modeled as a detached dashboard.

## ADR-011: Content concepts are separated by product responsibility
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Terms such as Media, Asset, Project, Content, Variant, Output, Video, Image, and Template can overlap without clear ownership.
- **Decision:** Media and Asset belong to content inventory, Project/Video/Image/Render belong to creative production, Content/Variant/Output describe publishable material, and Template is a reusable structure across creative/content/automation contexts.
- **Consequences:** Future code, UX, and documentation should use the product glossary before introducing new terms.

## ADR-012: Design system uses a four-level token architecture
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Creatye Studio needs visual consistency across dense operational software, creative editors, analytics, automation, publishing, and mobile workflows.
- **Decision:** The design system uses primitive, semantic, component, and product/domain tokens.
- **Consequences:** Future UI work must avoid arbitrary values and must introduce product/domain tokens only when stable product meaning requires them.

## ADR-013: Light and dark themes use semantic color
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** The product needs light and dark themes without hard-coding colors into components.
- **Decision:** Color is defined through semantic roles for canvas, surfaces, text, borders, actions, status, data visualization, and domain accents.
- **Consequences:** Components should consume semantic or component tokens, not raw color primitives.

## ADR-014: Desktop and Mobile share foundations but diverge in experience design
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** M001 established Desktop Web and Mobile WebApp as distinct experiences.
- **Decision:** M002 keeps shared brand language, core tokens, typography principles, color semantics, iconography, status language, and accessibility, while allowing platform-specific density, navigation, layout, tables, editors, sheets, quick actions, and touch behavior.
- **Consequences:** Mobile must not be implemented as compressed desktop in future UX milestones.

## ADR-015: Density is a first-class design-system foundation
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Creatye Studio must support operational tables, editors, media libraries, analytics, publishing, and management interfaces without confusing premium quality with empty space.
- **Decision:** The design system defines Comfortable, Standard, and Compact density levels.
- **Consequences:** Desktop should primarily use Standard and Compact; Mobile should use touch-appropriate Comfortable or mobile-tuned Standard.

## ADR-016: Design governance prevents future visual drift
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Future implementation will need many surfaces and specialized patterns across product domains.
- **Decision:** Before creating new components, teams must check existing components, patterns, tokens, platform needs, and domain needs.
- **Consequences:** Arbitrary color, spacing, radius, shadow, motion, icon families, duplicate components, and decorative components require explicit justification.

## ADR-017: Desktop primary navigation model is fixed for M003
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** The Web Desktop UX architecture was approved outside Codex and must be formalized without redesign.
- **Decision:** The official primary navigation is Home, Pages, Content, Automations, Publishing, Analytics, and Settings.
- **Consequences:** Video Studio, Image Studio, Templates, Calendar, Media, AI, Notifications, and other capabilities do not become primary sidebar items by default.

## ADR-018: Content is the parent area for creative work
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Video Studio, Image Studio, Templates, Library, Media, Assets, Projects, Variants, and Outputs can feel like separate products if exposed as peer applications.
- **Decision:** Content is the parent area for Library, Video Studio, Image Studio, and Templates.
- **Consequences:** Creative work should feel integrated with Content Library and Publishing rather than isolated export/download tools.

## ADR-019: Publishing is one integrated operational area
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Calendar, scheduler, queue, and published content can drift into separate products.
- **Decision:** Publishing remains one integrated area. Calendar and List are views; Queue is an operational state; Published is a status/filter.
- **Consequences:** Future UX should not create separate primary products for Calendar, Scheduler, Queue, or Published.

## ADR-020: Page is a reusable operational context
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Pages are central to the operation and connect Content, Publishing, Automations, and Analytics.
- **Decision:** Page context can be preserved into related operations, such as creating an automation or publication from Page Detail.
- **Consequences:** Entering work from a Page should keep Page scope visible and actionable.

## ADR-021: Cross-domain context preservation is required
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Creatye Studio should feel like one integrated operation rather than disconnected tools.
- **Decision:** Cross-domain flows must preserve meaningful context across Content, Studios, Publishing, Analytics, Pages, Automations, Templates, and failure recovery.
- **Consequences:** Future UX and implementation should avoid forcing users to reconstruct context after navigation.

## ADR-022: Narrow Desktop remains Desktop
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** The Desktop experience must remain usable in narrow windows, including approximately half of an ultrawide monitor.
- **Decision:** Narrow Desktop remains a desktop mode, not Mobile WebApp. Sidebar, inspectors, filters, tables, and editors adapt while preserving desktop workflows.
- **Consequences:** Future responsive UX should not swap to mobile navigation or mobile interaction patterns by default.

## ADR-023: AI is a transversal Web UX layer
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** AI appears across Content, Studios, Automation, Publishing, and Analytics but should not become a generic AI product.
- **Decision:** AI is a transversal UX layer, not a required primary navigation area.
- **Consequences:** AI entry points should be contextual, user-controlled, explainable, and aligned with M002 AI experience rules.

## ADR-024: Editors share shell principles
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Video Studio, Image Studio, and Flow Builder need different workflows but should remain cognitively consistent.
- **Decision:** Editors share shell principles around top context/actions, primary work area/canvas, optional left source/tool panel, right inspector, selection, zoom, undo/redo, and status.
- **Consequences:** Future editor UX can specialize by domain while preserving shared interaction expectations.

## ADR-025: Mobile is the operational companion
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Desktop already owns deep configuration, building, and operational control. Mobile must not become compressed Desktop.
- **Decision:** Mobile WebApp is the operational companion for monitoring, acting, publishing, approving, and correcting.
- **Consequences:** Mobile UX should prioritize focused tasks, quick action, status, and operational correction over deep multi-panel workflows.

## ADR-026: Mobile bottom navigation uses five approved items
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Mobile needs a focused navigation model that does not reproduce the Desktop sidebar.
- **Decision:** Mobile bottom navigation is Home, Content, Create, Publish, and Activity, with Create as the central action.
- **Consequences:** Pages, Automations, Analytics, Settings, and AI do not become permanent bottom navigation items by default.

## ADR-027: Page is mobile global context
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Pages are central to the product but should not become a bottom-nav destination on Mobile.
- **Decision:** Mobile exposes Page primarily as workspace/page context through the top context bar and selector.
- **Consequences:** Home, Content, Publish, and Activity should reflect selected Page context and preserve it through journeys.

## ADR-028: Full editors remain Desktop-first
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Desktop supports full Video Studio, Image Studio, and Automation Flow Builder. Mobile should support quick creation and correction.
- **Decision:** Full editors remain Desktop-first. Mobile supports Quick Image, Quick Video, simplified flow visualization, and limited automation actions.
- **Consequences:** Complex timeline editing, multi-panel editing, and structural automation editing are not primary Mobile requirements.

## ADR-029: Analytics is contextual on Mobile
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Mobile should surface performance signals without becoming a complex analytics workspace.
- **Decision:** Mobile analytics appears contextually in Home, Page, Content, Automation, and Publishing, with optional Analytics Summary drill-down.
- **Consequences:** Analytics is not a required permanent bottom navigation item and should prioritize summary, trend, alert, comparison, and action.

## ADR-030: Activity is the Mobile operational monitoring center
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Mobile users need a focused place to monitor publishing events, automation events, processing, failures, warnings, and completed jobs.
- **Decision:** Activity is the Mobile operational monitoring center with Needs Attention, Processing, and Completed structures.
- **Consequences:** Activity complements Notifications but does not replace notification alerts.

## ADR-031: Desktop-to-Mobile translation uses mobile-native patterns
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Desktop patterns must be translated thoughtfully rather than compressed into Mobile.
- **Decision:** Dropdowns become sheets when appropriate, inspectors become full sheets/focused screens, multi-panel layouts become sequential flows, tables become lists/summary rows, and bulk toolbars become limited selection actions.
- **Consequences:** Future Mobile UX should use these translations only when appropriate and preserve touch-first clarity.

## ADR-032: Mobile capability matrix governs platform scope
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Desktop and Mobile share product domains but differ in capability depth.
- **Decision:** M004 defines a Mobile capability matrix with Command Center simplified, quick-create studios, Automation monitor/limited, Publishing full/simplified, Calendar agenda, Analytics summary, Settings simplified, Bulk limited, Templates browse/use, and AI contextual.
- **Consequences:** Future Mobile work should follow capability depth rather than chase Desktop parity.

## ADR-033: Approved visual references are locked for calibration
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** M004.5 formalizes an already-approved visual direction and must not become open exploration.
- **Decision:** The approved calibration references are Linear for navigation/sidebar, Brex/Ramp for Command Center quality, card/list-first operational data UI, user-approved current/desktop Studio references for Studio, Dash Social for analytics, approved mobile creator/social direction for Mobile, and Vercel Geist for typography/control finishing.
- **Consequences:** Future visual work should borrow qualities from these references without copying brand identity or replacing Creatye's product journey.

## ADR-034: Operational data UI is card/list-first
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Dense table UI is not the approved primary visual language for Creatye operations.
- **Decision:** The primary operational data language is modern operational cards and organized list blocks.
- **Consequences:** Pages, Automations, Publishing, Content Library, and Activity should default to card/list-first patterns; tables remain available only where comparison, bulk management, or high density materially require them.

## ADR-035: Desktop Studio uses a creator-first step journey
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Current Creatye Studio's SELECT -> CUSTOMIZE -> PUBLISH journey is valuable and should be refined rather than replaced by heavy professional editing software patterns.
- **Decision:** Desktop Studio visual direction follows Edit -> Review -> Publish Setup -> Publish / Schedule.
- **Consequences:** Video Studio and Image Studio should remain creator-first, preview-forward, publishing-connected, and avoid Premiere/DaVinci/CapCut Desktop/Figma-like complexity as default.

## ADR-036: Mobile Studio is first-class
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Mobile must support real operational and creative utility, not only monitoring.
- **Decision:** Mobile Studio is a first-class experience supporting edit, post, schedule, and monitor with large preview, simple horizontal tools, bottom sheets, and touch-first workflow.
- **Consequences:** Future Mobile UX and UI should not reduce creation to passive monitoring or force Desktop editor patterns into Mobile.

## ADR-037: Command Center uses premium operational dashboard direction
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Home must be operational and premium without becoming promotional dashboard theater.
- **Decision:** Command Center visual direction is modular, premium, operational, and inspired by Brex/Ramp quality for sections such as Attention, Today, Performance, and Opportunities.
- **Consequences:** Future Home visuals should use elegant operational cards and action-oriented modules, not giant decorative metrics or generic SaaS dashboard patterns.

## ADR-038: Technical architecture is modular monolith plus dedicated worker
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Creatye Studio needs strong domain boundaries and async execution without premature microservices.
- **Decision:** Use a TypeScript modular monolith with `apps/web`, a dedicated `apps/worker`, and domain/infrastructure packages.
- **Consequences:** Domain boundaries should permit future extraction but remain in one repo/application architecture initially.

## ADR-039: PostgreSQL is the system of record
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Publishing, automation, media, analytics, scheduling, and tenancy require durable relational state.
- **Decision:** PostgreSQL is the authoritative system of record.
- **Consequences:** Redis/BullMQ cannot be business truth; critical work must persist durable state before async execution.

## ADR-040: Prisma is the single authoritative ORM/schema direction
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Legacy risks include divergent Prisma schemas and missing relational integrity.
- **Decision:** Use one Prisma schema/data layer as the single ORM/schema authority unless future repository evidence justifies a documented change.
- **Consequences:** No duplicate Prisma schemas or independently evolving database definitions.

## ADR-041: Supabase Auth provides authentication; Creatye owns authorization
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Authentication and authorization have different responsibilities and legacy auth was incomplete.
- **Decision:** Use Supabase Auth for authentication while Creatye domain logic owns workspace membership, roles/capabilities, resource ownership, and page-level access where appropriate.
- **Consequences:** Every server-side mutation must enforce authorization; UI visibility is not enough.

## ADR-042: Workspace is the tenant boundary
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Pages, media, content, automations, publications, analytics, AI operations, notifications, and templates are workspace-owned or workspace-scoped.
- **Decision:** Workspace is the tenant boundary and tenant-owned resources must be explicitly scoped.
- **Consequences:** Architecture must prevent accidental cross-workspace queries using application scoping, database constraints, and RLS where appropriate.

## ADR-043: Cloudflare R2 stores media objects
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Creatye requires uploaded media, derived media, render outputs, thumbnails, and temporary artifacts without routing large binaries through Web requests.
- **Decision:** Use Cloudflare R2 for object storage and keep metadata/references in PostgreSQL.
- **Consequences:** Storage keys must be deterministic/safe and cleanup must be reference-aware.

## ADR-044: Redis/BullMQ coordinates async work with durable DB-backed intent
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Media processing, AI, publishing, automation execution, analytics, and retries need background execution.
- **Decision:** Use Redis/BullMQ with a dedicated worker, while persisting critical state/job intent in PostgreSQL.
- **Consequences:** Queue loss must not silently lose critical business work; outbox/durable job intent is required where appropriate.

## ADR-045: Scheduled publishing is DB-backed
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Scheduled publications must survive Redis loss and long time horizons.
- **Decision:** PostgreSQL is source of truth for schedules; scheduler detects due publications and enqueues durable jobs.
- **Consequences:** Redis delayed jobs are not the only schedule source.

## ADR-046: Webhooks are durable and idempotent
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Provider webhooks can be duplicated, delayed, malformed, or delivered while queues/workers are unavailable.
- **Decision:** Webhook endpoints verify signatures, persist inbox/dedup records, respond quickly, and process asynchronously.
- **Consequences:** Provider payloads are normalized at integration boundaries and deduplication keys are mandatory.

## ADR-047: Automation execution uses versioned executable definitions
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Edited automations must not mutate structures used by active executions.
- **Decision:** Automation has Draft Flow Version, Published Flow Version, and Execution references the Published Version.
- **Consequences:** There is one canonical automation runtime with persisted execution state and idempotent step handling.

## ADR-048: Provider integrations are isolated
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Meta and future social providers differ and should not leak provider-specific structures throughout the app.
- **Decision:** Provider clients, webhooks, payload normalization, and provider-specific errors stay behind integration boundaries.
- **Consequences:** Social Presence models normalize provider differences without pretending all providers behave identically.

## ADR-049: Analytics uses typed events plus derived metrics
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** Approved analytics UX requires KPI, trend, content, insight, and action without repeatedly scanning transactional tables.
- **Decision:** Use typed append-only/product events with derived/aggregated metrics, PostgreSQL-first initially.
- **Consequences:** Events must not become uncontrolled free-form strings and should include operational dimensions.

## ADR-050: AI uses provider abstraction and server-side governance
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** AI is transversal and must not bind product logic directly to one provider.
- **Decision:** Use an AI provider abstraction with server-side credentials, prompt/model governance, usage/cost metadata, error normalization, and async execution when appropriate.
- **Consequences:** Do not build unnecessary autonomous-agent architecture or expose provider internals to UI.

## ADR-051: M006 uses npm workspaces for the TypeScript monorepo
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** M005 left the package manager open and the local environment has Node/npm available without pnpm.
- **Decision:** Use npm workspaces for the initial monorepo foundation.
- **Consequences:** `package-lock.json` is part of the reproducible foundation; future package-manager changes require an explicit migration decision.

## ADR-052: Implemented UI foundation lives in `packages/ui`
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** M006 requires real design tokens and reusable components without scattering arbitrary values through product screens.
- **Decision:** Put CSS tokens, component contracts, and reusable primitives in `packages/ui`.
- **Consequences:** Future Web UI must check `packages/ui` before introducing local components or styles.

## ADR-053: M006 calibration routes use typed fixtures only
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** M006 must validate visual language without implementing backend features.
- **Decision:** Use isolated typed fixture data inside `apps/web/src/lib/fixtures.ts`.
- **Consequences:** Fixture data must not become fake repositories or future production service logic.

## ADR-054: Visual review is part of the M006 verification gate
- **Date:** 2026-09-18
- **Status:** accepted
- **Context:** M006 cannot pass on compile-only validation because visual coherence is an explicit requirement.
- **Decision:** Add Playwright-based visual review through `npm run visual:review`.
- **Consequences:** Screenshots are generated under `.agent/tmp/m006-visual/` for review and remain outside version control.

## ADR-055: Creatye Canvas is the M006 structural visual system
- **Date:** 2026-09-22
- **Status:** accepted
- **Context:** The product owner requested a new original design system informed by a read-only structural audit of Luma while prohibiting copying of proprietary identity, copy, assets, or implementation.
- **Decision:** Adopt Creatye Canvas: a warm spatial shell, light floating surfaces, neutral selection, black primary actions, semantic color, restrained AI atmosphere, Geist typography, a full desktop sidebar, an intermediate icon rail, and a dedicated mobile composition.
- **Consequences:** Future calibration and UI implementation must consume the shared semantic tokens/components, retain the documented non-copy boundary, and validate Dashboard, Templates, and Studio before broader screen migration.
