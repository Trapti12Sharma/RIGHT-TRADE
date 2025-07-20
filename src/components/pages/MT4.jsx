import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/mt4n.png";

const MT4 = () => {
  return (
    <StatsSection
      title="Trade with MetaTrader 4"
      subtitle="Start trading with the platform of choice for millions of traders across the world"
      buttonText="Why MetaTrader 4?"
      image={bannerImage}
    />
  );
};

export default MT4;
