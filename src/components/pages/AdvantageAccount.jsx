import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../../components/common/StatsSection";
import WhyTradeWithFXTM from "../common/WhyTradeWithFXTM";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import TrustCTASection from "../common/TrustCTASection";
import TradingAccountComparison from "../common/TradingAccountComparison";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import AwardsSection from "../common/AwardsSection";
import SideImageTextSection from "../common/SideImageTextSection";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import RightImageLeftContent from "../common/RightImageLeftContent";
import FeatureSection from "../common/FeatureSection";
import ImageTextSections from "../common/ImageTextSections";
import bannerImage from "../../assets/advantage1.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";
import manageFundsImg from "../../assets/deposits2.png";
import home6 from "../../assets/sign-up.png";

const AdvantageAccount = () => {
  const pageURLA = "https://www.righttradecapital.com/advantage-account";

  const awardsItems = [
    // ✅ Place it here before return
    { imageSrc: fund9 },
    { imageSrc: fund10 },
    { imageSrc: fund11 },
    { imageSrc: fund12 },
  ];
  const withdrawSteps = [
    "Log in to MyRightTrade Capital  and open the Withdraw page under ‘My Money’.",
    "Choose your payment method and click ‘Withdraw’.",
    "Choose the MyRightTrade Capital account or wallet you wish to withdraw funds from",
    "Complete the necessary fields and click 'Submit.'",
  ];
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

  return (
    <>
      <Helmet>
        <title>Advantage Account | Online Trading Platform</title>

        <meta
          name="description"
          content="Trade GBP/USD with Nestpip, the best forex broker offering low spreads, high leverage, and fast execution. Start your forex journey today!"
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta
          property="og:title"
          content="Advantage Account | Online Trading Platform"
        />
      </Helmet>

      <StatsSection
        title="Advantage trading account"
        subtitle="Our most popular account, with spreads from zero on major FX pairs."
        buttonText="Open  Account"
        note="Trading is risky"
        image={bannerImage}
      />

      <SideImageTextSection
        image={manageFundsImg}
        title="Trade with the RightTrade Capital Advantage Account"
        paragraphTextColor="text-black"
        paragraphs={[
          "At RightTrade Capital, we believe that traders should have an account that allows them the finest trading circumstances and the most flexibility. The Advantage Account is for serious traders who demand low spreads, quick execution, and complete openness. With our cutting-edge technology and access to markets all around the globe, you can trade with confidence knowing you're receiving the greatest FX trading platform experience.",
        ]}
      />

      <SecurityRegulationSection
        image={home6}
        title="Why Do You Need the Advantage Account?"
        introParagraph="The Advantage Account is for traders who desire:"
        bulletPoints={[
          "The greatest tools.",
          "The lowest spreads.",
          "The lowest expenses for trading.",
        ]}
        closingParagraph="You may trade Forex, indices, commodities, or cryptocurrencies on an online trading platform that is quick, precise, and performs effectively.
"
      />

      <FeatureSection
        title="Leverage That Works for You"
        paragraph="The Advantage Account provides you the greatest leverage for FX trading, so you can make the most of the market while still being in control of your risk. Choose an amount of leverage that fits your trading style — whether you want to be safe or take risks for big rewards."
        // features={features}
      />

      <ImageTextSections
        title="Less Money, More Possibilities"
        description={`The Advantage Account helps you earn the most money by minimizing the expenses of transactions. The lowest spreads are 0.0 pips. When you utilize the finest MT4 forex trading platform, you receive:

        • Real-time price feeds.
        • Powerful charting tools.
        • Transactions that go through without any hassles.`}
        // image={commissionsImage}
        reverse={false}
        noButton={true} // hides the button
        bgcolor="bg-[#121733]"
        textcolor="text-white"
      />
      <SideImageTextSection
        image={manageFundsImg}
        title="Tools and Platforms for More Advanced Trading"
        paragraphTextColor="text-black"
        paragraphs={[
          "You may utilize the Advantage Account with MT4, MT5, and web-based systems without any hassles. You can trade anywhere and anytime with the greatest forex trading platform features, such as:",
        ]}
        listItems={[
          "One-click trading.",
          "Professional advisers (EAs).",
          "Sophisticated analytics.",
        ]}
        description="Our online trading platform is good for both beginners and experienced traders. It provides you the speed and precision you need to attain the same outcomes every time.
"
      />

      <ImageTextSections
        title="Who Is Able to Utilize the Advantage Account?"
        description={`The Advantage Account is ideal for:

        • Scalpers who need to execute exact and inexpensive deals.
        • Day traders who need to get to the market quickly and have their orders filled.
        • Swing traders who like spreads that are good for business.
         • Professional traders who want the finest forex trading leverage and more complex strategies to handle risk.`}
        // image={commissionsImage}
        reverse={false}
        noButton={true} // hides the button
        bgcolor="bg-[#121733]"
        textcolor="text-white"
      />
    </>
  );
};

export default AdvantageAccount;
