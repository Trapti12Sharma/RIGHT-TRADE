import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/spotmetals1.png";

const SpotMetals = () => {
  const statsData = {
    title: "Trade spot gold and silver",
    subtitle:
      "Buy and sell the price of the biggest precious metals",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default SpotMetals;
