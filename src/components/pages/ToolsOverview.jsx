import React from "react";
import StatsSection from "../common/StatsSection";
import ImageWithCardListSection from "../common/ImageWithCardListSection";
import ContactSection from "../common/ContactSection";
import FaqSection from "../common/FaqSection2";
import GetMoreMarketsSection from "../common/GetMoreMarketsSection";
import BreadcrumbAndDescription from "../common/BreadcrumbAndDescription";
import HeadingWithDescription from "../common/HeadingWithDescription";

import tooloverview1 from "../../assets/tooloverview1.png";
import toolCardImage from "../../assets/tooloverview2.png";

import { Mail, Phone, MessageCircle } from "lucide-react";

const ToolsOverview = () => {
  const faqs = [
    "What are performance statistics?",
    "What is order execution speed?",
    "What is slippage?",
    "What does requotes mean?",
  ];
  const cardData = [
    {
      title: "FXTM Trading Signals",
      description:
        "High quality data and assessments of market fluctuations across a range of financial instruments",
      arrowColor: "orange",
    },
    {
      title: "FXTM Pivot Points Strategy",
      description:
        "Sharpen your trading strategy and determine market sentiment with FXTM's Pivot Points Strategy.",
      arrowColor: "blue",
    },
    {
      title: "Economic Calendar",
      description:
        "Keep up to date with major economic indicators, news and alerts as soon as they happen.",
      arrowColor: "blue",
    },
    {
      title: "Daily Market Analysis",
      description:
        "Get market news from our in-house team of experts and find out what's happening with your favorite instruments and markets, from currencies to stocks and everything in between.",
      arrowColor: "blue",
    },
  ];

  const contactItems = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      link: "mailto:support@example.com",
    },
    { icon: <Phone size={24} />, label: "Phone", link: "tel:+1234567890" },
    {
      icon: <MessageCircle size={24} />,
      label: "Chat",
      link: "https://example.com/chat",
    },
  ];

  return (
    <>
      <StatsSection
        title="Tools Overview"
        subtitle="Explore all trading tools and resources available for every trader."
        buttonText="Explore Tools"
        image={tooloverview1}
      />

      <BreadcrumbAndDescription
        breadcrumbs={[
          { label: "RightTrade Capital", href: "#" },
          { label: "Trading Tools", href: "#" },
        ]}
        description="There's a reason we've made this trading tool kit - we want you to do well. Get even more knowledge and understanding of the markets - and all for free."
      />

      <HeadingWithDescription
        title="Calculate potential profits, losses and risks"
        description="Use these helpful calculators to help you manage your risk level, understand your potential profits and losses, and even calculate foreign exchange rates - and all for free.

"
      />
      <ImageWithCardListSection image={toolCardImage} cards={cardData} />

      <HeadingWithDescription
        title="Markets news and insights to help you make those important trading decisions"
        description="Don't miss on a single minute of the market action. These trading tools will keep you up to date with all of the latest news, events and volatility.

"
      />

      <ImageWithCardListSection image={toolCardImage} cards={cardData} />
      <GetMoreMarketsSection />

      <ContactSection
        heading="Contact Us"
        subheading="Any questions about these trading tools?"
        contacts={contactItems}
      />
      <FaqSection faqs={faqs} />
    </>
  );
};

export default ToolsOverview;
