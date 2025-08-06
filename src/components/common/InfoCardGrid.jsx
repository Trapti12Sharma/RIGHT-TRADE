import React from "react";

const InfoCardGrid = ({ title, paragraph, cards }) => {
  return (
    <section className="bg-[#1a1d30] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
        )}

        {paragraph && (
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-white opacity-90 mb-12 leading-relaxed">
            {paragraph}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#222640] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={card.icon}
                alt={card.heading}
                className="mb-4 w-14 h-14 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2">{card.heading}</h3>
              <p className="text-sm opacity-80">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardGrid;
