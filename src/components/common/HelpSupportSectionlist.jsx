import React from "react";
import { FaComments, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const HelpSupportSectionlist = ({
  title,
  paragraph,
  supportOptions,
  bgcolor,
  textcolor,
}) => {
  return (
    <section className={`${bgcolor} ${textcolor} py-16 px-4`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90 mb-10 leading-relaxed">
          {paragraph}
        </p>

        {/* Support Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-black bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl text-[#FABF16] mb-4">{option.icon}</div>
              <h3 className="text-[24px] font-semibold mb-2">{option.title}</h3>
              <p className="text-base ">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSupportSectionlist;
