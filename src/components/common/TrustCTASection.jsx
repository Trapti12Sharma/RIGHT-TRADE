import React from "react";

const TrustCTASection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-[#FABF16] relative text-white px-6 py-14">
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/path-to-your-triangle-overlay.png')",
        }}
      />
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h3>
          <p className="text-sm sm:text-base">{subtitle}</p>
        </div>
        <a
          href={buttonLink}
          className="bg-lime-400 hover:bg-lime-500 text-[#1d1d1d] font-semibold text-sm px-6 py-2 rounded-full transition duration-300"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default TrustCTASection;
