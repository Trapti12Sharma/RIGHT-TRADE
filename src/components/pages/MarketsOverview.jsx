import React from "react";
import StatsSection from "../common/StatsSection";
import ExpertTrader from "../ExpertTrader";
import FaqSection from "../common/FaqSection";
import AwardsSection from "../common/AwardsSection";
import SideImageTextSection from "../common/SideImageTextSection";
import TextImageSection from "../common/TextImageSection";

import TrustCTASection from "../common/TrustCTASection";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg"; // ✅ Award image
import fund11 from "../../assets/fund11.svg"; // ✅ Award image
import fund12 from "../../assets/fund12.svg"; // ✅ Award image
import statsBg from "../../assets/markets1.png";
import img from "../../assets/Market2.png";
import imgn from "../../assets/market3.png";

// import bgImage from "../../assets/expert-trader-bg.png"; // ✅ Import this image

const MarketOverview = () => {
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

      {/*  Section  2 */}
      <ExpertTrader
        tag="EXPERT TRADER"
        heading="Already trading?"
        description="Sharpen your edge with market updates, expert insights, and real-time tools."
        buttonText="Trade Now"
        // backgroundImage={bgImage}
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
      {/* Section 3: FAQ Section */}
      <FaqSection faqs={faqItems} />

      {/* Section 4: CTA */}
      <TrustCTASection
        title="Join us"
        subtitle="Start trading with RightTrade Capital."
        description="No one makes it easier. Open an account or try our demo account to get started while you build your skills."
        // buttonText="Start trading"
        // buttonLink="/start-trading"
      />

      {/* Section 5: Awards Section */}
      <AwardsSection awards={awardsItems} />
    </div>
  );
};

export default MarketOverview;
