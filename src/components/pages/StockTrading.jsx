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
import FeatureListSection from "../common/FeatureListSection";
import MarketViewFeatures from "../common/MarketViewFeatures";
import statsBg from "../../assets/stock1.png";
import globeImg from "../../assets/globe.svg";

const StockTrading = () => {
  const featuresData = [
    "A platform that’s fast",
    "Easy to understand",
    "Packed with useful tools",
    "Transparent with pricing",
    "Backed by real support",
    "And safe for long-term use...",
  ];

  const features = [
    {
      heading: "It Doesn’t Feel Like Rocket Science",
      description:
        "Some platforms are way too complex. Right Trade Capital keeps it simple—everything’s laid out clearly. Want to check your portfolio? One tap. Place a trade? Two taps. Done.",
    },
    {
      heading: "Speed = Confidence",
      description:
        "Speed matters, especially when markets are bouncing. Right Trade Capital executes trades quickly, making the difference between profit and regret.",
    },
    {
      heading: "Mobile Trading That Doesn’t Suck",
      description:
        "Right Trade Capital’s mobile app actually works. It’s stable, fast, and lets you check watchlists, open charts, and trade in under 30 seconds.",
    },
    {
      heading: "Global Markets, Open to You",
      description:
        "Access shares from the U.S., Europe, Asia, and more. More strategies, more opportunities, more diversification.",
    },
    {
      heading: "Security That Doesn’t Keep You Up at Night",
      description:
        "Multiple layers of protection like 2FA, encryption, and session controls keep your info and funds safe without making login complicated.",
    },
    {
      heading: "You Don’t Get Charged for Breathing",
      description:
        "Right Trade Capital keeps pricing clean and upfront. No hidden fees, no surprise charges.",
    },
    {
      heading: "You Can Actually Learn While Using It",
      description:
        "Includes guides, FAQs, and tutorials inside the platform—helpful for beginners, while offering advanced features for pros.",
    },
    {
      heading: "Data That Helps—Not Overwhelms",
      description:
        "You get real-time data, clean charts, and tools you'll actually use—no fluff, no filler.",
    },
    {
      heading: "Customer Support That Talks Like a Human",
      description:
        "Real human support via chat, email, or voice—no endless hold music or unhelpful bots.",
    },
    {
      heading: "Built for Real People, Not Just Pros",
      description:
        "Whether you're investing $100 or $100,000, Right Trade Capital meets you where you are.",
    },
  ];

  // ✅ First section data
  const statsData = {
    title: "Start Stock Trading trading with RightTrade Capital",
    subtitle:
      "Trade the most popular Stock Trading majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  // ✅ Second section data
  const StockTradingContent = {
    title: "What Makes a Trading Platform The Best?",
    description:
      "Let’s be real for a second: everyone throws around the term best stock trading platform, but no one seems to agree on what that means. Is it low fees? Slick design? Advanced tools?Honestly, it’s a mix of a few things:",
    benefits: [
      "Is it easy to use?",
      "Are your trades executed fast?",
      "Can you access real-time data?",
      "Does it offer help when you need it?",
    ],
  };

  // ✅ Third section data (Why Trade Stock Trading)
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
      "What Smart Investors Look for in the Best Stock Trading Platforms Today",
    paragraphs: [
      "Let’s not sugarcoat it: finding the best stock trading platform these days can feel like scrolling through Netflix — too many options, too many features, and no clue where to start.",
      "Some platforms promise no fees. Others throw fancy charts at you. But when it comes down to it, what really matters is: Can you trade confidently and without drama",
      "That’s exactly what we’re diving into today. Whether you’re brand new to investing or already checking your trades between lunch meetings, this guide will help you figure out which platform suits your needs—and why Right Trade Capital is catching attention from serious traders in 2025.",
    ],
    image: globeImg,
  };

  // ✅ Fifth section data (Video)
  const videoData = {
    videoUrl: "https://www.fxtm.com/trading-instruments/stocks-trading/",
    title: "Want to Check It Out?",
    description: "Visit  to explore what Right Trade Capital offers.",

    linkHref: "#",
  };

  //  Sixth section data

  const faqItems = [
    {
      question:
        "How much do I need to start trading Stock Trading with RightTrade Capital?",
      answer:
        "The minimum deposit depends on the account type you choose. It can be as low as $10. Check account details on the RightTrade Capital website.",
    },
    {
      question: "Which account type is best for trading Stock Trading?",
      answer:
        "RightTrade Capital offers various account types to suit different traders. Standard and ECN accounts are popular options depending on your strategy.",
    },
    {
      question: "Is Stock Trading trading safe?",
      answer:
        "Stock Trading trading involves risks. It is important to trade with a regulated broker and have a solid risk management plan in place.",
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

  const pageURL =
    "https://www.righttradecapital.com/best-stock-trading-platform";

  return (
    <>
      <Helmet>
        <title>
          Best Stock Trading Platform | Trade with Confidence at RightTrade
          Capital
        </title>

        <meta
          name="description"
          content="Find the best stock trading platform with RightTrade Capital. Enjoy secure, fast, and user-friendly stock trading with advanced tools."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Best Stock Trading Platform | Trade with Confidence at RightTrade Capital"
        />
      </Helmet>

      <div className="w-full">
        {/*  1 Section */}
        <StatsSection {...statsData} />
        {/*  2 Section */}
        <ForexTradeSection
          title={StockTradingContent.title}
          description={StockTradingContent.description}
          benefits={StockTradingContent.benefits}
        />
        {/*  3 Section */}
        <FeatureListSection
          title="Why Right Trade Capital Stands Out"
          subtitle="So let’s talk about Right Trade Capital. It’s not the loudest name out there, but more and more traders are picking it up—and not looking back. And for good reason."
          items={features}
        />
        {/*  4 (New Reusable) */}
        <CurrencyInfoSection {...currencySectionData} />

        {/* 5 (New Reusable) */}
        <VideoSection {...videoData} />

        <MarketViewFeatures
          title="Final Thoughts: Is This Your Best Stock Trading Platform?"
          description="Choosing a platform isn’t about finding “the most advanced” or “the biggest brand.” It’s about finding one that fits your style—and supports your goals.
If you're looking for:"
          features={featuresData}
        />
      </div>
    </>
  );
};

export default StockTrading;
