import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../../components/common/StatsSection";
import FeatureSection from "../common/FeatureSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import FaqSection from "../common/FaqSection2";
import TrustCTASection from "../common/TrustCTASection";
import SupportedRegions from "../common/SupportedRegions";
import TextImageSection from "../common/TextImageSection";
import { FaGlobeEurope, FaBuilding, FaExchangeAlt } from "react-icons/fa";
import img from "../../assets/mobiletrading2.png";
import imgn from "../../assets/mobiletrading3.png";
import bannerImage from "../../assets/mobiletrading.png";

const MobileTrading = () => {
  const pageURL =
    "https://www.righttradecapital.com /advantage-trading-accounts";

  const supportedRegionData = {
    title: "Compare Our Trading Accounts",

    regions: [
      {
        icon: <FaGlobeEurope size={40} className="text-[#FABF16]" />,
        title: "Advantage Stocks",
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
          "Commissions: $3.5/lot FX, $2/Spot Metals, $2.5/CFDs, 0.03% Crypto, $0.02/lot ETFs/Stocks",
          "Best For: Professional traders",
          "Instruments: FX, Spot Metals, Indices, Commodities, Crypto, Stocks (MT5), ETFs (MT5)",
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
          "Instruments: FX, Spot Metals, Indices, Commodities, Crypto, Stocks (MT5), ETFs (MT5)",
        ],
      },
    ],
  };

  const faqItems = [
    {
      question: "What is the best account for forex?",
      answer:
        " The Advantage Plus Account is ideal for beginners due to commission-free trading and low spreads. Professionals may prefer the Advantage Account for raw spreads and minimal fees.",
    },
    {
      question: "What type of account do I need to trade forex?",
      answer:
        "Choose from Advantage, Advantage Plus, or Advantage Stocks based on your trading goals and experience.",
    },
    {
      question: "Can I trade forex without a broker?",
      answer:
        "No. You need a licensed broker like RightTrade Capital to access liquidity providers and place trades.",
    },
    {
      question: "How much is the transaction fee?",
      answer:
        "Fees depend on the account type. Advantage Plus and Advantage Stocks allow you to trade with zero commission, while the Advantage Account has low fees on selected instruments.",
    },
  ];

  const withdrawSteps = [
    "Log in to MyRightTrade Capital and open the Withdraw page under My Money.",
    "Select your payment method and click Withdraw.",
    "Choose the account or wallet you want to withdraw from.",
    "Fill in the required fields and click Submit.",
  ];

  return (
    <>
      <Helmet>
        <title>Advantage Trading Accounts | Best Trading Accounts</title>

        <meta
          name="description"
          content="Access markets anytime with RightTrade Capital app. Enjoy commission-free trading and zero spreads on FX, gold, and other instruments."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Advantage Trading Accounts | Best Trading Accounts"
        />
      </Helmet>

      <StatsSection
        title="Trade on the Go with the RightTrade Capital Trader App"
        subtitle="Access markets anytime with the mobile app. Enjoy commission-free trading and spreads from zero on FX, gold, and more, all on the move."
        buttonText="Learn More"
        image={bannerImage}
      />

      <FeatureSection
        title="Advantage Trading Accounts"
        paragraph="Our Advantage Account is popular among traders looking for zero spreads, commission-free Stock CFD trading, and fast execution. Enhance your skills with free learning resources and stay updated with expert market analysis to sharpen your trading edge."
      />

      <TextImageSection
        imgSrc={imgn}
        textcolor="text-white"
        title="Why Trade with RightTrade Capital?"
        paragraph="With RightTrade Capital, you get:"
        listItems={[
          "Mobile trading app for MT4 & MT5",
          "Commission-free trading and tight spreads",
          "Fast execution and secure accounts",
          "Access to global markets",
          "24/7 support and expert guidance",
        ]}
        bgColor="bg-[#121733]"
      />

      <HowToWithdrawSection
        title="Easy Withdrawals in 4 Steps"
        steps={withdrawSteps}
      />

      <TrustCTASection
        title="Choose the Trading Account That Fits You"
        subtitle="Select the trading account that matches your experience and goals. Trade confidently with the tools and platforms you prefer, wherever you are."
        buttonText="Choose account"
      />

      <FaqSection faqs={faqItems} />

      <SupportedRegions
        title={supportedRegionData.title}
        subtitle={supportedRegionData.subtitle}
        ctaText={supportedRegionData.ctaText}
        ctaNote={supportedRegionData.ctaNote}
        regions={supportedRegionData.regions}
      />

      <TrustCTASection
        title="Start Trading Today"
        subtitle="Still unsure which account is right for you? Use our guide to explore the best trading accounts and select the one that fits your trading style."
        buttonText="Open Account"
      />
    </>
  );
};

export default MobileTrading;
