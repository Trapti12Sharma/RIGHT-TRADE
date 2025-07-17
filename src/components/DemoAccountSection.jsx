import React from "react";
import home6 from "../assets/home6.png"; // update path as per your project

const DemoAccountSection = () => {
  return (
    <section className="relative overflow-hidden md:pb-4 pt-16 px-6  md:px-20 flex flex-col md:flex-row items-center justify-center" style={{ backgroundColor: "#1e2235" }}>
      {/* Background circular overlay */}
      <div className="absolute inset-0">
        <div className="w-[800px] h-[800px] bg-[#10162f] opacity-60 rounded-full absolute -left-40 -top-40"></div>
        <div className="w-[600px] h-[600px] bg-[#10162f] opacity-40 rounded-full absolute -right-20 top-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
        {/* Left phone image */}
        <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
          <img
            src={home6}
            alt="Demo Account Phone"
            className="w-80 md:w-[400px]"
          />
        </div>

        {/* Right text content */}
        <div className="md:w-1/2 w-full md:pl-16 text-white">
          <h4 className="text-[#f2532e] font-semibold mb-2">DEMO ACCOUNT</h4>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Power up your trading skills
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Master the markets and skill up to the next level on our free demo
            account. Explore hundreds of instruments and tools, and practise
            trading with zero risk. And when you feel more confident, switch over
            to a live account and start trading for real.
          </p>

          {/* Buttons */}
         <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-0">
  <button className="bg-[#f2532e] hover:bg-[#e24725] text-white px-6 py-3 rounded-full font-semibold">
    Open Demo
  </button>
  <button className="bg-white text-[#10162f] px-6 py-3 rounded-full font-semibold">
    RightTRADE Capital Trader
  </button>
</div>
        </div>
      </div>
    </section>
  );
};

export default DemoAccountSection;
