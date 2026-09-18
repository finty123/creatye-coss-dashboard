# Navigation

## Primary sidebar

Structure:

```text
[Workspace Selector]

Home
Pages
Content
Automations
Publishing
Analytics

----------------

Settings
```

## Sidebar rules

- Support expanded and collapsed states.
- Expanded state uses icon + label.
- Collapsed state may use icons only.
- Avoid deep navigation.
- Avoid complex accordions.
- Avoid an excessively wide sidebar.
- Preserve high operational work area.
- Active state must be clear.

## Workspace context

The top of the sidebar contains workspace context, for example:

```text
Creatye Workspace v
```

The architecture remains prepared for:

- Multiple workspaces.
- Teams.
- Clients.
- Separate operations.

M003 does not define technical RBAC.

## Official navigation map

```text
CREATYE STUDIO

Home

Pages
└── Page Detail
    ├── Overview
    ├── Content
    ├── Publishing
    ├── Automations
    ├── Analytics
    └── Settings

Content
├── Library
├── Video Studio
├── Image Studio
└── Templates

Automations
├── Automations
├── Templates
├── Activity
└── Analytics

Publishing
├── Calendar View
└── List View

Analytics
├── Overview
├── Content
├── Pages
├── Automations
└── Publishing

Settings

TRANSVERSAL

AI
Search / Command
Notifications
Workspace Context
Page Context
Global Create
```

## Navigation behavior

- Primary sidebar switches between major operational areas.
- In-area tabs/sections switch perspective without becoming global navigation.
- Page context can carry across relevant operations.
- Command/search can jump directly to known objects or actions.
