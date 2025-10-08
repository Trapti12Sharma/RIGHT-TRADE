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
        <h2 className="md:text-3xl lg:text-4xl mb-6 text-[#10162f] text-left">
          Education and Community
        </h2>

        <p className="text-[#10162f] mb-4 leading-relaxed text-left text-base">
          The school also emphasizes that Our prime aim is assisting traders in
          developing and progressing with a full range of educational materials,
          and valuable insights from qualified industry experts.We want to
          support traders to increase their profits by offering them educational
          materials and offering them an expert insight.
        </p>

        {/* List Items */}
        <ul className="text-[#10162f] mb-4 leading-relaxed list-disc list-inside space-y-2  text-base text-left">
          <li>Guides on detailed trading for all skill levels</li>
          <li>Tutorial videos with actual market examples</li>
          <li>Real-time webcasts and experts' sessions</li>
          <li>Learning to read charts and manage risks</li>
          <li>Obtaining market blogs and weekly insights</li>
        </ul>

        {/* <p className="text-[#10162f] leading-relaxed text-left text-base">
          Our online trading platform has everything you need to trade,
          including world-class infrastructure.
        </p> */}
      </div>
    </section>
  );
};

export default WhatIsTrading;
