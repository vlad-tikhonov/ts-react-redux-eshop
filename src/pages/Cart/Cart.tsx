import { Breadcrumbs } from "widgets";
import { BreadcrumbItem } from "types";
import { useAppSelector } from "store/hooks";
import { selectCartIsNotEmpty } from "store/cart/cart-selectors";

import { EmptyCart } from "./EmptyCart/EmtyCart";
import { CartTitle } from "./CartTitle/CartTitle";
import { CartBody } from "./CartBody/CartBody";
import styles from "./Cart.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Корзина", to: "/cart", end: true },
];

export const Cart = () => {
  const cartIsNotEmpty = useAppSelector(selectCartIsNotEmpty);

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      {cartIsNotEmpty ? (
        <>
          <CartTitle className={styles.title} />
          <CartBody />
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
