import React from "react";
import phone from "../assets/phone.png";
import laptop from "../assets/laptop.png";

const TradingSections = () => {
  return (
    <div className="w-full overflow-hidden font-[Source Sans Pro]">
      {/* Section 1: Blue Background */}
      <section className="relative bg-[#1c1f3c] text-white overflow-hidden -mb-[1px]">
        {/* White curve */}
        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none leading-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto block"
            preserveAspectRatio="none"
            shapeRendering="crispEdges"
          >
            <path
              fill="#ffffff"
              d="M0,224L80,202.7C160,181,320,139,480,144C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128V320H0Z"
            />
          </svg>
        </div>

        {/* Content grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 items-start gap-6">
          {/* Text side */}
          <div>
            <h1
              className="mb-3 leading-snug font-semibold"
              style={{ fontSize: "40px", fontFamily: "Source Sans Pro" }}
            >
              RightTradeCapital is the first step to your trading success.
            </h1>

            <p
              className="text-base mb-2"
              style={{ fontSize: "16px", fontFamily: "Source Sans Pro" }}
            >
              Use our safe and easy-to-use online trading platform to join a
              global trading community.
            </p>

            <ul className="text-lg mb-4 leading-relaxed list-disc list-inside space-y-2 text-gray-300 max-w-md">
              <li style={{ fontSize: "16px", fontFamily: "Source Sans Pro" }}>
                You can open an account in minutes
              </li>
              <li style={{ fontSize: "16px", fontFamily: "Source Sans Pro" }}>
                You can fund with the methods you like.
              </li>
              <li style={{ fontSize: "16px", fontFamily: "Source Sans Pro" }}>
                Start trading with full control
              </li>
              <li style={{ fontSize: "16px", fontFamily: "Source Sans Pro" }}>
                Get expert help on the best forex trading platform.
              </li>
            </ul>
          </div>

          {/* Phone image */}
          <div className="flex justify-center md:justify-end lg:pr-64 md:pr-16">
            <img
              src={phone}
              alt="Mobile Trading"
              className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Trading Platforms */}
      <section className="bg-white text-center pt-12 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-semibold text-gray-800 mb-2"
            style={{ fontSize: "40px", fontFamily: "Source Sans Pro" }}
          >
            Trading platforms
          </h1>
          <p
            className="text-sm text-gray-500"
            style={{ fontSize: "16px", fontFamily: "Source Sans Pro" }}
          >
            MetaTrader is the universally popular online trading platform that
            lets you monitor the markets and trade in real time. When you trade
            with us, you trade on one of these two powerful platforms, beloved
            by traders of all experience levels around the world.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={laptop}
            alt="Trading Platforms"
            className="w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] max-w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default TradingSections;
