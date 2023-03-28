import { Checkbox, Text, Button } from "ui";
import styles from "./ItemsHandler.module.sass";
import { useState, useEffect } from "react";
import cn from "classnames";
import {
  useCartActions,
  useProductUnitsCount,
  useSelectedCount,
} from "store/cart/features";

interface ItemsHandlerProps {
  className: string;
}

export const ItemsHandler = ({ className }: ItemsHandlerProps) => {
  const [selectionState, setSelectionState] = useState<boolean | null>(false);

  const productUnitsCount = useProductUnitsCount();
  const selectedCount = useSelectedCount();

  const { allProductsSelectionHandler, removeSelectedProducts } =
    useCartActions();

  const handleSelectAll = (b: boolean) => {
    allProductsSelectionHandler(b);
  };

  const handleRemove = () => {
    removeSelectedProducts();
  };

  useEffect(() => {
    if (productUnitsCount === selectedCount) {
      setSelectionState(true);
    } else if (productUnitsCount !== selectedCount && selectedCount !== 0) {
      setSelectionState(null);
    } else {
      setSelectionState(false);
    }
  }, [productUnitsCount, selectedCount]);

  return (
    <div className={cn(styles.itemsHandler, className)}>
      <Checkbox
        size="l"
        className={styles.checkbox}
        onChange={handleSelectAll}
        checked={selectionState}
      />
      <Text size="s" className={styles.label}>
        Выделить всё
      </Text>
      <Button
        decoration="no"
        size="s"
        accent="primary"
        onClick={handleRemove}
        disabled={!selectedCount}
      >
        Удалить выбранные
      </Button>
    </div>
  );
};
