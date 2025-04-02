export enum ConstructionBrickColor {
  RED = "red",
  GREEN = "green",
  VIOLET = "violet",
}

export enum ConstructionBrickVariant {
  A = "a",
  B = "b",
  C = "c",
}

export enum ConstructionBrickBadgePosition {
  TOP_RIGHT = "top-right",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_LEFT = "bottom-left",
  TOP_LEFT = "top-left",
}

export interface ConstructionBrickProps {
  color: ConstructionBrickColor;
  className?: string;
  variant: ConstructionBrickVariant;
  children: React.ReactNode;
  badgePosition?: ConstructionBrickBadgePosition;
  badgeNrOfDots?: number;
}
