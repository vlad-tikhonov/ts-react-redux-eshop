import { useAppSelector } from "store/hooks";
import { selectProductsCount } from "store/cart/cart-selectors";

export const useProductsCount = () => {
  return useAppSelector(selectProductsCount);
};
