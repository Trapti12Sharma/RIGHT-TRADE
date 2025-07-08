import React from "react";
import home9 from "../assets/home9.png"; // update your actual image path

const TradingPlatformsSection = () => {
  return (
    <section className="bg-white text-center relative pt-0 pb-16">
      {/* Overlapping Laptop Image */}
     

      {/* Text Content */}
      <div className="max-w-2xl mx-auto px-4 mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Trading platforms
        </h2>
        <p className="text-gray-700 mb-8">
          MetaTrader is the universally popular online trading platform that lets you monitor the markets and trade in real-time. When you trade with us, you trade on one of these two powerful platforms, beloved by traders of all experience levels around the world.
        </p>
      </div>

       <div className="relative z-10 -mt-24 flex justify-center">
        <img
          src={home9}
          alt="Trading Platform"
          className="w-[400px] max-w-full"
        />
      </div>
    </section>
  );
};

export default TradingPlatformsSection;
