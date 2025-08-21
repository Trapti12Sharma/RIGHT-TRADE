import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../../components/common/StatsSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import FaqSection from "../common/FaqSection2";
import TrustCTASection from "../common/TrustCTASection";
import ImageTextSections from "../common/ImageTextSections";
import SupportedRegions from "../common/SupportedRegions";
import commissionsImage from "../../assets/deposits1.png";
import bannerImage from "../../assets/demo1.png";
import { FaGlobeEurope, FaBuilding, FaExchangeAlt } from "react-icons/fa";

const DemoAccounts = () => {
  const pageURL =
    "https://www.righttradecapital.com /forex-demo-trading-account";

  const faqItems = [
    {
      question: " What kind of account is better for trading FX?",
      answer:
        "What you wish to accomplish will determine which account is best for you. If you're just starting off, pick Advantage Plus so you don't have to pay any fees. Active traders often prefer the Advantage Account since it has lower fees and raw spreads.",
    },
    {
      question: "What kind of account do I need to trade forex?",
      answer:
        "You need a forex trading account that enables you trade in markets all around the globe, has small spreads, and makes deals promptly. RightTrade Capital provides a lot of different types of accounts to meet your requirements.",
    },
    {
      question: "Can you trade FX without a broker?",
      answer:
        "You need a registered broker like RightTrade Capital to go to forex liquidity providers and place transactions.",
    },
    {
      question: "How much does the transaction cost?",
      answer:
        "The costs of transactions depend on the kind of account. Advantage Plus doesn't charge a fee, however Advantage accounts do offer raw spreads and minimal commissions on certain goods.",
    },
  ];

  const withdrawSteps = [
    "After checking in to MyRightTrade Capital, click on 'My Money' and then 'Withdraw'.",
    "Click 'Withdraw' once you choose how you wish to pay.",
    "Choose the account or wallet you wish to take money from.",
    "Fill in the required fields and hit 'Submit'.",
  ];

  const supportedRegionData = {
    title: "Check Out All the Many Kinds of Trading Accounts We Offer",

    ctaText: "Log In Now",
    regions: [
      {
        icon: <FaGlobeEurope size={40} className="text-[#FABF16]" />,
        title: "Stocks that have an Edge",
        points: [
          "Minimum deposit: $200",
          "Spreads: Starting at 6 cents",
          "Commissions: No commissions",
          "Best for: People who buy and sell stocks",
        ],
      },
      {
        icon: <FaBuilding size={40} className="text-[#FABF16]" />,
        title: "Benefit",
        points: [
          "Minimum deposit: $/€/£200",
          "Spreads: 0.0 to 0.0",
          "Commissions:",
          "Best for: Active traders who work",
          "Tools for Trading:",
        ],
      },
      {
        icon: <FaExchangeAlt size={40} className="text-[#FABF16]" />,
        title: "Plus",
        points: [
          "Minimum deposit: $/€/£200",
          "Spreads: The spreads start at 1.5",
          "Commissions: No fees",
          "Best for: People who are new to trading",
          "Tools for Trading:",
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Forex Demo Trading Account | Trade Global Markets</title>

        <meta
          name="description"
          content="Trade forex, stocks, indices, commodities & crypto online with fast execution, low spreads, and secure trading experience."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Forex Demo Trading Account | Trade Global Markets"
        />
      </Helmet>

      <StatsSection
        title="Forex Demo Trading Account for Free"
        subtitle="You may practice and become better at trading with our free trial trading account."
        buttonText="Open Demo account"
        note="Make a Practice Account"
        image={bannerImage}
      />

      <ImageTextSections
        title="Why Choose a Demo Account?"
        description={`Try out the markets without putting your money at risk. With our free forex demo account, you may use the MT4 and MT5 platforms to practice, look at real-time market data, and try out your trading strategies with fake money.


        • Learn how to read charts
        • Recognize candlestick patterns
        • Use technical indicators to your advantage`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
        paragraph="Take your time and develop your confidence before you start trading for real. The demo account is ideal for both novice and experienced traders since it lets you practice trading without risking your own money."
      />

      <SupportedRegions
        title={supportedRegionData.title}
        subtitle={supportedRegionData.subtitle}
        ctaText={supportedRegionData.ctaText}
        ctaNote={supportedRegionData.ctaNote}
        regions={supportedRegionData.regions}
      />

      <TrustCTASection
        title="Join Us"
        subtitle="RightTrade Capital is the place to go if you want to start trading smarter now."
      />

      <HowToWithdrawSection
        title="Four Simple Steps to Take Money Out"
        steps={withdrawSteps}
      />

      <FaqSection faqs={faqItems} />
    </>
  );
};

export default DemoAccounts;
