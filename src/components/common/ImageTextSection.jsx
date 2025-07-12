// components/common/ImageTextSection.jsx

import React from "react";

const ImageTextSection = ({ imgSrc, title, paragraph, linkText, linkHref, listItems }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full bg-[#f9f9f9] py-0 md:py-0">
      {/* Left Image - Full height, no padding/margin */}
      <div className="md:w-1/2 w-full">
        <img
          src={imgSrc}
          alt="Section Visual"
          className="w-full h-full object-cover"
          style={{ borderRadius: 0 }} // optional: remove rounded corners
        />
      </div>

      {/* Right Text */}
      <div
        className="md:w-1/2 w-full text-[#1d1d1d] px-3 sm:px-2 lg:px-4 py-3 md:py-1"
        style={{ fontFamily: '"Source Sans Pro", sans-serif', textAlign: "justify" }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h3>
        <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-800">{paragraph}</p>

        {linkText && linkHref && (
          <a
            href={linkHref}
            className="text-[#1e57e4] underline text-sm sm:text-base font-medium mb-4 inline-block"
          >
            {linkText}
          </a>
        )}

        {listItems && (
          <ul className="text-sm sm:text-[15px] text-gray-700 leading-relaxed pl-5 list-decimal space-y-2">
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
