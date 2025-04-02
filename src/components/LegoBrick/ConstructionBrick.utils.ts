import {
  ConstructionBrickColor,
  ConstructionBrickVariant,
  ConstructionBrickBadgePosition,
} from "./ConstructionBrick.types";

export const getLogoBrickColor = (color: ConstructionBrickColor): string => {
  return `--color-${color}`;
};

export const getLogoBrickVariant = (variant: ConstructionBrickVariant): string => {
  return `--variant-${variant}`;
};

export const getLogoBrickBadgePosition = (
  variant: ConstructionBrickVariant,
  position: ConstructionBrickBadgePosition
): string => {
  let variantPosition = position;

  if (!position) {
    if (variant === ConstructionBrickVariant.A) {
      variantPosition = ConstructionBrickBadgePosition.TOP_LEFT;
    }

    if (variant === ConstructionBrickVariant.B) {
      variantPosition = ConstructionBrickBadgePosition.TOP_RIGHT;
    }
  }

  return `construction-brick--badge-position-${variantPosition}`;
};

export const nrOfDotsByVariant = {
  [ConstructionBrickVariant.A]: 3,
  [ConstructionBrickVariant.B]: 1,
  [ConstructionBrickVariant.C]: 2,
};
