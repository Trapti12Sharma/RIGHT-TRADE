import React from "react";

const TrustReasonsSection = ({ reasons }) => {
  return (
    <section className="bg-[#1d203f] text-white py-12 px-4 text-center">
      <h3 className="text-xl sm:text-3xl font-semibold mb-12">
        More reasons why traders trust RightTrade Capital 
      </h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {reasons.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.icon} alt="icon" className="h-10 mb-4" />
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustReasonsSection;
