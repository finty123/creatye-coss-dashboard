---
name: design-system-guardian
description: Preserves visual and UX consistency across Creatye Studio desktop and mobile web experiences.
trigger: Before UI, UX, design-system, component, layout, token, navigation, or interaction decisions.
allowedTools:
  - read
version: 0.1.0
---

# design-system-guardian

## Responsibility

Guard visual consistency and experience quality for Creatye Studio.

## Core principle

Web Desktop and Mobile WebApp are distinct experiences.

They share identity, foundations, primary tokens, and visual language. They may differ in navigation, composition, density, specialized components, and flows.

Mobile must not be treated as simple responsive desktop.

## Procedure

Before design work:

1. Identify the target experience: Web Desktop, Mobile WebApp, or shared foundation.
2. Check existing design decisions in `.agent/DECISIONS.md`.
3. Check relevant design docs through `docs/project/CONTEXT_INDEX.md`.
4. Prefer foundations before inventing components.
5. Validate hierarchy, spacing, density, alignment, contrast, and interaction states.

## Avoid

- Arbitrary glassmorphism
- Decorative gradients
- Glow effects
- Blobs
- Neon styling
- Oversized cards
- Excessive radius
- Heavy shadows
- Unnecessary components
- Arbitrary visual values

## Prioritize

- Typography
- Hierarchy
- Grid
- Spacing
- Alignment
- Contrast
- Proportion
- Consistency
- Density
- Microinteractions
