// components/common/CenteredTextSection.jsx

import React from "react";

const CenteredTextSection = ({ heading, leftText, rightText }) => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 text-center text-[#1d1d1d]">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        {heading}
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-center text-left text-base sm:text-lg leading-relaxed text-[#1d1d1d]">
        <p className="md:w-1/2">{leftText}</p>
        <p className="md:w-1/2">{rightText}</p>
      </div>
    </section>
  );
};

export default CenteredTextSection;
