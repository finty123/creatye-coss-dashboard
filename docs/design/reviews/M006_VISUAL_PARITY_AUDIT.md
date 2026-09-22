# M006 Visual Parity Audit

## Scope and method

All 31 PNG files under `docs/design/references/` were opened from their local paths and visually inspected at original resolution on 2026-09-18. They are treated as visual specifications. The audit compares them with the current M006 implementation and the screenshots in `.agent/tmp/m006-visual-remediation-final-2026-09-18/`.

The implementation must preserve the M006 technical foundation while replacing the visual layer. Shared rules extracted from the pack are:

- Geist Sans for UI and Geist Mono only for times, counters, shortcuts, and technical metadata.
- A 4 px spacing base, compact 28-36 px controls, 5-10 px component radii, and 10-14 px sheets.
- Quiet canvas and navigation surfaces, one raised level, hairline borders, and color reserved for action, selection, status, and data.
- Lucide as the only icon family; 16-18 px desktop navigation icons and 18-20 px touch icons.
- Desktop prioritizes scanning density. Studio and Mobile prioritize media and direct manipulation.

## 01 - Navigation / Linear

### `01-navigation/linear/Captura de tela 2026-09-18 185531.png`

- **Target:** Desktop sidebar and workspace navigation.
- **Specification:** 256 px dark rail in the source composition; 13-14 px medium labels, 11-12 px section labels, roughly 28-32 px rows, 8-12 px horizontal insets, 24-32 px section gaps, near-black navigation surface, one low-contrast selected row, 16 px line icons, and strongly muted inactive labels.
- **Current mismatch:** the M006 sidebar is 224 px, rows are 36 px, inactive items remain too prominent, the green selection bar adds brand noise, and the account/create footer competes with navigation.
- **Required change:** use a quieter 232-240 px rail, 32 px rows, 6 px row radius, no selection stripe, smaller icons, lower inactive contrast, and more vertical separation between navigation groups.

### `01-navigation/linear/Captura de tela 2026-09-18 185536.png`

- **Target:** compact tab/segment navigation and Studio journey control.
- **Specification:** 38-40 px tab strip, neutral selected fill, icon-only tabs where recognition is sufficient, icon-plus-label for the active or ambiguous item, 6-8 px radius, subtle separators, and almost invisible unavailable tabs.
- **Current mismatch:** Desktop tabs use conventional underlines while Studio progress spreads labels and circular markers across the full header.
- **Required change:** use compact neutral tab groups, narrow separators, minimal color, and preserve fixed dimensions when label visibility changes.

## 02 - Command Center / Brex and Ramp

### `02-command-center/brex/Captura de tela 2026-09-18 185555.png`

- **Target:** Command Center overview.
- **Specification:** dense top summary in three unequal columns, 12-14 px body, 22-28 px key values, restrained white/light-gray surfaces, minimal card outlines, compact action buttons, and an activity table beginning within the first viewport.
- **Current mismatch:** the current page reads as a spacious editorial dashboard; greeting, alert band, schedule, opportunity, and activity consume excessive vertical space.
- **Required change:** compress header and alert summary, expose operational totals and recent work together, reduce decorative copy, and keep the first activity rows visible at 1024 px height.

### `02-command-center/brex/Captura de tela 2026-09-18 185602.png`

- **Target:** Command Center action modules, tabs, filters, and responsive density.
- **Specification:** two 132-150 px action modules with 8 px radius, compact tab underline, 32-36 px search/filter controls, dense 48-56 px rows, and mobile list translation rather than scaled desktop.
- **Current mismatch:** the opportunity strip is a single promotional band and current controls are distributed across unrelated sections.
- **Required change:** introduce compact actionable modules, consolidate tabs/filters, use row density from the reference, and keep mobile actions as stacked operational rows.

### `02-command-center/ramp/Captura de tela 2026-09-18 185614.png`

- **Target:** Command Center performance area.
- **Specification:** key totals sit directly above a dominant chart; filters form one compact line; chart color is the principal visual signal; the icon rail is approximately 48 px; surrounding chrome is nearly absent.
- **Current mismatch:** the current chart is a small bar sparkline beside schedule content and has too little analytical authority.
- **Required change:** give performance a wider, unframed plot with a clear legend, compact filters, and data-first labels while avoiding a decorative card wrapper.

### `02-command-center/ramp/Captura de tela 2026-09-18 185621.png`

- **Target:** operational activity and review queues.
- **Specification:** a large title, inline counters, a 36 px toolbar, 40-48 px rows, hairline grid separators, thumbnail/receipt previews only where useful, and one vivid CTA.
- **Current mismatch:** recent activity lacks column rhythm and the page uses multiple competing emphasis treatments.
- **Required change:** align activity to stable columns, reduce row height, reserve strong color for the principal action or exception, and keep metadata scannable.

## 03 - Creatye Operational Data UI

### `03-data-ui/creatye-operational-cards/44622598-b47b-44c3-adb4-0644b4164790(1).png`

- **Target:** Studio Select on desktop and media selection cards.
- **Specification:** dedicated 44-48 px dark Studio header, compact three-step controls, a single-line search/filter area, horizontally scrollable page chips, five 9:16 columns around 180 px wide at 1030 px, 10-12 px card radius, 2 px mint selection outline, overlaid metadata, and a persistent centered continue action.
- **Current mismatch:** Select does not exist in M006; the current Studio opens directly on Publish.
- **Required change:** implement the complete media selection state with realistic fixtures, multi-select affordance, image-gradient metadata, search/filter/page chips, stable five-to-four-column behavior, and persistent CTA.

### `03-data-ui/creatye-operational-cards/60fc79da-a5a6-4473-b94d-c2fd0b533e7e.png`

- **Target:** Mobile History and operational cards.
- **Specification:** 16 px gutters, compact header and segmented control, 44 px search, scrollable status pills, stacked 180-200 px cards, muted raised surface, small semantic status pill, dense metadata, thin progress meter, and persistent two-item bottom navigation.
- **Current mismatch:** the current mobile route only shows editing and a publish handoff; History and reusable operational card density are absent.
- **Required change:** add an independent History composition and reuse its compact card/status grammar in mobile operational surfaces.

## 04 - Studio / Approved Desktop

### `04-studio/approved-desktop/1edef7d9-e0c5-422d-9b7a-5b27fcb6277c(1).png`

- **Target:** Studio entry and creation-mode hierarchy.
- **Specification:** 154-168 px navigation rail, 24 px content inset, one dominant full-width creation surface, three compact mode tiles, 6-8 px radii, small utility controls, dark tonal hierarchy, and accent restricted to the primary creation path.
- **Current mismatch:** M006 has no Studio entry/select overview and its Publish canvas uses an oversized empty central area.
- **Required change:** make the current step obvious, allocate space to the active task, and use compact creation choices without marketing-style cards.

### `04-studio/approved-desktop/9f558741-a849-487e-8cc7-83c128d37975(1).png`

- **Target:** Studio Customize desktop workspace.
- **Specification:** compact left tool rail, adjacent asset/context panel, large 16:9 preview, attached control row, simple timeline strip, 12-13 px utility typography, and clear canvas-versus-panel contrast.
- **Current mismatch:** Customize is missing; the existing Publish screen incorrectly keeps editing tools and a sequence strip visible.
- **Required change:** implement a dedicated Customize workspace with contextual template browser, dominant preview, compact tool navigation, simple variants, and no professional editing timeline.

### `04-studio/approved-desktop/e968762a-e0eb-4a0b-b4e2-129bc1f14b2a(1).png`

- **Target:** template discovery and contextual content browsing.
- **Specification:** persistent left navigation, 32 px search, slim tabs, a wide featured media band, and 3-column thumbnail rows with 6 px radius and compact captions.
- **Current mismatch:** no template discovery exists in M006.
- **Required change:** provide search, type/category/niche filters, actual template thumbnails, selected state, and a dense browser inside Customize rather than placeholder controls.

## 04 - Studio / Approved Mobile

### `04-studio/approved-mobile/1f83ff53-bf92-42ec-b52e-588f05b10c14(1).png`

- **Target:** Mobile Studio editing hierarchy.
- **Specification:** edge-dominant vertical preview, controls attached beneath media, compact project cards, high-contrast dark surfaces, and one primary creation action.
- **Current mismatch:** the current mobile preview is full-bleed but the publish sheet begins too early and reduces the editing state to a handoff screen.
- **Required change:** preserve media dominance while separating edit and publish states and keeping tool access directly attached to the preview.

### `04-studio/approved-mobile/b7721b93-6fde-4400-8c01-f47296b38288(1).png`

- **Target:** Mobile template/effect browser and media collection.
- **Specification:** preview occupies roughly two-thirds of the working screen, tabbed controls are compact, thumbnail strips are dense and image-led, secondary actions stay dark, and the confirmation action remains reachable by thumb.
- **Current mismatch:** M006 lacks a real template browser and asset collection on mobile.
- **Required change:** implement a bottom-sheet template browser with two-column media, selected state, filters, and a fixed close/confirm hierarchy without copying the reference palette.

## 04 - Studio / Current Creatye Desktop

### `04-studio/current-desktop/44622598-b47b-44c3-adb4-0644b4164790(1) (1).png`

- **Target:** authoritative Studio Select structure.
- **Specification:** same structure as the operational-card duplicate: full dark canvas, five-column 9:16 media grid, compact header/steps, page chips, selected border/check, overlaid 10-12 px metadata, and persistent continue bar.
- **Current mismatch:** absent.
- **Required change:** reproduce this information architecture closely while refining typography, icon consistency, spacing, and image treatment through shared M006 tokens.

### `04-studio/current-desktop/80525b41-047a-40a1-824b-ab0186843169(1).png`

- **Target:** authoritative Studio Customize structure.
- **Specification:** 68-72 px header, 56-68 px tool rail, centered 330 x 590-ish 9:16 preview at 1024 px, 340-360 px contextual panel, 44 px search, two-column template grid, selected mint outline, and CTA anchored to the panel bottom.
- **Current mismatch:** absent; current Publish preview is only about 320 px and surrounded by empty workspace while an unrelated composer occupies the side.
- **Required change:** implement this three-zone editor with a responsive canvas that expands preview appropriately and keeps the template browser fully usable at 1024 px.

### `04-studio/current-desktop/c3595894-d04e-480d-86dc-d736015cd2db(1).png`

- **Target:** authoritative Studio Publish structure.
- **Specification:** compact 500 px main form, four summary metrics in one row, batch name, caption, system message, schedule control, approximately 260 px preview/summary rail, and CTA anchored bottom-right; dark canvas with hairline boundaries and little ornament.
- **Current mismatch:** current M006 uses a wide editing canvas plus a 382 px social composer, keeps editing toolrails and timeline visible, and leaves a large inactive area.
- **Required change:** make Publish a dedicated social composer with balanced form/preview proportions, destinations and scheduling, no editor timeline, and no purposeless canvas.

## 04 - Studio / Current Creatye Mobile

### `04-studio/current-mobile/3c3d07d6-fc7e-481c-8022-c770e41e51b7(1).png`

- **Target:** Mobile Customize template sheet.
- **Specification:** top app header remains visible; sheet has 12-14 px top radius, handle, centered title, circular back/close controls, 44 px search, compact category pills, two selects, two-column template cards, and bottom navigation behind the sheet.
- **Current mismatch:** no template sheet exists.
- **Required change:** implement this as an independent composition at 390 and 430 px, with scroll confined to sheet content and no text clipping.

### `04-studio/current-mobile/60fc79da-a5a6-4473-b94d-c2fd0b533e7e(1).png`

- **Target:** Mobile History.
- **Specification:** identical source role to the operational-card duplicate: compact searchable/filterable history, stacked status cards, visible progress, and two-item bottom navigation.
- **Current mismatch:** absent.
- **Required change:** add History as a real state and keep the content readable above the fixed navigation.

### `04-studio/current-mobile/d0ed83a5-0065-457d-a464-2d479ec4ad3c(1).png`

- **Target:** authoritative Mobile Customize base screen.
- **Specification:** 60 px header, centered 278 x 494-ish preview at 402 px viewport, one metadata line, 64 px attached tool tray, full-width 48 px next action, and 64 px bottom navigation; black canvas and minimal empty space.
- **Current mismatch:** current M006 crops the preview to full viewport width, overlays a larger caption, and immediately exposes a large publish sheet.
- **Required change:** restore a contained 9:16 preview, compact metadata/tool tray, separate next CTA, and preserve the Studio/History bottom nav.

## 05 - Analytics / Dash Social

### `05-analytics/dash-social/Captura de tela 2026-09-18 185709.png`

- **Target:** Command Center performance summary and future analytics grammar.
- **Specification:** slim icon rail, six compact metric modules, one dominant line chart, ranked horizontal bars, and media performance cards; 12-14 px labels, 20-24 px values, pale neutral surfaces, and blue reserved for data.
- **Current mismatch:** M006 performance shows one large total and a small decorative bar chart without ranked content proof.
- **Required change:** add compact metric evidence, a larger analytical plot, and ranked content rows without copying the blue frame or promotional mockup treatment.

### `05-analytics/dash-social/Captura de tela 2026-09-18 185718.png`

- **Target:** comparative performance module.
- **Specification:** wide comparison chart with horizontal bars, benchmark guides, small filter pills, then a five-card media strip; content and chart share one restrained surface.
- **Current mismatch:** no benchmark/comparison module exists.
- **Required change:** use a compact comparison strip or ranked module in the Command Center to make performance actionable, with media thumbnails tied to values.

## 06 - Mobile / Approved

### `06-mobile/approved-mobile/Captura de tela 2026-09-18 180249.png`

- **Target:** Mobile Studio media editing.
- **Specification:** duplicate of the approved mobile editor reference: image-led composition, attached effects/tools, dense thumbnail strips, dark controls, and one vivid confirmation action.
- **Current mismatch:** editing controls and template selection are incomplete.
- **Required change:** provide a dedicated edit state and template-sheet state with stable touch dimensions and media dominance.

### `06-mobile/approved-mobile/Captura de tela 2026-09-18 180316.png`

- **Target:** Mobile Studio project/variant navigation.
- **Specification:** duplicate of the approved project/editor reference: 9:16 editing canvas, simple timeline/variants, compact project tiles, dark layered surfaces, and direct creation CTA.
- **Current mismatch:** the current route collapses project navigation, editing, and publish handoff into one screen.
- **Required change:** separate Select, Customize, template sheet, Publish, and History states while preserving continuity through the header and bottom navigation.

## 06 - Mobile / Current Creatye

### `06-mobile/current-creatye/Captura de tela 2026-09-18 181313.png`

- **Target:** Mobile Customize.
- **Specification:** duplicate authoritative view of the contained 9:16 preview, compact tool tray, next action, and two-item bottom navigation.
- **Current mismatch:** preview geometry and sheet hierarchy differ materially.
- **Required change:** match the contained-preview geometry and fixed action/nav heights at both mobile target widths.

### `06-mobile/current-creatye/Captura de tela 2026-09-18 181327.png`

- **Target:** Mobile template browser.
- **Specification:** duplicate authoritative bottom sheet with search, filters, two-column thumbnails, clear selected state, and persistent app context.
- **Current mismatch:** absent.
- **Required change:** implement and capture the template-sheet state independently.

### `06-mobile/current-creatye/Captura de tela 2026-09-18 191751.png`

- **Target:** Mobile Select.
- **Specification:** 60 px header, one-line search plus icon filter, horizontally scrolling page chips, two 9:16 columns with 12 px gap, selected mint border/check, metadata overlays, 56 px sticky continue action, and persistent bottom navigation.
- **Current mismatch:** absent.
- **Required change:** implement real multi-selection with media fixtures and ensure the CTA does not cover the final row.

## 07 - Controls / Geist

### `07-controls/geist/Captura de tela 2026-09-18 185740.png`

- **Target:** shared foundations and Design System playground.
- **Specification:** true Geist Sans/Mono pairing, black/white neutral foundation, one-pixel grid, modular sections without floating cards, 6 px controls, restrained color samples, and small line icons.
- **Current mismatch:** M006 declares Geist-like stacks but does not load the actual local Geist package; the playground is useful but more editorial and spacious than the reference.
- **Required change:** load actual Geist fonts, tighten section rhythm, expose grid/icon/type foundations, and keep each sample in an unframed or hairline-bounded module.

### `07-controls/geist/Captura de tela 2026-09-18 185804.png`

- **Target:** buttons and icon buttons.
- **Specification:** 24/32/40 px size family, 5-6 px radius, primary/secondary/error/warning/quiet hierarchy, square and circular icon-only options, clear prefix/suffix spacing, and no layout shift between states.
- **Current mismatch:** current controls begin at 32 px and some icon buttons are 36-40 px even in dense desktop areas.
- **Required change:** add a 24/28 px compact tier, normalize icon boxes, and demonstrate all variants in the playground.

### `07-controls/geist/Captura de tela 2026-09-18 185835.png`

- **Target:** inputs, affixes, and disabled states.
- **Specification:** 32 px default inputs, 5 px radius, subtle border, prefix/suffix integrated into the same boundary, low-contrast disabled fill/text, and 12-13 px type.
- **Current mismatch:** current fields are 38-40 px and the playground omits affix, disabled, and size examples.
- **Required change:** tighten default controls and add complete examples without turning each example into a decorative card.

### `07-controls/geist/Captura de tela 2026-09-18 185840.png`

- **Target:** search, keyboard affordance, and error states.
- **Specification:** 32 px search field, 16 px search icon, right-aligned shortcut keycaps, one-pixel danger border, 11-12 px error text, and errors that do not shift unrelated layout.
- **Current mismatch:** global search visually floats without a field boundary and error/shortcut states are not represented.
- **Required change:** give command search a compact explicit boundary, add keycap and error examples, and reserve red for actual invalid state.

### `07-controls/geist/Captura de tela 2026-09-18 185857.png`

- **Target:** typography scale.
- **Specification:** Geist Sans for all UI prose, Geist Mono for code/technical values, role-based headings from 24 px downward in product UI, normal letter spacing, compact line heights, and strong/subtle modifiers within a role.
- **Current mismatch:** display text reaches 32 px in ordinary operational screens and multiple uppercase kickers add visual noise.
- **Required change:** cap operational page titles around 24-28 px, use 16-20 px panel headings, reduce uppercase usage, and keep letter spacing at zero.

## Implementation order and acceptance

1. Shared fonts, tokens, controls, and playground.
2. Desktop sidebar and shell.
3. Command Center.
4. Automations as operational cards/list blocks, never a table clone.
5. Studio Select, Customize, and Publish as separate complete states.
6. Mobile Select, Customize, template browser, Publish, and History as independent compositions.
7. Final playground synchronization and parity documentation.

Every phase requires a running screenshot at the applicable target widths, visual inspection, correction, and a second screenshot. Final evidence belongs only under `.agent/tmp/m006-definitive-visual/`.
