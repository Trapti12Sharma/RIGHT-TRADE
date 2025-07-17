import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/stockCDF1.png";

const StockCFDs = () => {
  const statsData = {
    title: "Stock CFD Trading: What are CFD stocks?",
    subtitle:
      "Open short or long positions on the price of stocks from the biggest companies",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default StockCFDs;
