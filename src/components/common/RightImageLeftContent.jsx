import React from "react";

const RightImageLeftContent = ({ heading, content, listItems, image }) => {
  return (
    <section className="bg-[#f8f9fa] w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 py-12 px-6 md:px-12 flex flex-col justify-center">
          <h2 className="text-[32px] md:text-[36px] text-4xl font-semibold mb-6 leading-snug">
            {heading}
          </h2>
          <p className="text-base leading-relaxed mb-6">{content}</p>
          {listItems && (
            <ul className="list-disc list-inside space-y-3 text-[16px]">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Image */}
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
