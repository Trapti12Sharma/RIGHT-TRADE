import React from "react";
import StatsSection from "../common/StatsSection";
import ExpertTrader from "../ExpertTrader";
import FaqSection from "../common/FaqSection2";
import AwardsSection from "../common/AwardsSection";
import SideImageTextSection from "../common/SideImageTextSection";
import TextImageSection from "../common/TextImageSection";

import TrustCTASection from "../common/TrustCTASection";
import LatestNews from "../common/LatestNews";
import img1 from "../../assets/market4.png";
import img2 from "../../assets/market5.png";
import img3 from "../../assets/market6.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";
import statsBg from "../../assets/markets1.png";
import img from "../../assets/Market2.png";
import imgn from "../../assets/market3.png";

const MarketOverview = () => {
  const data = [
    {
      date: "28 FEB",
      time: "08:28",
      title: "Week Ahead: Can US500 index hold on to post-election gains?",
      desc: "Having just erased all of its year-to-date gains, this benchmark US stock index is now merely 1.4% higher since the November 5th close...",
      tags: ["S&P 500", "US500", "WEEK AHEAD", "TRUMP"],
      img: img1,
    },
    {
      date: "26 FEB",
      time: "07:25",
      title: "Nvidia earnings preview: Make-or-break moment…",
      desc: "Nvidia’s earnings will be a defining moment for itself and the entire tech space...",
      tags: ["NVIDIA", "EARNINGS", "TECH STOCKS", "NASDAQ 100"],
      img: img2,
    },
    {
      date: "25 FEB",
      time: "14:31",
      title: "Bitcoin tumbles below $90k on risk-off mood",
      desc: "Bitcoin collapsed over 7% on Tuesday, hitting its lowest level since mid-November...",
      tags: ["BITCOIN", "ETF", "INFLATION"],
      img: img3,
    },
  ];
  const faqItems = [
    {
      question: "What are prime examples of trading instruments?",
      answer:
        "Prime examples include Forex, stocks, commodities, indices, and cryptocurrencies.",
    },
    {
      question: "What are tradable instruments?",
      answer:
        "Tradable instruments are assets like currencies, stocks, or commodities that can be bought or sold in the financial markets.",
    },
    {
      question: "Which trading instrument is best?",
      answer:
        "There is no one-size-fits-all. It depends on your risk appetite, experience, and market knowledge.",
    },
    {
      question: "What instruments can be traded at RightTrade Capital?",
      answer:
        "RightTrade Capital offers forex, CFDs on commodities, indices, stocks, and cryptocurrencies.",
    },
    {
      question: "Why trade instruments with RightTrade Capital?",
      answer:
        "RightTrade Capital is regulated, offers tight spreads, fast execution, and award-winning customer support.",
    },
  ];

  const awardsItems = [
    { imageSrc: fund9 },
    { imageSrc: fund10 },
    { imageSrc: fund11 },
    { imageSrc: fund12 },
  ];
  const statsData = {
    title: "Trade the global markets",
    subtitle:
      "Access 1000+ instruments with ultra-low spreads and lightning speed execution",
    buttonText: "Open account",
    note: "Trading is risky.",
    image: statsBg,
  };

  return (
    <div className="w-full">
      {/*  Section 1 */}
      <StatsSection
        title={statsData.title}
        subtitle={statsData.subtitle}
        buttonText={statsData.buttonText}
        note={statsData.note}
        image={statsData.image}
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#2a2d45]"
        textcolor="text-[#ffffff]"
        title="Advantage trading accounts"
        subtitle="Give yourself an advantage with our most popular account."
        paragraphs={[
          "No wonder RightTrade Capital traders love our Advantage account with zero spreads, commission-free trading on Stock CFDs and lightning-fast execution. Sharpen your trading edge with free learning and stay ahead of the trend with expert analysis and updates.",
        ]}
        note="Advantage gives you more."
      />

      <TextImageSection
        imgSrc={imgn}
        title="Advantage Plus trading accounts"
        paragraph="Choose from hundreds of instruments and trade on MetaTrader 4 or MetaTrader 5.

Advantage Plus gives you everything that makes Advantage account so popular, with the added benefit of zero commissions. That’s right: it’s commission-free trading. You should know that spreads are wider, check the details out in the comparison tables below."
      />

      <ExpertTrader
        tag="EXPERT TRADER"
        heading="Already trading?"
        description="Sharpen your edge with market updates, expert insights, and real-time tools."
        buttonText="Trade Now"
        // backgroundImage={bgImage}
      />

      {/* Section 3: FAQ Section */}
      <FaqSection faqs={faqItems} />

      <LatestNews
        heading="LATEST NEWS"
        articles={data}
        accentColor="#FABF16"
        allText="All articles"
        onAllClick={() => console.log("Go to all articles page")}
      />

      {/* Section 4: CTA */}
      <TrustCTASection
        title="Join us"
        subtitle="Start trading with RightTrade Capital."
        description="No one makes it easier. Open an account or try our demo account to get started while you build your skills."
        buttonText="Open Account"
        // buttonLink="/start-trading"
      />

      {/* Section 5: Awards Section */}
      <AwardsSection awards={awardsItems} />
    </div>
  );
};

export default MarketOverview;
