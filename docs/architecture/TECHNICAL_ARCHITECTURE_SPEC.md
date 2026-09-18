# Technical Architecture Spec

This is the authoritative entry point for Creatye Studio Technical Architecture.

M005 defines architecture. It does not implement product code, frontend screens, design-system code, database migrations, Meta integration, queues/workers, or M006 repository foundation.

## Architecture style

Creatye Studio uses:

```text
Modular TypeScript monolith
+ dedicated Worker application
+ event/job-driven async infrastructure
```

It is not a microservice system at this stage.

## Baseline stack direction

- Monorepo: TypeScript.
- Web application: Next.js App Router.
- Worker: dedicated long-running TypeScript worker application.
- Database: PostgreSQL.
- ORM/data layer: Prisma as the single authoritative schema/ORM direction.
- Auth: Supabase Auth for authentication.
- Authorization: Creatye domain-owned authorization.
- Object storage: Cloudflare R2.
- Queue: Redis + BullMQ.
- Runtime validation: Zod or equivalent at external boundaries.

## Product constraints supported

The architecture must support:

- Unified CREATE -> AUTOMATE -> PUBLISH / DISTRIBUTE -> ANALYZE -> OPTIMIZE -> REPEAT loop.
- Shared backend/domain foundations for Desktop Web and Mobile WebApp.
- Studio journey: SELECT -> CUSTOMIZE -> PUBLISH, refined as Edit -> Review -> Publish Setup -> Publish / Schedule.
- Mobile Studio as first-class: edit, post, schedule, monitor.
- Page context, publishing handoff, analytics-to-action, and automation execution.

## Core rules

- PostgreSQL is the system of record.
- Redis/BullMQ is not the business source of truth.
- Heavy/unreliable work runs outside request/response paths.
- There is exactly one authoritative database schema.
- Business rules do not live in React components.
- Provider payloads are normalized at integration boundaries.
- Automation has one canonical runtime.
- Scheduled publishing remains recoverable from PostgreSQL if Redis is lost.
- Media cleanup must not delete referenced assets.
- Workspace is the tenant boundary.

## Document map

- `SYSTEM_CONTEXT.md` - system context and diagrams.
- `RUNTIME_TOPOLOGY.md` - production topology and runtime responsibilities.
- `APPLICATION_ARCHITECTURE.md` - layers, use cases, validation, errors, transactions, concurrency.
- `REPOSITORY_STRUCTURE.md` - future monorepo layout, ownership, dependency rules.
- `DOMAIN_BOUNDARIES.md` - product domain to technical boundary mapping.
- `DATA_ARCHITECTURE.md` - PostgreSQL, Prisma, schema rules, status models, tenancy, retention.
- `AUTH_SECURITY_ARCHITECTURE.md` - Supabase Auth, authorization, security baseline.
- `INTEGRATION_ARCHITECTURE.md` - provider isolation, Meta webhooks, Social Connection/Page model.
- `AUTOMATION_ARCHITECTURE.md` - authoring, versioning, runtime, execution state, idempotency.
- `MEDIA_PIPELINE_ARCHITECTURE.md` - uploads, R2, processing, FFmpeg, Studio output.
- `PUBLISHING_ARCHITECTURE.md` - Publication, Target, Attempt, Published Content, scheduling, retries.
- `ANALYTICS_ARCHITECTURE.md` - event model, metrics, aggregation, actionability.
- `AI_ARCHITECTURE.md` - AI provider abstraction, governance, usage, async work.
- `OBSERVABILITY_RELIABILITY.md` - logs, correlation, jobs, errors, retries, outbox.
- `DEPLOYMENT_ARCHITECTURE.md` - environments, Vercel-compatible Web, worker hosting, secrets.
- `TESTING_ARCHITECTURE.md` - unit, integration, contract, E2E priorities.
- `LEGACY_TECHNICAL_MAPPING.md` - REUSE / ADAPT / REWRITE / DISCARD matrix.
