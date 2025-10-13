import React from "react";
import { Helmet } from "react-helmet";
import { FaDollarSign, FaBolt, FaGlobe, FaUniversity } from "react-icons/fa";
import StatsSection from "../common/StatsSection";
import ForexTradeSection from "../common/ForexTradeSection";
import CurrencyInfoSection from "../common/CurrencyInfoSection";
import FaqSection from "../common/FaqSection2";
import FeatureListSection from "../common/FeatureListSection";
import SideImageTextSection from "../common/SideImageTextSection";
import ImageTextSections from "../common/ImageTextSections";
import FeatureSection from "../common/FeatureSection";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import home6 from "../../assets/sign-up.png";
import commissionsImage from "../../assets/deposits1.png";
import fxTradingImg from "../../assets/currency3.png";
// import manageFundsImg from "../../assets/deposits2.png";
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
      heading: "1. Simple & Intuitive Platform",
      description:
        "Many stock market trading platforms are overly complicated. RightTrade Capital is built with the focus on clarity and ease of use. You want to take a peek at your portfolio? One click. Want to place a trade? Two clicks. It's done.",
    },
    {
      heading: "2. Speed = Confidence",
      description:
        "Quick trade execution is very important, especially when markets are volatile. RightTrade Capital guarantees that trades are carried out in real time which allows you to act swiftly with confidence.",
    },
    {
      heading: "3. Mobile Trading That Works",
      description:
        "The mobile app is reliable, quick, and comes loaded with features. Through the app, you can do all these activities in less than half a minute: watchlist checking, chart opening, and trade executing.",
    },
    {
      heading: "4. Access to Global Markets",
      description:
        "You can trade shares of companies from the U.S., Europe, Asia, and many other regions. You can not only do this to diversify your portfolio but also to use multiple strategies and tap into foreign market opportunities.",
    },
    {
      heading: "5. Secure & Transparent Trading",
      description:
        "Two-factor authentication, encryption, and session controls protect your information and funds. Transparent pricing is the guarantee of no hidden fees or unexpected charges.",
    },
    {
      heading: "6. Trade and Learn Simultaneously",
      description:
        "Beginners are guided by the built-in tutorials, FAQs, and walkthroughs as they practice real trades. Meanwhile, advanced traders also gain from the presence of complex tools which do not take up much space.",
    },
    {
      heading: "7. Real-Time Data That Matters",
      description:
        "No one is bombarded with lots of unnecessary information while having easy access to clean charts, live quotes, and actionable insights.",
    },
    {
      heading: "8. Human Customer Support",
      description:
        "Powered by chat, email, or voice, real people will assist you when you need them. You do not have to wait for a long time before getting your turn with a human or dealing with robots.",
    },
    {
      heading: "9. best investing platforms",
      description:
        "Regardless of whether you invest $100 or $100,000, the platform will be your trading style's best friend.",
    },
    {
      heading: "10. Powerful Analytical Tools",
      description:
        "Economic Calendar for key global events.Fully supports the best online stock trading experience.",
    },
  ];

  // ✅ First section data
  const statsData = {
    title: "India’s Best Stock Market Trading Platform",
    subtitle:
      "Access global markets, real-time tools, and secure trading — all on a trusted stock market trading platform built for confident investors.",
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
    title: "Benefits of a Reliable Stock Market Trading Platform",
    paragraphs: [
      "Enhanced Trading Speed and Efficiency – You can execute your trades instantly with almost no delay, and this will reduce your slippage and increase your profits.",
      "Accurate Market Data – Anyone can get real-time charts, quotes, and analytics for their trading decisions.",
      "Comprehensive Risk Management – Just a few of the many features are stop-loss, take-profit, and hedging strategies that aim to help you secure your investments.",
      "User-Friendly Interface – No registration or subscription is required to use the intuitive dashboards and navigation designed for traders of all levels.",
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

  const faqs = [
    {
      question: "Is RightTrade Capital regulated?",
      answer:
        "Yes, it is a fully regulated stock market trading platform that offers safe trades worldwide.",
    },
    {
      question: "What markets can I trade on?",
      answer:
        "Stocks, ETFs, indices, commodities, crypto CFDs, futures, and options.",
    },
    {
      question: "Can I try a demo account?",
      answer:
        "Yes, the demo account on our platform allows risk-free practice of online stock trading.",
    },
    {
      question: "What is the minimum deposit?",

      answer: "This varies depending on the type of account selected.",
    },
    {
      question: "Are Islamic accounts provided?",
      answer:
        "Yes, in fact, we offer swap-free and Shariah-compliant accounts.",
    },
    {
      question: "Can I trade on my mobile?",
      answer:
        "Correct, in fact, we have totally working iOS and Android apps that can be used whenever and wherever.",
    },
    {
      question: "How fast are withdrawals processed?",
      answer:
        "The majority of withdrawal requests are fulfilled within 24 hours.",
    },
    {
      question: "What spreads and fees apply?",

      answer:
        "For ECN accounts spreads are zero as low as 0.0 pips are available. Account fees differ by account.",
    },
    {
      question: "Do you provide learning materials?",
      answer:
        "Yes, education materials are included, such as trading guides, webinars, tutorials, and market insights.",
    },
    {
      question: "Why choose RightTrade Capital over other brokers?",
      answer:
        "Is it because of the top features that include complete trust, professional tools, prompt trade, availability of global market, and resources for self-learning that makes us one of the top Indian stock trading platforms?",
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
        <FeatureSection
          title="Safe Transactions & Easy Withdrawals"
          paragraph="RightTrade Capital makes sure that deposits and withdrawals are done quickly, safely, and transparently. Multiple payment methods and a regulated environment are what guarantee that all users will have safe and smooth trading."
        />

        <SideImageTextSection
          image={fxTradingImg}
          bgColor="bg-[#121733]"
          textcolor="text-white"
          title="Why Traders Choose RightTrade Capital"
          paragraphTextColor="text-white"
          paragraphs={[
            "We give traders everything they need to trade swiftly and correctly on the global currency markets at RightTrade Capital.One of the most fundamental things to know about trading forex is how the major currency pairings function.",
          ]}
          listItems={[
            "Secure and regulated stock market trading platform",
            "Ultra-low spreads and deep market liquidity",
            "High-speed execution for timely trades",
            "Global market access across 500+ instruments",
            "Web, mobile, and desktop compatibility",
            "24/5 multilingual customer support",
          ]}
        />

        <ImageTextSections
          title="Markets Available on Our Online Stock Trading Platform"
          description={`Trade with ease and flexibility across multiple asset classes to maximize returns and implement the best online stock trading strategies:

        • Stocks & Equities &ndash; Real-time access to global leaders.
        • Indices &ndash; Trade NASDAQ, Dow Jones, S&P 500, NIFTY50.
        • ETFs & Mutual Funds &ndash; Diversified portfolios with risk management.
        • Commodities &ndash; Gold, silver, oil for long-term investment and hedging.
        • Crypto CFDs &ndash; Bitcoin, Ethereum, and more without wallets.
        • Futures & Options &ndash; Hedge or speculate with flexible leverage.`}
          image={commissionsImage}
          reverse={false}
          noButton={true}
          bgcolor="bg-white"
          textcolor="text-[#121733]"
          paragraph="We have the tools and help you need to trade precious metals for short-term profits or to protect your money over the long term."
        />
        {/*  3 Section */}
        <FeatureListSection
          title="Why RightTrade Capital Is the Best Stock Market Trading Platform"
          subtitle="RightTrade Capital operates under full authority and is a stock market trading platform that clients can depend on to get safe and reliable access to the different market instruments all over the world. As a stock trading platform that can be trusted and one of the top platforms for stock trading, we unite state-of-the-art technology, rapid execution, and secure infrastructure for traders and investors regardless of their knowledge level."
          items={features}
        />
        {/*  4 (New Reusable) */}
        <CurrencyInfoSection {...currencySectionData} />
      </div>

      <SideImageTextSection
        image={fxTradingImg}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="Future of Online Stock Market Trading Platforms"
        paragraphTextColor="text-white"
        paragraphs={[
          "AI & Machine Learning Integration – The use of AI led to predictive analytics, robotic trading, and tailor-made suggestions.",
        ]}
        listItems={[
          "Blockchain & Digital Ledger Technology – Technology embracing transparency and certified records aiding trust and regulation.",
          "Global Access & Connectivity – Customers have the opportunity to trade across borders and access international markets through the internet.",
          "Enhanced Mobile Trading Experiences – Traders can have their mobile devices equipped with real-time alerts, analytics, and trade execution on mobile apps.",
          "Cloud-Based Platforms – The advantages are high scalability, reliability, and uninterrupted access to market information.",
          "Education & Community Integration – Continuous learning with the help of the Embedded tutorials, webinars and the social trading features.",
        ]}
      />

      <ImageTextSections
        title="Why You Should Choose RightTrade Capital"
        description={`Trade with ease and flexibility across multiple asset classes to maximize returns and implement the best online stock trading strategies:

        • A Step by Step regulated Trusted Stock Trading Platform
        • Quick execution with tight spreads
        • Take a chance on any of the world's largest shares, mixing, and futures.
        • Comes with a web, mobile, and desktop which are all compatible with multiple-device.
        • Adds up a trader's feelings with an Analytics team, backed by an educational resource.
        • Futures & Work on your account is very smooth and fast.`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
        paragraph="We have the tools and help you need to trade precious metals for short-term profits or to protect your money over the long term."
      />

      <SecurityRegulationSection
        image={home6}
        title="Advanced Trading Platforms"
        introParagraph="There are a lot of good reasons to trade gold and silver:"
        bulletPoints={[
          "MetaTrader 4 (MT4) – Full-featured platform with live charts, expert advisors, one-click trading, multiple languages supported.",
          "WebTrader – Simply trade directly in your browser, no installation needed.",
          "Mobile Apps – iOS and Android apps that allow you to trade anytime and anywhere with the push notifications of the latest updates.",
        ]}
      />

      <FeatureSection
        title="Conclusion"
        paragraph="In short, a reliable stock trading platform is doing wonders for traders. Fast decision-making, reliability, and security come along with advanced tools that allow one to be friendly with the trading world. Moreover, with the ever-evolving technologies like AI, blockchain, and cloud-based solutions, the online trading platform keeps getting smarter, more efficient, and being accessible from any part of the globe which in turn allows trading to thrive."
      />

      <FaqSection faqs={faqs} />
    </>
  );
};

export default StockTrading;
