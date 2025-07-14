import React from 'react';
import { ChevronRight } from 'lucide-react'; // or use any icon you prefer

const FaqSection = ({ faqs = [] }) => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-center text-[#ff4b2b] text-lg font-semibold uppercase mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="bg-[#f8f8f8] hover:shadow-md transition duration-200 rounded-md px-6 py-5 flex justify-between items-center cursor-pointer"
          >
            <span className="text-[#101828] font-medium text-base">{question}</span>
            <ChevronRight size={20} className="text-[#ff4b2b]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
