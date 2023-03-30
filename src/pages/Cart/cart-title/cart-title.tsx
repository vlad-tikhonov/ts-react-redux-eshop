import { Htag } from "ui";
import { Notice } from "components";
import cn from "classnames";
import { useProductsCount } from "store/cart/features";
import styles from "./cart-title.module.sass";

interface CartTitleProps {
  className?: string;
}

export const CartTitle = ({ className }: CartTitleProps) => {
  const productsCount = useProductsCount();

  return (
    <div className={cn(styles.title, className)}>
      <Htag size="xl">Корзина</Htag>
      {!!productsCount && (
        <Notice accent="primary" size="m" className={styles.notice}>
          {productsCount}
        </Notice>
      )}
    </div>
  );
};
