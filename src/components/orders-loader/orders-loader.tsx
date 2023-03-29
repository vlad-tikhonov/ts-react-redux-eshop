/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useUserId } from "store/auth/features";
import { useOrdersActions } from "store/orders/features";

export const OrdersLoader = () => {
  const userId = useUserId();
  const { reset: resetOrders, load: loadOrders } = useOrdersActions();

  useEffect(() => {
    if (userId) {
      loadOrders(userId);
    } else {
      resetOrders();
    }
  }, [userId]);

  return null;
};
