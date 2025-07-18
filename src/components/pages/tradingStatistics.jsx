// src/pages/tradingStatistics.jsx

import React from "react";
import StatsSection from "../common/StatsSection";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import ExecutionStats from "../common/ExecutionStats";
import SpreadChart from "../common/SpreadChart";
import WhyTradeWithFXTM from "../common/WhyTradeWithFXTM";
import ContactOptions from "../common/ContactOptions";
import FaqSection from "../common/FaqSection2"; // ⬅️ new import
import AwardsSection from "../common/AwardsSection";
import statsImg from "../../assets/tradingstatistics1.png";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg";
import fund11 from "../../assets/fund11.svg";
import fund12 from "../../assets/fund12.svg";

const TradingStatistics = () => {
  const faqs = [
    "What are performance statistics?",
    "What is order execution speed?",
    "What is slippage?",
    "What does requotes mean?",
  ];

  const awardsItems = [
    // ✅ Place it here before return
    { imageSrc: fund9 },
    { imageSrc: fund10 },
    { imageSrc: fund11 },
    { imageSrc: fund12 },
  ];
  return (
    <div>
      {/*  Section 1 - Hero Banner */}
      <StatsSection
        title="Our Trading Statistics"
        subtitle="We don't just talk about our performance. We prove it to you."
        buttonText="Learn more"
        image={statsImg}
        note=""
      />

      {/*  Section 2 - Breadcrumb & Description */}
      <BreadcrumbAndDescription
        breadcrumbs={[
          { label: "RightTrade Capital", href: "#" },
          { label: "About Us", href: "#" },
          { label: "Performance Statistics", href: "#" },
        ]}
        description="We aim higher than just resetting the standards within the forex industry – we also deliver the highest levels of transparency to all our clients. The statistics below show exactly why we're so proud of our trading conditions, which include some of the best spreads in the business."
      />

      {/*  Section 3 - Execution Stats */}
      <ExecutionStats
        title="Trade execution faster than the blink of an eye"
        leftStat={{
          value: "99.90%",
          label: "Percentage of trades executed in less than a second",
          description:
            "Order execution speed is absolutely crucial for you to get the best possible price at the exact market moment you want.",
        }}
        rightStat={{
          value: "0.071",
          unit: "SECS",
          label: "Average time between order receipt and execution",
          description:
            "We understand there’s no time to waste – as soon as you’ve made your move, we’ll put it into action at lightening speed.",
        }}
      />

      {/*  Section 4 - Spread Chart */}
      <SpreadChart />

      {/*  Section 5 - Why Trade With FXTM */}
      <WhyTradeWithFXTM />

      {/*  Section 6 - Contact CTA */}
      <ContactOptions />

      {/*  Section 7 - FAQs */}
      <FaqSection faqs={faqs} />

      {/*  Section 8 - */}
      <AwardsSection awards={awardsItems} />
    </div>
  );
};

export default TradingStatistics;
