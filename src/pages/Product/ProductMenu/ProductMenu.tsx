import styles from "./ProductMenu.module.sass";
import { ProductWithReviewsInfo } from "types";
import cn from "classnames";
import { ReactComponent as ShareIcon } from "assets/icons/share.svg";
import { Button, Rating } from "ui";
import { getCorrectWordCase } from "helpers/utils";
import { FavoritesButton } from "./FavoritesButton/FavoritesButton";

interface ProductMenuProps {
  product: ProductWithReviewsInfo | null;
  className?: string;
}

const renderShareIcon = (className: string) => (
  <ShareIcon className={className} />
);

export const ProductMenu = ({ product, className }: ProductMenuProps) => {
  const labelText = getCorrectWordCase(
    ["отзыв", "отзыва", "отзывов"],
    product?.reviewsCount
  );

  if (!product) {
    return null;
  }

  return (
    <div className={cn(styles.menu, className)}>
      <div className={styles.menu_code}>арт.{product.code}</div>
      <div className={styles.menu_rating}>
        <Rating
          stars={5}
          rating={product.reviewsAvg ? product.reviewsAvg : 0}
          readonly={true}
          className={styles.menu_stars}
        />
        <span className={styles.menu_reviewsCount}>
          {product.reviewsCount > 0
            ? product.reviewsCount + " " + labelText
            : "нет отзывов"}
        </span>
      </div>
      <Button
        accent="grayscale"
        decoration="no"
        renderLeftIcon={renderShareIcon}
        size="s"
        className={styles.menu_btn}
      >
        Поделиться
      </Button>
      <FavoritesButton product={product} />
    </div>
  );
};
