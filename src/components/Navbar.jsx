import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Typography from "./Typography";
import { AiOutlineMenu } from "react-icons/ai";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaTiktok, FaTelegram } from "react-icons/fa6";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [isSidebarOpen, setSidebarVisibility] = useState(false);

  const closeSidebar = () => setSidebarVisibility(false);
  const openSidebar = () => setSidebarVisibility(true);

  return (
    <nav className="  ">
      <header className=" relative">
        <div
          className="container-wrapper h-[85px] flex items-center justify-between pt-0 sm:pt-8 pb-2
        "
        >
          <Link to="/">
            <img
              src="/images/logo.png"
              alt=""
              width="95px"
              height="28px"
              className="cursor-pointer"
            />
          </Link>

          <button
            onClick={isSidebarOpen ? closeSidebar : openSidebar}
            className="flex lg:hidden text-white text-3xl"
          >
            {isSidebarOpen ? <MdClose /> : <AiOutlineMenu />}
          </button>

          <aside
            className={twMerge(
              "max-lg:fixed bottom-0 right-0 max-lg:w-[320px] hover:text-[#63e660] max-lg:h-[calc(100vh-80px)] max-lg:bg-[#1e222d]   flex flex-col lg:flex-row lg:items-center lg:space-x-10 max-lg:text-white lg:[&>*]:text-white [&>*]:tracking-[1px] max-lg:p-5 max-lg:[&>a]:py-2 max-lg:[&>a]:border-b max-lg:[&>a]:px-3 max-lg:[&>a]:mb-2 max-lg:[&>a]:uppercase transition-all duration-200 translate-x-[320px] lg:translate-x-0 z-[1000] max-lg:overflow-y-auto",
              isSidebarOpen ? "translate-x-0" : null
            )}
          >
            <Typography
              as={Link}
              to="/"
              variant="sm"
              className="font-medium cursor-pointer text-lg font-sohaMed hover:text-[#63e660]"
              onClick={() => handleNavLinkClick("home")}
            >
              Home
            </Typography>
            <a
              href="#why"
              className="font-medium cursor-pointer text-lg font-sohaMed"
            >
              Why Us
            </a>
            <a
              href="#vision"
              className="font-medium cursor-pointer text-lg font-sohaMed"
              onClick={() => setSidebarVisibility(false)}
            >
              Vision
            </a>
            <a
              href="#testi"
              className="font-medium cursor-pointer text-lg font-sohaMed"
              onClick={() => setSidebarVisibility(false)}
            >
              Testimonials
            </a>

            <a
              href="#contact"
              className="font-medium cursor-pointer text-lg font-sohaMed"
              onClick={() => setSidebarVisibility(false)}
            >
              Contact us
            </a>

            <div className=" flex items-center gap-[1.2rem] mt-4 sm:mt-0">
              <a
                href="https://t.me/thecryptoexpress"
                target="_blank"
                className=" text-2xl hover:text-[#3da142]"
              >
                <FaTelegram />
              </a>
              <a
                href="https://twitter.com/thecryptoexpres"
                target="_blank"
                className=" text-2xl hover:text-[#3da142]"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://instagram.com/thecryptoexpress"
                target="_blank"
                className=" text-2xl hover:text-[#3da142]"
              >
                <BsInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@TheCryptoExpress"
                target="_blank"
                className=" text-2xl hover:text-[#3da142]"
              >
                <FaTiktok />
              </a>
            </div>
          </aside>
        </div>
      </header>
    </nav>
  );
}
