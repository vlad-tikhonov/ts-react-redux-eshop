import { RouterProvider } from "react-router-dom";
import router from "app/router";
import "style/style.sass";
import { useAppDispatch } from "store/hooks";
import { initCart } from "store/cart/cart-slice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCart());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
