import {
  loadOrders,
  createOrder,
  resetOrders,
} from "store/orders/orders-slice";
import { useAppDispatch } from "store/hooks";
import { OrderPayload, User } from "types";

export const useOrdersActions = () => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(resetOrders());
  };

  const load = (userId: User["id"]) => {
    return dispatch(loadOrders(userId));
  };

  const create = (payload: OrderPayload) => {
    return dispatch(createOrder(payload));
  };

  return {
    reset,
    load,
    create,
  };
};
