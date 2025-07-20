import React from "react";

const DividendExplanation = ({ title, content, beforeImage, afterImage }) => {
  return (
    <section
      className="bg-white py-12 px-4 md:px-16 lg:px-32"
      style={{
        fontFamily: '"Source Sans Pro", sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side (Text) */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">{title}</h2>
          {content.map((para, idx) => (
            <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Right Side (Images) */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-end items-center">
          <div className="text-center">
            <img
              src={beforeImage}
              alt="Before dividend adjustment"
              className="w-[120px] sm:w-[130px] h-56 mx-auto bg-[#13172B] rounded-t-md object-cover"
            />
            <p className="mt-2 text-sm">Before dividend adjustment</p>
          </div>
          <div className="text-center">
            <img
              src={afterImage}
              alt="After dividend adjustment"
              className="w-[120px] sm:w-[130px] h-56 mx-auto object-cover"
              style={{
                background:
                  "linear-gradient(to top, #FF3C1F 25%, #13172B 25%)",
              }}
            />
            <p className="mt-2 text-sm">After dividend adjustment</p>
          </div>
        </div>
      </div>
    </section>
  );
};
``
export default DividendExplanation;
