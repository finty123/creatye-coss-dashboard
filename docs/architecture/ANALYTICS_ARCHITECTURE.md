# Analytics Architecture

Analytics supports:

```text
KPI + trend + content + insight + action
```

## Event model

Prefer:

```text
append-only/raw operational events
+ derived/aggregated metrics
```

over repeatedly scanning transactional tables for every dashboard.

## Event dimensions

Events should support:

- workspace.
- page.
- content.
- publication.
- automation.
- time.
- source/provider.
- campaign/UTM where applicable.

## Typed event taxonomy

Example conceptual events:

- `content.created`
- `content.published`
- `publication.scheduled`
- `publication.succeeded`
- `publication.failed`
- `automation.triggered`
- `automation.completed`
- `automation.failed`
- `media.uploaded`
- `media.processed`
- `studio.output.created`

Events must not become uncontrolled free-form strings.

## Aggregation

PostgreSQL-first aggregation is acceptable initially.

Do not overengineer a separate data warehouse at this stage.

Derived metrics should be reproducible from raw/product events where practical.
