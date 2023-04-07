import { CardHeader, CardElementProps, Notice } from "components";
import { Button, Text } from "ui";
import styles from "./product-card-header.module.sass";
import cn from "classnames";
import { Link } from "react-router-dom";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as HeartFilledIcon } from "assets/icons/heart-filled.svg";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import { ProductWithReviewsInfo } from "types";
import {
  useFavoritesActions,
  useIsInFavorites,
} from "store/favorites/features";
import { modifyDiscount } from "helpers/utils";
import { STATIC_CONTENT_URL } from "constants/static-content-url";

interface ProductCardHeaderProps extends CardElementProps {
  product: ProductWithReviewsInfo;
  productPageLink: string;
  countInOrder?: number;
}

export const ProductCardHeader = ({
  product,
  productPageLink,
  className,
  countInOrder,
  ...restProps
}: ProductCardHeaderProps) => {
  const { _id, image, title, discount } = product;

  const isOnFavorites = useIsInFavorites(_id);
  const { add, remove } = useFavoritesActions();

  const handleAddToFavorites = () => {
    add(product);
  };

  const handleRemoveFromFavorites = () => {
    remove(_id);
  };

  const renderHearthIcon = (className: string) => {
    const onClick = isOnFavorites
      ? handleRemoveFromFavorites
      : handleAddToFavorites;

    const classNames = cn(className, styles.heart);

    if (isOnFavorites) {
      return <HeartFilledIcon className={classNames} onClick={onClick} />;
    }

    return <HeartIcon className={classNames} onClick={onClick} />;
  };

  return (
    <CardHeader className={cn(styles.header, className)} {...restProps}>
      <>
        {countInOrder && (
          <div className={styles.cartInfo}>
            <CartIcon className={styles.cartInfo_icon} />
            <Text size="m" bold>
              {countInOrder}
            </Text>
          </div>
        )}
        <Button
          size="s"
          accent="grayscale"
          renderLeftIcon={renderHearthIcon}
          className={styles.favorites}
        />
        <img src={STATIC_CONTENT_URL + image} alt={title} />
        {discount && (
          <Notice size="m" accent="primary" className={styles.notice}>
            {modifyDiscount(discount)}
          </Notice>
        )}
        <Link to={productPageLink} className={styles.link}></Link>
      </>
    </CardHeader>
  );
};
