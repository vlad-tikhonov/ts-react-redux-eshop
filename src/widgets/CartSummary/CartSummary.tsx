import { Text, Notice } from "ui";
import { Bonuses } from "widgets";
import { modifyPrice } from "helpers/utils";
import { useAppSelector } from "store/hooks";
import {
  selectCartProductsCount,
  selectCartFullAmount,
  selectCartAmountWithDiscount,
  selectCartDiscount,
} from "store/cart/cart-selectors";
import styles from "./CartSummary.module.sass";
import cn from "classnames";

interface CartSummaryProps {
  className?: string;
}

export const CartSummary = ({ className }: CartSummaryProps) => {
  const productsCount = useAppSelector(selectCartProductsCount);
  const cartAmount = useAppSelector(selectCartFullAmount);
  const cartAmountFinal = useAppSelector(selectCartAmountWithDiscount);
  const cartDiscount = useAppSelector(selectCartDiscount);

  return (
    <div className={cn(styles.summary, className)}>
      <div className={styles.total}>
        <div className={styles.total_products}>
          <Text size="s" className={styles.label}>
            {productsCount} товара
          </Text>
          <Text size="s">{modifyPrice(cartAmount)}</Text>
        </div>
        <div className={styles.total_discount}>
          <Text size="s" className={styles.label}>
            Скидка
          </Text>
          <Text size="s" bold className={styles.discount}>
            {modifyPrice(cartDiscount)}
          </Text>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.sum}>
        <Text size="s" className={styles.label}>
          Итог
        </Text>
        <Text size="l" bold>
          {modifyPrice(cartAmountFinal)}
        </Text>
      </div>
      <Bonuses
        count={Math.floor(cartAmountFinal / 10)}
        className={styles.bonuses}
      />
      <div className={styles.notice}>
        {cartAmountFinal < 1000 && (
          <Notice accent="error" size="s" className={styles.notice}>
            Минимальная сумма заказа 1000₽
          </Notice>
        )}
      </div>
    </div>
  );
};
