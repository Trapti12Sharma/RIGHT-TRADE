import React from "react";
import { Helmet } from "react-helmet";
import { FaDollarSign, FaBolt, FaGlobe, FaUniversity } from "react-icons/fa";
import StatsSection from "../common/StatsSection";
import FeatureSection from "../common/FeatureSection";
import ImageTextSections from "../common/ImageTextSections";
import MarketViewFeatureSection from "../common/MarketViewFeatureSection";
import SideImageTextSection from "../common/SideImageTextSection";
import MarketViewSteps from "../common/MarketViewSteps";
import FourStepSection from "../common/FourStepSection";
import ComparisonTable from "../common/ComparisonTable";
import statsBg from "../../assets/indices1.png";
import commissionsImage from "../../assets/deposits1.png";
import img from "../../assets/futures2.png";

const CFDOnIndices = () => {
  const pageURLA = "https://www.righttradecapital.com/cfd-index-trading";

  const comparisonData = [
    { feature: "Ownership", traditional: "Yes", cfd: "No" },
    { feature: "Leverage", traditional: "No", cfd: "Yes" },
    { feature: "Direction", traditional: "Long only", cfd: "Long or short" },
    { feature: "Market Hours", traditional: "Limited", cfd: "Extended" },
    { feature: "Capital Needed", traditional: "Higher", cfd: "Lower" },
  ];

  const steps1 = [
    {
      number: 1,
      description: "Open your free trading account.",
    },
    {
      number: 2,
      description: "Securely verify your identity.",
    },
    {
      number: 3,
      description: "Fund your account with a convenient method.",
    },
    {
      number: 4,
      description: "Pick your favorite index.",
    },
    {
      number: 5,
      description: "Start trading confidently on MT4 or MT5.",
    },
  ];

  const statsData = {
    title: "Start CFD on Indices trading with RightTrade Capital",
    subtitle:
      "Trade the most popular CFD on Indices majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  const otherNotesData = {
    title: "CFD Index Trading Strategy: Key Approaches",

    features: [
      {
        icon: "script",
        heading: "1. Going with the Flow",
        paragraph:
          "Identify upward or downward trends and open positions accordingly. Use technical indicators like Moving Averages and MACD to verify.",
      },
      {
        icon: "chart",
        heading: "2. Trading on Breakouts",
        paragraph:
          "Look for moments when an index breaks above or below a normal range. This is a signal for strong movements and quick gains.",
      },
      {
        icon: "bell",
        heading: "3. Trading in a Range",
        paragraph:
          "If an index moves within a defined range, traders can buy low and sell high. Bollinger Bands and RSI work great here.",
      },
      {
        icon: "calendar",
        heading: "4. News-Based Trading",
        paragraph:
          "Big news like interest rate changes or political shifts affect markets. Use a financial calendar to prepare your trades accordingly.Every cfd index trading strategy must also include stop-losses, proper position sizing, and emotional control.",
      },
    ],
  };

  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      heading: "One Trade to Lower Risk",
      description:
        "An index is a list of the best companies in a certain field or country. This built-in variety makes it less likely that you'll only own one stock.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "Leverage Can Help You Find More Opportunities",
      description:
        "You can open bigger positions with CFD index trading than you could with just your initial capital. Leverage can help you make more money, but it can also increase your losses. You have to be very careful with it.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Go Long or Short",
      description:
        "The markets can change your positions. You can change your strategy to fit the market when you trade CFD indexes. This means you can make money no matter what the market is doing.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Get Into the World Market",
      description:
        "You can trade indexes from major economies like the U.S., the U.K., Europe, Asia, and Australia. You can reach a lot of different markets from one platform.",
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
        <StatsSection {...statsData} />

        <FeatureSection
          title="Why Use Index CFDs in Volatile Markets?"
          paragraph="In uncertain economic times, indices CFDs offer a more stable option than individual stocks by reflecting the performance of an entire sector.
          Tools like leverage and short-selling allow traders to act fast and profit in rising or falling markets."
        />

        <ImageTextSections
          title="Benefits of CFD Investing in Indices with RightTrade Capital"
          description={`Trading CFD investing indices with RightTrade Capital offers several perks:

        • Regulated and Secure: Your funds and data are protected under strict regulations.
        • Fast Execution: Trade with minimal lag or slippage.
        • Tight Spreads: Low trading costs keep you competitive.
        • Advanced Platforms: Choose between MetaTrader 4 and 5 with powerful tools and automation features.
        • Learning & Support: Access 24/5 expert help, free webinars, and trading guides.`}
          image={commissionsImage}
          reverse={false}
          noButton={true}
          bgcolor="bg-[#121733]"
          textcolor="text-white"
          paragraph="Futures trading is more flexible and cheaper than spot trading because you can get exposure without having to actually deliver the asset."
        />

        <ComparisonTable
          title="Traditional Investing vs CFD Index Trading"
          data={comparisonData}
          note="is ideal for active traders seeking flexibility and lower upfront costs."
        />

        <MarketViewSteps title="Why Should You Trade CFDs?" steps={stepsData} />

        <SideImageTextSection
          image={img}
          bgColor="bg-[#121733]"
          textcolor="text-white"
          title="Common Indexes for Trading"
          paragraphTextColor="text-white"
          paragraphs={[
            "You can trade CFDs on some of the most important indexes, like:",
          ]}
          listItems={[
            "Nasdaq 100 (US Tech 100) – Tracks the stock prices of 100 of the biggest tech companies in the US.",
            "S&P 500 – A list of the 500 best U.S. companies and how well they are doing.",
            "Dow Jones Industrial Average (DJIA) – 30 major U.S. companies across different industries.",
            "FTSE 100 (UK 100) – Lists the 100 largest companies on the London Stock Exchange.",
          ]}
        />

        <SideImageTextSection
          image={img}
          bgColor="bg-[#fff]"
          textcolor="text-black"
          title="Managing Risk in CFD Index Trading"
          paragraphs={[
            "Trading CFDs can be rewarding, but risk management is key:",
          ]}
          listItems={[
            "Always use a stop-loss.",
            "Never risk more than 1–2% of your capital per trade.",
            "Avoid over-leveraging.",
            "Diversify your trades.",
            "Stay updated with daily market news.",
          ]}
          description="Following a solid CFD index trading strategy along with disciplined risk control is essential for long-term success."
        />

        <MarketViewFeatureSection
          title={otherNotesData.title}
          description={otherNotesData.description}
          features={otherNotesData.features}
          bgcolor="bg-[#121733]"
          titlecolor="text-white"
        />

        <SideImageTextSection
          image={img}
          bgColor="bg-[#fff]"
          textcolor="text-black"
          title="Who Should Trade Index CFDs?"
          paragraphs={["CFD index trading is great for:"]}
          listItems={[
            "Day Traders: Capitalize on intraday movements.",
            "Swing Traders: Hold for several days based on trend patterns.",
            "Hedgers: Protect existing investments.",
            "New Traders: Diversify without buying individual stocks.",
          ]}
        />

        <FourStepSection
          title="How to Start CFD Index Trading with RightTrade Capital"
          steps={steps1}
          bgcolor="bg-[#121733]"
        />

        <FeatureSection
          title="In the End: Take Advantage of the Power of CFD Index Trading"
          paragraph="CFD index trading is a great way to protect your investments, explore new markets, or simply understand the rhythm of global economies.
          With the right broker, tools, and cfd index trading strategy, you can confidently trade indices and take control of your financial future.
          RightTrade Capital gives you all the tools to succeed — from learning about cfd investing indices to executing expert-level trades."
        />
      </div>
    </>
  );
};

export default CFDOnIndices;
