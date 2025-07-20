import React from "react";

const DownloadSection = ({ title, subtitle, buttons }) => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-600 mb-10">{subtitle}</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {buttons.map((btn, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg px-6 py-6 w-full md:w-[340px]"
            >
              <p className="text-lg font-medium text-left mb-4">
                {btn.label}
              </p>
              <button className="bg-[#FF3C1F] hover:bg-[#e73419] text-white font-semibold px-6 py-2 rounded flex items-center justify-center gap-2 w-full">
                Download{" "}
                <span className="text-white text-xl">⬇️</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
