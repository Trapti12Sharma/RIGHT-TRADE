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
  const faqs = [
    "What are performance statistics?",
    "What is order execution speed?",
    "What is slippage?",
    "What does requotes mean?",
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

      <FaqSection faqs={faqs} />
    </>
  );
};

export default MarginCalculator;
