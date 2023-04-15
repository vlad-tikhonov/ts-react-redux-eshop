import { useAppSelector } from "store/hooks";
import { selectOrdersErrors } from "store/orders/orders-selectors";

export const useOrdersErrors = () => {
  return useAppSelector(selectOrdersErrors);
};
