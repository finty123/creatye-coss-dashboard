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
