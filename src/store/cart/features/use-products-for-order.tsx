import { useAppSelector } from "store/hooks";
import { selectCartProductsForOrder } from "store/cart/cart-selectors";

export const useProductsForOrder = () => {
  return useAppSelector(selectCartProductsForOrder);
};
