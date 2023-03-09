import { Container, Wrapper } from "layouts";
import { Breadcrumbs, Htag, Button, Text, Checkbox, Notice } from "ui";
import { BreadcrumbItem } from "types";
import styles from "./Cart.module.sass";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectCartProducts,
  selectCartLength,
  selectSelectedCount,
} from "features/cart/cart-selectors";
import { allSelectionHandler, removeSelected } from "features/cart/cart-slice";
import { CartItem } from "modules/Cart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Корзина", to: "/cart", end: true },
];

export const Cart = () => {
  const [selectionState, setSelectionState] = useState<boolean | null>(false);

  const dispatch = useAppDispatch();

  const products = useAppSelector(selectCartProducts);
  const count = useAppSelector(selectCartLength);
  const selectedCount = useAppSelector(selectSelectedCount);

  const handleSelectAll = (b: boolean) => {
    dispatch(allSelectionHandler(b));
  };

  const handleRemove = () => {
    dispatch(removeSelected());
  };

  useEffect(() => {
    if (count === selectedCount) {
      setSelectionState(true);
    } else if (count !== selectedCount && selectedCount !== 0) {
      setSelectionState(null);
    } else {
      setSelectionState(false);
    }
  }, [count, selectedCount]);

  if (products.length === 0) {
    return (
      <Wrapper>
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
          <div className={styles.empty}>
            <Htag size="xs">Корзина пуста</Htag>
            <div>
              Воспользуйтесь поиском, чтобы найти всё что нужно. Либо перейдите
              в <Link to={"/categories"}>каталог</Link>.
            </div>
          </div>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        <Breadcrumbs items={breadcrumbItems} />
        <div className={styles.title}>
          <Htag size="xl">Корзина</Htag>
          {!!count && (
            <Notice accent="primary" size="m" className={styles.notice}>
              {count}
            </Notice>
          )}
        </div>
        <div className={styles.itemsHandler}>
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
        <div className={styles.body}>
          <div className={styles.products}>
            {products.map((p) => (
              <CartItem cartProduct={p} key={p.id} />
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
