# Observability and Reliability

## Observability

Architecture must define:

- Structured logs.
- Request correlation.
- Job correlation.
- Error tracking.
- Queue visibility.
- Worker health.
- External integration errors.
- Performance monitoring.

Correlation concepts:

- requestId.
- jobId.
- executionId.
- publicationId.
- workspaceId.

Avoid logging secrets, tokens, or sensitive payloads unnecessarily.

## Durable async rule

Redis/BullMQ must not become the business source of truth.

Critical operations should persist state before asynchronous execution.

Preferred pattern:

```text
DB state
-> outbox / durable job intent
-> queue
-> worker
-> result persisted
```

Architecture must prevent DB commit succeeds but queue add fails from silently losing critical work.

## Idempotency

Apply idempotency to:

- Incoming webhooks.
- Publishing.
- Automation execution.
- Media jobs.
- External API calls where possible.
- Callbacks.
- Retries.

Webhook events need stable deduplication keys.
