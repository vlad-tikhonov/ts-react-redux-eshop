import { useAppSelector } from "store/hooks";
import { selectSelectedCount } from "store/cart/cart-selectors";

export const useSelectedCount = () => {
  return useAppSelector(selectSelectedCount);
};
