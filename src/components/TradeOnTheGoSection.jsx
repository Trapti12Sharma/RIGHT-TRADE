import React from "react";
import home7 from "../assets/home7.png"; // update with your actual image file name and path
import home8 from "../assets/home8.png"; // update with your App Store icon if using image

const TradeOnTheGoSection = () => {
  return (
    <section className="bg-[#10162f] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text Content */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Trade on the go, straight from your phone
          </h2>
          <p className="text-lg mb-4">Never miss another trading opportunity again.</p>
          <p className="text-gray-300 mb-4">
            Get the FXTM Trader app for commission-free trading and spreads as low as zero on major FX pairs and gold.
          </p>
          <p className="text-gray-300 mb-8">Everything you need. One app.</p>

          {/* App Store Button */}
          <button className="bg-[#f2532e] hover:bg-[#e24725] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
            <img src={home8} alt="App Store" className="w-6 h-6" />
            App Store
          </button>
        </div>

        {/* Right Phone Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={home7}
            alt="Phone App Screenshot"
            className="w-72 md:w-50"
          />
        </div>
      </div>

      {/* Curved Background SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#10162f"
          d="M0,224L80,224C160,224,320,224,480,192C640,160,800,96,960,101.3C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default TradeOnTheGoSection;
