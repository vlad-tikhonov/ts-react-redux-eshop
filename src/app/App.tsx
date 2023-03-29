/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import router from "app/router";
import { RouterProvider } from "react-router-dom";
import { useCartActions } from "store/cart/features";
import { useFavoritesActions } from "store/favorites/features";

import "style/style.sass";

const App = () => {
  const { init: initCart } = useCartActions();
  const { init: initFavorites } = useFavoritesActions();

  useEffect(() => {
    initCart();
    initFavorites();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
