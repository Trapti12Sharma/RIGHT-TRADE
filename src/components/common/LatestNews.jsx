import React from "react";
import { FaBookOpen } from "react-icons/fa";

/**
 * LatestNews (Reusable)
 *
 * Props:
 * - heading: string (default: "LATEST NEWS")
 * - articles: Array<{
 *     date: string;
 *     time: string;
 *     title: string;
 *     desc: string;
 *     tags: string[];
 *     img: string;
 *   }>
 * - accentColor: string (default: "#FABF16")
 * - allText: string (default: "All articles")
 * - onAllClick: () => void  (optional)
 * - className: string (optional extra classes for the section)
 */
const LatestNews = ({
  heading = "How to Use RightTrade Capital's MarketView",
  articles = [],
  accentColor = "#FABF16",
  allText = "All articles",
  onAllClick,
  className = "",
}) => {
  return (
    <section
      className={`bg-[#f9f9f9] py-12 px-4 md:px-20 ${className}`}
      style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
    >
      {/* Heading */}
      <h2
        className="text-center text-4xl font-semibold mb-2"
        style={{ color: accentColor }}
      >
        {heading}
      </h2>

      {/* All articles link/button */}
      <button
        type="button"
        onClick={onAllClick}
        className="block mx-auto text-blue-500 mb-8 hover:underline text-sm md:text-base"
      >
        {allText}
      </button>

      {/* News list */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {articles.map((news, index) => (
          <article
            key={index}
            className="bg-white rounded-md shadow-sm p-4 md:flex items-center justify-between"
          >
            {/* Image */}
            <div className="md:w-1/4 w-full mb-4 md:mb-0">
              <img
                src={news.img}
                alt={news.title}
                className="rounded-md w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-3/4 md:pl-6 w-full">
              <p className="text-xs mb-1" style={{ color: accentColor }}>
                {news.date}
                <span className="text-gray-500 ml-2">{news.time}</span>
              </p>

              <h3 className="font-semibold mb-2">{news.title}</h3>

              {news.desc && (
                <p className="text-gray-600 mb-2 text-sm md:text-base">
                  {news.desc}
                </p>
              )}

              {/* Tags */}
              {news.tags?.length > 0 && (
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
              )}
            </div>

            {/* Icon */}
            <div className="md:ml-4 mt-4 md:mt-0 flex-shrink-0">
              <FaBookOpen
                className="text-white rounded p-2 w-8 h-8"
                style={{ backgroundColor: accentColor }}
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default React.memo(LatestNews);
