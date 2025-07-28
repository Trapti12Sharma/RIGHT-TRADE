import React from "react";
import home5 from "../assets/home5.png"; // update path as per your project

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
        <h2
          style={{
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: "44px", // Increased from 40px
            margin: "0px 0px 20px",
            textAlign: "justify",
          }}
          className="md:text-3xl mb-6 text-[#10162f]"
        >
          Tools for trading that are made to work
        </h2>
        <p
          style={{
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: "18px", // Increased from 16px
            margin: "0px 0px 16px",
            textAlign: "justify",
          }}
          className="text-[#10162f] mb-4 leading-relaxed"
        >
          We give you more than just a place to work. We let you take charge.
        </p>

        {/* List Items */}
        <ul
          style={{
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: "18px", // Increased from 16px
            margin: "0px 0px 16px",
            textAlign: "justify",
          }}
          className="text-[#10162f] mb-4 leading-relaxed list-disc list-inside space-y-2"
        >
          <li>
            Economic Calendar: Keep an eye on financial events around the world
          </li>
          <li>News and analysis of the market as it happens</li>
          <li>Price Alerts</li>
          <li>Tools for Advanced Risk Management</li>
          <li>Calculators that work in real time and technical information</li>
        </ul>

        <p
          style={{
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: "18px", // Increased from 16px
            margin: "0px 0px 16px",
            textAlign: "justify",
          }}
          className="text-[#10162f] leading-relaxed"
        >
          Our online trading platform has everything you need to trade,
          including world-class infrastructure.
        </p>
      </div>
    </section>
  );
};

export default WhatIsTrading;
