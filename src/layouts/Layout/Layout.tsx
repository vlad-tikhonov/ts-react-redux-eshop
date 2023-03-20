import { Outlet } from "react-router-dom";
import { Header, Footer } from "widgets";
import { Main } from "..";
import { Toaster } from "react-hot-toast";

export const Layout = () => (
  <>
    <Toaster position="top-right" />
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);
