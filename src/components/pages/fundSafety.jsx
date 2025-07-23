// components/pages/FundSafety.jsx

import React from "react";
import fund1 from "../../assets/fund1.png"; // 🔒 Banner
import fund2 from "../../assets/fund2.png"; // 💼 Insurance
import fund3 from "../../assets/fund3.png"; // ✅ Regulation
import fund4 from "../../assets/fund4.png"; // ✅ Regulation
import fund5 from "../../assets/fund5.png";
import fund6 from "../../assets/fund6.svg"; // ✅ Regulation
import fund7 from "../../assets/fund7.svg"; // ✅ Regulation
import fund8 from "../../assets/fund8.svg";
import fund9 from "../../assets/fund9.svg";
import fund10 from "../../assets/fund10.svg"; // ✅ Award image
import fund11 from "../../assets/fund11.svg"; // ✅ Award image
import fund12 from "../../assets/fund12.svg"; // ✅ Award image

import ImageTextSection from "../common/ImageTextSection";
import TextImageSection from "../common/TextImageSection";
import ImageLeftTextRightSection from "../common/ImageLeftTextRightSection";
import TextLeftImageRightSection from "../common/TextLeftImageRightSection";
import TrustReasonsSection from "../common/TrustReasonsSection";
import TrustCTASection from "../common/TrustCTASection";
import FaqSection from "../common/FaqSection2";
import AwardsSection from "../common/AwardsSection";

const FundSafety = () => {
  const faqItems = [
    {
      question: "What segregation of funds?",
      answer:
        "This means that your money is kept entirely separate from the company's, and won't be used for its own operations or investment purposes.",
    },
    {
      question: "How does segregation of funds work?",
      answer:
        "When you deposit with us, we'll keep your money in top-tier banks - completely separate from our own funds, offering you both protection and peace of mind. You don't need to do anything here - we'll take care of it for you.",
    },
    {
      question: "What are benefits of segregation funds?",
      answer:
        "The main benefits are (and we know we're repeating ourselves a bit here) that as your funds are kept separately from our own, you can relax knowing you'll be unaffected by any investment or operational choices we make.",
    },
    {
      question:
        "What's the difference between mutual funds and segregation funds?",
      answer:
        "Segregated funds are entirely separate from the company's. Mutual funds allow investors to pool their money all together, and that pool is managed by the firm or company in question.",
    },
    {
      question: "Can you withdraw from segregation funds?",
      answer:
        "Yes. With RightTrade Capital, you can withdraw your funds at any time you wish. Remember to contact our Customer Support team if you need any help doing so.",
    },
  ];

  const awardsItems = [
    {
      imageSrc: fund9,
    },
    {
      imageSrc: fund10,
    },
    {
      imageSrc: fund11,
    },
    {
      imageSrc: fund12,
    },
  ];

  const reasonsData = [
    {
      icon: fund6,
      title: "10 years strong",
      description: "Over a decade of trust, value and happy customers.",
    },
    {
      icon: fund7,
      title: "Over 1 million clients worldwide",
      description: "Trusted by clients in over 150 countries.",
    },
    {
      icon: fund8,
      title: "Rapid execution speeds",
      description:
        "Trade execution in milliseconds means you'll always get the best market price.",
    },
  ];

  return (
    <>
      {/*  Section 1 - Secure Vault Banner */}
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
            clipPath: "polygon(0 0, 35% 0, 50% 50%, 0 200%)",
          }}
        ></div>

        {/* Banner Content */}
        <div className="relative z-20 px-6 sm:px-10 lg:px-24 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            How we protect your money
          </h2>
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
          <span className="text-blue-500">RightTrade Capital</span>
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
        paragraph="In the extremely unlikely event of RightTrade Capital’s insolvency, your funds will be insured up to $1 million, in excess of $10,000. This insurance covers both your available balance and open positions."
        linkText="View certificate"
        linkHref="#"
        listItems={[
          "The claim of an RightTrade Capital policyholder shall not receive a confirmation from the Insolvency Practitioner as described in the Policy.",
          "To qualify as a Claimant, you must meet the requirements of an Eligible Claimant as defined in the Policy.",
          "You may not claim from the Insolvency Practitioner even if entitled at the Date of the Insolvency event of RightTrade Capital and if your Insurance Compensation Claim Item is greater than 2 times the size of the Insured Limit or has other clauses which might apply.",
          "The losses must be a result of a financial mismanagement, accident, or fraud by an employee, accountant, manager, administrator, auditor, board member, or RightTrade Capital or any of its employees or agents at any time or location, unless the trader made the trades in coordination with RightTrade Capital.",
          "The terms and conditions are subject to revision and are not final.",
          "A payment is only valid after RightTrade Capital’s full insolvency filing is dependent upon the cooperation of RightTrade Capital and its compliance with the obligations under the Policy.",
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

      {/* Section 5 */}
      <ImageLeftTextRightSection
        imgSrc={fund4}
        title="Your funds are separate and secure"
        paragraph="We keep your funds entirely separate from our own operational funds in various top-tier banking institutions. We won't ever use any of your money for either our own use or any other investment, ensuring your protection at all times."
      />

      {/* Section 6: Cutting-edge encryption */}
      <TextLeftImageRightSection
        imgSrc={fund5}
        title="Cutting-edge encryption"
        paragraph="We use the SSL (Secure Sockets Layer) network security protocol to guarantee a secure connection in all communications with you, protect your safety during transactions with us and keep all your information private."
        listItems={[
          "User identification and server authentication policies make sure the data is sent to the right customer terminal and server.",
          "Data transmission is encrypted to prevent data theft and unauthorized access by third parties.",
          "Keeps data integrity and ensures that all data remains unchanged during transmission.",
        ]}
      />

      {/* Section 7: Why Traders Trust RightTrade Capital */}
      <TrustReasonsSection reasons={reasonsData} />

      {/* Section 8: CTA */}
      <TrustCTASection
        title="Trade with a broker you can trust"
        subtitle="Licensed, regulated and dedicated to your safety."
        buttonText="Start trading"
        buttonLink="/start-trading"
      />

      {/* Section 9: FAQ Section */}
      <FaqSection faqs={faqItems} />

      {/* Section 10: Awards Section */}
      <AwardsSection awards={awardsItems} />
    </>
  );
};

export default FundSafety;
