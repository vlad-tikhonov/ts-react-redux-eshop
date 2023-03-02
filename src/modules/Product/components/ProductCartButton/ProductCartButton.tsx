import { Button, Text } from "components";
import { ReactComponent as MinusIcon } from "assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import styles from "./ProductCartButton.module.sass";
import cn from "classnames";
import { ElementSizes } from "types";

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
      ></Button>
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
      ></Button>
    </div>
  );
};
