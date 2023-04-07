import { CardBody, CardElementProps, Rating } from "components";
import styles from "./product-card-body.module.sass";
import { ProductWithReviewsInfo } from "types";
import { modifyPrice, shortnerTitle } from "helpers/utils";
import { Text } from "ui";
import { Link } from "react-router-dom";
import cn from "classnames";

interface ProductPriceProps
  extends Pick<ProductWithReviewsInfo, "price" | "priceWithCard"> {}

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

interface ProductCardBodyProps
  extends CardElementProps,
    Pick<ProductWithReviewsInfo, "price" | "reviewsAvg" | "priceWithCard"> {
  productPageLink: string;
  productTitle: ProductWithReviewsInfo["title"];
}

export const ProductCardBody = ({
  className,
  productTitle,
  reviewsAvg,
  productPageLink,
  priceWithCard,
  price,
}: ProductCardBodyProps) => {
  const croppedTitle = shortnerTitle(productTitle, 40);

  return (
    <CardBody className={cn(styles.body, className)}>
      <>
        <ProductPrice price={price} priceWithCard={priceWithCard} />
        <Text size="s" className={styles.title}>
          {croppedTitle}
        </Text>
        <Rating
          rating={reviewsAvg ? reviewsAvg : 0}
          readonly
          className={styles.rating}
        />
        <Link to={productPageLink} className={styles.link}></Link>
      </>
    </CardBody>
  );
};
