import React from "react";
import traderBg from "../assets/join-us.jpg";

const ExpertTrader = ({
  tag = "Join Us to Learn and Grow",
  heading = "Confident. Informed. Ready.",
  description = "We want to build a trading community that is confident and well-informed. That's why our online trading platform has free built-in learning tools.",
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
              fontFamily: '"Source Sans Pro"',
              fontSize: "16px",
              margin: "0px 12px",
              padding: "40px 32px",
            }}
            className="max-w-xl"
          >
            <h1
              style={{
                fontFamily: '"Source Sans Pro"',
                fontSize: "40px",
              }}
              className="text-[#FABF16] mb-3"
            >
              {tag}
            </h1>

            <h2
              style={{
                fontFamily: '"Source Sans Pro"',
                fontSize: "25px",
              }}
              className="text-white mb-4 leading-tight break-keep"
            >
              {heading}
            </h2>

            <p
              style={{
                fontFamily: '"Source Sans Pro"',
                fontSize: "16px",
                textAlign: "justify",
              }}
              className="text-white leading-relaxed mb-4"
            >
              {description}
            </p>

            <ul className="list-disc list-inside text-white space-y-1 text-sm md:text-base">
              <li>Guides for structured trading</li>
              <li>Video lessons with examples from the market</li>
              <li>Webinars and sessions that are live</li>
              <li>Tips for reading charts and managing risk</li>
              <li>The best forex trading platform to improve your skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTrader;
