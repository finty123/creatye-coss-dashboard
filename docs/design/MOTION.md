# Motion

Motion communicates state change, hierarchy, causality, feedback, and navigation.

Motion must not be decorative by default.

## Timing categories

- Instant: immediate state feedback.
- Fast: hover, press, small control feedback.
- Standard: panel open/close, popover transition, state change.
- Deliberate: larger transitions that need user orientation.

## Easing

Use predictable easing:

- Linear only for continuous mechanical progress.
- Ease-out for elements entering.
- Ease-in for elements leaving.
- Ease-in-out for transformations that remain in view.

## Product motion

Important product states:

- Loading.
- Processing.
- Syncing.
- Queued.
- Scheduled.
- Failed.
- Applied.
- Undo available.

## Accessibility

Respect reduced-motion preferences. Reduced motion should preserve state clarity without unnecessary movement.
