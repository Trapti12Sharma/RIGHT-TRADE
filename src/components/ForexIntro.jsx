import React from "react";
import home4 from "../assets/home4.png";

const ForexIntro = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2">
        
        {/* Image First in JSX — will be on top in mobile, right side in desktop */}
        <div className="order-1 md:order-2 h-[300px] md:h-auto">
          <img
            src={home4}
            alt="Forex Trading"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 flex items-center px-6 py-10 md:px-16"x>
          <div>
            <h2
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "32px",
                margin: "0px 0px 20px",
                textAlign: "justify",
              }}
              className="text-[#1A1D30] mb-6"
            >
              What is Forex Trading?
            </h2>
            <p
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "16px",
                margin: "0px 0px 16px",
                textAlign: "justify",
              }}
              className="text-[#1A1D30] leading-7 mb-4"
            >
              Forex (also known as FX) is short for foreign exchange: the global
              marketplace to buy and sell foreign currencies.
            </p>
            <p
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "16px",
                margin: "0px 0px 16px",
                textAlign: "justify",
              }}
              className="text-[#1A1D30] leading-7 mb-4"
            >
              This market is worth over $6 trillion daily, with central and private
              banks, hedge funds, traders, and travelers worldwide open 24 hours a
              day, 5.5 days per week exchanging money at different prices.
            </p>
            <p
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "16px",
                margin: "0px 0px 16px",
                textAlign: "justify",
              }}
              className="text-[#1A1D30] leading-7 mb-4"
            >
              Currency prices change every second, giving investors limitless
              opportunities to enter trades. And investors try to make money by
              correctly predicting the price movements of different pairs.
            </p>
            <a
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "16px",
              }}
              href="#"
              className="text-[#4CB1FF]"
            >
              Learn more about forex trading with our beginners guide.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexIntro;
