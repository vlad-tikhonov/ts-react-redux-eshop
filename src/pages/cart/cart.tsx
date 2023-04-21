import { Breadcrumbs } from "widgets";
import { BreadcrumbItem } from "types";
import { EmptyCart } from "./empty-cart/emty-cart";
import { CartTitle } from "./cart-title/cart-title";
import { CartBody } from "./cart-body/cart-body";
import { useIsNotEmpty } from "store/cart/features";
import styles from "./cart.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Корзина", to: "/cart", end: true },
];

const Cart = () => {
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

export default Cart;
