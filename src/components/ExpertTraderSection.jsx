import React from "react";
import { FaGem } from "react-icons/fa";

export default function ExpertTraderSection() {
  return (
    <div className="bg-[#1f2239] relative py-20">
      {/* Arrow shape at top center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
        <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 20,20 40,0" fill="#1f2239" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="flex items-center gap-4">
          <div className="border-2 border-[#ff4c29] rounded-full p-3 text-[#ff4c29]">
            <FaGem size={32} />
          </div>
          <div>
            <h2 className="text-white text-2xl font-semibold">Are you an expert trader?</h2>
            <p className="text-white text-sm mt-1">Start trading with our Advantage account.</p>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-white text-sm hover:underline flex items-center">
            Compare Accounts
            <span className="ml-1">&gt;</span>
          </a>
          <button className="bg-[#ff4c29] text-white font-bold text-sm py-2 px-5 rounded-full">
            Open Advantage Account
          </button>
        </div>
      </div>
    </div>
  );
}
