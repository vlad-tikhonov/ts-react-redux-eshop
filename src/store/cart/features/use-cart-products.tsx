import { useAppSelector } from "store/hooks";
import { selectCartProducts } from "store/cart/cart-selectors";

export const useCartProducts = () => {
  return useAppSelector(selectCartProducts);
};
