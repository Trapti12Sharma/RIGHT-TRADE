import React from "react";

const TextLeftImageRightSection = ({ imgSrc, title, paragraph, listItems }) => {
  return (
    <section className="flex flex-col md:flex-row items-stretch w-full bg-[#f9f9f9] m-0 p-0">
      {/* Left Text */}
      <div
        className="md:w-1/2 w-full px-4 sm:px-6 lg:px-14 py-6 flex flex-col justify-center"
        style={{
          fontFamily: '"Source Sans Pro", sans-serif',
          textAlign: "justify",
        }}
      >
        <h3 className="text-xl sm:text-3xl font-semibold mb-4 text-[#1d1d1d]">{title}</h3>
        <p className="text-sm sm:text-base text-gray-800 mb-4 leading-relaxed">
          {paragraph}
        </p>

        {listItems && (
          <ul className="text-sm sm:text-base text-gray-800 leading-relaxed pl-6 list-decimal space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-red-600 font-medium">
                <span className="text-gray-800 font-normal">&nbsp;{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Image - Full Height */}
      <div className="md:w-1/2 w-full h-[540px] sm:h-[580px] md:h-[600px] lg:h-[620px]">
        <img
          src={imgSrc}
          alt="Section Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default TextLeftImageRightSection;
