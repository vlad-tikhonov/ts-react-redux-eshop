import styles from "./product-card.module.sass";
import { Card, CardProps } from "components";
import { ProductCardHeader } from "./product-card-header/product-card-header";
import { ProductCardBody } from "./product-card-body/product-card-body";
import { ProductCardFooter } from "./product-card-footer/product-card-footer";
import { ProductWithReviewsInfo } from "types";
import { useState } from "react";

interface ProductCardProps extends CardProps {
  product: ProductWithReviewsInfo;
  countInOrder?: number;
}

export const ProductCard = ({ product, countInOrder }: ProductCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const productPageLink = `/categories/${product.categorySlug}/${product.slug}`;

  return (
    <Card
      isActive={isActive}
      className={styles.card}
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
    >
      <ProductCardHeader
        product={product}
        productPageLink={productPageLink}
        countInOrder={countInOrder}
      />
      <ProductCardBody
        price={product.price}
        productPageLink={productPageLink}
        productTitle={product.title}
        reviewsAvg={product.reviewsAvg}
      />
      <ProductCardFooter product={product} isActive={isActive} />
    </Card>
  );
};

export * from "./skeleton-product-card/skeleton-product-card";
