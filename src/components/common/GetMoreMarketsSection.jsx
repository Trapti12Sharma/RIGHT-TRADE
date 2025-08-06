import React from "react";

const GetMoreMarketsSection = ({
  title,
  paragraphs = [],
  iconItems = [],
  bgColor = "#f9fafb",
  textColor = "#111827",
}) => {
  return (
    <section
      className="py-10 px-4 sm:px-10 lg:px-24"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: '"Source Sans Pro", sans-serif',
      }}
    >
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-4xl sm:text-3xl font-semibold mb-3 text-left">
            {title}
          </h2>
        )}
        {paragraphs.map((para, idx) => (
          <p key={idx} className="mb-3 text-base text-left">
            {para}
          </p>
        ))}

        {iconItems?.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:justify-start gap-8 mt-6">
            {iconItems.map((item, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md mb-2">
                  <item.icon className="text-orange-600 text-xl" />
                </div>
                <p className="text-base">{item.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GetMoreMarketsSection;
