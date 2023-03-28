import styles from "./ProductMenu.module.sass";
import { ProductWithReviewsInfo } from "types";
import cn from "classnames";
import { ReactComponent as ShareIcon } from "assets/icons/share.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as HeartFilledIcon } from "assets/icons/heart-filled.svg";
import { Button, Rating } from "ui";
import { getCorrectWordCase } from "helpers/utils";
import {
  useFavoritesActions,
  useIsInFavorites,
} from "store/favorites/features";

interface ProductMenuProps {
  product: ProductWithReviewsInfo | null;
  className?: string;
}

const renderShareIcon = (className: string) => (
  <ShareIcon className={className} />
);
const renderHearthIcon = (className: string) => (
  <HeartIcon className={className} />
);
const renderHearthFilledIcon = (className: string) => (
  <HeartFilledIcon className={className} />
);

export const ProductMenu = ({ product, className }: ProductMenuProps) => {
  const { add, remove } = useFavoritesActions();
  const isInFavorites = useIsInFavorites(product?._id);

  const handleAddToFavorites = () => {
    add(product);
  };

  const handleRemoveFromFavorites = () => {
    remove(product?._id);
  };

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
      <Button
        accent="grayscale"
        decoration="no"
        renderLeftIcon={
          isInFavorites ? renderHearthFilledIcon : renderHearthIcon
        }
        onClick={
          isInFavorites ? handleRemoveFromFavorites : handleAddToFavorites
        }
        size="s"
        className={styles.btn}
      >
        {isInFavorites ? "В избранном" : "В избранное"}
      </Button>
    </div>
  );
};
