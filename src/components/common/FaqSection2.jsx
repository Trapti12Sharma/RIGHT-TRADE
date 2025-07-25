import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-center text-[#FABF16] font-semibold text-lg sm:text-xl mb-8 uppercase">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-md overflow-hidden"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center px-6 py-5 cursor-pointer hover:bg-[#f0f0f0] transition"
              >
                <span className="text-[#1d1d1d] font-medium text-sm sm:text-base">
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#FABF16]" />
                ) : (
                  <FaChevronDown className="text-[#FABF16]" />
                )}
              </div>

              {activeIndex === index && (
                <div className="px-6 py-4 text-sm text-gray-700 bg-white border-t">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
