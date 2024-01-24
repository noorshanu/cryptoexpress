import React from "react";
import PresaleBox from "../components/PresaleBox";

function PutMoney() {
  return (
    <section className=" bg-white pb-10 pt-4 overflow-x-hidden">
      <div className="container-wrapper">
        <div className=" flex  flex-col sm:flex-row justify-between gap-4 items-center">
          <div className=" max-w-lg w-full " data-aos="fade-right" data-aos-duration="2000">
            <div className=" bg-[#58c648] rounded-full">
            <img src="images/teleg.png" alt="" className=" floating p-4" />
            </div>
            
          </div>

          <div data-aos="fade-left" data-aos-duration="2000">
            <h2 className=" font-sohaBold text-5xl py-2 mb-4 lh-1_5 text-[#3da142]">
              What is TheCryptoExpress  ?
            </h2>

            <p className=" max-w-2xl font-sohaReg text-lg">
              The Crypto Express are based on our highly advanced and
              sophisticated trading algorithms . Our team of expert analysts
              have been working together for years, providing the most accurate
              signals in the industry.
            </p>
            <p className=" max-w-2xl font-sohaReg text-lg">
            We focus on specific coins and we only provide signals for those coins which we believe will give a great return on your investment.In our Premium channel, we had traded more than 1,000 Binance altcoins trades in (October 2018) alone.

.
            </p>


            <div className=" flex gap-4 items-center mt-14">
            <button className="btn-grad px-12 py-2 font-sohaBold text-lg text-white">
                {" "}
                Join Our Channel
              </button>

              <button className="btn-grad px-12 py-2 font-sohaBold text-lg text-white">
                {" "}
                Chat With US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PutMoney;
