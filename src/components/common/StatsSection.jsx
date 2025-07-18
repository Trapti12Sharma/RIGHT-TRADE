// src/components/common/StatsSection.jsx

import React from "react";

const StatsSection = ({ title, subtitle, buttonText, note, image }) => {
  return (
    <section
      className="relative w-full min-h-[480px] bg-cover bg-center flex items-center text-white"
      style={{
        backgroundImage: `url(${image})`,
        fontFamily: '"Source Sans Pro", sans-serif',
      }}
    >
      {/* 🔺 Left Orange Overlay */}
      <div
        className="absolute inset-0 bg-[#f7421e] opacity-95"
        style={{
          clipPath: "polygon(0 0, 35% 0, 50% 50%, 0 200%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 px-6 sm:px-10 lg:px-24 max-w-3xl text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
          {title}
        </h2>
        <p className="text-lg mb-6">{subtitle}</p>
        <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#e94c2a] transition duration-300">
          {buttonText}
        </button>
        {note && <p className="mt-4 text-sm text-white opacity-80">{note}</p>}
      </div>
    </section>
  );
};

export default StatsSection;
