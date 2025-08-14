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
import FeatureSection from "../common/FeatureSection";
import SideImageTextSection from "../common/SideImageTextSection";
import ImageTextSections from "../common/ImageTextSections";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import fxTradingImg from "../../assets/currency3.png";
import statsBg from "../../assets/spotmetals1.png";
import commissionsImage from "../../assets/deposits1.png";
import globeImg from "../../assets/globe.svg";
import home6 from "../../assets/sign-up.png";

const SpotMetals = () => {
  const pageURLA = "https://www.righttradecapital.com/spot-metals-trading";

  // ✅ First section data
  const statsData = {
    title: "Start Spot Metals trading with RightTrade Capital",
    subtitle:
      "Trade the most popular Spot Metals majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  const faqItems = [
    {
      question: "What are the metals that are on the spot?",
      answer:
        " Spot metals are real metals that people buy and sell right away (at the spot price). Gold and silver are two of the most common examples.",
    },
    {
      question: "How do I buy and sell silver or gold online?",
      answer:
        "With RightTrade Capital, you can trade XAU/USD or XAG/USD on MT4 or MT5 without having to own the metals. You can open an account, add money to it, and start trading in just a few minutes.",
    },
    {
      question: "Is it safe to buy and sell precious metals?",
      answer:
        "There is always some risk involved in trading, but when the economy is shaky, metals are often seen as safe investments. When you trade, be sure to keep an eye on your risks.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Spot Metals Trading | Trade Gold & Silver Online</title>

        <meta
          name="description"
          content="Explore spot metals trading with RightTrade Capital. Access top spot metals trading instruments like gold and silver (XAU/USD, XAG/USD) etc."
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta
          property="og:title"
          content=" Spot Metals Trading | Trade Gold & Silver Online"
        />
      </Helmet>

      <div className="w-full">
        <StatsSection {...statsData} />

        <FeatureSection
          title="Trade Gold and Silver with Confidence in Spot Metals Trading"
          paragraph="When you do spot metals trading, you can buy and sell gold (XAU) and silver (XAG) without actually owning them. At RightTrade Capital, we give you access to spot metals trading tools with tight spreads, fast execution, and platforms that are among the best in the world. Today, you can take advantage of the metals market's volatility and spread your investments across different types of metals."
        />

        <SideImageTextSection
          image={fxTradingImg}
          bgColor="bg-[#121733]"
          textcolor="text-white"
          title="Things That Have an Impact on Precious Metals Trading"
          paragraphTextColor="text-white"
          paragraphs={[
            "We give traders everything they need to trade swiftly and correctly on the global currency markets at RightTrade Capital.One of the most fundamental things to know about trading forex is how the major currency pairings function.",
          ]}
          listItems={[
            "Rates of Interest : Gold and silver are more appealing when interest rates are low because they don't pay interest.",
            "Inflation : Traders often look for safe-haven assets like gold when inflation rises.",
            "Geopolitical Risk : Wars, conflicts, and instability can cause the prices of metals to rise.",
            "Industry Demand : Especially for silver, which is used in electronics, solar panels, and medical technology.",
          ]}
        />

        <ImageTextSections
          title="What are the benefits of trading precious metals at RightTrade Capital?"
          description={`We give you premium access to the most liquid spot metals trading tools, such as XAU/USD (Gold/US Dollar) and XAG/USD (Silver/US Dollar). This is what makes us different:


        • Fast execution and small spreads
        • Leverage as high as 500:1
        • MT4 and MT5 are platforms for professional trading.
        • You can get free charts and indicators that show you what's going on right now.
        • Trading safely with full honesty`}
          image={commissionsImage}
          reverse={false}
          noButton={true}
          bgcolor="bg-white"
          textcolor="text-[#121733]"
          paragraph="We have the tools and help you need to trade precious metals for short-term profits or to protect your money over the long term."
        />

        <SecurityRegulationSection
          image={home6}
          title="The pros of trading spot metals"
          introParagraph="There are a lot of good reasons to trade gold and silver:"
          bulletPoints={[
            "Different kinds of investments Metals are great for balancing risk in your whole trading plan.",
            "Keep Yourself Safe from Inflation When money loses value, precious metals stay valuable.",
            "A lot of money coming in Because there is a lot of demand around the world, trades happen quickly and with little slippage.",
            "Affecting the global market The prices of gold and silver are affected by central banks, inflation, geopolitical tensions, and demand from industry. This gives you a lot of chances.",
          ]}
        />

        <SideImageTextSection
          image={fxTradingImg}
          bgColor="bg-[#121733]"
          textcolor="text-white"
          title="Trade the Most Popular Tools for Spot Metals"
          paragraphTextColor="text-white"
          paragraphs={[
            "RightTrade Capital has a lot of important spot metals trading pairs, like:",
          ]}
          listItems={[
            "XAU/USD: Gold / US Dollar The pair that has the most liquidity and is traded the most",
            "XAG/USD: Silver / US Dollar",
            "XAU/EUR: Gold / Euro More volatility, lower cost to get in. Traders in the Eurozone like this pair a lot.",
            "XAG/EUR: Silver / Euro Trading silver for euros",
          ]}
        />

        <ImageTextSections
          title="Start Trading Spot Metals Right Now"
          description={`When you open a live account with RightTrade Capital,


        • Access to major gold and silver pairs
        • Spreads and prices that are as good as those offered to institutions
        • Fast, reliable execution
        • Full support and learning tools`}
          image={commissionsImage}
          reverse={false}
          noButton={true}
          bgcolor="bg-white"
          textcolor="text-[#121733]"
          paragraph="Sign up and start trading right away to take advantage of changes in the prices of metals all over the world.
"
        />

        <FaqSection faqs={faqItems} />
      </div>
    </>
  );
};

export default SpotMetals;
