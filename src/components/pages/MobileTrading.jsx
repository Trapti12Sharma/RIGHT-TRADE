import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/mobiletrading.png";

const MobileTrading = () => {
  return (
    <StatsSection
      title="Trade on the go, straight from your phone"
      subtitle="Get the FXTM Trader app today for commission-free trading and spreads as low as zero on major FX pairs and gold"
      buttonText="Learn mmore"
      image={bannerImage}
    />
  );
};

export default MobileTrading;
