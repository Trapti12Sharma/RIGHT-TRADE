// components/common/ForexTradeSection.jsx
import React from "react";

const ForexTradeSection = ({ title, description, benefits }) => {
  return (
    <section className="w-full py-12 px-4 md:px-12 lg:px-20 text-[#0b0c0c] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-start">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl lg:text-[20px] font-semibold mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base text-[#333]">{description}</p>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl md:text-2xl lg:text-[20px] font-semibold mb-4">
            Key benefits of trading forex
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-[#333]">
            {benefits.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ForexTradeSection;
