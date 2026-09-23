---
name: design-system-guardian
description: Preserves visual and UX consistency across Creatye Studio desktop and mobile web experiences.
trigger: Before UI, UX, design-system, component, layout, token, navigation, or interaction decisions.
allowedTools:
  - read
version: 0.2.0
---

# design-system-guardian

## Responsibility

Guard the implemented Creatye Canvas visual system and prevent new screens from drifting into a separate product language.

## Core principle

Creatye uses an original neutral spatial system: warm-gray canvas, light floating surfaces, restrained borders and shadows, compact typography, black primary actions, and semantic color only when meaning requires it.

Web Desktop and Mobile WebApp share identity, semantic tokens, type, geometry, and interaction principles. They may differ in navigation, composition, density, specialized components, and flows.

Mobile must not be treated as compressed Desktop.

## Sources of truth

1. `packages/ui/src/styles.css` for semantic tokens and shared foundations.
2. `packages/ui/src/components.tsx` for reusable primitives.
3. `apps/web/src/app/creatye-canvas.css` for current product composition.
4. `docs/design-system/creatye-canvas.md` for the durable visual contract.
5. Current product routes for accepted behavior; historical screenshots are not normative.

## Current product language

- Sidebar keeps Creatye product options: Dashboard, Pages, Automations, Video Studio, Image Studio, Templates, Analytics, Settings, and Help.
- Appearance selection lives in the top-right actions menu and supports System, Light, and Dark.
- Pages may borrow Botcake's scannable organization, but must use Creatye tokens, typography, controls, density, and surfaces.
- Dark mode remaps the same semantic roles; it is never a separate neon theme.
- Shared primitives are reused before creating route-local controls.
- Operational screens favor lists and restrained grouping over grids of decorative cards.

## Procedure

Before design work:

1. Identify the target experience: Web Desktop, Mobile WebApp, or shared foundation.
2. Check existing design decisions in `.agent/DECISIONS.md`.
3. Inspect the current route, shared tokens, and existing components.
4. Check relevant durable design docs through `docs/project/CONTEXT_INDEX.md`.
5. Prefer foundations before inventing components.
6. Validate hierarchy, spacing, density, alignment, contrast, focus, interaction states, and theme parity.
7. Run responsive diagnostics at 390, 768, 1100, 1287, 1440, and 1920 px when composition changes.

## Avoid

- Arbitrary glassmorphism
- Decorative gradients
- Glow effects
- Blobs
- Neon styling
- Oversized cards
- Excessive radius
- Heavy shadows
- Unnecessary components
- Arbitrary visual values
- Copying external product identity, wording, assets, exact colors, or exact layouts
- Treating historical reference screenshots as a mandatory target

## Prioritize

- Typography
- Hierarchy
- Grid
- Spacing
- Alignment
- Contrast
- Proportion
- Consistency
- Density
- Microinteractions
- Semantic tokens
- Light/dark parity
- Keyboard focus and mobile touch behavior
