# Responsive Desktop

Desktop must remain Desktop in narrow windows. It must not become Mobile WebApp.

The architecture must support approximately half of an ultrawide monitor.

M003 defines conceptual modes, not technical breakpoints.

## Wide Desktop

- Navigation: expanded sidebar with icons and labels.
- Panels: persistent side panels and inspectors where useful.
- Density: Standard or Compact.
- Tables: broad column visibility.
- Filters: inline filters where appropriate.
- Editors: canvas/work area plus persistent secondary panels.

## Standard Desktop

- Navigation: expanded or compact sidebar depending on available width.
- Panels: persistent primary inspector; secondary panels may collapse.
- Density: Standard, with Compact for tables and management views.
- Tables: prioritize primary and operational columns.
- Filters: inline primary filters, secondary filters grouped.
- Editors: preserve main work area and collapse secondary panels when needed.

## Narrow Desktop

- Navigation: collapsed or icon-first sidebar.
- Panels: inspectors become collapsible or temporary.
- Density: Compact where appropriate, without losing legibility.
- Tables: prioritize columns; reduce or hide secondary columns before horizontal scroll.
- Filters: primary filters remain visible; More Filters handles secondary filters.
- Editors: preserve priority:

```text
Canvas / Main Work Area
> Inspector
> Assets / Secondary Panels
```

## Narrow desktop rules

- Do not switch to mobile navigation by default.
- Do not hide primary actions.
- Do not make context invisible.
- Do not let secondary panels consume the work area.
