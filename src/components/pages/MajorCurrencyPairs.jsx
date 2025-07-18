import React from "react";
import StatsSection from "../common/StatsSection";
import SimpleCenteredTextSection from "../common/SimpleCenteredTextSection";
import ImageWithTextCenterSection from "../common/ImageWithTextCenterSection";
import ForexTradeSection from "../common/ForexTradeSection";
import statsBg from "../../assets/currency1.png";
import diagramImg from "../../assets/currency2.png"; // new image

const MajorCurrencyPairs = () => {
  const statsData = {
    title: "Major currency pairs: most traded currencies",
    subtitle:
      "Find out everything you need to know about trading currencies, including how it works, the major currency pairs and the most traded currencies globally.",
    buttonText: "Open account",
    note: "Trading is risky",
    image: statsBg,
  };

  const forexTradeData = {
    title: "What are the base and quote currencies?",
    description: `The ‘base’ currency is always listed first in a forex pair, with the ‘quote’ currency listed second. The base currency is always equal to one, while the quote currency represents the current price of the pair.\n\nThe quote represents how much it’ll cost to buy one of the base currency.\n\nSo, if the price of GBP/USD is quoted as 1.13490, it would cost you 1.13490 US dollars to buy one British pound.\n\nWhen you are trading forex, you are always buying one currency and selling another at the same time. Learn more about base and quote currencies.`,
    benefits: [
      "The base currency is listed first, followed by the quote currency.",
      "The base currency always equals one unit.",
      "The quote shows how much of the quote currency is needed to buy one unit of the base currency.",
      "You simultaneously buy one and sell the other in every forex trade.",
    ],
  };

  const textSectionData = {
    heading: "Trading currency pairs",
    subtext: `Currency trading, also known as forex, foreign exchange or FX trading, is the conversion of one currency into another. Roughly $6.5 trillion worth of currency transactions are carried out every single day – whether by individuals, banks or companies. This makes forex one of the most actively traded markets in the world.\n\nForeign exchange is often done for practical purposes. For example, you might exchange your local currency for US dollars before going on holiday to the United States. However, the vast majority of currency conversion is done by forex traders looking to turn a profit.\n\nThe amount of currency converted every day means that the market is highly liquid, but also makes some currencies extremely volatile. While this can offer exciting and potentially lucrative trading opportunities, it comes with additional risk, too.`,
  };

  const currencyDiagramSection = {
    title: "How do currency pairs work?",
    description:
      "A currency pair is a combination of two currencies that are traded against each other. Some of the most popular pairs to trade include the euro against the US dollar (EUR/USD), the US dollar against the Japanese yen (USD/JPY) and the British pound against the US dollar (GBP/USD).",
    image: diagramImg,
  };

  return (
    <>
      <StatsSection {...statsData} />
      <SimpleCenteredTextSection {...textSectionData} />
      <ImageWithTextCenterSection {...currencyDiagramSection} />
      <ForexTradeSection {...forexTradeData} />
    </>
  );
};

export default MajorCurrencyPairs;
