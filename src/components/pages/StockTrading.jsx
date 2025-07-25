import React from "react";
import { FaDollarSign, FaBolt, FaGlobe, FaUniversity } from "react-icons/fa";
import StatsSection from "../common/StatsSection";
import ForexTradeSection from "../common/ForexTradeSection";
import WhyTradeForexSection from "../common/WhyTradeForexSection";
import CurrencyInfoSection from "../common/CurrencyInfoSection";
import VideoSection from "../common/VideoSection";
import FaqSection from "../common/FaqSection2";
import TrustCTASection from "../common/TrustCTASection";
import statsBg from "../../assets/stock1.png";
import globeImg from "../../assets/globe.svg";

const StockTrading = () => {
  // ✅ First section data
  const statsData = {
    title: "Start Stock Trading trading with RightTrade Capital",
    subtitle:
      "Trade the most popular Stock Trading majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  // ✅ Second section data
  const StockTradingContent = {
    title: "Trade major, minor and exotic currency pairs.",
    description:
      "The foreign exchange market has a daily trading volume of over $5 trillion, making it the most liquid in the world and an exciting place to trade. FX? It's in our name.",
    benefits: [
      "The most popular choice for every kind of trader, start with a few dollars or tens of thousands.",
      "Massive liquidity means massive opportunity",
      "The market is open 24/5 so trade anytime during the week",
    ],
  };

  // ✅ Third section data (Why Trade Stock Trading)
  const whyTradeFeatures = [
    {
      icon: <FaDollarSign size={40} className="text-[#FABF16]" />,
      title: "Unbeatable pricing on major FX Pairs",
      description:
        "We offer typically 0.0 spreads on major FX Pairs like EURUSD and USDJPY on our most popular account, Advantage.",
    },
    {
      icon: <FaBolt size={40} className="text-[#FABF16]" />,
      title: "Faster execution for a better price",
      description:
        "We execute your trades in milliseconds, so you'll always get the best market price.",
    },
    {
      icon: <FaGlobe size={40} className="text-[#FABF16]" />,
      title: "Globally trusted",
      description:
        "We're regulated and licensed under the FSC of the Republic of Mauritius and the UK's FCA, among others.",
    },
    {
      icon: <FaUniversity size={40} className="text-[#FABF16]" />,
      title: "Total fund security",
      description:
        "Trade with peace of mind. Your funds are fully segregated from our own and insured up to $1m.",
    },
  ];

  // ✅ Fourth section data (new reusable)
  const currencySectionData = {
    title: "What is currency trading and why do traders love it?",
    paragraphs: [
      "Currencies are always traded in pairs. The first currency in the pair is called the base currency and the second the quote currency. Stock Trading traders buy one currency in the pair and sell the other at the same time, depending on how they think their values will change in relation to each other.",
      "Currency values can be affected by a number of factors that impact the strength of a nation's economy, including inflation, interest rates and political stability to name a few. Typically, Stock Trading traders see the greatest volatility before and after key economic or political events as they speculate how this could affect the markets.",
      "Currency pairs are split into three categories. Major currency pairs are the most traded pairs in the Stock Trading industry. They usually include the US dollar as one half of the pair, like the EUR/USD and the USD/JPY. Other commonly traded major pairs include EUR/JPY and the EUR/GBP.",
    ],
    image: globeImg,
  };

  // ✅ Fifth section data (Video)
  const videoData = {
    videoUrl: "https://player.vimeo.com/video/76979871", // Replace with actual video
    title: "What is Stock Trading?",
    description:
      "Stock Trading (or FX) means Foreign Exchange, the place where currencies are traded. To learn more, check out our complete guide to",
    linkText: "Stock Trading trading for beginners.",
    linkHref: "#", // Update link to the actual page
  };

  //  Sixth section data

  const faqItems = [
    {
      question:
        "How much do I need to start trading Stock Trading with RightTrade Capital?",
      answer:
        "The minimum deposit depends on the account type you choose. It can be as low as $10. Check account details on the RightTrade Capital website.",
    },
    {
      question: "Which account type is best for trading Stock Trading?",
      answer:
        "RightTrade Capital offers various account types to suit different traders. Standard and ECN accounts are popular options depending on your strategy.",
    },
    {
      question: "Is Stock Trading trading safe?",
      answer:
        "Stock Trading trading involves risks. It is important to trade with a regulated broker and have a solid risk management plan in place.",
    },
    {
      question: "What is leverage and how does it work when trading FX?",
      answer:
        "Leverage allows you to control larger positions with a smaller amount of capital. It amplifies both profits and losses.",
    },
    {
      question: "What currency pairs can I trade with RightTrade Capital?",
      answer:
        "RightTrade Capital offers a wide range of currency pairs including majors, minors, and exotics. Visit the RightTrade Capital website for the full list.",
    },
  ];

  return (
    <div className="w-full">
      {/*  1 Section */}
      <StatsSection {...statsData} />
      {/*  2 Section */}
      <ForexTradeSection
        title={StockTradingContent.title}
        description={StockTradingContent.description}
        benefits={StockTradingContent.benefits}
      />
      {/*  3 Section */}
      <WhyTradeForexSection
        title="Why trade Stock Trading currency pairs with RightTrade Capital?"
        features={whyTradeFeatures}
      />
      {/*  4 (New Reusable) */}
      <CurrencyInfoSection {...currencySectionData} />

      {/* 5 (New Reusable) */}
      <VideoSection {...videoData} />

      {/* Section 6 */}
      <FaqSection faqs={faqItems} />

      {/* Section 7 */}
      <TrustCTASection
        title="Join us"
        subtitle="Start trading with RightTrade Capital."
        buttonText="Open account"
      />
    </div>
  );
};

export default StockTrading;
