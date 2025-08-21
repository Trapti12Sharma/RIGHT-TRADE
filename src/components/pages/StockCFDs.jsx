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
import MarketViewSteps from "../common/MarketViewSteps";
import fxTradingImg from "../../assets/currency3.png";
import commissionsImage from "../../assets/deposits1.png";
import statsBg from "../../assets/stockCDF1.png";
import globeImg from "../../assets/globe.svg";
import home6 from "../../assets/sign-up.png";

const StockCFDs = () => {
  const pageURLA =
    "https://www.righttradecapital.com/best-stocks-for-cfd-trading";

  const statsData = {
    title: "Start Stock CFDs trading with RightTrade Capital",
    subtitle: "Trade the most popular Stock CFDs majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      heading: "Low Prices and Small Spreads",
      description:
        "The best stocks for CFD trading have prices that are easy to understand, low fees, and small spreads. This way, you can get the most out of your money.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "Advanced Trading Platforms",
      description:
        "Trade from anywhere with MetaTrader 4, MetaTrader 5, and our own web and mobile platforms. Get fast, reliable performance and advanced charting tools.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Fast Execution with Little Slippage",
      description:
        "Orders are filled in milliseconds, so you can take advantage of market opportunities instantly.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Safe and Regulated",
      description:
        "As a fully regulated broker, we put your money and trades first.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best Stocks for CFD Trading | RightTrade Capital</title>

        <meta
          name="description"
          content="Get the best stocks for CFD trading platform with RightTrade Capital. Access top-performing global stocks, competitive spreads, and expert trading tools."
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta
          property="og:title"
          content="Best Stocks for CFD Trading | RightTrade Capital"
        />
      </Helmet>

      {/*  1 Section */}
      <StatsSection {...statsData} />

      {/*  2 Section */}
      <FeatureSection
        title="Why Should You Use RightTrade Capital for Stock CFDs?"
        paragraph="You need more than just access to the market to find the best stock CFD broker. You need a partner who is trustworthy, open, and knows a lot about tech. That's exactly what RightTrade Capital does."
      />

      <SideImageTextSection
        image={fxTradingImg}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="What Does It Mean to Trade Stock CFDs?"
        paragraphTextColor="text-white"
        paragraphs={[
          "You can bet on how the prices of publicly traded companies will change with Contracts for Difference (CFDs) without having to own their shares. You just have to choose whether you think a stock's price will go up (go long) or down (go short), and then you can make money off the difference.",
        ]}
        listItems={[
          "If you think Apple's stock price will go up, you can open a long CFD position.",
          "If you think the price will go down, you can open a short CFD position.",
        ]}
        description="The difference between the opening and closing prices times the size of your trade is your profit or loss."
      />

      <MarketViewSteps
        title="How to Choose the Best Stocks for CFD Trading"
        steps={stepsData}
      />

      <SideImageTextSection
        image={fxTradingImg}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="What Traders Like About RightTrade Capital"
        paragraphTextColor="text-white"
        paragraphs={[
          "When picking the best stock CFD broker, it’s about more than low fees:",
        ]}
        listItems={[
          "Global Market Access – Trade the best stocks for CFD trading from the US, UK, EU, and Asia.",
          "Flexible Leverage – Adjust leverage to suit your risk appetite.",
          "Education & Insights – Learn to spot the best online stock CFD opportunities.",
          "Expert Support 24/5 – Multilingual team ready to help.",
        ]}
      />

      <ImageTextSections
        title="How to Use RightTrade Capital to Buy the Best Stocks for CFDs"
        description={`Are you ready to trade the currency pairs that have the most money in the world?
        Sign up for RightTrade Capital today and get instant access to:

        • Make an Account – It doesn't take long to sign up.
        • Put Money in Your Account – Multiple safe payment methods available.
        • Choose Your Stock – Browse our list of the best stocks for CFD trading.
        • Start a Position – Buy if you think the price will go up, sell (short) if you think it will go down.
        • Limit Your Risk – Use stop-loss and take-profit orders.
        • Monitor Your Trade – Close when your target is met or adjust as needed.`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
      />

      <SecurityRegulationSection
        image={home6}
        title="How to Deal with Risk When Trading CFDs on Stocks"
        introParagraph="CFD trading can be profitable, but leverage and volatile markets increase risk.
        That’s why we give you tools to protect yourself:"
        bulletPoints={[
          "Stop-loss orders",
          "Trailing stops",
          "Take-profit orders",
          "Negative balance protection",
        ]}
        closingParagraph="These safeguards will help you to trade the best stocks for CFD trading with confidence."
      />
    </>
  );
};

export default StockCFDs;
