import { createBrowserRouter } from "react-router-dom";
import { Layout } from "layouts";
import { RoutesNames } from "constants/routes-names";
import { lazy } from "react";

const Cart = lazy(() => import("pages/cart/cart"));
const Categories = lazy(() => import("pages/categories/categories"));
const Category = lazy(() => import("pages/category/category"));
const Home = lazy(() => import("pages/home/home"));
const Orders = lazy(() => import("pages/orders/orders"));
const Product = lazy(() => import("pages/product/product"));
const Favorites = lazy(() => import("pages/favorites/favorites"));
const Test = lazy(() => import("pages/test/test"));
const AboutCompany = lazy(() => import("pages/about-company/about-company"));
const Contacts = lazy(() => import("pages/contacts/contacts"));
const Vacancies = lazy(() => import("pages/vacancies/vacancies"));
const E404 = lazy(() => import("pages/e404/e404"));
const Error = lazy(() => import("pages/error/error"));

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
        path: RoutesNames.Vacancies,
        element: <Vacancies />,
      },
      {
        path: RoutesNames.About,
        element: <AboutCompany />,
      },
      {
        path: RoutesNames.Contacts,
        element: <Contacts />,
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
