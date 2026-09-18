# Data-Dense Patterns

## Filter architecture

Common filters:

- Date.
- Page.
- Platform.
- Status.
- Content.
- Automation.

## Global context filters

Global context filters affect a meaningful scope, such as workspace or page context.

They must remain visible and identifiable.

## Local filters

Local filters affect only the current list, table, calendar, analytics view, or management surface.

They should be resettable and should explain empty filtered results.

## Avoid invisible context

Persistent filters must be clearly identified.

If a view is scoped by Page, Workspace, Status, Date, or Platform, that context must be visible.

## Bulk operations

Desktop supports bulk operations:

1. Selection.
2. Multi-select.
3. Bulk toolbar.
4. Confirmation when needed.
5. Progress.
6. Partial success.
7. Errors.
8. Undo where appropriate.

Do not use confirmation modals for every small action.

## Tables and management views

- Preserve primary object identity.
- Prioritize important columns.
- Hide or summarize secondary columns before defaulting to horizontal scroll.
- Support row states and selection states.
- Keep actions predictable.

## Publishing data density

Publishing views must distinguish:

- View: Calendar or List.
- State: Draft, Scheduled, Publishing, Published, Failed, Canceled.
- Filter: page, platform, status, date.

## Analytics density

Analytics can combine charts, tables, comparisons, and drill-downs, but every module should answer an operational question.
