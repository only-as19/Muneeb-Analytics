import { Nav, Footer } from "@/components";
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

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
      <div>
        <a href="https://wa.me/923470049650" target="_blank">
          <IoLogoWhatsapp className="text-green-500 fixed bottom-5 right-5 w-14 h-14 z-50 bg-green-200  p-2 rounded-full animate-bounce"/>
        </a>
      </div>
    </div>
  );
};

export default RootLayout;
