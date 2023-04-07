import { CardFooter, CardElementProps, ProductCartButton } from "components";
import styles from "./product-card-footer.module.sass";
import cn from "classnames";
import { ProductWithReviewsInfo } from "types";
import { Button } from "ui";
import { useCartActions, useProductCount } from "store/cart/features";

interface ProductCardFooterProps extends CardElementProps {
  product: ProductWithReviewsInfo;
  isActive: boolean;
}

export const ProductCardFooter = ({
  isActive,
  className,
  product,
}: ProductCardFooterProps) => {
  const productCount = useProductCount(product._id);
  const { add, decrease } = useCartActions();

  return (
    <CardFooter className={cn(styles.footer, className)}>
      {!!productCount ? (
        <ProductCartButton
          addToCart={() => {
            add(product);
          }}
          removeFromCart={() => {
            decrease(product._id);
          }}
          size="m"
        >
          {productCount}
        </ProductCartButton>
      ) : (
        <Button
          size="m"
          accent={isActive ? "primary" : "secondary"}
          decoration={isActive ? "default" : "outline"}
          className={styles.btn}
          onClick={() => {
            add(product);
          }}
        >
          В корзину
        </Button>
      )}
    </CardFooter>
  );
};
