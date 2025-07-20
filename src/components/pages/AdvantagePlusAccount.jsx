import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/advantageplus.png";

const AdvantagePlusAccount = () => {
  return (
    <StatsSection
      title="Advantage Plus trading account"
      subtitle="Trade on our commission-free ECN account with competitive spreads"
      buttonText="Open Account"
      note="Trading is risky"
      image={bannerImage}
    />
  );
};

export default AdvantagePlusAccount;
