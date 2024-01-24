import React from "react";
import Marquee from "react-fast-marquee";

function Features() {
  return (
    <section className=" pb-[4rem] pt-[2rem] bg-white">
      <div>
        <Marquee pauseOnHover={true} loop={0}>
          <img src="images/fetch/f1.png" alt="" className=" m-4 h-[320px] bg-white p-6  shadow-md rounded-lg border border-[#67f062]" />
          <img src="images/fetch/f2.png" alt="" className=" m-4 h-[320px] bg-white p-6  shadow-md rounded-lg border border-[#67f062]" />
          <img src="images/fetch/f3.png" alt=""  className=" m-4 h-[320px] bg-white p-6  shadow-md rounded-lg border border-[#67f062]"/>
          <img src="images/fetch/f4.png" alt="" className=" m-4 h-[320px] bg-white p-6  shadow-md rounded-lg border border-[#67f062]" />
          <img src="images/fetch/f5.png" alt="" className=" m-4 h-[320px] bg-white p-6  shadow-md rounded-lg border border-[#67f062]" />
        </Marquee>
      </div>
    </section>
  );
}

export default Features;
