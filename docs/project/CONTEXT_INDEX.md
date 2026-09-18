# Context Index

Use this index to discover relevant project documentation without loading everything.

## Product

- `docs/project/PROJECT_CHARTER.md` - defined project facts, product scope, conceptual cycle, and experience principles.
- `docs/product/PRODUCT_VISION.md` - load when the task needs the product definition, target users, integrated operation, core loop, or product exclusions.
- `docs/product/PRODUCT_PRINCIPLES.md` - load when evaluating product direction, product trade-offs, anti-goals, AI positioning, or Desktop/Mobile experience principles.
- `docs/product/PRODUCT_MODEL.md` - load when a task needs actors, object families, or the operating loops.
- `docs/product/CAPABILITY_MAP.md` - load when a task needs to understand what the product must do without mapping capabilities to screens.

## Architecture

- Native decisions: `.agent/DECISIONS.md`
- `docs/product/DOMAIN_MAP.md` - load when changing or reasoning about product domains, responsibilities, ownership, or cross-domain relationships.
- `docs/product/CORE_OBJECTS.md` - load when using or naming core product objects, lifecycles, ownership, or relationships.
- No structural technical stack decision exists yet. Stack decisions begin in M005.

## Domains

- `docs/product/DOMAIN_MAP.md` - start here for domain boundaries.
- `docs/product/CORE_OBJECTS.md` - load when a task touches object ownership or lifecycle.
- `docs/product/PRODUCT_GLOSSARY.md` - load before naming concepts that may be ambiguous.
- For automation tasks, load `DOMAIN_MAP`, `CORE_OBJECTS`, and `PRODUCT_GLOSSARY`; then load `CAPABILITY_MAP` only if capability scope is needed.
- For content, media, video, image, or template tasks, load `PRODUCT_MODEL`, `CORE_OBJECTS`, and `PRODUCT_GLOSSARY`.
- Do not invent domain contracts beyond the product architecture without a new milestone decision.

## Design

- Current design principle: Web Desktop and Mobile WebApp are distinct experiences with shared foundations.
- `docs/product/PLATFORM_SCOPE.md` - load when deciding whether a capability belongs on Desktop Web, Mobile WebApp, or both.
- `docs/product/CORE_JOURNEYS.md` - load when preparing UX architecture for M003 or M004.
- Future design-system documents will be created in their corresponding milestones.
- No design system has been created yet.

## Integrations

- Future integration documents will be created in their corresponding milestones.
- No integration architecture has been selected yet.

## Legacy

- `docs/legacy/LEGACY_BOUNDARY.md` - rules for using the old Creatye system as reference material.

## M001 document loading guide

- Product definition task -> `PRODUCT_VISION`, then `PRODUCT_PRINCIPLES`.
- Capability task -> `CAPABILITY_MAP`, then relevant domain section in `DOMAIN_MAP`.
- Domain task -> `DOMAIN_MAP`, `CORE_OBJECTS`, `PRODUCT_GLOSSARY`.
- Automation task -> automation section in `DOMAIN_MAP`, automation objects in `CORE_OBJECTS`, automation terms in `PRODUCT_GLOSSARY`.
- Publishing task -> publishing section in `DOMAIN_MAP`, publishing objects in `CORE_OBJECTS`, `PLATFORM_SCOPE` if platform experience is involved.
- Analytics or optimization task -> `DOMAIN_MAP`, `PRODUCT_PRINCIPLES`, `CORE_OBJECTS`.
- AI / Intelligence task -> `PRODUCT_PRINCIPLES`, `DOMAIN_MAP`, `CAPABILITY_MAP`.
- Desktop vs Mobile task -> `PLATFORM_SCOPE`, then `CORE_JOURNEYS` only when journey scope is needed.
