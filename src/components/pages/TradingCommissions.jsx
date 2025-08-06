import React from "react";
import StatsSection from "../common/StatsSection";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import ImageTextSections from "../common/ImageTextSections";
import ImageLeftTextRightSection from "../common/ImageLeftTextRightSection";
import TextImageSection from "../common/TextImageSection";
import CenteredTextSection from "../common/CenteredTextSection";
import SimpleCenteredTextSection from "../common/SimpleCenteredTextSection";
import PricingStatsSection from "../common/PricingStatsSection";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import FaqSection from "../common/FaqSection2";
import SideImageTextSection from "../common/SideImageTextSection";
import { FaChartLine, FaDollarSign, FaUserTie } from "react-icons/fa";
import SupportedRegions from "../common/SupportedRegions";
import MarketViewFeatureSection from "../common/MarketViewFeatureSection";
import DepositMethodsTable from "../common/DepositMethodsTable";
import FeatureSection from "../common/FeatureSection";

import tradingImage from "../../assets/commissions1.png";
import spreadsImage from "../../assets/commissions2.png";
import commissionsImage from "../../assets/commissions3.png";
import swapsImage from "../../assets/commissions4.png";

const TradingCommissions = () => {
  const otherFeesSectionData = {
    title: "Things to Keep in Mind About Other Fees",
    description:
      "We want all of our costs to be easy to understand and cheap. The only additional costs you could have to pay are:",
    bgcolor: "bg-[#F9FAFB]", // light background
    titlecolor: "text-[#10162f]",

    features: [
      {
        icon: "calendar",
        heading: "Fees for Swapping or Overnight",
        paragraph:
          "Used when positions are held for the night. These alter based on the instrument and the direction of the transaction. Triple swaps occurs on Wednesdays.",
      },
      {
        icon: "bell",
        heading: "Charge for Not Doing Anything",
        paragraph:
          "You could have to pay a modest charge if there hasn't been any trade in over 180 days. This helps keep the accounts and the platform secure.",
      },
      {
        icon: "layout",
        heading: "Fees for Taking Out",
        paragraph:
          "Most methods to take money out don't cost us anything. But third-party processors could have their own costs.",
      },
      {
        icon: "script",
        heading: "Costs for Deposits",
        paragraph:
          "You don't have to pay anything to make deposits to RightTradeCapital. Your payment processor could charge you to change currencies.",
      },
    ],
  };

  const tradingAccountsRegionsData = {
    title:
      "The Different Kinds of Trading Accounts We Have and How Much They Cost",
    subtitle:
      "RightTrade Capital features a variety of accounts to meet the needs of various traders. Every account is set up to provide you the perfect balance of spreads, commissions, and ways to trade.",
    ctaText: "Compare All Accounts",
    ctaNote:
      "Log in to your RightTradeCapital account to see which account fits your trading style.",
    regions: [
      {
        title: "List the pros",
        icon: <FaChartLine size={28} />,
        points: [
          "Trading on a commission basis",
          "Spreads begin at 0.0 pips.",
          "The fee is $4 per round turn for each lot.",
          "Best for: scalpers, traders who trade a lot, and algorithmic traders that require raw spreads",
        ],
      },
      {
        title: "Type of Account",
        icon: <FaDollarSign size={28} />,
        points: [
          "No Fees for Trading",
          "Pips begin at 1.2",
          "No additional costs for commissions",
          "Best for: those who are new to trading or who want rates that cover everything",
        ],
      },
      {
        title: "Account for the Elite",
        icon: <FaUserTie size={28} />,
        points: [
          "Custom spreads and commissions.",
          "For VIPs and institutions only.",
          "Low fees, a personal account manager, and help that comes first.",
          "Best for: those who trade for a business or organisation.",
        ],
      },
    ],
  };
  const accountFeesTableData = [
    {
      method: "Pro",
      time: "$4 for each lot (round trip)",
      fees: "From 0.0 pips",
      minDeposit: "Scalping and trading a lot at once",
    },
    {
      method: "Regular",
      time: "No Commission",
      fees: "Beginning at 1.2 pips",
      minDeposit:
        "People who are new to trading and those who do it on the side",
    },
    {
      method: "Top",
      time: "Rates That Are One of a Kind",
      fees: "Very tight",
      minDeposit: "VIP clientele and businesses",
    },
  ];

  const faqs = [
    {
      question: "Do I need to put down a deposit?",
      answer:
        "No, there are no costs for adding money to your RightTradeCapital account.",
    },
    {
      question: "Are there any costs that aren't clear?",
      answer:
        "No way. You pay for what you see. All costs are made explicit ahead of time.",
    },
    {
      question: "How much do overnight exchanges cost?",

      answer:
        "You have to pay swap costs if you leave a position open overnight. The charge vary based on the asset, the market, and the direction of the transaction.",
    },
    {
      question: "Which kind of account is appropriate for me?",
      answer:
        "Afraid not. It’s how we make our money from doing business with you. We do keep these as low as possible, which is why over 3 million traders worldwide have chosen us.",
    },
    {
      question: "Do you charge those who don't do anything?",
      answer: "Yes, there is a minor cost for not trading for 180 days.",
    },

    {
      question:
        "Is it straightforward for novices to comprehend how the fees work?",
      answer:
        "Yes! There are no fees and the spreads are straightforward to comprehend, so our Standard Account is simple and easy to use.",
    },
  ];

  const breadcrumbs = [
    { label: "RightTrade Capital", href: "/" },
    { label: "Trading Commissions and Fees", href: "/trading-commissions" },
  ];

  const heading =
    "Before you make that first trade, you’ll want to know how much will it cost you.";
  const description =
    "We’re proud to offer great pricing and we’re honest about the fees we charge. Have a read through the below and let us know if anything isn’t clear.";

  return (
    <div>
      {/* Section 1 - Stats Section with orange overlay */}
      <StatsSection
        title="Trading commissions and fees"
        subtitle="We’re proud of our low trading costs. See for yourself."
        buttonText="Learn more"
        image={tradingImage}
      />

      {/* Section 2 - Breadcrumb and Description */}

      <SideImageTextSection
        // image={commissionsImage}
        title="RightTrade Capital Pricing & Commissions"
        paragraphs={[
          "RightTradeCapital pricing and commissions are straightforward, reasonable, and geared towards traders.",
          "We at RightTradeCapital believe that being honest is the first step to building trust. That's why our prices and charges are clear, fair, and work with your trading style.",
          "Our pricing structure makes sure that you always know what you're paying and what you're receiving, whether you're new to the markets or an experienced trader who uses high-volume methods.",
        ]}
        bgColor="bg-white" // or any Tailwind class like bg-[#f9f9f9]
        textcolor="text-black"
        paragraphTextColor="text-gray-600"
      />

      {/* Section 3- ImageTextSection for Spreads */}
      <ImageTextSections
        title="Why Our Fees Matter"
        description={`The expenses of trading are quite essential for how much money you make. Even tiny discrepancies in spreads or costs may build up over time, particularly for traders who do a lot of trading. RightTradeCapital's pricing are aimed to help you beat the competition:

        • Spreads that are very small, starting at 0.0 pips

        • Account kinds that are easy to change and have costs that work for you

        • No extra charges

        • Models of commissions that are clear

        • We are here to assist you with your money, not take it away.`}
        // image={commissionsImage}
        reverse={false}
        noButton={true} // hides the button
        bgcolor="bg-[#121733]"
        textcolor="text-white"
      />

      {/*  Section 4 - */}

      <MarketViewFeatureSection
        title={otherFeesSectionData.title}
        description={otherFeesSectionData.description}
        bgcolor={otherFeesSectionData.bgcolor}
        titlecolor={otherFeesSectionData.titlecolor}
        features={otherFeesSectionData.features}
      />

      {/*  Section 5 -  */}
      <SupportedRegions
        title={tradingAccountsRegionsData.title}
        subtitle={tradingAccountsRegionsData.subtitle}
        ctaText={tradingAccountsRegionsData.ctaText}
        ctaNote={tradingAccountsRegionsData.ctaNote}
        regions={tradingAccountsRegionsData.regions}
      />
      {/*  Section 6 -  */}
      <DepositMethodsTable
        heading="More Information About the Fees in the Table"
        // subtext="Explore various methods to deposit funds."
        columns={["Type of Account", "Cost", "Spreads (Major FX)", "Best For"]}
        columnKeys={["method", "time", "fees", "minDeposit"]}
        data={[
          {
            method: "Pro",
            time: "$4 for each lot (round trip)",
            fees: "From 0.0 pips",
            minDeposit: "Scalping and trading a lot at once",
          },
          {
            method: "Regular",
            time: "No Commission",
            fees: "Beginning at 1.2 pips",
            minDeposit:
              "People who are new to trading and those who do it on the side",
          },
          {
            method: "Top",
            time: "Rates That Are One of a Kind",
            fees: "Very tigh",
            minDeposit: "VIP clientele and businesses",
          },
        ]}
      />

      {/*  Section 7 - Image Left & Text Right: Commissions */}

      <SideImageTextSection
        // image={trustImage}
        title="Why Should You Choose RightTradeCapital for Costs That Are Easy to Understand?"
        paragraphs={[
          "We have high-quality infrastructure at reasonable pricing, which makes it simple and cheap to do business with us.",
        ]}
        listItems={[
          "Safe and regulated: Fully licenced and following the standards imposed by financial authorities across the world.",
          "Real-Time Cost Visibility: You can see fees, spreads, and swap rates live on your trading dashboard.",
          "Quick Execution: All platforms (MT4/MT5/Web) process orders at lightning speed.",
          "Help When You Need It: You may get help in several languages 24/5 to help you comprehend all the fees.",
        ]}
        bgColor="bg-white"
        textcolor="text-black"
        paragraphTextColor="text-gray-600"
      />

      <FeatureSection
        title="In Conclusion"
        paragraph="It's crucial to know what you're doing when you trade. We provide you both at RightTradeCapital. Our fees and commissions are straightforward, simple, and geared to help you trade effectively. We thought about you when we made them.
We made it easy to figure out how much it costs to trade. Our pricing help you keep in command of your financial strategy from start to finish, whether you're interested in FX, indices, commodities, or crypto."
        // features={features}
      />
    </div>
  );
};

export default TradingCommissions;
