import { CartProduct } from "types";
import { Text, Checkbox } from "ui";
import { ProductCartButton, Notice } from "components";
import { modifyPrice, modifyDiscount } from "helpers/utils";
import { memo } from "react";
import cn from "classnames";
import { useCartActions } from "store/cart/features";
import styles from "./cart-item.module.sass";

interface CartItemProps {
  cartProduct: CartProduct;
  className?: string;
}

interface CartItemPriceProps {
  price: CartItemProps["cartProduct"]["data"]["price"];
  priceWithCard: CartItemProps["cartProduct"]["data"]["priceWithCard"];
  discount: CartItemProps["cartProduct"]["data"]["discount"];
}

const CartItemPrice = ({
  price,
  priceWithCard,
  discount,
}: CartItemPriceProps) => {
  if (!priceWithCard) {
    return (
      <div className={styles.priceWithOutCard}>
        <Text size="xs" bold className={styles.common}>
          {modifyPrice(price)}
        </Text>
        <Text size="xs">за шт.</Text>
      </div>
    );
  } else {
    return (
      <div className={styles.priceWithCard}>
        <div className={styles.withCard}>
          <Text size="xs" bold>
            {modifyPrice(priceWithCard)}
          </Text>
          <Text size="xs" className={styles.priceLabel}>
            С картой
          </Text>
        </div>
        <div className={styles.withoutCard}>
          <Text size="xs" bold>
            {modifyPrice(price)}
          </Text>
          <Text size="xs" className={styles.priceLabel}>
            Обычная
          </Text>
        </div>
        <div className={styles.unitsType}>
          <Text size="xs">за шт.</Text>
        </div>
        <div>
          {discount && (
            <Notice size="m" accent="primary">
              {modifyDiscount(discount)}
            </Notice>
          )}
        </div>
      </div>
    );
  }
};

const CartItem = ({ cartProduct, className }: CartItemProps) => {
  const { count, data: product } = cartProduct;

  const { selectionHandler, increase, decrease } = useCartActions();

  const handleToggle = (b: boolean) => {
    selectionHandler({
      id: cartProduct.id,
      selectionState: b,
    });
  };

  const handleIncrease = () => {
    increase(cartProduct.id);
  };

  const handleRemove = () => {
    decrease(cartProduct.id);
  };

  return (
    <div className={cn(styles.item, className)}>
      <Checkbox
        size="l"
        checked={cartProduct.isSelected}
        onChange={handleToggle}
        className={styles.checkbox}
      />
      <div className={styles.img}>
        <img
          src={process.env.REACT_APP_STATIC_CONTENT_URL + product.image}
          alt={product.title}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.productInfo}>
          <div className={styles.title}>
            <Text size="s">{product.title}</Text>
          </div>
          <CartItemPrice
            price={product.price}
            priceWithCard={product.priceWithCard}
            discount={product.discount}
          />
        </div>
        <div className={styles.summary}>
          <div className={styles.btn}>
            <ProductCartButton
              addToCart={handleIncrease}
              removeFromCart={handleRemove}
              size="m"
            >
              {count}
            </ProductCartButton>
          </div>
          <div className={styles.total}>
            <div className={styles.totalWithOutDiscount}>
              <Text size="m" bold>
                {product.priceWithCard
                  ? modifyPrice(product.priceWithCard)
                  : modifyPrice(product.price)}
              </Text>
            </div>
            {product.priceWithCard && (
              <div className={styles.totalWithDiscount}>
                {modifyPrice(product.price)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizedCartItem = memo(CartItem);
