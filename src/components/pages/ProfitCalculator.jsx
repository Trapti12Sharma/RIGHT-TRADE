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
      <FaqSection faqs={faqItems} />
      <AwardsSection awards={awardsItems} />
    </>
  );
};

export default ProfitCalculator;
