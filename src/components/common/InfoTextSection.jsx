import React from "react";

const InfoTextSection = ({ sections }) => {
  return (
    <section className="bg-[#f6f6f6] text-[#1f213f] py-16 px-4 md:px-10 lg:px-20 text-center">
      {sections.map((item, index) => (
        <div key={index} className="max-w-4xl mx-auto mb-12 last:mb-0">
          <h2 className="text-lg md:text-xl font-medium mb-4">{item.title}</h2>
          <p className="text-sm md:text-base leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default InfoTextSection;
