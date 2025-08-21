import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../../components/common/StatsSection";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import SideImageTextSection from "../common/SideImageTextSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import TextImageSection from "../common/TextImageSection";
import WhyTradeWithFXTM from "../common/WhyTradeWithFXTM";
import { Scale, GlobeLock, TrendingUp, BookOpen } from "lucide-react";
import FaqSection from "../common/FaqSection2";
import AwardsSection from "../common/AwardsSection";
import TrustCTASection from "../common/TrustCTASection";
import MarketViewFeaturen from "../common/MarketViewFeaturen";
import TradingAccountComparison from "../common/TradingAccountComparison";
import FeatureSection from "../common/FeatureSection";
import { FaChartLine, FaLayerGroup, FaSignal } from "react-icons/fa";
import img from "../../assets/account2.png";
import imgn from "../../assets/account3.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";
import bannerImage from "../../assets/account1.png";

const AccountsOverview = () => {
  const featureData = [
    {
      icon: <FaChartLine />,
      heading: " 1. Advantage Trading Account",
      paragraph:
        "This account is great for traders that need tight spreads.If you want the Lowest Spread Trading Account and fast execution, the Advantage Account is the best choice.",
      points: [
        "Minimum Deposit: $/€/£ 200",
        "Spreads start at 0.0 pips.",
        "Fees:",
        "$3.50 for each lot on FX",
        "$2 for every million on Spot Metals",
        "CFDs cost $2.50 per million",
        "0.03% for CFDs in crypto",
        "$0.02 per lot for stocks and ETFs",
        "Instruments: FX, Spot Metals, Indices, Commodities, Crypto CFDs, Stock CFDs (MT5), and ETFs (MT5)",
      ],
    },
    {
      icon: <FaLayerGroup />,
      heading: "2. Advantage Plus Trading Account",
      paragraph:
        "Lets you trade without paying any fees.The Advantage Plus Account is for traders who want to trade Forex without paying commissions and have access to hundreds of products.",
      points: [
        "Minimum Deposit: $/€/£ 200",
        "Spreads start at 1.5 pips",
        "Commissions: None",
        "Instruments: FX, Spot Metals, Indices, Commodities, Crypto CFDs, Stock CFDs (MT5 only), ETFs (MT5 only)",
      ],
    },
    {
      icon: <FaSignal />,
      heading: "3. Advantage Stocks Trading Account",
      paragraph:
        "Designed for stock CFD traders.If you trade stocks and wish to pay low fees and get Commission-Free Forex Trading, the Advantage Stocks Account is the best choice.",
      points: [
        "Minimum Deposit: $200",
        "Spreads start at $0.06 per share",
        "Commissions: None",
        "Instruments: Only stocks",
      ],
    },
  ];

  const featuresData = [
    {
      icon: <Scale size={40} strokeWidth={2} className="text-[#FABF16]" />,
      title: "For the lowest trading fees",
      description:
        "For the lowest trading fees → Lowest Spread Trading Account",
    },
    {
      icon: <GlobeLock size={40} strokeWidth={2} className="text-[#FABF16]" />,
      title: "For simplicity",
      description:
        "For simplicity → Advantage Plus (Commission-Free Forex Trading)",
    },
    {
      icon: <TrendingUp size={40} strokeWidth={2} className="text-[#FABF16]" />,
      title: "For stock CFDs",
      description:
        "For stock CFDs → Advantage Stocks for serious stock trading.",
    },
  ];
  const pageURL =
    "https://www.righttradecapital.com/best-forex-trading-account";

  const accountData = [
    {
      name: "Advantage Stocks",
      minDeposit: "$200",
      spreads: "From 6 cents",
      commissions: "Zero",
      instruments: ["Stocks"],
      highlighted: false,
    },
    {
      name: "Advantage",
      minDeposit: "$/€/£ 200",
      spreads: "From 0.0",
      commissions:
        "$3.5 per lot on FX\n$2 per million on Spot Metals\n$2.5 per million on CFDs\n0.03% for Crypto\n$0.02/lot on ETFs/Stocks",
      instruments: [
        "FX",
        "Spot Metals",
        "Index CFDs",
        "Commodity CFDs",
        "Cryptocurrency CFDs",
        "Stocks CFDs (MT5)",
        "ETFs (MT5)",
      ],
      highlighted: true,
    },
    {
      name: "Advantage Plus",
      minDeposit: "$/€/£ 200",
      spreads: "From 1.5",
      commissions: "Zero",
      instruments: [
        "FX",
        "Spot Metals",
        "Index CFDs",
        "Commodity CFDs",
        "Cryptocurrency CFDs",
        "Stocks CFDs (only MT5)",
        "ETFs (only MT5)",
      ],
      highlighted: false,
    },
  ];

  const faqItems = [
    {
      question: " Which Forex trading account is the best?",
      answer:
        "Choose Advantage if you want very little spreads. Choose Advantage Plus for Forex trading with no fees.",
    },
    {
      question: " Is it possible to trade without paying a fee?",
      answer:
        "Yes. With both Advantage Plus and Advantage Stocks accounts, you may trade Forex without paying a commission.",
    },
    {
      question: "What is the account with the lowest spread?",
      answer:
        "The Advantage account is the lowest spread trading account we provide, with a starting point of 0.0 pips.",
    },
    {
      question: "Are these accounts easy for beginners to use?",
      answer:
        "Yes, even our top Forex trading accounts have modest minimum deposits and are easy to set up.",
    },
  ];
  const awardsItems = [
    { imageSrc: fund9 },
    { imageSrc: fund10 },
    { imageSrc: fund11 },
    { imageSrc: fund12 },
  ];
  const withdrawSteps = [
    "Log in to MyRightTrade Capital and click on 'My Money'.",
    "Choose your payment method and click 'Withdraw'.",
    "Pick the account or wallet you want to take money out of.",
    "Fill out the form and submit it.",
  ];
  return (
    <>
      <Helmet>
        <title>
          Best Forex Trading Account | Commission-Free Forex Trading
        </title>

        <meta
          name="description"
          content="Trade confidently with RightTrade Capital. Enjoy transparent pricing, ultra-fast execution, and competitive spreads. Choose the best trading account to achieve your financial goals."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Best Forex Trading Account | Commission-Free Forex Trading"
        />
      </Helmet>

      <StatsSection
        title="RightTrade Capital: A Look at Your Accounts"
        subtitle="Look at our trading accounts side by side to discover the one that works best for you."
        buttonText="Learn more"
        image={bannerImage}
      />

      <FeatureSection
        title="Start Trading Now"
        paragraph="The markets are ready. Are you? RightTrade Capital provides the Best Forex Trading Account for your needs, whether you desire the Lowest Spread Trading Account for accuracy or Commission-Free Forex Trading for ease.."
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#2a2d45]"
        textcolor="text-[#ffffff]"
        title="Why it's important to choose the right account"
        paragraphs={[
          "Choosing the best Forex trading account isn't just about the statistics; it's also about making sure the account works for you.The appropriate account can benefit you:",
        ]}
        listItems={[
          "The Lowest Spread Trading Account lets you trade for less money.",
          "With Commission-Free Forex Trading choices, you may trade with confidence.",
          "Match the features to the trading platform you like best: MetaTrader 4 or MetaTrader 5.",
        ]}
        description="At RightTrade Capital, you may choose an account that fits your trading ambitions."
      />

      <TradingAccountComparison accountData={accountData} />

      <HowToWithdrawSection
        title="Easy to Get Money and Take It Out"
        steps={withdrawSteps}
      />

      <MarketViewFeaturen
        title="Types of Trading Accounts"
        // subtitle="Explore cutting-edge tools, real-time data, and unmatched trading insights—all in one place."
        features={featureData}
        bgColor="bg-[#121733]"
        textcolor="text-[#fff]"
      />
      <TextImageSection
        imgSrc={imgn}
        title="Why Do Business with RightTrade Capital?"
        listItems={[
          "Costs that can't be beat – From the Lowest Spread Trading Account to Commission-Free Forex Trading, we provide the best prices.",
          "Open and honest – We share our performance stats (spreads, execution speed, slippage) so you can be sure you are using the Best Forex Trading Account.",
          "Execution with lightning speed – Our system ensures you get the greatest deal.",
          "Market information & education – Free materials, seminars, and analysis for all account types.",
        ]}
        textcolor="text-black"
      />
      <WhyTradeWithFXTM
        title="Which Account Should You Pick?"
        features={featuresData}
      />
      <FaqSection faqs={faqItems} />
    </>
  );
};

export default AccountsOverview;
