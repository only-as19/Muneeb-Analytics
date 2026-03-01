import { Nav, Footer } from "@/components";
import { Outlet, useLocation } from "react-router";

import { useEffect } from "react";
window.history.scrollRestoration = "manual";
const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
