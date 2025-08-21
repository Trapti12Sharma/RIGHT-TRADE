import React from "react";
import { Helmet } from "react-helmet";
import StatsSection from "../common/StatsSection";
import FeatureSection from "../common/FeatureSection";
import SideImageTextSection from "../common/SideImageTextSection";
import ImageTextSections from "../common/ImageTextSections";
import SecurityRegulationSection from "../common/SecurityRegulationSection";
import commissionsImage from "../../assets/deposits1.png";
import statsImg from "../../assets/tradingstatistics1.png";
import img from "../../assets/futures2.png";
import home6 from "../../assets/sign-up.png";

const TradingStatistics = () => {
  const pageURL = "https://www.righttradecapital.com/trusted-forex-broker";

  return (
    <>
      <Helmet>
        <title>
          Why Choose TradeCapital | Trusted Forex Broker with Low Spreads
        </title>

        <meta
          name="description"
          content="Choose RightTradeCapital, a trusted and regulated forex broker offering low spreads, fast execution, and secure platforms. Trade with best forex trading broker"
        />

        <link rel="canonical" href={pageURL} />

        <meta property="og:url" content={pageURL} />
        <meta
          property="og:title"
          content="Why Choose TradeCapital | Trusted Forex Broker with Low Spreads"
        />
      </Helmet>

      {/*  Section 1 - Hero Banner */}
      <StatsSection
        title="Our Trading Statistics"
        subtitle="We don't just talk about our performance. We prove it to you."
        buttonText="Learn more"
        image={statsImg}
        note=""
      />

      <FeatureSection
        title="Why You Should Trust RightTrade Capital as Your Forex Broker for Success in Global Trading"
        paragraph="Your choice of broker may make or break your time in the financial markets, particularly in the fast-paced and always-changing world of internet trading. Whether you're a beginner trader searching for advice or an experienced investor looking for improved execution and support, it's crucial to engage with a partner that puts trust, openness, and trader success first."
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="A Forex Broker with a Good Repute for Being Honest That You Can Trust"
        paragraphTextColor="text-white"
        paragraphs={[
          "The most crucial thing to look for in a broker is that they are trustworthy. RightTrade Capital's brand is based on trustworthiness, transparency, and fair trade. RightTradeCapital is a well-known and renowned forex broker that looks out for the interests of traders all around the globe.",
        ]}
        listItems={[
          "Prices and execution are clear",
          "No additional charges or offers that aren't clear",
          "A good repute in the trade community and favorable feedback from customers",
          "Keep money secure by keeping client accounts separate",
        ]}
      />

      <ImageTextSections
        title="A Forex Broker That Is Fully Regulated — You Can Trade With Confidence"
        description={`One of the key things that develops confidence is rules. RightTradeCapital is a registered forex broker that has to follow rigorous guidelines about how it handles money and runs its company. The government keeps an eye on things to make sure that all commerce is done fairly and openly.

        • Licensed by well-known financial groups
        • Subject to frequent reviews for compliance
        • Follows the regulations for Know Your Customer (KYC) and Anti-Money Laundering (AML)
        • Tier 1 bank accounts are secure places to keep money`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-[#fff]"
        textcolor="text-black"
        paragraph="At this level of compliance, traders may concentrate on techniques and markets without worrying about their money or personal information being stolen."
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="Low Prices and Spreads That Are Competitive"
        paragraphTextColor="text-white"
        paragraphs={[
          "Cost is a big factor in trading forex. RightTradeCapital is the top forex broker for affordable pricing and some of the best trading conditions on the market.",
        ]}
        listItems={[
          "Most pairs have spreads that start at 0.0 pips",
          "No fees for regular accounts",
          "Clear and unchanging fee structures",
          "Forex, indices, and commodities all have narrow spreads",
        ]}
        description=" RightTradeCapital lowers expenses so you may retain more of your earnings on every transaction that goes well."
      />

      <SecurityRegulationSection
        image={home6}
        title="What Makes Thousands of People Trust RightTradeCapital"
        introParagraph="Thousands of traders from over 100 countries use RightTradeCapital as their trading partner. This is why:"
        bulletPoints={[
          "A forex broker that respects all the rules",
          "A forex broker you can trust with a good track record",
          "There are no hidden costs and the spreads are cheap",
          "Fast execution and minimal slippage",
          "Demo accounts and aid with learning",
          "A lot of various platforms and assets",
          "24/5 support from supervisors who are constantly there",
          "Accounts that may be changed at any level",
          "Transactions that are safe and secure for money",
          "Technology and tools are continually growing better",
        ]}
      />

      <FeatureSection
        title="This Is the Broker You Can Trust in the End"
        paragraph="When you join RightTradeCapital, you're not simply joining another trading platform. You can trust the forex broker you're dealing with since they care about your long-term success, safety, and development. RightTradeCapital is more than simply a broker; it's the key to trading that is smart, long-term, and profitable. They offer the greatest spreads, platforms, and expert assistance in the industry, and they have a reputation of being honest and upfront."
      />

      <SideImageTextSection
        image={img}
        bgColor="bg-[#121733]"
        textcolor="text-white"
        title="Opportunities to Trade More Than One Asset"
        paragraphTextColor="text-white"
        paragraphs={[
          "RightTradeCapital enables customers spread out their investments by giving them access to a broad variety of trading tools, even if FX is the major emphasis.",
        ]}
        listItems={[
          "Forex (large, little, and rare)",
          "Things like silver, gold, and oil",
          "The NASDAQ, S&P 500, and DAX are examples of indices",
          "Bitcoin, Ethereum, and Litecoin are all kinds of digital money",
          "Shares and ETFs",
        ]}
        description="With RightTrade Capital, you may protect your currency positions with gold or put money into tech stocks. You may do both on the same site."
      />

      <ImageTextSections
        title="A Secure and Efficient Method to Put Money In and Take It Out"
        description={`A good forex broker should make it simple and safe to put money in and take it out. RightTradeCapital uses industry-standard security measures to make sure that all transactions are secure.

        • You may make a deposit in a number of methods, including using a card, a bank transfer, or an e-wallet
        • Fast processing times for getting money out
        • Transactions that aren't obvious don't cost anything
        • A client portal that uses SSL encryption for all account activity`}
        image={commissionsImage}
        reverse={false}
        noButton={true}
        bgcolor="bg-[#fff]"
        textcolor="text-black"
        paragraph="You should be able to retrieve your money right immediately, and RightTradeCapital makes that happen quickly and openly."
      />
    </>
  );
};

export default TradingStatistics;
