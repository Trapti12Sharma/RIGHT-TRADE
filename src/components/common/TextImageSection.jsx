// components/common/TextImageSection.jsx

import React from "react";

const TextImageSection = ({
  imgSrc,
  title,
  paragraph,
  listItems = [],
  bgColor,
}) => {
  return (
    <section className={`py-12 px-6  ${bgColor} text-white`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img src={imgSrc} alt={title} className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="mb-4 whitespace-pre-line text-base">{paragraph}</p>
          {listItems.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-base">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextImageSection;
