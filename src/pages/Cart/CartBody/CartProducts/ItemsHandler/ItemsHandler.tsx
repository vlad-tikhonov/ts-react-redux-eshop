import { Checkbox, Text, Button } from "ui";
import styles from "./ItemsHandler.module.sass";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { allSelectionHandler, removeSelected } from "store/cart/cart-slice";
import {
  selectProductUnitsCart,
  selectSelectedCount,
} from "store/cart/cart-selectors";
import { useState, useEffect } from "react";
import cn from "classnames";

interface ItemsHandlerProps {
  className: string;
}

export const ItemsHandler = ({ className }: ItemsHandlerProps) => {
  const [selectionState, setSelectionState] = useState<boolean | null>(false);

  const productUnitsCount = useAppSelector(selectProductUnitsCart);
  const selectedCount = useAppSelector(selectSelectedCount);

  const dispatch = useAppDispatch();

  const handleSelectAll = (b: boolean) => {
    dispatch(allSelectionHandler(b));
  };

  const handleRemove = () => {
    dispatch(removeSelected());
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
