import { useAppSelector } from "store/hooks";
import { selectCartFullAmount } from "store/cart/cart-selectors";

export const useFullAmount = () => {
  return useAppSelector(selectCartFullAmount);
};
