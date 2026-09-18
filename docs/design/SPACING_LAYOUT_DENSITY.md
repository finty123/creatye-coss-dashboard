# Spacing, Layout, and Density

## Spacing scale

Use a consistent spacing scale. Future implementation should avoid arbitrary spacing values.

Conceptual scale:

- `space.0` - none.
- `space.1` - hairline gap / very tight inline separation.
- `space.2` - tight icon/text and compact control spacing.
- `space.3` - standard inline spacing.
- `space.4` - standard component internal spacing.
- `space.5` - grouped controls and panel spacing.
- `space.6` - section spacing in dense pages.
- `space.8` - large section spacing.
- `space.10+` - rare page-level spacing.

## Desktop layout foundation

Desktop Web must support:

- Sidebars.
- Multi-column layouts.
- Inspectors.
- Editors.
- Tables.
- Wide dashboards.
- Split panels.
- Resizable layouts.
- Narrow desktop windows.

Desktop layouts must remain usable when the window occupies approximately half of an ultrawide monitor. Do not rely only on large widths.

## Mobile layout foundation

Mobile WebApp must support:

- Touch-first layout.
- Safe areas.
- Focused content.
- Single-primary-task composition.
- Bottom-navigation-compatible structure.
- Simplified information density.
- Quick actions and approvals.

Mobile is not shrunk desktop.

## Density model

| Density | Purpose | Typical use |
| --- | --- | --- |
| Comfortable | Read-heavy or touch-heavy experiences. | Mobile, onboarding-like flows, review surfaces. |
| Standard | Default operational density. | Desktop pages, forms, panels, content lists. |
| Compact | High-density operational work. | Tables, automation editor, media library, page management, analytics, publishing management. |

Desktop should primarily use Standard and Compact.

Mobile should use touch-appropriate density, usually Comfortable or mobile-tuned Standard.

## Grid rules

- Align controls, labels, metadata, and actions predictably.
- Prefer stable panels and split layouts for complex work.
- Use responsive reduction deliberately: hide, collapse, summarize, or move secondary information only when the task remains clear.
