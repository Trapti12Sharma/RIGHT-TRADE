 import React from "react";

const DemoStepsSection = () => {
  const steps = [
    {
      number: "1",
      text: "Create a MyFXTM profile",
    },
    {
      number: "2",
      text: "Choose Demo account",
    },
    {
      number: "3",
      text: "Log into your trading platform",
    },
    {
      number: "4",
      text: "Start trading, risk-free!",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] text-center py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#10162f] mb-12">
        How to open an FXTM demo account
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full border-8 border-[#f2532e] flex items-center justify-center text-2xl font-semibold text-[#10162f] mb-4">
              {step.number}
            </div>
            <p className="text-[#10162f]">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoStepsSection;
