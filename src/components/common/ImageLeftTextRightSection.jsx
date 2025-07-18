// components/common/ImageLeftTextRightSection.jsx

import React from "react";

const ImageLeftTextRightSection = ({
  imgSrc,
  title,
  paragraph,
  bgColor = "",
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-stretch w-full ${bgColor}`}
    >
      {/* Left Image */}
      <div className="md:w-1/2 w-full">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Right Text */}
      <div
        className="md:w-1/2 w-full px-6 sm:px-10 lg:px-20 flex flex-col justify-center bg-white text-[#1d1d1d]"
        style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
      >
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageLeftTextRightSection;
