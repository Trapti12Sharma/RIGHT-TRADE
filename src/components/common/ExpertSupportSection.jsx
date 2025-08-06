import React from "react";

export default function ExpertSupportSection({
  icon,
  title,
  description,
  points = [],
  buttonText,
  buttonLink = "#",
}) {
  return (
    <div className="bg-[#1f2239] relative py-20 px-6">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2 gap-4">
            <div className="flex items-center gap-4">
              <div className="border-2 border-[#FABF16] rounded-full p-3 text-[#FABF16]">
                {icon}
              </div>
              <div>
                <h2 className="text-white text-3xl md:text-4xl font-semibold">
                  {title}
                </h2>
              </div>
            </div>

            <p className="text-white text-base leading-relaxed">
              {description}
            </p>

            {points.length > 0 && (
              <ul className="text-white text-base space-y-2 pl-5 list-disc mt-2">
                {points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Content - CTA Button */}
          <div className="flex flex-col items-center md:items-end md:w-1/2 gap-4">
            <button
              className="bg-[#FABF16] text-[#1f2239] font-bold text-sm py-3 px-6 rounded-full hover:opacity-90 transition duration-300"
              onClick={() => (window.location.href = buttonLink)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
