import { Outlet } from "react-router-dom";

export const Layout = () => (
  <>
    <header>header</header>
    <Outlet />
    <footer>footer</footer>
  </>
);
