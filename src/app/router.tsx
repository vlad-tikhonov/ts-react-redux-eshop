import { createBrowserRouter } from "react-router-dom";

import { Test, Home, Categories } from "modules";
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
    ],
  },
]);

export default router;
