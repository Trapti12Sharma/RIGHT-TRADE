import React from "react";
import { FaBookOpen } from "react-icons/fa";
import home10 from "../assets/home10.png";
import home11 from "../assets/home11.png";
import home12 from "../assets/home12.png";

const newsData = [
  {
    date: "28 FEB",
    time: "08:28",
    title: "Week Ahead: Can US500 index hold on to post-election gains?",
    desc: "Having just erased all of its year-to-date gains, this benchmark US stock index is now merely 1.4% higher since the November 5th close. Greater risk-off moves in the first week of March 2025 could wipe out all that remains of the US500’s climb since President Trump’s election win.",
    tags: ["S&P 500", "US500", "WEEK AHEAD", "TRUMP", "TRADE WAR", "US JOBS REPORT", "NFP", "FED CHAIR JEROME POWELL"],
    img: home10,
  },
  {
    date: "26 FEB",
    time: "07:25",
    title: "Nvidia earnings preview: Make-or-break moment…",
    desc: "Nvidia’s earnings will be a defining moment for itself and the entire tech space. Given the lofty expectations, the AI giant must deliver exceptional results to keep bulls alive. Here is what you need to know.",
    tags: ["NVIDIA", "EARNINGS", "TECH STOCKS", "NASDAQ 100"],
    img: home11,
  },
  {
    date: "25 FEB",
    time: "14:31",
    title: "Bitcoin tumbles below $90k on risk-off mood",
    desc: "Bitcoin collapsed over 7% on Tuesday, hitting its lowest level since mid-November as a messy cocktail of developments soured investor appetite.",
    tags: ["BITCOIN", "TRUMP", "ETF", "US GDP", "INFLATION", "FEDERAL RESERVE"],
    img: home12,
  },
];

const LatestNewsSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 md:px-20">
      <h2 className="text-center text-[#f2532e] font-semibold mb-2">LATEST NEWS</h2>
      <p className="text-center text-blue-500 mb-8 cursor-pointer hover:underline">All articles</p>

      <div className="space-y-6 max-w-4xl mx-auto">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-sm p-4 md:flex items-center justify-between"
          >
            {/* Image */}
            <div className="md:w-1/4 w-full mb-4 md:mb-0">
              <img src={news.img} alt={news.title} className="rounded-md w-full" />
            </div>

            {/* Content */}
            <div className="md:w-3/4 md:pl-6 w-full">
              <p className="text-xs text-[#f2532e] mb-1">
                {news.date} <span className="text-gray-500 ml-2">{news.time}</span>
              </p>
              <h3 className="font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-2">{news.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {news.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Icon */}
            <div className="md:ml-4 mt-4 md:mt-0 flex-shrink-0">
              <FaBookOpen className="text-white bg-[#f2532e] rounded p-2 w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsSection;
