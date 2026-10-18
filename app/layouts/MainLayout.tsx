import React, { useState } from "react";
import { Outlet } from "react-router";

import { NavigationEyebrow, Navigation, Footer, FAB } from "~/components";

const MainLayout = () => {
  return (
    <>
      <NavigationEyebrow />
      <Navigation>
        <Outlet />
      </Navigation>
      <Footer />
      <FAB />
    </>
  );
};

export default MainLayout;
