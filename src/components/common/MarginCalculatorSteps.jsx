import React from "react";

const MarginCalculatorSteps = ({
  title,
  steps,
  noteTitle,
  noteText,
  image,
}) => {
  return (
    <section className="bg-white text-[#1f213f] py-16 px-6 lg:px-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        {title}
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Steps */}
        <div className="flex-1 text-sm md:text-base">
          <ul className="list-decimal list-inside space-y-2 text-[#1f213f]">
            {steps.map((step, index) => (
              <li key={index} className="text-[#df1e26] font-medium">
                <span className="text-[#1f213f] font-normal ml-1">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note */}
        <div className="flex-1 text-sm md:text-base">
          <p className="font-semibold mb-2">{noteTitle}</p>
          <p>{noteText}</p>
        </div>
      </div>

      {/* Image */}
      {image && (
        <div className="mt-10 flex justify-center">
          <img src={image} alt="illustration" className="max-w-full h-auto" />
        </div>
      )}
    </section>
  );
};

export default MarginCalculatorSteps;
