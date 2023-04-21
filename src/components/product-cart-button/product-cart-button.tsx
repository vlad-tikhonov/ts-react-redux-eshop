import { Button } from "ui";
import { ReactComponent as MinusIcon } from "assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import cn from "classnames";
import { ElementSizes } from "types";
import styles from "./product-cart-button.module.sass";

interface ProductCartButtonProps {
  className?: string;
  addToCart: () => void;
  removeFromCart: () => void;
  children: number | string;
  size: Extract<ElementSizes, "m" | "l">;
}

const renderPlusIcon = (className: string) => (
  <PlusIcon className={className} />
);
const renderMinusIcon = (className: string) => (
  <MinusIcon className={className} />
);

export const ProductCartButton = ({
  addToCart,
  removeFromCart,
  size,
  children,
  className,
}: ProductCartButtonProps) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Button
        size={size}
        accent="secondary"
        decoration="default"
        className={styles.minus}
        renderLeftIcon={renderMinusIcon}
        onClick={removeFromCart}
        aria-label="Уменьшить количество товара в корзине на 1"
      />
      <span
        className={cn({
          [styles.count]: true,
          [styles.count_l]: size === "l",
        })}
      >
        {children}
      </span>
      <Button
        size={size}
        accent="secondary"
        decoration="default"
        className={styles.plus}
        renderLeftIcon={renderPlusIcon}
        onClick={addToCart}
        aria-label="Увеличить количество товара в корзине на 1"
      />
    </div>
  );
};
