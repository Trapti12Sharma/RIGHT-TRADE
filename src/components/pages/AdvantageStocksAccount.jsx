import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/advantagestocks1.png";

const AdvantageStocksAccount = () => {
  return (
    <StatsSection
      title="Advantage Stocks trading account"
      subtitle="Trade Tesla, Apple, Microsoft and more with zero commission."
      buttonText="Open Account"
      note="Trading is risky"
      image={bannerImage}
    />
  );
};

export default AdvantageStocksAccount;
