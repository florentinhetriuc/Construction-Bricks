import { forwardRef, useMemo } from "react";
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

export const ConstructionBrick = forwardRef<HTMLDivElement, ConstructionBrickProps>(
  ({ children, className, color, variant, badgeNrOfDots }, ref) => {
    const classes = classNames(
      "construction-brick",
      className,
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
      <div ref={ref} className={classes} data-testid="construction-brick">
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
  }
);
