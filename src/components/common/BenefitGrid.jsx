import React from "react";

const BenefitGrid = ({ title, benefits }) => {
  return (
    <section className="bg-[#1d203f] text-white py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-base font-medium mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-300 leading-snug">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitGrid;
