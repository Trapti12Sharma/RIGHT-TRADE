import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../../components/common/StatsSection";
import SupportedRegions from "../common/SupportedRegions";
import FeatureSection from "../common/FeatureSection";
import SideImageTextSection from "../common/SideImageTextSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import ImageTextSections from "../common/ImageTextSections";
import FaqSection from "../common/FaqSection2";
import TrustCTASection from "../common/TrustCTASection";
import { FaGlobeEurope, FaBuilding, FaExchangeAlt } from "react-icons/fa";
import img from "../../assets/account2.png";
import commissionsImage from "../../assets/deposits1.png";
import imgn from "../../assets/account3.png";
import bannerImage from "../../assets/leverageandmargin1.png";

const LeverageAndMargin = () => {
  const supportedRegionData = {
    title: "Compare Our Trading Accounts:",

    regions: [
      {
        icon: <FaGlobeEurope size={40} className="text-[#FABF16]" />,
        title: "Advantage Stocks",
        points: [
          "Minimum Deposit: $200",
          "From 6 cents, spreads",
          "No commissions",
          "Best For: People who trade stocks",
          "Trading Instruments: Top stocks throughout the world",
        ],
      },
      {
        icon: <FaBuilding size={40} className="text-[#FABF16]" />,
        title: "Advantage",
        points: [
          "Minimum Deposit: $/€/£200",
          "From 0.0 for spreads",
          "Commissions:",
          "Best For: Professional traders",
          "Trading Instruments: FX, Spot Metals, Index CFDs, Commodity CFDs, Cryptocurrency CFDs, Stocks CFDs (MT5), and ETFs (MT5)",
        ],
      },
      {
        icon: <FaExchangeAlt size={40} className="text-[#FABF16]" />,
        title: "Advantage Plus",
        points: [
          "Minimum Deposit: $/€/£200",
          "From 1.5, spreads",
          "No commissions",
          "Best For: New and experienced traders",
          "Trading Instruments: FX, spot metals, index CFDs, commodity CFDs, cryptocurrency CFDs, stocks CFDs (MT5), and ETFs (MT5)",
        ],
      },
    ],
  };

  const faqItems = [
    {
      question: "Which account is ideal for trading Forex?",
      answer:
        "Advantage Plus is great for novices, whereas Advantage is great for skilled traders since it has raw spreads and reduced costs.",
    },
    {
      question: "What kind of account do I need to trade Forex?",
      answer:
        "Pick an account with minimal spreads, quick execution, and the right amount of leverage and margin for you.",
    },
    {
      question: "Is it possible to trade Forex without a broker?",
      answer:
        "No. You need a licensed broker like RightTrade Capital to get to liquidity providers and make transactions.",
    },
    {
      question: "What is the cost of the transaction?",
      answer:
        "Different types of accounts have different fees. Advantage Plus lets you trade without paying any fees, whereas Advantage has low commissions and raw spreads.",
    },
  ];

  const withdrawSteps = [
    "Under My Money, log in to MyRightTrade Capital and go to the Withdraw page.",
    "Choose how you want to pay and then click Withdraw.",
    "Pick the wallet or account you wish to take money out of.",
    "Complete the relevant information and click Submit.",
  ];

  const pageURL =
    "https://www.righttradecapital.com /advantage-trading-accounts";

  return (
    <>
      <Helmet>
        <title>Leverage & Margin Requirements | Smarter Forex Trading</title>

        <meta
          name="description"
          content="Learn leverage and margin requirements with RightTrade Capital. Trade Forex confidently and manage risk effectively for smarter trading decisions."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Leverage & Margin Requirements | Smarter Forex Trading"
        />
      </Helmet>

      <StatsSection
        title="Leverage and margin requirements"
        subtitle="Read our terms for leverage and margin to make smart trades and investments."
        buttonText="Learn More"
        image={bannerImage}
      />

      <FeatureSection
        title="Pick Your Account and Begin Trading"
        paragraph="Do you not know which account is ideal for you? Our guide will help you look at several accounts and choose the best one. Make sure you know the margin and leverage requirements for safer trading."
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#121733]"
        textcolor="text-[#ffffff]"
        title="Accounts for Advantage Trading"
        paragraphs={[
          "Traders prefer our Advantage accounts because they have no spreads, no commissions on Stock CFD trading, and very quick execution. Use free instructional materials to improve your trading methods and stay ahead of the market with professional analysis and updates.",
        ]}
        note="Advantage gives you more."
      />

      <ImageTextSections
        title="Advantage Plus Trading Accounts"
        description={`Advantage Plus accounts provide all the features of Advantage accounts but with no fees. You may trade hundreds of instruments on either MetaTrader 4 or MetaTrader 5. Spreads start at 1.5 pips, which lets you trade without spending too much money while still following the rules for leverage and margin.

`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-black"
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
      <TrustCTASection
        title="Choose your account and start trading"
        subtitle="Still not sure which account is right for you? Check out our handy guide to choosing the best trading account to explore our range of accounts and discover which fits you best."
        buttonText="Choose account"
      />

      <FaqSection faqs={faqItems} />

      <TrustCTASection
        title="Come with us"
        subtitle="You may start trading with RightTrade Capital immediately with complete confidence, knowing exactly how much leverage and margin you need."
        buttonText="Open Account"
      />
    </>
  );
};

export default LeverageAndMargin;
