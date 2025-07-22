import React from "react";

import FaqSection from "../common/FaqSection2";
import AwardsSection from "../common/AwardsSection";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import ExpertTrader from "../ExpertTrader";
import TrustCTASection from "../common/TrustCTASection";
import HeadingWithDescription from "../common/HeadingWithDescription";
import StepProcessSection from "../common/StepProcessSection";

import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";

const ProfitCalculator = () => {
  const steps = [
    "Choose your Forex currency pair to calculate potential profit",
    "Determine your trading position: long for potential gains or short for anticipated declines",
    "Set the open and close price to calculate profit or loss in pips and dollars",
    "Select the calculation currency to see your profit in either USD or another preferred currency",
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
  return (
    <>
      <HeadingWithDescription
        title="Forex Profit Calculator"
        description="Never take a trade until you've planned out every potential scenario. That's a golden rule for every professional investor. The FXTM profit calculator can help you plan out potential profits and losses so you go into trades ready for every possible outcome. Calculate potential gains, set precise profit targets, and manage losses before trading.

"
      />
      <TrustCTASection
        title="JOIN US"
        subtitle="Open your account in minutes."
        buttonText="Open Account"
      />

      <StepProcessSection
        title="Simple, effective, and free forex risk management."
        subtitle="Follow these steps to calculate profits using our free online Forex Profit Calculator."
        steps={steps}
      />
      <ExpertTrader
        heading="Trade the world's markets"
        description="Take a deeper dive into the markets we offer and get in on the trading action today."
        buttonText="Instruments overview"
        // backgroundImage={bgImage}
      />
      <GetMoreMarketsSection />
      <FaqSection faqs={faqs} />
      <AwardsSection awards={awardsItems} />
    </>
  );
};

export default ProfitCalculator;
