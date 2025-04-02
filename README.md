# Construction Brick Component

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

### Basic Usage
```tsx
import { 
  ConstructionBrick, 
  ConstructionBrickColor, 
  ConstructionBrickVariant 
} from 'construction-brick';

function MyComponent() {
  return (
    <ConstructionBrick
      color={ConstructionBrickColor.RED}
      variant={ConstructionBrickVariant.A}
    >
      <p>Your content here</p>
    </ConstructionBrick>
  );
}
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

## Upcoming Features
- Badge position customization with options:
  ```typescript
  enum ConstructionBrickBadgePosition {
    TOP_RIGHT = "top-right",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM_LEFT = "bottom-left",
    TOP_LEFT = "top-left",
  }
  ```
