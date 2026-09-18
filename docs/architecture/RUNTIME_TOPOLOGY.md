# Runtime Topology

## Web application

The Web application is a Next.js App Router app supporting:

- Desktop Web.
- Mobile WebApp/PWA.
- Authenticated product experience.
- Public callbacks/routes when needed.
- Webhook endpoints where appropriate.

Desktop and Mobile may render different compositions, but they share application/domain packages.

## Worker application

The Worker is a dedicated long-running compute environment for:

- Media processing.
- FFmpeg work.
- Thumbnailing.
- AI generation.
- Scheduled publishing.
- Social publishing.
- Automation execution.
- Analytics aggregation.
- Cleanup and synchronization.

FFmpeg workloads must not run inside Vercel request execution.

## Infrastructure services

- PostgreSQL: source of truth.
- Supabase Auth: authentication.
- Cloudflare R2: binary/object storage.
- Redis/BullMQ: async execution coordination.
- External providers: Meta/social, AI providers.
- Observability: logs, error tracking, queue visibility, worker health.

## Runtime rule

Heavy or unreliable work must not execute inside request-response paths.

Critical work persists durable state before queue execution.
