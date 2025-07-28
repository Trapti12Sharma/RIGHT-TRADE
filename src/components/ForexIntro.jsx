import React from "react";
import home4 from "../assets/home4.png";

const ForexIntro = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image First in JSX — top in mobile, right side in desktop */}
        <div className="order-1 md:order-2">
          <img
            src={home4}
            alt="Forex Trading"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 flex items-center px-6 py-10 md:px-16">
          <div>
            <h1
              style={{
                fontFamily: '"Source Sans Pro"',
                fontSize: "40px",
                marginBottom: "20px",
                textAlign: "left",
              }}
              className="text-[#1A1D30] mb-6"
            >
              What makes RightTradeCapital special?
            </h1>

            <ul
              style={{
                fontFamily: '"Source Sans Pro"',
                fontSize: "16px",
                textAlign: "left",
              }}
              className="text-[#1A1D30] leading-8 mb-4 list-disc list-inside space-y-2"
            >
              <li>A safe and global online trading platform</li>
              <li>100% Safe & Trusted Forex Broker with Rules</li>
              <li>Get into more than 500 markets</li>
              <li>
                Best forex trading platform that works well on mobile devices
              </li>
              <li>
                Made for traders who want to trade forex online with power and
                control
              </li>
              <li>You make the plan. We provide the platform.</li>
            </ul>

            <a
              style={{
                fontFamily: '"Source Sans Pro"',
                fontSize: "16px",
                textAlign: "left",
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
