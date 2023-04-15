import { useAppSelector } from "store/hooks";
import { selectNewOrder } from "store/orders/orders-selectors";

export const useNewOrder = () => {
  return useAppSelector(selectNewOrder);
};
