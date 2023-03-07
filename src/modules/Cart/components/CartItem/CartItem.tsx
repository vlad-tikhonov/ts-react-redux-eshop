import { CartProduct } from "types";
import { Text, Notice, Checkbox } from "components";
import { ProductCartButton } from "modules/Product/components";
import { modifyPrice, modifyDiscount } from "helpers/utils";
import styles from "./CartItem.module.sass";
import { useAppDispatch } from "app/hooks";
import {
  decreaseProductCount,
  increaseProductCount,
  productSelectionHandler,
} from "features/cart/cart-slice";
import cn from "classnames";

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

export const CartItem = ({ cartProduct, className }: CartItemProps) => {
  const { count, data: product } = cartProduct;
  const dispatch = useAppDispatch();

  const handleToggle = (b: boolean) => {
    dispatch(
      productSelectionHandler({
        id: cartProduct.id,
        selectionState: b,
      })
    );
  };

  const handleIncrease = () => {
    dispatch(increaseProductCount(cartProduct.id));
  };

  const handleRemove = () => {
    dispatch(decreaseProductCount(cartProduct.id));
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
