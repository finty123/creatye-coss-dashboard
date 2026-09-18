# Component Taxonomy

M002 defines taxonomy only. It does not implement components.

## Categories

| Category | Examples | Ownership |
| --- | --- | --- |
| Foundation | Typography, color, spacing, grid, density, icon, motion primitives. | Shared |
| Actions | Button, icon button, split action, command action. | Shared with platform variants |
| Inputs | Text input, select, checkbox, switch, segmented control, slider, picker. | Shared with mobile variants |
| Navigation | Sidebar, top bar, tabs, breadcrumbs, mobile bottom nav, command surface. | Desktop-specific and mobile-specific |
| Data Display | Table, list, property row, status badge, timeline, activity item. | Shared with density variants |
| Feedback | Toast, inline alert, banner, empty state, loading state, progress. | Shared |
| Overlays | Menu, popover, tooltip, drawer, modal, sheet. | Shared with platform variants |
| Layout | Panel, split view, inspector, toolbar, section, divider. | Desktop-specific and shared |
| Data / Analytics | Metric row, chart container, legend, trend marker, comparison block. | Domain-specific |
| Editor | Canvas, toolbar, inspector, selection handles, layer list, property panel. | Domain-specific with shared editor foundations |
| Media | Asset tile, media preview, upload dropzone, render status, library row. | Domain-specific |
| Automation | Flow node, connector, trigger block, condition block, execution status. | Domain-specific |
| Publishing | Calendar item, schedule marker, target selector, attempt status. | Domain-specific |
| Mobile | Bottom navigation, sheet, quick action bar, mobile approval card. | Mobile-specific |

## Classification

Every future component should be classified as:

- Shared.
- Desktop-specific.
- Mobile-specific.
- Domain-specific.

## Guardrail

Do not list hundreds of components before product UX requires them.
