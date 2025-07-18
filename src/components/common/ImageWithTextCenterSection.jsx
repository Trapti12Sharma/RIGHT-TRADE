import React from "react";

const ImageWithTextCenterSection = ({ title, description, image }) => {
  return (
    <section className="bg-[#1f213f] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
          style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
        >
          {title}
        </h2>
        <p
          className="text-sm sm:text-base leading-relaxed mb-10"
          style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
        >
          {description}
        </p>
        <div className="flex justify-center">
          <img
            src={image}
            alt="Currency pair explanation"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageWithTextCenterSection;
