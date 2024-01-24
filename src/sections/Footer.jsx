import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <section className="  py-6 px-4 border-t border-[#e0e0e0]">
      <div className=" container-wrapper">
        <div className=" flex flex-col sm:flex-row gap-4  justify-between items-center">
          <div>
            <img
              src="images/logo.png"
              alt=""
              className=" h-[120px] sm:h-[150px] w-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 ">
            <div className="bg-white h-[1px] w-44"></div>
            <div className=" flex items-center gap-4 text-white">
              <a href="/" className=" text-xl ">
                <BsTwitterX />
              </a>
              <a href="/" className=" text-xl">
                <BsInstagram />
              </a>

              <a href="/" className=" text-xl">
                <BsFacebook />
              </a>

              <a href="/" className=" text-xl">
                <FaLinkedinIn />
              </a>
              <a href="/" className=" text-xl">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className=" pr-16 ">
          <h3 className=" text-white font-sohaReg text-base">
            <strong> Disclaimer : </strong> All the information provided by the
            Crypto express is for informational purposes only and should not be
            considered as investment advice. We do not give investment advice.
            Your investments are your responsibility and we won't accept any
            liability for any losses you may incur by following or not following
            our opinions or any contents. You are subscribing to follow our
            trades that we provide is for educational purposes only
          </h3>

          <p className=" mt-8 text-white opacity-75">
            © 2024 The Crypto Express. All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
