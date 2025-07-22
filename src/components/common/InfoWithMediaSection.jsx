import React from "react";

const InfoWithMediaSection = ({ heading, description, image }) => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-4">
          {heading}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-[#333] max-w-3xl mx-auto mb-8">
          {description}
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={heading}
            className="w-full max-w-3xl rounded shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoWithMediaSection;
