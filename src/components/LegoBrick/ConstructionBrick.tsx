import React, { useMemo } from "react";
import classNames from "classnames";
// types
import { ConstructionBrickProps } from "./ConstructionBrick.types";
// utils
import {
  getLogoBrickColor,
  getLogoBrickVariant,
  nrOfDotsByVariant,
} from "./ConstructionBrick.utils";
// styles
import "../../styles/components/_construction-brick.scss";

export const ConstructionBrick: React.FC<ConstructionBrickProps> = ({
  children,
  color,
  variant,
  //   badgePosition,
  badgeNrOfDots,
}) => {
  const classes = classNames(
    "construction-brick",
    getLogoBrickColor(color),
    getLogoBrickVariant(variant)
  );

  const numberOfDots = useMemo(() => {
    return Array.from(
      { length: badgeNrOfDots || nrOfDotsByVariant[variant] },
      (_, index) => index
    );
  }, [badgeNrOfDots, variant]);

  return (
    <div className={classes} data-testid="construction-brick">
      <div className="construction-brick__badge badge" data-testid="construction-brick-badge">
        {numberOfDots.map((_, index) => (
          <div key={`badge-dot-${index}`} className="badge__dot" />
        ))}
      </div>
      <div className="construction-brick__content" data-testid="construction-brick-content">
        {children}
      </div>
    </div>
  );
};
