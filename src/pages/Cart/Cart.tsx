import { Container, Wrapper } from "layouts";
import { Breadcrumbs } from "ui";
import { BreadcrumbItem } from "types";
import { useAppSelector } from "app/hooks";
import {
  selectCartProducts,
  selectCartLength,
} from "features/cart/cart-selectors";
import { EmtyCart } from "./EmptyCart/EmtyCart";
import { CartTitle } from "./CartTitle/CartTitle";
import { ItemsHandler } from "./ItemsHandler/ItemsHandler";
import { CartBody } from "./CartBody/CartBody";
import styles from "./Cart.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Корзина", to: "/cart", end: true },
];

export const Cart = () => {
  const products = useAppSelector(selectCartProducts);
  const count = useAppSelector(selectCartLength);

  return (
    <Wrapper>
      <Container>
        <Breadcrumbs items={breadcrumbItems} />
        {count ? (
          <>
            <CartTitle productsCount={count} className={styles.title} />
            <ItemsHandler productsCount={count} className={styles.handler} />
            <CartBody products={products} className={styles.body} />
          </>
        ) : (
          <EmtyCart />
        )}
      </Container>
    </Wrapper>
  );
};
