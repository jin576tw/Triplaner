import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

import "./RootLayout.scss";

import BreadCrumbs from "../../components/BreadCrumb/BreadCrumb";

const RootLayOut = () => {
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
