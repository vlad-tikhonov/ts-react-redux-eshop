import { RouterProvider } from "react-router-dom";
import router from "app/router";
import "style/style.sass";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { initCart } from "store/cart/cart-slice";
import { useEffect } from "react";
import { loadOrders, resetOrders } from "store/orders/orders-slice";
import { selectUserId } from "store/auth/auth-selectors";

const App = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);

  useEffect(() => {
    dispatch(initCart());
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(loadOrders(userId));
    } else {
      dispatch(resetOrders());
    }
  }, [userId, dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
