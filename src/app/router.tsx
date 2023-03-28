import { createBrowserRouter } from "react-router-dom";

import {
  Cart,
  Categories,
  Category,
  Home,
  Orders,
  Product,
  Favorites,
  Test,
  E404,
  Error,
} from "pages";
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
      {
        path: "*",
        element: <E404 />,
      },
      {
        path: "404",
        element: <E404 />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

export default router;
