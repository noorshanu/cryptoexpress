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
    IconUrl:'https://bitcoinik.com/wp-content/uploads/2020/04/logo22.png.webp',
    link: "https://bitcoinik.com/empowering-the-crypto-community-a-commendation-for-the-crypto-express-journey/",
  },

  {
    title: "The Crypto Express: Your Gateway to the World of Cryptocurrency",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXBHoQWYfcGUz3AOfPelV9crYFzEu6lLhEA&usqp=CAU",
    Disc: "The Crypto express content is unbiased, easy to understand, and reliable. They also have a great community of crypto enthusiasts who want to succeed in this space. I highly recommend The Crypto Express  ",
    Auther: "Binance Feed",
    Time: "Top Crypto exchange",
    IconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4AcWXAQYDMRREF9DTBEBF7Un2JFWof6ZaeqvaA7TBp4xh2C9mGdjEviebJPlL5Tne7TkSi+NJ+DcTFjgkLHBIWOCQsMAhYYKjxHz4nhES8+CXTF2CwO8K/u8rJR5nBK4jHwVXEvmNrolSgsC1BMIlcEsAk9hJWx9ZqUTCSdsmJhwFNQZPyDFyI6BG3r2SERwuhxrh2Z9IMDgwgsC1BMJBYlVwSPgF7L/APwnry7DXl6Ee6rkbkYAXtmI9P/yHkf849l9I/Fcy/6XUfy33Fyb+0sxfnLrK8x8BCDupxYlOYwAAAABJRU5ErkJggg==",
    link: "https://www.binance.com/en-IN/feed/post/3315653283282",
  },



  {
    title: "Empowering the Cryptocurrency Community: The Crypto Express",
    imgUrl:
      "https://i0.wp.com/frontwires.com/wp-content/uploads/2024/02/The-Crypto-Express.webp?w=1248&ssl=1",
    Disc: "The decision by The Crypto Express to launch innovative educational initiatives marks a significant milestone for the cryptocurrency community. This transformative endeavor aims to meet the growing demand...",
    Auther: "FrontWires",
    Time: "08 Feb 2024",
    IconUrl:"https://frontwires.com/wp-content/uploads/2023/02/FrontWires-header-logo-231x56-1.png.webp",
    link: "https://frontwires.com/empowering-the-cryptocurrency-community-the-crypto-express-educational-revolution/",
  },
  {
    title: "The Crypto Express: Illuminating the Path to Cryptocurrency ",
    imgUrl:
      "https://cryptoslate.com/wp-content/themes/cryptoslate-2020/imgresize/timthumb.php?src=https://cryptoslate.com/wp-content/uploads/2023/11/ethereum-staking.jpg&w=600&h=315&q=75",
    Disc: "In an era marked by rapid digital transformation, the quest for a dependable source of information and education in the cryptocurrency domain...",
    Auther: "Business Insider",
    Time: "22 Feb, 2024",
    link: "https://markets.businessinsider.com/news/stocks/the-crypto-express-illuminating-the-path-to-cryptocurrency-mastery-in-the-digital-age-1033094535",
  },
  {
    title: " Cryptocurrency Community: The Crypto Express’ Educational Revolution",
    imgUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*9DUXD9umNdw-jzNvNyko6Q.jpeg",
    Disc: "The decision by The Crypto Express to launch innovative educational initiatives marks a significant milestone for the cryptocurrency community.",
    Auther: "The Classic Times",
    Time: "Feb 07, 2024",
    link: "https://medium.com/@theclassictimes/empowering-the-cryptocurrency-community-the-crypto-express-educational-revolution-e49fc7282498",
  },
  {
    title: " The Crypto Express: Your Gateway to the World of Cryptocurrency",
    imgUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*9DUXD9umNdw-jzNvNyko6Q.jpeg",
    Disc: "The decision by The Crypto Express to launch innovative educational initiatives marks a significant milestone for the cryptocurrency community.",
    Auther: "Binance",
    Time: "Feb 07, 2024",
    IconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4AcWXAQYDMRREF9DTBEBF7Un2JFWof6ZaeqvaA7TBp4xh2C9mGdjEviebJPlL5Tne7TkSi+NJ+DcTFjgkLHBIWOCQsMAhYYKjxHz4nhES8+CXTF2CwO8K/u8rJR5nBK4jHwVXEvmNrolSgsC1BMIlcEsAk9hJWx9ZqUTCSdsmJhwFNQZPyDFyI6BG3r2SERwuhxrh2Z9IMDgwgsC1BMJBYlVwSPgF7L/APwnry7DXl6Ee6rkbkYAXtmI9P/yHkf849l9I/Fcy/6XUfy33Fyb+0sxfnLrK8x8BCDupxYlOYwAAAABJRU5ErkJggg==",
    link: "https://www.binance.com/en/feed/post/3807809560585?ref=20028702",
  },
  {
    title: " cryptocurrency stands as a revolutionary force, reshaping our understanding of money",
    imgUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*9DUXD9umNdw-jzNvNyko6Q.jpeg",
    Disc: "The decision by The Crypto Express to launch innovative educational initiatives marks a significant milestone for the cryptocurrency community.",
    Auther: "TheSunTribune",
    Time: "Feb 07, 2024",
   
    link: "https://thesuntribune.com/the-crypto-express-your-gateway-to-the-world-of-cryptocurrency/",
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
                IconUrl={item.IconUrl}
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
