# Legacy Technical Mapping

Legacy Creatye is knowledge input, not architecture base.

| Legacy area | Current knowledge | Decision | Reason |
| --- | --- | --- | --- |
| Authentication | Incomplete centralized auth risk. | REWRITE | Use Supabase Auth for authentication and Creatye-owned authorization. |
| Prisma/database | Divergent Prisma schemas and integrity issues. | REWRITE | M005 requires one authoritative schema and relational integrity. |
| Supabase | Useful Auth/Postgres direction. | ADAPT | Use Supabase Auth/PostgreSQL while enforcing new boundaries. |
| R2 | Good object storage fit. | ADAPT | Use R2 with deterministic keys, metadata in DB, safe cleanup. |
| Redis/BullMQ | Useful async direction but unclear retry behavior. | ADAPT | Use with durable DB-backed state, outbox/job intents, explicit retries. |
| Media processing | Serverless-heavy media processing problem. | REWRITE | Move FFmpeg/heavy processing to dedicated Worker. |
| Meta integration | Valuable integration/failure knowledge. | ADAPT | Isolate provider payloads and normalize at integration boundary. |
| Automation flow editor | Useful product/UX knowledge. | ADAPT | Preserve concepts but use versioned executable definitions. |
| Automation runtime | Duplicate workflow/runtime concepts risk. | REWRITE | Define one canonical runtime. |
| Publishing | Useful lifecycle/failure knowledge. | ADAPT | Formalize Publication/Target/Attempt/Published Content. |
| Analytics | Useful product knowledge. | ADAPT | Use typed events + derived metrics. |
| AI integrations | Useful capability knowledge. | ADAPT | Provider abstraction, usage/cost/audit metadata. |
| PWA/mobile | Partially implemented PWA behavior. | REWRITE | Mobile architecture follows M004, not legacy patchwork. |
| Retention/cleanup | Destructive 24h retention risk. | DISCARD | Use lifecycle classes and reference-aware deletion. |

## Legacy problems explicitly avoided

- Divergent Prisma schemas.
- Ignored TypeScript errors.
- Incomplete centralized auth.
- Destructive 24h retention.
- Monolithic modules.
- Duplicate workflow/runtime concepts.
- Missing relational integrity.
- Partially implemented PWA behavior.
- Serverless-heavy media processing.
- Webhook / queue race conditions.
- Unsafe storage cleanup.
- Free-form lifecycle statuses.
- Unclear BullMQ retry behavior.
- Duplicated lead/session-like records.
- Business logic leaking into UI/routes.
