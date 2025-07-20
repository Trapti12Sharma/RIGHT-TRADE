import React from "react";
import StatsSection from "../../components/common/StatsSection";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import SideImageTextSection from "../common/SideImageTextSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import TextImageSection from "../common/TextImageSection"; // 🆕
import WhyTradeWithFXTM from "../common/WhyTradeWithFXTM";
import FaqSection from "../common/FaqSection2"; // ⬅️ new import
import AwardsSection from "../common/AwardsSection";
import TrustCTASection from "../common/TrustCTASection";
import TradingAccountComparison from "../common/TradingAccountComparison";
import img from "../../assets/account2.png";
import imgn from "../../assets/account3.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";
import bannerImage from "../../assets/mobiletrading.png";

const MobileTrading = () => {
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
        title="Trade on the go, straight from your phone"
        subtitle="Get the FXTM Trader app today for commission-free trading and spreads as low as zero on major FX pairs and gold"
        buttonText="Learn mmore"
        image={bannerImage}
      />

      <BreadcrumbAndDescription
        breadcrumbs={[
          { label: "RightTrade Capital", href: "#" },
          { label: "Account Overview", href: "#" },
        ]}
        description="Simply choose the account which fits you best. And trade how you want, wherever you want."
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#2a2d45]"
        textcolor="text-[#ffffff]"
        title="Advantage trading accounts"
        subtitle="Give yourself an advantage with our most popular account."
        paragraphs={[
          "No wonder RightTrade Capital traders love our Advantage account with zero spreads, commission-free trading on Stock CFDs and lightning-fast execution. Sharpen your trading edge with free learning and stay ahead of the trend with expert analysis and updates.",
        ]}
        note="Advantage gives you more."
      />

      <TextImageSection
        imgSrc={imgn}
        title="Advantage Plus trading accounts"
        paragraph="Choose from hundreds of instruments and trade on MetaTrader 4 or MetaTrader 5.

Advantage Plus gives you everything that makes Advantage account so popular, with the added benefit of zero commissions. That’s right: it’s commission-free trading. You should know that spreads are wider, check the details out in the comparison tables below."
      />
      <TradingAccountComparison accountData={accountData} />

      <HowToWithdrawSection
        title="How to make a withdrawal in 4 simple steps"
        steps={withdrawSteps}
      />
      <TrustCTASection
        title="Choose your account and start trading"
        subtitle="Still not sure which account is right for you? Check out our handy guide to choosing the best trading account to explore our range of accounts and discover which fits you best."
        buttonText="Choose account"
      />

      <FaqSection faqs={faqs} />
      <WhyTradeWithFXTM />

      <TrustCTASection
        title="Join us"
        subtitle="Start trading with RightTrade Capital"
        buttonText="Open Account"
      />
      <AwardsSection awards={awardsItems} />
    </>
  );
};

export default MobileTrading;
