import { useAppSelector } from "store/hooks";
import { selectActiveOrdersCount } from "store/orders/orders-selectors";

export const useActiveOrdersCount = () => {
  return useAppSelector(selectActiveOrdersCount);
};
