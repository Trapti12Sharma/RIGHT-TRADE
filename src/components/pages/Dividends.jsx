import React from "react";
import { Helmet } from "react-helmet";
import DownloadSection from "../common/DownloadSection";
import DividendExplanation from "../common/DividendExplanation";
import beforeImg from "../../assets/before.png"; // replace with correct images
import afterImg from "../../assets/after.png";
import SimpleCenteredTextSection from "../common/SimpleCenteredTextSection";
import DividendExamples from "../common/DividendExamples";
import TrustCTASection from "../common/TrustCTASection";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/demo1.png";

const AnyPage = () => {
  const pageURLA = "https://www.righttradecapital.com/dividends";

  return (
    <>
      <Helmet>
        <title>Weekly Dividend Adjustments for US Stock CFDs & Indices</title>

        <meta
          name="description"
          content="Stay updated on weekly dividend adjustments with RightTrade Capital for balanced and smarter trading decisions."
        />

        <link rel="canonical" href={pageURLA} />

        <meta property="og:url" content={pageURLA} />
        <meta
          property="og:title"
          content="Weekly Dividend Adjustments for US Stock CFDs & Indices"
        />
      </Helmet>

      <StatsSection
        title="Free Forex Demo Trading Account"
        subtitle="Skill up and practice zero-risk trading on our free demo account."
        buttonText="Open Demo account"
        note="Trading is risky."
        image={bannerImage}
      />
      <DownloadSection
        title="Weekly dividend adjustments"
        subtitle="Up-to-date information about weekly dividend adjustments for RightTrade Capital traders."
        buttons={[
          {
            label: "Stock Indices Dividend Adjustments",
          },
          {
            label: "US Stock CFDs Dividend Adjustments",
          },
        ]}
      />

      <DividendExplanation
        title="Weekly Changes to Dividends at RightTrade Capital"
        content={[
          "To make sure that trading goes smoothly and clearly, keep an eye on the newest weekly dividend changes at RightTrade Capital. We provide you reliable and fast information so you can make smart choices, whether you trade US Stock CFDs or Stock Indices.",
        ]}
        beforeImage={beforeImg}
        afterImage={afterImg}
      />

      <SimpleCenteredTextSection
        heading="What impact does a dividend adjustment have on traders?"
        subtext={`The dividend adjustment will cause the stock price to decrease by roughly the dividend payment amount.

To make sure that the decrease in the stock or index price doesn’t have any material impact on open positions, RightTrade Capital will adjust the trader’s account to match the new ex-dividend price.

This will either be a credit or a debit, depending on whether the trader has a long (buy) or short (sell) position open.

Here’s a quick example.`}
        style={{
          container: {
            backgroundColor: "#f9f9f9",
            padding: "60px 20px",
            textAlign: "center",
            fontFamily: '"Source Sans Pro", sans-serif',
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

      <DividendExamples
        title="Dividend Adjustment Example"
        note="Numbers and values are used for illustrative purposes only and aren’t indicative of current market conditions. Dividend adjustments take place on ex-dividend dates for stocks."
        leftCard={{
          title: "Long Position",
          items: [
            "Let’s say that a trader is 20 lots long in NAS100 at a price of $18,000.00. A dividend adjustment decreases the total value of the index by $3.55.",
            "Normally, this would result in a net loss for the trader. However, as this decrease in value is not a true loss for the trader, we credit the trader's balance to account for the dividend adjustment and ‘make them whole’.",
            "The credit would be calculated as 20 x $3.55 = $71.00. If needed, this amount is converted to the base currency of the account.",
            "Dividend adjustment: -$3.55",
            "Amount credited to account: $71:00",
          ],
        }}
        rightCard={{
          title: "Short Position",
          items: [
            "Now let’s imagine another trader is 20 lots short in NAS100 at the same price of $18,000.00 and the dividend adjustment decreases the total value of the index by $3.55.",
            "Normally, this would result in a net gain for the trader. However, as this decrease in value is not a true profit for the shorting trader, we would debit the trader's balance to account for the dividend adjustment.",
            "The same calculation is used, but the amount is debited from the trader account:",
            "20 x -$3.55 = -$71.00. If needed, this amount is converted to the base currency of the account.",
            "Dividend adjustment: -$3.55",
            "Amount debited from account: $71:00",
          ],
        }}
      />
      <TrustCTASection
        title="Register to trade stocks"
        subtitle="Open your account or get back into trading right now."
        buttonText="Register or log in to My RightTrade Capital"
      />
    </>
  );
};

export default AnyPage;
