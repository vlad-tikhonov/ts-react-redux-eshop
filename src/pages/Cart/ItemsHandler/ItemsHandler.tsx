import { Checkbox, Text, Button } from "ui";
import styles from "./ItemsHandler.module.sass";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { allSelectionHandler, removeSelected } from "store/cart/cart-slice";
import { selectSelectedCount } from "store/cart/cart-selectors";
import { useState, useEffect } from "react";
import cn from "classnames";

interface ItemsHandlerProps {
  productsCount: number;
  className: string;
}

export const ItemsHandler = ({
  productsCount,
  className,
}: ItemsHandlerProps) => {
  const [selectionState, setSelectionState] = useState<boolean | null>(false);

  const selectedCount = useAppSelector(selectSelectedCount);

  const dispatch = useAppDispatch();

  const handleSelectAll = (b: boolean) => {
    dispatch(allSelectionHandler(b));
  };

  const handleRemove = () => {
    dispatch(removeSelected());
  };

  useEffect(() => {
    if (productsCount === selectedCount) {
      setSelectionState(true);
    } else if (productsCount !== selectedCount && selectedCount !== 0) {
      setSelectionState(null);
    } else {
      setSelectionState(false);
    }
  }, [productsCount, selectedCount]);

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
