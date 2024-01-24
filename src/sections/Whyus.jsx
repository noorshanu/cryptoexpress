import React from "react";



import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards,Autoplay } from "swiper/modules";

function Whyus() {
  return (
    <section className=" bg-white py-12 overflow-x-hidden" id="why">
      <div className="container-wrapper mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-center ">
          <div data-aos-duration="2000" data-aos="fade-right"  >
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

          <div className=" max-w-xl overflow-x-hidden" data-aos-duration="2000" data-aos="fade-left"  >
            <div div className=" ml-0 sm:ml-10 p-4">
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards,Autoplay]}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 3000 }}
                cardsEffect={{
                    slideShadows: false,
                  }}
                className="mySwiper overflow-hidden mx-auto "
              >
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md h-[300px] sm:h-[600px]  " />
                </SwiperSlide>
                <SwiperSlide> 
                  <img src="images/phone2.png" alt="" className=" rounded-md  h-[300px] sm:h-[600px]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md  h-[300px] sm:h-[600px] " />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md h-[300px] sm:h-[600px] " />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md ]  h-[300px] sm:h-[600px]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md  h-[300px] sm:h-[600px] " />
                </SwiperSlide>
              </Swiper>
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
