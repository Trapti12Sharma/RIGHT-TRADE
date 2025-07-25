import React from "react";

// Reusable AwardCard component with large images
const AwardCard = ({ imageSrc, title, year, subtitle }) => (
  <div className="flex flex-col items-center text-center px-4 py-6 max-w-xs">
    {/* Award Image */}
    <img
      src={imageSrc}
      alt={title}
      className="w-32 sm:w-36 md:w-40 h-auto mb-4" // increased sizes for all screens
    />
    <h3 className="text-gray-700 font-medium text-base mt-2">{title}</h3>
    <p className="text-gray-700 font-semibold text-lg">{year}</p>
    <p className="text-gray-500 text-sm">{subtitle}</p>
  </div>
);

const AwardsSection = ({ awards }) => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-[#FABF16] text-xl md:text-2xl font-semibold mb-10">
          RightTrade Capital gives you more trust, more access, and more value
        </h2>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {awards.map((item, index) => (
            <AwardCard
              key={index}
              imageSrc={item.imageSrc} // pass imageSrc to AwardCard
              title={item.title}
              year={item.year}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
