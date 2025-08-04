import React from "react";
import StatsSection from "../common/StatsSection";
import ExpertTrader from "../ExpertTrader";
import FaqSection from "../common/FaqSection2";
import AwardsSection from "../common/AwardsSection";
import SideImageTextSection from "../common/SideImageTextSection";
import TextImageSection from "../common/TextImageSection";
import MarketViewFeatures from "../common/MarketViewFeatures";
import MarketViewFeaturen from "../common/MarketViewFeaturen";
import { FaChartLine, FaLayerGroup, FaSignal } from "react-icons/fa";
import MarketViewFeatureSection from "../common/MarketViewFeatureSection";
import MarketInsightCard from "../common/MarketInsightCard";
import MarketViewSteps from "../common/MarketViewSteps";
// import insight1 from "../../assets/insight1.jpg";
// import insight2 from "../../assets/insight2.jpg";
// import insight3 from "../../assets/insight3.jpg";

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
  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", // or local import
      heading: "Step 1: Make an account, either a real one or a demo one.",
      description:
        "To use MarketView, you need to join up for RightTrade Capital and pick between a demo account and a genuine trading account.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "Step 2: Launch the MarketView Dashboard",
      description:
        'Once you\'re logged in, find the "MarketView" area on your dashboard. You can modify the charts and see charts that are powered by TradingView.',
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Step 3: Get your work area ready",
      description:
        "Make watchlists, add indicators, and save templates that will help you attain your trading goals.",
    },
  ];
  const forexInsights = {
    title: "How Forex TradingView Can Help You Understand the Market Better",
    sections: [
      {
        subheading: "What People in the Area Are Saying",
        text: "You can acquire trade ideas from TradingView members who are certified, such expert traders and analysts who have been doing it for a long time. Every day, check in with your feelings, think about why you do things, and look for new ways to accomplish things.",
        // image: insight1,
      },
      {
        subheading: "How fast and accurately data is",
        text: "Traders can trust low-latency prices and true bid/ask spreads since the data comes from a lot of different places where people can buy and sell things and is continually changing.",
        // image: insight2,
      },
      {
        subheading: "How Different Assets Are Linked",
        text: "You may use TradingView markets to examine how currency pairings move in connection to gold, oil, stock indexes, or cryptocurrencies. This will help you deal with your risks better.",
        // image: insight3,
      },
    ],
  };
  const features = [
    {
      icon: "chart",
      heading: "1. Forex charts that change in real time",
      paragraph:
        "You can monitor how the prices of all the main currency pairs fluctuate right away. With chart overlays, volume profiles, and historical data, you can see everything about the market.",
      list: [
        "EUR/USD",
        "GBP/USD",
        "USD/JPY",
        "AUD/USD",
        "Other currencies, such as USD/CAD",
      ],
    },
    {
      icon: "layout",
      heading: "2. Layouts that can be modified",
      paragraph:
        "You may customise the look of your trading interface by adding more colour schemes, toolbars, and chart panels...",
    },
    {
      icon: "indicators",
      heading: "3. A set of technical indications",
      paragraph:
        "There are more than 100 indicators in MarketView, including RSI, MACD, Moving Averages, Ichimoku Cloud, Bollinger Bands, and more.",
      list: [
        "Following the trends",
        "When prices break out, trading",
        "Back to the average",
        "Scalping and day trading setups",
      ],
    },
    {
      icon: "alerts",
      heading: "4. Alerts and reminders regarding pricing changes",
      paragraph:
        "Don't let any opportunities slip away. You can make your own alerts for price levels, indicator crossovers, or increases in volume.",
    },
    {
      icon: "calendar",
      heading: "5. Putting together the news and the economic calendar",
      paragraph:
        "Stay up to date on crucial economic events, such as changes in interest rates, the release of the CPI, and the Non-Farm Payrolls.",
    },
    {
      icon: "script",
      heading: "6. Looking at things over a number of time periods",
      paragraph:
        "You may quickly switch between 1-minute scalping charts and long-term weekly overviews with MarketView.",
    },
    {
      icon: "script",
      heading: "7. Testing strategies with TradingView Scripts",
      paragraph:
        "Pine Script is TradingView's own programming language that helps skilled traders develop their own indicators and try out their methods.",
    },
  ];
  const featuresData = [
    "Real-time updates for FX market charts",
    "News feeds that are updated in real time",
    "Both basic and technological indicators",
    "Alerts about changes in prices and the sentiment of the market",
    "Ideas and predictions for trading in the community",
    "RightTrade Capital clients get more knowledge about the currency market than anyone else because of this multi-dimensional strategy.",
  ];
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
  const featureData = [
    {
      icon: <FaChartLine />,
      heading:
        "1. Tools for making charts that are more advanced It works with TradingView.",
      paragraph:
        "The best online chart-making programme is TradingView. Our Forex Market Trading MarketView brings together TradingView's simple features into one spot so traders can see trends, create indicators, and keep an eye on strategies over a range of time frames.",
      points: [
        "Over 100 built-in indicators",
        "Tools for making Fibonacci retracements, trend lines, and other things",
        "You can add your own scripts to Pine Script.",
        "Changes happen right away, and you might see more than one sign at a time.",
        "RightTrade Capital's forex tradingview tools are simple to use, but they also have a lot of information.",
      ],
    },
    {
      icon: <FaLayerGroup />,
      heading: "2. TradingView has a variety of markets where you can trade.",
      paragraph:
        "MarketView is different from other software since it lets you trade in more than one TradingView market. These are some of the markets:",
      points: [
        "Major, minor, and exotic currencies in pairs",
        "People trade gold, silver, and crude oil.",
        "DAX, FTSE100, and US30 are all examples of indices.",
        "Cryptocurrencies like Bitcoin, Ethereum, and others",
        "ETFs and stocks",
      ],
    },
    {
      icon: <FaSignal />,
      heading: "3. Forex TradingView Signals in Real Time",
      paragraph:
        "MarketView is a Forex TradingView platform that delivers traders real-time advise and setups from analysts from all over the world.",
      points: [
        "Indications that tell you when to purchase or sell",
        "Setups for trading in the community",
        "Analysts agree with chart breakdowns",
        "Sentiment gauges and heat maps",
      ],
    },
  ];

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
        bgColor="bg-[#fff]"
        textcolor="text-black"
        title="MarketView for Forex Trading: Get Live Analysis from RightTrade Capital"
        subtitle="Give yourself an advantage with our most popular account."
        paragraphs={[
          "You can't just trust your intuition to stay up with changes in the currency market these days. You need charting systems that are powerful, data that is up to date, and tools that are accurate. We at RightTrade Capital use the newest tools, including Forex Market Trading MarketView, to improve your trading experience and offer you an edge over your competitors. Our ecosystem links market data to the choices you can make, whether you're just starting out with currency trading or you're an experienced investor who wants to be sure of their choices.",
          "This post will show you how RightTrade Capital can help you make smarter judgements, trade better in TradingView markets, and back up your transactions with world-class data.",
        ]}
        paragraphTextColor="text-black"
      />
      <TextImageSection
        imgSrc={imgn}
        title="The Good Things About Trading in the Forex Market MarketView Helps You Trade Better"
        listItems={[
          "Visual charting makes it easy to see where to enter and exit, which cuts down on guesswork and trading based on emotions.",
          "Encourages people to create arrangements.",
          "MarketView is the ideal place to practice and get better at trading because it incorporates data from the present and the history.",
          "More to teach beginners.",
          "The execution went off without a hitch.",
          "RightTrade Capital's trading platform works with MarketView, and you may place trades immediately from your analysis window.",
        ]}
        bgColor="bg-[#121733]"
      />
      <MarketViewFeatures
        title="How does MarketView help customers trade in the Forex market?"
        description="How to Trade on the Forex Market MarketView is a complete trading platform that gives traders a lot of information on how currencies move throughout the world. It has current data feeds, powerful graphing tools, and information from the community. MarketView can see, analyse, and guess how the market will act since it works with Forex TradingView. MarketView gives you the following:"
        features={featuresData}
      />
      <MarketViewFeaturen
        title="Why is RightTrade Capital the Best Place to Get MarketView?"
        subtitle="Explore cutting-edge tools, real-time data, and unmatched trading insights—all in one place."
        features={featureData}
        bgColor="bg-[#121733]"
        textcolor="text-[#fff]"
      />
      <MarketViewFeatureSection
        title="Here are some of the things that RightTrade Capital's Forex Market Trading MarketView can do:"
        description="These are the primary reasons why FX traders find our MarketView interface useful today."
        features={features}
      />
      <MarketInsightCard
        title={forexInsights.title}
        sections={forexInsights.sections}
      />
      <MarketViewSteps
        title="How To Use RightTrade Capital's MarketView"
        steps={stepsData}
      />
    </div>
  );
};

export default MarketOverview;
