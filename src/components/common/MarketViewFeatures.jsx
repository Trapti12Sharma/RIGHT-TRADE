// src/components/common/MarketViewFeatures.jsx
import React from "react";

const MarketViewFeatures = ({ title, description, features }) => {
  return (
    <section className="w-full px-6 py-12 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-6">{title}</h2>

        {/* Optional paragraph */}
        {description && (
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            {description}
          </p>
        )}

        {/* Feature list */}
        <ul className="space-y-4 list-disc list-inside text-base leading-relaxed">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MarketViewFeatures;
