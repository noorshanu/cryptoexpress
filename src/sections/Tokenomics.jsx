import TokenCard from "../components/TokenCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
import SliderNavigationButton from "../components/SliderNavigationButton";

const data = [
  {
    title: "$25K Volume",
    subtitle: "Trading Volume",
    imageSrc: "/images/team1.png",
    description: [
      "Total LDP trading volume hits $100 million",
      "5% of total supply is burned (6,000,000 tokens)",
      "Transaction tax reduced from 5% to 4%",
    ],
  },
  {
    title: "ETF Approval",
    subtitle: "First ETF Approval",
    imageSrc: "/images/team4.png",
    description: [
      "SEC approves first LeedixPay in the U.S.",
      "Another 5% of total supply is burned (6,000,000  tokens)",
      "Transaction tax reduced from 4% to 3%",
    ],
  },
  {
    title: "ETF Launch",
    subtitle: "Launch Date",
    imageSrc: "/images/team3.png",
    description: [
      "First LeedixPay launches in the U.S.",
      "Another 5% of total supply is burned (6,000,000  tokens)",
      "Transaction tax reduced from 3% to 2%",
    ],
  },
  {
    title: "ETF (AUM) $1B",
    subtitle: "ETF Assets $1 Billion",
    imageSrc: "/images/team2.png",
    description: [
      "LeedixPay assets under management (AUM) hits $1 billion value",
      "Another 5% of total supply is burned (6,000,000  tokens)",
      "Transaction tax reduced from 2% to 1%",
    ],
  },
  {
    title: "Ethereum $25K",
    subtitle: "$25K ETH Price",
    imageSrc: "/images/team1.png",
    description: [
      "The ETH price closes a daily candle above $25,000",
      "Another 5% of total supply is burned (6,000,000  tokens)",
      "Transaction tax reduced from 1% to 0%",
    ],
  },
];

function Tokenomics() {
  return (
    <section className="px-6 overflow-x-hidden" id="testi">
      <div className=" text-center">
        <h1 className=" text-white font-sohaBold text-4xl"> Testimonials</h1>
        <p className="text-white  text-xl py-4">
        Check Feedback From Valued CE Members!
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
