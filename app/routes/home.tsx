import React from "react";

import {
  HomeHeroSlider,
  HomeWhatHappened,
  HomeGadgetTypeSelection,
  HomeBrands,
  InsuranceSection,
  MailRepairSection,
  RepairRequestSection,
  LocationAndBenefitsSection,
  HomeProtectScreen,
  HomeFeedback,
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
      <HomeProtectScreen />
      <RepairRequestSection />
      <HomeFeedback />
      <LocationAndBenefitsSection />
    </>
  );
};

export default HomeRoute;
