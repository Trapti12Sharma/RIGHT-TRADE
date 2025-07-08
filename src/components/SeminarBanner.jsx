import React, { useState, useEffect } from "react";

// Images (place your image files in /public and update names accordingly)
const slides = [
  {
    image: "/home.png", // Slide 1
    heading: "Learn. Trade. Earn.",
    subText: "Join FXTM Academy's Upcoming Seminar",
    details: [
      "When: 10am, 18th January 2025",
      "Where: 5 Allen Avenue, Ikeja, Lagos",
    ],
    buttonText: "Learn to Trade",
    note: "Seats are limited – act fast to avoid disappointment",
  },
  {
    image: "/home1.png", // Slide 2
    heading: "Trade Futures CFDs with FXTM",
    subText: "Diversify your trades and hedge against market volatility with CFD futures trading.",
    buttonText: "Trade now",
    note: "Trading is risky",
  },
  {
    image: "/home2.png", // Slide 3
    heading: "Release your inner trader",
    subText: "Learn to trade at your own pace with our free educational resources.",
    buttonText: "Learn more",
    note: "Trading is risky",
  },
];

const SeminarBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div
      className="relative w-full h-screen flex items-center justify-start bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url('${slide.image}')` ,  fontFamily: '"Source Sans Pro", sans-serif', }}
    >
            {/* Orange Polygon Overlay */}
            <div
        className="absolute inset-0 bg-[#f7421e] opacity-95"
        style={{
            clipPath: "polygon(0 0, 55% 0, 70% 70%, 0 100%)",
        }}
        ></div>


      {/* Text Content */}
      <div className="relative z-10 text-white px-10 max-w-xl">
        <h2  className="text-3xl font-bold mb-4" style={{ 
  fontSize: '50px'
    }}>{slide.heading}</h2>
        <p className="mb-2"  style={{ 
  fontSize: '25px'
    }}>{slide.subText}</p>
        {slide.details?.map((line, i) => (
          <p  style={{ 
  fontSize: '25px'
    }} key={i} className="mb-2 font-semibold">{line}</p>
        ))}
        <p  style={{ 
  fontSize: '25px'
    }} className="mb-4">{!slide.details ? null : ""}</p>
        <button className="bg-lime-500 text-black font-semibold px-4 py-2 rounded-full hover:bg-lime-600 transition">
          {slide.buttonText}
        </button>
        <p  className="text-xs italic mt-2">{slide.note}</p>
      </div>
    </div>
  );
};

export default SeminarBanner;
