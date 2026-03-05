import React from "react";
// import StatsSection from "../components/status-section/StatsSection";
// import OurStory from "../components/our-story/OurStory";
// import CoreValues from "../components/core-values/CoreValues";
// import WorkWithUs from "../components/ready-work-with-us/WorkWithUs";
import AboutHeader from "../components/about-header/AboutHeader";
import AboutStats from "../components/about-stat/AboutStat";
import OurStory from "../components/our-story/OurStory";
import CoreValues from "../components/core-values/CoreValues";
import OurServices from "../components/our-services/OurServices";

const AboutPage = () => {
  return (
    <div>
      <AboutHeader />
      <AboutStats />
      <OurStory />
      <CoreValues />
      <OurServices />
    </div>
  );
};

export default AboutPage;
