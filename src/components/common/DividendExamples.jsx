import React from "react";

const LeftRightSection = ({ title, note, leftCard, rightCard }) => {
  return (
    <section className="bg-[#FFF] py-10 px-6 md:px-20" style={{
      fontFamily: '"Source Sans Pro", sans-serif',}}>
      {/* Section Title */}
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 ">
          {title}
        </h2>
      )}

      {/* Optional Note */}
      {note && (
        <p className="text-center text-sm text-gray-600 mb-8 italic" >{note}</p>
      )}

      {/* Left and Right Content */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Card */}
        <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-[#14539A]">
            {leftCard.title}
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
            {leftCard.items.map((item, idx) => (
              <li
                key={idx}
                className={
                  idx === leftCard.items.length - 1 ? "font-bold text-black" : ""
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-[#14539A]">
            {rightCard.title}
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
            {rightCard.items.map((item, idx) => (
              <li
                key={idx}
                className={
                  idx === rightCard.items.length - 1 ? "font-bold text-black" : ""
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeftRightSection;
