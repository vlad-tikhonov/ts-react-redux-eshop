import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectOrdersInfo, selectOrders } from "./orders-selectors";
import { loadOrders } from "./orders-slice";
import { Order, OrderPayload } from "types";

export const useOrders = (
  userId: OrderPayload["userId"] | undefined
): [Order[], ReturnType<typeof selectOrdersInfo>] => {
  const dispatch = useAppDispatch();

  const { isLoading, errors } = useAppSelector(selectOrdersInfo);
  const orders = useAppSelector(selectOrders);

  useEffect(() => {
    if (!userId) {
      return;
    }

    dispatch(loadOrders(userId));
  }, [userId]);

  return [orders, { isLoading, errors }];
};
