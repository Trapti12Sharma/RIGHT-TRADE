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

import AccountsOverview from "./components/pages/AccountsOverview";
import AdvantageAccount from "./components/pages/AdvantageAccount";
import AdvantageStocksAccount from "./components/pages/AdvantageStocksAccount";
import AdvantagePlusAccount from "./components/pages/AdvantagePlusAccount";
import DemoAccounts from "./components/pages/DemoAccounts";

import PlatformsOverview from "./components/pages/PlatformsOverview";
import MT4 from "./components/pages/MT4";
import MT5 from "./components/pages/MT5";
import MobileTrading from "./components/pages/MobileTrading";

import LeverageMargin from "./components/pages/LeverageAndMargin";
import Dividends from "./components/pages/Dividends";
import ContactUs from "./components/pages/ContactUs";

import ToolsOverview from "./components/pages/ToolsOverview";
import ProTradingTools from "./components/pages/ProTradingTools";
import TradingSignals from "./components/pages/TradingSignals";
import ProfitCalculator from "./components/pages/ProfitCalculator";
import MarginCalculator from "./components/pages/MarginCalculator";

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
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-righttrade-capital" element={<WhyRightTrade />} />
            {/* <Route path="/awards" element={<Award />} />
            <Route path="/fund-safety" element={<FundSafety />} /> */}
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
            <Route path="/accounts-overview" element={<AccountsOverview />} />
            <Route path="/advantage-account" element={<AdvantageAccount />} />
            <Route
              path="/advantage-stocks-account"
              element={<AdvantageStocksAccount />}
            />
            <Route
              path="/advantage-plus-account"
              element={<AdvantagePlusAccount />}
            />
            <Route path="/demo-accounts" element={<DemoAccounts />} />

            <Route path="/platforms-overview" element={<PlatformsOverview />} />
            <Route path="/mt4" element={<MT4 />} />
            <Route path="/mt5" element={<MT5 />} />
            <Route path="/mobile-trading" element={<MobileTrading />} />

            <Route path="/leverage-and-margin" element={<LeverageMargin />} />
            <Route path="/dividends" element={<Dividends />} />
            <Route path="/contact-us" element={<ContactUs />} />

            <Route path="/tools-overview" element={<ToolsOverview />} />
            <Route path="/pro-trading-tools" element={<ProTradingTools />} />
            <Route path="/trading-signals" element={<TradingSignals />} />
            <Route path="/profit-calculator" element={<ProfitCalculator />} />
            <Route path="/margin-calculator" element={<MarginCalculator />} />
          </Routes>
        </div>
        <Footer />
        {/* <FooterBottom /> */}
      </Router>
    </div>
  );
};

export default App;
