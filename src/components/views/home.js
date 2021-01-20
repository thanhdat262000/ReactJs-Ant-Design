import React from "react";
import AppAbout from "../home/about";
import AppFaq from "../home/faq";
import AppFeature from "../home/feature";
import AppHero from "../home/hero";
import AppPricing from "../home/pricing";
import AppWorks from "../home/works";
const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      <AppFaq />
      <AppPricing />
    </div>
  );
};

export default AppHome;
