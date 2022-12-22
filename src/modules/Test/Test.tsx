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

const ProductCardProps = {
  title: "Product",
  price: "100p",
  discountPrice: "50p",
  rating: 5,
  image: "./product-image.png",
};

export const Test = () => {
  const [rating, setRating] = useState(4);

  return (
    <Container>
      <div className={styles.test}>
        <div>
          <Rating rating={rating} setRating={setRating} />
          <ProductCard {...ProductCardProps} />
        </div>
      </div>
    </Container>
  );
};
