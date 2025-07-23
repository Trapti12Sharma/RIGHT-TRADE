import React from "react";
import StatsSection from "../common/StatsSection";
import FeatureSection from "../common/FeatureSection";
import SideImageTextSection from "../common/SideImageTextSection";
import ImportantInfoSection from "../common/ImportantInfoSection";
import JoinUsBanner from "../common/JoinUsBanner";
import FourStepSection from "../common/FourStepSection";
import HowToWithdrawSection from "../common/HowToWithdrawSection";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import FaqSection from "../common/FaqSection2";

import depositImg from "../../assets/deposits1.png";
import manageFundsImg from "../../assets/deposits2.png";
import safetyIcon from "../../assets/safety.svg";
import regulationIcon from "../../assets/regulation.svg";
import choiceIcon from "../../assets/choice.svg";

const DepositsWithdrawals = () => {
  const withdrawSteps = [
    "Log in to MyRightTrade Capital  and open the Withdraw page under ‘My Money’.",
    "Choose your payment method and click ‘Withdraw’.",
    "Choose the MyRightTrade Capital account or wallet you wish to withdraw funds from",
    "Complete the necessary fields and click 'Submit.'",
  ];
  const steps = [
    {
      number: 1,
      description:
        "Open the Deposits page within the 'My Money' section in MyRightTrade Capital.",
    },
    {
      number: 2,
      description: "Choose your preferred deposit method and click ‘Deposit’.",
    },
    {
      number: 3,
      description:
        "Choose the trading account you’d like to deposit funds into and complete the necessary fields.",
    },
    {
      number: 4,
      description:
        "Confirm your deposit details in the next page – and you’re good to go!",
    },
  ];
  const features = [
    {
      image: safetyIcon,
      heading: "Safety",
      text: "We keep your funds in top-tier banks, and they’re fully segregated from our own.",
    },
    {
      image: regulationIcon,
      heading: "Regulation",
      text: "We’re regulated in various jurisdictions. We put your money in top-tier banks, so that you can relax.",
    },
    {
      image: choiceIcon,
      heading: "Choice",
      text: "We offer a wide variety of payment methods, including local banking.",
    },
  ];

  const faqs = [
    {
      question: "What payment methods do RightTrade Capital support?",
      answer:
        "We offer a wide variety of payment methods including credit and debit cards, e-Wallets, bank wire transfers and local payment solutions.",
    },
    {
      question: "What countries do you support payment methods in?",
      answer:
        "We accept payment methods from hundreds of countries. Register or log in to MyFXTM to see the available methods in your region.",
    },
    {
      question:
        "What are the minimum and maximum deposit amounts for RightTrade Capital?",
      answer:
        "The limits for these are set by each individual payment provider. You can find the minimum and maximum for each method in MyRightTrade Capital.",
    },
    {
      question:
        "What are the minimum and maximum withdrawal amounts from RightTrade Capital?",

      answer:
        "You can withdraw as much as like, as you long as you use the same payment method that you used to deposit with. A quick note here – if you still have open positions, you’ll need to leave enough free margin in your account to cover the withdrawal and any extra fees that may occur. You can calculate this amount here.",
    },
    {
      question: "How do you withdraw from RightTrade Capital?",
      answer:
        "Scroll further up the page – we’ve broken it right down for you in 4 simple steps. Let us know if you need a hand with this.",
    },
    {
      question:
        "Can I make internal transfers between trading accounts within MyRightTrade Capital",
      answer:
        "This is data that reveals the efficiency, speed and other features of a company's performance. We're proud to show our performance statistics and our traders love to see them.",
    },
    {
      question: "Why are you introducing a new transaction fee?",
      answer:
        "To optimise our customer service efforts and offer high-quality support when you need it most, we’ll be introducing a $3 transaction fee for any deposits or withdrawals less than $30 or equivalent.",
    },
    {
      question: "How much is the transaction fee?",
      answer:
        "We’ll charge a flat $3 transaction fee for any deposit or withdrawal less than $30 or equivalent.",
    },
    {
      question: "Will you charge a fee for transactions of more than $30?",
      answer:
        "No, we won’t. The transaction fee won’t apply to deposits or withdrawals equal to $30 (or equivalent) or more.",
    },
    {
      question: "Does the transaction fee apply to IBs and partners?",
      answer:
        "Yes. Transaction fees apply to all clients, including clients under Partnership or IB agreements.",
    },
    {
      question: "Will I be notified of the fee when I withdraw/deposit?",
      answer:
        "Yes. If you go to make a deposit or withdrawal less than $30 or equivalent, you’ll see a notification in MyFXTM letting you know the transaction will incur a $3 fee and asking you to confirm.",
    },
  ];

  return (
    <div>
      {/* 🔶 Section 1 - Hero Banner */}
      <StatsSection
        title="Deposits and Withdrawal methods"
        subtitle="Choose from local payment methods, cards, E-wallets and more."
        buttonText="Get started"
        image={depositImg}
        note=""
      />

      {/* 🔗 Section 2 - Breadcrumb */}
      <div
        className="bg-white py-4 px-6 sm:px-10 lg:px-24 text-sm"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <nav className="text-gray-500 flex flex-wrap gap-2 items-center">
          <span className="text-blue-500">RightTrade Capital</span>
          <span className="text-[#e74728]">❯</span>
          <span className="text-black font-medium">Deposit and Withdrawal</span>
        </nav>
      </div>

      {/*  Section 3 - Easy deposits. Fast withdrawals. */}
      <FeatureSection
        title="Easy deposits. Fast withdrawals."
        features={features}
      />

      {/*  Section 4 - Manage funds your way */}
      <SideImageTextSection
        image={manageFundsImg}
        title="Manage funds your way"
        paragraphTextColor="text-black" // 👈 black text only for this section
        paragraphs={[
          "Deposit and withdraw quickly and easily with Mastercard, Visa and a host of local payment providers. You can even choose to pay in and withdraw with cryptocurrency.",
          "Forex trading entails speculating on currency prices to earn potential profits. By trading currencies in pairs, traders predict the rise or fall in value of one currency against another.",
        ]}
      />

      {/*  Section 5 - Important Information */}
      <ImportantInfoSection text="Important information about deposits and withdrawals" />

      {/*  Section 7 - Four Step Section */}
      <FourStepSection
        title="How to make a deposit in 4 simple steps"
        steps={steps}
      />

      {/*  8th Section - How to make a withdrawal */}
      <HowToWithdrawSection
        title="How to make a withdrawal in 4 simple steps"
        steps={withdrawSteps}
      />

      {/*  9th Section - Get more from the markets */}
      <GetMoreMarketsSection />

      {/*  10th Section */}
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default DepositsWithdrawals;
