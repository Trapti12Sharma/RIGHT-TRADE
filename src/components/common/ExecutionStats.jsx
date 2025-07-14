// src/components/common/ExecutionStats.jsx

import React from 'react';

const ExecutionStats = ({
  title,
  leftStat,
  rightStat,
}) => {
  return (
    <section className="bg-[#1c1f3a] text-white py-14 px-4 sm:px-8 md:px-16">
      {/* Main Title */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium mb-12">
        {title}
      </h2>

      {/* Two Columns */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        {/* Left Stat */}
        <div className="flex flex-col items-center text-center max-w-sm">
          <div className="relative w-40 h-40 rounded-full border-[10px] border-[#69d042] flex items-center justify-center text-2xl font-semibold">
            {leftStat.value}
          </div>
          <h3 className="text-lg font-bold mt-6">{leftStat.label}</h3>
          <p className="text-sm mt-3">{leftStat.description}</p>
        </div>

        {/* Right Stat */}
        <div className="flex flex-col items-center text-center max-w-sm">
          <div className="relative w-40 h-40 rounded-full border-[10px] border-[#1c96e8] flex items-center justify-center text-2xl font-semibold">
            <div className="flex flex-col items-center justify-center leading-tight">
              <div>{rightStat.value}</div>
              <div className="text-sm font-light opacity-80">{rightStat.unit}</div>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-6">{rightStat.label}</h3>
          <p className="text-sm mt-3">{rightStat.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ExecutionStats;
