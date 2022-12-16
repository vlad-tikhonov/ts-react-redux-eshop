import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Test, Home, Categories } from "pages";
import { Container, Layout } from "layouts";

import { RoutesNames } from "constants/routes-names";

import "style/style.sass";

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

const App = () => (
  <Container>
    <RouterProvider router={router} />
  </Container>
);

export default App;
