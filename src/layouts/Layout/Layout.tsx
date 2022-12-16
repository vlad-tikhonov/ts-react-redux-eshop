import { Outlet } from "react-router-dom";
import { Header, Footer } from "layouts";

export const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
