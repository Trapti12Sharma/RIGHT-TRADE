import React from 'react';
import phone from '../assets/phone.png'; // Use your actual path
import laptop from '../assets/laptop.png'; // Use your actual path

const TradingSections = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Section 1: Phone Curve */}
      <section className="relative bg-[#1e213e] text-white pb-40 pt-16">
        {/* Top curved background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#11142b"
              fillOpacity="1"
              d="M0,192L60,181.3C120,171,240,149,360,128C480,107,600,85,720,85.3C840,85,960,107,1080,128C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-lg font-medium mb-2">Trade on the go, straight from your phone</h2>
          <p className="mb-6 text-sm text-gray-300">MetaTrader mobile app</p>
          <button className="bg-[#ff4c1b] hover:bg-[#e03f10] text-white px-4 py-2 rounded-full text-sm">
            <i className="fa fa-apple mr-2"></i>App Store
          </button>
        </div>

        {/* Phone Image */}
        <img
          src={phone}
          alt="Mobile Trading"
          className="absolute top-10 right-1/2 translate-x-1/2 lg:right-32 lg:translate-x-0 w-40 lg:w-52 z-20"
        />
      </section>

      {/* Section 2: Trading Platforms */}
      <section className="bg-white text-center pt-16 pb-32">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Trading platforms</h3>
          <p className="text-sm text-gray-500">
            MetaTrader is the universally popular online trading platform that lets you monitor the markets and trade in real time. When you trade with us, you trade on one of these two powerful platforms, beloved by traders of all experience levels around the world.
          </p>
        </div>

        {/* Laptop Image */}
        <div className="mt-12 flex justify-center relative">
          <img
            src={laptop}
            alt="Trading Platforms"
            className="w-[700px] max-w-full z-10"
          />
        </div>
      </section>
    </div>
  );
};

export default TradingSections;
