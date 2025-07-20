import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/advantage1.png";

const AdvantageAccount = () => {
  return (
    <StatsSection
      title="Advantage trading account"
      subtitle="Our most popular account, with spreads from zero on major FX pairs."
      buttonText="Open  Account"
      note="Trading is risky"
      image={bannerImage}
    />
  );
};

export default AdvantageAccount;
