import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/mt5.png";

const MT5 = () => {
  return (
    <StatsSection
      title="Trade with MetaTrader 5"
      subtitle="The platform of choice for traders who want more tools and more markets"
      buttonText="Why MetaTrader 5?"
      image={bannerImage}
    />
  );
};

export default MT5;
