import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/futures1.png";

const Futures = () => {
  const statsData = {
    title: "Futures trading with RightTRADE Capital",
    subtitle:
      "Diversify your trades and hedge against market volatility with CFD futures trading.",
    // buttonText: "Start Trading Futures",
    // note: "",

    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default Futures;
