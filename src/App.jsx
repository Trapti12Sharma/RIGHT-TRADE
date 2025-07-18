// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Shared Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Page Components
import SeminarBanner from "./components/SeminarBanner";
import PartnerSection from "./components/PartnerSection";
import WhyChoose from "./components/WhyChoose";
import ExpertTrader from "./components/ExpertTrader";
import ForexIntro from "./components/ForexIntro";
import WhatIsTrading from "./components/WhatIsTrading";
import DemoAccountSection from "./components/DemoAccountSection";
import DemoStepsSection from "./components/DemoStepsSection";
import ExpertHintsSection from "./components/ExpertHintsSection";
import TradingSections from "./components/TradingSections";
import LatestNewsSection from "./components/LatestNewsSection";
import EducationSections from "./components/EducationSections";
import ExpertTraderSection from "./components/ExpertTraderSection";
import AwardsSection from "./components/AwardsSection";

// New Page
import WhyRightTrade from "./components/pages/whyrighttrade";
import Award from "./components/pages/award";
import FundSafety from "./components/pages/fundSafety";
import TradingStatistics from "./components/pages/tradingStatistics";
import DepositsWithdrawals from "./components/pages/DepositsWithdrawals";
import TradingCommissions from "./components/pages/TradingCommissions";
import MarketsOverview from "./components/pages/MarketsOverview";
import ContractSpecifications from "./components/pages/ContractSpecifications";
import Forex from "./components/pages/Forex";
import MajorCurrencyPairs from "./components/pages/MajorCurrencyPairs";
import SpotMetals from "./components/pages/SpotMetals";
import CFDCommodities from "./components/pages/CFDCommodities";
import StockTrading from "./components/pages/StockTrading";
import StockCFDs from "./components/pages/StockCFDs";
import CFDOnIndices from "./components/pages/CFDOnIndices";
import CryptoCFDs from "./components/pages/CryptoCFDs";
import Futures from "./components/pages/Futures";

// Home Page Grouped as Component
const Home = () => {
  return (
    <>
      <SeminarBanner />
      <PartnerSection />
      <WhyChoose />
      <ExpertTrader />
      <ForexIntro />
      <WhatIsTrading />
      <DemoAccountSection />
      <DemoStepsSection />
      <ExpertHintsSection />
      <TradingSections />
      <LatestNewsSection />
      <EducationSections />
      <ExpertTraderSection />
      <AwardsSection />
    </>
  );
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-righttrade-capital" element={<WhyRightTrade />} />
          <Route path="/awards" element={<Award />} />
          <Route path="/fund-safety" element={<FundSafety />} />
          <Route path="/trading-statistics" element={<TradingStatistics />} />
          <Route
            path="/deposits-and-withdrawals"
            element={<DepositsWithdrawals />}
          />
          <Route
            path="/trading-commissions-and-fees"
            element={<TradingCommissions />}
          />
          <Route path="/markets-overview" element={<MarketsOverview />} />
          <Route
            path="/contract-specifications"
            element={<ContractSpecifications />}
          />
          <Route path="/forex" element={<Forex />} />
          <Route
            path="/major-currency-pairs"
            element={<MajorCurrencyPairs />}
          />
          <Route path="/spot-metals" element={<SpotMetals />} />
          <Route path="/cfd-commodities" element={<CFDCommodities />} />
          <Route path="/stocks-trading" element={<StockTrading />} />
          <Route path="/stocks-cfds" element={<StockCFDs />} />
          <Route path="/cfd-on-indices" element={<CFDOnIndices />} />
          <Route path="/crypto-cfds" element={<CryptoCFDs />} />
          <Route path="/futures" element={<Futures />} />
        </Routes>
        <Footer />
        {/* <FooterBottom /> */}
      </Router>
    </div>
  );
};

export default App;
