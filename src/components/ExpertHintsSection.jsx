import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

const ExpertHintsSection = () => {
  const slides = [
    {
      text: `"Practicing in a simulated trading environment is a great way to get to know the trading platform before going live with actual money."`,
      author: "Han Tan",
    },
    {
      text: `"Trading is a serious activity. Traders need to know how to use the platforms and the key indicators to make the most of the market opportunities. A demo account allows you to do exactly that."`,
      author: "Lukman Otunuga",
    },
    {
      text: `"I would encourage everyone to get a feel for real market conditions and practice the self-discipline required to trade successfully. Our FXTM demo accounts provide an ideal and risk free first step."`,
      author: "Christopher Lodge",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-[#10162f] text-white text-center py-16 px-4">
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
          <FaQuoteRight className="text-[#f2532e] text-xl" />
        </div>
      </div>

      {/* Subtitle */}
      <h4 className="text-[#f2532e] font-semibold mb-4">HINTS FROM EXPERTS</h4>

      {/* Quote Text */}
      <p className="max-w-3xl mx-auto text-lg font-medium mb-4 px-4">
        {slides[currentIndex].text}
      </p>

      {/* Author */}
      <p className="font-semibold">{slides[currentIndex].author}</p>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#f2532e]" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ExpertHintsSection;
