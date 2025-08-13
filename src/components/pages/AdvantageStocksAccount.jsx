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
import img from "../../assets/account2.png";
import imgn from "../../assets/account3.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";
import bannerImage from "../../assets/advantagestocks1.png";

const AdvantageStocksAccount = () => {
  const pageURLA =
    "https://www.righttradecapital.com/advantage-stocks-trading-account";

  const faqItems = [
    {
      question: "What is the best account for forex?",
      answer:
        "You can trade forex on all of our account types but many of our traders prefer to do so on our Advantage account, thanks to the fact that it offers the best value - with typically zero spreads on popular FX pairs. For information, check out our handy guide to choosing the best trading account.",
    },
    {
      question: "What  kind of account do I need to trade forex?",
      answer:
        "You can trade forex on all of our account types. They all come with slightly different conditions, so do make sure you have a good look through the details to settle on the account that best suits your own goals.",
    },
    {
      question: "Can I trade forex without a broker?",
      answer:
        "You can by exchanging currencies at a bank or local currency exchange (at the airport for example). The downside of this is you won't have access to leverage or risk management tools like Stop Loss and Take Profit. Trading forex with an online broker like RightTrade Capital also offers other benefits including customer support, rapid execution and educational resources to help you on your way.",
    },
    {
      question: "How much is the transaction fee?",
      answer:
        "We’ll charge a flat $3 transaction fee for any deposit or withdrawal less than $30 or equivalent.",
    },
  ];

  const withdrawSteps = [
    "Log in to MyRightTrade Capital  and open the Withdraw page under ‘My Money’.",
    "Choose your payment method and click ‘Withdraw’.",
    "Choose the MyRightTrade Capital account or wallet you wish to withdraw funds from",
    "Complete the necessary fields and click 'Submit.'",
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

      <HowToWithdrawSection
        title="How to make a withdrawal in 4 simple steps"
        steps={withdrawSteps}
      />

      <FaqSection faqs={faqItems} />
    </>
  );
};

export default AdvantageStocksAccount;
