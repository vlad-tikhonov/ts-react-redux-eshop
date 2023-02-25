import { Button, Rating, Text, Notice, ButtonProps } from "components";
import { Product } from "types";
import styles from "./ProductCard.module.sass";
import cn from "classnames";
import {
  calculatePriceWithDiscount,
  modifyPrice,
  modifyDiscount,
  shortnerTitle,
} from "helpers/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

type ProductCardProps = Pick<
  Product,
  "title" | "price" | "discount" | "image" | "rating" | "categorySlug" | "slug"
>;

type ProductPriceProps = Pick<ProductCardProps, "price" | "discount">;

const ProductPrice = ({ price, discount }: ProductPriceProps) => {
  const priceWithDiscount = calculatePriceWithDiscount(price, discount ?? 0);

  const modifiedPrice = modifyPrice(price);
  const modifiedPriceWithDiscount = modifyPrice(priceWithDiscount);
  return (
    <>
      {discount ? (
        <div className={styles.price_discount}>
          <div className={styles.price_discount_discount}>
            <Text bold size="m">
              {modifiedPriceWithDiscount}
            </Text>
            <Text size="xs" className={styles.price_label}>
              С картой
            </Text>
          </div>
          <div className={styles.price_discount_common}>
            <Text size="s">{modifiedPrice}</Text>
            <Text size="xs" className={styles.price_label}>
              Обычная
            </Text>
          </div>
        </div>
      ) : (
        <div className={styles.price_common}>
          <Text size="m" bold>
            {modifiedPrice}
          </Text>
        </div>
      )}
    </>
  );
};

type CardBtnProps = Pick<ButtonProps, "accent" | "decoration">;

const defaultBtnState: CardBtnProps = {
  accent: "secondary",
  decoration: "outline",
};

export const ProductCard = ({
  title,
  price,
  discount,
  image,
  rating,
  categorySlug,
  slug,
}: ProductCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const [btnState, setBtnState] = useState<CardBtnProps>(defaultBtnState);

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

  return (
    <div
      className={cn(styles.card, { [styles["card-active"]]: isActive })}
      onMouseEnter={changeStyle}
      onMouseLeave={changeStyleDefault}
    >
      <Link
        to={`/categories/${categorySlug}/${slug}`}
        className={styles.link}
      ></Link>
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
      </div>
      <div className={styles.card_body}>
        <ProductPrice price={price} discount={discount} />
        <div className={styles.title}>{croppedTitle}</div>
      </div>
      <div className={styles.card_footer}>
        <Rating
          rating={rating ? rating : 0}
          readonly
          className={styles.rating}
        />
        <Button size="m" {...btnState} className={styles.btn}>
          В корзину
        </Button>
      </div>
    </div>
  );
};
