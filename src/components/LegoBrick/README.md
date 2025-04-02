A React customizable element with different variants and colors.

## Variants
- A
- B
- C

Each variant display a different design

## Colors:
- Red
- Green
- Violet

Used to define the background color of the component

## Expected Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `color` | `ConstructionBrickColor` | The color of the brick (RED, GREEN, VIOLET) | Yes |
| `variant` | `ConstructionBrickVariant` | The variant of the brick (A, B, C) | Yes |
| `children` | `React.ReactNode` | Content to be rendered inside the brick | Yes |
| `className` | `string` | Additional CSS classes | No |
| `badgeNrOfDots` | `number` | Custom number of dots for the badge. If not provided, uses default based on variant | No |

## Variants

Each variant displays a default number of dots:
- Variant A: 3 dots
- Variant B: 1 dot
- Variant C: 2 dots

## Usage

```tsx
import { ConstructionBrick } from './ConstructionBrick';
import { ConstructionBrickColor, ConstructionBrickVariant } from './ConstructionBrick.types';

// Basic usage
<ConstructionBrick
  color={ConstructionBrickColor.RED}
  variant={ConstructionBrickVariant.A}
>
  <p>Your content here</p>
</ConstructionBrick>

// Custom number of dots
<ConstructionBrick
  color={ConstructionBrickColor.GREEN}
  variant={ConstructionBrickVariant.B}
  badgeNrOfDots={4}
>
  <p>Your content here</p>
</ConstructionBrick>
```

## Examples

Check the Storybook for visual examples of all combinations of variants and colors.