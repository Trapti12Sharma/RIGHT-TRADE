import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/demo1.png";

const DemoAccounts = () => {
  return (
    <StatsSection
      title="Free Forex Demo Trading Account"
      subtitle="Skill up and practice zero-risk trading on our free demo account."
      buttonText="Open Demo account"
      note="Trading is risky."
      image={bannerImage}
    />
  );
};

export default DemoAccounts;
