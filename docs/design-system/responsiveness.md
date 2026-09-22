# Creatye Canvas responsiveness

Creatye Canvas supports ultrawide desktop, half-ultrawide windows, notebooks, tablets, and a mobile PWA. Desktop and mobile share foundations but use different navigation and composition.

## Breakpoints

| Range | Behavior |
| --- | --- |
| 1600 px and wider | Wider Studio library/inspector and four-column template grid |
| 1181-1599 px | Full floating sidebar and standard desktop composition |
| 721-1180 px | Sidebar collapses to a 68 px icon rail; secondary Studio inspector is hidden at narrower widths |
| 721-900 px | Data layouts stack; Studio remains an operational desktop/tablet workspace with horizontal prioritization |
| 720 px and below | Sidebar is replaced by sticky top utilities and a five-item bottom navigation; cards become a single column; Studio becomes preview-first |

## Required viewport evidence

The local visual review captures Dashboard, Templates, and Studio at 390, 768, 1100, 1440, and 1920 px. It also captures the Design System in light and dark themes.

Automated diagnostics verify:

- zero document or body horizontal overflow;
- no blank images;
- a valid sequence of keyboard-focusable controls;
- visible focus outlines on the inspected sequence;
- the correct navigation mode at every breakpoint.

## Composition rules

- Content width grows on ultrawide screens, but text and composer widths remain capped.
- Half-ultrawide layouts prioritize core work and collapse identity/labels before content.
- Tablet uses the icon rail instead of compressing the full sidebar.
- Mobile preserves touch targets, places primary navigation at the bottom, and makes Studio preview-first.
- Horizontal scrolling is allowed only inside explicit carousels/rails such as metrics and filter pills; the document itself must never overflow.
- Fixed mobile navigation requires sufficient content padding and must not obscure the final actionable content.

## Studio translation

Desktop Studio uses five coordinated regions: tool rail, media library, central preview, contextual inspector, and timeline. At half width, the inspector yields first. On mobile, preview and tool rail come first, followed by media and timeline; inspector controls move to contextual drawers in production flows.

