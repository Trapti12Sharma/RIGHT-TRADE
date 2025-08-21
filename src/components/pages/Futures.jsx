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
import ImageTextSections from "../common/ImageTextSections";
import FeatureSection from "../common/FeatureSection";
import MarketViewSteps from "../common/MarketViewSteps";
import MarketViewFeatureSection from "../common/MarketViewFeatureSection";
import statsBg from "../../assets/futures1.png";
import fxTradingImg from "../../assets/currency3.png";
import commissionsImage from "../../assets/deposits1.png";
import globeImg from "../../assets/globe.svg";
import img from "../../assets/futures2.png";

const Futures = () => {
  const pageURLA =
    "https://www.righttradecapital.com/best-futures-trading-platform";

  const statsData = {
    title: "Start  Futures trading with RightTrade Capital",
    subtitle: "Trade the most popular  Futures majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      heading: "New Technology for Trading",
      description:
        "Our platform is built for speed, with prices that update in real time, high uptime, and lightning-fast execution.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "Many Tools",
      description:
        "With just one account, you can trade WTI crude oil, gold, S&P 500 futures, Bitcoin futures, agricultural products, and more.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Safety You Can Trust",
      description:
        "We follow strict regulations and use strong security measures to keep your money and transactions safe.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Flexible Trading Options",
      description:
        "Pick a contract size, expiration date, and level of leverage that fits your trading style.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Advanced Market Analysis",
      description:
        "Use economic calendars, technical indicators, and advanced charting to refine your strategies.",
    },
  ];

  const otherNotesData = {
    title: "Why Should You Buy Futures?",

    features: [
      {
        icon: "script",
        heading: "1. Use Leverage to Get More Market Exposure",
        paragraph:
          "If you use leverage, you can make big trades with just a small amount of the total value. This lets active traders take advantage of changes in the market by making both possible profits and losses bigger.",
      },
      {
        icon: "chart",
        heading: "2. Easy Long or Short",
        paragraph:
          "Futures make it easy to make money when the market goes up or down. This flexibility lets you quickly adjust to changes in the market.",
      },
      {
        icon: "bell",
        heading: "3. Access to Many Different Markets",
        paragraph:
          "You can trade commodities, stock indices, forex, and the top cryptocurrency markets all from one account on our futures trading platform.",
      },
      {
        icon: "calendar",
        heading: "4. Hedging",
        paragraph:
          "Companies, investors, and portfolio managers use futures to protect themselves from bad changes in the value of the assets they own.",
      },
      {
        icon: "layout",
        heading: "5. High Liquidity and Small Spreads",
        paragraph:
          "You can quickly enter and exit trades with RightTrade Capital because our platform offers low prices and deep liquidity.",
      },
    ],
  };

  const faqItems = [
    {
      question:
        "What makes RightTrade Capital the best futures trading platform?",
      answer:
        "We offer cutting-edge technology, low fees, global market access, and robust security.",
    },
    {
      question: "Can I trade crypto futures on your platform?",
      answer:
        "Yes. We are among the best futures trading platforms crypto traders prefer.",
    },
    {
      question: "Is trading futures risky?",
      answer:
        "Futures involve leverage and can be risky, but with proper risk management, they offer significant potential.",
    },
    {
      question: "How much do I need to start?",
      answer:
        "You can begin with a small margin deposit, but always trade responsibly.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best Futures Trading Platform</title>

        <meta
          name="description"
          content="Trade with precision on the best futures trading platform. Access commodities, indices, and crypto futures with advanced tools, low fees, and secure execution."
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta property="og:title" content="Best Futures Trading Platform" />
      </Helmet>

      <div className="w-full">
        {/*  1 Section */}
        <StatsSection {...statsData} />

        {/*  2 Section */}
        <FeatureSection
          title="Trade the Future with Confidence"
          paragraph="With the right tools, education, and best futures trading platform, the futures market offers endless opportunities. Whether you trade commodities, indexes, forex, or crypto, RightTrade Capital has everything you need to succeed.
          Join thousands of traders worldwide who trust us as the best futures trading platform – start your journey today."
        />

        <SideImageTextSection
          image={fxTradingImg}
          bgColor="bg-[#121733]"
          textcolor="text-white"
          title="What Does It Mean to Buy and Sell Futures?"
          paragraphTextColor="text-white"
          paragraphs={[
            "People buy and sell contracts that say they will buy or sell an asset at a set price on a set date in the future when they trade futures. Both parties agree to trade the asset at a later date instead of today. This is why futures are a great way to hedge, speculate, and spread your money around.You can trade on how the prices of these kinds of assets change on our best futures trading platform:",
          ]}
          listItems={[
            "Things like oil, gold, and farm goods.",
            "Equity indexes that tell you how well the stock market is doing.",
            "You can buy and sell digital assets with cryptocurrencies, which are always changing.",
            "Money on the international currency exchange market.",
          ]}
          description="RightTrade Capital helps you take advantage of the opportunities that futures offer, whether you want to protect yourself from price changes or guess where the market is going."
        />

        <MarketViewSteps
          title="RightTrade Capital: Trading Futures"
          steps={stepsData}
        />

        <ImageTextSections
          title="How to Trade Futures"
          description={`Here is a simple way to explain how futures contracts work:

        • Pick Your Asset – You can pick from a lot of different cryptocurrencies, foreign currencies, indices, and commodities.
        • Go Long or Short – If you think the price will go up, you can buy a futures position (long position). If you think the price will go down, you can sell a futures position (short position).
        • Use Margin Trading – Make bigger trades with less money.
        • Close or Hold to Expiry – You can either keep your position until the contract ends or close it before it does.`}
          image={commissionsImage}
          reverse={false}
          noButton={true}
          bgcolor="bg-[#121733]"
          textcolor="text-white"
          paragraph="Futures trading is more flexible and cheaper than spot trading because you can get exposure without having to actually deliver the asset."
        />

        {/* 5 (New Reusable) */}
        <SideImageTextSection
          image={img}
          bgColor="bg-[#fff]"
          textcolor="text-black"
          title="RightTrade Capital – The Safest Way to Enter the Futures Market"
          paragraphs={[
            "RightTrade Capital is the safest way to enter the futures market.Our cutting-edge and easy-to-use top futures trading platform helps traders make money in international markets. You can trade commodities, indexes, or even cryptocurrencies on our platform without having to own the asset itself. You can do this quickly, accurately, and freely.",
          ]}
          description="We offer the best trading experience because we have the newest technology, tight spreads, deep liquidity, and a wide range of markets. For both new and experienced traders, RightTrade Capital is one of the most trustworthy futures trading platform in the industry."
        />

        <MarketViewFeatureSection
          title={otherNotesData.title}
          description={otherNotesData.description}
          features={otherNotesData.features}
          bgcolor="bg-[#121733]"
          titlecolor="text-white"
        />

        {/* Section 6 */}
        <FaqSection faqs={faqItems} />
      </div>
    </>
  );
};

export default Futures;
