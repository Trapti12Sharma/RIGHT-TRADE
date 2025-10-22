"use client";

import { Play } from "lucide-react";

const SeminarBanner = () => {
  const slide = {
    image: "/cfds.jpg",
    heading: "Trade with Confidence on the Best Forex Trading Platform.",
    subText:
      "Experience seamless global markets access, powerful tools, and secure execution — all on a trusted forex trading platform built for serious traders.",
    buttonText: "Open Live Account",
  };

  return (
    <div className="relative w-full h-[90vh] md:h-[83vh] overflow-hidden font-['Source_Sans_Pro',sans-serif]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center text-center md:text-left">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Content */}
            <div className="animate-in slide-in-from-left-8 duration-800 ease-out">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Trade with Confidence on the
                <br /> Best Forex Trading Platform.
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                {slide.subText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button className="group relative overflow-hidden bg-[#FBBD15] hover:bg-[#FBBD15]/90 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#FBBD15]/50">
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    {slide.buttonText}
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements (optional) */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-pulse delay-1000 hidden lg:block" />
    </div>
  );
};

export default SeminarBanner;
