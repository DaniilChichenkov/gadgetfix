import React from "react";

import {
  HomeHeroSlider,
  HomeFeaturesGrid,
  HomeWhatHappened,
  HomeGadgetTypeSelection,
  HomeWhyChooseUs,
  HomeTimeline,
  HomeWorksExamples,
  HomeHowMuchDoesItCost,
  HomeProtectScreen,
  HomeFeedback,
  HomeBlog,
  HomeFinalCTA,
  HomeLocation,
} from "~/pages/home";

export const loader = async () => {
  console.log("Home loader caught");
  return null;
};

const HomeRoute = () => {
  return (
    <>
      <HomeHeroSlider />
      <HomeFeaturesGrid />
      <HomeWhatHappened />
      <HomeGadgetTypeSelection />
      <HomeWhyChooseUs />
      <HomeTimeline />
      <HomeWorksExamples />
      <HomeHowMuchDoesItCost />
      <HomeProtectScreen />
      <HomeFeedback />
      <HomeBlog />
      <HomeFinalCTA />
      <HomeLocation />
    </>
  );
};

export default HomeRoute;
