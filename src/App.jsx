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
import WhyFxtm from "./components/pages/whyfxtmn";
import Award from "./components/pages/award";
import FundSafety from "./components/pages/fundSafety";
import TradingStatistics from "./components/pages/tradingStatistics";




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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhyFxtm" element={<WhyFxtm />} />
        <Route path="/awards" element={<Award />} />
        <Route path="/fundsafety" element={<FundSafety />} />
          <Route path="/tradingstatistics" element={<TradingStatistics />} />
      </Routes>
      <Footer />
      {/* <FooterBottom /> */}
    </Router>
  );
};

export default App;
