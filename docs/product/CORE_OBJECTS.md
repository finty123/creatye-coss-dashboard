# Core Objects

These are conceptual product objects, not database tables.

| Object | Purpose | Owner domain | Main relationships | Conceptual lifecycle |
| --- | --- | --- | --- | --- |
| Workspace | Operating container for a team's content/social operation. | Workspace & Identity | Users, members, pages, content, automations, publications, settings. | Created -> configured -> active -> archived. |
| User | Human identity participating in one or more workspaces. | Workspace & Identity | Members, ownership, actions. | Invited/created -> active -> deactivated. |
| Member | User participation inside a workspace. | Workspace & Identity | Workspace, user, operational role. | Invited -> active -> suspended/removed. |
| Social Connection | External account/platform connection. | Social Presence | Workspace, pages, publishing, automation, metrics. | Connected -> healthy/expired -> reconnected/disconnected. |
| Page | Social page/profile/channel managed by the workspace. | Social Presence | Connection, targets, publications, automations, metrics. | Discovered -> configured -> active -> disconnected/archived. |
| Media | Source material available for reuse. | Content Library | Assets, projects, content, renders. | Added -> classified -> reused -> archived. |
| Asset | A usable media item or derivative in the content inventory. | Content Library | Media, projects, outputs, templates. | Created/imported -> used -> versioned -> archived. |
| Content | A publishable concept or composed item. | Content Library | Media, variants, outputs, publications, metrics. | Draft -> ready -> published/distributed -> optimized/archived. |
| Variant | Adaptation of content for a target, format, audience, or channel. | Content Library | Content, output, publication. | Created -> reviewed -> ready -> superseded. |
| Output | Final usable file or artifact produced from content/creative work. | Content Library | Project, render, publication. | Prepared -> validated -> used -> archived. |
| Project | Creative working container for video or image production. | Creative Production | Media, assets, templates, renders, outputs. | Created -> edited -> rendered -> completed/archived. |
| Video | Video-oriented creative object or output. | Creative Production | Project, media, output, content. | Imported/generated/edited -> rendered -> reused/published. |
| Image | Image-oriented creative object or output. | Creative Production | Project, media, output, content. | Imported/generated/edited -> rendered -> reused/published. |
| Template | Reusable structure for content, creative work, or automation. | Creative Production / Automation | Projects, content, flows. | Created -> reused -> updated -> retired. |
| Automation | Operational rule set that reacts to events and drives flows. | Automation | Flow, trigger, execution, interactions, pages. | Draft -> active -> paused -> archived. |
| Flow | Ordered automation logic. | Automation | Trigger, conditions, actions, waits, branches. | Designed -> validated -> active -> revised. |
| Trigger | Event matcher that starts or routes automation. | Automation | Social event, flow, execution. | Defined -> listening -> matched -> disabled. |
| Action | Automation step that performs work. | Automation | Flow, execution, content, message, platform operation. | Defined -> executed -> succeeded/failed. |
| Execution | Runtime occurrence of an automation flow. | Automation | Trigger, action results, interaction, metrics. | Started -> running -> completed/failed/canceled. |
| Interaction | Audience or system event that can be observed and used. | Automation / Analytics | Page, automation, publication, audience. | Received -> classified -> acted on -> measured. |
| Publication | Plan to publish content to one or more targets. | Publishing & Distribution | Content, target, schedule, attempts. | Draft -> scheduled/queued -> published/failed/canceled. |
| Target | Destination for publication or distribution. | Publishing & Distribution | Page, platform, publication. | Selected -> validated -> used -> unavailable. |
| Publish Attempt | One delivery attempt for a publication target. | Publishing & Distribution | Publication, target, result, metrics. | Queued -> attempted -> succeeded/failed/retried. |
| Published Content | Content that has been delivered externally. | Publishing & Distribution | Publication, page, metrics, interactions. | Published -> monitored -> optimized/archived. |
| Metric | Measured signal about product or platform activity. | Analytics | Pages, content, publications, automations, interactions. | Collected -> normalized -> analyzed -> retained. |
| Insight | Interpretation or finding derived from metrics and context. | Analytics / Intelligence | Metrics, recommendations, optimization. | Generated -> reviewed -> applied/dismissed. |
| Notification | User-facing operational signal. | Notification | Events, approvals, failures, alerts. | Created -> delivered -> read/resolved. |

## Duplicate concept decisions

- Video and Image are creative object types, while Content is the publishable product concept.
- Media is source material; Asset is a usable item or derivative in the inventory.
- Project is a creative working container; Output is a finalized artifact.
- Publication is the publishing plan; Publish Attempt is a delivery try; Published Content is the external result.
- Journey is a user/product journey; Flow is automation logic. They are not synonyms.
