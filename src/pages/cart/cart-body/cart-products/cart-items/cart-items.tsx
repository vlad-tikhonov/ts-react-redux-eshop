import { MemoizedCartItem } from "./cart-item/cart-item";
import { useCartProducts } from "store/cart/features/use-cart-products";

export const CartItems = () => {
  const products = useCartProducts();

  return (
    <div>
      {products.map((p) => (
        <MemoizedCartItem cartProduct={p} key={p.id} />
      ))}
    </div>
  );
};
