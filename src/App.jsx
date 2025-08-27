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
import HomePage from "./components/HomePage";
import MarketsCardSection from "./components/MarketsCardSection";

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
import ScrollToTop from "./components/common/ScrollToTop";

// Home Page Grouped as Component
const Home = () => {
  return (
    <>
      <SeminarBanner />
      <PartnerSection />
      <HomePage />
      <WhyChoose />
      <ExpertTrader />
      <MarketsCardSection />
      <ForexIntro />
      <WhatIsTrading />
      <DemoAccountSection />
      <DemoStepsSection />

      <TradingSections />
      <LatestNewsSection />

      <ExpertTraderSection />
    </>
  );
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<WhyRightTrade />} />

            <Route
              path="/trusted-forex-broker"
              element={<TradingStatistics />}
            />
            <Route
              path="/forex-deposit-and-withdrawal"
              element={<DepositsWithdrawals />}
            />
            <Route
              path="/trading-commission-calculator"
              element={<TradingCommissions />}
            />
            <Route
              path="/forex-market-tradingview"
              element={<MarketsOverview />}
            />
            <Route
              path="/forex-contract-specifications"
              element={<ContractSpecifications />}
            />
            <Route path="/forex" element={<Forex />} />
            <Route
              path="/major-currency-pairs-in-forex"
              element={<MajorCurrencyPairs />}
            />
            <Route path="/spot-metals-trading" element={<SpotMetals />} />
            <Route
              path=" /cfd-commodity-trading"
              element={<CFDCommodities />}
            />
            <Route
              path="/best-stock-trading-platform"
              element={<StockTrading />}
            />
            <Route
              path="/best-stocks-for-cfd-trading"
              element={<StockCFDs />}
            />
            <Route path="/cfd-index-trading" element={<CFDOnIndices />} />
            <Route
              path="/best-cryptocurrency-trading-platform"
              element={<CryptoCFDs />}
            />
            <Route
              path="/best-futures-trading-platform"
              element={<Futures />}
            />
            <Route
              path="/best-forex-trading-account"
              element={<AccountsOverview />}
            />
            <Route path="/advantage-account" element={<AdvantageAccount />} />
            <Route
              path="/advantage-stocks-trading-account"
              element={<AdvantageStocksAccount />}
            />
            <Route
              path="/advantage-plus-trading-account"
              element={<AdvantagePlusAccount />}
            />
            <Route
              path="/forex-demo-trading-account"
              element={<DemoAccounts />}
            />

            <Route
              path="/MetaTrader-Trading-Platforms"
              element={<PlatformsOverview />}
            />
            <Route path="/Best-Forex-Trading-Account" element={<MT4 />} />
            <Route path="/mt5" element={<MT5 />} />
            <Route
              path="/advantage-trading-accounts"
              element={<MobileTrading />}
            />

            <Route
              path="/leverage-margin-requirements"
              element={<LeverageMargin />}
            />
            <Route path="/dividends" element={<Dividends />} />
            <Route path="/contact-us" element={<ContactUs />} />

            <Route path="/Trading-Tools" element={<ToolsOverview />} />
            <Route path="/Pro-Trading-Tools" element={<ProTradingTools />} />
            <Route path="/Trading-Signals" element={<TradingSignals />} />
            <Route
              path="/Forex-Profit-Calculator"
              element={<ProfitCalculator />}
            />
            <Route
              path="/Forex-Margin-Calculator"
              element={<MarginCalculator />}
            />
          </Routes>
        </div>
        <Footer />
        {/* <FooterBottom /> */}
      </Router>
    </div>
  );
};

export default App;
