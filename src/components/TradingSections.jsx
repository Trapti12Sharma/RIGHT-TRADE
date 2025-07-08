import React from 'react';
import phone from '../assets/phone.png'; // Use your actual path
import laptop from '../assets/laptop.png'; // Use your actual path

const TradingSections = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Section 1: Phone Curve */}
      <section className="relative bg-[#1e213e] text-white  pb-40 overflow-hidden ">
  {/* White curved bottom */}
  <div className="absolute bottom-0 left-0 w-full z-0">
    <svg
      viewBox="0 0 500 320"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <path
  fill="#ffffff"
  d="M0,224L80,202.7C160,181,320,139,480,144C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128V400H0Z"
/>

    </svg>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
    <div className="text-left">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
        Trade on the go, straight from your phone
      </h2>
      <p className="text-lg mb-4 font-medium">
        Never miss another trading opportunity again.
      </p>
      <p className="text-sm text-gray-300 mb-6">
        Get the FXTM Trader app for commission-free trading and spreads as low as zero on major FX pairs and gold.
        <br /><br />
        Everything you need. One app.
      </p>

    
    </div>

    {/* Phone Image */}
    <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end z-20">
  <img
    src={phone}
    alt="Mobile Trading"
    className="w-[170px] lg:w-[280px] xl:w-[320px] translate-y-20 h-[500px]"
  />
</div>

  </div>
</section>


      {/* Section 2: Trading Platforms */}
      <section className="bg-white text-center pt-16 pb-32 -mt-[1px]">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Trading platforms</h3>
          <p className="text-sm text-gray-500">
            MetaTrader is the universally popular online trading platform that lets you monitor the markets and trade in real time. When you trade with us, you trade on one of these two powerful platforms, beloved by traders of all experience levels around the world.
          </p>
        </div>

        {/* Laptop Image */}
        <div className="mt-12 flex justify-center relative">
          <img
            src={laptop}
            alt="Trading Platforms"
            className="w-[700px] max-w-full z-10"
          />
        </div>
      </section>
    </div>
  );
};

export default TradingSections;
