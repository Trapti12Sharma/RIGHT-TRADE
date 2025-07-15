import React from 'react';

const FourStepSection = ({ title, steps }) => {
  return (
    <section className="bg-gray-50 py-12 px-4 text-center" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
      <h2 className="text-2xl font-semibold mb-10">{title}</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-[#ff5023] text-2xl font-bold mb-4">{step.number}</div>
            <p className="text-sm text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourStepSection;
