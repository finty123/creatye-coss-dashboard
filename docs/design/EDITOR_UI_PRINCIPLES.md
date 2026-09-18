# Editor UI Principles

Creatye Studio will include complex editor-like surfaces such as Automation Flow Builder, Video Studio, and Image Studio.

M002 defines shared editor principles only.

## Canvas

- Canvas should support focus, orientation, zoom, selection, and spatial relationships.
- Canvas should not become decorative; it exists for manipulation and understanding.
- Empty canvas states should guide the first meaningful action.

## Inspector and property panels

- Inspectors show editable properties for the current selection.
- Property panels should use consistent label, value, validation, and reset patterns.
- Avoid hiding critical state behind hover-only controls.

## Toolbars

- Toolbars should group by task, not by arbitrary icon collections.
- Icon-only tools require labels/tooltips.
- Destructive or high-impact actions need clear states.

## Selection and manipulation

- Selection, multi-select, drag/drop, context menu, layers, zoom, undo/redo, and keyboard shortcuts should share patterns across editors where possible.
- Selection state must be visually clear and accessible.
- Drag/drop should have keyboard or menu alternatives where feasible.

## Floating controls

Floating controls are allowed only when proximity improves speed and clarity.

## Undo and history

Complex editors must treat undo/redo as core interaction, not an afterthought.

## Keyboard shortcuts

Keyboard shortcuts should accelerate expert work but never be the only way to complete a core task.
