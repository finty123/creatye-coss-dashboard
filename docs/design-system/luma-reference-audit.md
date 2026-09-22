# Luma visual reference audit

> Read-only audit performed on 2026-09-22 in the authenticated Luma workspace supplied by the product owner. This document records patterns, not proprietary implementation. No generation, upload, creation, deletion, billing change, account change, invitation, or credit-consuming action was performed.

## Scope and method

The audit covered the global shell, Recents, Shared With You, Boards, Projects, Discover, Skills, Members, Library, Connectors, Billing, Usage, Account, the board canvas/editor, profile popover, command palette, AI composer, loading/skeleton states, light/dark theme tokens, and responsive behavior at 390, 768, 1100, 1440, and 1920 pixels.

Representative elements were inspected through the rendered DOM and computed styles. Values below are intentionally limited to visual-system evidence: geometry, semantic color roles, type scale, spacing, radius, elevation, state behavior, and layout decisions. No HTML, CSS bundle, copy, logo, image, or proprietary asset was copied into Creatye.

No screenshots are stored in the repository. The live workspace exposed account identity, email, credit balance, private media, and team data; retaining captures would conflict with the requirement to remove or conceal personal information. The written observations below are the sanitized evidence.

## 1. Facts observed

### Global shell and navigation

- The application uses a warm neutral canvas around `rgb(223 223 223)` with a light floating navigation surface around `rgb(238 238 238)`.
- On desktop, the sidebar is inset 12 px from the viewport, approximately 200 px wide, fills the available height minus 24 px, and uses a 24 px outer radius.
- Sidebar rows are 32 px high, use 12 px type, an 8 px icon-to-label gap, 12 px horizontal padding, and fully rounded ends.
- The selected item is neutral, using about 10% reverse-color fill instead of a brand-colored indicator.
- Workspace/profile appears at the top; usage appears at the bottom in a 32 px outlined pill.
- Search exposes a visible keyboard shortcut. Global utilities are grouped in a small floating pill at the top-right.
- Primary navigation, workspace navigation, and resource/account actions are separated by spacing and a single hairline divider rather than many boxed sections.

### Home, boards, projects, and empty states

- Recents prioritizes a sparse canvas and large negative space. Content begins after the floating sidebar, with cards rather than a dense page header.
- Board cards are approximately 329 x 225 px at the inspected desktop width, with 22 px radius, 16 px inner padding, neutral media previews, and a subtle scale-up hover transition of about 300 ms.
- The Boards page centers the AI composer above the board grid. A create card and existing board cards share the same footprint and corner treatment.
- The Projects view uses a concise title and right-aligned view/search/filter utilities. Its loading state is a low-contrast grid of rounded skeleton cards rather than a spinner-only page.
- Empty states are extremely short. Shared With You shows one centered sentence; Library shows one sentence inside a broad surface plus a single high-priority action.

### AI composer

- The composer is approximately 564 x 109 px on desktop and 330 x 109 px at 390 px.
- It uses a 28 px radius, 16 px padding, a light panel around `rgb(246 246 246)`, and a 0.5 px inset ring.
- Prompt text is 14 px / 20 px. Attach, voice, and send affordances are 36 px touch targets.
- The disabled send action reduces opacity to roughly 30% instead of introducing a new color.
- The surrounding AI signal is a single soft ambient blue wash. It is spatial and low-opacity, while the composer itself remains neutral.

### Command palette, menus, and popovers

- The command palette is centered, approximately 580 x 360 px at the inspected viewport, with a 24 px radius and clipped overflow.
- Its surface is around `rgb(246 246 246)`, with a broad `0 2px 30px rgba(0,0,0,.05)` shadow and a very subtle inset edge.
- The backdrop uses approximately 40% black. The palette z-layer is intentionally high and isolated.
- Search is a single 14 px field. Results are grouped under small uppercase section labels and use a neutral selected row.
- Profile popovers align to the triggering surface, use about 16-24 px rounding, soft elevation, concise rows, and no decorative header.

### Canvas/editor

- The board editor removes the sidebar and uses a full-bleed neutral dotted canvas.
- The top bar contains breadcrumb/context on the left and compact actions on the right.
- The primary floating tool rail is centered along the bottom, about 48 px high, fully rounded, and uses the same panel surface and broad soft shadow as other floating chrome.
- Contextual controls are grouped into separate floating pills at the bottom corners.
- The dominant action is black with white text; most tool actions remain icon-only and neutral until active.
- Zoom is shown as a compact technical value. The canvas prioritizes spatial work over persistent panels.

### Cards, templates, filters, and lists

- Discover combines a centered composer with a horizontally scrollable pill filter row and a three-column visual card grid.
- Template/skill cards use large media-first thumbnails, a neutral white content block, rounded outer corners, restrained metadata, and truncation instead of tall explanatory copy.
- Filters use outlined pills, while the active filter becomes black with white text.
- Connector, member, account, and usage pages use broad white surfaces containing hairline rows. They avoid nesting every row in its own card.
- Usage controls combine popover buttons, an inline search field, and a small download icon before the table surface.
- Billing uses a large summary surface, a two-option segmented control, and wide plan columns separated by hairlines. Primary calls to action are black pills.

### Forms and settings

- Account settings use stacked broad surfaces, inline labels, hairline separators, and right-aligned actions.
- Text hierarchy is compact: most navigation and metadata are 11-12 px; inputs are 14 px; major workspace headings are around 20 px; large numeric values use a stronger 28-32 px treatment.
- Destructive actions remain visually quiet until intent is explicit; they are not rendered as permanently saturated danger blocks.

### Light and dark themes

- The observed light theme maps the canvas to `#dfdfdf`, base navigation/background to `#eeeeee`, input-like surfaces to `#ebebeb`, floating panels to `#f6f6f6`, dropdowns/artifact surfaces to white, and primary text to roughly 90% black.
- The available dark theme maps canvas to `#141414`, base surfaces to `#222222`, inputs to `#282828`, dropdowns/panels to `#202020`, raised controls to `#313131`, primary text to roughly 90% white, and borders to 5-10% white.
- The live theme was not switched because the audit was explicitly read-only. Dark values were inspected from the loaded theme rules without changing account or application settings.

### Motion and interaction states

- Common control transitions cluster around 100-200 ms. Media cards use approximately 300 ms ease-out transforms.
- Hover is communicated mainly through 5-10% neutral fills, slightly stronger rings, or a 1-2% scale change on media cards.
- Focus-visible rules use a narrow ring or inset ring, not a glow.
- Disabled controls preserve layout and reduce opacity.
- Selected states remain neutral except when a primary action or meaningful status requires color.

### Responsive behavior

- At 1920, 1440, and 1100 px, the sidebar stays 200 px and the centered composer caps at 564 px.
- At 768 px, the full sidebar remains visible and the composer contracts to about 481 px.
- At 390 px, the sidebar is removed, a menu button appears at the top-left, global utilities remain in a small top-right pill, and the content uses 30 px horizontal gutters.
- At 390 px, cards become a single column and preserve generous radii; no horizontal overflow was observed (`scrollWidth == clientWidth`).
- This is useful evidence, but Creatye will introduce an intermediate icon rail earlier than Luma to support half-ultrawide operation.

## 2. Approximate values

These values are measurements or rounded approximations suitable for calibration, not a copy specification.

| Category | Observed/approximate value |
| --- | --- |
| Canvas | `#dfdfdf` light / `#141414` dark |
| Navigation surface | `#eeeeee` light / `#222222` dark |
| Floating panel | `#f6f6f6` light / `#202020` dark |
| Input/card-muted surface | `#ebebeb` light / `#282828` dark |
| Primary text | black at ~90% / white at ~90% |
| Secondary text | black at ~70% / white at ~60% |
| Default border | reverse color at 5-10% |
| Accent | restrained blue near `#1984ff` |
| Sidebar | 200 px, 12 px viewport inset, 24 px radius |
| Navigation row | 32 px high, 12 px type, 8 px gap, full radius |
| Composer | 564 x 109 px desktop; 330 x 109 px mobile; 28 px radius |
| Board card | ~329 x 225 px; 22 px radius; 16 px padding |
| Command palette | ~580 x 360 px; 24 px radius |
| Floating toolbar | 48 px high; full radius |
| Compact icon control | 28-32 px |
| Composer icon control | 36 px |
| Primary large control | 40-48 px |
| Type scale | 9, 10, 11, 12, 14, 16, 18, 20, 24, 40 px |
| Common radii | 4, 6, 8, 10, 12, 22, 24, 28, 32, full |
| Base spacing step | 4 px |
| Panel shadow | `0 2px 30px rgba(0,0,0,.05)` plus subtle inset edge |
| Overlay | black at ~40% |
| Common motion | 100, 150, 200, 300 ms; standard/ease-out curves |

The inspected font stack is Graphik-based and proprietary. It must not be used by Creatye.

## 3. Decisions adapted to Creatye Canvas

- Use Geist Sans as the interface family and Geist Mono for metrics, durations, IDs, resolutions, and technical data.
- Keep the spatial, warm-neutral shell but use Creatye semantic tokens and product vocabulary.
- Use a 232 px floating sidebar on wide desktop, an icon rail at intermediate widths, and a dedicated mobile navigation pattern below 720 px.
- Preserve a neutral active navigation state. Creatye brand color is reserved for primary action, focus, AI state, and meaningful status.
- Adopt broad hairline list surfaces for operational data and media-first cards for templates/content.
- Standardize broad soft elevation on floating surfaces only; cards in the normal document flow rely on surface contrast and hairlines.
- Use black/white primary controls in light mode and inverse neutral controls in dark mode. Status colors remain semantic.
- Use one subtle AI halo behind the composer. Creatye will use a muted warm-violet/blue mix at low opacity without decorative gradients inside components.
- Keep page titles compact (24-32 px) and avoid landing-page scale typography.
- Keep the Studio creator-first and spatial, but use the Creatye workflow: tool rail, media library, central preview, contextual inspector, and bottom timeline.
- Provide explicit keyboard behavior and visible focus for menus, dialogs, tabs, command palette, editor controls, and mobile drawers.
- Treat mobile as a first-class PWA surface, not merely a compressed desktop shell.

## 4. Aspects that must not be copied

- Luma brand names, logos, workspace naming, copy, onboarding language, pricing language, plan names, or proprietary model names.
- Graphik or any other proprietary typeface.
- Luma media, thumbnails, templates, generated outputs, icons, imagery, or private workspace data.
- Source HTML, CSS bundles, React structure, class names, implementation details, API routes, or internal identifiers.
- Exact layout coordinates, exact palette values, or exact component combinations when they do not serve a real Creatye workflow.
- Credit wording, billing hierarchy, generation affordances, board semantics, or editor actions specific to Luma.
- The full desktop sidebar at tablet width; Creatye needs an intermediate rail for half-ultrawide and notebook layouts.
- Any gradient-heavy imitation of the observed AI halo. Creatye uses a single subdued atmospheric cue.

## Reference conclusion

The strongest reusable principle is not a specific card or color: it is the separation between a quiet spatial canvas, floating high-value chrome, compact neutral controls, and color used only for action or meaning. Creatye Canvas adopts that structural discipline while changing the information architecture, copy, components, responsive thresholds, brand semantics, and creative workflows to fit Creatye Studio.
