import React from "react";
import { Link } from "react-router-dom";
import { FaGem } from "react-icons/fa";

export default function ExpertTraderSection() {
  return (
    <div className="bg-[#1f2239] relative py-20 px-6">
      {/* Arrow shape at top center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2 gap-4">
            <div className="flex items-center gap-4">
              <div className="border-2 border-[#FABF16] rounded-full p-3 text-[#FABF16]">
                <FaGem size={32} />
              </div>
              <div>
                <h2 className="text-white text-4xl font-semibold">
                  Secure Transactions for Deposit and Withdrawal of Amounts
                </h2>
              </div>
            </div>

            <p className="text-white text-base leading-relaxed">
              RightTrade Capital offers an array of deposit and withdrawal
              functions that have been tailored to be not just speedy but safe
              and clear for everyone. Traders can use multiple payment systems,
              which have the added advantage of no extra fees so that trading
              remains seamless for everyone. In addition, each and every
              transaction performed on the site is protected within a regulated
              broker environment that ensures transparency and control for each
              party that is concerned.
            </p>

            {/* <ul className="text-white text-base space-y-2 pl-5 list-disc mt-2">
              <li>Customer support in many languages 24/5</li>
              <li>Several ways to pay around the world</li>
              <li>Information about local and global markets</li>
              <li>People, not bots, help</li>
            </ul> */}
          </div>

          {/* Right Content - Buttons */}
          <div className="flex flex-col items-center md:items-end md:w-1/2 gap-4">
            <Link to="/advantage-account">
              <button className="bg-[#FABF16] text-[#1f2239] font-bold text-sm py-3 px-6 rounded-full hover:opacity-90 transition duration-300">
                Open Advantage Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
