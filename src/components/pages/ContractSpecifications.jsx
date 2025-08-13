import React from "react";
import StatsSection from "../common/StatsSection";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import SimpleCenteredTextSection from "../common/SimpleCenteredTextSection";
import ExpertTrader from "../ExpertTrader";
import FaqSection from "../common/FaqSection2";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import TradingInstrumentsTable from "../common/TradingInstrumentsTable";
import FeatureSection from "../common/FeatureSection";
import SideImageTextSection from "../common/SideImageTextSection";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import HelpSupportSectionlist from "../common/HelpSupportSectionlist";
import ExpertSupportSection from "../common/ExpertSupportSection";

import {
  FaComments,
  FaEnvelope,
  FaPhoneAlt,
  FaChartLine,
  FaGlobe,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

import manageFundsImg from "../../assets/deposits2.png";
import statsBg from "../../assets/contract1.png";
import home6 from "../../assets/sign-up.png";
import {
  FaBalanceScale,
  FaBolt,
  FaShieldAlt,
  FaPercentage,
} from "react-icons/fa";

const ContractSpecifications = () => {
  const platformFeatures = [
    {
      icon: <FaChartLine size={32} className="text-[#FABF16]" />,
      title: "MetaTrader 4",
      description: "All contract specs are optimized for MetaTrader 4.",
    },
    {
      icon: <FaGlobe size={32} className="text-[#FABF16]" />,
      title: "WebTrader",
      description: "Seamless trading via your browser with WebTrader.",
    },
    {
      icon: <FaAndroid size={32} className="text-[#FABF16]" />,
      title: "Android App",
      description: "Trade on the go with our Android application.",
    },
    {
      icon: <FaApple size={32} className="text-[#FABF16]" />,
      title: "iPhone App",
      description: "Use our iOS app to monitor and trade easily.",
    },
  ];

  const contractFeatures = [
    {
      icon: <FaBalanceScale />,
      title: "Clear Contracts",
      description: "Terms of the contract are clear and easy to understand.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Execution",
      description: "Quick forex order execution with minimal delay.",
    },
    {
      icon: <FaPercentage />,
      title: "Low Spreads",
      description: "Enjoy competitive spreads for Forex trading.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Platform",
      description: "A regulated and safe environment to trade confidently.",
    },
  ];
  const supportData = [
    {
      icon: <FaComments />,
      title: "Live Chat",
      description: "Get help in real-time with our 24/5 support agents.",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "Send your queries and receive detailed responses.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call for Help",
      description: "Talk to our experts and get all your doubts cleared.",
    },
  ];

  const instrumentsData = [
    {
      ticker: "AUDUSD",
      name: "Australian Dollar/US Dollar",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "-0.005",
      swapLong: "-0.0211",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "EURUSD",
      name: "Euro/US Dollar",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "0.0476",
      swapLong: "-0.1041",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "GBPUSD",
      name: "Great Britain Pound/US Dollar",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "-0.0211",
      swapLong: "-0.0314",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "NZDUSD",
      name: "New Zealand Dollar/US Dollar",
      minSpread: "0.1",
      pipValue: "0.01",
      swapShort: "0.0056",
      swapLong: "-0.0309",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "USDCAD",
      name: "US Dollar/Canadian Dollar",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "-0.0982",
      swapLong: "0.0407",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "USDCHF",
      name: "US Dollar/Swiss Franc",
      minSpread: "0",
      pipValue: "0.01",
      swapShort: "-0.1321",
      swapLong: "0.0659",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
    {
      ticker: "USDJPY",
      name: "US Dollar/Japanese Yen",
      minSpread: "0",
      pipValue: "1",
      swapShort: "-0.2204",
      swapLong: "0.0826",
      startTrading: "00:15:00",
      closeTrading: "23:55:00",
    },
  ];
  const faqItems = [
    {
      question: "What is a market?",
      answer:
        "A market is a place where buyers and sellers interact to trade financial instruments such as stocks, forex, commodities, etc.",
    },
    {
      question: "What are trading times?",
      answer:
        "Trading times refer to the hours during which trading is allowed on specific markets or exchanges. Forex is typically open 24 hours a day during weekdays.",
    },
    {
      question: "What is a 'ticker'?",
      answer:
        "A ticker is a unique symbol assigned to a traded asset. It helps traders and investors identify and track financial instruments.",
    },
    {
      question: "What's a swap?",
      answer:
        "A swap is the interest paid or earned for holding a position overnight in trading. It can be positive or negative depending on the interest rate differential between the currencies.",
    },
    {
      question: "What is a minimum spread?",
      answer:
        "Minimum spread is the lowest possible difference between the bid and ask price of a trading instrument offered by a broker.",
    },
    {
      question: "What is Pip value?",
      answer:
        "Pip value is the monetary worth of a one-pip movement in a forex trade. It helps determine how much profit or loss will be made per pip movement.",
    },
    {
      question: "What are lot sizes?",
      answer:
        "Lot sizes refer to the volume or quantity of a trade. In forex, 1 standard lot equals 100,000 units of the base currency.",
    },
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

  const statsData = {
    title: "Contract Specifications",
    subtitle:
      "See our minimum spreads, pip values, swap fees and other conditions.",
    buttonText: "Learn more",

    image: statsBg,
  };

  const breadcrumbData = {
    breadcrumbs: [
      { label: "RightTrade Capital", href: "/" },
      { label: "Markets At a Glance", href: "/markets" },
      { label: "Contract Specifications", href: "/contract-specifications" },
    ],

    description:
      "We aim higher than just resetting the standards within the forex industry - we also deliver the highest levels of transparency to all our clients. The statistics below show exactly why we're so proud of our trading conditions, which include some of the best spreads in the business.",
  };

  return (
    <>
      {/* Section 1 */}
      <StatsSection {...statsData} />
      {/* Section 2 */}
      <FeatureSection
        title="The Forex Contract Specifications from RightTrade Capital"
        paragraph="We value honesty at RightTrade Capital and make sure our clients have all the information they need to trade with confidence. Our detailed forex contract specifications make sure you know everything about the trading instrument, like the lot size, margin, swap rates, trading hours, and leverage. This is true whether you're trading forex, commodities, indices, or CFDs. Our comprehensive forex specification chart helps you plan your trades more accurately with reliable data."
        // features={features}
        paragraph2="You can make a good trading plan with correct information and tight spreads by looking at all of our contract specifications on this page. We cover every critical detail to help you succeed, from trading instrument specifications to leverage and margin requirements.
"
      />

      <SideImageTextSection
        image={manageFundsImg}
        title="Why Are the Details of a Forex Contract Important?"
        paragraphTextColor="text-white"
        bgColor="bg-[#121733]"
        textcolor="text-white"
        paragraphs={[
          "To do the following, it's very important to know the details of a contract:",
        ]}
        listItems={[
          "Getting the right size for trades",
          "Managing risk well",
          "Costs that come up out of nowhere, like swaps or commissions, should be avoided",
          "How to use high-volatility trades wisely",
          "Following the rules for when to trade and when to roll over",
          "Help for users 24 hours a day, five days a week",
        ]}
        paragraphs2={[
          "At RightTrade Capital, we always keep these settings up to date and easy to find. This way, you can always count on clear trading instrument specifications with no surprises.",
        ]}
      />

      <ExpertSupportSection
        icon={<FaChartLine size={32} />}
        title="Are you ready to trade with full confidence and knowledge?"
        description="You can open a live account with RightTrade Capital and explore the markets using fully transparent forex contract specifications tailored to support your success."
        buttonText="Open Live Account"
        buttonLink="/open-account"
      />

      <HelpSupportSectionlist
        title="Works with Other Platforms"
        paragraph="All of the specifications in our contracts are meant to work perfectly on all major trading platforms, ensuring consistent execution conditions and spreads."
        supportOptions={platformFeatures}
      />

      <SecurityRegulationSection
        image={home6}
        title="Why should you choose RightTrade Capital for clear contract terms?"
        // introParagraph="Your money and personal information are protected thanks to a top-notch security system:"
        bulletPoints={[
          "Detailed specifications for each instrument",
          "Leverage that can be changed and tight spreads",
          "Choices for Islamic traders that don't include swaps",
          "No fees or commissions that aren't clear",
          "Execution in real time on all platforms",
          "People who trade all over the world trust us",
        ]}
        closingParagraph="We align our values with the industry standards seen in brokers who offer transparent RightTrade Capital contract specifications, ensuring you get a world-class experience."
      />

      <HelpSupportSectionlist
        title="Do you need help figuring out what the specs mean?"
        paragraph="Our support team is available 24/5 to help you understand the terms and conditions of our forex contracts. We want to help you make better trading choices by giving you full access to all the important data through our forex specification chart and detailed contract documents."
        supportOptions={supportData}
      />

      <HelpSupportSectionlist
        title="A clear trading experience"
        paragraph="We want to be a reliable forex broker at RightTrade Capital, so we offer:"
        supportOptions={contractFeatures}
        bgcolor="bg-[#121733]"
        textcolor="text-[#fff]"
      />
    </>
  );
};

export default ContractSpecifications;
