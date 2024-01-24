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
              <a href="/" className=" text-4xl ">
                <BsTwitterX />
              </a>
              <a href="/" className=" text-4xl">
                <BsInstagram />
              </a>

              <a href="/" className=" text-4xl">
                <BsFacebook />
              </a>

              <a href="/" className=" text-4xl">
                <FaLinkedinIn />
              </a>
              <a href="https://t.me/thecryptoexpress" target="_blank" className=" text-4xl">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className=" pr-0 sm:pr-16 mt-2 ">
          <h3 className=" text-white font-sohaReg text-base sm:text-start text-center">
            <strong> Disclaimer : </strong>The information from Crypto Express
            is solely for informational purposes and should not be construed as
            investment advice.  Your investments are entirely your responsibility, and we
            disclaim any liability for potential losses resulting from adhering
            to or deviating from our opinions or content. Subscribing to follow
            the trades we offer is purely for educational purposes.
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
