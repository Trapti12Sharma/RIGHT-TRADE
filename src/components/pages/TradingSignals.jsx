import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../common/StatsSection";
import SideImageTextSection from "../common/SideImageTextSection";
import FaqSection from "../common/FaqSection2";
import FeatureSection from "../common/FeatureSection";
import BenefitGrid from "../common/BenefitGrid";
import ImageTextSections from "../common/ImageTextSections";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import tradingsignals from "../../assets/tradingsignals.png";
import fxTradingImg from "../../assets/currency3.png";
import commissionsImage from "../../assets/deposits1.png";
import home6 from "../../assets/sign-up.png";
import icon1 from "../../assets/tradingsignals2.svg";
import icon2 from "../../assets/tradingsignals3.svg";
import icon3 from "../../assets/tradingsignals4.svg";
import icon4 from "../../assets/tradingsignals5.svg";
import icon5 from "../../assets/tradingsignals6.svg";

const TradingSignals = () => {
  const pageURLA = "https://www.righttradecapital.com/spot-metals-trading";

  const benefitsData = [
    {
      icon: icon1,
      title: "Current",
      description:
        "Get good trading ideas three times a day, right in My RightTrade Capital.",
    },
    {
      icon: icon2,
      title: "Multi-asset",
      description:
        "Get trading alerts for Forex, equities, commodities, and indexes.",
    },
    {
      icon: icon3,
      title: "Actionable",
      description:
        "Get exact entry, stop-loss, and take-profit levels, as well as confidence ratings.",
    },
    {
      icon: icon4,
      title: "Independent",
      description:
        "Acuity is a third-party service that has won awards and is trusted.",
    },
    {
      icon: icon5,
      title: "Regulated",
      description:
        "The FCA has full authority over and regulates this company, therefore you can trust it.",
    },
  ];

  const faqItems = [
    {
      question: "What does it mean to separate funds?",
      answer:
        "Segregation of funds implies that your money is kept fully separate from the money the firm uses to run its business. This is the safest way to keep your money.",
    },
    {
      question: "What does it mean to separate funds?",
      answer:
        "Even if the broker has money problems, your money is safe since it is kept in top-tier institutions.",
    },
    {
      question: "What are the good things of segregated funds?",
      answer: "You may relax knowing that your money is always protected.",
    },
    {
      question:
        "What is the difference between segregated funds and mutual funds?",
      answer:
        " Mutual funds put money into a pool of stocks, whereas segregated funds are linked directly to your own account, giving you more control and freedom.",
    },
    {
      question: "Is it possible to take money out of segregated funds?",
      answer:
        " Yes, it's easy to make withdrawals, and you may do it at any moment using the normal four-step method.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Trading Signals | Best Forex Trading Signals Online</title>

        <meta
          name="description"
          content="Get real-time forex trading signals with entry, stop-loss & take-profit levels. Access expert strategies from Signal Centre to trade smarter."
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta
          property="og:title"
          content="Trading Signals | Best Forex Trading Signals Online"
        />
      </Helmet>

      <StatsSection
        title="Trading Signals: Get real-time market information to stay ahead."
        subtitle="Get real-time trading signals and methods to remain ahead of the game."
        buttonText="Check Signals"
        image={tradingsignals}
      />

      <FeatureSection
        title="Get Forex Trading Signals Right in Your Inbox"
        paragraph="We know that finding good trading opportunities may be hard and take a lot of effort. With Acuity's Signal Center, My RightTrade Capital will send you professionally made forex trading signals right to your mailbox.
          This makes it simpler and quicker to find good chances and act on them with confidence."
      />

      <SideImageTextSection
        image={fxTradingImg}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="How Do Trading Signals Work?"
        paragraphTextColor="text-white"
        paragraphs={[
          "Three times a day, before the European, US, and Asian sessions, trading signals are sent out.They assist you:",
        ]}
        listItems={[
          "Find good trading chances in Forex, indices, commodities, and stocks.",
          "Don't waste time on long technical analysis.",
          "Make your trading strategy better by setting defined entry, stop-loss, and take-profit levels.",
        ]}
        description=" Important: Trading signals don't guarantee profits, but they are a great way to help you make better decisions."
      />

      <ImageTextSections
        title="What is the Acuity Signal Center?"
        description={`Acuity Signal Center is an award-winning company that provide market insights and AI-powered trading signals.
        It uses both analyst-driven research and powerful algorithms to provide signals across several asset classes.
        There are:


        • Places to enter
        • Levels to take profit
        • Suggestions for stop-loss
        • Confidence indicators (chance of success)`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
        paragraph="This means that Acuity is one of the finest places to get trading signals for traders who want to make wiser, data-driven choices."
      />

      <BenefitGrid
        title="Advantages of Using Signal Center"
        benefits={benefitsData}
      />

      <SecurityRegulationSection
        image={home6}
        title="What is a signal to trade?"
        introParagraph="A trading signal is a technique that looks at how the price of an asset changes and tells traders when to buy or sell."
        bulletPoints={[
          "Technical analysis indicators or mathematical algorithms are used to make signals.",
          "They assist traders improve their forex trading techniques and save time.",
          "They are useful for both new and experienced traders.",
        ]}
      />

      <FaqSection faqs={faqItems} />
    </>
  );
};

export default TradingSignals;
