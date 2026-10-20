import React, { useState } from "react";
import { Outlet } from "react-router";

import { Navigation, Footer, MobileDock } from "~/components";

const MainLayout = () => {
  return (
    <>
      <Navigation>
        <Outlet />
      </Navigation>
      <Footer />
      <MobileDock />
    </>
  );
};

export default MainLayout;
