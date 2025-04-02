import React, { useMemo } from "react";
import classNames from "classnames";
// types
import { LegoBrickProps } from "./LegoBrick.types";
// utils
import {
  getLogoBrickColor,
  getLogoBrickVariant,
  nrOfDotsByVariant,
} from "./LegoBrick.utils";
// styles
import "../../styles/components/_lego-brick.scss";

export const LegoBrick: React.FC<LegoBrickProps> = ({
  children,
  color,
  variant,
  //   badgePosition,
  badgeNrOfDots,
}: LegoBrickProps) => {
  const classes = classNames(
    "lego-brick",
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
    <div className={classes} data-testid="lego-brick">
      <div className="lego-brick__badge badge" data-testid="lego-brick-badge">
        {numberOfDots.map((_, index) => (
          <div key={`badge-dot-${index}`} className="badge__dot" />
        ))}
      </div>
      <div className="lego-brick__content" data-testid="lego-brick-content">
        {children}
      </div>
    </div>
  );
};
