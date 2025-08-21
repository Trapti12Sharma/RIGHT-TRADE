import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../../components/common/StatsSection";
import FeatureSection from "../common/FeatureSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import FaqSection from "../common/FaqSection2";
import ImageTextSections from "../common/ImageTextSections";
import TradingAccountComparison from "../common/TradingAccountComparison";
import SideImageTextSection from "../common/SideImageTextSection";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import MarketViewFeatureSection from "../common/MarketViewFeatureSection";
import bannerImage from "../../assets/advantageplus.png";
import commissionsImage from "../../assets/deposits1.png";
import img from "../../assets/futures2.png";
import home6 from "../../assets/sign-up.png";

const AdvantagePlusAccount = () => {
  const pageURL =
    "https://www.righttradecapital.com/advantage-plus-trading-account";

  const otherNotesData = {
    title: "Important Features of an Advantage Plus Account",

    features: [
      {
        icon: "script",
        heading: "1. No Commission",
        paragraph:
          " Don't worry about additional fees when you trade. You just pay spreads, so you know exactly how much your trades will cost.",
      },
      {
        icon: "chart",
        heading: "2. Easy to Get In",
        paragraph:
          " You may start trading with just $200. Great for both new and seasoned traders.",
      },
      {
        icon: "bell",
        heading: "3. Spreads that are competitive",
        paragraph:
          " Enjoy spreads of at least 1.5 pips on most major instruments.",
      },
      {
        icon: "calendar",
        heading: "4. Access to a variety of markets",
        paragraph:
          " You may trade Forex, metals, commodities, indices, cryptocurrencies, stocks, and ETFs all from one account.",
      },
      {
        icon: "layout",
        heading: "5. The Advanced MT5 Platform",
        paragraph:
          " MetaTrader 5 has enhanced features, one-click trading, and access from several devices.",
      },
      {
        icon: "layout",
        heading: "6. Safe and Dependable",
        paragraph:
          " RightTrade Capital's open and regulated trading environment lets you trade with confidence.",
      },
    ],
  };

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
      minDeposit: "$200",
      spreads: "From 0.0",
      commissions:
        "$3.5/lot FX\n$2 commodities\n$2.5 CFDs\n0.03% Crypto\n$0.02 Stocks/ETFs",
      instruments: [
        "FX",
        "Metals",
        "Indices",
        "Commodities",
        "Crypto",
        "Stocks",
        "ETFs",
      ],
      highlighted: true,
    },
    {
      name: "Advantage Plus",
      minDeposit: "$200",
      spreads: "From 1.5",
      commissions: "Zero",
      instruments: [
        "FX",
        "Metals",
        "Indices",
        "Commodities",
        "Crypto",
        "Stocks (MT5)",
        "ETFs (MT5)",
      ],
      highlighted: false,
    },
  ];

  const faqItems = [
    {
      question: "What kind of account is appropriate for trading forex?",
      answer:
        "The Advantage Plus Account is great for new traders and those who want to trade in a balanced way since it has no fees and is simple to use.",
    },
    {
      question:
        "Is it possible to trade in more than one market with this account?",
      answer:
        " Yes, Forex, metals, commodities, indices, cryptos, stocks, and ETFs are all included.",
    },
    {
      question: "What is the minimum amount that may be deposited?",
      answer: " You just need $200 to start.",
    },
    {
      question: "Are there further costs?",
      answer:
        "No, Advantage Plus does not charge a commission. You simply have to pay the spreads.",
    },
  ];

  const withdrawSteps = [
    "Go to MyRightTrade Capital and click 'Withdraw'.",
    "Choose the method you want and then click 'Withdraw'.",
    "Pick the account or wallet and type in the amount.",
    "Please confirm and send.",
  ];

  const withdrawSteps1 = [
    "1. Sign up for RightTrade Capital.",
    "2. KYC will let you prove who you are.",
    "3. Put at least $200 in your account.",
    "4. You may start trading right now on MT5.",
  ];
  return (
    <>
      <Helmet>
        <title>Advantage Plus Trading Account | Zero Commission Trading</title>

        <meta
          name="description"
          content="Trade commission-free with the Advantage Plus Account. Enjoy competitive spreads, global markets, and seamless MT5 execution."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Advantage Plus Trading Account  | Zero Commission Trading"
        />
      </Helmet>

      <StatsSection
        title="Advantage Plus trading account"
        subtitle="Trade on our commission-free ECN account with competitive spreads"
        buttonText="Open Account"
        note="Trading is risky"
        image={bannerImage}
      />

      <FeatureSection
        title="Welcome"
        paragraph="RightTrade Capital's Advantage Plus Trading Account is for traders who desire a straightforward, commission-free trading experience with tight spreads and quick execution.
        You may trade Forex, metals, indices, commodities, crypto, and stocks (MT5) all in one safe and easy-to-use account with a minimum deposit of just $200."
      />

      <ImageTextSections
        title="Advantage Plus Trading Account: Trade Without Paying a Fee"
        description={`Account for Advantage Plus Trading
      You may trade on our ECN account without paying any fees and with spreads that are competitive.

        • No Commission — Keep All of Your Profits
        • Spreads that start at 1.5 pips
        • Trade Forex, metals, indices, commodities, crypto, and stocks (MT5)
        • Minimum Deposit: $200`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-[#121733]"
        textcolor="text-white"
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#fff]"
        textcolor="text-black"
        title="Overview of the Account"
        paragraphTextColor="text-black"
        paragraphs={[
          "The Advantage Plus Account is a good choice since it is both cheap and flexible. It lets you trade without paying any additional costs and gives you access to a wide range of instruments.",
        ]}
        listItems={[
          "Minimum deposit: $200",
          "Pips: From 1.5",
          "No commissions",
          "You may trade Forex, spot metals, indices, commodities, crypto CFDs, stocks, and ETFs (MT5).",
        ]}
      />

      <MarketViewFeatureSection
        title={otherNotesData.title}
        description={otherNotesData.description}
        features={otherNotesData.features}
        bgcolor="bg-[#121733]"
        titlecolor="text-white"
      />

      <SecurityRegulationSection
        image={home6}
        title="Why Get the Advantage Plus Account?"
        introParagraph="The Advantage Plus Account is great for traders who:"
        bulletPoints={[
          "Want to trade without paying any fees.",
          "Want prices that are easy to understand and don't include any hidden expenses.",
          "Look for access to several assets without having to transfer accounts.",
          "Need quick and sure execution.",
          "Value low-cost entrance with a minimum deposit of $200.",
        ]}
      />

      <TradingAccountComparison accountData={accountData} />

      <HowToWithdrawSection
        title="4 Simple Steps to Get Your Money Out:"
        steps={withdrawSteps}
      />

      <FeatureSection
        title="Conclusion: Start trading with Advantage Plus right now!"
        paragraph="With the Advantage Plus Trading Account, you may trade in worldwide markets for a minimal cost. It has no fee, excellent spreads, and a $200 minimum deposit, making it the best alternative for traders who seek both low prices and good performance.
        Start your adventure with RightTradeCapital now. With a broker that cares about your success, you can trade with confidence.
        Open your Advantage Plus account now and start trading without paying any fees!"
      />

      <HowToWithdrawSection title="How to Get Started" steps={withdrawSteps1} />

      <FaqSection faqs={faqItems} />
    </>
  );
};

export default AdvantagePlusAccount;
