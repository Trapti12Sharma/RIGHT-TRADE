import React from "react";

const TextImageSection = ({
  imgSrc,
  title,
  paragraph,
  listItems = [],
  bgColor,
  textcolor,
}) => {
  return (
    <section className={`${bgColor} ${textcolor}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
        {/* Image */}
        <div className="md:w-1/2 h-full">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex flex-col justify-center py-6 px-6">
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
