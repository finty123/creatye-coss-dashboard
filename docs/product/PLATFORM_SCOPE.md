# Desktop vs Mobile Scope

Categories:

- FULL: complete product capability for the platform.
- SIMPLIFIED: reduced capability optimized for the platform.
- MONITOR: visibility and lightweight actions.
- NOT AVAILABLE: intentionally out of scope for the platform.

| Capability | Desktop Web | Mobile WebApp | Notes |
| --- | --- | --- | --- |
| Workspace & Identity | FULL | SIMPLIFIED | Mobile can handle account context and basic profile/status, not complex administration. |
| Social Connections | FULL | MONITOR | Connection setup and recovery are desktop-first; mobile can surface status and urgent reconnect prompts. |
| Page Management | FULL | SIMPLIFIED | Desktop handles bulk/page configuration; mobile supports quick page status and selection. |
| Content Creation | FULL | SIMPLIFIED | Desktop handles complex creation; mobile supports quick drafts, edits, and approvals. |
| Media Management | FULL | SIMPLIFIED | Desktop handles library operations; mobile supports capture/upload/review. |
| Video Creation | FULL | SIMPLIFIED | Desktop handles complex editing; mobile supports quick capture, review, simple edits, and approvals. |
| Image Creation | FULL | SIMPLIFIED | Desktop handles composition; mobile supports quick generation, adjustment, and approval. |
| Templates | FULL | SIMPLIFIED | Desktop manages templates; mobile applies templates in focused flows. |
| Automation | FULL | MONITOR | Desktop builds flows; mobile monitors status, pauses/resumes, and approves urgent actions. |
| Publishing | FULL | SIMPLIFIED | Desktop handles scheduling and multi-target setup; mobile supports quick publish, approve, cancel, and status. |
| Distribution | FULL | MONITOR | Desktop manages multi-page distribution; mobile monitors results and exceptions. |
| Analytics | FULL | MONITOR | Desktop provides detailed analytics; mobile shows summaries, alerts, and key trends. |
| Intelligence / AI | FULL | SIMPLIFIED | Desktop supports broad assistance; mobile supports focused recommendations and quick actions. |
| Notifications | FULL | FULL | Notifications are core to mobile and useful on desktop. |
| Settings / Governance | FULL | MONITOR | Desktop configures governance; mobile reviews status and urgent prompts. |

## Scope principle

Desktop optimizes for configuration, complex editing, bulk management, flows, detailed analytics, and administration.

Mobile optimizes for status, monitoring, quick actions, approvals, quick publishing, notifications, and summarized analytics.

Navigation and component decisions are intentionally deferred to M003 and M004.
