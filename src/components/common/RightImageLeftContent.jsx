import React from "react";

const RightImageLeftContent = ({ heading, content, listItems, image }) => {
  return (
    <section className="bg-[#f8f9fa] w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 py-12 px-6 md:px-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-snug">
            {heading}
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
            {content}
          </p>
          {listItems && (
            <ul className="list-disc list-inside text-gray-800 space-y-2 text-base md:text-lg">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Image Full Height & Edge-to-Edge */}
        <div className="flex-1">
          <img
            src={image}
            alt="Right Section"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RightImageLeftContent;
