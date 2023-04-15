import {
  loadOrders,
  createOrder,
  resetOrders,
  resetNew,
  resetErrors,
} from "store/orders/orders-slice";
import { useAppDispatch } from "store/hooks";
import { OrderPayload, User } from "types";
import { useCallback } from "react";

export const useOrdersActions = () => {
  const dispatch = useAppDispatch();

  const reset = useCallback(() => {
    dispatch(resetOrders());
  }, [dispatch]);

  const load = useCallback(
    (userId: User["id"]) => {
      return dispatch(loadOrders(userId));
    },
    [dispatch]
  );

  const create = useCallback(
    (payload: OrderPayload) => {
      return dispatch(createOrder(payload));
    },
    [dispatch]
  );

  const resetNewOrder = useCallback(() => {
    dispatch(resetNew());
  }, [dispatch]);

  const resetOrdersErrors = useCallback(() => {
    dispatch(resetErrors());
  }, [dispatch]);

  return {
    reset,
    load,
    create,
    resetNewOrder,
    resetOrdersErrors,
  };
};
