# Data Architecture

## System of record

PostgreSQL is the primary system of record.

There must be exactly one authoritative database schema.

Preferred ORM/data direction: Prisma as the single ORM/schema authority.

No duplicate Prisma schemas. No independently evolving database definitions.

## Database priorities

- Relational integrity.
- Foreign keys.
- Explicit enums/statuses.
- Tenant/workspace scoping.
- Indexes.
- Idempotency.
- Auditability.
- Timestamps.
- Safe migrations.

Do not use free-form status strings for core lifecycles.

## Tenant boundary

Workspace is the tenant boundary.

Tenant-owned resources must be explicitly scoped by workspace, including:

- Pages.
- Media.
- Content.
- Automations.
- Publications.
- Analytics.
- AI operations.
- Notifications.
- Workspace-owned templates.

Use application scoping, database constraints, and RLS where appropriate. Do not assume RLS alone solves authorization.

## Status models

Controlled lifecycle/state models are required for:

- Media.
- Output.
- Automation.
- Execution.
- Publication.
- Publish Attempt.
- Social Connection.
- AI Job.

## Retention classes

Do not recreate destructive legacy retention behavior.

Lifecycle classes:

- Permanent business records.
- Retained operational history.
- Temporary processing artifacts.
- Cache.
- Ephemeral uploads.

Deletion must account for references.

Never delete an asset only because an arbitrary age threshold was reached while it is still referenced by content, project, output, or publication.

## Time

Persist canonical timestamps in UTC.

User/workspace scheduling may use configured timezone.

Scheduled publications must preserve enough timezone context to interpret future times correctly.
