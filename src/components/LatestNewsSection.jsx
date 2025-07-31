import React from "react";
import { FaBookOpen } from "react-icons/fa";
import home10 from "../assets/mt4.avif";
import home11 from "../assets/web-trading.png";
import home12 from "../assets/mobile-app.png";

const newsData = [
  {
    title: "MetaTrader 4 (MT4)",
    desc: [
      "Charts, indicators, and automated strategies that work in real time",
      "Execution with one click",
      "An interface that works in more than one language",
    ],
    img: home10,
  },
  {
    title: "WebTrader",
    desc: [
      "Log in through your browser; no download is needed.",
      "View of an all-in-one online trading platform",
      "Syncing across devices in real time",
    ],
    img: home11,
  },
  {
    title: "Mobile App (Android and iOS)",
    desc: [
      "Trade while you're on the go",
      "Instant alerts and push notifications",
      "You can control all of your trades from your phone.",
    ],
    img: home12,
  },
];

const LatestNewsSection = () => {
  return (
    <section className="bg-[#1c1f3c] py-16 px-4 md:px-20 text-white">
      <h2 className="text-center text-[#FABF16] font-bold mb-2 text-2xl md:text-3xl">
        You Can Trade From Anywhere
      </h2>
      <p className="text-center text-blue-400 mb-10 cursor-pointer hover:underline text-sm md:text-base">
        Explore our platforms
      </p>

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
