import {
  FaChartLine,
  FaGlobe,
  FaBitcoin,
  FaOilCan,
  FaBuilding,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const markets = [
  {
    title: "Trading in Forex",
    icon: <FaChartLine size={32} className="text-[#FABF16]" />,
    description: [
      "You can trade forex online in major, minor, and exotic currency pairs like GBP/USD, USD/JPY, and more.",
      "Spreads start at 0.0 pips",
      "Access in real time 24/5",
      "MT4 makes things happen quickly.",
    ],
    gradient: "from-blue-500/10 to-purple-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "Global Indices",
    icon: <FaGlobe size={32} className="text-[#FABF16]" />,
    description: [
      "Think about the world's most important indexes, like the NASDAQ, S&P 500, FTSE 100, and others.",
      "Go long or short.",
      "There is a lot of leverage available.",
      "Our online trading platform lets you trade in real time.",
    ],
    gradient: "from-green-500/10 to-teal-500/10",
    borderColor: "border-green-500/20",
  },
  {
    title: "Cryptocurrency CFDs",
    icon: <FaBitcoin size={32} className="text-[#FABF16]" />,
    description: [
      "Get Bitcoin, Ethereum, and other cryptocurrencies without having any of them.",
      "Trading all the time",
      "No need for a wallet",
      "Our regulated forex broker infrastructure protects all trades.",
    ],
    gradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    title: "Commodities",
    icon: <FaOilCan size={32} className="text-[#FABF16]" />,
    description: [
      "You can trade gold, crude oil, silver, and more.",
      "Quick execution for online gold trading",
      "Protect against inflation and changes in the market",
      "You can use it 24/5 on our online trading platform.",
    ],
    gradient: "from-yellow-500/10 to-amber-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    title: "CFDs for Stocks",
    icon: <FaBuilding size={32} className="text-[#FABF16]" />,
    description: [
      "Put your money on big companies",
      "Options for fractional trading",
      "Leverage is available",
      "Direct execution on the best forex trading site",
    ],
    gradient: "from-indigo-500/10 to-blue-500/10",
    borderColor: "border-indigo-500/20",
  },
];

const MarketsCardSection = () => {
  return (
    <section className="w-full bg-[#121733] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FABF16]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FABF16]/10 rounded-2xl mb-6">
            <FaChartLine size={24} className="text-[#FABF16]" />
          </div>

          <h1
            className="font-bold mb-6 text-3xl sm:text-4xl lg:text-5xl leading-tight"
            style={{
              fontFamily: "Source Sans Pro",
            }}
          >
            Markets You Can Buy and Sell on Our{" "}
            <span className="text-[#FABF16]">Online Trading Platform</span>
          </h1>

          <p
            className="max-w-3xl mx-auto mb-8 text-gray-300 text-lg leading-relaxed"
            style={{
              fontFamily: "Source Sans Pro",
            }}
          >
            With just one login, you can access more than{" "}
            <span className="text-[#FABF16] font-semibold">
              500 global markets
            </span>{" "}
            through our advanced online trading platform.
          </p>

          <div className="w-24 h-1 bg-[#FABF16] mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {markets.map((market, index) => {
            const isLastCard =
              index === markets.length - 1 && markets.length % 3 === 1;

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-[#1a1f3a] to-[#0f1229] p-8 rounded-2xl border border-gray-700/30 hover:border-[#FABF16]/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FABF16]/10 ${
                  isLastCard ? "xl:col-span-3 xl:max-w-md xl:mx-auto" : ""
                }`}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${market.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FABF16]/40 to-transparent group-hover:via-[#FABF16]/80 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FABF16]/10 to-[#FABF16]/5 rounded-xl flex items-center justify-center group-hover:from-[#FABF16]/20 group-hover:to-[#FABF16]/10 transition-all duration-300">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                          {market.icon}
                        </div>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaArrowRight size={16} className="text-[#FABF16]" />
                    </div>
                  </div>

                  <h2
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: "600",
                    }}
                    className="mb-6 text-2xl text-white group-hover:text-[#FABF16] transition-colors duration-300"
                  >
                    {market.title}
                  </h2>

                  {/* Description List */}
                  <ul className="space-y-4">
                    {market.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        style={{
                          fontFamily: "Source Sans Pro",
                        }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-[#FABF16]/20 rounded-full flex items-center justify-center mt-0.5 mr-3 group-hover:bg-[#FABF16]/30 transition-colors duration-300">
                          <FaCheck size={10} className="text-[#FABF16]" />
                        </div>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Call to Action */}
                  <div className="mt-8 pt-6 border-t border-gray-700/30 group-hover:border-[#FABF16]/30 transition-colors duration-300">
                    <button className="w-full py-3 px-6 bg-transparent border-2 border-[#FABF16]/30 text-[#FABF16] font-semibold rounded-lg hover:bg-[#FABF16] hover:text-[#121733] transition-all duration-300 transform hover:scale-105 group-hover:border-[#FABF16] text-sm">
                      Start Trading{" "}
                      {
                        market.title.split(" ")[
                          market.title.split(" ").length - 1
                        ]
                      }
                    </button>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FABF16]/20 to-transparent group-hover:via-[#FABF16]/40 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1a1f3a] to-[#0f1229] rounded-2xl p-8 border border-gray-700/30">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: "Source Sans Pro" }}
            >
              Ready to Start Trading?
            </h3>
            <p
              className="text-gray-300 mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: "Source Sans Pro" }}
            >
              Join thousands of traders who trust our platform for their trading
              needs. Get started with a demo account or open a live account
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#FABF16] text-[#121733] font-semibold rounded-lg hover:bg-[#FABF16]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FABF16]/20">
                Open Live Account
              </button>
              <button className="px-8 py-4 border-2 border-[#FABF16] text-[#FABF16] font-semibold rounded-lg hover:bg-[#FABF16] hover:text-[#121733] transition-all duration-300 transform hover:scale-105">
                Try Demo Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsCardSection;
