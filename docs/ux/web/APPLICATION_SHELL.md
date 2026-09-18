# Application Shell

## Shell regions

The Web Desktop application shell includes:

- Persistent sidebar.
- Workspace selector.
- Main content area.
- Contextual page header.
- Optional contextual panels.
- Global Create.
- Search / Command.
- Notifications.
- Profile / Settings access.

## Page header

Page Header should contain only:

- Title.
- Context.
- Primary actions.

Secondary metadata is allowed only when useful.

Avoid duplicating context already visible in the sidebar, object header, or filters.

## Global Create

Define a persistent conceptual action:

```text
+ Create
```

Possible actions:

- Video.
- Image.
- Automation.
- Publication.
- Template.

Goal: reduce navigation and accelerate frequent creation tasks.

Do not define final UI placement or implementation in M003.

## Search / Command

Global Search / Command Palette is a transversal concept.

Future conceptual shortcut:

```text
Ctrl/Cmd + K
```

It can locate:

- Pages.
- Content.
- Projects.
- Automations.
- Templates.
- Publications.

It may later execute actions:

- Create Video.
- Create Automation.
- Schedule Content.
- Open Page.

Do not implement command palette in M003.

## Notifications

Notifications are transversal and functional.

Examples:

- Publishing failures.
- Automation errors.
- Expired connections.
- Processing completion.
- Operational warnings.
- Important performance alerts.

Notifications do not become a primary sidebar domain by default.

## Settings access

Settings is a global configuration area.

Conceptual groups:

- Workspace.
- Members.
- Connections.
- Preferences.
- Notifications.
- Security.
- Platform / integration configuration.

M003 does not define technical RBAC or implementation architecture.
