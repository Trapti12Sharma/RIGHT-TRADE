import React from "react";

const HeadingWithDescription = ({ title, description }) => {
  return (
    <section className="bg-[#f9f9f9] text-center py-12 px-4">
      <h2 className="text-xl md:text-3xl font-medium text-[#0a0a0a] mb-4">
        {title}
      </h2>
      <p className="text-sm md:text-base text-[#1f1f1f] max-w-3xl mx-auto">
        {description}
      </p>
    </section>
  );
};

export default HeadingWithDescription;
