# Creatye Canvas

Creatye Canvas is the implemented visual system for Creatye Studio. It translates the structural lessons in `luma-reference-audit.md` into original Creatye foundations, components, and calibration screens.

## Visual direction

- Luma-calibrated neutral canvas using `#dfdfdf` in light mode and `#141414` in dark mode, with semantic surface layers rather than pastel tinting.
- Purposeful negative space and compact contextual page typography.
- Neutral selection; black primary actions; semantic color only for meaning.
- Broad, soft elevation only for floating surfaces, menus, dialogs, and command UI.
- Rounded geometry that scales by role: 8 px controls, 12-16 px operational surfaces, 22-28 px spatial/creative surfaces, and full pills for short controls.
- A soft blue ambient wash behind the composer and compact product context. It remains a background atmosphere, not a component gradient or promotional hero.
- A licensed system sans stack (`Helvetica Neue`, Helvetica, Arial, then Geist/system fallbacks) calibrated to the reference metrics; Geist Mono remains reserved for IDs, durations, resolutions, and timeline values. The proprietary Graphik asset is not bundled.

## Semantic tokens

The source of truth is `packages/ui/src/styles.css`. Components consume semantic aliases rather than raw color values.

| Role | CSS token | Purpose |
| --- | --- | --- |
| background | `--cr-background` | Main application work area |
| canvas | `--cr-canvas` | Spatial shell and editor background |
| surface | `--cr-surface` | Normal content surface |
| surface-raised | `--cr-surface-raised` | Floating and interactive surface |
| surface-muted | `--cr-surface-muted` | Quiet grouping and empty states |
| surface-selected | `--cr-surface-selected` | Neutral active/selected state |
| foreground | `--cr-foreground` | Primary text and icons |
| foreground-secondary | `--cr-foreground-secondary` | Supporting content |
| foreground-muted | `--cr-foreground-muted` | Metadata and placeholders |
| border | `--cr-border` | Default hairline |
| border-strong | `--cr-border-strong` | Interactive or emphasized edge |
| primary | `--cr-primary` | Main action and strongest emphasis |
| accent | `--cr-accent` | AI, focus, and exceptional product meaning |
| success | `--cr-success` | Healthy/complete state |
| warning | `--cr-warning` | Attention state |
| danger | `--cr-danger` | Error/destructive state |
| overlay | `--cr-overlay` | Modal backdrop |
| focus-ring | `--cr-focus-ring` | Keyboard focus |

Light and dark themes remap the same semantic roles. Light uses `#dfdfdf` canvas, `#eeeeee` navigation, `#ebebeb` input/muted surfaces, and `#f6f6f6` floating panels. Dark uses `#141414` canvas with `#202020`, `#222222`, `#282828`, and `#313131` layers instead of one flat slab or neon contrast.

## Foundation scales

- Spacing: 4, 8, 12, 16, 20, 24, 32, and 40 px.
- Radius: 4, 8, 12, 16, 22, 28, and full.
- Controls: 28, 36, and 44 px.
- Icon sizes: 12, 16, 20, and 24 px.
- Motion: 80, 140, 200, and 320 ms.
- Type roles: metadata 9-10 px, controls/navigation 11-13 px, body 14 px, compact page context 15-16 px, section headings 15-20 px, rare product display 26-34 px.
- Z layers: base 0, sticky 20, popover 60, overlay 80, toast 100.

## Component library

`packages/ui/src/components.tsx` contains reusable implementations for shell/navigation, buttons and fields, tabs and segmented controls, badges/status, menus/popovers, dialogs/drawers, cards, empty/upload states, command palette, AI composer, table/pagination, skeletons, inspector, media/template cards, and editor toolbars.

Every interactive primitive uses native focusable elements, visible `:focus-visible` treatment, disabled/loading semantics, and semantic labels. Components are theme-neutral and adapt at the composition layer for mobile.

## Calibrated composition rules

- The desktop shell reserves a 224 px track for a 200 px inset sidebar surface; sidebar rows are 32 px high with 12 px labels and neutral selection.
- Product routes use a compact contextual header with a 15-16 px title. On desktop, route actions occupy their own 36 px row below the fixed utility pill instead of competing with it horizontally. The former eyebrow, large title, and explanatory paragraph combination is not an approved application-page pattern.
- Product routes use the full available work area, begin at the same compact top offset as the reference workspace, and reserve only the utility pill footprint instead of centering content inside an arbitrary max-width.
- The top utility search is scoped to the current route; the sidebar Search entry opens the system-wide destination search. Persistent inline search inputs are removed from product toolbars.
- Search, filters, sorting, view controls, tabs, and chip rails use 32-38 px geometry and collapse through horizontal scrolling inside the component, never through document overflow.
- Chips remain single-line. Tabs use a quiet underline and count pills. Steppers use connected current/completed/upcoming states.
- Cards in normal flow do not cast persistent shadows. Media cards privilege the thumbnail; operational data privileges hairline rows and restrained surfaces.
- Viewport-bound generation and inspector panels own their vertical scrolling. Scrollbars are 6 px, low-contrast, rounded, and become stronger only on hover.
- The responsive sequence is full sidebar, intermediate icon rail, then dedicated mobile navigation. Mobile is not a compressed desktop page.
- Signed-in account summaries use the shared circular profile image treatment; initials are only a fallback when no user image exists.

## Calibration routes

- `/design-system`: foundations, states, light/dark, components, and responsive miniatures.
- `/`: Dashboard calibration.
- `/pages`: Connected Pages workspace with platform/status controls, aligned operational columns, and contextual search in the top utility pill.
- `/publishing`: Calendar/list scheduling workspace, exposed as Agendamentos in the primary sidebar.
- `/automations`: Operational Automations workspace.
- `/templates`: Template library calibration.
- `/studio?step=customize`: Video Studio shell calibration.

These routes are calibration surfaces. They intentionally use realistic Creatye vocabulary and fixtures, but they do not implement backend behavior.

Current code, semantic tokens, and this durable contract are the visual source of truth. Historical screenshots and temporary visual output are not required context for future implementation.

## Guardrails

- Do not add decorative gradients, glass surfaces, saturated icon tiles, or stacked glows beyond the single ambient blue wash.
- Do not introduce raw hex colors or one-off spacing in components.
- Do not turn every content block into a card.
- Do not use status badges for neutral metadata.
- Do not reintroduce Page Hero Headers or increase application title scale to marketing-page proportions.
- Check an existing component, pattern, and token before introducing a new primitive.
