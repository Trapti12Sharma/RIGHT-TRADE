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
      description: (
        <>
          No commissions, which makes it great for trading at a low cost.
          <br />
          1.3 pips and up
          <br />
          Direct access to Web, Mobile, and MT4
        </>
      ),
    },
    {
      icon: <FaMoneyCheckAlt size={40} className="text-[#FABF16]" />,
      title: "ECN Account",
      description: (
        <>
          Institutional prices and very small spreads.
          <br />
          Spreads in the raw market
          <br />
          Low fees
          <br />
          Execution at lightning speed
        </>
      ),
    },
    {
      icon: <FaPrayingHands size={40} className="text-[#FABF16]" />,
      title: "Swap-Free Islamic Account",
      description: (
        <>
          100% interest-free for traders who follow Sharia law.
          <br />
          No swaps overnight
          <br />
          Order flow in real time
        </>
      ),
    },
    {
      icon: <FaLaptop size={40} className="text-[#FABF16]" />,
      title: "Demo Account",
      description: (
        <>
          Practise trading with fake money on our live platform.
          <br />
          Regulated broker ecosystem
          <br />
          Safety, transparency & control
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#121733] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          style={{
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: "40px",
          }}
          className="font-semibold mb-12"
        >
          Different Types of Accounts for All Traders
        </h2>
        {/* <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          We have different types of accounts for different trading styles, and
          all of them give you 100% access to our best forex trading platform
          and global liquidity.
        </p> */}
        <div
          style={{
            fontFamily: '"Source Sans Pro", sans-serif',
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {accountTypes.map((account, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4"
            >
              {account.icon}
              <h5 className="font-semibold mt-4 mb-2 text-lg md:text-xl">
                {account.title}
              </h5>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {account.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
