import React from "react";

import {
  HomeHeroSlider,
  HomeWhatHappened,
  HomeGadgetTypeSelection,
  HomeLocation,
  HomeBrands,
  InsuranceSection,
  MailRepairSection,
  RepairRequestSection,
  LocationAndBenefitsSection,
} from "~/pages/home";

export const loader = async () => {
  console.log("Home loader caught");
  return null;
};

const HomeRoute = () => {
  return (
    <>
      <HomeHeroSlider />
      <HomeBrands />
      <HomeWhatHappened />
      <InsuranceSection />
      <MailRepairSection />
      <HomeGadgetTypeSelection />
      <RepairRequestSection />
      <LocationAndBenefitsSection />
    </>
  );
};

export default HomeRoute;
