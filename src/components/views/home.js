import React from "react";
import AppAbout from "../home/about";
import AppFeature from "../home/feature";
import AppHero from "../home/hero";
import AppWorks from "../home/works";
const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
    </div>
  );
};

export default AppHome;
