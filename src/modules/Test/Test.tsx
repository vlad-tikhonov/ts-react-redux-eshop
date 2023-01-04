import { Container } from "layouts";
import styles from "./Test.module.sass";
import { Button, Rating } from "components";
import { ReactComponent as LeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as RightIcon } from "assets/icons/chevron-right.svg";
import { ProductCard } from "shared-components";
import { useState } from "react";

const renderLeftIcon = (className: string) => (
  <LeftIcon className={className} />
);

const renderRightIcon = (className: string) => (
  <RightIcon className={className} />
);

const ProductCardPropsDiscount = {
  title: "Product",
  available: true,
  brand: "brand",
  country: "country",
  img: "./product-image.png",
  package: "package",
  rating: 3,
  slug: "slug",
  price: 100,
  category: "category",
  discount: 50,
};
const ProductCardProps = {
  title: "Product",
  available: true,
  brand: "brand",
  country: "country",
  img: "./product-image.png",
  package: "package",
  rating: 3,
  slug: "slug",
  price: 100,
  category: "category",
};

export const Test = () => {
  return (
    <Container>
      <div className={styles.test}>
        <div className={styles.col}>
          <ProductCard {...ProductCardProps} />
        </div>
        <div className={styles.col}>
          <ProductCard {...ProductCardPropsDiscount} />
        </div>
      </div>
    </Container>
  );
};
