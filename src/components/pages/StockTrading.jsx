import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/stock1.png";

const StockTrading = () => {
  const statsData = {
    title: "Trade US Stocks",
    subtitle:
      "Buy, sell and hold stocks from the biggest brands in the world.",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default StockTrading;
