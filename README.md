# Construction Brick Component
A React customizable element with different variants and colors.

## Project Stack
- React
- TypeScript
- Vite
- Storybook

### Installation
Assuming `construction-brick` it's a design-system package we will use the following cmd
```bash
npm install construction-brick
```
otherwise
```bash
npm install
```

### Development
To run the Storybook development environment:
```bash
npm run storybook
```

## Testing
For unit-tests, I would go with react-testing-library and Jest.

Test cases should include:

### Functions
- `getLogoBrickColor`
- `getLogoBrickVariant`
- `getLogoBrickBadgePosition`
Make sure that these functions are returning the right output depending on the given input

### Component
- Proper rendering
- Validate CSS classes based on the given variants and colors
- Badge dot count validation

## Nice to have
- Badge position customization with options:
  ```typescript
  enum ConstructionBrickBadgePosition {
    TOP_RIGHT = "top-right",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM_LEFT = "bottom-left",
    TOP_LEFT = "top-left",
  }
  ```


## Variants
Each variant display a different design and a default number of dots
- A: 3 dots
- B: 1 dot
- C: 2 dots

## Colors:
Used to define the background color of the component
- Red
- Green
- Violet

## Expected Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `color` | `ConstructionBrickColor` | The color of the brick (RED, GREEN, VIOLET) | Yes |
| `variant` | `ConstructionBrickVariant` | The variant of the brick (A, B, C) | Yes |
| `children` | `React.ReactNode` | Content to be rendered inside the brick | Yes |
| `className` | `string` | Additional CSS classes | No |
| `badgeNrOfDots` | `number` | Custom number of dots for the badge. If not provided, uses default based on variant | No |

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
