import { ItemsHandler } from "./ItemsHandler/ItemsHandler";
import { CartSummary } from "widgets";
import { Button } from "ui";
import { selectIsCartMinimalAmount } from "store/cart/cart-selectors";
import { useAppSelector } from "store/hooks";
import { CartItems } from "./CartItems/CartItems";
import styles from "./CartProducts.module.sass";

interface CartProductsProps {
  onSubmit: () => void;
}

export const CartProducts = ({ onSubmit }: CartProductsProps) => {
  const isMinimalAmount = useAppSelector(selectIsCartMinimalAmount);
  return (
    <div className={styles.products}>
      <div className={styles.info}>
        <ItemsHandler className={styles.handler} />
        <CartItems />
      </div>
      <div className={styles.summary}>
        <CartSummary />
        <Button
          size="l"
          accent="primary"
          className={styles.btn}
          onClick={onSubmit}
          disabled={!isMinimalAmount}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
