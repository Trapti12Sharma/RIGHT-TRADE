"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";

const slides = [
  {
    image: "/cfds.jpg",
    heading: "Trade Futures CFDs with RightTrade Capital",
    subText:
      "Diversify your trades and hedge against market volatility with CFD futures trading.",
    buttonText: "Trade Now",
  },
  {
    image: "/learn.jpg",
    heading: "Learn. Trade. Earn.",
    subText: "Join RightTrade Capital Academy's Upcoming Seminar",
    buttonText: "Learn to Trade",
  },

  {
    image: "/inner-trader.jpg",
    heading: "Release Your Inner Trader",
    subText:
      "Learn to trade at your own pace with our free educational resources.",
    buttonText: "Learn More",
  },
];

const SeminarBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-[90vh] md:h-[83vh] overflow-hidden font-['Source_Sans_Pro',sans-serif]">
      {/* Background Images */}
      {slides.map((slideItem, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url('${slideItem.image}')`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Animated Polygon Overlay - Responsive */}
      <div className="absolute inset-0 transition-all duration-1000">
        {/* Mobile: Full overlay */}
        <div className="block md:hidden bg-[#18213E]/95 absolute inset-0" />

        {/* Desktop: Polygon overlay */}
        <div
          className="hidden md:block absolute inset-0 bg-[#18213E]/95"
          style={{
            clipPath:
              "polygon(0 0, min(65%, 950px) 0, min(45%, 650px) 100%, 0 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center text-center md:text-left">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-1/2">
            {/* Animated Content */}
            <div
              key={currentSlide}
              className="animate-in slide-in-from-left-8 duration-800 ease-out"
            >
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {slide.heading}
              </h1>

              {/* Subtext */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                {slide.subText}
              </p>

              {/* CTA Button */}
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-pulse delay-1000 hidden lg:block" />
    </div>
  );
};

export default SeminarBanner;
