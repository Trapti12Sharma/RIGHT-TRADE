import React from "react";
import StatsSection from "../common/StatsSection";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import SimpleCenteredTextSection from "../common/SimpleCenteredTextSection";
import ExpertTrader from "../ExpertTrader";
import FaqSection from "../common/FaqSection2";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import TradingInstrumentsTable from "../common/TradingInstrumentsTable";

import statsBg from "../../assets/contract1.png";

const ContractSpecifications = () => {
  const instrumentsData = [
    {
      ticker: "AUDUSD",
      name: "Australian Dollar/US Dollar",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "-0.005",
      swapLong: "-0.0211",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "EURUSD",
      name: "Euro/US Dollar",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "0.0476",
      swapLong: "-0.1041",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "GBPUSD",
      name: "Great Britain Pound/US Dollar",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "-0.0211",
      swapLong: "-0.0314",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "NZDUSD",
      name: "New Zealand Dollar/US Dollar",
      minSpread: "0.1",
      pipValue: "0.01",
      swapShort: "0.0056",
      swapLong: "-0.0309",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "USDCAD",
      name: "US Dollar/Canadian Dollar",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "-0.0982",
      swapLong: "0.0407",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "USDCHF",
      name: "US Dollar/Swiss Franc",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "-0.1321",
      swapLong: "0.0659",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "USDJPY",
      name: "US Dollar/Japanese Yen",
      minSpread: "0",
      pipValue: "1",
      swapShort: "-0.2204",
      swapLong: "0.0826",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
  ];
  const faqItems = [
    {
      question: "What is a market?",
      answer:
        "A market is a place where buyers and sellers interact to trade financial instruments such as stocks, forex, commodities, etc.",
    },
    {
      question: "What are trading times?",
      answer:
        "Trading times refer to the hours during which trading is allowed on specific markets or exchanges. Forex is typically open 24 hours a day during weekdays.",
    },
    {
      question: "What is a 'ticker'?",
      answer:
        "A ticker is a unique symbol assigned to a traded asset. It helps traders and investors identify and track financial instruments.",
    },
    {
      question: "What's a swap?",
      answer:
        "A swap is the interest paid or earned for holding a position overnight in trading. It can be positive or negative depending on the interest rate differential between the currencies.",
    },
    {
      question: "What is a minimum spread?",
      answer:
        "Minimum spread is the lowest possible difference between the bid and ask price of a trading instrument offered by a broker.",
    },
    {
      question: "What is Pip value?",
      answer:
        "Pip value is the monetary worth of a one-pip movement in a forex trade. It helps determine how much profit or loss will be made per pip movement.",
    },
    {
      question: "What are lot sizes?",
      answer:
        "Lot sizes refer to the volume or quantity of a trade. In forex, 1 standard lot equals 100,000 units of the base currency.",
    },
    {
      question: "What are prime examples of trading instruments?",
      answer:
        "Prime examples include Forex, stocks, commodities, indices, and cryptocurrencies.",
    },
    {
      question: "What are tradable instruments?",
      answer:
        "Tradable instruments are assets like currencies, stocks, or commodities that can be bought or sold in the financial markets.",
    },
    {
      question: "Which trading instrument is best?",
      answer:
        "There is no one-size-fits-all. It depends on your risk appetite, experience, and market knowledge.",
    },
    {
      question: "What instruments can be traded at RightTrade Capital?",
      answer:
        "RightTrade Capital offers forex, CFDs on commodities, indices, stocks, and cryptocurrencies.",
    },
    {
      question: "Why trade instruments with RightTrade Capital?",
      answer:
        "RightTrade Capital is regulated, offers tight spreads, fast execution, and award-winning customer support.",
    },
  ];

  const statsData = {
    title: "Contract Specifications",
    subtitle:
      "See our minimum spreads, pip values, swap fees and other conditions.",
    buttonText: "Learn more",

    image: statsBg,
  };

  const breadcrumbData = {
    breadcrumbs: [
      { label: "RightTrade Capital", href: "/" },
      { label: "Markets At a Glance", href: "/markets" },
      { label: "Contract Specifications", href: "/contract-specifications" },
    ],

    description:
      "We aim higher than just resetting the standards within the forex industry - we also deliver the highest levels of transparency to all our clients. The statistics below show exactly why we're so proud of our trading conditions, which include some of the best spreads in the business.",
  };

  return (
    <>
      {/* Section 1 */}
      <StatsSection {...statsData} />
      {/* Section 2 */}
      <BreadcrumbAndDescription {...breadcrumbData} />
      {/* Section 3 */}
      <TradingInstrumentsTable
        instruments={instrumentsData}
        accentColor="#FABF16"
      />
      {/* Section 4 */}
      <ExpertTrader
        heading="Trade the world's markets"
        description="Take a deeper dive into the markets we offer and get in on the trading action today."
        buttonText="Instruments overview"
        // backgroundImage={bgImage}
      />
      {/* Section 5 */}
      <FaqSection faqs={faqItems} />

      {/* Section 6 */}
      <GetMoreMarketsSection />
    </>
  );
};

export default ContractSpecifications;
