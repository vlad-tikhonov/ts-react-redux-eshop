import { Outlet } from "react-router-dom";
import { Header, Footer } from "modules";

export const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
