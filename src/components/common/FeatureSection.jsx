import React from "react";

const FeatureSection = ({ title, features, paragraph }) => {
  return (
    <section
      className="bg-[#1a1d30] text-white py-16 px-4"
      style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>

        {/* ✅ Optional paragraph */}
        {paragraph && (
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-white opacity-90 mb-12 leading-relaxed">
            {paragraph}
          </p>
        )}

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <img
                src={feature.image}
                alt={feature.heading}
                className="mb-4 w-14 h-14 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2">{feature.heading}</h3>
              <p className="text-sm opacity-80">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
