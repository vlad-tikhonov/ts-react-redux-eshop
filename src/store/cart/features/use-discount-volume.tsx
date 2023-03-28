import { useAppSelector } from "store/hooks";
import { selectCartDiscount } from "store/cart/cart-selectors";

export const useDiscountVolume = () => {
  return useAppSelector(selectCartDiscount);
};
