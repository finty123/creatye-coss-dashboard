# Color System

Color must communicate function.

## Color groups

- Brand: restrained identity and primary action moments.
- Neutral: application structure, surfaces, text, borders, dividers.
- Interaction: hover, active, focus, selected, pressed.
- Status: success, warning, error, info.
- Data visualization: categorical, sequential, comparison, positive/negative.
- Domain accents: only when product meaning requires them.

## Light theme

Light theme should prioritize:

- Clear canvas/surface separation.
- Strong text hierarchy without harsh contrast fatigue.
- Subtle borders for dense regions.
- Action colors used sparingly.
- Status colors that remain readable on pale surfaces.

## Dark theme

Dark theme should prioritize:

- Real surface hierarchy, not a single dark slab.
- Avoid pure black as the default canvas.
- Avoid neon saturation.
- Borders and dividers tuned for low-light contrast.
- Data and status colors with controlled luminance.

## Semantic color examples

- `background.canvas`
- `background.surface`
- `background.subtle`
- `background.raised`
- `text.primary`
- `text.secondary`
- `text.muted`
- `border.default`
- `border.subtle`
- `action.primary`
- `action.secondary`
- `status.success`
- `status.warning`
- `status.error`
- `status.info`

## Data color rules

- Positive and negative are not always green and red; context decides meaning.
- Do not use color alone to encode status.
- Use stable palettes for repeated metrics.
- Reserve strong color for decision-critical information.

## Domain color rules

Domain accents are allowed only when they improve orientation or recognition:

- Automation concepts may use distinct accents for trigger, condition, action, wait, and branch.
- Analytics may use positive, negative, neutral, comparison, and forecast semantics.
- Publishing may use scheduled, queued, published, failed, canceled, and retry semantics.

Do not use domain colors as decorative branding.
