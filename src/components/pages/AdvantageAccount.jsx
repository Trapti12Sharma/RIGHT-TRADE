import React from "react";
import StatsSection from "../../components/common/StatsSection";
import WhyTradeWithFXTM from "../common/WhyTradeWithFXTM";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import TrustCTASection from "../common/TrustCTASection";
import TradingAccountComparison from "../common/TradingAccountComparison";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import AwardsSection from "../common/AwardsSection";
import bannerImage from "../../assets/advantage1.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";

const AdvantageAccount = () => {
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

  return (
    <>
      <StatsSection
        title="Advantage trading account"
        subtitle="Our most popular account, with spreads from zero on major FX pairs."
        buttonText="Open  Account"
        note="Trading is risky"
        image={bannerImage}
      />

      <BreadcrumbAndDescription
        breadcrumbs={[
          { label: "RightTrade Capital", href: "#" },
          { label: " Account Overview", href: "#" },
          { label: "Advantage Account", href: "#" },
        ]}
      />
      <WhyTradeWithFXTM />
      <TradingAccountComparison accountData={accountData} />
      <TrustCTASection
        title="JOIN US"
        subtitle="Open your account in minutes."
        buttonText="Open Account"
      />
      <HowToWithdrawSection
        title="How to make a withdrawal in 4 simple steps"
        steps={withdrawSteps}
      />

      <GetMoreMarketsSection />

      <AwardsSection awards={awardsItems} />
    </>
  );
};

export default AdvantageAccount;
