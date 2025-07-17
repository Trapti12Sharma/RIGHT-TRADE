// src/components/common/WhyTradeWithRightTrade Capital.jsx

import React from 'react';
import {
  Scale,
  GlobeLock,
  TrendingUp,
  BookOpen,
} from 'lucide-react'; // Replace or customize as needed

const features = [
  {
    icon: <Scale size={40} strokeWidth={2} className="text-[#f34d2d] mb-4" />,
    title: 'Unbeatable trading costs',
    description:
      'The best pricing, with super-low commission rates and tight spreads',
  },
  {
    icon: <GlobeLock size={40} strokeWidth={2} className="text-[#f34d2d] mb-4" />,
    title: 'Total transparency',
    description:
      "We're proud to show off our statistics – and we'll always share them with you for your own peace of mind.",
  },
  {
    icon: <TrendingUp size={40} strokeWidth={2} className="text-[#f34d2d] mb-4" />,
    title: 'Performance',
    description:
      "Every trader wants to join forces with the best of the best. We're happy to have you!",
  },
  {
    icon: <BookOpen size={40} strokeWidth={2} className="text-[#f34d2d] mb-4" />,
    title: 'Access',
    description:
      "We don't just offer great numbers. We also have free educational resources to help you get going.",
  },
];

const WhyTradeWithRightTrade Capital = () => {
  return (
    <section className="bg-[#1d203d] text-white py-16 px-6 sm:px-10 md:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">Why trade with RightTrade Capital?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            {feature.icon}
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyTradeWithRightTrade Capital;
