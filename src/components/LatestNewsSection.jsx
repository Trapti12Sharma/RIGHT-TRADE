import React from "react";
import { FaBookOpen } from "react-icons/fa";
import home10 from "../assets/home10.png";
import home11 from "../assets/home11.png";
import home12 from "../assets/home12.png";

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
    <section className="bg-[#f9f9f9] py-12 px-4 md:px-20">
      <h2 className="text-center text-[#FABF16] font-semibold mb-2 text-xl md:text-2xl">
        You can trade from anywhere
      </h2>
      <p className="text-center text-blue-500 mb-8 cursor-pointer hover:underline">
        Explore our platforms
      </p>

      <div className="space-y-6 max-w-4xl mx-auto">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-sm p-4 md:flex items-center justify-between"
          >
            {/* Image */}
            <div className="md:w-1/4 w-full mb-4 md:mb-0">
              <img
                src={news.img}
                alt={news.title}
                className="rounded-md w-full"
              />
            </div>

            {/* Content */}
            <div className="md:w-3/4 md:pl-6 w-full">
              <h3 className="font-semibold mb-3 text-lg">{news.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {news.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Icon */}
            <div className="md:ml-4 mt-4 md:mt-0 flex-shrink-0">
              <FaBookOpen className="text-white bg-[#FABF16] rounded p-2 w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsSection;
