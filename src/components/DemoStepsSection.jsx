import React from "react";

const DemoStepsSection = () => {
  const steps = [
    {
      number: "1",
      text: "Create a MyRightTrade Capital profile",
      progress: 25,
    },
    {
      number: "2",
      text: "Choose Demo account",
      progress: 50,
    },
    {
      number: "3",
      text: "Log into your trading platform",
      progress: 75,
    },
    {
      number: "4",
      text: "Start trading, risk-free!",
      progress: 100,
    },
  ];

  return (
    <section
      className="bg-[#f9f9f9] text-center py-16 px-6"
      style={{
        fontFamily: '"Source Sans Pro"',
      }}
    >
      <h1
        className="text-[#10162f] mb-12"
        style={{
          fontFamily: '"Source Sans Pro"',
          fontSize: "40px",
        }}
      >
        How To Open An RightTrade Capital Demo Account
      </h1>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {steps.map((step, index) => {
          const circumference = 2 * Math.PI * 36;
          const progressOffset =
            circumference - (step.progress / 100) * circumference;

          return (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-20 h-20 mb-4">
                <svg width="80" height="80" className="rotate-[-90deg]">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#eee"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#FABF16"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={progressOffset}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-[#10162f]">
                  {step.number}
                </span>
              </div>
              <p
                className="text-[#10162f] text-center max-w-[150px]"
                style={{ fontSize: "16px", fontFamily: '"Source Sans Pro"' }}
              >
                {step.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DemoStepsSection;
