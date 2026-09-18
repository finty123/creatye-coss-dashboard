# Application Architecture

## Layering

Conceptual flow:

```text
UI
-> Application / Use Case Layer
-> Domain
-> Repository / Integration
-> Infrastructure
```

React components must not directly own core business logic.

Route handlers/server actions should:

1. Authenticate.
2. Validate.
3. Authorize.
4. Call application services.
5. Return normalized responses.

## Validation

Use schema validation at external boundaries.

Preferred direction: Zod or equivalent runtime validation.

Validate:

- User input.
- Webhook payloads.
- Provider callbacks.
- Signed upload finalize requests.
- Job payloads.

## Error model

Normalize errors as:

- ValidationError.
- AuthenticationError.
- AuthorizationError.
- NotFoundError.
- ConflictError.
- RateLimitError.
- IntegrationError.
- RetryableError.
- PermanentProcessingError.

Do not leak raw provider or infrastructure errors directly to users.

## Transactions

Use transactions when partial commit would create invalid state.

Examples:

- Creating publication + targets.
- Recording webhook receipt.
- Publishing state transition.
- Automation execution state transition.
- Media metadata + durable job intent.

## Concurrency

Architecture must handle:

- Duplicate webhook delivery.
- Two workers processing the same logical task.
- Publication retry overlap.
- Automation continuation races.
- Concurrent edits.
- Scheduled publishing pickup overlap.

Use operation-appropriate controls:

- Unique constraints.
- Idempotency keys.
- Optimistic versioning.
- Transactional locks.
- Job uniqueness.
