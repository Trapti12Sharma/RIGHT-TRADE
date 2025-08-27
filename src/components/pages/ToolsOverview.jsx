import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../common/StatsSection";
import ImageWithCardListSection from "../common/ImageWithCardListSection";
import SideImageTextSection from "../common/SideImageTextSection";
import ImageTextSections from "../common/ImageTextSections";
import ContactSection from "../common/ContactSection";
import FeatureSection from "../common/FeatureSection";
import FaqSection from "../common/FaqSection2";
import tooloverview1 from "../../assets/tooloverview1.png";
import toolCardImage from "../../assets/tooloverview2.png";
import fxTradingImg from "../../assets/currency3.png";
import commissionsImage from "../../assets/deposits1.png";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ToolsOverview = () => {
  const pageURL =
    "https://www.righttradecapital.com /advantage-trading-accounts";

  const faqItems = [
    {
      question: "What kind of account is ideal for trading forex?",
      answer:
        "The Advantage Account is the greatest choice for forex traders since it has no spreads on important FX pairs and gets you the most bang for your buck.",
    },
    {
      question: "What kind of account do I need to trade forex?",
      answer:
        " You may trade forex on any of our accounts, but the best one for you will depend on how you trade and what you want to accomplish.",
    },
    {
      question: "Can you trade FX without a broker?",
      answer:
        "No. You need a licensed forex broker like RightTrade Capital to safely trade in the world's FX markets.",
    },
    {
      question: "How much does the transaction cost?",
      answer:
        "We provide straightforward pricing, fair spreads, and no fees on many of our items.",
    },
  ];

  const cardData = [
    {
      title: "Signals for Trading with RightTrade Capital",
      description:
        "Get access to high-quality trading signals and market assessments based on data for currencies, indices, stocks, and commodities. Our signals are there to assist you locate opportunities quickly and accurately.",
      arrowColor: "blue",
    },
    {
      title: "The Pivot Points Strategy Will Help You Trade Better",
      description:
        "Use the Pivot Points approach Tool to locate key support and resistance levels, make your approach better, and gain a feel for the market's mood so you can make better trades.",
      arrowColor: "blue",
    },
    {
      title: "Daily Market Analysis: Get Professional Help Every Day",
      description:
        "Every day, our team of experts looks at the market for currencies, commodities, stocks, and indices. Stay up to date on market movements so you can make smarter trading decisions.",
      arrowColor: "blue",
    },
    {
      title: "A Look at the Tools",
      description:
        "The tools we provide you for trading will help you get ahead in the fast-moving financial markets. If you have the right knowledge and risk management tools, you'll always be one step ahead.",
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
      <Helmet>
        <title>Best Online Trading Tools | Trading Calculators</title>

        <meta
          name="description"
          content="RightTrade Capital offers free trading tools including calculators, signals, pivot strategies, economic calendar, and daily market analysis to help you trade smarter."
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Best Online Trading Tools | Trading Calculators"
        />
      </Helmet>

      <StatsSection
        title="Final Content – RightTrade Capital | Trading Tools"
        subtitle="Make smart choices with strong trading tools"
        buttonText="Explore Tools"
        image={tooloverview1}
      />

      <FeatureSection
        title="Welcome:"
        paragraph="RightTrade Capital believes that every trader should have the right tools to be successful. We provide a comprehensive collection of tools that includes anything from profit calculators to daily market research and calendars that show you what's happening in the economy right now. All of this is supposed to help you trade more wisely and handle risks better."
      />

      <SideImageTextSection
        image={fxTradingImg}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="Trading Calculators: A Safer Way to Handle Risk"
        paragraphTextColor="text-white"
        paragraphs={[
          "Make sure you know what you're getting into with every agreement. You may use our calculators to:",
        ]}
        listItems={[
          "Find out how much money you may win or lose.",
          "Control your level of risk well.",
          "Find out FX exchange rates quickly.",
          "When you trade, don't guess; use clear numbers.",
        ]}
      />

      <ImageTextSections
        title="What are the benefits of using RightTrade Capital Trading Tools?"
        description={`

        • We can provide you free, professional tools that are easy to use.
        • Get the proper signals for trading.
        • Get the news as it happens.
        • Get expert knowledge about your field that may benefit you.
        • Better handle risks and earnings.`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
      />

      <ImageWithCardListSection image={toolCardImage} cards={cardData} />

      <ImageTextSections
        title="Economic Calendar: What's Happening in the Market Right Now"
        description={`Keep up with the latest international events that have an effect on commerce. Our Economic Calendar offers you relevant information about:

        • Major economic indicators
        • News about money that is breaking
        • Market volatility trends`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
      />

      <ContactSection
        heading="Call Us"
        subheading="Do you still have questions about the tools we use for trading?
        Our support team is always ready to assist you."
        contacts={contactItems}
      />
      <FaqSection faqs={faqItems} />
    </>
  );
};

export default ToolsOverview;
