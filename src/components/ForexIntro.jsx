import React from "react";
import home4 from "../assets/home4.png"; // make sure this image is in assets folder

const ForexIntro = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="flex items-center px-6 py-16 md:px-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1736] mb-6">
              What is Forex Trading?
            </h2>
            <p className="text-[#0b1736] text-base leading-7 mb-4">
              Forex (also known as FX) is short for foreign exchange: the global
              marketplace to buy and sell foreign currencies.
            </p>
            <p className="text-[#0b1736] text-base leading-7 mb-4">
              This market is worth over $6 trillion daily, with central and private
              banks, hedge funds, traders, and travelers worldwide open 24 hours a
              day, 5.5 days per week exchanging money at different prices.
            </p>
            <p className="text-[#0b1736] text-base leading-7 mb-4">
              Currency prices change every second, giving investors limitless
              opportunities to enter trades. And investors try to make money by
              correctly predicting the price movements of different pairs.
            </p>
            <a
              href="#"
              className="text-[#1e90ff] text-sm underline hover:text-[#0d6efd]"
            >
              Learn more about forex trading with our beginners guide.
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="h-[400px] md:h-auto">
          <img
            src={home4}
            alt="Forex Trading"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ForexIntro;
