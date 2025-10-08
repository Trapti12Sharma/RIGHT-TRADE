import React from "react";
import RightImageLeftContent from "./common/RightImageLeftContent";
import tradingImage from "../assets/right-choice.jpg";

const HomePage = () => {
  return (
    <RightImageLeftContent
      heading="Why Traders Choose RightTrade Capital:
"
      content="The founder of Right Safe and regulated operations of forex brokers."
      listItems={[
        "Very tight spreads with a high degree of liquidity.",
        "Prompt execution is vital in making timely entries and exits in trading.",
        "Access to overseas markets with high-end forex online trading systems",
        "Compatibility across different devices is also assured, from phone devices and web programs up and beyond.",
        "24/5 multilingual customer services",
      ]}
      image={tradingImage}
    />
  );
};

export default HomePage;
