// src/components/common/MarketInsightCard.jsx
import React from "react";

const MarketInsightCard = ({ title, sections, bgColor = "bg-[#121733]" }) => {
  return (
    <section className={`w-full ${bgColor} py-12 px-4 md:px-10 text-white`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10">{title}</h2>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              {/* Image */}
              {section.image && (
                <div className="md:w-1/3 w-full">
                  <img
                    src={section.image}
                    alt={`Section ${index + 1}`}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Text Content */}
              <div className="md:w-2/3 w-full">
                <h3 className="text-[20px] font-semibold mb-2">
                  {section.subheading}
                </h3>
                <p className="text-base leading-relaxed text-gray-200">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketInsightCard;
