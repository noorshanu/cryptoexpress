import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import SliderNavigationButton from "../../components/SliderNavigationButton";

const teamMembersData = [
  {
    iconsrc: 'images/user.png',
    num:'250',
    name: "K Members",
    description:
      "The Crypto express is one of the well reputed and largest community of telegram operating since 2017",
  },
  {
    iconsrc: 'images/chart1.png',
    num:'10k',
    name: "+ Analysis sent",
    description:
      "Our traders have been sending signals consistently for a number of years our members are earning profit by following signals on daily basis",
  },
  {
    iconsrc: 'images/hand.png',
    num:'85',
    name: "% Stay With US ",
    description:
      "we have almost 90% accuracy and 85% of our members stay with us",
  },
  {
    iconsrc: 'images/tweet.png',
    num:'50',
    name: "k on Twitter",
    description:
      "We have a large community of users on twitter where we share market insight on daily basis",
  },
];

const Card = ({ iconsrc, num, name, description }) => {
  return (
    <div>
      <div className="how-card h-full transform transition duration-1000 hover:scale-110 cursor-pointer">
        <div className=" p-6 h-full   relative z-[999]">
          <div className="text-center mb-4">
            <img src={iconsrc} alt="" className="rounded-xl h-[80px] w-auto mx-auto mb-3" />
            <h2 className="text-lg font-semibold">{num} {name}</h2>
          </div>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

function HowToUse() {
  return (
    <section id="howto">
      <div className="container-wrapper relative z-50 py-10">
        <Swiper
          slidesPerView={3.2}
          spaceBetween={30}
          loop={true}
          className="py-5 [&_.swiper-slide]:!h-auto"
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: "#nextEl",
            prevEl: "#prevEl",
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {teamMembersData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                iconsrc={item.iconsrc}
                num={item.num}
                name={item.name}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center space-x-5 justify-center pt-6">
          <SliderNavigationButton id="prevEl" className="rotate-180" />
          <SliderNavigationButton id="nextEl" />
        </div>
      </div>
    </section>
  );
}

export default HowToUse;
