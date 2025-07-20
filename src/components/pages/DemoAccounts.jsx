import React from "react";
import StatsSection from "../../components/common/StatsSection";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import WhyTradeWithFXTM from "../common/WhyTradeWithFXTM";
import FaqSection from "../common/FaqSection2"; // ⬅️ new import
import AwardsSection from "../common/AwardsSection";
import TrustCTASection from "../common/TrustCTASection";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import TradingAccountComparison from "../common/TradingAccountComparison";
import bannerImage from "../../assets/demo1.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";

const DemoAccounts = () => {
  const accountData = [
    {
      name: "Advantage Stocks",
      minDeposit: "$200",
      spreads: "From 6 cents",
      commissions: "Zero",
      instruments: ["Stocks"],
      highlighted: false,
    },
    {
      name: "Advantage",
      minDeposit: "$/€/£ 200",
      spreads: "From 0.0",
      commissions:
        "$3.5 per lot on FX\n$2 per million on Spot Metals\n$2.5 per million on CFDs\n0.03% for Crypto\n$0.02/lot on ETFs/Stocks",
      instruments: [
        "FX",
        "Spot Metals",
        "Index CFDs",
        "Commodity CFDs",
        "Cryptocurrency CFDs",
        "Stocks CFDs (MT5)",
        "ETFs (MT5)",
      ],
      highlighted: true,
    },
    {
      name: "Advantage Plus",
      minDeposit: "$/€/£ 200",
      spreads: "From 1.5",
      commissions: "Zero",
      instruments: [
        "FX",
        "Spot Metals",
        "Index CFDs",
        "Commodity CFDs",
        "Cryptocurrency CFDs",
        "Stocks CFDs (only MT5)",
        "ETFs (only MT5)",
      ],
      highlighted: false,
    },
  ];

  const faqs = [
    "What are performance statistics?",
    "What is order execution speed?",
    "What is slippage?",
    "What does requotes mean?",
  ];
  const awardsItems = [
    // ✅ Place it here before return
    { imageSrc: fund9 },
    { imageSrc: fund10 },
    { imageSrc: fund11 },
    { imageSrc: fund12 },
  ];
  const withdrawSteps = [
    "Log in to MyRightTrade Capital  and open the Withdraw page under ‘My Money’.",
    "Choose your payment method and click ‘Withdraw’.",
    "Choose the MyRightTrade Capital account or wallet you wish to withdraw funds from",
    "Complete the necessary fields and click 'Submit.'",
  ];
  return (
    <>
      <StatsSection
        title="Free Forex Demo Trading Account"
        subtitle="Skill up and practice zero-risk trading on our free demo account."
        buttonText="Open Demo account"
        note="Trading is risky."
        image={bannerImage}
      />

      <BreadcrumbAndDescription
        breadcrumbs={[
          { label: "RightTrade Capital", href: "#" },
          { label: " Account Overview", href: "#" },
          { label: "Open Demo Account", href: "#" },
        ]}
        description="Open a forex demo account and utilise a variety of trading tools, such as MT4 and MT5. Learn to interpret charts, candlestick patterns, and master technical indicators in real market conditions. Build confidence before moving to live trading.

A free forex demo account lets you practice trading in real-time with virtual funds, perfect for beginners who want to learn without financial risk. Experience live market conditions with a demo trading account that builds confidence."
      />

      <WhyTradeWithFXTM />
      <TradingAccountComparison accountData={accountData} />

      <TrustCTASection
        title="Join us"
        subtitle="Start trading with RightTrade Capital"
        buttonText="Open Account"
      />
      <HowToWithdrawSection
        title="How to make a withdrawal in 4 simple steps"
        steps={withdrawSteps}
      />
      <GetMoreMarketsSection />
      <FaqSection faqs={faqs} />
      <AwardsSection awards={awardsItems} />
    </>
  );
};

export default DemoAccounts;
