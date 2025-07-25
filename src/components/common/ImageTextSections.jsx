import React from "react";

const ImageTextSections = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  reverse,
  noButton,
}) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-0 sm:px-0 md:px-0 lg:px-0 py-12 gap-8 bg-[#f9f9f9]">
      {/* Text Content */}
      <div
        className={`w-full lg:w-1/2 px-4 sm:px-6 md:px-10 lg:px-20 ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-base text-gray-700 mb-6 whitespace-pre-line">
          {description}
        </p>
        {!noButton && buttonText && (
          <a
            href={buttonLink}
            className="inline-block bg-[#ff4d00] text-white font-semibold px-6 py-3 rounded-full"
          >
            {buttonText}
          </a>
        )}
      </div>

      {/* Image */}
      <div className={`w-full lg:w-1/2 h-full ${reverse ? "lg:order-1" : ""}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-none"
        />
      </div>
    </section>
  );
};

export default ImageTextSections;
