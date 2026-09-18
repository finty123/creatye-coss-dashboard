# Mobile Patterns

## Desktop-to-Mobile translation

Use translations when appropriate, not mechanically.

| Desktop pattern | Mobile pattern |
| --- | --- |
| Desktop Dropdown | Mobile Bottom Sheet |
| Desktop Inspector | Mobile Full Sheet / Focused Screen |
| Desktop Modal | Mobile Sheet or Full-Screen Task |
| Desktop Filter Bar | Mobile Filter Sheet |
| Desktop Multi-Panel | Sequential Focused Flow |
| Desktop Table | Mobile List / Summary Row |
| Desktop Bulk Toolbar | Limited Selection Actions |

## Touch principles

Define patterns for:

- Touch targets.
- One-handed reach.
- Sticky actions.
- Bottom sheets.
- Swipe actions.
- Long press.
- Pull to refresh where appropriate.
- Safe areas.
- Keyboard behavior.

Gestures must never be the only way to execute a critical action.

## Mobile filters

Complex filters use Filter Sheet.

Top-level screens show only priority filters, such as:

- Page.
- Status.
- Date.

Additional filters use More Filters.

Active context must always be visible.

## Offline / connection awareness

Mobile connectivity can be unstable.

Principles:

- Show offline indication.
- Mark pending actions.
- Show syncing state.
- Provide retry when useful.
- Indicate stale information.

M004 does not define technical offline architecture.

## Mobile information density

Mobile should be legible and touch-first, but premium must not mean empty.

Prioritize:

- Compact lists.
- Clear hierarchy.
- Progressive disclosure.
- Sticky primary action.
- Minimal chrome.
