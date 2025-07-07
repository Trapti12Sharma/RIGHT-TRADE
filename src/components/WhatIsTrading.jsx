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
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#10162f]">
          What is trading?
        </h2>
        <p className="text-[#10162f] mb-4 leading-relaxed">
          Trading is the buying and selling securities, such as stocks, bonds, currencies, and commodities, to make a profit. And success depends on a trader's ability to be profitable over time.
        </p>
        <p className="text-[#10162f] leading-relaxed">
          Investors try to forecast market price movements and profit from buying or selling an asset at a higher or lower price. You can 'go long' and buy a security, hoping it will go up in value and give you a profit, or you can 'go short' and sell in the belief that it will go down in value.
        </p>
      </div>
    </section>
  );
};

export default WhatIsTrading;
