import { Htag, Notice } from "ui";
import cn from "classnames";
import styles from "./CartTitle.module.sass";
import { useProductsCount } from "store/cart/features";

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
