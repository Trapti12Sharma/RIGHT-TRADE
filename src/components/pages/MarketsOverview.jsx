import React from "react";
import StatsSection from "../common/StatsSection";

// import your image
import statsBg from "../../assets/markets1.png"; // replace with correct image path

const MarketOverview = () => {
  const statsData = {
    title: "Trade the global markets",
    subtitle:
      "Access 1000+ instruments with ultra-low spreads and lightning speed execution",
    buttonText: "Open account",
    note: "Trading is risky.",
    image: statsBg,
  };

  return (
    <div className="w-full">
      {/* ✅ Reusable Stats Section */}
      <StatsSection
        title={statsData.title}
        subtitle={statsData.subtitle}
        buttonText={statsData.buttonText}
        note={statsData.note}
        image={statsData.image}
      />
    </div>
  );
};

export default MarketOverview;
