import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../../components/common/StatsSection";
import FeatureSection from "../common/FeatureSection";
import SideImageTextSection from "../common/SideImageTextSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import ImageTextSections from "../common/ImageTextSections";
import SupportedRegions from "../common/SupportedRegions";
import FaqSection from "../common/FaqSection2";
import TrustCTASection from "../common/TrustCTASection";
import bannerImage from "../../assets/platformoverview1.png";
import img from "../../assets//platformoverview2.png";
import commissionsImage from "../../assets/deposits1.png";
import { FaGlobeEurope, FaBuilding, FaExchangeAlt } from "react-icons/fa";

const PlatformsOverview = () => {
  const pageURL = "https://www.righttradecapital.com/trusted-forex-broker";

  const faqItems = [
    {
      question: "What is the best account for Forex trading?",
      answer:
        "The Advantage Plus Account is great for beginners since it doesn’t charge fees and is easy to use. For more experienced traders, the Advantage Account features raw spreads and low fees.",
    },
    {
      question: " What sort of account do I need to trade Forex?",
      answer:
        "You need a forex trading account that enables you trade on markets all around the globe, has tight spreads, and makes deals promptly. We provide accounts for traders with different degrees of experience.",
    },
    {
      question: "Can you trade Forex without a broker?",
      answer:
        "No. You need a licensed broker like us to connect with liquidity providers and do business.",
    },
    {
      question: "How much does the transaction cost?",
      answer:
        "It all depends on the kind of account you have. Advantage Plus doesn’t charge a commission, however Advantage does have raw spreads and other fees.",
    },
  ];

  const supportedRegionData = {
    title: "Compare Our Trading Accounts",
    subtitle:
      "Account type – Minimum amount to deposit – Spreads, commissions, and best for instruments",

    regions: [
      {
        icon: <FaGlobeEurope size={40} className="text-[#FABF16]" />,
        title: "Advantage Shares",
        points: ["$200 from 6 cents", "No stocks, no traders, no benefit"],
      },
      {
        icon: <FaBuilding size={40} className="text-[#FABF16]" />,
        title: "Advantage",
        points: [
          "$200 from 0.0",
          "$3.5 per lot for FX, $2 for commodities, $2.5 for CFDs, 0.03% for crypto, and $0.02 for ETFs/stocks",
          "Advanced traders use raw spreads CFDs for stocks (MT5), ETFs (MT5), FX, metals, indices, commodities, and crypto",
        ],
      },
      {
        icon: <FaExchangeAlt size={40} className="text-[#FABF16]" />,
        title: "Advantage Plus",
        points: [
          "$200 from 1.5",
          "Zero",
          "Traders who want to trade without paying a cost",
          "MT5: equities, ETFs, FX, metals, indexes, commodities, and crypto",
        ],
      },
    ],
  };

  const withdrawSteps = [
    "Log in to MyRightTrade Capital. Then, click on the Withdraw page under My Money.",
    "Choose a payment method and click “Withdraw.”",
    "Pick the account or wallet you wish to withdraw money out of.",
    "Fill out the required fields and click Submit.",
  ];
  return (
    <>
      <Helmet>
        <title>MetaTrader Trading Platforms | MT5 Trading Platforms</title>

        <meta
          name="description"
          content="Discover the key differences between MT4 and MT5 platforms. Learn which trading platform suits your strategy with insights on features, tools, and benefits."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="MetaTrader Trading Platforms | MT5 Trading Platforms"
        />
      </Helmet>

      <StatsSection
        title="MetaTrader trading platforms"
        subtitle="Explore the differences between MetaTrader 4 and MetaTrader 5"
        buttonText="Learn more"
        image={bannerImage}
      />

      <FeatureSection
        title="MetaTrader Trading Platforms"
        paragraph="Find the MetaTrader trading platform that works best for you and learn how to utilise it.You can use both MetaTrader 4 (MT4) and MetaTrader 5 (MT5) to quickly execute trades, see charts in real time, and use advanced trading tools. You may select MT4 since it is easy to use or MT5 because it has more advanced features."
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="Advantage Trading Accounts"
        paragraphTextColor="text-white"
        paragraphs={[
          "The Advantage Account is for traders who want no spreads, low costs, and orders that are completed immediately away. You can buy and sell stocks, commodities, indices, bitcoin, and Forex at reasonable prices and with better tools.",
        ]}
        listItems={[
          "No spreads make trading easier to understand",
          "No commission on stock CFDs",
          "Very quick execution with no additional costs",
          "Free school and expert market research to help you become better at what you do",
        ]}
        description="It’s hardly surprising that so many traders utilise the Advantage account to stay ahead of the market."
      />

      <ImageTextSections
        title="Advantage Plus Trading Accounts"
        description={`Advantage Plus will help you improve your trading. You may trade on MT4 or MT5 and use hundreds of tools without paying any fees.

        • There are no fees for trading (spreads start at 1.5 pips).
        • You can trade equities, ETFs, Forex, indices, commodities, and crypto.
        • Good for traders who desire simple, low-cost trading.
        • It is easy to use and works for both beginners and professionals.`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-[#fff]"
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
        title="Four Simple Steps to Take Money Out"
        steps={withdrawSteps}
      />

      <TrustCTASection
        title="Choose an Account and Begin Trading"
        subtitle="Are you not sure which account is best?
        Use our guide to look at several accounts and choose the one that works best for your trade.We have the right account for you, whether you want raw spreads with fees or no fees at all."
      />

      <FaqSection faqs={faqItems} />
    </>
  );
};

export default PlatformsOverview;
