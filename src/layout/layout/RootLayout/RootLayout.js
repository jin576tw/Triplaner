import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

import "./RootLayout.scss";
import { Fragment } from "react";

const RootLayOut = () => {
  return (
    <Fragment>
      <MainNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayOut;
