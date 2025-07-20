import React from "react";
import StatsSection from "../../components/common/StatsSection";
import bannerImage from "../../assets/holidaytrading.png";

const HolidayTradingSchedule = () => {
  return (
    <StatsSection
      title="Holiday Trading Schedule"
      subtitle="Stay informed on market holiday closures."
      buttonText="Check Schedule"
      note="Updated regularly."
      image={bannerImage}
    />
  );
};

export default HolidayTradingSchedule;
