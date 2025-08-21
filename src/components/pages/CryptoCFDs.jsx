import React from "react";
import { Helmet } from "react-helmet";
import { FaDollarSign, FaBolt, FaGlobe, FaUniversity } from "react-icons/fa";
import StatsSection from "../common/StatsSection";
import FeatureSection from "../common/FeatureSection";
import ImageTextSections from "../common/ImageTextSections";
import MarketViewSteps from "../common/MarketViewSteps";
import SupportedRegions from "../common/SupportedRegions";
import SideImageTextSection from "../common/SideImageTextSection";
import FourStepSection from "../common/FourStepSection";
import statsBg from "../../assets/cryptocdf1.png";
import globeImg from "../../assets/globe.svg";
import commissionsImage from "../../assets/deposits1.png";
import img from "../../assets/futures2.png";
import { FaGlobeEurope, FaBuilding, FaExchangeAlt } from "react-icons/fa";

const CryptoCFDs = () => {
  const pageURL =
    "https://www.righttradecapital.com/best-cryptocurrency-trading-platform";

  const steps1 = [
    {
      number: 1,
      description: "Open an Account – Quick and risk-free registration.",
    },
    {
      number: 2,
      description: "Fund Your Account – Use cash or crypto.",
    },
    {
      number: 3,
      description: "Pick Your Asset – BTC, ETH, or your favourite altcoin.",
    },
    {
      number: 4,
      description:
        "Plan Your Trade – Define entry, stop-loss, and take-profit levels.",
    },
    {
      number: 5,
      description: "Monitor and Adjust – Use our platform’s real-time tools.",
    },
  ];

  const statsData = {
    title: "Start Crypto CFDs  trading with RightTrade Capital",
    subtitle:
      "Trade the most popular Crypto CFDs  majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      heading: "1.A lot of different kinds of digital money",
      description:
        "You can buy and sell Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and other altcoins all from the same account.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "2.Prices that are fair",
      description:
        " You get to keep more of your profits because the spreads are tight and the commissions are low.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "3.A lot of strength",
      description:
        " You can use up to 1:1000 leverage on the biggest cryptocurrencies. This means you can invest less money and still get more market exposure.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "4.Security at the business level",
      description:
        " We have to follow strict rules, and we keep your money separate from other clients' money and protect it with bank-level encryption.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "5.Quick execution",
      description:
        " We know that timing is very important in crypto. Our cryptocurrency trading platform processes orders in less than a second, so you can be sure you'll get the right amount.",
    },
  ];

  const supportedRegionData = {
    title:
      "Deposits and Withdrawals – Seamless Experience on the Best Cryptocurrency Trading Platfor",

    ctaText: "Log In Now",
    regions: [
      {
        icon: <FaGlobeEurope size={40} className="text-[#FABF16]" />,
        title: "Depositing Funds:",
        points: [
          "Deposit crypto like BTC, ETH, USDT, LTC, and more.",
          "Processing time: Less than 1 hour.",
          "Fees: No deposit fees.",
        ],
      },
      {
        icon: <FaBuilding size={40} className="text-[#FABF16]" />,
        title: "Withdrawing Funds:",
        points: [
          "Withdraw instantly to your crypto wallet.",
          "Processing time: Around 1 hour.",
          "Fees: Very low; withdraw anytime.",
        ],
      },
      {
        icon: <FaBuilding size={40} className="text-[#FABF16]" />,
        title: "Withdrawing Funds:",
        points: [
          "Withdraw instantly to your crypto wallet.",
          "Processing time: Around 1 hour.",
          "Fees: Very low; withdraw anytime.",
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Best Cryptocurrency Trading Platform at RightTrade Capital
        </title>

        <meta
          name="description"
          content="Trade with confidence on the best cryptocurrency trading platform at RightTrade Capital. Experience fast execution, secure transactions  for day trading."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Best Cryptocurrency Trading Platform at RightTrade Capital"
        />
      </Helmet>

      <StatsSection {...statsData} />

      <FeatureSection
        title="The Best Cryptocurrency Trading Platform to Buy and Sell Cryptocurrencies CFDs for Cryptos"
        paragraph="The cryptocurrency trading platform from RightTrade Capital is the fastest, most accurate, and most profitable. You don't have to own the coins directly to get to the most popular cryptocurrencies in the world, like Bitcoin, Ethereum, and Ripple. This is true no matter how long you've been trading crypto or if you're just getting started.You can trade however you want, take advantage of quick price changes, and manage Forex, commodities, indices, and crypto CFDs all from the same safe account on one best cryptocurrency trading platform."
      />

      <ImageTextSections
        title="What Does It Mean to Buy and Sell Crypto CFDs on the Best Cryptocurrency Trading Platform?"
        description={`You can bet on the price changes of cryptocurrencies without actually owning them with crypto CFDs (Contracts for Difference). You don't buy coins and put them in digital wallets. You don't know if the price will go up or down, so you just guess and then buy or sell.

        • You can still make money when the market goes up or down.
        • There are no problems with wallets: no hacks, no private keys, and no way to lose your coins.
        • You can access all of your tools from one secure account on one platform.`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-[#121733]"
        textcolor="text-white"
        paragraph="You can trade cryptocurrencies here, and we are also the best crypto exchange for day trading with CFDs for both new and experienced traders."
      />

      <MarketViewSteps
        title="The Best Cryptocurrency Trading Platform – Why RightTrade Capital Leads"
        steps={stepsData}
      />

      <SupportedRegions
        title={supportedRegionData.title}
        subtitle={supportedRegionData.subtitle}
        ctaText={supportedRegionData.ctaText}
        ctaNote={supportedRegionData.ctaNote}
        regions={supportedRegionData.regions}
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#fff]"
        textcolor="text-black"
        title="Managing Risk on the Best Cryptocurrency Trading Platform"
        paragraphs={[
          "While our cryptocurrency trading platform offers many benefits, crypto CFDs can be volatile.",
        ]}
        listItems={[
          "Use Stop-Loss Orders to limit losses.",
          "Set Take-Profit Targets to secure gains automatically.",
          "Understand leverage: It can magnify gains and losses.",
          "Stay updated with blockchain and market news.",
          "Manage capital wisely: Never risk more than a set percentage of your account per trade.",
        ]}
        description="Our built-in tools help you trade safely and effectively."
      />

      <ImageTextSections
        title="Why RightTrade Capital is the Best Crypto Exchange for Day Trading"
        description={`Many exchanges only offer crypto trading. We go further:

        • CFD flexibility: Profit in rising and falling markets.
        • Trade Forex, metals, indices, and crypto in one account.
        • Lightning-fast execution for day traders.
        • Low costs so you keep more profits. `}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-[#121733]"
        textcolor="text-white"
        paragraph="That’s why experts call us the best cryptocurrency trading platform and best crypto exchange for day trading."
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#fff]"
        textcolor="text-black"
        title="Trading Hours on the Best Cryptocurrency Trading Platform"
        paragraphs={[
          "You can almost always get to our best cryptocurrency trading platform:",
        ]}
        listItems={[
          "During the week, trading goes on all day with short breaks for maintenance.",
          "Specific times for updates and limited weekend hours.",
        ]}
        description="The times are all in platform server time, but it's easy to change them to your local time."
      />

      <FourStepSection
        title="How to Start on the Best Cryptocurrency Trading Platform"
        steps={steps1}
        bgcolor="bg-[#121733]"
      />

      <FeatureSection
        title="Final Word – The Best Cryptocurrency Trading Platform for All Traders"
        paragraph="If you’re looking for the best cryptocurrency trading platform that is secure, fast, cost-efficient, and packed with powerful tools, RightTrade Capital is your answer. Whether you want to scalp the markets or hold for the long term, our best crypto exchange for day trading gives you every advantage you need to succeed in crypto’s fast-paced world.
Control your crypto trading future — open an account today."
      />
    </>
  );
};

export default CryptoCFDs;
