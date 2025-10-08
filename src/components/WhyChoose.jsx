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
        "No-commission-cfds for buying and selling.",
        "Spreads from 1.3 p",
        "Full access from Web, Mobile, and MT4",
      ],
    },
    {
      icon: <FaMoneyCheckAlt size={40} className="text-[#FABF16]" />,
      title: "ECN Account",
      description: [
        "Institutional pricing",
        "Extremely narrow and tightly packed raw spreads",
        "Lightning-fast execution of trades",
      ],
    },
    {
      icon: <FaPrayingHands size={40} className="text-[#FABF16]" />,
      title: "No-Swap-Free Islamic Account",
      description: [
        "100% interest-free",
        "No change over night",
        "Real-time actuals and payables follow-ups",
      ],
    },
    {
      icon: <FaLaptop size={40} className="text-[#FABF16]" />,
      title: "Demo Account",
      description: [
        "The Practice trading with virtual money",
        "Experience real world markets",
        "Risk-free atmosphere",
      ],
    },
  ];

  return (
    <section className="bg-[#121733] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-semibold text-4xl sm:text-4xl  leading-tight mb-4">
            Different Types of Trading Accounts
          </h2>
          <div className="w-24 h-1 bg-[#FABF16] mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {accountTypes.map((account, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#1a1f3a] to-[#0f1229] rounded-2xl p-8 border border-gray-700/30 hover:border-[#FABF16]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FABF16]/10"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FABF16]/5 to-transparent rounded-bl-3xl"></div>

              {/* Icon container */}
              <div className="relative z-10 flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FABF16]/10 to-[#FABF16]/5 rounded-2xl flex items-center justify-center group-hover:from-[#FABF16]/20 group-hover:to-[#FABF16]/10 transition-all duration-300">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {account.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="font-semibold text-xl mb-4 text-white group-hover:text-[#FABF16] transition-colors duration-300">
                  {account.title}
                </h3>

                <div className="space-y-3 text-left">
                  {account.description.map((line, index) => (
                    <div
                      key={index}
                      className="flex items-start text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-[#FABF16] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FABF16]/20 to-transparent group-hover:via-[#FABF16]/40 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-base">
            Choose the account type that best fits your trading style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#FABF16] text-[#121733] font-semibold rounded-lg hover:bg-[#FABF16]/90 transition-colors duration-300 transform hover:scale-105">
              Open Live Account
            </button>
            <button className="px-8 py-3 border-2 border-[#FABF16] text-[#FABF16] font-semibold rounded-lg hover:bg-[#FABF16] hover:text-[#121733] transition-all duration-300 transform hover:scale-105">
              Try Demo Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
