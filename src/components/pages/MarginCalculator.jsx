import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../common/StatsSection";
import FaqSection from "../common/FaqSection2";
import MarginCalculatorSteps from "../common/MarginCalculatorSteps";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import FeatureSection from "../common/FeatureSection";
import SideImageTextSection from "../common/SideImageTextSection";
import TrustCTASection from "../common/TrustCTASection";
import img from "../../assets//platformoverview2.png";
import marginImage from "../../assets/margin.png";
import margincalcluator1 from "../../assets/margincalcluator1.png";

const MarginCalculator = () => {
  const pageURLA = "https://www.righttradecapital.com/spot-metals-trading";

  const withdrawSteps = [
    "Pick the currency for your account (USD, EUR, GBP, etc.)",
    "Choose the currency pair(s) you want to trade",
    "Set the size of your position and see how much margin you need right away",
    "Fill in the required fields and click Submit.",
  ];

  const faqItems = [
    {
      question: " What is a calculator for Forex margin?",
      answer:
        "A Forex Margin Calculator is a tool that traders use to figure out how much margin they need to open a trade based on their lot size and leverage.",
    },
    {
      question: "What is the importance of margin in forex trading?",
      answer:
        "Traders can control bigger positions with smaller deposits thanks to margin. It lets you use more leverage, but you also need to manage your risk well.",
    },
    {
      question: "Is it possible to trade forex without using margin?",
      answer:
        "Yes, but it limits how much you can trade. Most forex traders use margin trading to get the most out of their market exposure.",
    },
    {
      question: "What effect does leverage have on margin?",
      answer:
        "The more leverage you have, the less margin you need to open a position. But high leverage also makes things riskier.",
    },
    {
      question: "What kind of account is best for margin trading?",
      answer:
        "Our Advantage and Advantage Plus accounts are for traders who want to use their margin more efficiently, have lower spreads, and have more flexible leverage.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Forex Margin Calculator | Estimate Forex Margin</title>

        <meta
          name="description"
          content="RightTrade Capital Margin Calculator helps you estimate forex margin, position size & leverage instantly. Trade smarter with better risk management."
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta
          property="og:title"
          content="Forex Profit Calculator | Online Trading Tool"
        />
      </Helmet>

      <StatsSection
        title="Margin Calculator: Quickly figure out your Forex margin"
        subtitle="Use our Forex Margin Calculator to help you plan your trades better. Quickly figure out how much margin you need for your trades, manage risk well, and trade with confidence."
        buttonText="Margin Calculator"
        image={margincalcluator1}
      />

      <FeatureSection
        title="In Forex trading, what is margin?"
        paragraph="To open and keep a forex position, you need to put down a certain amount of money as collateral. This is called margin.
        It's not a fee or cost; it's just a percentage of your trade size that your broker keeps as insurance.
        Still not sure what margin is? Check out our short video guide to learn more about margin in forex trading.
        "
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="The Margin Calculator"
        paragraphTextColor="text-white"
        paragraphs={[
          "Our online margin calculator figures out the exact amount of money you need to keep in your account as collateral (insurance) for opening new forex positions.",
        ]}
        listItems={[
          "Figure out how big your position is",
          "Know how much margin you need",
          "Pick the right amount of leverage for your trades",
        ]}
        description="You'll never have to guess your margin again with this forex trading tool."
      />

      <HowToWithdrawSection
        title="How does the Forex Margin Calculator work?"
        steps={withdrawSteps}
      />

      <FaqSection faqs={faqItems} />
      <TrustCTASection
        title="A Quick Note"
        subtitle="The margin calculator is based on the rules for our Advantage and Advantage Plus trading accounts. The results may be different depending on how much leverage you use."
        buttonText="Open Account"
      />
    </>
  );
};

export default MarginCalculator;
