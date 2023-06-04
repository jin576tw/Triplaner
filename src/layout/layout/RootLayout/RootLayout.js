import { Fragment, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

import "./RootLayout.scss";

import BreadCrumbs from "../../components/BreadCrumb/BreadCrumb";

const RootLayOut = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // 換頁時移至頁面頂部
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, search]);

  return (
    <Fragment>
      <MainNavbar />
      <main>
        <BreadCrumbs />
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayOut;
