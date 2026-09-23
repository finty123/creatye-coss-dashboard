---
name: design-system-guardian
description: Preserves visual and UX consistency across Creatye Studio desktop and mobile web experiences.
trigger: Before UI, UX, design-system, component, layout, token, navigation, or interaction decisions.
allowedTools:
  - read
version: 0.3.0
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
4. `apps/web/src/app/product-completion.css` for current operational product composition.
5. `docs/design-system/creatye-canvas.md` for the durable visual contract.
6. `docs/design-system/luma-reference-audit.md` for sanitized structural calibration evidence only.
7. Current product routes for accepted behavior; screenshots are review evidence, never implementation dependencies.

## Calibrated visual contract

- The shell is a quiet spatial canvas. Ambient color is allowed only as one subdued cue around the AI composer, never as page-wide promotional chrome.
- Desktop navigation occupies a 224 px layout track containing a 200 px inset surface. Navigation rows are 32 px high, use 12 px labels, 15-16 px outline icons, an 8 px gap, and neutral 6-10% hover/selected fills.
- Between 721 and 1180 px the sidebar becomes a labeled-by-tooltip 68 px rail. At 720 px and below, the dedicated mobile shell/navigation applies.
- Standard product pages use a compact contextual top: a 15-16 px title and nearby actions. Do not reintroduce the `eyebrow + oversized title + explanatory paragraph` Page Hero Header pattern.
- Search, filter, view, sort, and tab controls use 32-36 px geometry. Related controls stay grouped and horizontally scroll inside their own rail when space is constrained.
- Tabs are 38 px high, use 12 px labels, hairline separation, a restrained selected underline, and quiet count pills.
- Chips are single-line, full-radius, 32-36 px high, horizontally scrollable, and never wrap into an uneven multi-row block.
- Normal-flow panels and cards use surface contrast plus hairlines, not persistent drop shadows. Elevation is reserved for floating toolbars, menus, dialogs, drawers, and command UI.
- Media-first cards may use 16-22 px radii; operational rows and controls use 8-16 px radii. Full rounding is reserved for pills and circular actions.
- Generation/configuration panels have stable internal scrolling, visible-but-quiet 6 px scrollbars, sticky critical actions when the panel is viewport-bound, and no document-level overflow.
- Steppers show current, completed, and upcoming states with a compact pill, numbered/check markers, and connectors; they remain horizontally scrollable when necessary.
- Icons come from Lucide, normally use a 1.65-1.7 stroke, and use 15-16 px for navigation/compact controls. Filled icons are reserved for selected or semantic states.
- Light and dark modes remap the same roles. Light centers on warm grays and soft whites; dark centers on `#141414`, `#202020`, `#222222`, and `#282828` roles with 5-10% reverse borders.
- Common transitions stay between 100 and 200 ms; media transforms may use 300 ms. Focus is a narrow ring/inset edge, disabled controls preserve geometry and lower opacity, and loading states preserve layout.

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
