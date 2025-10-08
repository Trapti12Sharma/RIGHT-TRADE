import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import home10 from "../assets/mt4.avif";
import home11 from "../assets/web-trading.png";
import home12 from "../assets/mobile-app.png";

const newsData = [
  {
    title: "MetaTrader 4 (MT4)",
    desc: [
      "The industry’s most popular forex trading platform featuring live charts, indicators, automated strategies, one-click execution, and multi-language support.",
    ],
    img: home10,
  },
  {
    title: "WebTrader",
    desc: [
      "Engage in trading operations right from within your web browser without the need for any downloads or other installations of software. Rejoice at having access to harmonized information and having total functionality of trading at your fingertips.",
    ],
    img: home11,
  },
  {
    title: "MOBILE APPS",
    desc: [
      "Trade at any time that you wish using mobile apps accessible on both iOS and Android devices. Be issued instant notifications and have full control over your trades at all points, as you move around and attend to your daily schedule.",
    ],
    img: home12,
  },
];

const LatestNewsSection = () => {
  return (
    <section className="bg-[#1c1f3c] py-16 px-4 md:px-20 text-white">
      <h2 className="text-center text-[#FABF16] font-bold mb-2 text-2xl md:text-4xl">
        Strong Forex Trading Platforms
      </h2>
      <Link
        to="/platforms-overview"
        className="text-center text-blue-400 mb-10 cursor-pointer hover:underline text-sm md:text-[24px]"
      ></Link>

      <div className="space-y-8 max-w-5xl mx-auto">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-xl shadow-md p-6 md:flex items-center gap-6 transition-transform hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="md:w-[140px] w-full flex-shrink-0 mb-4 md:mb-0">
              <img
                src={news.img}
                alt={news.title}
                className="rounded-md w-full h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-xl">{news.title}</h3>
                <FaBookOpen className="text-white bg-[#FABF16] rounded p-2 w-8 h-8" />
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                {news.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsSection;
