import React from "react";
import StatsSection from "../../components/common/StatsSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import WhyTradeWithFXTM from "../common/WhyTradeWithFXTM";
import FaqSection from "../common/FaqSection2";
import AwardsSection from "../common/AwardsSection";
import TrustCTASection from "../common/TrustCTASection";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import TradingAccountComparison from "../common/TradingAccountComparison";
import img from "../../assets/account2.png";
import imgn from "../../assets/account3.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";
import bannerImage from "../../assets/advantagestocks1.png";

const AdvantageStocksAccount = () => {
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

  const faqItems = [
    {
      question: "What is the best account for forex?",
      answer:
        "You can trade forex on all of our account types but many of our traders prefer to do so on our Advantage account, thanks to the fact that it offers the best value - with typically zero spreads on popular FX pairs. For information, check out our handy guide to choosing the best trading account.",
    },
    {
      question: "What  kind of account do I need to trade forex?",
      answer:
        "You can trade forex on all of our account types. They all come with slightly different conditions, so do make sure you have a good look through the details to settle on the account that best suits your own goals.",
    },
    {
      question: "Can I trade forex without a broker?",
      answer:
        "You can by exchanging currencies at a bank or local currency exchange (at the airport for example). The downside of this is you won't have access to leverage or risk management tools like Stop Loss and Take Profit. Trading forex with an online broker like FXTM also offers other benefits including customer support, rapid execution and educational resources to help you on your way.",
    },
    {
      question: "How much is the transaction fee?",
      answer:
        "We’ll charge a flat $3 transaction fee for any deposit or withdrawal less than $30 or equivalent.",
    },
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
        title="Advantage Stocks trading account"
        subtitle="Trade Tesla, Apple, Microsoft and more with zero commission."
        buttonText="Open Account"
        note="Trading is risky"
        image={bannerImage}
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
      <FaqSection faqs={faqItems} />
      <AwardsSection awards={awardsItems} />
    </>
  );
};

export default AdvantageStocksAccount;
