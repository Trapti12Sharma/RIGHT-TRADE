import React from "react";
import { FaChartBar, FaGem, FaChalkboardTeacher, FaShieldAlt } from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: <FaChartBar size={40} className="text-[#ff4c1b]" />,
      title: "Countless opportunities",
      description:
        "Make the most of market moves. Access hundreds of trading instruments online across forex, indices, commodities, and stocks.",
    },
    {
      icon: <FaGem size={40} className="text-[#ff4c1b]" />,
      title: "Exceptional trading value",
      description:
        "Enhance your returns by trading your preferred assets with minimal spreads, low commissions, and precise execution.",
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-[#ff4c1b]" />,
      title: "First-class education",
      description:
        "Knowledge is power. Empower your trading with essential skills through our comprehensive online resources.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-[#ff4c1b]" />,
      title: "Total fund security",
      description:
        "Secure Your Investments. Trade confidently with FXTM, where your funds are segregated and insured up to $1 million.",
    },
  ];

  return (
    <section className="bg-[#121733] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2  style={{ 
  fontFamily: '"Source Sans Pro", sans-serif', 
  fontSize: '40px'
    }} 
    className="font-semibold mb-12">Why choose FXTM?</h2>
        <div style={{ 
  fontFamily: '"Source Sans Pro", sans-serif', 
  fontSize: '24px'
    }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              {feature.icon}
              <h5 style={{ 
  fontFamily: '"Source Sans Pro", sans-serif', 
  fontSize: '20px'
    }}  className="font-semibold  mt-4 mb-2">{feature.title}</h5>
              <p style={{ 
  fontFamily: '"Source Sans Pro", sans-serif', 
  fontSize: '16px',
  margin: '0px 0px 16px'
    }}  className=" leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
