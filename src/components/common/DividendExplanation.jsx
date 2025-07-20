import React from "react";

const DividendExplanation = ({ title, content, beforeImage, afterImage }) => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {title}
          </h2>
          {content.map((para, idx) => (
            <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
        <div className="flex gap-6 justify-center md:justify-end">
          <div className="text-center">
            <img
              src={beforeImage}
              alt="Before dividend adjustment"
              className="w-20 h-36 mx-auto bg-[#13172B] rounded-t-md"
            />
            <p className="mt-2 text-sm">Before dividend adjustment</p>
          </div>
          <div className="text-center">
            <img
              src={afterImage}
              alt="After dividend adjustment"
              className="w-20 h-36 mx-auto relative"
              style={{
                background:
                  "linear-gradient(to top, #FF3C1F 25%, #13172B 25%)",
              }}
            />
            <p className="mt-2 text-sm">After dividend adjustment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DividendExplanation;
