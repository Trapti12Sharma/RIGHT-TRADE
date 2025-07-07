import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import SeminarBanner from "./components/SeminarBanner";
import PartnerSection from "./components/PartnerSection";
import WhyChoose from "./components/WhyChoose";
import ExpertTrader from "./components/ExpertTrader";
import ForexIntro from "./components/ForexIntro";
import WhatIsTrading from "./components/WhatIsTrading";
import DemoAccountSection from "./components/DemoAccountSection";
import DemoStepsSection from "./components/DemoStepsSection";
import ExpertHintsSection from "./components/ExpertHintsSection";



const App = () => {
  return (
    <>
      <Navbar />
      <SeminarBanner />
      <PartnerSection />
       <WhyChoose />
       <ExpertTrader />
       <ForexIntro />
       <WhatIsTrading />
       <DemoAccountSection />
       <DemoStepsSection />
        <ExpertHintsSection />
       <Footer />
       <FooterBottom />
      {/* Page content */}
    </>
  );
};

export default App;
