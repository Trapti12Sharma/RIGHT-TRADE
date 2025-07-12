// components/common/TextImageSection.jsx

import React from "react";

const TextImageSection = ({ imgSrc, title, paragraph }) => {
  return (
    <section className="flex flex-col md:flex-row items-stretch w-full bg-[#f9f9f9] m-0 p-0">
      {/* Left - Text */}
      <div
        className="md:w-1/2 w-full px-4 sm:px-6 lg:px-10 py-6 flex flex-col justify-center"
        style={{
          fontFamily: '"Source Sans Pro", sans-serif',
          textAlign: "justify",
        }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-sm sm:text-base leading-relaxed text-gray-800">
          {paragraph}
        </p>
      </div>

      {/* Right - Image */}
      <div className="md:w-1/2 w-full h-[540px] sm:h-[580px] md:h-[600px] lg:h-[620px]">
        <img
          src={imgSrc}
          alt="Section Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default TextImageSection;
