import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../common/StatsSection";
import FaqSection from "../common/FaqSection2";
import TrustCTASection from "../common/TrustCTASection";
import HeadingWithDescription from "../common/HeadingWithDescription";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import SideImageTextSection from "../common/SideImageTextSection";
import StepProcessSection from "../common/StepProcessSection";
import fxTradingImg from "../../assets/currency3.png";
import tradingsignals from "../../assets/tradingsignals.png";
import home6 from "../../assets/sign-up.png";

const ProfitCalculator = () => {
  const pageURLA = "https://www.righttradecapital.com/spot-metals-trading";

  const steps = [
    "Choose Your Currency Pair – Select the forex pair you want to trade.",
    "Choose Your Place – If you think prices will go up, go long. If you think they will go down, go short.",
    "Set Prices – Enter your open and close prices to find out how many pips and how much money you made or lost.",
    "Pick the money for your calculation – You can see your results in US dollars or any other currency you choose.",
  ];

  const faqItems = [
    {
      question: "What is the best way to trade in foreign currencies?",
      answer:
        "How you trade will determine which account is best for you. Standard accounts are good for people who are just starting out, and advanced accounts are better for pros because they have tighter spreads.",
    },
    {
      question: "Do I need a broker to buy and sell foreign currency?",
      answer:
        "Yes, a regulated broker lets you safely access the market and professional trading platforms.",
    },
    {
      question: "Can you trade forex without having to pay a lot of fees?",
      answer:
        "Yes, of course. Our platform makes the costs of transactions clear and competitive, which makes it easier to keep track of your profits.",
    },
    {
      question: "Is the Forex Profit Calculator free to use?",
      answer:
        "Yes! Our free Forex Profit Calculator can help all traders plan their strategies and keep their risks in check.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Forex Profit Calculator | Online Trading Tool</title>

        <meta
          name="description"
          content="Use our free Forex Profit Calculator to plan trades, manage risk, and calculate profits & losses in pips or USD. Trade smarter with precise strategies."
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta
          property="og:title"
          content="Forex Profit Calculator | Online Trading Tool"
        />
      </Helmet>

      <StatsSection
        title="Trading Signals: Get real-time market information to stay ahead."
        subtitle="Get real-time trading signals and methods to remain ahead of the game."
        buttonText="Check Signals"
        image={tradingsignals}
      />

      <HeadingWithDescription
        title="Forex Profit Calculator"
        description="Every professional trader knows that the most important thing is to always think about what could happen before making a trade.
        You can use our Forex Profit Calculator to find out how much money you will make or lose before you make a trade. This way, you will be ready for every trade.
        With this Free Forex Profit Calculator, you can set profit goals, figure out how much risk you're willing to take, and plan your strategy well before you place an order."
      />

      <SideImageTextSection
        image={fxTradingImg}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="Why should you use our Forex Profit Calculator?"
        paragraphTextColor="text-white"
        paragraphs={[
          "Three times a day, before the European, US, and Asian sessions, trading signals are sent out.They assist you:",
        ]}
        listItems={[
          "Plan for possible gains and losses with precision",
          "Set clear profit goals to trade smarter",
          "Take care of your risk before you enter the market",
        ]}
        description="Simple, helpful, and free for all traders"
      />

      <StepProcessSection
        title="How to Use the Free Forex Profit Calculator"
        subtitle="Follow these simple steps to use our online Forex Profit Calculator to find out how much money you made:"
        steps={steps}
      />

      <SecurityRegulationSection
        image={home6}
        title="Learn, Trade, and Grow with Confidence"
        introParagraph="When you trade, it's not just the numbers that matter; it's also the plan.
        You can use our Forex Profit Calculator and also get access to expert opinions and educational materials:"
        bulletPoints={[
          "How to trade in a structured way",
          "Video lessons that show you how to do things using examples from the market",
          "Live webinars and expert sessions",
          "Ways to read charts and handle risk that have worked in the past",
          "Get access to the best forex trading platform to help you get better at it",
        ]}
      />

      <FaqSection faqs={faqItems} />

      <TrustCTASection
        title="JOIN US"
        subtitle="It only takes a few minutes to set up a trading account and start using advanced tools."
        buttonText="Open Account"
      />
    </>
  );
};

export default ProfitCalculator;
