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
        "You can by exchanging currencies at a bank or local currency exchange (at the airport for example). The downside of this is you won't have access to leverage or risk management tools like Stop Loss and Take Profit. Trading forex with an online broker like FXTM also offers other benefits including customer support, rapid execution and educational resources to help you on your way.",
    },
    {
      question: "How much is the transaction fee?",
      answer:
        "We’ll charge a flat $3 transaction fee for any deposit or withdrawal less than $30 or equivalent.",
    },
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
      <FaqSection faqs={faqItems} />
    </>
  );
};

export default ToolsOverview;
