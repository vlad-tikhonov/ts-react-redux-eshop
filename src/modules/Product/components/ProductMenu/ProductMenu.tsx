import styles from "./ProductMenu.module.sass";
import { ProductWithReviews } from "types";
import cn from "classnames";
import { ReactComponent as ShareIcon } from "assets/icons/share.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { Button, Rating } from "components";

interface ProductMenuProps {
  code: ProductWithReviews["code"];
  reviewsAvg: ProductWithReviews["reviewsAvg"];
  reviewsCount: ProductWithReviews["reviewsCount"];
  className?: string;
}

const ShareRenderIcon = (className: string) => (
  <ShareIcon className={className} />
);
const HeartRenderIcon = (className: string) => (
  <HeartIcon className={className} />
);

export const ProductMenu = ({
  code,
  reviewsAvg,
  reviewsCount,
  className,
}: ProductMenuProps) => (
  <div className={cn(styles.menu, className)}>
    <div className={styles.menu_code}>арт.{code}</div>
    <div className={styles.menu_rating}>
      <Rating
        stars={5}
        rating={reviewsAvg ? reviewsAvg : 0}
        readonly={true}
        className={styles.menu_stars}
      />
      <span className={styles.menu_reviewsCount}>
        {reviewsCount > 0 ? reviewsCount + " отзыва" : "нет отзывов"}
      </span>
    </div>
    <Button
      accent="grayscale"
      decoration="no"
      renderLeftIcon={ShareRenderIcon}
      size="s"
      className={styles.menu_btn}
    >
      Поделиться
    </Button>
    <Button
      accent="grayscale"
      decoration="no"
      renderLeftIcon={HeartRenderIcon}
      size="s"
      className={styles.btn}
    >
      В избранное
    </Button>
  </div>
);
