import React from "react";
import StatsSection from "../common/StatsSection";
import statsBg from "../../assets/contract1.png";

const ContractSpecifications = () => {
  const statsData = {
    title: "Contract Specifications",
    subtitle:
      "See our minimum spreads, pip values, swap fees and other conditions.",
    buttonText: "Learn more",
   
    image: statsBg,
  };

  return <StatsSection {...statsData} />;
};

export default ContractSpecifications;
