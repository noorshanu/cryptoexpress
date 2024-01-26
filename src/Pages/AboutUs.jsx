import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/AboutSections/Hero";
import About from "../sections/AboutSections/About";


import Footer from "../sections/Footer";
import Team from "../sections/AboutSections/Team";
import Roadmap from "../sections/Roadmap";

import Tokenomicss from "../sections/Tokenomicss";
import HeroSection2 from "../sections/HeroSection2";
import Roadmap2 from "../sections/AboutSections/Roadmap2";

function AboutUs() {
  return <>
  <div>
   <Navbar/>
    {/* <Hero/> */}
    <HeroSection2/>
    <About/>
    <Roadmap/>
    <Roadmap2/>
    <Team/>
    <Tokenomicss/>
   
    <Footer/>
  </div>
  
  </>;
}

export default AboutUs;
