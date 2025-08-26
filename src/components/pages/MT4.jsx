import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../../components/common/StatsSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import FeatureSection from "../common/FeatureSection";
import SupportedRegions from "../common/SupportedRegions";
import { FaGlobeEurope, FaBuilding, FaExchangeAlt } from "react-icons/fa";
import FaqSection from "../common/FaqSection2";
import bannerImage from "../../assets/mt4n.png";

const MT4 = () => {
  const pageURL =
    "https://www.righttradecapital.com /forex-demo-trading-account";

  const faqItems = [
    {
      question: "What is the best Forex trading account?",
      answer:
        "The Advantage Account is suited for Forex traders, since it provides tight spreads beginning at 0.0 and cheap fees.",
    },
    {
      question: " What sort of account do I need to trade Forex?",
      answer:
        "You may select from Advantage, Advantage Plus, or Advantage Stocks based on your trading objectives.",
    },
    {
      question: "Can I trade Forex without a broker?",
      answer:
        "No, you need a licensed Forex broker to access worldwide markets.",
    },
    {
      question: "How much is the transaction fee?",
      answer:
        "Depending on the kind of account you have, transaction costs may be different. However, with Advantage Plus and Advantage Stocks, you may trade without paying a commission.",
    },
  ];

  const withdrawSteps = [
    "Log in to MyRightTrade Capital and click the Withdraw page under ‘My Money’.",
    "Choose your desired payment method and click Withdraw.",
    "Choose the wallet or trading account you wish to take money out of.",
    "Fill in the following data and click Submit.",
  ];

  const supportedRegionData = {
    title: "Our Trading Accounts",

    regions: [
      {
        icon: <FaGlobeEurope size={40} className="text-[#FABF16]" />,
        title: "Advantage Stocks Account",
        points: [
          "Minimum Deposit: $200",
          "Spreads: Start at 6 cents",
          "Commissions: Zero",
          "Best For: Buying and selling stocks",
          "Trading Instruments: Leading global stocks",
        ],
      },
      {
        icon: <FaBuilding size={40} className="text-[#FABF16]" />,
        title: "Advantage Account",
        points: [
          "Minimum Deposit: $/€/£ 200",
          "Spreads: From 0.0",
          "Commissions:",
          "Best For: Professional traders",
          "Tools for trading:",
        ],
      },
      {
        icon: <FaExchangeAlt size={40} className="text-[#FABF16]" />,
        title: "Advantage Plus Account",
        points: [
          "Minimum Deposit: $/€/£ 200",
          "Spreads: From 1.5",
          "Commissions: Zero",
          "Best For: Beginners & intermediate traders",
          "Trading Instruments:",
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          MetaTrader 4 Trading Accounts | Best Forex Trading Account
        </title>

        <meta
          name="description"
          content="RightTrade Capital offers MT4 Advantage, Plus & Stocks accounts with fast execution, low spreads & zero commission trading."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="MetaTrader 4 Trading Accounts | Best Forex Trading Account"
        />
      </Helmet>

      <StatsSection
        title="MetaTrader 4 Trading"
        subtitle="Start trading on the most trusted platform in the world, which millions of traders across the world have selected."
        buttonText="Why MetaTrader 4?"
        image={bannerImage}
      />

      <FeatureSection
        title="Why you should use MetaTrader 4 (MT4)"
        paragraph="MetaTrader 4 (MT4) is one of the most popular online trading platforms because it is fast, flexible, and has powerful charting features.
 MT4 makes it easy to trade Forex, Commodities, Indices, and other things, no matter how experienced you are as a trader."
      />

      <SupportedRegions
        title={supportedRegionData.title}
        subtitle={supportedRegionData.subtitle}
        ctaText={supportedRegionData.ctaText}
        ctaNote={supportedRegionData.ctaNote}
        regions={supportedRegionData.regions}
      />

      <HowToWithdrawSection
        title="Four Easy Steps to Make a Withdrawal"
        steps={withdrawSteps}
      />

      <FaqSection faqs={faqItems} />
    </>
  );
};

export default MT4;
