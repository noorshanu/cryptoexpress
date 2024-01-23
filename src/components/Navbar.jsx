import { Link } from "react-router-dom";

import Typography from "./Typography";
import { AiOutlineMenu } from "react-icons/ai";
import { BsTwitterX ,BsInstagram,BsFacebook } from "react-icons/bs";
import { FaLinkedinIn,FaTelegram  } from "react-icons/fa6";
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
              "max-lg:fixed bottom-0 right-0 max-lg:w-[320px] hover:text-[#63e660] max-lg:h-[calc(100vh-85px)] max-lg:bg-white   flex flex-col lg:flex-row lg:items-center lg:space-x-10 max-lg:text-white lg:[&>*]:text-white [&>*]:tracking-[1px] max-lg:p-5 max-lg:[&>a]:py-2 max-lg:[&>a]:border-b max-lg:[&>a]:px-3 max-lg:[&>a]:mb-2 max-lg:[&>a]:uppercase transition-all duration-200 translate-x-[320px] lg:translate-x-0 z-[1000] max-lg:overflow-y-auto",
              isSidebarOpen ? "translate-x-0" : null
            )}
          >
            <Typography
              as={Link}
              variant="sm"
              className="font-medium cursor-pointer text-lg font-sohaMed hover:text-[#63e660]"
              onClick={() => setSidebarVisibility(false)}
            >
              Home
            </Typography>
            <Typography
              as={Link}
              to='/'
              variant="sm"
              className="font-medium cursor-pointer text-lg font-sohaMed"
              onClick={() => setSidebarVisibility(false)}
            >
             Why Choose Us
            </Typography>
            <Typography
              as={Link}
              variant="sm"
              className="font-medium cursor-pointer text-lg font-sohaMed"
              onClick={() => setSidebarVisibility(false)}
            >
              Services
            </Typography>
            <Typography
              as={Link}
              variant="sm"
              className="font-medium cursor-pointer text-lg font-sohaMed"
              onClick={() => setSidebarVisibility(false)}
            >
              Request AMA
            </Typography>
            <div className=" flex items-center gap-4">
              <a href="/" className=" text-xl">
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
          </aside>
        </div>
      </header>
    </nav>
  );
}