// components/common/ImageTextSection.jsx

import React from "react";

const ImageTextSection = ({ imgSrc, title, paragraph, linkText, linkHref, listItems }) => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#f9f9f9] m-0 p-0">
      {/* Left Image - Full Height */}
      <div className="md:w-1/2 w-full h-[540px] sm:h-[580px] md:h-[600px] lg:h-[620px]">
        <img
          src={imgSrc}
          alt="Section Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text */}
      <div
        className="md:w-1/2 w-full px-4 sm:px-6 lg:px-10 py-6 overflow-y-auto"
        style={{
          fontFamily: '"Source Sans Pro", sans-serif',
          textAlign: "justify",
          maxHeight: "620px",
        }}
      >
        <h3 className="text-base sm:text-lg font-semibold mb-3 text-[#1d1d1d]">{title}</h3>
        <p className="mb-3 text-xs sm:text-sm leading-relaxed text-gray-800">{paragraph}</p>

        {linkText && linkHref && (
          <a
            href={linkHref}
            className="text-[#1e57e4] underline text-xs sm:text-sm font-medium mb-3 inline-block"
          >
            {linkText}
          </a>
        )}

        {listItems && (
          <ul className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-5 list-decimal space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ImageTextSection;
