import { Button, Rating, Text, ButtonProps } from "ui";
import { ProductWithReviewsInfo } from "types";
import cn from "classnames";
import { modifyPrice, modifyDiscount, shortnerTitle } from "helpers/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCartButton, Notice } from "components";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as HeartFilledIcon } from "assets/icons/heart-filled.svg";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import {
  useFavoritesActions,
  useIsInFavorites,
} from "store/favorites/features";
import { useCartActions, useProductCount } from "store/cart/features";
import { STATIC_CONTENT_URL } from "constants/static-content-url";
import styles from "./product-card.module.sass";

interface ProductCardProps {
  product: ProductWithReviewsInfo;
  countInOrder?: number;
  className?: string;
}

interface ProductPriceProps {
  price: ProductWithReviewsInfo["price"];
  priceWithCard: ProductWithReviewsInfo["priceWithCard"];
}

const ProductPrice = ({ price, priceWithCard }: ProductPriceProps) => (
  <>
    {priceWithCard ? (
      <div className={styles.price_discount}>
        <div className={styles.price_discount_discount}>
          <Text bold size="m">
            {modifyPrice(priceWithCard)}
          </Text>
          <Text size="xs" className={styles.price_label}>
            С картой
          </Text>
        </div>
        <div className={styles.price_discount_common}>
          <Text size="s">{modifyPrice(price)}</Text>
          <Text size="xs" className={styles.price_label}>
            Обычная
          </Text>
        </div>
      </div>
    ) : (
      <div className={styles.price_common}>
        <Text size="m" bold>
          {modifyPrice(price)}
        </Text>
      </div>
    )}
  </>
);

type CardBtnProps = Pick<ButtonProps, "accent" | "decoration">;

const defaultBtnState: CardBtnProps = {
  accent: "secondary",
  decoration: "outline",
};

export const ProductCard = ({ product, countInOrder }: ProductCardProps) => {
  const {
    _id,
    title,
    price,
    priceWithCard,
    discount,
    image,
    reviewsAvg,
    categorySlug,
    slug,
  } = product;

  const [isActive, setIsActive] = useState(false);
  const [btnState, setBtnState] = useState<CardBtnProps>(defaultBtnState);

  const { add: addToFavorites, remove: removeFromFavorites } =
    useFavoritesActions();
  const { add: addToCart, decrease: decreaseProductCount } = useCartActions();

  const productPageLink = `/categories/${categorySlug}/${slug}`;
  const modifiedDiscount = discount ? modifyDiscount(discount) : "";
  const croppedTitle = shortnerTitle(title, 40);

  const isInFavorites = useIsInFavorites(_id);
  const productCount = useProductCount(_id);

  const changeStyle = () => {
    setBtnState({
      accent: "primary",
      decoration: "default",
    });
    setIsActive(true);
  };

  const changeStyleDefault = () => {
    setBtnState(defaultBtnState);
    setIsActive(false);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    decreaseProductCount(_id);
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(_id);
  };

  return (
    <div
      className={cn(styles.card, { [styles["card-active"]]: isActive })}
      onMouseEnter={changeStyle}
      onMouseLeave={changeStyleDefault}
      title={title}
    >
      <div className={styles.card_header}>
        {countInOrder && (
          <div className={styles.cartInfo}>
            <CartIcon className={styles.cartInfo_icon} />
            <Text size="m" bold>
              {countInOrder}
            </Text>
          </div>
        )}
        <div
          className={styles.favorites}
          onClick={
            isInFavorites ? handleRemoveFromFavorites : handleAddToFavorites
          }
        >
          {isInFavorites ? (
            <HeartFilledIcon className={styles.heart} />
          ) : (
            <HeartIcon className={styles.heart} />
          )}
        </div>
        <img src={STATIC_CONTENT_URL + image} alt={title} />
        {discount && (
          <Notice size="m" accent="primary" className={styles.notice}>
            {modifiedDiscount}
          </Notice>
        )}
        <Link to={productPageLink} className={styles.link}></Link>
      </div>
      <div className={styles.card_body}>
        <ProductPrice price={price} priceWithCard={priceWithCard} />
        <div className={styles.title}>
          <Text size="s">{croppedTitle}</Text>
        </div>
        <Rating
          rating={reviewsAvg ? reviewsAvg : 0}
          readonly
          className={styles.rating}
        />
        <Link to={productPageLink} className={styles.link}></Link>
      </div>
      <div className={styles.card_footer}>
        {productCount > 0 ? (
          <ProductCartButton
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            size="m"
          >
            {productCount}
          </ProductCartButton>
        ) : (
          <Button
            size="m"
            {...btnState}
            className={styles.btn}
            onClick={handleAddToCart}
          >
            В корзину
          </Button>
        )}
      </div>
    </div>
  );
};
