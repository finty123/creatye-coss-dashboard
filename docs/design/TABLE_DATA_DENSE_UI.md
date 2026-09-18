# Table and Data-Dense UI

Desktop must support high-density work without losing clarity.

## Table foundations

- Row height should follow the density model: Comfortable, Standard, Compact.
- Text alignment should support scanning.
- Numeric values should align consistently.
- Primary object identity should remain visible during horizontal or dense scanning.
- Row hover, selected, focused, disabled, loading, and error states must be distinct.
- Sticky headers are appropriate for long operational tables.

## Actions

- Row actions should be predictable and not create visual noise.
- Bulk selection should be clearly separated from row identity.
- Destructive bulk actions require confirmation patterns in future UX work.
- Inline actions should be reserved for frequent, low-risk operations.

## Filters and sorting

- Filters should be visible enough to explain the current data state.
- Sorting should be clear and reversible.
- Empty filtered states must distinguish "no data exists" from "no results match filters".

## Pagination and loading

- Pagination, infinite loading, or virtualized loading will be selected in future UX/technical milestones.
- M002 requires stable loading, empty, partial, failed, and retry states regardless of mechanism.

## Responsive reduction

Desktop reduction may collapse secondary columns, summarize metadata, or move details to inspectors.

Mobile should not attempt full desktop tables by default. Use focused lists, summaries, drill-ins, and quick actions.
