import { Outlet } from "react-router-dom";
import { Header, Footer } from "modules";
import { Main } from "..";

export const Layout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);
