# Capability Map

Capabilities describe what the product must be able to do. They are not screens.

| Macro capability | Objective | Core capabilities | Conceptual dependencies | Domains involved |
| --- | --- | --- | --- | --- |
| Workspace & Identity | Provide an operating container for teams. | Workspace setup, users, members, ownership, basic governance context. | None. | Workspace & Identity, Settings & Governance |
| Social Connections | Connect external social platforms and accounts. | Connect account, maintain connection status, expose available pages, handle reconnect needs. | Workspace & Identity. | Social Presence, Settings & Governance |
| Page Management | Manage social pages as operational targets. | Register pages, group pages, inspect page status, relate pages to publishing, automation, and analytics. | Social Connections. | Social Presence, Publishing, Automation, Analytics |
| Content Creation | Create reusable content concepts and publishable content. | Draft content, organize content, create variants, prepare outputs, reuse content across pages/channels. | Workspace, Media, Templates. | Content Library, Creative Production, Publishing |
| Media Management | Manage reusable source material. | Upload/import media, classify assets, reuse assets in projects/content, track outputs. | Workspace. | Content Library, Creative Production |
| Video Creation | Produce video-oriented content. | Video project, edit intent, render output, create variants. | Media, Templates, Content. | Creative Production, Content Library |
| Image Creation | Produce image-oriented content. | Image project, transform asset, render output, create variants. | Media, Templates, Content. | Creative Production, Content Library |
| Templates | Reuse repeatable creative and operational structures. | Creative templates, content templates, automation templates, reuse patterns. | Content, Creative Production, Automation. | Creative Production, Automation, Content Library |
| Automation | Define and execute operational behavior. | Triggers, conditions, actions, waits, branches, flows, executions, interaction handling. | Social Presence, Content, Publishing. | Automation, Social Presence, Content Library, Analytics |
| Publishing | Prepare and deliver content to targets. | Publication setup, target selection, schedule, queue concept, attempts, success/failure/cancel state. | Content, Social Presence. | Publishing, Social Presence, Content Library |
| Distribution | Adapt and distribute content across multiple pages/platforms. | Multi-target distribution, variants per target, channel fit, distribution status. | Publishing, Content, Pages. | Publishing, Content Library, Analytics |
| Analytics | Measure activity, outcomes, and performance. | Raw platform metrics, normalized metrics, product analytics, automation analytics, content performance, operational analytics. | Publishing, Automation, Social Presence, Interactions. | Analytics plus all measured domains |
| Intelligence / AI | Assist and optimize across domains. | Generate, analyze, recommend, optimize, classify, summarize, assist, transform. | Content, Automation, Publishing, Analytics. | Intelligence plus all assisted domains |
| Notifications | Surface important operational changes. | Alerts, approvals, failures, publishing status, automation exceptions, performance signals. | Publishing, Automation, Analytics. | Notification, Publishing, Automation, Analytics |
| Settings / Governance | Configure the operation safely. | Workspace settings, connection governance, page configuration, operational rules. | Workspace & Identity. | Settings & Governance, all configurable domains |

## Capability boundary notes

- Content creation is not the same as creative production. Content is the publishable product concept; creative production creates or transforms assets and outputs.
- Publishing is not analytics. Publishing delivers; analytics measures and explains.
- Automation is not notifications. Automation acts; notifications inform.
- AI is not a separate product area. It is a capability layer across domains.
