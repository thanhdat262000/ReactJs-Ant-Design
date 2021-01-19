import React from "react";
import AppAbout from "../home/about";
import AppHero from "../home/hero";
const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
    </div>
  );
};

export default AppHome;
