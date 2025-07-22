// components/common/VideoTextSection.jsx
import React from "react";

const VideoTextSection = ({ image, heading, text }) => {
  return (
    <section className="bg-[#f9f9f9] py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={heading}
            className="w-full rounded-md shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] mb-4">
            {heading}
          </h2>
          <p className="text-[#1e293b] text-base md:text-lg">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default VideoTextSection;
