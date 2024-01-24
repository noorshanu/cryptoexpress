import TokenCard from "../components/TokenCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
import SliderNavigationButton from "../components/SliderNavigationButton";

const data = [
  {
    title: "Karthik Jain",
    subtitle: "Student",
    imageSrc: "/images/team1.png",
    description: [
      "With Crypto express’s expert advice I was able to buy bnb at $20, ",
      "it is still one of the massive gains I ever earned in my lifetime"
    ],
  },
  {
    title: "Rahul Soni",
    subtitle: "Trader",
    imageSrc: "/images/team4.png",
    description: [
      "Honestly, joining The Crypto Express was the best move. Picked up CHZ, BNB, ",
      "and SAND early in 2021 and, wow, what a ride! Big thanks to the team for such great tips.",
 
    ],
  },
  {
    title: "Alex",
    subtitle: "Trader",
    imageSrc: "/images/team3.png",
    description: [
      "I've been following The Crypto Express for a while now,  ",
      "and their market analysis is spot on. It's helped me make some really smart choices",
      "and grow my portfolio more than I thought possible.",
    ],
  },
  {
    title: "Jhon",
    subtitle: "Manager",
    imageSrc: "/images/team2.png",
    description: [
      "Buying $MUBI after the recommendation of crypto express experts was the best decision of my life.",
      "I made 50x with this single trade in 2023. They are the best. Life changing gains.",
      
    ],
  },
 
];

function Tokenomics() {
  return (
    <section className="px-6 overflow-x-hidden" id="testi">
      <div className=" text-center">
        <h1 className=" text-white font-sohaBold text-4xl"> Testimonials</h1>
        <p className="text-white  text-xl py-4">
        Check Feedback From our value members!
        </p>
      </div>
      <div data-aos-duration="1000" data-aos="fade-up"  >
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        className="py-5 [&_.swiper-slide]:!h-auto"
        autoplay={{ delay: 3000 }}
        modules={[Navigation,Autoplay]}
        navigation={{
          nextEl: "#nextEl1",
          prevEl: "#prevEl1",
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <TokenCard
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              icon={item.imageSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
 

      <div className="flex items-center space-x-5 justify-center">
        <SliderNavigationButton id="prevEl1" className="rotate-180" />
        <SliderNavigationButton id="nextEl1" />
      </div>
    </section>
  );
}

export default Tokenomics;
