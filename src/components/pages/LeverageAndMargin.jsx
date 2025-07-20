import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/leverageandmargin1.png";

const LeverageAndMargin = () => {
  return (
    <StatsSection
      title="Leverage and margin requirements"
      subtitle="Read our leverage and margin conditions to trade and invest wisely"
      buttonText="Learn More"
      image={bannerImage}
    />
  );
};

export default LeverageAndMargin;
