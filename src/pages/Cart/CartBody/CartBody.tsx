import { CartProduct } from "types";
import { CartItem } from "modules/Cart";
import styles from "./CartBody.module.sass";
import cn from "classnames";

interface CartBodyProps {
  products: CartProduct[];
  className: string;
}

export const CartBody = ({ products, className }: CartBodyProps) => {
  return (
    <div className={cn(styles.body, className)}>
      <div className={styles.products}>
        {products.map((p) => (
          <CartItem cartProduct={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};
