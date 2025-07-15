import React from "react";
import { FaChevronRight } from "react-icons/fa";

const HelpSupportSection = ({ title, faqs }) => {
  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-10 lg:px-24" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-sm font-semibold text-orange-600 mb-6 uppercase">{title}</h2>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white px-4 py-3 shadow-sm rounded-sm flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
            >
              <span className="text-sm">{faq}</span>
              <FaChevronRight className="text-orange-600 text-xs" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSupportSection;
