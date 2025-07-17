import React from "react";

const ExpertTrader = ({
  tag = "EXPERT TRADER",
  heading = "Already trading?",
  description = "Sharpen your edge with the latest market updates, expert analysis, real-time prices, and innovative trading tools.",
  buttonText = "Expert Trader",
  backgroundImage = "", // optional background image
}) => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : {}
      }
    >
      <div className="bg-[#121733]/80 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left Content */}
          <div
            className="max-w-xl"
            style={{
              fontFamily: '"Source Sans Pro", sans-serif',
              fontSize: "16px",
              margin: "0px 12px",
              padding: "80px 32px",
            }}
          >
            <p
              className="text-[#ff4521] mb-3"
              style={{ fontSize: "25px" }}
            >
              {tag}
            </p>
            <h2
              className="text-[#ffffff] mb-4"
              style={{ fontSize: "40px", margin: "9px 0px" }}
            >
              {heading}
            </h2>
            <p
              className="text-[#ffffff] leading-relaxed"
              style={{
                fontSize: "16px",
                margin: "9px 0px 0px",
              }}
            >
              {description}
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 md:mt-0">
            <button
              className="bg-[#ff4521] text-[#ffffff] px-8 py-3 rounded-full hover:bg-[#e44418] transition"
              style={{ fontSize: "16px", margin: "10px 34px" }}
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
