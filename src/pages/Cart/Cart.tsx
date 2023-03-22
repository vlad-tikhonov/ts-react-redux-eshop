import { Container, Wrapper } from "layouts";
import { Breadcrumbs } from "ui";
import { BreadcrumbItem } from "types";
import { useAppSelector } from "store/hooks";
import {
  selectCartProducts,
  selectCartProductsCount,
} from "store/cart/cart-selectors";
import { EmptyCart } from "./EmptyCart/EmtyCart";
import { CartTitle } from "./CartTitle/CartTitle";
import { CartBody } from "./CartBody/CartBody";
import styles from "./Cart.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Корзина", to: "/cart", end: true },
];

export const Cart = () => {
  const products = useAppSelector(selectCartProducts);
  const productsCount = useAppSelector(selectCartProductsCount);

  return (
    <Wrapper>
      <Container>
        <Breadcrumbs items={breadcrumbItems} />
        {productsCount ? (
          <>
            <CartTitle productsCount={productsCount} className={styles.title} />
            <CartBody
              products={products}
              productsCount={productsCount}
              className={styles.body}
            />
          </>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </Wrapper>
  );
};
