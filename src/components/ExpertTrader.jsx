import React from "react";
// import bgImage from "../assets/expert-trader-bg.png"; // use your own image

const ExpertTrader = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
    //   style={{
    //     backgroundImage: `url(${bgImage})`,
    //   }}
    >
      <div className="bg-[#121733]/80 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left Content */}
          <div className="max-w-xl pl-10 md:pl-25">
            <p className="text-[#ff4c1b] font-semibold text-sm mb-3">EXPERT TRADER</p>
            <h2 className="text-2xl font-semibold mb-4">Already trading?</h2>
            <p className="text-base font-normal leading-relaxed text-white/90">
              Sharpen your edge with the latest market updates, expert analysis,
              real-time prices, and innovative trading tools.
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 md:mt-0">
            <button className="bg-[#ff4c1b] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e44418] transition">
              Expert Trader
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTrader;
