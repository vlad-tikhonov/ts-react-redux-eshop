import { Breadcrumbs } from "widgets";
import { BreadcrumbItem } from "types";
import { EmptyCart } from "./EmptyCart/EmtyCart";
import { CartTitle } from "./CartTitle/CartTitle";
import { CartBody } from "./CartBody/CartBody";
import { useIsNotEmpty } from "store/cart/features";
import styles from "./Cart.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Корзина", to: "/cart", end: true },
];

export const Cart = () => {
  const isNotEmty = useIsNotEmpty();

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      {isNotEmty ? (
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
