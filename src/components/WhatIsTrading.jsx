import React from "react";
import home5 from "../assets/tools.jpg";

const WhatIsTrading = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left image side */}
      <div className="md:w-1/2 w-full h-80 md:h-auto">
        <img
          src={home5}
          alt="Trading background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right content side */}
      <div className="md:w-1/2 w-full bg-white p-8 md:p-16 flex flex-col justify-center">
        <h2 className="md:text-3xl mb-6 text-[#10162f] text-left">
          Tools For Trading That Are Made To Work
        </h2>

        <p className="text-[#10162f] mb-4 leading-relaxed text-left">
          We give you more than just a place to work. We let you take charge.
        </p>

        {/* List Items */}
        <ul className="text-[#10162f] mb-4 leading-relaxed list-disc list-inside space-y-2 text-left">
          <li>
            Economic Calendar: Keep an eye on financial events around the world
          </li>
          <li>News and analysis of the market as it happens</li>
          <li>Price Alerts</li>
          <li>Tools for Advanced Risk Management</li>
          <li>Calculators that work in real time and technical information</li>
        </ul>

        <p className="text-[#10162f] leading-relaxed text-left">
          Our online trading platform has everything you need to trade,
          including world-class infrastructure.
        </p>
      </div>
    </section>
  );
};

export default WhatIsTrading;
