# Product Areas

## Home - Command Center

Home is an Operational Command Center, not a promotional dashboard.

It should answer:

- What needs attention?
- What is running?
- What is scheduled?
- What failed?
- How is the operation performing?
- What opportunities exist?
- What happened recently?

Conceptual sections:

- Attention: publishing failures, expired social connections, automation errors, operational warnings.
- Today: scheduled publications, active automations, content ready for action.
- Performance: top content, page growth, automation performance, declining content.
- Opportunities: content worth reproducing, automations worth optimizing, unusual page growth, recommendations.
- Recent Activity: summarized operational history.

Avoid giant decorative metrics, excessive cards, and generic marketing dashboard patterns.

## Pages

Pages is a central entity.

Initial page supports:

- Search.
- Platform filter.
- Status filter.
- Connected Pages list.

Each Page has its own context.

Page Detail sections:

- Overview.
- Content.
- Publishing.
- Automations.
- Analytics.
- Settings.

When entering another area from a Page context, preserve context. Example:

```text
Pages -> Page A -> Automations -> Create Automation
Page = Page A
```

The same applies to Page -> Publishing, Page -> Content, and Page -> Analytics.

## Content

Content is the parent area for creation and materials:

```text
Content
├── Library
├── Video Studio
├── Image Studio
└── Templates
```

It should reduce the feeling of multiple separate apps.

## Content Library

Library is the center for produced materials.

The product model may include Content, Media, Asset, Project, Variant, and Output, but UX should not expose all conceptual complexity unnecessarily.

Simple conceptual views:

- All.
- Videos.
- Images.
- Projects.

Use filters when appropriate.

## Automations

Automation area views:

- Automations.
- Templates.
- Activity.
- Analytics.

Automation list can show:

- Name.
- Page.
- Trigger.
- Status.
- Executions.
- Performance.
- Last Activity.

Automation Detail views:

- Flow.
- Activity.
- Analytics.
- Settings.

## Publishing

Publishing is one integrated operational area.

Views:

- Calendar.
- List.

Filters:

- Page.
- Platform.
- Status.
- Date.

Primary action:

- New Publication.

Conceptual statuses:

- Draft.
- Scheduled.
- Publishing.
- Published.
- Failed.
- Canceled.

Principle:

- Calendar = view.
- Queue = operational state.
- Published = status/filter.

Do not create separate products for Calendar, Scheduler, Queue, or Published.

## Analytics

Analytics structure:

```text
Analytics
├── Overview
├── Content
├── Pages
├── Automations
└── Publishing
```

Analytics must be actionable:

- Strong Content -> Analyze -> Create Variation.
- Weak Content -> Analyze Why -> Optimize.
- Automation issue -> Open Flow.
- Publishing issue -> Correct / Retry.

Analytics does not end at a chart. It should return users to operational action.

## AI / Intelligence

AI is transversal and does not require a primary sidebar item.

It may appear in:

- Video Studio.
- Image Studio.
- Content.
- Automation.
- Publishing.
- Analytics.

Examples:

- Generate caption.
- Generate variation.
- Assist flow.
- Analyze performance.
- Recommend optimization.
- Suggest publishing time.
- Repurpose content.

Preserve M002 patterns:

- AI action.
- AI suggestion.
- AI result.
- AI-applied change.

Always preserve user control.
