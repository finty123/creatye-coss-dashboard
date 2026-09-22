# Creatye Canvas

Creatye Canvas is the implemented visual system for Creatye Studio. It translates the structural lessons in `luma-reference-audit.md` into original Creatye foundations, components, and calibration screens.

## Visual direction

- Warm gray spatial canvas with light floating surfaces.
- Generous negative space and compact page typography.
- Neutral selection; black primary actions; semantic color only for meaning.
- Broad, soft elevation only for floating surfaces, menus, dialogs, and command UI.
- Rounded geometry that scales by role: 8 px controls, 12-16 px operational surfaces, 22-28 px spatial/creative surfaces, and full pills for short controls.
- A single subdued AI halo behind the composer. It must not become decorative page chrome.
- Geist Sans for interface copy and Geist Mono for metrics, IDs, durations, resolutions, and timeline values.

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

Light and dark themes remap the same semantic roles. Dark mode uses layered warm-black surfaces instead of pure black slabs or neon contrast.

## Foundation scales

- Spacing: 4, 8, 12, 16, 20, 24, 32, and 40 px.
- Radius: 4, 8, 12, 16, 22, 28, and full.
- Controls: 28, 36, and 44 px.
- Icon sizes: 12, 16, 20, and 24 px.
- Motion: 80, 140, 200, and 320 ms.
- Type roles: metadata 9-10 px, controls/navigation 11-13 px, body 14 px, section headings 15-20 px, page/display 26-34 px.
- Z layers: base 0, sticky 20, popover 60, overlay 80, toast 100.

## Component library

`packages/ui/src/components.tsx` contains reusable implementations for shell/navigation, buttons and fields, tabs and segmented controls, badges/status, menus/popovers, dialogs/drawers, cards, empty/upload states, command palette, AI composer, table/pagination, skeletons, inspector, media/template cards, and editor toolbars.

Every interactive primitive uses native focusable elements, visible `:focus-visible` treatment, disabled/loading semantics, and semantic labels. Components are theme-neutral and adapt at the composition layer for mobile.

## Calibration routes

- `/design-system`: foundations, states, light/dark, components, and responsive miniatures.
- `/`: Dashboard calibration.
- `/templates`: Template library calibration.
- `/studio?step=customize`: Video Studio shell calibration.

These routes are calibration surfaces. They intentionally use realistic Creatye vocabulary and fixtures, but they do not implement backend behavior.

## Guardrails

- Do not add decorative gradients, glass surfaces, saturated icon tiles, or glow stacks.
- Do not introduce raw hex colors or one-off spacing in components.
- Do not turn every content block into a card.
- Do not use status badges for neutral metadata.
- Do not increase title scale to marketing-page proportions.
- Check an existing component, pattern, and token before introducing a new primitive.

