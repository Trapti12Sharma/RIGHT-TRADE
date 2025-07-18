import React from "react";
import { FaDollarSign, FaBolt, FaGlobe, FaUniversity } from "react-icons/fa";
import StatsSection from "../common/StatsSection";
import ForexTradeSection from "../common/ForexTradeSection";
import WhyTradeForexSection from "../common/WhyTradeForexSection";
import CurrencyInfoSection from "../common/CurrencyInfoSection";
import VideoSection from "../common/VideoSection";
import statsBg from "../../assets/forexs1.png";
import globeImg from "../../assets/globe.svg";

const Forex = () => {
  // ✅ First section data
  const statsData = {
    title: "Start forex trading with RightTrade Capital",
    subtitle: "Trade the most popular Forex majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  // ✅ Second section data
  const forexContent = {
    title: "Trade major, minor and exotic currency pairs.",
    description:
      "The foreign exchange market has a daily trading volume of over $5 trillion, making it the most liquid in the world and an exciting place to trade. FX? It's in our name.",
    benefits: [
      "The most popular choice for every kind of trader, start with a few dollars or tens of thousands.",
      "Massive liquidity means massive opportunity",
      "The market is open 24/5 so trade anytime during the week",
    ],
  };

  // ✅ Third section data (Why Trade Forex)
  const whyTradeFeatures = [
    {
      icon: <FaDollarSign size={40} className="text-[#ff4c1b]" />,
      title: "Unbeatable pricing on major FX Pairs",
      description:
        "We offer typically 0.0 spreads on major FX Pairs like EURUSD and USDJPY on our most popular account, Advantage.",
    },
    {
      icon: <FaBolt size={40} className="text-[#ff4c1b]" />,
      title: "Faster execution for a better price",
      description:
        "We execute your trades in milliseconds, so you'll always get the best market price.",
    },
    {
      icon: <FaGlobe size={40} className="text-[#ff4c1b]" />,
      title: "Globally trusted",
      description:
        "We're regulated and licensed under the FSC of the Republic of Mauritius and the UK's FCA, among others.",
    },
    {
      icon: <FaUniversity size={40} className="text-[#ff4c1b]" />,
      title: "Total fund security",
      description:
        "Trade with peace of mind. Your funds are fully segregated from our own and insured up to $1m.",
    },
  ];

  // ✅ Fourth section data (new reusable)
  const currencySectionData = {
    title: "What is currency trading and why do traders love it?",
    paragraphs: [
      "Currencies are always traded in pairs. The first currency in the pair is called the base currency and the second the quote currency. Forex traders buy one currency in the pair and sell the other at the same time, depending on how they think their values will change in relation to each other.",
      "Currency values can be affected by a number of factors that impact the strength of a nation's economy, including inflation, interest rates and political stability to name a few. Typically, forex traders see the greatest volatility before and after key economic or political events as they speculate how this could affect the markets.",
      "Currency pairs are split into three categories. Major currency pairs are the most traded pairs in the forex industry. They usually include the US dollar as one half of the pair, like the EUR/USD and the USD/JPY. Other commonly traded major pairs include EUR/JPY and the EUR/GBP.",
    ],
    image: globeImg,
  };

  // ✅ Fifth section data (Video)
  const videoData = {
    videoUrl: "https://player.vimeo.com/video/76979871", // Replace with actual video
    title: "What is Forex?",
    description:
      "Forex (or FX) means Foreign Exchange, the place where currencies are traded. To learn more, check out our complete guide to",
    linkText: "forex trading for beginners.",
    linkHref: "#", // Update link to the actual page
  };

  return (
    <div className="w-full">
      {/*  First Section */}
      <StatsSection {...statsData} />
      {/*  Second Section */}
      <ForexTradeSection
        title={forexContent.title}
        description={forexContent.description}
        benefits={forexContent.benefits}
      />
      {/*  Third Section */}
      <WhyTradeForexSection
        title="Why trade forex currency pairs with RightTrade Capital?"
        features={whyTradeFeatures}
      />
      {/*  Fourth Section (New Reusable) */}
      <CurrencyInfoSection {...currencySectionData} />
      {/* Five Section (New Reusable) */}
      <VideoSection {...videoData} /> {/* ✅ 5th section added here */}
    </div>
  );
};

export default Forex;
