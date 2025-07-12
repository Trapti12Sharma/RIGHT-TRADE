import React from "react";
import { FaChevronRight } from "react-icons/fa";

const FaqSection = ({ faqs }) => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-center text-[#ff4422] font-semibold text-lg sm:text-xl mb-8 uppercase">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#f9f9f9] hover:bg-[#f0f0f0] transition rounded-md px-6 py-5 cursor-pointer"
            >
              <span className="text-[#1d1d1d] font-medium text-sm sm:text-base">
                {item.question}
              </span>
              <FaChevronRight className="text-[#ff4422] text-sm sm:text-base" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
