import React from 'react';
import phone from '../assets/phone.png';
import laptop from '../assets/laptop.png';

const TradingSections = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Section 1: Blue Background */}
    <section className="relative bg-[#1c1f3c] text-white overflow-hidden -mb-[1px]">
  {/* White curve */}
  <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none leading-none">
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-auto block"
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
    >
      <path
        fill="#ffffff"
        d="M0,224L80,202.7C160,181,320,139,480,144C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128V320H0Z"
      />
    </svg>
  </div>



        {/* Content grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 items-start gap-6">
          {/* Text side */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-3 leading-snug">
              Trade on the go, straight from your phone
            </h2>
            <p className="text-base mb-2">
              Never miss another trading opportunity again.
            </p>
            <p className="text-sm text-gray-300 mb-4 max-w-md">
              Get the RightTrade Capital Trader app for commission-free trading and spreads as low as zero on major FX pairs and gold.
              <br /><br />
              Everything you need. One app.
            </p>
          </div>

          {/* Phone image */}
          <div className="flex justify-center md:justify-end lg:pr-64 md:pr-16">
            <img
              src={phone}
              alt="Mobile Trading"
              className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] object-contain"
            />
          </div>
        </div>
      </section>

    {/* App Store button in white area */}
<div className="bg-white -mt-[1px]">
  <div className="max-w-7xl mx-32  flex">
   <a
  href="#"
  className="flex items-center space-x-2 bg-[#ff4e1e] hover:bg-[#e9441a] text-white px-6 py-3 rounded-full text-sm font-medium shadow-md transition"
>
  {/* Apple Icon */}
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 384 512">
    <path d="M318.7 268.6c-.3-37.4 16.6-65.8 51.1-86.8-19.2-27.9-48.4-43.4-88.5-46.6-37.2-3-77.3 22.2-91.3 22.2-14.4 0-48.3-21.6-74.9-21.6C53.7 136 0 186.4 0 272.2c0 30.8 5.6 62.7 17 95.7 15.2 43.8 70.5 120.5 129.1 118.3 30.6-1.2 52.9-21.7 74.5-21.7 21.2 0 41.5 21.7 70.4 21.7 57.7-1.3 106.1-73.5 121-117.6-75.9-35.9-70.5-105.3-73.3-120zm-80.2-241.4c13.5-16.5 23.2-39.5 20.6-62.5-21.7.8-47.9 14.4-63.1 30.9-14.2 15.6-24.8 37.4-21.8 59.4 23.2 1.8 45.5-11.6 64.3-27.8z" />
  </svg>

  {/* Text */}
  <div className="text-left leading-tight">
    <div className="text-xs">Available on the</div>
    <div className="text-base font-bold">App Store</div>
  </div>
</a>

  </div>
</div>


      {/* Section 2: Trading Platforms */}
      <section className="bg-white text-center pt-12 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Trading platforms</h3>
          <p className="text-sm text-gray-500">
            MetaTrader is the universally popular online trading platform that lets you monitor the markets and trade in real time. When you trade with us, you trade on one of these two powerful platforms, beloved by traders of all experience levels around the world.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={laptop}
            alt="Trading Platforms"
            className="w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] max-w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default TradingSections;
