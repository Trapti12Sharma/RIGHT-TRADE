import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/cryptocdf1.png";

const CryptoCFDs = () => {
  const statsData = {
    title: "Trade cryptos the smart way",
    subtitle:
      "Go long or short on bitcoin, ether, ripple and more, with up to 1:1000 leverage.",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default CryptoCFDs;
