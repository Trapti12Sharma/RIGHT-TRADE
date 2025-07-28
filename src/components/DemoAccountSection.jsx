import React from "react";
import home6 from "../assets/home6.png"; // update path if needed

const DemoAccountSection = () => {
  return (
    <section
      className="relative overflow-hidden md:pb-4 pt-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center"
      style={{ backgroundColor: "#1e2235" }}
    >
      {/* Background circular overlay */}
      <div className="absolute inset-0">
        <div className="w-[800px] h-[800px] bg-[#10162f] opacity-60 rounded-full absolute -left-40 -top-40"></div>
        <div className="w-[600px] h-[600px] bg-[#10162f] opacity-40 rounded-full absolute -right-20 top-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
        {/* Left Image */}
        <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
          <img src={home6} alt="Alerts Image" className="w-80 md:w-[400px]" />
        </div>

        {/* Right Text Content */}
        <div
          className="md:w-1/2 w-full md:pl-16 text-white"
          style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
        >
          {/* Subheading */}
          <h1
            className="text-[#FABF16] font-semibold mb-2"
            style={{ fontSize: "40px" }}
          >
            SIGN UP FOR ALERTS, DEALS, AND LEARNING
          </h1>

          {/* Main Heading */}

          {/* List */}
          <ul className="list-disc pl-5 text-gray-300 mb-6 space-y-2 text-base">
            <li>Weekly ideas for trading</li>
            <li>Updates to the platform</li>
            <li>Invites to live sessions</li>
            <li>Deals just for members</li>
          </ul>

          {/* Paragraph */}
          <p
            className="text-gray-300 mb-6 leading-relaxed"
            style={{ fontSize: "16px" }}
          >
            Get news. Stay ahead. Be smarter when you trade.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-[#FABF16] hover:bg-[#FABF16] text-white px-6 py-3 rounded-full font-semibold">
              Sign Up Now
            </button>
            <button className="bg-white text-[#10162f] px-6 py-3 rounded-full font-semibold">
              Explore RightTrade
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoAccountSection;
