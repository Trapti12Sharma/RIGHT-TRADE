import React from "react";
import DownloadSection from "../common/DownloadSection";
import DividendExplanation from "../common/DividendExplanation";
import beforeImg from "../../assets/before.png"; // replace with correct images
import afterImg from "../../assets/after.png";
import SimpleCenteredTextSection from '../common/SimpleCenteredTextSection';


const AnyPage = () => {
  return (
    <>
      <DownloadSection
        title="Weekly dividend adjustments"
        subtitle="Up-to-date information about weekly dividend adjustments for FXTM traders."
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
        title="What is a dividend adjustment?"
        content={[
          "A dividend adjustment is a change made to a company’s stock price to balance a dividend payment to shareholders.",
          "Once the dividend allocation for shareholders has been confirmed, the stock price of the company decreases by roughly the amount of the dividend. This is known as the ex-dividend date.",
          "In the case of an index, individual stock adjustments will cause the total index value to fall too, depending on the weighting of the adjusted stocks.",
        ]}
        beforeImage={beforeImg}
        afterImage={afterImg}
      />

    <SimpleCenteredTextSection
  heading="What impact does a dividend adjustment have on traders?"
  subtext={`The dividend adjustment will cause the stock price to decrease by roughly the dividend payment amount.

To make sure that the decrease in the stock or index price doesn’t have any material impact on open positions, FXTM will adjust the trader’s account to match the new ex-dividend price.

This will either be a credit or a debit, depending on whether the trader has a long (buy) or short (sell) position open.

Here’s a quick example.`}
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

    </>
  );
};

export default AnyPage;
