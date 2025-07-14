import React from "react";

const TradingSection = ({ title, subtitle, buttonText, imageSrc, bgColor }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full" style={{ backgroundColor: bgColor }}>
      {/* Content Side */}
      <div className="w-full md:w-1/2 px-8 py-12 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-6">{subtitle}</p>
        <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-red-600 transition">
          {buttonText}
        </button>
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default TradingSection;
