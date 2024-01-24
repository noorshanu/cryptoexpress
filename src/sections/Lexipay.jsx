import React from "react";

function Lexipay() {
  return (
    <section className=" overflow-x-hidden" id="vision">
      <div className="container-wrapper mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-4 ">
          <div data-aos-duration="2000" data-aos="fade-right"  >
            <h1 className="font-bold text-4xl mb-6 text-white">Our Vision</h1>

            {goals.map((goal, index) => (
              <div key={index} className="goal-item max-w-[640px] text-base text-white flex items-center gap-4 py-4">
                <p className="bg-[#3da142] rounded-full py-1 px-3 h-[35px] text-center text-white text-sm font-medium">
                  {index + 1}.
                </p>
                <p>{goal.text}</p>
              </div>
            ))}
          </div>

          <div data-aos-duration="2000" data-aos="fade-left"  >
            <img src="images/iphone.png" alt="Lexipay App" className="h-[80%] mx-auto floating" />
            <h2 className=" text-center text-white text-xl  sm:text-2xl ml-12 font-medium">Let’s talk about profit together</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

const goals = [
  {
    text: "Our Goal is to help you to trade the right way by sharing our experience, knowledge, and insights on how to make money trading cryptocurrency.",
  },
  {
    text: "We aim to provide day trading courses to generate stable profit from daily trading.",
  },
  {
    text: "Company intends to come up with real-time crypto news updates for investors, traders, and enthusiasts.",
  },
  {
    text: "Provide a clear roadmap for the investors to monitor performance and see progress.",
  },
  {
    text: "We can guide you to make a profit in any market shape.",
  },
];

export default Lexipay;