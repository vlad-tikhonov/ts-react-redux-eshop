import { Rating as TRating } from "types";
import { Button, Rating, Text, Notice } from "components";
import styles from "./ProductCard.module.sass";
import {
  calculatePriceWithDiscount,
  modifyPrice,
  modifyDiscount,
  shortnerTitle,
} from "helpers/utils";
interface ProductCardProps {
  title: string;
  price: string;
  discount?: string;
  rating: TRating;
  image: string;
}

type ProductPriceProps = Pick<ProductCardProps, "price" | "discount">;

const ProductPrice = ({ price, discount }: ProductPriceProps) => {
  const priceWithDiscount = calculatePriceWithDiscount(price, discount ?? "0");

  const modifiedPrice = modifyPrice(price);
  const modifiedPriceWithDiscount = modifyPrice(priceWithDiscount);
  console.log(price, discount, modifiedPrice, modifiedPriceWithDiscount);
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

export const ProductCard = ({
  title,
  price,
  discount,
  rating,
  image,
}: ProductCardProps) => {
  const modifiedDiscount = discount ? modifyDiscount(discount) : "";
  const croppedTitle = shortnerTitle(title, 40);
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <img src={image} alt={title} />
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
        <Rating rating={rating} readonly className={styles.rating} />
        <Button
          size="m"
          accent="secondary"
          decoration="outline"
          className={styles.btn}
        >
          В корзину
        </Button>
      </div>
    </div>
  );
};
