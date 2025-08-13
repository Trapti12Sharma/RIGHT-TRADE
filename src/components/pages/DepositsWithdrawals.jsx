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
import DepositMethodsTable from "../common/DepositMethodsTable";
import SupportedRegions from "../common/SupportedRegions";
import MarketViewFeatureSection from "../common/MarketViewFeatureSection";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import RightImageLeftContent from "../common/RightImageLeftContent";

import { FaGlobeEurope, FaBuilding, FaExchangeAlt } from "react-icons/fa";

import depositImg from "../../assets/deposits1.png";
import manageFundsImg from "../../assets/deposits2.png";
import safetyIcon from "../../assets/safety.svg";
import regulationIcon from "../../assets/regulation.svg";
import choiceIcon from "../../assets/choice.svg";
import home6 from "../../assets/sign-up.png";

const DepositsWithdrawals = () => {
  const heading = "Put Money in with Trust.";
  const content =
    "Managing your money should be the simplest part of trading, according to RightTrade Capital. We want you to feel free, trust us, and be in charge of your trade by not having any hidden costs, processing quickly, and having top-notch security. Open your account now and experience how simple it is. In code. Only RightTrade Capital.";

  const otherNotesData = {
    title: "Other Important Notes",

    features: [
      {
        icon: "script",
        heading: "You must confirm your account:",
        paragraph:
          "You must confirm your account. You can't add or withdraw money until your KYC is fully verified.",
      },
      {
        icon: "chart",
        heading: "Currency Conversion",
        paragraph:
          "Conversions are made using current FX rates, which are clearly shown during your transaction.",
      },
      {
        icon: "bell",
        heading: "Inactivity Fee",
        paragraph:
          "Accounts inactive for 180 days may incur a small maintenance fee to remain active.",
      },
      {
        icon: "calendar",
        heading: "Deposit/Withdrawal Method Match",
        paragraph:
          "Withdrawals must use the same method as the original deposit for security and compliance.",
      },
      {
        icon: "layout",
        heading: "Card Refund Delays",
        paragraph:
          "Refunds to cards may take longer due to bank processing — unfortunately, this is out of our control.",
      },
    ],
  };

  const supportedRegionData = {
    title: "Supported Global Payment Regions",
    subtitle:
      "We aid a number of nations in many ways, both locally and globally.",
    ctaNote:
      "Log in to your RightTrade Capital account to view the several ways you may trade in your area or nation.",
    ctaText: "Log In Now",
    regions: [
      {
        icon: <FaGlobeEurope size={40} className="text-[#FABF16]" />,
        title: "Europe",
        points: [
          "Visa/Mastercard, SEPA, and Skrill",
          "Withdrawal: Skrill, bank transfer",
          "Following the rules and processing quickly",
        ],
      },
      {
        icon: <FaBuilding size={40} className="text-[#FABF16]" />,
        title: "Middle East",
        points: [
          "Deposit/withdraw: local bank transfers, crypto wallets, and cards",
          "Arabic support and upgrades in some areas",
        ],
      },
      {
        icon: <FaExchangeAlt size={40} className="text-[#FABF16]" />,
        title: "Global Coverage",
        points: [
          "Skrill and Neteller",
          "Visa and Mastercard",
          "Cryptocurrency wallets",
          "Bank wires (SWIFT and SEPA)",
        ],
      },
    ],
  };

  const withdrawData = [
    {
      method: "Visa or Mastercard",
      time: "1 to 5 business days",
      fees: "—",
      minDeposit: "$20",
    },
    {
      method: "Bank Transfer",
      time: "Two to five business days",
      fees: "The bank may charge you",
      minDeposit: "$100",
    },
    {
      method: "Neteller and Skrill",
      time: "In less than 24 hours",
      fees: "None",
      minDeposit: "$10",
    },
    {
      method: "Wallets for Digital Currencies",
      time: "30 minutes to 2 hours",
      fees: "$50 for Blockchain Only",
      minDeposit: "—",
    },
  ];

  const actionSpeedData = [
    { method: "Deposits by Card", time: "Instant" },
    { method: "Deposits into an e-wallet", time: "Less than two hours" },
    { method: "Crypto Deposits", time: "Less than an hour" },
    { method: "Bank Deposits", time: "1 to 3 business days" },
    { method: "E-wallet Withdrawals", time: "Same day" },
    { method: "Bank Withdrawals", time: "2 to 5 business days" },
    { method: "Crypto Withdrawals", time: "30 minutes to 2 hours" },
  ];

  const depositData = [
    {
      method: "Visa and Mastercard",
      time: "Instant",
      fees: "No",
      minDeposit: "$10",
    },
    {
      method: "Bank Transfer (SWIFT/SEPA)",
      time: "One to three business days",
      fees: "There might be fees from the bank",
      minDeposit: "$100",
    },
    {
      method: "Neteller/Skrill",
      time: "2 hours",
      fees: "None",
      minDeposit: "$10",
    },
    {
      method: "Cryptocurrency Wallets",
      time: "In one hour",
      fees: "Blockchain costs are just",
      minDeposit: "$50",
    },
    {
      method: "Payment Gateways Near You",
      time: "1–2 Business Days",
      fees: "The minimum amount varies per region",
      minDeposit: "—",
    },
  ];
  const withdrawSteps = [
    "Log in to MyRightTrade Capital  and open the Withdraw page under ‘My Money’.",
    "Choose your payment method and click ‘Withdraw’.",
    "Choose the MyRightTrade Capital account or wallet you wish to withdraw funds from",
    "Complete the necessary fields and click 'Submit.'",
  ];
  const steps = [
    {
      number: 1,
      description: "Please sign in to your client site.",
    },
    {
      number: 2,
      description: "Click on ‘Deposit’  and then  ‘Withdraw.’",
    },
    {
      number: 3,
      description: "Choose how you wish to put your money down.",
    },
    {
      number: 4,
      description:
        "Choose the account you want to trade with and type in the amount of the deposit.",
    },
    {
      number: 5,
      description:
        "Follow the on-screen instructions to complete the purchase.",
    },
    {
      number: 6,
      description:
        "Get an email or text message straight immediately to be sure.",
    },
  ];

  const steps1 = [
    {
      number: 1,
      description: "Log in to your RightTrade Capital client dashboard.",
    },
    {
      number: 2,
      description: "Click on ‘Funds’ and then ‘Deposit’.",
    },
    {
      number: 3,
      description:
        "Pick a method (it has to be the same as the way you put money in).",
    },
    {
      number: 4,
      description: "Enter the amount you wish to take out.",
    },
    {
      number: 5,
      description: "Confirm the request by sending an OTP (by email or text).",
    },
    {
      number: 6,
      description:
        "You can view your transaction history in the ‘Transaction History’ section.",
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
      question: "Are there any hidden costs for deposits or withdrawals?",
      answer:
        " No, RightTrade Capital does not charge anything for deposits or withdrawals. For example, banks and crypto wallets may levy their own fees.",
    },
    {
      question: "When will I receive my money back?",
      answer:
        " Most withdrawals made using e-wallets or cryptocurrencies are done within a day. Depending on your bank, it can take longer for bank transfers to go through.",
    },
    {
      question: "Can I use someone else's way to pay?",
      answer:
        "No. You must use methods that are registered in your name to make deposits and withdrawals for your own protection and to meet anti-money laundering requirements.",
    },
    {
      question: "What if my deposit hasn't come through yet?",

      answer:
        " Please contact our support staff and provide them your transaction ID. Most issues can be addressed in a few hours.",
    },
    {
      question: " Is it safe to put money in and take out cryptocurrency?",
      answer:
        " Yes, we support wallets that are secure and employ blockchain-level encryption to protect your money.",
    },
    {
      question: "Can I revoke a request to withdraw?",
      answer:
        " Yes, as long as it isn't done yet. You may cancel it from the section that displays your past transactions.",
    },
  ];

  return (
    <div>
      {/* 🔶 Section 1 - Hero Banner */}
      <StatsSection
        title="Deposits & Withdrawals – RightTrade Capital"
        subtitle="It is simple to add and take out money with RightTrade Capital. Locked. Right immediately."
        buttonText="Get started"
        image={depositImg}
        note="Quick, easy, and safe ways to pay for your deals."
      />

      {/*  Section 2 - Easy deposits. Fast withdrawals. */}
      <FeatureSection
        title="How To Deposit Money At RightTrade Capital"
        paragraph="It's straightforward and fast to add money to your trading account. You can make deposits in a variety of various methods, both in your neighbourhood and throughout the globe, so you'll always have a decent option."
        // features={features}
      />

      {/*  Section 3 - Manage funds your way */}
      <SideImageTextSection
        image={manageFundsImg}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="What Are The Benefits Of Using RightTrade Capital To Deposit And Withdraw Money?"
        paragraphTextColor="text-white"
        paragraphs={[
          "We made every process simpler so you can trade more and pay less.",
        ]}
        listItems={[
          "A lot of methods to pay, both in your area and beyond the world",
          "Transactions are processed quickly",
          "No extra costs",
          "Real-time updates on transactions",
          "Data and money are well protected",
          "Help for users 24 hours a day, five days a week",
        ]}
      />

      {/*  Section 4 - Four Step Section */}
      <FourStepSection
        title="How To Get Money Out"
        steps={steps}
        bgcolor="bg-sky-950"
      />
      {/*  Section 5 - */}
      <DepositMethodsTable
        heading="Ways to Make a Deposit"
        subtext="Choose your preferred deposit method below:"
        columnKeys={["method", "time", "fees", "minDeposit"]}
        columns={[
          "Method",
          "Processing Time",
          "RightTrade Capital Fees",
          "Minimum Deposi",
        ]}
        data={depositData}
        // bgColor="#ffffff"
        // textColor="#111827"
      />

      {/*  Section 6 - */}
      <FourStepSection
        title="How to Deposit Money"
        steps={steps1}
        bgcolor="bg-[#121733]"
      />

      {/*  Section 7 - */}

      <GetMoreMarketsSection
        title="Withdrawal Options from RightTrade Capital"
        paragraphs={[
          "Our secure and simple withdrawal mechanism makes sure that money transfers happen fast and without any hidden costs when you need it.",
          "There is no hiding anything when it comes to withdrawals.",
          "Need a hand?",
          "Our Customer Support team are more than happy to answer your questions.",
        ]}
        bgColor="#f9fafb"
        textColor="#111827"
      />

      {/*  Section 8 - */}
      <MarketViewFeatureSection
        title={otherNotesData.title}
        description={otherNotesData.description}
        features={otherNotesData.features}
        bgcolor="bg-[#121733]"
        titlecolor="text-white"
      />

      {/*  9th Section */}

      <DepositMethodsTable
        heading="Action Speed: An Overview of Processing Time"
        subtext="RightTrade Capital is fully honest and transparent. You can always find out where your money is and when it will get there."
        columnKeys={["method", "time"]}
        data={actionSpeedData}
        columns={["Action", "Speed"]}
      />

      {/*  Section 10 - */}
      <SecurityRegulationSection
        image={home6}
        title="Safety and Trust in the Regulations"
        introParagraph="Your money and personal information are protected thanks to a top-notch security system:"
        bulletPoints={[
          "All transactions are encrypted using SSL",
          "Two-Factor Authentication (2FA)",
          "Stopping fraud and keeping an eye on things in real time",
        ]}
        closingParagraph="Regulators in several areas keep a close check on RightTrade Capital, which is properly licenced."
      />

      {/*  Section 11 - */}
      <RightImageLeftContent
        heading={heading}
        content={content}
        // image={trustImage}
      />

      {/*  13th Section */}
      <SupportedRegions
        title={supportedRegionData.title}
        subtitle={supportedRegionData.subtitle}
        ctaText={supportedRegionData.ctaText}
        ctaNote={supportedRegionData.ctaNote}
        regions={supportedRegionData.regions}
      />

      {/*  14th Section */}
      <FaqSection faqs={faqs} />

      <DepositMethodsTable
        heading="Supported Ways to Withdraw"
        subtext="You have to use the same technique to take out money as you used to put it in for safety and legal reasons."
        data={withdrawData}
        columnKeys={["method", "time", "fees", "minDeposit"]}
        columns={["Method", "Processing Time", "Fees", "Minimum Withdrawal"]}
        // bgColor="#ffffff"
        // textColor="#111827"
      />
    </div>
  );
};

export default DepositsWithdrawals;
