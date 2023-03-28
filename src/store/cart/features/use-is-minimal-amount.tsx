import { useAppSelector } from "store/hooks";
import { selectIsCartMinimalAmount } from "store/cart/cart-selectors";

export const useIsMinimalAmount = () => {
  return useAppSelector(selectIsCartMinimalAmount);
};
