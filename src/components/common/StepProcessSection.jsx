import React from "react";

const StepProcessSection = ({ title, subtitle, steps }) => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-8 lg:px-16 text-center text-[#1e1e1e]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-sm md:text-base text-gray-600 mb-12">{subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="relative w-16 h-16 rounded-full border-4 border-[#ff5e2b] flex items-center justify-center text-xl font-bold text-black bg-white shadow-md">
              {index + 1}
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-white"></div>
            </div>
            <p className="text-sm text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepProcessSection;
