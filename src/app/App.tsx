/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import router from "app/router";
import { RouterProvider } from "react-router-dom";
import { useCartActions } from "store/cart/features";
import { useFavoritesActions } from "store/favorites/features";
import { useUserId } from "store/auth/features";
import { useOrdersActions } from "store/orders/features";
import "style/style.sass";

const App = () => {
  const { init: initCart } = useCartActions();
  const { init: initFavorites } = useFavoritesActions();
  const { reset: resetOrders, load: loadOrders } = useOrdersActions();
  const userId = useUserId();

  useEffect(() => {
    initCart();
    initFavorites();
  }, []);

  useEffect(() => {
    if (userId) {
      loadOrders(userId);
    } else {
      resetOrders();
    }
  }, [userId]);

  return <RouterProvider router={router} />;
};

export default App;
