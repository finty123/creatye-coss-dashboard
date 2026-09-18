# Mobile System States

Each state must answer:

- What happened?
- What can the user do?

## States

- Loading.
- Skeleton.
- Empty.
- First-use.
- Processing.
- Queued.
- Syncing.
- Scheduled.
- Success.
- Partial success.
- Warning.
- Failed.
- Offline.
- Permission error.
- Expired connection.

## Mobile rules

- Loading and skeleton states should preserve orientation.
- Empty states should be functional and action-oriented.
- Processing should distinguish active work from queued work.
- Failed states should expose recovery when available.
- Offline and stale states should be visible without blocking all reading.
- Expired connection states should identify affected Pages and reconnect action.
- Partial success should show what completed and what still needs action.
