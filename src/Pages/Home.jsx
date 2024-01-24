import React from "react";
import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import PutMoney from "../sections/PutMoney";
import Cta from "../sections/Cta";
import AboutFun from "../sections/AboutFun";
import Footer from "../sections/Footer";
import Lexipay from "../sections/Lexipay";
import Invest from "../sections/Invest";
import Features from "../sections/Features";
import TikerWig from "../sections/TikerWig";
import Services from "../sections/Services";
import Whyus from "../sections/Whyus";
import ContactUs from "../sections/ContactUs";
import Tokenomics from "../sections/Tokenomics";
function Home() {
  return (
    <>
      <div className=" ">
    
        <div className="mb-2 relative z-10">
    
        <Navbar />
        <TikerWig/>
          <HeroSection />
        </div>

        <div className="">
          <Services/>
        </div>
        <div className="mb-10">
          <PutMoney/>
        </div>

        <div className="mb-10">
         <Cta/>
        </div>

        {/* <div className="mb-10">
       <AboutFun/>
        </div> */}

        <div className="mb-10">
       <Lexipay/>
        </div>
        <div className="b-10">
      <Whyus/>
        </div>
        <div className="">
       {/* <Invest/>
       <Features/> */}
        </div>
        <div className="my-10">
        <Tokenomics/>
        </div>
        <div className="mb-10">
      
     <ContactUs/>
        </div>
       

        <Footer/>
      </div>
    </>
  );
}

export default Home;
