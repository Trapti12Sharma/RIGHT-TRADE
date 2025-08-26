import React from "react";
import { Helmet } from "react-helmet";
import { FaDollarSign, FaBolt, FaGlobe, FaUniversity } from "react-icons/fa";
import StatsSection from "../common/StatsSection";
import ForexTradeSection from "../common/ForexTradeSection";
import WhyTradeForexSection from "../common/WhyTradeForexSection";
import CurrencyInfoSection from "../common/CurrencyInfoSection";
import VideoSection from "../common/VideoSection";
import FaqSection from "../common/FaqSection2";
import TrustCTASection from "../common/TrustCTASection";
import SideImageTextSection from "../common/SideImageTextSection";
import ImageTextSections from "../common/ImageTextSections";
import FeatureSection from "../common/FeatureSection";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import statsBg from "../../assets/cdf1.png";
import globeImg from "../../assets/globe.svg";
import manageFundsImg from "../../assets/deposits2.png";
import home6 from "../../assets/sign-up.png";

const CFDCommodities = () => {
  // ✅ First section data
  const statsData = {
    title: "Start CFD Commodities trading with RightTrade Capital",
    subtitle:
      "Trade the most popular CFD Commodities majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  // ✅ Second section data
  const CFDCommoditiesContent = {
    title: "Let’s Talk About Fees (Yes, All of Them)",
    description:
      "It’s easy to fall into the trap of looking only at spreads. Don’t do it. Sure, low spreads are important, especially in cfd commodity trading, where prices swing quickly and every pip counts—but you also need to ask:",
    benefits: [
      "What’s the commission per trade?",
      "Are there overnight swap charges?",
      "Is there an inactivity fee?",
      "What does withdrawal cost?",
      "Are there conversion charges for INR deposits?",
    ],
    paragraph:
      "A broker might advertise zero commission but hide their real profits in the spread. Or they’ll make withdrawals expensive. Or they’ll punish you for taking a break. Read everything, and when in doubt, ask directly.",
  };

  // ✅ Third section data (Why Trade CFD Commodities)
  const whyTradeFeatures = [
    {
      icon: <FaDollarSign size={40} className="text-[#FABF16]" />,
      title: "Unbeatable pricing on major FX Pairs",
      description:
        "We offer typically 0.0 spreads on major FX Pairs like EURUSD and USDJPY on our most popular account, Advantage.",
    },
    {
      icon: <FaBolt size={40} className="text-[#FABF16]" />,
      title: "Faster execution for a better price",
      description:
        "We execute your trades in milliseconds, so you'll always get the best market price.",
    },
    {
      icon: <FaGlobe size={40} className="text-[#FABF16]" />,
      title: "Globally trusted",
      description:
        "We're regulated and licensed under the FSC of the Republic of Mauritius and the UK's FCA, among others.",
    },
    {
      icon: <FaUniversity size={40} className="text-[#FABF16]" />,
      title: "Total fund security",
      description:
        "Trade with peace of mind. Your funds are fully segregated from our own and insured up to $1m.",
    },
  ];

  // ✅ Fourth section data (new reusable)
  const currencySectionData = {
    title:
      "How to Choose the Best Trading platform in India Without Getting Confused",
    paragraphs: [
      "Let’s not sugarcoat it—trying to pick the “right” forex broker in India can make even experienced traders feel like they’re playing darts in the dark. You Google a few names, read a dozen blog posts, maybe click on some reviews—and suddenly you’re more confused than when you started. One broker promises low spreads, another throws in a “welcome bonus,” and yet another claims lightning-fast withdrawals. But what does any of it mean for you, especially if you’re looking to get serious with cfd commodity trading or develop a reliable cfd indices trading strategy?",
      "The truth is, this isn’t a decision you want to rush. Because your broker isn’t just a gateway—it’s the infrastructure behind your every trade, your safety net when something goes wrong, and in many ways, your partner. And like any partnership, if the foundation is shaky, everything that follows is at risk.",
      "So, how do you cut through the clutter and choose wisely? Let’s break it down, step by step.",
    ],
    image: globeImg,
  };

  // ✅ Fifth section data (Video)
  const videoData = {
    title: "Does the Platform Work for You?",
    description:
      "Let’s be real—you’re going to spend hours on this platform. You’ll analyze charts, set up indicators, execute trades, monitor open positions, and adjust stop losses. If the platform feels like a maze or crashes when volatility hits, you’re in trouble.",
    paragraph:
      "Whether you're doing quick trades in cfd commodity trading where even seconds matter or following a longer-term cfd indices trading strategy, you need speed, clarity, and access to tools that work the way you think. Look for platforms like MetaTrader  4 or 5, which are standard across the industry for a reason. They’re fast, customizable, and packed with features. But also check whether the broker’s app is usable. Mobile trading is a must these days, and your broker should give you the option to react to markets on the go.",
  };

  //  Sixth section data

  const faqItems = [
    {
      question:
        "How much do I need to start trading CFD Commodities with RightTrade Capital?",
      answer:
        "The minimum deposit depends on the account type you choose. It can be as low as $10. Check account details on the RightTrade Capital website.",
    },
    {
      question: "Which account type is best for trading CFD Commodities?",
      answer:
        "RightTrade Capital offers various account types to suit different traders. Standard and ECN accounts are popular options depending on your strategy.",
    },
    {
      question: "Is CFD Commodities trading safe?",
      answer:
        "CFD Commodities trading involves risks. It is important to trade with a regulated broker and have a solid risk management plan in place.",
    },
    {
      question: "What is leverage and how does it work when trading FX?",
      answer:
        "Leverage allows you to control larger positions with a smaller amount of capital. It amplifies both profits and losses.",
    },
    {
      question: "What currency pairs can I trade with RightTrade Capital?",
      answer:
        "RightTrade Capital offers a wide range of currency pairs including majors, minors, and exotics. Visit the RightTrade Capital website for the full list.",
    },
  ];

  const pageURL = "https://www.righttradecapital.com/cfd-commodity-trading";

  return (
    <>
      <Helmet>
        <title>CFD Commodity Trading | RightTrade Capital Official</title>

        <meta
          name="description"
          content="Trade global markets with RightTrade Capital’s CFD commodity trading. Tight spreads, fast execution & a trusted CFD trading platform."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="CFD Commodity Trading | RightTrade Capital Official"
        />
      </Helmet>

      <div className="w-full">
        {/*  1 Section */}
        <StatsSection {...statsData} />
        {/*  2 Section */}
        <ForexTradeSection
          title={CFDCommoditiesContent.title}
          description={CFDCommoditiesContent.description}
          benefits={CFDCommoditiesContent.benefits}
          paragraph={CFDCommoditiesContent.paragraph}
          bgcolor="bg-[#121733]"
          textcolor="text-white"
        />

        {/*  3 (New Reusable) */}
        <CurrencyInfoSection {...currencySectionData} />

        {/* 5 (New Reusable) */}
        <VideoSection {...videoData} />

        <SideImageTextSection
          image={manageFundsImg}
          title="Deposits and Withdrawals Shouldn’t Be a Nightmare"
          paragraphTextColor="text-black"
          paragraphs={[
            "You’re in India. Your broker should know that. That means UPI, net banking, maybe even Paytm. Deposits should be instant or close to it. Withdrawals should take 24–48 hours at most, and the process should be simple.",
            "It’s shocking how many people ignore this part—until they can’t get their money out.",
            "Fast deposits are great, but fast withdrawals are non-negotiable. If you’re trading cfd commodity trading positions with tight capital, slow withdrawals could block your next trade. Confirm payment methods. Ask about withdrawal times. Don’t leave it until later.",
          ]}
        />

        <ImageTextSections
          title="Good Support Isn’t a Luxury—It’s a Lifeline"
          description={`You’ll have questions. Everyone does. Whether it’s setting up your cfd indices trading strategy, verifying your documents, or figuring out margin calls, you’ll eventually need help.
The best brokers offer 24/5 or even 24/7 support, with real people who understand trading—not scripted bots reading from a sheet.

       `}
          paragraph="If possible, test support before opening an account. Ask a complex question. Gauge how fast and helpful the response is. If they can’t explain basic trading terms or delay responses for hours, walk away."
          // image={commissionsImage}
          reverse={false}
          noButton={true}
          bgcolor="bg-[#121733]"
          textcolor="text-white"
        />

        <FeatureSection
          title="Regulation Isn’t Boring—It’s Essential"
          paragraph="This part might not sound exciting, but it’s where most new traders make their first mistake. You see a broker offering a huge bonus or promising insane leverage, and it looks tempting—but they’re not regulated.
Stop right there.
If your broker isn’t licensed by a serious regulatory authority—like the FCA in the UK, CySEC in Europe, or ASIC in Australia—you’re taking a huge risk. In India, forex is technically allowed only under strict guidelines. Many Indian traders go with international brokers for access to global CFD markets, which is fine—as long as those brokers are properly regulated.
Platforms like Right Trade Capital, for example, operate under international compliance and give Indian traders safe access to global markets, including cfd commodity trading and a wide range of CFDs on indices, currencies, and even stocks.
."
          // features={features}
          bgcolor="bg-[#fff]"
          textcolor="text-black"
        />

        <ImageTextSections
          title="Asset Variety Gives You Flexibility"
          description={`Markets don’t move the same way all the time. Sometimes gold is trending. Sometimes the US30 is showing momentum. And other times, it’s a slow week across the board. `}
          paragraph="The more instruments your broker offers, the more ways you have to pivot your strategy.
For example, if your cfd indices trading strategy isn’t working due to low volatility, you might shift into cfd commodity trading to catch a move in natural gas or silver. But if your broker only offers forex pairs and one or two indices, you’re stuck.
Choose a broker that lets you move between commodities, indices, forex, and maybe even crypto—without needing to switch platforms."
          // image={commissionsImage}
          reverse={false}
          noButton={true}
          bgcolor="bg-[#121733]"
          textcolor="text-white"
        />

        <SideImageTextSection
          image={manageFundsImg}
          title="First Know Why You’re Trading"
          paragraphTextColor="text-black"
          paragraphs={[
            "Most people skip this part. They jump in because they see a few influencers talking about forex wins or someone mentioned gold skyrocketing last week. But you can’t choose the right broker until you know what you’re looking to trade—and how you plan to trade it.",
            "If you’re planning to trade oil, silver, gold, or even natural gas, you’re stepping into the world of cfd commodity trading. These markets move differently compared to currency pairs—they’re more sensitive to global news, supply chain disruptions, and political tension. On the other hand, if your focus is broader and you’re looking at overall market movements—think S&P 500, FTSE 100, or even the Indian Nifty—you’ll need a more structured cfd indices trading strategy, one that involves studying trends, economic indicators, and using tools like Fibonacci retracements or moving averages.",
            "So before you get dazzled by “0.1 pip spreads,” ask yourself: are you more interested in commodities, currencies, or indices? Because that one decision shapes the entire search for your broker.",
          ]}
        />

        <SecurityRegulationSection
          image={home6}
          title="Final Thoughts: Don’t Rush This Decision"
          introParagraph="Forex trading already involves risk. Don’t add to it by choosing the wrong broker. Whether you’re diving into cfd commodity trading to catch trends in gold and oil, or refining a cfd indices trading strategy for consistent long-term performance, your broker can either support your success—or sabotage it. "
          closingParagraph="Take your time. Don’t go by what’s popular—go by what works for your needs. Read reviews, test the platform, verify regulation, and always double-check the fine print.
        Brokers like Right Trade Capital, for instance, offer regulated access, flexible platforms, a wide range of CFDs, and funding options that suit Indian traders. If you're serious about growing as a trader, choosing the right broker is the first—and possibly most important—step."
        />
      </div>
    </>
  );
};

export default CFDCommodities;
