# Auth and Security Architecture

## Authentication

Preferred direction: Supabase Auth.

Authentication answers: who is this user?

## Authorization

Creatye owns application authorization.

Authorization answers: what can this user do in this workspace/resource context?

Authorization must support:

- Workspace.
- Membership.
- Role / capabilities.
- Resource ownership.
- Page-level access where appropriate.

Never trust only UI visibility.

Every server-side mutation must enforce authorization.

## Security baseline

Architecture must cover:

- Authentication.
- Authorization.
- Workspace isolation.
- OAuth tokens.
- Secrets.
- Webhook verification.
- Signed uploads.
- Rate limits.
- Input validation.
- SSRF considerations.
- Media validation.
- File limits.
- API abuse.
- CSRF where applicable.
- Secure cookies/session handling.
- Audit events where important.

## Secrets and tokens

Provider credentials/tokens remain server-side.

Sensitive credentials must be encrypted/protected appropriately and never exposed unnecessarily to frontend code.

## Signed uploads

Direct upload flow must use scoped signed upload authorization and finalization validation.
