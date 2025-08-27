import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../common/StatsSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import FeatureSection from "../common/FeatureSection";
import FaqSection from "../common/FaqSection2";
import SideImageTextSection from "../common/SideImageTextSection";
import ImageTextSections from "../common/ImageTextSections";
import protrading1 from "../../assets/protrading1.png";
import commissionsImage from "../../assets/deposits1.png";
import fxTradingImg from "../../assets/currency3.png";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import home6 from "../../assets/sign-up.png";
import imgn from "../../assets/protrading2.png";
import img2 from "../../assets/protrading3.png";

const ProTradingTools = () => {
  const pageURL =
    "https://www.righttradecapital.com /advantage-trading-accounts";

  const faqItems = [
    {
      question: "What does it mean to separate funds?",
      answer:
        "Segregation of funds implies that your money is kept fully separate from the money the firm uses to run its business, which is the safest way to do things.",
    },
    {
      question: "What does it mean to separate funds?",
      answer:
        "Your money is kept safe in top-tier institutions, so even if the broker has money problems, your money will still be safe.",
    },
    {
      question: "What are the good things of segregated funds?",
      answer: "More safety and honesty.",
    },
    {
      question:
        "What is the difference between segregated funds and mutual funds?",
      answer:
        "Mutual funds put money into stocks, but segregated funds are tied directly to your trading account, which gives you greater control and flexibility.",
    },
    {
      question: "Is it possible to take money out of segregated funds?",
      answer:
        "Yes, it's easy to withdraw money, and you may do it at any moment by completing the normal four-step withdrawal procedure.",
    },
  ];

  const withdrawSteps = [
    "To withdraw money from MyRightTrade Capital, log in and click on My Money.",
    "Choose how you want to pay and then click Withdraw.",
    "Pick the account or wallet you wish to take money out of.",
    "Enter the information and click Submit.",
  ];

  return (
    <>
      <Helmet>
        <title>Pro Trading Tools | Online Trading Tools</title>

        <meta
          name="description"
          content="Trade smarter with Pro Trading Tools – easy order management, advanced indicators, and risk control on a trusted professional trading platform."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Pro Trading Tools | Online Trading Tools"
        />
      </Helmet>

      <StatsSection
        title="Pro Trading Tools: Make Your Trading Better"
        subtitle="Use powerful professional tools and analysis to take your trading to the next level."
        buttonText="View Tools"
        image={protrading1}
      />

      <FeatureSection
        title="Why Traders Trust RightTrade Capital"
        paragraph="RightTrade Capital is still one of the most trusted trading platforms since it has the greatest trading tools and orders are filled in a flash."
      />

      <SideImageTextSection
        image={fxTradingImg}
        title="What do Pro Trading Tools do?"
        bgColor="bg-[#121733]"
        paragraphTextColor="text-white"
        textcolor="text-white"
        paragraphs={[
          "The MetaTrader platform has been improved and made better with Pro Trading Tools. These tools work well with top third-party programs like Trading Central and FX Blue, giving traders the capacity to:",
        ]}
        listItems={[
          "Find lucrative opportunities quicker.",
          "Better manage the hazards of trading.",
          "Make transactions with more accuracy.",
          "Improve your overall trading results.",
        ]}
        description="If you want the greatest online trading tools, Pro Trading Tools has everything you need to trade smarter, not harder."
      />

      <ImageTextSections
        title="Easily Handle Orders"
        description={`With the Mini Terminal's dynamic deal ticket, you may quickly and accurately make deals.

        • You may open, change, and cancel orders right away.
        • You can easily figure out the size of your trades and the amount of margin you need using the built-in calculators for volume, stop-loss, take-profit, and trailing stops.
        • Save your tactics as templates so you can place orders with one click. `}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
        paragraph="This makes Pro Trading Tools the best professional trading platform for both new and seasoned traders."
      />

      <HowToWithdrawSection
        title="Four Easy Steps to Make a Withdrawal"
        steps={withdrawSteps}
      />

      <SecurityRegulationSection
        image={home6}
        title="Do a Thorough Analysis of the Market"
        introParagraph="Use sophisticated trading indicators and technical analysis tools to look at how the market is moving."
        bulletPoints={[
          "Keep an eye on how strong a currency is in real time.",
          "Find bullish and bearish extremes with accuracy.",
          "Find the right indication for your plan.",
        ]}
        closingParagraph="Pro Trading Tools provide you the advantage to trade with confidence, whether you're day trading, swing trading, or investing for the long term."
      />

      <FaqSection faqs={faqItems} />
    </>
  );
};

export default ProTradingTools;
