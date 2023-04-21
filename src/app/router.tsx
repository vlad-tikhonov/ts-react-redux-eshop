import { createBrowserRouter } from "react-router-dom";
import { Layout } from "layouts";
import { RoutesNames } from "constants/routes-names";
import { lazy, Suspense } from "react";

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
        element: (
          <Suspense fallback={null}>
            <Test />
          </Suspense>
        ),
      },
      {
        path: RoutesNames.Home,
        element: (
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: RoutesNames.Categories,
        element: (
          <Suspense fallback={null}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: RoutesNames.Category,
        element: (
          <Suspense fallback={null}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: RoutesNames.Favorites,
        element: (
          <Suspense fallback={null}>
            <Favorites />
          </Suspense>
        ),
      },
      {
        path: RoutesNames.Orders,
        element: (
          <Suspense fallback={null}>
            <Orders />
          </Suspense>
        ),
      },
      {
        path: RoutesNames.Cart,
        element: (
          <Suspense fallback={null}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: RoutesNames.Product,
        element: (
          <Suspense fallback={null}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: RoutesNames.Vacancies,
        element: (
          <Suspense fallback={null}>
            <Vacancies />,
          </Suspense>
        ),
      },
      {
        path: RoutesNames.About,
        element: (
          <Suspense fallback={null}>
            <AboutCompany />
          </Suspense>
        ),
      },
      {
        path: RoutesNames.Contacts,
        element: (
          <Suspense fallback={null}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={null}>
            <E404 />
          </Suspense>
        ),
      },
      {
        path: "404",
        element: (
          <Suspense fallback={null}>
            <E404 />
          </Suspense>
        ),
      },
      {
        path: "/error",
        element: (
          <Suspense fallback={null}>
            <Error />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
