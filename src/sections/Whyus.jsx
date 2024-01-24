import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

function Whyus() {
  return (
    <section className=" bg-white py-12">
      <div className="container-wrapper mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-center ">
          <div>
            <h1 className="font-bold text-4xl mb-6 text-black">Why us?</h1>

            {goals.map((goal, index) => (
              <div
                key={index}
                className="goal-item max-w-[640px] text-base text-black flex items-center gap-4 py-4"
              >
                <p className="bg-[#3da142] rounded-full py-1 px-3 h-[35px] text-center text-black text-sm font-medium">
                  {index + 1}.
                </p>
                <p>{goal.text}</p>
              </div>
            ))}
          </div>

          <div className=" max-w-xl overflow-y-hidden">
            <div div className=" bg-[#58c648] rounded-full p-4">
            <img src="images/why.png" alt="" className="  p-5" />
            </div>
         
         
            {/* <h2 className=" text-center text-black text-2xl ml-12 font-medium">
              TAKE A LOOK INSIDE
            </h2> */}
          </div>
        </div>
      </div>
    </section>
  );
}

const goals = [
  {
    text: "We have skillful team of Crypto trading Analysts.We are providing the best performance with the legitimate updates since 2018.",
  },
  {
    text: "We offer on demand analysis on daily basis to our community with more valuable services like AMA pooling long term investment advice.",
  },
  {
    text: "This is not a get rich quick scheme. You need to learn how to trade and you will be abl to do so with the help of our signals. we are here to help you make money from cryptocurrency trading.",
  },
];

export default Whyus;
