export enum LegoBrickColor {
  RED = "red",
  GREEN = "green",
  VIOLET = "violet",
}

export enum LegoBrickVariant {
  A = "a",
  B = "b",
  C = "c",
}

export enum LegoBrickBadgePosition {
  TOP_RIGHT = "top-right",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_LEFT = "bottom-left",
  TOP_LEFT = "top-left",
}

export interface LegoBrickProps {
  color: LegoBrickColor;
  variant: LegoBrickVariant;
  children: React.ReactNode;
  badgePosition?: LegoBrickBadgePosition;
  badgeNrOfDots?: number;
}
