import React from "react";

const SideImageTextSection = ({
  image,
  title,
  paragraphs,
  bgColor,
  textcolor,
  paragraphTextColor = "text-white", // default is white
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between ${bgColor} ${textcolor}`}
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[500px] lg:h-[600px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Right Content */}
      <div
        className="w-full md:w-1/2 p-8 md:p-12 lg:p-20"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
        {paragraphs.map((para, index) => (
          <p key={index} className={`mb-4 ${paragraphTextColor}`}>
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};

export default SideImageTextSection;
