import React from "react";
import traderBg from "../assets/experttrader.jpg"; // ✅ Ensure this path matches your project structure

const ExpertTrader = ({
  tag = "EXPERT TRADER",
  heading = "Already trading?",
  description = "Sharpen your edge with the latest market updates, expert analysis, real-time prices, and innovative trading tools.",
  buttonText = "Expert Trader",
  onClick,
}) => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${traderBg})`,
      }}
    >
      <div className="bg-[#121733]/80 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left Content */}
          <div
            style={{
              fontFamily: '"Source Sans Pro", sans-serif',
              fontSize: "16px",
              margin: "0px 12px",
              padding: "40px 32px", // optional internal padding
            }}
            className="max-w-xl"
          >
            <p
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "25px",
              }}
              className="text-[#ff4521] mb-3"
            >
              {tag}
            </p>
            <h2
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "40px",
                margin: "9px 0px",
              }}
              className="text-white mb-4"
            >
              {heading}
            </h2>
            <p
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "16px",
                margin: "9px 0px 0px",
              }}
              className="text-white leading-relaxed"
            >
              {description}
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 md:mt-0">
            <button
              style={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "16px",
                margin: "10px 34px",
              }}
              className="bg-[#ff4521] text-white px-8 py-3 rounded-full hover:bg-[#e44418] transition"
              onClick={onClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTrader;
