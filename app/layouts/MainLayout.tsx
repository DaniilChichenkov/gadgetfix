import React from "react";
import { Outlet } from "react-router";

import { NavigationEyebrow, Navigation, Footer } from "~/components";

const MainLayout = () => {
  return (
    <>
      <NavigationEyebrow />
      <Navigation>
        <Outlet />
      </Navigation>
      <Footer />
    </>
  );
};

export default MainLayout;
