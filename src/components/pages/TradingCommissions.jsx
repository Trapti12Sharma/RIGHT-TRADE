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

import tradingImage from "../../assets/commissions1.png";
import spreadsImage from "../../assets/commissions2.png";
import commissionsImage from "../../assets/commissions3.png";
import swapsImage from "../../assets/commissions4.png"; // 🆕

const TradingCommissions = () => {
  const faqs = [
    {
      question: "What are commissions in trading?",
      answer:
        "Commissions are the fees we’ll charge you for handling your trades.",
    },
    {
      question: "How do you calculate trade commission?",
      answer:
        "The limits for these are set by each individual payment provider. You can find the minimum and maximum for each method in MyRightTrade Capital.",
    },
    {
      question: "What is minimum commission fee?",

      answer:
        "The minimum commission you'll pay is $25 per million notional on FX, Metals and CFDs.",
    },
    {
      question: "Can I invest without fees?",
      answer:
        "Afraid not. It’s how we make our money from doing business with you. We do keep these as low as possible, which is why over 3 million traders worldwide have chosen us.",
    },
    {
      question: "What does commission-free mean?",
      answer:
        "Commission-free means we won’t charge you any handling costs for trading that instrument with us.",
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
      <BreadcrumbAndDescription
        breadcrumbs={breadcrumbs}
        heading={heading}
        description={description}
      />

      {/* Section 3 - ImageTextSection for Spreads */}
      <ImageTextSections
        title="Spreads"
        description="The spread is the difference between the ask and the bid price on each trade you make - and is the ‘cost’ of your trade. This is one of the ways brokers make their money (including us), but we always aim to make our spreads very tight so that you pay as little as possible.

      Our Advantage account offers typically zero spreads on FX pairs and as low as zero on Gold/Dollar."
        image={spreadsImage}
        reverse={false}
        noButton={true} // ✅ added to hide button only here
      />

      {/* 🔶 Section 4 - Image Left & Text Right: Commissions */}
      <ImageLeftTextRightSection
        imgSrc={commissionsImage}
        title="Commissions"
        paragraph="Commissions are the charges that you’ll pay us for handling your trades. We keep these small – in fact with our Advantage Plus account you won’t pay any commission fees at all."
      />

      {/* 🔶 Section 5 - Text Left & Image Right: Swaps */}
      <TextImageSection
        imgSrc={swapsImage}
        title="Swaps"
        paragraph="A swap is the interest that you either earn or pay for a trade that’s open overnight. We have two types of swaps: Swap long (for buy positions) and Swap short (for sell positions). Both are expressed in pips per lot, and vary depending on which instrument you’re trading.

You’ll pay that interest to us – but we keep these fees as low as possible."
      />
      {/* 🔶 Section 6 - Text Left & Image Right: Swaps */}

      <CenteredTextSection
        heading="How our commissions work"
        leftText="Commissions are the charges you’ll pay for us to facilitate your trades as your broker. We keep these as low as possible. In fact, with our Advantage Plus account, you won’t pay any commission fees at all."
        rightText={
          <>
            Our <strong>Advantage account</strong> offers competitive
            commissions across FX, Spot Metals and Cryptocurrency CFDs. To find
            out more check out our Help Centre article on{" "}
            <a href="#" className="text-blue-600 underline">
              calculating commissions here
            </a>
            .
          </>
        }
      />

      {/* 🔶 Section 7 - Simple Centered Heading and Text: Stocks */}
      <SimpleCenteredTextSection
        heading="Trading fees with stocks"
        subtext="US stock trading is commission-free and includes access to real time price data to help you keep an eye on the latest movements."
        style={{
          container: {
            backgroundColor: "#f9f9f9",
            padding: "60px 20px",
            textAlign: "center",
          },
          heading: {
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "20px",
          },
          subtext: {
            fontSize: "1rem",
            color: "#555",
            lineHeight: "1.6",
            whiteSpace: "pre-line",
            maxWidth: "800px",
            margin: "0 auto",
          },
        }}
      />

      {/* 🔶 Section 8 - Pricing Stats Cards with Numbers */}
      <PricingStatsSection
        title="Our pricing in numbers"
        stats={[
          {
            value: "0.0",
            label: "SPREADS",
            description:
              "Spreads close to zero on major FX pairs, including EURUSD and USDJPY, and as low as zero on XAUUSD.",
          },
          {
            value: "$3.5",
            label: "COMMISSIONS PER LOT ON FX",
            description:
              "Our Advantage account gives you the best spreads and highly competitive commissions rates on FX, Metals, Indices and Commodities.",
          },
          {
            value: "0%",
            label: "COMMISSION ON US STOCKS",
            description:
              "Trade the biggest US brands, including Tesla, Apple, Facebook and Microsoft, with no commission.",
          },
        ]}
      />
      {/*  9th Section - Get more from the markets */}
      <GetMoreMarketsSection />

      {/*  10th Section */}
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default TradingCommissions;
