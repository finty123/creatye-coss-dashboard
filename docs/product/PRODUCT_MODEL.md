# Product Model

## Operating model

Creatye Studio is organized around a shared operation:

1. Workspaces define the operating container.
2. Social connections and pages define where the operation can act.
3. Content and creative production create reusable material.
4. Automation defines operational behavior.
5. Publishing and distribution deliver content to targets.
6. Analytics measure activity and outcomes.
7. Intelligence assists and optimizes across the loop.

## Actors

| Actor | Product role | Notes |
| --- | --- | --- |
| Workspace owner | Owns the operating space and final governance accountability. | Not a technical RBAC definition. |
| Admin/member | Helps configure and manage the workspace. | Membership depth will be defined later. |
| Operator/editor | Creates, edits, schedules, monitors, and optimizes work. | Primary hands-on product user. |
| Social audience | External people who view, react, comment, click, message, or otherwise interact. | Not a workspace user. |
| External platform | Social network, channel, or destination that provides pages, events, publishing surfaces, and metrics. | Conceptual actor only. |
| System/automation | Executes flows, actions, waits, branches, retries, and operational events. | No implementation is implied. |
| AI agent | Future intelligence actor that can assist, generate, analyze, recommend, and optimize. | Provider/model not defined. |

## Object families

| Family | Includes | Purpose |
| --- | --- | --- |
| Operating context | Workspace, User, Member, Settings | Defines who works and under which rules. |
| Social presence | Social Connection, Page, Target | Defines external places where the operation can act. |
| Content inventory | Media, Asset, Content, Variant, Output | Holds reusable material and publishable content. |
| Creative production | Project, Video, Image, Template, Render | Produces and transforms content artifacts. |
| Automation | Automation, Flow, Trigger, Condition, Action, Wait, Branch, Execution | Runs operational behavior from events to outcomes. |
| Publishing | Publication, Schedule, Publish Attempt, Published Content | Delivers content to pages and channels. |
| Feedback loop | Interaction, Metric, Insight, Recommendation | Measures and improves the operation. |

## Conceptual loops

### Content loop

Idea -> Project -> Content -> Variant -> Output -> Publication -> Metrics -> Optimization

### Automation loop

Social Event -> Trigger -> Automation -> Flow -> Action / Condition / Wait -> Interaction -> Execution Result

### Publishing loop

Content -> Publication -> Target -> Schedule -> Publish Attempt -> Published Content -> Metrics
