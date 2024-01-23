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

          <div className=" max-w-3xl overflow-y-hidden">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"2"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                100: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              pagination={true}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper hidden sm:block"
            >
              <SwiperSlide>
                <img
                  src="images/slider1.jpg"
                  className="h-[300px]  border rounded-lg p-2 bg-black"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="images/slider2.jpg"
                  className="h-[300px] border rounded-lg p-2 bg-black"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="images/slider3.jpg"
                  className="h-[300px] border rounded-lg p-2 bg-black"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="images/slider4.jpg"
                  className="h-[300px] border rounded-lg p-2 bg-black"
                />
              </SwiperSlide>
            </Swiper>
            <div className=" block sm:hidden overflow-hidden">
            <img
                  src="images/slider4.jpg"
                  className="h-[300px] border rounded-lg p-2 bg-black"
                />
            </div>
            <h2 className=" text-center text-black text-2xl ml-12 font-medium">
              TAKE A LOOK INSIDE
            </h2>
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
