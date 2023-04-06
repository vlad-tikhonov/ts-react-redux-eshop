/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import cn from "classnames";
import { Rating as TRating } from "types";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";
import styles from "./rating.module.sass";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: TRating;
  readonly?: boolean;
  big?: boolean;
  stars?: TRating;
  setRating?: (i: number) => void;
}

export const Rating = ({
  stars = 5,
  big = false,
  rating,
  readonly = false,
  setRating,
  className,
  ...restProps
}: RatingProps) => {
  const [items, setItems] = useState<JSX.Element[]>(new Array(stars));

  const constructRating = (i: number) => {
    const filledStarsCount = Math.ceil(i);
    const emptyStarsCount = stars - filledStarsCount;

    const filledStars = new Array(filledStarsCount).fill(
      <StarIcon
        className={cn(styles.star_filled, styles.star, {
          [styles.star_big]: big,
        })}
      />
    );
    const emptyStars = new Array(emptyStarsCount).fill(
      <StarIcon className={cn(styles.star, { [styles.star_big]: big })} />
    );
    const updated = [...filledStars, ...emptyStars];
    setItems(updated);
  };

  const changeDispay = (i: number) => {
    if (readonly) {
      return;
    }
    constructRating(i);
  };

  const changeRating = (i: number) => {
    if (readonly || !setRating) {
      return;
    }
    setRating(i);
  };

  const itemStyles = {
    [styles.star_editable]: !readonly,
    [styles.star_big]: big,
    [styles.item]: true,
  };

  useEffect(() => {
    constructRating(rating);
  }, [stars, rating]);

  return (
    <>
      <div className={cn(styles.rating, className)} {...restProps}>
        {items.map((star, i) => (
          <span
            key={i}
            onMouseEnter={() => changeDispay(i + 1)}
            onMouseLeave={() => changeDispay(rating)}
            onClick={() => changeRating(i + 1)}
            className={cn(itemStyles)}
          >
            {star}
          </span>
        ))}
      </div>
    </>
  );
};
