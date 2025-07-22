import React from "react";
import StatsSection from "../common/StatsSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import TrustReasonsSection from "../common/TrustReasonsSection";
import FaqSection from "../common/FaqSection";
import InfoWithMediaSection from "../common/InfoWithMediaSection";
import TextImageSection from "../common/TextImageSection";
import SideImageTextSection from "../common/SideImageTextSection";
import proToolsImg from "../../assets/protrading4.png";
import protrading1 from "../../assets/protrading1.png";
import imgn from "../../assets/protrading2.png";
import img2 from "../../assets/protrading3.png";
import fund6 from "../../assets/fund6.svg";
import fund7 from "../../assets/fund7.svg";
import fund8 from "../../assets/fund8.svg";
import fund9 from "../../assets/fund9.svg";

const ProTradingTools = () => {
  const faqItems = [
    { question: "What is segregation of funds?" },
    { question: "How does segregation of funds work?" },
    { question: "What are the benefits of segregated funds?" },
    {
      question:
        "What's the difference between mutual funds and segregated funds?",
    },
    { question: "Can you withdraw from segregated funds?" },
  ];

  const reasonsData = [
    {
      icon: fund6,
      title: "10 years strong",
      description: "Over a decade of trust, value and happy customers.",
    },
    {
      icon: fund7,
      title: "Over 1 million clients worldwide",
      description: "Trusted by clients in over 150 countries.",
    },
    {
      icon: fund8,
      title: "Rapid execution speeds",
      description:
        "Trade execution in milliseconds means you'll always get the best market price.",
    },
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
        title="Pro Trading Tools"
        subtitle="Enhance your trading with professional-level tools and analysis."
        buttonText="View Tools"
        image={protrading1}
      />

      <InfoWithMediaSection
        heading="What are Pro Trading Tools?"
        description="Pro Trading Tools are the most advanced version of the MetaTrader platform. Offering a seamless integration with leading third-party trading tools – Trading Central and FX Blue – Pro Trading Tools are designed to help you identify opportunities easily, manage your risk effectively, and take your trading experience to the next level."
        image={proToolsImg}
      />

      <TextImageSection
        imgSrc={imgn}
        title="Manage orders easily"
        paragraph="Create, modify and close orders with ease via Mini Terminal’s dynamic deal ticket.

Each order field – volume, s/l, t/p, and trailing stop – includes its own calculator to help you work out your trade size and margin requirement.

You can also create templates for one-click order entry."
      />

      <SideImageTextSection
        image={img2}
        title="Perform in-depth analysis"
        paragraphTextColor="text-black"
        paragraphs={[
          "Dig deeper into market movements with a comprehensive suite of technical indicators.",
          "Whether you want to examine currency strength or identify bullish and bearish extremes, you’ll find the perfect indicator for your strategy.",
        ]}
      />
      <HowToWithdrawSection
        title="How to make a withdrawal in 4 simple steps"
        steps={withdrawSteps}
      />

      <TrustReasonsSection reasons={reasonsData} />
      <FaqSection faqs={faqItems} />
    </>
  );
};

export default ProTradingTools;
