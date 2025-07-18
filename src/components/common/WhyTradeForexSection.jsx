import React from "react";

const WhyTradeForexSection = ({ title, features }) => {
  return (
    <section className="bg-[#1f213f] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12"
          style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
        >
          {title}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4">{item.icon}</div>
              <h5
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
              >
                {item.title}
              </h5>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTradeForexSection;
