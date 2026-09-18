# Editor Architecture

M003 documents editor UX architecture only. It does not implement editor engines or code.

## Shared editor principles

- Preserve useful work area.
- Keep context visible.
- Make selection and inspector relationship clear.
- Support zoom, selection, drag/drop, multi-select, context menu, errors, status, undo, and redo.
- Keep canvas/work area higher priority than secondary panels.

## Video Studio

Conceptual architecture:

- Left: Assets / Media / Templates.
- Center: Preview / Editing Area.
- Right: Inspector / Properties.
- Bottom: Timeline or equivalent editing area.
- Top: Project context, Save, Primary actions.

Important final actions:

- Save to Library.
- Create Variant.
- Publish.
- Schedule.
- Use as Template.

Video Studio integrates with:

- Content Library.
- Templates.
- Publishing.

Do not treat export/download as the only end of the journey.

## Image Studio

Conceptual architecture:

- Left: Assets, Layers, Templates, AI assist where appropriate.
- Center: Canvas.
- Right: Inspector / Properties.
- Top: Project, Save, Primary actions.

Output actions:

- Save to Library.
- Create Variant.
- Publish.
- Schedule.
- Use as Template.

Maintain cognitive consistency with Video Studio without forcing identical workflows.

## Flow Builder

Flow Builder is a work mode inside Automation.

Approved architecture:

- Top: Back / Automation context, Flow name, Status, Test, Activate / Publish.
- Left: Nodes / triggers / actions / logic.
- Center: Canvas.
- Right: Inspector.

Priority:

```text
Canvas > Inspector > Node Panel
```

Conceptual support:

- Nodes.
- Edges.
- Selection.
- Zoom.
- Drag/drop.
- Multi-select.
- Context menu.
- Test / preview.
- Errors.
- Status.
- Undo / redo.

No automation engine is implemented in M003.
