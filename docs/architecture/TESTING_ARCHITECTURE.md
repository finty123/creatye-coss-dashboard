# Testing Architecture

## Test layers

- Unit tests.
- Integration tests.
- Contract tests.
- End-to-end tests.

## Priority integration coverage

Prioritize integration tests for:

- Database transitions.
- Queue jobs.
- Publishing.
- Meta webhooks.
- Automation execution.
- Media pipeline.
- Auth/authorization.

## Contract tests

Contract tests should detect incorrect assumptions about external providers.

Important targets:

- Meta webhook payload normalization.
- Provider publish responses.
- AI provider errors/timeouts.
- Storage upload/finalize assumptions.

## E2E tests

E2E tests should cover critical product journeys once implementation exists:

- Create content -> publish/schedule.
- Mobile quick create -> schedule.
- Page context -> automation/publishing.
- Failed publication -> retry.
