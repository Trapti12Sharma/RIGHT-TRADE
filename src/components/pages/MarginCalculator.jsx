import React from "react";
import StatsSection from "../common/StatsSection";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import FaqSection from "../common/FaqSection2";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import VideoTextSection from "../common/VideoTextSection";
import MarginCalculatorSteps from "../common/MarginCalculatorSteps";
import marginImage from "../../assets/margin.png";
import margincalcluator1 from "../../assets/margincalcluator1.png";

const MarginCalculator = () => {
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
  return (
    <>
      <StatsSection
        title="Margin Calculator"
        subtitle="Estimate the margin required for your trades in seconds."
        buttonText="Calculate Margin"
        image={margincalcluator1}
      />

      <BreadcrumbAndDescription
        breadcrumbs={[
          { label: "RightTrade Capital", href: "#" },
          { label: "Trading Tools", href: "#" },
          { label: " Margin Calculator", href: "#" },
        ]}
        description="Our margin calculator automatically calculates the amount (margin) you need to keep in your account as insurance for opening new positions. It’s the perfect way to manage your trades and work out the position size and the leverage level you need to stick to."
      />

      <MarginCalculatorSteps
        title="How does the margin calculator work?"
        steps={[
          "Choose your account currency",
          "Select the currency pair(s) you'd like to trade.",
          "Set your position size and your margin will be automatically displayed.",
        ]}
        noteTitle="A quick note"
        noteText="Our margin calculator is based on the specifications of our Advantage and Advantage Plus accounts."
      />

      <VideoTextSection
        image={marginImage}
        heading="What is margin?"
        text="Still trying to get to grips with margin? Learn more about it with this quick video."
      />
      <GetMoreMarketsSection />

      <FaqSection faqs={faqItems} />
    </>
  );
};

export default MarginCalculator;
