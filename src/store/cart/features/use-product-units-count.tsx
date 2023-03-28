import { useAppSelector } from "store/hooks";
import { selectProductUnitsCount } from "store/cart/cart-selectors";

export const useProductUnitsCount = () => {
  return useAppSelector(selectProductUnitsCount);
};
