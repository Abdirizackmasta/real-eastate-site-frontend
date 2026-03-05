import React from "react";
import Hero from "../components/hero/Hero";
import PropertyList from "../components/property-list/PropertyList";
import OurStory from "../components/our-story/OurStory";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PropertyList />
      <OurStory />
    </div>
  );
};

export default HomePage;
