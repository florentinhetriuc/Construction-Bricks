# Construction Brick Project

# Project stack:
`React + TypeScript + Vite`

# Project setup:
1. `npm install`
2. `npm run storybook`

# Testing
I wasn't able to implement any unit-tests for the ConstructionBrick.tsx and ConstructionBrick.utilities.ts files.
For testing I would use react-testing-library with Jest.

ConstructionBrick.utils.ts
  - `getLogoBrickColor`
  - `getLogoBrickVariant`
  - `getLogoBrickBadgePosition`
  For these three functions, we should test that we are receiving the expected output based on the given input

ConstructionBrick.tsx
  For this component:
    - we want to test that getLogoBrickColor, getLogoBrickVariant, getLogoBrickBadgePosition functions are called with the right inputs;
    - we want to test the rendering of the component, to make sure that the css classes are applied accordingly depending on the given props and also to make sure that the badgeNrOfDots are shown correctly depending on the given props or depending on the given variant.

# Features for ConstructionBrick.tsx
One feature implementation would be to add a prop called `badgePosition` with the following choices:
```
export enum ConstructionBrickBadgePosition {
  TOP_RIGHT = "top-right",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_LEFT = "bottom-left",
  TOP_LEFT = "top-left",
}
```
This would allow us to position the `construction__badge` depending on our selection.
