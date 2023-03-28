import { useAppSelector } from "store/hooks";
import { selectCartIsNotEmpty } from "store/cart/cart-selectors";

export const useIsNotEmpty = () => {
  return useAppSelector(selectCartIsNotEmpty);
};
