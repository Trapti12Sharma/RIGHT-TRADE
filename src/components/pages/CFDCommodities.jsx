import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/cdf1.png";

const CFDCommodities = () => {
  const statsData = {
    title: "Trade commodities with an award-winning broker",
    subtitle:
      "Buy and sell oil, natural gas, coffee and more with RightTrade Capital",
    buttonText: "Open accounts",
    note: "Trading is risky.",
    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default CFDCommodities;
