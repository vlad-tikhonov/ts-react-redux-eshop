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
  price: "100",
  discount: "50",
  rating: 3,
  image: "./product-image.png",
};
const ProductCardProps = {
  title: "Product",
  price: "100",
  rating: 3,
  image: "./product-image.png",
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
