import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../common/StatsSection";
import SimpleCenteredTextSection from "../common/SimpleCenteredTextSection";
import ImageWithTextCenterSection from "../common/ImageWithTextCenterSection";
import ForexTradeSection from "../common/ForexTradeSection";
import ImageLeftTextRightSection from "../common/ImageLeftTextRightSection";
import ImageTextSections from "../common/ImageTextSections";
import VideoSection from "../common/VideoSection";
import FaqSection from "../common/FaqSection2";
import TrustCTASection from "../common/TrustCTASection";
import AwardsSection from "../common/AwardsSection";
import ContactOptions from "../common/ContactOptions";
import FeatureSection from "../common/FeatureSection";
import SideImageTextSection from "../common/SideImageTextSection";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import MarketViewSteps from "../common/MarketViewSteps";
import statsBg from "../../assets/currency1.png";
import diagramImg from "../../assets/currency2.png";
import fxTradingImg from "../../assets/currency3.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";
import commissionsImage from "../../assets/deposits1.png";
import home6 from "../../assets/sign-up.png";

const MajorCurrencyPairs = () => {
  const pageURLA =
    "https://www.righttradecapital.com/major-currency-pairs-in-forex";

  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      heading: "Big currency pairs with small spreads",
      description:
        "In forex, we provide tight spreads on all major currencies. This means you get to keep more of your earnings on each deal.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "Quick execution",
      description:
        "You may trade the most volatile and liquid main forex pairs by volume straight away, thanks to lightning-fast execution speeds.This is perfect for folks who do day trading and scalp trading.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Tools for Advanced Trading",
      description:
        "You may see quotations, sophisticated charts, and smart indicators for every major currency pair in real time.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "You can trust this liquidity",
      description:
        "We acquire liquidity from top-tier institutions, which helps us offer you the best pricing on all major currency pairings in forex.",
    },
  ];

  const statsData = {
    title: "Major currency pairs: most traded currencies",
    subtitle:
      "Find out everything you need to know about trading currencies, including how it works, the major currency pairs and the most traded currencies globally.",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  const forexTradeData = {
    title: "Which currency pairs are the most important in Forex?",
    description: `In forex, the US dollar (USD) is always on one side of a major currency pair. These pairs are made up of the strongest and most stable currencies in the world.These pairs are the most popular in the forex market and around the world.`,
    benefits: [
      "If you're a beginning trader who wants to minimize your risk and acquire tighter spreads, it's a smart idea to focus on key currency pairings in forex.",
      "Technical traders who study how prices have changed over time",
      "People who buy and sell things and pay attention to news about the international economy and interest rates",
      "High-frequency traders who want trades to happen rapidly and with a lot of volume",
    ],
  };

  const currencyDiagramSection = {
    title: "How do currency pairs work?",
    description:
      "A currency pair is a combination of two currencies that are traded against each other. Some of the most popular pairs to trade include the euro against the US dollar (EUR/USD), the US dollar against the Japanese yen (USD/JPY) and the British pound against the US dollar (GBP/USD).",
    image: diagramImg,
  };

  return (
    <>
      <Helmet>
        <title>
          Major Currency Pairs in Forex | Trade Major Forex Pairs by Volume
        </title>

        <meta
          name="description"
          content="Explore  the most traded major currency pairs in forex with RightTrade Capital. Trade top major currencies in forex like EUR/USD, USD/JPY, and more.."
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta
          property="og:title"
          content="Major Currency Pairs in Forex | Trade Major Forex Pairs by Volume"
        />
      </Helmet>

      <StatsSection {...statsData} />

      <FeatureSection
        title="Major Currency Pairs in Forex Trading  RightTrade Capital"
        paragraph="At RightTrade Capital, we empower traders to navigate the global currency markets with ease and precision. One of the most essential foundations of forex trading is understanding the major currency pairs in forex — these are the most traded and most liquid combinations in the market. Whether you’re a beginner or an advanced trader, focusing on these pairs can give you access to tighter spreads, higher liquidity, and more consistent volatility."
      />

      <SideImageTextSection
        image={fxTradingImg}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="RightTrade Capital: The Most Important Currency Pairs for Forex Trading"
        paragraphTextColor="text-white"
        paragraphs={[
          "We give traders everything they need to trade swiftly and correctly on the global currency markets at RightTrade Capital.One of the most fundamental things to know about trading forex is how the major currency pairings function.",
        ]}
        description=" People trade these pairs the most, and the market has the most money in them.If you focus on these pairings, you'll obtain tighter spreads, higher liquidity, and more steady volatility, no matter how long you've been trading."
      />

      <ForexTradeSection {...forexTradeData} />

      <ImageWithTextCenterSection {...currencyDiagramSection} />

      <ImageTextSections
        title="RightTrade Capital lets you trade major currency pairs"
        description={`Are you ready to trade the currency pairs that have the most money in the world?
        Sign up for RightTrade Capital today and get instant access to:

        • Big forex pairs with modest spreads
        • MetaTrader 4 and 5 have won prizes
        • Things that can help you understand how to trade and cope with risk
        • Support for more than one language and protection for your money`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
      />

      <SideImageTextSection
        image={fxTradingImg}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="Important currency pairs and how they effect the economy"
        paragraphTextColor="text-white"
        paragraphs={[
          "The economics, interest rates, and politics of a country all have an effect on its major currency pairs.",
        ]}
        listItems={[
          "For instance, the choices made by the ECB and the Fed have a considerable effect on EUR/USD.",
          "The USD/JPY pair moves in response to U.S. inflation data and BOJ policies.",
          "News concerning Brexit and rising prices in the UK can have an effect on the GBP/USD.",
        ]}
        description="RightTrade Capital's Market Insights will help you stay up to date on the news and make better decisions when trading the most popular FX pairs by volume."
      />

      <MarketViewSteps
        title="Why should you choose RightTrade Capital to trade the most important currency pairs?"
        steps={stepsData}
      />

      <SecurityRegulationSection
        image={home6}
        title="The Advantages of Trading Major Currencies in Forex"
        introParagraph="There are a lot of beneficial benefits about trading big currencies in forex:"
        bulletPoints={[
          "A lot of money: Orders are easier to fill, and there is less slippage.",
          "Lower transaction costs: Transactions cost less when spreads are lower.",
          "Predictable volatility: Obvious prospects for technical analysis",
          "Plenty of information: Like economic news and reports that assist you guess how prices may change",
          "Strategic flexibility: Works for scalping, day trading, swing trading, and long-term investing.",
        ]}
      />
    </>
  );
};

export default MajorCurrencyPairs;
