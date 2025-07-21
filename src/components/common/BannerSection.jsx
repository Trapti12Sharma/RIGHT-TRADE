import React from "react";

const BannerSection = ({ backgroundImage, title, subtitle }) => {
  return (
    <div
      className="w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-white text-base md:text-xl max-w-3xl">{subtitle}</p>
    </div>
  );
};

export default BannerSection;
