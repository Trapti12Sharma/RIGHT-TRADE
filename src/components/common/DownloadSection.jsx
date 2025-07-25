import React from "react";

const DownloadSection = ({ title, subtitle, buttons }) => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-600 mb-10">{subtitle}</p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 ">
          {buttons.map((btn, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg px-6 py-4 lg:w-[485px] md:w-[340px] flex items-center justify-between gap-4"
            >
              <p className="text-base font-semibold text-left text-[#0F1E37]">
                {btn.label}
              </p>
              <button className="bg-[#FABF16] hover:bg-[#FABF16] text-white font-semibold px-4 py-2 rounded flex items-center gap-1">
                Download
                <span className="text-white text-sm">⬇️</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
