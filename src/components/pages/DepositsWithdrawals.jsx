import React from 'react';
import StatsSection from '../common/StatsSection';
import FeatureSection from '../common/FeatureSection';
import SideImageTextSection from '../common/SideImageTextSection'; // ✅ updated import
import ImportantInfoSection from '../common/ImportantInfoSection';
import JoinUsBanner from '../common/JoinUsBanner';
import FourStepSection from '../common/FourStepSection';
import HowToWithdrawSection from '../common/HowToWithdrawSection';
import GetMoreMarketsSection from '../common/GetMoreMarketsSection';
import HelpSupportSection from "../common/HelpSupportSection";

import depositImg from '../../assets/deposits1.png';
import manageFundsImg from '../../assets/deposits2.png';
import safetyIcon from '../../assets/safety.svg';
import regulationIcon from '../../assets/regulation.svg';
import choiceIcon from '../../assets/choice.svg';

const DepositsWithdrawals = () => {

    const withdrawSteps = [
    "Log in to MyRightTRADE Capital and open the Withdraw page under ‘My Money’.",
    "Choose your payment method and click ‘Withdraw’.",
    "Choose the MyRightTRADE Capital account or wallet you wish to withdraw funds from",
    "Complete the necessary fields and click 'Submit.'"
  ];
    const steps = [
    { number: 1, description: "Open the Deposits page within the 'My Money' section in MyRightTRADE Capital." },
    { number: 2, description: "Choose your preferred deposit method and click ‘Deposit’." },
    { number: 3, description: "Choose the trading account you’d like to deposit funds into and complete the necessary fields." },
    { number: 4, description: "Confirm your deposit details in the next page – and you’re good to go!" },
  ];
  const features = [
    {
      image: safetyIcon,
      heading: 'Safety',
      text: "We keep your funds in top-tier banks, and they’re fully segregated from our own.",
    },
    {
      image: regulationIcon,
      heading: 'Regulation',
      text: "We’re regulated in various jurisdictions. We put your money in top-tier banks, so that you can relax.",
    },
    {
      image: choiceIcon,
      heading: 'Choice',
      text: "We offer a wide variety of payment methods, including local banking.",
    },
  ];

  const faqs = [
    "What payment methods do RightTRADE Capital support?",
    "What countries do you support payment methods in?",
    "What are the minimum and maximum deposit amounts for RightTRADE Capital?",
    "What are the minimum and maximum withdrawal amounts from RightTRADE Capital?",
    "How do you withdraw from RightTRADE Capital?",
    "Can I make internal transfers between trading accounts within MyRightTRADE Capital",
    "Why are you introducing a new transaction fee?",
    "How much is the transaction fee?",
    "Will you charge a fee for transactions of more than $30?",
    "Does the transaction fee apply to IBs and partners?",
    "Will I be notified of the fee when I withdraw/deposit?",
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
      <div className="bg-white py-4 px-6 sm:px-10 lg:px-24 text-sm" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
        <nav className="text-gray-500 flex flex-wrap gap-2 items-center">
          <span className="text-blue-500">RightTRADE Capital</span>
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
        paragraphs={[
          "Deposit and withdraw quickly and easily with Mastercard, Visa and a host of local payment providers. You can even choose to pay in and withdraw with cryptocurrency.",
          "Forex trading entails speculating on currency prices to earn potential profits. By trading currencies in pairs, traders predict the rise or fall in value of one currency against another.",
        ]}
      />


            {/*  Section 5 - Important Information */}
      <ImportantInfoSection text="Important information about deposits and withdrawals" />

      {/*  Section 6 - Join Us Banner */}
      <JoinUsBanner />

      {/*  Section 7 - Four Step Section */}
      <FourStepSection title="How to make a deposit in 4 simple steps" steps={steps} />

      {/*  8th Section - How to make a withdrawal */}
      <HowToWithdrawSection
        title="How to make a withdrawal in 4 simple steps"
        steps={withdrawSteps}
      />


       {/*  9th Section - Get more from the markets */}
      <GetMoreMarketsSection />

      {/*  10th Section */}
      <HelpSupportSection title="Frequently Asked Questions" faqs={faqs} />

    </div>
  );
};

export default DepositsWithdrawals;
