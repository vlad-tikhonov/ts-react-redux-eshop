import { Htag, Notice } from "ui";
import cn from "classnames";
import styles from "./CartTitle.module.sass";

interface CartTitleProps {
  productsCount: number;
  className?: string;
}

export const CartTitle = ({ productsCount, className }: CartTitleProps) => {
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
