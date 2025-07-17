import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/indices1.png";

const CFDOnIndices = () => {
  const statsData = {
    title: "Trade major global indices",
    subtitle:
      "Trade the S&P 500, FTSE 100 and more with super-tight spreads.",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default CFDOnIndices;
