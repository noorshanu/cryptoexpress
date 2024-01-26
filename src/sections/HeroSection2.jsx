import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

import Typography from "../components/Typography";

export default function HeroSection2() {
  return (
    <>
      <section className=" pb-3  overflow-x-hidden">
        <div className="container-wrapper py-6 grid lg:grid-cols-[1fr_.7fr] gap-10  justify-between relative pt-[3%] ">
          <div data-aos="fade-right" data-aos-duration="2000">
            <Typography className="text-[32px] xl:text-[59px]   max-sm:mb-4">
              <span className=" font-sohaBold lh-1_3 text-white">
                Single Destination for{" "}
                <span className=" text-[#3da142]"> Crypto</span> operating Since
                2017
              </span>
            </Typography>

            {/* <Typography className=" xl:text-[18px] font-medium font-sohaReg lh-1_3  mb-8">
              LeedixPay is a secure and fast point of sale for physical stores
              and online shops that accepts Ethereum and many other coins and
              instantly converts them to Dai stablecoin so you don’t have to
              worry about volatility. CONTACT US
            </Typography> */}

            <div className="  my-2 pt-8">
            
              <div className=" mt-2 flex items-center gap-6 ">
                <a
                  href="https://t.me/thecryptoexpress" target="_blank"
                  className="btn-grad flex items-center gap-2 w-48 text-white  justify-center font-bold py-3 text-base "
                >
                  {" "}
                  <FaTelegram className=" text-white text-xl" /> Telegram
                </a>
                <a
                  href="https://t.me/thecryptoexpress" target="_blank"
                  className="btn-grad flex items-center gap-2 w-48 text-white  justify-center font-bold py-3 text-base "
                >
                  {" "}
                  Buy Now
                </a>
              </div>

            
            </div>
          </div>
          <div className=" relative overflow-hidden" data-aos="fade-left" data-aos-duration="2000">
          <div className=" bg-[#58c648] rounded-full">
            <img src="images/teleg.png" alt="" className=" floating p-4 relative z-40" />
            </div>
            <img src="images/icon.png" alt="" className=" absolute top-[3%] h-[89%] left-[3%] right-0 anime2" />
          
          </div>
        </div>
      </section>
    </>
  );
}
