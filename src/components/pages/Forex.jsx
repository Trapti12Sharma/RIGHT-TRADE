import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/forexs1.png";

const Forex = () => {
  const statsData = {
    title: "Start forex trading with FXTM",
    subtitle:
      "Trade the most popular Forex majors with spreads from zero",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default Forex;
