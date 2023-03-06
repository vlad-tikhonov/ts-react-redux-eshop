import { Container, Wrapper } from "layouts";
import styles from "./Test.module.sass";
import { ReactComponent as LeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as RightIcon } from "assets/icons/chevron-right.svg";
import { ProductCard } from "modules/Product/components";

const renderLeftIcon = (className: string) => (
  <LeftIcon className={className} />
);

const renderRightIcon = (className: string) => (
  <RightIcon className={className} />
);

const ProductCardPropsDiscount = {
  image: "./product-image.png",
  title: "title",
  price: 100,
  description: {
    brand: "brand",
    country: "country",
    package: "package",
  },
  categoryId: "ewfdwe",
  categorySlug: "slug",
  tags: ["tag"],
  code: "2ewdwedw",
  reviewsAvg: 5,
  slug: "xxxx",
};
const ProductCardProps = {
  image: "./product-image.png",
  title: "title",
  price: 100,
  priceWithCard: 50,
  discount: 50,
  description: {
    brand: "brand",
    country: "country",
    package: "package",
  },
  categoryId: "ewfdwe",
  categorySlug: "slug",
  tags: ["tag"],
  code: "2ewdwedw",
  reviewsAvg: 5,
  slug: "xxxx",
};

export const Test = () => {
  return (
    <Wrapper>
      <Container>
        {/* <div className={styles.test}>
	        <div className={styles.col}>
	          <ProductCard {...ProductCardProps} />
	        </div>
	        <div className={styles.col}>
	          <ProductCard {...ProductCardPropsDiscount} />
	        </div>
	      </div> */}
      </Container>
    </Wrapper>
  );
};
