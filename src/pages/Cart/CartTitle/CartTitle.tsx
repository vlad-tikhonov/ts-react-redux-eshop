import { Htag, Notice } from "ui";
import cn from "classnames";
import styles from "./CartTitle.module.sass";
import { useAppSelector } from "store/hooks";
import { selectCartProductsCount } from "store/cart/cart-selectors";

interface CartTitleProps {
  className?: string;
}

export const CartTitle = ({ className }: CartTitleProps) => {
  const productsCount = useAppSelector(selectCartProductsCount);

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
