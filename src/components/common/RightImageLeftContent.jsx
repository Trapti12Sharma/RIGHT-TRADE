import React from "react";

const RightImageLeftContent = ({ heading, content, listItems, image }) => {
  return (
    <section className="bg-[#f8f9fa] w-full font-['Source_Sans_Pro']">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 py-12 px-6 md:px-12 flex flex-col justify-center">
          <h2
            className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-gray-900 mb-6 leading-snug"
            style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
          >
            {heading}
          </h2>
          <p
            className="text-gray-700 text-[16px] leading-relaxed mb-6"
            style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
          >
            {content}
          </p>
          {listItems && (
            <ul className="list-disc list-inside text-gray-800 space-y-3 text-[16px]">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  {item}
                </li>
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
