import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards,Autoplay } from "swiper/modules";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <section className=" py-12">
      <div className=" container-wrapper">
        <div className=" flex justify-evenly flex-col sm:flex-row items-center gap-4">
          <div>
            <h1 className=" text-center text-white font-sohaBold text-xl" >Telegram</h1>
            <p className=" text-center text-white font-medium text-lg">Contact us on telegram</p>

            <div className=" max-w-sm sm:max-w-xl w-full sm:overflow-hidden  ml-[8%]   sm:ml-[18%]">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards,Autoplay]}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 3000 }}
                cardsEffect={{
                    slideShadows: false,
                  }}
                className="mySwiper overflow-hidden "
              >
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md h-[300px] sm:h-[600px]  " />
                </SwiperSlide>
                <SwiperSlide> 
                  <img src="images/phone2.png" alt="" className=" rounded-md  h-[300px] sm:h-[600px]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md  h-[300px] sm:h-[600px] " />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md h-[300px] sm:h-[600px] " />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md ]  h-[300px] sm:h-[600px]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone2.png" alt="" className=" rounded-md  h-[300px] sm:h-[600px] " />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className=" max-w-full sm:max-w-xl w-full overflow-hidden">
            <h1 className="text-white font-sohaBold text-xl text-center">Submit AMA Request</h1>

            <div className="mx-auto my-10 p-6 bg-[#000000b4] rounded-md shadow-md">
             
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 text-white"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 text-white"
                  >
                   Telegram ID:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-600 text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-grad text-white font-sohaBold py-2 px-12 rounded-md "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
