# System States

Every state should communicate:

- What happened.
- Why, when known.
- What can be done.

## Loading

Use when content is being fetched or prepared.

Preserve layout stability where possible.

## Empty

Functional empty states communicate:

- What belongs here.
- Why it may be empty.
- Primary action.
- Optional guidance.

Avoid large decorative illustrations as the default.

## First-use

First-use states should help users take the first meaningful action without becoming marketing pages.

## Processing

Use when work is actively running.

Examples:

- Rendering.
- Publishing.
- AI generating.
- Automation test running.

## Queued

Use when work is waiting to run.

## Syncing

Use when external or product state is being reconciled.

## Scheduled

Use for future publishing or automation-related timing.

## Success

Confirm completion and expose next useful action.

## Partial success

Communicate what succeeded, what failed, and what can be retried.

## Warning

Use for risk or degraded state before failure.

## Failed

Explain the failure and provide recovery action.

## Offline

Communicate disconnected state and what remains available.

## Permission error

Explain access limitation without exposing technical RBAC design in M003.

## Expired social connection

Communicate affected pages, affected operations, and reconnect action.
