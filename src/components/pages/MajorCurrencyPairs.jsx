import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/currency1.png";

const MajorCurrencyPairs = () => {
  const statsData = {
    title: "Major currency pairs: most traded currencies",
    subtitle:
      "Find out everything you need to know about trading currencies, including how it works, the major currency pairs and the most traded currencies globally.",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default MajorCurrencyPairs;
