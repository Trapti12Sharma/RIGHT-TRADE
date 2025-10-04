import React from "react";
import { Helmet } from "react-helmet";
import { FaDollarSign, FaBolt, FaGlobe, FaUniversity } from "react-icons/fa";
import StatsSection from "../common/StatsSection";
import ForexTradeSection from "../common/ForexTradeSection";
import WhyTradeForexSection from "../common/WhyTradeForexSection";
import CurrencyInfoSection from "../common/CurrencyInfoSection";
import VideoSection from "../common/VideoSection";
import FaqSection from "../common/FaqSection2";
import TrustCTASection from "../common/TrustCTASection";
import SideImageTextSection from "../common/SideImageTextSection";
import statsBg from "../../assets/forexs1.png";
import globeImg from "../../assets/globe.svg";
import img from "../../assets/forexs2.png";
import FeatureSection from "../common/FeatureSection";
import ImageTextSections from "../common/ImageTextSections";
import commissionsImage from "../../assets/deposits1.png";
import MarketViewSteps from "../common/MarketViewSteps";

const Forex = () => {
  const pageURLA = "https://www.righttradecapital.com/Forex-Trading-Platform";

  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      heading: "1. Prices that can't be beat",
      description:
        "With our Advantage Account, which is the best alternative for professional traders, you may get spreads as low as 0.0 pips on popular forex pairs like EUR/USD and USD/JPY.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "2. Better prices and faster execution",
      description:
        "Our forex trading software processes deals in milliseconds, so you always get the best price on the market when you trade forex online.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "3. A broker that people all throughout the world trust",
      description:
        "To trade safely and openly, choose a forex trading broker that is registered and regulated by the FSC of the Republic of Mauritius and the FCA of the UK.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "4. Safety of the whole fund",
      description:
        "Your money is completely separate from the company's accounts and is insured for up to $1 million, so you can always feel comfortable trading forex online.",
    },
  ];

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
      icon: <FaDollarSign size={40} className="text-[#FABF16]" />,
      title: "Major Currency pairings:",
      description:
        "The most traded pairings, such as EUR/USD, USD/JPY, EUR/JPY, and EUR/GBP.",
    },
    {
      icon: <FaBolt size={40} className="text-[#FABF16]" />,
      title: "Minor Currency pairings:",
      description:
        " Popular currency pairings that don't have the US dollar in them.",
    },
    {
      icon: <FaGlobe size={40} className="text-[#FABF16]" />,
      title: "Exotic Currency Pairs: ",
      description:
        "These are pairs of a major currency with a currency from a developing market.",
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
    title: "Open Your Account Now",
    paragraphs: [
      "It's easy and fast to start trading FX online with RightTrade Capital. You may start trading with just a few dollars or go all the way up to thousands. It's up to you.",
      "The world's biggest financial market, with a daily trading volume of over $5 trillion, lets you trade major, minor, and exotic currency pairings.",
      "FX online are split into three categories. Forex are the most traded pairs in the forex industry. They usually include the US dollar as one half of the pair, like the EUR/USD and the USD/JPY. Other commonly traded major pairs include EUR/JPY and the EUR/GBP.",
    ],

    image: globeImg,
  };

  // ✅ Fifth section data (Video)
  const videoData = {
    title: "What is Forex?",
    description:
      "Forex (or FX) means Foreign Exchange, the place where currencies are traded. To learn more, check out our complete guide to forex trading for beginners.",
  };

  //  Sixth section data

  const faqItems = [
    {
      question:
        "How much do I need to start trading forex with RightTrade Capital?",
      answer:
        "The minimum deposit depends on the account type you choose. It can be as low as $10. Check account details on the RightTrade Capital website.",
    },
    {
      question: "Which account type is best for trading forex?",
      answer:
        "RightTrade Capital offers various account types to suit different traders. Standard and ECN accounts are popular options depending on your strategy.",
    },
    {
      question: "Is forex trading safe?",
      answer:
        "Forex trading involves risks. It is important to trade with a regulated broker and have a solid risk management plan in place.",
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
    <>
      <Helmet>
        <title>Forex Trading Platform | Online FX Trading</title>

        <meta
          name="description"
          content="Start your forex journey with RightTrade Capital — a trusted broker offering low spreads, fast execution, and a powerful trading platform"
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta
          property="og:title"
          content="Forex Trading Platform | Online FX Trading"
        />
      </Helmet>

      <div className="w-full">
        {/*  1 Section */}
        <StatsSection {...statsData} />
        {/*  2 Section */}
        <FeatureSection
          title="Start forex trading with RightTrade Capital"
          paragraph="You may trade the most popular forex currency pairs with spreads as low as 0.0 pips. You can also use an innovative forex trading platform that is suitable for all types of traders, from beginners to experts."
        />
        {/*  3 Section */}
        <WhyTradeForexSection
          title="Different kinds of currency pairs"
          features={whyTradeFeatures}
        />

        <MarketViewSteps
          title="What makes forex the best choice?"
          steps={stepsData}
        />

        {/*  4 (New Reusable) */}
        <CurrencyInfoSection {...currencySectionData} />

        {/* 5 (New Reusable) */}
        <SideImageTextSection
          image={img}
          bgColor="bg-[#2a2d45]"
          textcolor="text-[#ffffff]"
          title="What is Forex and why do traders love it?"
          paragraphs={[
            "Forex, which stands for foreign exchange or FX trading, is the worldwide market where people buy and sell currencies. When you trade currencies, you always trade them in pairs. The first currency is the base currency, and the second is the quote currency. Traders purchase one currency and sell the other in order to make money when the value changes.",
          ]}
        />

        <ImageTextSections
          title="What traders like about online FX trading:"
          description={`

        • High volatility makes it possible to make money during economic and political events.

        • You may trade practically any time since the market is open 24 hours a day, five days a week.

        • It has the highest liquidity of any market in the world, which means that our forex trading platform lets you get in and out of trades quickl`}
          image={commissionsImage}
          reverse={false}
          noButton={true}
          bgcolor="bg-white"
          textcolor="text-[#121733]"
          paragraph="We have the tools and help you need to trade precious metals for short-term profits or to protect your money over the long term."
        />

        {/* Section 6 */}
        <FaqSection faqs={faqItems} />

        {/* Section 7 */}
        <TrustCTASection
          title="Begin Trading Now"
          subtitle="RightTrade Capital is the forex trading broker you can trust, whether you're new to online forex trading or an experienced trader making significant transactions.
Open your account today and see how different it is to trade on a forex trading platform that thousands of traders across the globe trust."
          buttonText="Open account"
        />
      </div>
    </>
  );
};

export default Forex;
