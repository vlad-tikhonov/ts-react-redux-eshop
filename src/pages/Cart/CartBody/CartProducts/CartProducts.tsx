import { CartProduct } from "types";
import { CartItem } from "./CartItem/CartItem";
import { ItemsHandler } from "./ItemsHandler/ItemsHandler";
import { CartSummary } from "widgets";
import styles from "./CartProducts.module.sass";
import { Button } from "ui";
import { selectCartAmountWithDiscount } from "store/cart/cart-selectors";
import { useAppSelector } from "store/hooks";

interface CartProductsProps {
  products: CartProduct[];
  onSubmit: () => void;
}

export const CartProducts = ({ products, onSubmit }: CartProductsProps) => {
  const cartAmountFinal = useAppSelector(selectCartAmountWithDiscount);

  return (
    <div className={styles.products}>
      <div className={styles.info}>
        <ItemsHandler className={styles.handler} />
        <div>
          {products.map((p) => (
            <CartItem cartProduct={p} key={p.id} />
          ))}
        </div>
      </div>
      <div className={styles.summary}>
        <CartSummary />
        <Button
          size="l"
          accent="primary"
          className={styles.btn}
          onClick={onSubmit}
          disabled={cartAmountFinal < 1000}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
