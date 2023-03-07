import { Button, Rating, Text, Notice, ButtonProps } from "components";
import { Product } from "types";
import styles from "./ProductCard.module.sass";
import cn from "classnames";
import { modifyPrice, modifyDiscount, shortnerTitle } from "helpers/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCartButton } from "..";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectProductCount } from "features/cart/cart-selectors";
import { addToCart, decreaseProductCount } from "features/cart/cart-slice";

interface ProductCardProps {
  product: Product;
  className?: string;
}

interface ProductPriceProps {
  price: Product["price"];
  priceWithCard: Product["priceWithCard"];
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

export const ProductCard = ({ product }: ProductCardProps) => {
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

  const dispatch = useAppDispatch();
  const productPageLink = `/categories/${categorySlug}/${slug}`;
  const modifiedDiscount = discount ? modifyDiscount(discount) : "";
  const croppedTitle = shortnerTitle(title, 40);

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

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(decreaseProductCount(_id));
  };

  const productCount = useAppSelector((state) =>
    selectProductCount(state, _id)
  );

  return (
    <div
      className={cn(styles.card, { [styles["card-active"]]: isActive })}
      onMouseEnter={changeStyle}
      onMouseLeave={changeStyleDefault}
    >
      <div className={styles.card_header}>
        <img
          src={process.env.REACT_APP_STATIC_CONTENT_URL + image}
          alt={title}
        />
        {discount && (
          <Notice size="m" accent="primary" className={styles.notice}>
            {modifiedDiscount}
          </Notice>
        )}
        <Link to={productPageLink} className={styles.link}></Link>
      </div>
      <div className={styles.card_body}>
        <ProductPrice price={price} priceWithCard={priceWithCard} />
        <div className={styles.title}>{croppedTitle}</div>
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
            addToCart={handleAdd}
            removeFromCart={handleRemove}
            size="m"
          >
            {productCount}
          </ProductCartButton>
        ) : (
          <Button
            size="m"
            {...btnState}
            className={styles.btn}
            onClick={handleAdd}
          >
            В корзину
          </Button>
        )}
      </div>
    </div>
  );
};
