import { useAppSelector } from "store/hooks";
import { selectCartAmountWithDiscount } from "store/cart/cart-selectors";

export const useDiscountAmount = () => {
  return useAppSelector(selectCartAmountWithDiscount);
};
