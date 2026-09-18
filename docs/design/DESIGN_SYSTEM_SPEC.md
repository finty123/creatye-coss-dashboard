# Design System Spec

This is the entry point for the Creatye Studio Design System.

M002 defines foundations, language, governance, and taxonomy. It does not define final screens, navigation architecture, production components, implementation framework, or frontend code.

## Design direction

Creatye Studio should feel professional, precise, modern, controlled, capable, fast, premium, and operational.

It should not feel like a playful startup dashboard, neon product, gaming UI, generic AI app, marketing landing page, childish interface, or overdesigned concept.

## Core foundation

- Visual quality comes from typography, hierarchy, grid, spacing, alignment, density, contrast, proportion, consistent components, strong states, microinteractions, and visual rhythm.
- Color has a job. It must communicate brand, hierarchy, action, status, data meaning, or domain distinction.
- Desktop Web and Mobile WebApp share foundations but remain distinct experiences.
- The design system supports dashboards, tables, media libraries, editors, automation flow builder, analytics, publishing/calendar, video studio, image studio, settings, page management, and AI-assisted experiences.

## Document map

- `DESIGN_PHILOSOPHY.md` - product design character, reference philosophy, and anti-generic rules.
- `DESIGN_PRINCIPLES.md` - principles used to judge future product design.
- `VISUAL_LANGUAGE.md` - hierarchy, rhythm, surfaces, density, and visual tone.
- `TOKEN_ARCHITECTURE.md` - primitive, semantic, component, and product/domain token model.
- `COLOR_SYSTEM.md` - light/dark color semantics, status, interaction, and data color rules.
- `TYPOGRAPHY.md` - roles, hierarchy, numeric styles, monospace use, and type selection criteria.
- `SPACING_LAYOUT_DENSITY.md` - spacing scale, desktop/mobile layout foundations, grids, and density model.
- `SHAPE_ELEVATION.md` - radius, borders, containers, cards, floating surfaces, and elevation.
- `ICONOGRAPHY.md` - icon style, size, alignment, semantic use, and family consistency.
- `MOTION.md` - motion principles, durations, easing, and reduced-motion rules.
- `INTERACTION_STATES.md` - core states and product-specific operational states.
- `ACCESSIBILITY.md` - minimum accessibility standards.
- `COMPONENT_TAXONOMY.md` - component categories and platform/domain ownership.
- `EDITOR_UI_PRINCIPLES.md` - shared editor foundations for automation, video, and image tools.
- `TABLE_DATA_DENSE_UI.md` - tables, lists, bulk actions, filters, sorting, and dense operational interfaces.
- `DATA_VISUALIZATION.md` - chart, metric, trend, comparison, and dashboard rules.
- `AI_EXPERIENCE.md` - AI assistance patterns that avoid generic AI aesthetics.
- `PLATFORM_DESIGN.md` - shared, desktop-specific, and mobile-specific design rules.
- `DESIGN_GOVERNANCE.md` - rules for future implementation and drift prevention.

## Fundamental decisions

- Use a four-level token architecture.
- Use semantic color for light and dark themes.
- Use a formal density model: Comfortable, Standard, Compact.
- Treat Desktop Web and Mobile WebApp as distinct experiences with shared foundations.
- Govern future components through reuse, pattern checks, token checks, platform checks, and domain checks.
