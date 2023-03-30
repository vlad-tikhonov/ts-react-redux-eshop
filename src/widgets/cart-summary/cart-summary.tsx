import { Text } from "ui";
import { Notice } from "components";
import { Bonuses } from "widgets";
import { modifyPrice } from "helpers/utils";
import styles from "./cart-summary.module.sass";
import cn from "classnames";
import { getCorrectWordCase } from "helpers/utils";
import {
  useProductsCount,
  useDiscountAmount,
  useFullAmount,
  useDiscountVolume,
  useIsMinimalAmount,
} from "store/cart/features";

interface CartSummaryProps {
  className?: string;
}

export const CartSummary = ({ className }: CartSummaryProps) => {
  const productsCount = useProductsCount();
  const discountAmount = useDiscountAmount();
  const fullAmount = useFullAmount();
  const discountVolume = useDiscountVolume();
  const isMinimalAmount = useIsMinimalAmount();

  const labelText = getCorrectWordCase(
    ["товар", "товара", "товаров"],
    productsCount
  );

  return (
    <div className={cn(styles.summary, className)}>
      <div className={styles.total}>
        <div className={styles.total_products}>
          <Text size="s" className={styles.label}>
            {productsCount + " " + labelText}
          </Text>
          <Text size="s">{modifyPrice(fullAmount)}</Text>
        </div>
        <div className={styles.total_discount}>
          <Text size="s" className={styles.label}>
            Скидка
          </Text>
          <Text size="s" bold className={styles.discount}>
            {modifyPrice(discountVolume)}
          </Text>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.sum}>
        <Text size="s" className={styles.label}>
          Итог
        </Text>
        <Text size="l" bold>
          {modifyPrice(discountAmount)}
        </Text>
      </div>
      <Bonuses
        count={Math.floor(discountAmount / 10)}
        className={styles.bonuses}
      />
      <div className={styles.notice}>
        {!isMinimalAmount && (
          <Notice accent="error" size="s" className={styles.notice}>
            Минимальная сумма заказа 1000₽
          </Notice>
        )}
      </div>
    </div>
  );
};
