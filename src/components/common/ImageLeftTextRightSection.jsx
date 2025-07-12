// components/common/ImageLeftTextRightSection.jsx

import React from "react";

const ImageLeftTextRightSection = ({ imgSrc, title, paragraph }) => {
  return (
    <section className="flex flex-col md:flex-row items-stretch w-full bg-white">
      {/* Left Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={imgSrc}
          alt="Vault Security"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="md:w-1/2 w-full px-6 sm:px-10 lg:px-20 flex flex-col justify-center bg-white text-[#1d1d1d]"
        style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Your funds are separate and secure
          </h3>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            We keep your funds entirely separate from our own operational funds
            in various top-tier banking institutions. We won't ever use any of
            your money for either our own use or any other investment, ensuring
            your protection at all times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageLeftTextRightSection;
