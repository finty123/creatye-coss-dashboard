# Design Governance

## Before creating a new component

1. Look for an existing component.
2. Look for an existing pattern.
3. Check existing tokens.
4. Check the target platform.
5. Check the product domain.
6. Create a new component only if a real gap remains.

## Never introduce without justification

- Arbitrary color.
- Arbitrary spacing.
- Arbitrary radius.
- Arbitrary shadow.
- Arbitrary motion.
- Duplicate component.
- New icon family.
- Decorative component with no product role.

## Token governance

- Use primitive tokens only as source values.
- Use semantic tokens for product meaning.
- Use component tokens for repeated component behavior.
- Use domain tokens only for stable domain meaning.

## Review checklist

Future design or implementation work should check:

- Does this follow the product principles?
- Does it preserve Desktop and Mobile distinctions?
- Does it use existing tokens?
- Does it avoid generic AI/product aesthetics?
- Does it support required states?
- Does it meet accessibility minimums?
- Does it add only necessary components or patterns?
