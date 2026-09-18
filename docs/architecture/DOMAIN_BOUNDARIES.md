# Domain Boundaries

Technical boundaries follow M001 product domains.

## Domain map

| Product domain | Technical ownership |
| --- | --- |
| Workspace & Identity | Workspace, membership, authorization capability model. |
| Social Presence | Social Connection, Page, provider account authorization references. |
| Content Library | Content, Media, Asset, Variant, Output metadata. |
| Creative Production | Project, composition/configuration, render intent. |
| Automation | Automation, Flow versions, runtime state, executions. |
| Publishing & Distribution | Publication, Target, Attempt, Published Content. |
| Analytics | Product events, normalized metrics, aggregates, insights. |
| Intelligence | AI jobs, provider abstraction, usage, prompt/version metadata. |
| Notification | Notification records from domain/application events. |
| Settings & Governance | Workspace/domain configuration and policy. |

## Shared backend rule

Desktop Web and Mobile WebApp share domain/backend foundations.

Mobile is not a separate product and must not get a separate backend model.

## Boundary rule

Provider-specific concerns live in integrations.

UI-specific concerns live in apps/UI layers.

Domain lifecycle rules live in domain/application packages.
