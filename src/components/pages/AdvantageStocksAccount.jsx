import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../../components/common/StatsSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import WhyTradeWithFXTM from "../common/WhyTradeWithFXTM";
import FaqSection from "../common/FaqSection2";
import AwardsSection from "../common/AwardsSection";
import TrustCTASection from "../common/TrustCTASection";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import TradingAccountComparison from "../common/TradingAccountComparison";
import SideImageTextSection from "../common/SideImageTextSection";
import ImageTextSections from "../common/ImageTextSections";
import FeatureSection from "../common/FeatureSection";
import img from "../../assets/account2.png";
import imgn from "../../assets/account3.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";
import bannerImage from "../../assets/advantagestocks1.png";
import depositImg from "../../assets/deposits1.png";
import commissionsImage from "../../assets/deposits1.png";

const AdvantageStocksAccount = () => {
  const pageURLA =
    "https://www.righttradecapital.com/advantage-stocks-trading-account";

  const faqItems = [
    {
      question: " What is the Advantage Stocks Trading Account?",
      answer:
        " You can trade global stocks like Tesla, Apple, and Microsoft with no commission and tight spreads in a special account at RightTrade Capital.",
    },
    {
      question:
        " Is this the best place for people who are new to trading stocks?",
      answer:
        " Yes. Our platform is good for both new and experienced traders because it has low fees, educational materials, and tools that are easy to use.",
    },
    {
      question: " What is the smallest amount you can put down?",
      answer:
        "You have to put at least $200 in the Advantage Stocks Trading Account.",
    },
    {
      question:
        "Can you buy and sell Tesla, Apple, and Microsoft stocks online?",
      answer:
        " Yes, for sure. You can get instant access to these and hundreds of other stocks from all over the world.",
    },

    {
      question: " How fast can I get my money out?",
      answer:
        " Most withdrawals happen in one to three business days, but this depends on the payment provider you use.",
    },
  ];

  const withdrawSteps = [
    "Go to the 'My Money' section in My RightTrade Capital and click on 'Withdraw'.",
    "Choose your payment method and click 'Withdraw'.",
    "Pick the account or wallet you want to take money out of.",
    "Fill out the required fields and hit 'Submit'.",
  ];
  return (
    <>
      <Helmet>
        <title>Advantage Stocks Trading Account</title>

        <meta
          name="description"
          content="Trade Tesla, Apple & more with zero commission. Tight spreads, $200 min deposit. RightTrade Capital Advantage Stocks Account."
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta property="og:title" content="Advantage Stocks Trading Account" />
      </Helmet>

      <StatsSection
        title="Advantage Stocks trading account"
        subtitle="Trade Tesla, Apple, Microsoft and more with zero commission."
        buttonText="Open Account"
        note="Trading is risky"
        image={bannerImage}
      />

      <FeatureSection
        title="Are you ready to go?"
        paragraph="Open your Advantage Stocks Trading Account today and start trading stocks like Tesla, Apple, Microsoft, and others. You won't have to pay a lot of money.
RightTrade Capital: Trust More. More Access. More Value.
"
      />
      <SideImageTextSection
        image={depositImg}
        title="RightTrade Capital: A Trading Account for Advantage Stocks"
        paragraphTextColor="text-white"
        bgColor="bg-[#121733]"
        textcolor="text-white"
        paragraphs={[
          "With Zero Commission, you can trade stocks like Tesla, Apple, Microsoft, and more. It's a smarter way to buy and sell stocks.",
        ]}
        paragraphs2="At RightTradeCapital, we believe that every trader should have an advantage over the others. People who want to trade the most popular stocks in the world, like Tesla, Apple, and Microsoft, without having to pay high commissions can use the Advantage Stocks Trading Account.
        You can now take charge of your portfolio like never before with Zero Commission Stock Trading, which has tight spreads, cutting-edge technology, and full transparency."
      />

      <ImageTextSections
        title="You can trade stocks with RightTrade Capital"
        description={`At RightTrade Capital, we're more than just a platform. We are here to help you achieve your trading goals. With the Advantage Stocks Trading Account, you get:


        • No Fees for Stock Trading.
        • Getting in touch with world leaders like Microsoft, Apple, and Tesla.
        • Low costs of trading and tight spreads.
         • Data on performance that is clear.
         • Learning materials for free.
         • Fast and safe withdrawals.`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
        paragraph="No matter if you are a day trader, a swing trader, or a long-term investor, our platform is made to give you the best possible stock trading experience.
"
      />

      <HowToWithdrawSection
        title="Four Simple Steps to Withdraw"
        steps={withdrawSteps}
      />

      <FaqSection faqs={faqItems} />
    </>
  );
};

export default AdvantageStocksAccount;
