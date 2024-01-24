import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/AboutSections/Hero";
import About from "../sections/AboutSections/About";
import RoadmapCards from "../components/RoadmapCards";

import Footer from "../sections/Footer";
import Team from "../sections/AboutSections/Team";
import Roadmap from "../sections/Roadmap";

import Tokenomicss from "../sections/Tokenomicss";

function AboutUs() {
  return <>
  <div>
   <Navbar/>
    <Hero/>
    <About/>
    <Roadmap/>
    <RoadmapCards/>
    <Tokenomicss/>
    <Team/>
    <Footer/>
  </div>
  
  </>;
}

export default AboutUs;
