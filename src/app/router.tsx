import { createBrowserRouter } from "react-router-dom";

import {
  Test,
  Home,
  Categories,
  Favorites,
  Orders,
  Cart,
  Category,
  Product,
} from "modules";
import { Layout } from "layouts";

import { RoutesNames } from "constants/routes-names";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: RoutesNames.Test,
        element: <Test />,
      },
      {
        path: RoutesNames.Home,
        element: <Home />,
      },
      {
        path: RoutesNames.Categories,
        element: <Categories />,
      },
      {
        path: RoutesNames.Category,
        element: <Category />,
      },
      {
        path: RoutesNames.Favorites,
        element: <Favorites />,
      },
      {
        path: RoutesNames.Orders,
        element: <Orders />,
      },
      {
        path: RoutesNames.Cart,
        element: <Cart />,
      },
      {
        path: RoutesNames.Product,
        element: <Product />,
      },
    ],
  },
]);

export default router;
