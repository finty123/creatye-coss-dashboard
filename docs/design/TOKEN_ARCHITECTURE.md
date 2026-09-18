# Token Architecture

Creatye Studio uses four token levels.

## 1. Primitive tokens

Primitive tokens are raw design values. They do not describe intent.

Examples:

- `color.neutral.100`
- `color.green.500`
- `space.4`
- `radius.2`
- `font.size.14`
- `duration.fast`

Primitive tokens are not used directly in components unless a component token maps to them.

## 2. Semantic tokens

Semantic tokens describe product meaning.

Examples:

- `background.canvas`
- `background.surface`
- `background.subtle`
- `text.primary`
- `text.secondary`
- `border.default`
- `action.primary`
- `status.success`
- `focus.ring`

Semantic tokens must support light and dark themes.

## 3. Component tokens

Component tokens bind semantic intent to reusable component behavior.

Examples:

- `button.primary.background`
- `button.primary.text`
- `input.border.default`
- `input.border.focus`
- `sidebar.background`
- `table.row.hover`
- `menu.item.selected.background`

Component tokens should be introduced when repeated component behavior needs stable naming.

## 4. Product / domain tokens

Domain tokens are allowed only when a product domain needs stable semantic distinction.

Examples:

- `automation.trigger.accent`
- `automation.action.accent`
- `analytics.positive`
- `analytics.negative`
- `publication.scheduled`

Do not create domain tokens for decoration or personal preference.

## Token governance

- No arbitrary color, spacing, radius, shadow, or motion value in future implementation.
- Token names describe intent, not appearance.
- New tokens require an existing usage gap.
- Product/domain tokens require evidence that semantic or component tokens are insufficient.
