import React from "react";

const TextImageSection = ({ imgSrc, title, paragraph }) => {
  return (
    <section className="flex flex-col md:flex-row items-stretch w-full bg-[#f9f9f9] py-6 md:py-10">
      {/* Left - Text */}
      <div
        className="md:w-1/2 w-full px-3 sm:px-2 md:px-4 lg:px-4 flex flex-col justify-center"
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
      <div className="md:w-1/2 w-full h-[240px] md:h-auto">
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
