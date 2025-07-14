import React from "react";
import TradingSection from "../common/TradingSection";
import tradingstatistics1 from "../../assets/tradingstatistics1.png"; // replace with your actual image file

const TradingStatistics = () => {
  return (
    <div>
      <TradingSection
        title="Our Trading Statistics"
        subtitle="We don't just talk about our performance. We prove it to you."
        buttonText="Learn more"
        imageSrc={tradingstatistics1}
        bgColor="#E14D2A" // or use Tailwind bg-red-600 via className if preferred
      />

      {/* Add more sections below reusing TradingSection */}
      {/* Example:
      <TradingSection
        title="Another Section"
        subtitle="Different content here."
        buttonText="Explore"
        imageSrc={anotherImage}
        bgColor="#123456"
      />
      */}
    </div>
  );
};

export default TradingStatistics;
