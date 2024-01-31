import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Newscard from "../components/Newscard";

import SliderNavigationButton from "../components/SliderNavigationButton";


const data = [

  {
    title:
      "Empowering The Crypto Community: Commendation For The Crypto Express’ Journey",
    imgUrl:
      "https://bitcoinik.com/wp-content/uploads/2024/01/3d-logo-750x430.png",
    Disc: "you are looking for a reliable and authentic crypto service, look no further than The Crypto Express. They have everything you need to succeed in the crypto space: education, ",
    Auther: "Bitcoinik ",
    Time: "crypto media house",
    link: "https://bitcoinik.com/empowering-the-crypto-community-a-commendation-for-the-crypto-express-journey/",
  },

  {
    title: "The Crypto Express: Your Gateway to the World of Cryptocurrency",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXBHoQWYfcGUz3AOfPelV9crYFzEu6lLhEA&usqp=CAU",
    Disc: "The Crypto express content is unbiased, easy to understand, and reliable. They also have a great community of crypto enthusiasts who want to succeed in this space. I highly recommend The Crypto Express  ",
    Auther: "Binance Feed",
    Time: "Top Crypto exchange",
    link: "https://www.binance.com/en-IN/feed/post/3315653283282",
  },



  {
    title: "BlackRock expands crypto strategy with  application",
    imgUrl:
      "https://www.finextra.com/finextra-images/top_pics/xl/bitcoin-3.jpg",
    Disc: "In a filing through Nasdaq, the world’s largest asset manager revealed its plans to create an that holds Ethereum’s ether token (ETH), bolstering its cryptocurrency strategy.",
    Auther: "",
    Time: "10 November 2023",
    link: "https://www.finextra.com/newsarticle/43273/blackrock-expands-crypto-strategy-with-ethereum-etf-application",
  },
  {
    title: "ETH crosses $2k as BlackRock’s Ethereum Trust  filing surfaces",
    imgUrl:
      "https://cryptoslate.com/wp-content/themes/cryptoslate-2020/imgresize/timthumb.php?src=https://cryptoslate.com/wp-content/uploads/2023/11/ethereum-staking.jpg&w=600&h=315&q=75",
    Disc: "A new filing with the Delaware Division of Corporations suggests BlackRock is ready to move into Ethereum ETFs next.",
    Auther: "Jacob Oliver",
    Time: "Nov. 9, 2023",
    link: "https://cryptoslate.com/eth-crosses-2k-as-blackrocks-ethereum-trust-filing-surfaces/",
  },
  {
    title: " Are Making Their US Debut in Industry Victory",
    imgUrl:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJiY7d_VyuLg/v1/1200x800.jpg",
    Disc: "The first-ever exchange-traded funds based on Ether futures began trading in the US, capping a years-long battle by firms to provide investment vehicles centered on the second-largest digital token.",
    Auther: "Vildana Hajric",
    Time: "October 2, 2023",
    link: "https://www.bloomberg.com/news/articles/2023-10-02/ether-futures-eth-etfs-are-making-their-debut-in-the-us-in-industry-victory",
  },
];

function LatestNews() {
 

  return (
    <section className="container-wrapper relative">
      <h2 className=" text-2xl text-white text-center">What Industry says About Us..</h2>

      <div className="mt-3 mb-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          className="py-5 [&_.swiper-slide]:!h-auto"
          modules={[Navigation]}
          navigation={{
            nextEl: ".nextEl",
            prevEl: ".prevEl",
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <Newscard
                title={item.title}
                imgUrl={item.imgUrl}
                Disc={item.Disc}
                Auther={item.Auther}
                Time={item.Time}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center space-x-5">
        <SliderNavigationButton className="prevEl rotate-180" />
        <SliderNavigationButton className="nextEl" />
      </div>
    </section>
  );
}

export default LatestNews;
