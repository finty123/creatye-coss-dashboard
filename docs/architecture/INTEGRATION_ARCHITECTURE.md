# Integration Architecture

## Provider boundary

Provider-specific payloads and clients live behind integration boundaries.

Do not embed Meta-specific payload structure throughout the application.

Normalize provider payloads at the integration boundary.

## Meta webhook processing

```mermaid
sequenceDiagram
  participant Meta
  participant Web
  participant DB as PostgreSQL
  participant Queue as Redis/BullMQ
  participant Worker
  participant Domain

  Meta->>Web: Webhook
  Web->>Web: Verify signature
  Web->>DB: Persist inbox + dedup key
  Web->>Queue: Enqueue processing intent
  Web-->>Meta: Fast response
  Queue->>Worker: Process webhook job
  Worker->>DB: Load inbox event
  Worker->>Domain: Normalize + apply domain event
  Worker->>DB: Persist results
```

Webhook endpoints must:

- Respond quickly.
- Verify authenticity.
- Avoid heavy synchronous processing.
- Be idempotent.

## Social Connection vs Page

Social Connection is provider/account authorization.

Page is a social destination/entity managed by the product.

Social Connection owns provider token relationship and lifecycle.

Page owns social destination context and product usage.

## Future providers

Social Presence must support future providers without pretending all providers behave identically.

Provider differences stay behind explicit capabilities and normalized contracts.
