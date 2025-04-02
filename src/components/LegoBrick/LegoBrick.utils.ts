import {
  LegoBrickColor,
  LegoBrickVariant,
  LegoBrickBadgePosition,
} from "./LegoBrick.types";

export const getLogoBrickColor = (color: LegoBrickColor): string => {
  return `--color-${color || LegoBrickColor.VIOLET}`;
};

export const getLogoBrickVariant = (variant: LegoBrickVariant): string => {
  return `--variant-${variant || LegoBrickVariant.A}`;
};

export const getLogoBrickBadgePosition = (
  variant: LegoBrickVariant,
  position: LegoBrickBadgePosition
): string => {
  let variantPosition = position;

  if (!position) {
    if (variant === LegoBrickVariant.A) {
      variantPosition = LegoBrickBadgePosition.TOP_LEFT;
    }

    if (variant === LegoBrickVariant.B) {
      variantPosition = LegoBrickBadgePosition.TOP_RIGHT;
    }
  }

  return `--badge-position-${variantPosition}`;
};

export const nrOfDotsByVariant = {
  [LegoBrickVariant.A]: 3,
  [LegoBrickVariant.B]: 1,
  [LegoBrickVariant.C]: 2,
};
