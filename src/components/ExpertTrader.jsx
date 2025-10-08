import React from "react";
import traderBg from "../assets/join-us.jpg";

const ExpertTrader = ({
  tag = "Tools and Analytical Resources for Professional Trading",
  heading = "Confident. Informed. Ready.",
  description = "Our carefully designed tools were created with the intention of giving traders a tremendous competitive advantage as they wade through the nuances of the best online forex trading platform out there",
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
              margin: "0px 12px",
              padding: "40px 32px",
            }}
            className="max-w-xl"
          >
            <h2 className="text-[#FABF16] mb-3 text-4xl">{tag}</h2>

            <h3 className="text-white mb-4 leading-tight break-keep">
              {heading}
            </h3>

            <p
              style={{
                textAlign: "justify",
              }}
              className="text-white leading-relaxed mb-4 text-base"
            >
              {description}
            </p>

            <ul className="list-disc list-inside text-white space-y-1 text-sm md:text-base">
              <li>
                Calendar of Economics for tracking important economic
                developments
              </li>
              <li>Up-to-date news from the market and in-depth analysis.</li>
              <li>Notifications and alerts regarding prices</li>
              <li>Sophisticated risk calculation tools</li>
              <li>Technical indicators and charting tools</li>
              <li>Trading alerts as a decision-making guide</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTrader;
