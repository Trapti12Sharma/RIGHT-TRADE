import React from "react";

const markets = [
  {
    title: "Trading in Forex",
    description: [
      "You can trade forex online in major, minor, and exotic currency pairs like GBP/USD, USD/JPY, and more.",
      "Spreads start at 0.0 pips",
      "Access in real time 24/5",
      "MT4 makes things happen quickly.",
      "Our best forex trading platform lets you trade currencies safely and efficiently while keeping full control.",
    ],
  },
  {
    title: "Global Indices",
    description: [
      "Think about the world's most important indexes, like the NASDAQ, S&P 500, FTSE 100, and others.",
      "Go long or short.",
      "There is a lot of leverage available.",
      "Our online trading platform lets you trade in real time.",
    ],
  },
  {
    title: "Cryptocurrency CFDs",
    description: [
      "Get Bitcoin, Ethereum, and other cryptocurrencies without having any of them.",
      "Trading all the time",
      "No need for a wallet",
      "Our regulated forex broker infrastructure protects all trades.",
    ],
  },
  {
    title: "Goods",
    description: [
      "You can trade gold, crude oil, silver, and more.",
      "Quick execution for online gold trading",
      "Protect against inflation and changes in the market",
      "You can use it 24/5 on our online trading platform.",
    ],
  },
  {
    title: "CFDs for Stocks",
    description: [
      "Put your money on big companies like Apple, Amazon, Tesla, and others.",
      "Options for fractional trading",
      "Leverage is available",
      "Direct execution on the best forex trading site",
    ],
  },
];

const MarketsCardSection = () => {
  return (
    <section className="w-full bg-[#10162f] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-center font-bold mb-6"
          style={{
            fontSize: "40px",
            fontFamily: "Source Sans Pro",
          }}
        >
          Markets You Can Buy and Sell on Our Online Trading Platform
        </h1>
        <p
          className="text-center max-w-2xl mx-auto mb-12 text-gray-300"
          style={{
            fontSize: "16px",
            fontFamily: "Source Sans Pro",
          }}
        >
          With just one login, you can access more than 500 global markets
          through our online trading platform.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((market, index) => {
            const isLastTwo = index >= markets.length - 2;
            return (
              <div
                key={index}
                className={`bg-[#1a1f35] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${
                  isLastTwo && markets.length % 3 === 2
                    ? "lg:col-span-1 lg:mx-auto"
                    : ""
                }`}
              >
                <h2
                  style={{
                    fontSize: "25px",
                    fontFamily: "Source Sans Pro",
                    fontWeight: "600",
                  }}
                  className="mb-4 text-[#FABF16]"
                >
                  {market.title}
                </h2>
                <ul
                  className="space-y-2 text-gray-300 text-sm leading-relaxed"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Source Sans Pro",
                  }}
                >
                  {market.description.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketsCardSection;
