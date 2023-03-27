import { MemoizedCartItem } from "./CartItem/CartItem";
import { selectCartProducts } from "store/cart/cart-selectors";
import { useAppSelector } from "store/hooks";

export const CartItems = () => {
  const products = useAppSelector(selectCartProducts);

  return (
    <div>
      {products.map((p) => (
        <MemoizedCartItem cartProduct={p} key={p.id} />
      ))}
    </div>
  );
};
