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
