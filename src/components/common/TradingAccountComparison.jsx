// src/components/common/TradingAccountComparison.jsx

import React from "react";

const TradingAccountComparison = ({ accountData }) => {
  return (
    <section className="bg-[#f8f9fb] py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#2a2d45]">
        Compare our trading account types
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accountData.map((account, idx) => (
          <div
            key={idx}
            className={`rounded-lg border ${
              account.highlighted ? "border-red-500" : "border-gray-200"
            } shadow-md bg-white`}
          >
            <div
              className={`p-6 ${
                account.highlighted ? "border-t-4 border-red-500" : ""
              }`}
            >
              <div className="text-center mb-4">
                <div className="text-lg font-bold text-[#2a2d45] uppercase">
                  {account.name}
                </div>
              </div>
              <div className="text-sm mb-3">
                <p className="text-gray-600 font-medium">Minimum Deposit</p>
                <p className="text-[#2a2d45]">{account.minDeposit}</p>
              </div>
              <div className="text-sm mb-3">
                <p className="text-gray-600 font-medium">Spreads</p>
                <p className="text-[#2a2d45]">{account.spreads}</p>
              </div>
              <div className="text-sm mb-3">
                <p className="text-gray-600 font-medium">Commissions</p>
                <p className="text-[#2a2d45]">{account.commissions}</p>
              </div>
              <div className="text-sm mb-4">
                <p className="text-gray-600 font-medium">Trading Instruments</p>
                <ul className="list-disc ml-5 text-[#2a2d45]">
                  {account.instruments.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="text-center mt-6">
                <button className="bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 rounded-full text-sm font-medium">
                  Get started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TradingAccountComparison;
