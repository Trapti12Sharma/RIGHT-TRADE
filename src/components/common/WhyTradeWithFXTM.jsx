// src/components/common/WhyTradeWithFXTM.jsx

import React from "react";

const WhyTradeWithFXTM = ({ title, features }) => {
  return (
    <section className="bg-[#1d203d] text-white py-16 px-6 sm:px-10 md:px-20 text-center">
      {/* Main Heading */}
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">{title}</h2>
      )}

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            {feature.icon && <div className="mb-4">{feature.icon}</div>}
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyTradeWithFXTM;
