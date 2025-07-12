// components/pages/FundSafety.jsx

import React from "react";
import fund1 from "../../assets/fund1.png"; // 🔒 Banner
import fund2 from "../../assets/fund2.png"; // 💼 Insurance
import fund3 from "../../assets/fund3.png"; // ✅ Regulation

import ImageTextSection from "../common/ImageTextSection";
import TextImageSection from "../common/TextImageSection";

const FundSafety = () => {
  return (
    <>
      {/* 🔒 Section 1 - Secure Vault Banner */}
      <section
        className="relative w-full min-h-[480px] bg-cover bg-center flex items-center text-white"
        style={{
          backgroundImage: `url(${fund1})`,
          fontFamily: '"Source Sans Pro", sans-serif',
        }}
      >
        {/* 🔺 Left Overlay */}
        <div
          className="absolute inset-0 bg-[#f7421e] opacity-95"
          style={{
            clipPath: "polygon(0 0, 50% 0, 25% 100%, 0% 100%)",
          }}
        ></div>

        {/* Banner Content */}
        <div className="relative z-20 px-6 sm:px-10 lg:px-24 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">How we protect your money</h2>
          <p className="text-lg mb-6">Trade with complete peace of mind.</p>
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#e74728] transition duration-300">
            Learn more
          </button>
          <p className="mt-4 text-sm text-white opacity-80">Trading is risky</p>
        </div>
      </section>

      {/* 🔗 Section 2 - Breadcrumb */}
      <div
        className="bg-white py-4 px-6 sm:px-10 lg:px-24 text-sm"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <nav className="text-gray-500 flex flex-wrap gap-2 items-center">
          <span className="text-blue-500">FXTM</span>
          <span className="text-[#e74728]">❯</span>
          <span className="text-blue-500">About Us</span>
          <span className="text-[#e74728]">❯</span>
          <span className="text-black font-medium">Fund Safety</span>
        </nav>
      </div>

      {/* 🧾 Section 3 - Insurance Info */}
      <ImageTextSection
        imgSrc={fund2}
        title="Your funds are insured"
        paragraph="In the extremely unlikely event of FXTM’s insolvency, your funds will be insured up to $1 million, in excess of $10,000. This insurance covers both your available balance and open positions."
        linkText="View certificate"
        linkHref="#"
        listItems={[
          "The claim of an FXTM policyholder shall not receive a confirmation from the Insolvency Practitioner as described in the Policy.",
          "To qualify as a Claimant, you must meet the requirements of an Eligible Claimant as defined in the Policy.",
          "You may not claim from the Insolvency Practitioner even if entitled at the Date of the Insolvency event of FXTM and if your Insurance Compensation Claim Item is greater than 2 times the size of the Insured Limit or has other clauses which might apply.",
          "The losses must be a result of a financial mismanagement, accident, or fraud by an employee, accountant, manager, administrator, auditor, board member, or FXTM or any of its employees or agents at any time or location, unless the trader made the trades in coordination with FXTM.",
          "The terms and conditions are subject to revision and are not final.",
          "A payment is only valid after FXTM’s full insolvency filing is dependent upon the cooperation of FXTM and its compliance with the obligations under the Policy.",
          "Although You are an Insolvency, You do not have a right to bring a claim against the Insurer under the policy.",
        ]}
      />

      {/* 📄 Section 4 - Regulation Info */}
            <TextImageSection
        imgSrc={fund3}
        title="We're regulated"
        paragraph="There’s no need to look for our licence. We’re regulated in various jurisdictions, including by the Financial Services Commission, Mauritius under licence C113012295 and Capital Markets Authority of Kenya under licence number 135."
        reverse={true}
        />
    </>
  );
};

export default FundSafety;
