import React from "react";
import {
  FaUserAlt,
  FaMoneyCheckAlt,
  FaPrayingHands,
  FaLaptop,
} from "react-icons/fa";

const WhyChoose = () => {
  const accountTypes = [
    {
      icon: <FaUserAlt size={40} className="text-[#FABF16]" />,
      title: "Standard Account",
      description: [
        "No commissions, making it ideal for low-cost trading.",
        "1.3 pips and up",
        "Direct access to Web, Mobile, and MT4",
      ],
    },
    {
      icon: <FaMoneyCheckAlt size={40} className="text-[#FABF16]" />,
      title: "ECN Account",
      description: [
        "Institutional pricing with very tight spreads.",
        "Spreads in the raw market",
        "Low fees",
        "Lightning-fast execution",
      ],
    },
    {
      icon: <FaPrayingHands size={40} className="text-[#FABF16]" />,
      title: "Swap-Free Islamic Account",
      description: [
        "100% interest-free for traders who follow Sharia law.",
        "No overnight swaps",
        "Real-time order flow",
      ],
    },
    {
      icon: <FaLaptop size={40} className="text-[#FABF16]" />,
      title: "Demo Account",
      description: [
        "Practice trading with virtual funds on our live platform.",
        "Regulated broker ecosystem",
        "Transparency, safety, and control",
      ],
    },
  ];

  return (
    <section className="bg-[#121733] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="font-semibold mb-16"
          style={{
            fontFamily: "Source Sans Pro",
            fontSize: "40px",
          }}
        >
          Different Types of Accounts for All Traders
        </h1>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          style={{ fontFamily: "Source Sans Pro" }}
        >
          {accountTypes.map((account, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 min-h-[330px]"
            >
              {account.icon}
              <h2 className="font-semibold mt-4 mb-3 text-lg">
                {account.title}
              </h2>
              <ul className="text-gray-300 text-[16px] space-y-1 leading-relaxed">
                {account.description.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
