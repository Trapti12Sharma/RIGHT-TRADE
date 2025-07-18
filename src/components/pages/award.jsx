import React, { useState } from "react";
import {
  FaBalanceScale,
  FaGlobe,
  FaSearch,
  FaUniversity,
} from "react-icons/fa"; // for icons

import fireworks from "../../assets/fireworks.png"; // Make sure this image is imported correctly
import award2025 from "../../assets/award2025.svg"; // replace with actual image

const Award = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  // ✅ FIXED: Define years before return
  const years = [
    "2025",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
  ];

  return (
    <>
      {/* 🌟 Section 1 - Banner with Fireworks Background */}
      <section
        className="relative w-full min-h-[450px] md:min-h-[500px] lg:min-h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${fireworks})`, // Make sure 'fireworks.png' is also in the public folder if you're not using import
          fontFamily: '"Source Sans Pro", sans-serif',
        }}
      >
        {/* 🔺 Red polygon overlay */}
        <div
          className="absolute inset-0 bg-[#f7421e] opacity-95"
          style={{
            clipPath: "polygon(0 0, 35% 0, 50% 50%, 0 200%)",
          }}
        ></div>

        {/* Banner Content */}
        <div className="relative z-20 px-6 sm:px-10 lg:px-20 text-white max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Global Awards
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            We’ve won 45+ awards for education, technology, service and trust.
          </p>
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#e74728] transition duration-300">
            Learn more
          </button>
        </div>
      </section>

      {/* 🌐 Section 2 - Breadcrumb + Description */}
      <section
        className="w-full px-4 sm:px-8 md:px-12 lg:px-32 py-16 text-center text-[#212529]"
        style={{
          fontFamily: '"Source Sans Pro", sans-serif',
          textAlign: "justify",
        }}
      >
        {/* Breadcrumb */}
        <div className="text-sm text-gray-700 mb-8 flex flex-wrap justify-center gap-2">
          <span className="text-[#3B82F6]">RightTrade Capital</span>
          <span className="text-[#e74728]">❯</span>
          <span className="text-[#3B82F6]">About Us</span>
          <span className="text-[#e74728]">❯</span>
          <span className="text-[#212529] font-medium">Global Awards</span>
        </div>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto space-y-4 text-[16px] md:text-[17px] leading-relaxed text-[#212529]">
          <p>
            Over the past 10 years, we've been proud to accept many global
            awards from some of the most prestigious bodies in the business.
          </p>
          <p>
            We do it for you, not the glory - but when you're as committed to
            your customers as we are, the awards keep coming in.
          </p>
          <p>
            Join us today to trade with a broker that prioritises your trading
            experience above anything else.
          </p>
        </div>
      </section>

      <section
        className="bg-[#f9f9f9] py-10 px-4"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <h2 className="text-center text-[#e74728] text-xl font-bold mb-8 uppercase">
          Awards
        </h2>

        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-0 text-sm border-t border-l border-[#e0e0e0] max-w-6xl mx-auto">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-8 py-4 border-r border-b border-[#e0e0e0] transition-all duration-200 ${
                selectedYear === year
                  ? "bg-white border-t-4 border-[#ff4c1b] font-semibold"
                  : "bg-[#f2f2f4] text-[#000]"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Award Content */}
        <div className="mt-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto p-10 text-center">
          {selectedYear === "2025" ? (
            <img
              src={award2025}
              alt="Best Trading Conditions 2025"
              className="mx-auto max-w-[180px] object-contain"
            />
          ) : (
            <p className="text-gray-500">
              No award data available for {selectedYear}
            </p>
          )}
        </div>
      </section>

      {/* Section 4: Why Recognised Worldwide */}
      <section className="bg-[#1a1d30] text-white py-16 px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-12 max-w-4xl mx-auto">
          Here's why we've been recognised worldwide
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <FaBalanceScale className="text-[#ff4c1b] text-4xl mb-4 mx-auto" />
            <h3 className="font-bold mb-2">Unbeatable trading costs</h3>
            <p className="text-sm">
              Take advantage of super-low commission rates and spreads from zero
            </p>
          </div>
          <div>
            <FaGlobe className="text-[#ff4c1b] text-4xl mb-4 mx-auto" />
            <h3 className="font-bold mb-2">Rapid execution speeds</h3>
            <p className="text-sm">
              Trade execution in milliseconds means you'll always get the best
              market price
            </p>
          </div>
          <div>
            <FaSearch className="text-[#ff4c1b] text-4xl mb-4 mx-auto" />
            <h3 className="font-bold mb-2">
              The world's most popular platform
            </h3>
            <p className="text-sm">
              Free to download and available on PC, Mac, mobile and tablet to
              suit you.
            </p>
          </div>
          <div>
            <FaUniversity className="text-[#ff4c1b] text-4xl mb-4 mx-auto" />
            <h3 className="font-bold mb-2">Build your trading skills</h3>
            <p className="text-sm">
              Free educational resources to help you build your trading skills
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Join Us CTA */}
      <section
        className="w-full text-white py-16 px-6 bg-[#ff4c1b] relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,76,27,1) 50%, rgba(255,0,0,0.5) 50%)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="max-w-xl text-left">
            <h4 className="text-md font-semibold uppercase">JOIN US</h4>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Start trading with us today
            </h2>
            <p className="text-sm">
              Already on board? Log back into MyRightTrade Capital to check on
              your accounts or make transactions.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            <button className="bg-white text-[#ff4c1b] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
              Go to MyRightTrade Capital
            </button>
            <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-lime-500 transition">
              Open Account
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
