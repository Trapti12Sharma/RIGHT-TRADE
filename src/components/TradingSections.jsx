import React from "react";
import phone from "../assets/first-step.png";
import laptop from "../assets/trading-platform.png";

const TradingSections = () => {
  return (
    <div className="w-full overflow-hidden ">
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
              d="M0,280L80,266.7C160,253,320,227,480,208C640,189,800,179,960,181.3C1120,184,1280,200,1360,208L1440,216V320H0Z"
            />
          </svg>
        </div>

        {/* Content grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-10 md:pt-16 grid grid-cols-1 md:grid-cols-2 items-start gap-6">
          {/* Text side */}
          <div>
            <h1 className="mb-3 leading-snug font-semibold text-4xl">
              RightTrade Capital Is The First Step To Your Trading Success.
            </h1>

            <p className="text-base mb-2">
              Use our safe and easy-to-use online trading platform to join a
              global trading community.
            </p>

            <ul className="text-base mb-4 leading-relaxed list-disc list-inside space-y-2 text-gray-300 max-w-md">
              <li>You can open an account in minutes</li>
              <li>You can fund with the methods you like.</li>
              <li>Start trading with full control</li>
              <li>Get expert help on the best forex trading platform.</li>
            </ul>
          </div>

          {/* Phone image */}
          <div className="flex justify-center md:justify-end lg:pr-64 md:pr-16">
            <img
              src={phone}
              alt="Mobile Trading"
              className="w-[700px] sm:w-[600px] md:w-[600px] lg:w-[680px] object-contain max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Trading Platforms */}
      <section className="bg-white text-center pt-5 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-semibold text-4xl text-gray-800 mb-2">
            Trading Platforms
          </h1>
          <p className="text-base text-gray-500">
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
