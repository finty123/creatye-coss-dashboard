# Repository Structure

M005 defines intended structure only. Do not create empty packages during M005.

## Target topology

```text
apps/
  web/
  worker/

packages/
  db/
  domain/
  shared/
  integrations/
  queue/
  media/
  analytics/
  ai/
  observability/
```

A UI/design-system package may be added in M006 if appropriate.

## Ownership

- `apps/web`: Next.js app, route handlers, UI compositions, authenticated product shells.
- `apps/worker`: background execution entrypoint and job processors.
- `packages/db`: Prisma schema, migrations, database client, transaction helpers.
- `packages/domain`: domain models, domain services, lifecycle rules.
- `packages/shared`: narrow shared primitives, types, errors, validation helpers. Not a dumping ground.
- `packages/integrations`: provider boundaries, Meta/social clients, webhook normalization.
- `packages/queue`: queue names, job contracts, enqueue helpers, worker registration.
- `packages/media`: media pipeline, storage key rules, processing contracts.
- `packages/analytics`: event taxonomy, aggregation contracts, metric derivation.
- `packages/ai`: AI provider abstraction, prompts, usage/cost contracts.
- `packages/observability`: logging, correlation, tracing helpers.

## Dependency rules

- Domain must not depend on UI.
- `packages/domain` cannot import `apps/web`.
- `packages/db` does not contain UI logic.
- Provider integrations stay isolated.
- `shared` must remain narrow.
- Frontend cannot directly depend on worker internals.
- Worker cannot import UI components.
- Apps depend on packages; packages do not depend on apps.

## Dependency direction

```text
apps/web       apps/worker
   |              |
   v              v
application/domain packages
   |
   v
integration/infrastructure packages
```
