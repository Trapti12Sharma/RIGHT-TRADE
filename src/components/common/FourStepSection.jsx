import React from "react";

const FourStepSection = ({ title, steps, bgcolor }) => {
  return (
    <section
      className={` ${bgcolor} py-12 px-4 text-center text-white`}
      style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
    >
      <h2 className="text-4xl font-semibold mb-10">{title}</h2>

      {/* First Row: 1 to 4 */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {steps.slice(0, 4).map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-[180px] text-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-[#FABF16] text-2xl font-bold mb-4">
              {step.number}
            </div>
            <p className="text-base">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Second Row: 5 and 6, centered under the above row */}
      <div className="flex justify-center gap-32">
        {steps.slice(4).map((step, index) => (
          <div
            key={index + 4}
            className="flex flex-col items-center max-w-[200px] text-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-[#FABF16] text-2xl font-bold mb-4">
              {step.number}
            </div>
            <p className="text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourStepSection;
