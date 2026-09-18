# Deployment Architecture

## Conceptual topology

- Web: Vercel-compatible deployment.
- Database/Auth: Supabase / PostgreSQL.
- Object Storage: Cloudflare R2.
- Queue: Redis.
- Worker: dedicated long-running compute environment.

Exact worker hosting provider is not locked in M005.

Architecture must not require FFmpeg workloads inside Vercel functions.

## Environments

Define:

- Development.
- Preview/Staging.
- Production.

External callbacks/webhooks must account for environment differences.

Do not mix production credentials into preview environments.

## Secrets

Secrets are environment-specific.

Provider tokens, OAuth secrets, storage credentials, queue credentials, AI provider keys, and database credentials must not be exposed to frontend bundles.
