import React from "react";
import RightImageLeftContent from "./common/RightImageLeftContent";
import tradingImage from "../assets/right-choice.jpg";

const HomePage = () => {
  return (
    <RightImageLeftContent
      heading="Why Traders Make the Choice RightTradeCapital"
      content="We don't just give you access to trading at RightTradeCapital. Our best forex trading platform gives you an edge by being completely open, having powerful tools, and having infrastructure that is as good as what big institutions use."
      listItems={[
        "Forex broker operations that are safe and legal",
        "Very low spreads and a lot of liquidity",
        "A cutting-edge online trading platform for mobile and web",
        "24/5 support in many languages",
        "You can deposit money in different ways and get it back quickly.",
        "You set your own trading goals. We give them the best experience on a forex trading platform.",
      ]}
      image={tradingImage}
    />
  );
};

export default HomePage;
