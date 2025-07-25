import React from "react";
import { FaChevronRight } from "react-icons/fa";

const TradingInstrumentsTable = ({
  title = "TRADING INSTRUMENTS",
  subtitle = "Search an instrument in all markets",
  note1 = "Please note that to get the Live information you can check the contract specifications in MetaTrader’s. Check out this article for more information.",
  note2 = "Trading in all instruments opens at 00:15 EET on Monday and closes at 23:55 EET on Friday. Trading within this timeframe depends on the relevant Contract Specifications conditions.",
  note3 = "The availability of certain symbols may vary based on your nationality or jurisdiction.",
  instruments = [],
  accentColor = "#FABF16",
}) => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 md:px-16">
      {/* Title */}
      <h2
        className="text-sm text-center font-semibold mb-2"
        style={{ color: accentColor }}
      >
        {title}
      </h2>
      <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-[#1c1c1c]">
        {subtitle}
      </h3>

      {/* Notes */}
      <div className="max-w-4xl mx-auto text-center text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">
        <p className="mb-2">{note1}</p>
        <p className="mb-2">{note2}</p>
        <p className="font-semibold">{note3}</p>
      </div>

      {/* Table */}
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100 text-gray-800 text-xs sm:text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Ticker</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Min. Spreads</th>
              <th className="py-3 px-4 text-left">Pip value / 0.01 Lot</th>
              <th className="py-3 px-4 text-left">Swap Short</th>
              <th className="py-3 px-4 text-left">Swap Long</th>
              <th className="py-3 px-4 text-left">Start Trading</th>
              <th className="py-3 px-4 text-left">Close Trading</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {instruments.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors text-xs sm:text-sm"
              >
                <td className="py-3 px-4 font-medium">{item.ticker}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.minSpread}</td>
                <td className="py-3 px-4">{item.pipValue}</td>
                <td className="py-3 px-4">{item.swapShort}</td>
                <td className="py-3 px-4">{item.swapLong}</td>
                <td className="py-3 px-4">{item.startTrading}</td>
                <td className="py-3 px-4">{item.closeTrading}</td>
                <td className="py-3 px-4 text-right">
                  <FaChevronRight style={{ color: accentColor }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2 text-right">
          {instruments.length} / {instruments.length} results displayed
        </p>
      </div>
    </section>
  );
};

export default TradingInstrumentsTable;
