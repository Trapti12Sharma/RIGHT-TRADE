import React from "react";

const ComparisonTable = ({ title, data, note }) => {
  return (
    <div className="w-full py-10 px-4 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Left column (Features) */}
        <div className="bg-white shadow-md rounded-2xl p-6 border">
          <h3 className="text-lg font-semibold text-center mb-4">Feature</h3>
          <ul className="space-y-4">
            {data.map((item, index) => (
              <li key={index} className="text-gray-700 font-medium">
                {item.feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Middle column (Traditional Investing) */}
        <div className="bg-white shadow-md rounded-2xl p-6 border">
          <h3 className="text-lg font-semibold text-center mb-4">
            Traditional Investing
          </h3>
          <ul className="space-y-4">
            {data.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item.traditional}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column (CFD Index Trading) */}
        <div className="bg-white shadow-md rounded-2xl p-6 border">
          <h3 className="text-lg font-semibold text-center mb-4">
            CFD Index Trading
          </h3>
          <ul className="space-y-4">
            {data.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item.cfd}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Note section */}
      {note && (
        <p className="text-center mt-8 max-w-3xl mx-auto text-gray-700">
          <span className="font-bold text-black">CFD index trading</span> {note}
        </p>
      )}
    </div>
  );
};

export default ComparisonTable;
