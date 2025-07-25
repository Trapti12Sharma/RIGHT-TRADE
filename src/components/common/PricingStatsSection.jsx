import React from "react";

const PricingStatsSection = ({ title, stats }) => {
  return (
    <section className="bg-white py-12 px-4 text-center text-[#1d1d1d]">
      <h2
        className="text-2xl sm:text-3xl font-semibold mb-10"
        style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <div className="text-4xl sm:text-5xl font-bold text-[#FABF16] mb-2">
              {item.value}
            </div>
            <div className="text-base font-bold mb-2 uppercase tracking-wide text-[#1d1d1d]">
              {item.label}
            </div>
            <p
              className="text-sm text-gray-700 leading-relaxed max-w-xs"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingStatsSection;
