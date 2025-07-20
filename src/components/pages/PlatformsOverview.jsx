import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/platformoverview1.png";

const PlatformsOverview = () => {
  return (
    <StatsSection
      title="MetaTrader trading platforms"
      subtitle="Explore the differences between MetaTrader 4 and MetaTrader 5"
      buttonText="Learn more"
      image={bannerImage}
    />
  );
};

export default PlatformsOverview;
