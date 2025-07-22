// src/components/common/ImageWithCardListSection.jsx

import React from "react";

const ImageWithCardListSection = ({ image, cards = [] }) => {
  return (
    <section className="bg-[#1c1f3a] text-white py-12 px-4 md:px-12 font-[Source Sans Pro]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="section visual"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Right Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#2a2e4b] p-5 rounded-md hover:bg-[#323654] transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-[#53a0f9] mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-white">{card.description}</p>
              {card.arrowColor && (
                <div className="mt-2 text-right">
                  <span
                    className={`text-xl ${
                      card.arrowColor === "orange"
                        ? "text-[#f7421e]"
                        : "text-[#53a0f9]"
                    }`}
                  >
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageWithCardListSection;
