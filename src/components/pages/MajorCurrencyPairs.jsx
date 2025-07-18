import React from "react";
import StatsSection from "../common/StatsSection";
import SimpleCenteredTextSection from "../common/SimpleCenteredTextSection";
import ImageWithTextCenterSection from "../common/ImageWithTextCenterSection";
import ForexTradeSection from "../common/ForexTradeSection";
import ImageLeftTextRightSection from "../common/ImageLeftTextRightSection";
import VideoSection from "../common/VideoSection";
import FaqSection from "../common/FaqSection";
import TrustCTASection from "../common/TrustCTASection";
import AwardsSection from "../common/AwardsSection";
import ContactOptions from "../common/ContactOptions";

import statsBg from "../../assets/currency1.png";
import diagramImg from "../../assets/currency2.png";
import fxTradingImg from "../../assets/currency3.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";

const MajorCurrencyPairs = () => {
  const awardsItems = [
    // ✅ Place it here before return
    { imageSrc: fund9 },
    { imageSrc: fund10 },
    { imageSrc: fund11 },
    { imageSrc: fund12 },
  ];
  // ✅ Fifth section data (Video)
  const videoData = {
    videoUrl: "https://player.vimeo.com/video/76979871", // Replace with actual video
    title: "What is Forex?",
    description:
      "Forex (or FX) means Foreign Exchange, the place where currencies are traded. To learn more, check out our complete guide to",
    linkText: "forex trading for beginners.",
    linkHref: "#", // Update link to the actual page
  };
  const faqItems = [
    {
      question: "What are currency pairs in forex trading?",
      answer:
        "Currency pairs are the quotation of two different currencies traded in the forex market. The first currency is the base currency and the second is the quote currency. For example, in EUR/USD, EUR is the base and USD is the quote currency.",
    },
    {
      question: "How is the value of a currency pair determined?",
      answer:
        "The value of a currency pair is determined by how much of the quote currency is needed to buy one unit of the base currency. For example, if EUR/USD is 1.2000, it means 1 Euro = 1.20 US Dollars.",
    },
    {
      question: "Which currency is the easiest to trade?",
      answer:
        "Major currency pairs such as EUR/USD, USD/JPY, and GBP/USD are considered easiest to trade due to high liquidity and tight spreads.",
    },
    {
      question: "What are the 7 major currency pairs?",
      answer:
        "The 7 major currency pairs are EUR/USD, USD/JPY, GBP/USD, USD/CHF, USD/CAD, AUD/USD, and NZD/USD.",
    },
  ];

  const statsData = {
    title: "Major currency pairs: most traded currencies",
    subtitle:
      "Find out everything you need to know about trading currencies, including how it works, the major currency pairs and the most traded currencies globally.",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  const forexTradeData = {
    title: "What are the base and quote currencies?",
    description: `The ‘base’ currency is always listed first in a forex pair, with the ‘quote’ currency listed second. The base currency is always equal to one, while the quote currency represents the current price of the pair.\n\nThe quote represents how much it’ll cost to buy one of the base currency.\n\nSo, if the price of GBP/USD is quoted as 1.13490, it would cost you 1.13490 US dollars to buy one British pound.\n\nWhen you are trading forex, you are always buying one currency and selling another at the same time. Learn more about base and quote currencies.`,
    benefits: [
      "The base currency is listed first, followed by the quote currency.",
      "The base currency always equals one unit.",
      "The quote shows how much of the quote currency is needed to buy one unit of the base currency.",
      "You simultaneously buy one and sell the other in every forex trade.",
    ],
  };

  const textSectionData = {
    heading: "Trading currency pairs",
    subtext: `Currency trading, also known as forex, foreign exchange or FX trading, is the conversion of one currency into another. Roughly $6.5 trillion worth of currency transactions are carried out every single day – whether by individuals, banks or companies. This makes forex one of the most actively traded markets in the world.\n\nForeign exchange is often done for practical purposes. For example, you might exchange your local currency for US dollars before going on holiday to the United States. However, the vast majority of currency conversion is done by forex traders looking to turn a profit.\n\nThe amount of currency converted every day means that the market is highly liquid, but also makes some currencies extremely volatile. While this can offer exciting and potentially lucrative trading opportunities, it comes with additional risk, too.`,
  };

  const currencyDiagramSection = {
    title: "How do currency pairs work?",
    description:
      "A currency pair is a combination of two currencies that are traded against each other. Some of the most popular pairs to trade include the euro against the US dollar (EUR/USD), the US dollar against the Japanese yen (USD/JPY) and the British pound against the US dollar (GBP/USD).",
    image: diagramImg,
  };

  const fxTradingSection = {
    imgSrc: fxTradingImg,

    paragraph:
      "When you trade currencies with RightTrade Capital, you’re making a call on whether the price of a currency pair will rise or fall. If you’re correct, you’ll make a profit. That’s because you’re trading a CFD, which means you can go long or short, and benefit from leverage. Let’s look at how it works.",
  };

  return (
    <>
      <StatsSection {...statsData} />
      <SimpleCenteredTextSection {...textSectionData} />
      <ImageWithTextCenterSection {...currencyDiagramSection} />
      <ForexTradeSection {...forexTradeData} />
      <ImageLeftTextRightSection {...fxTradingSection} bgColor="bg-[#1f213f]" />
      <SimpleCenteredTextSection
        heading="TRADING STRATEGIES"
        subtext="Dive deeper into strategies that FX and CFD traders love to work with"
        buttonText="Read more"
      />
      <VideoSection {...videoData} />

      {/* Section 7 */}

      {/*  Section 6 - Contact CTA */}
      <ContactOptions />

      {/* Section 10: Awards Section */}
      <AwardsSection awards={awardsItems} />

      {/* Section 6 */}
      <FaqSection faqs={faqItems} />

      <TrustCTASection
        title="Join us"
        subtitle="Start trading with RightTrade Capital."
        buttonText="Open account"
      />
    </>
  );
};

export default MajorCurrencyPairs;
