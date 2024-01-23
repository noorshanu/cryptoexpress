import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

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
    <section>
      <div className=" container-wrapper">
        <div className=" flex justify-evenly items-center gap-4">
          <div>
            <h1>telegram</h1>

            <div className=" max-w-xl">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="images/phone.png" alt="" className=" rounded-md " />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/phone.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div>
            <h1>Submit AMA Request</h1>

            <div className="mx-auto my-10 p-6 bg-[#000000b4] rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 text-white"
                  >
                    Name
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
                    Email
                  </label>
                  <input
                    type="email"
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
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
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
