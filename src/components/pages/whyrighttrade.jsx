// src/pages/WhyRightTrade.jsx
import React from "react";
import StatsSection from "../../components/common/StatsSection";
import fxtm1 from "../../assets/Compare.jpg";
import fxtm2 from "../../assets/fxtm2.svg";
import fxtm3 from "../../assets/fxtm3.svg";
import fxtm4 from "../../assets/fxtm4.svg";
import fxtm5 from "../../assets/fxtm5.svg";
import fxtm9 from "../../assets/fxtm9.png";
import { Link } from "react-router-dom";
import email from "../../assets/email.png";
import doc from "../../assets/doc.png";
import message from "../../assets/message.png";
import whatWeDoImage from "../../assets/WhatWeDo.png";
import educationImage from "../../assets/account1.png";

const WhyRightTrade = () => {
  return (
    <>
      <StatsSection
        title="Compare our trading accounts to find one which suits you"
        subtitle="Tailored accounts for you"
        buttonText="Learn more"
        image={fxtm1}
      />

      {/* Why FXTM Section */}
      <section
        className="py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-24 xl:px-36 bg-white text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        {/* Title */}
        <h1 className="text-[40px] font-medium text-center mb-3">
          Why RightTrade Capital
        </h1>

        {/* Content */}
        <p
          className="text-[16px] text-center leading-relaxed max-w-4xl mx-auto text-[#1c1c1c]"
          style={{ lineHeight: "1.8" }}
        >
          RightTrade Capital is a regulated and trusted forex broker around the
          world that wants to make it easy for traders to access financial
          markets. We have years of experience and are in more than 100
          countries. Our online trading platform is safe, clear, and focused on
          performance. To help traders succeed, we offer world-class technology,
          powerful trading tools, and support in multiple languages 24 hours a
          day, five days a week. We think that anyone, whether they are an
          individual trader or a business, should be able to trade. We build our
          infrastructure to be fast, safe, and open, and we always act with
          honesty.
        </p>
      </section>

      {/* Watch Our Film Section */}
      <section
        className="bg-[#2a2d45] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20 text-white"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
          {/* Image Block */}
          <div className="w-full order-2 lg:order-1">
            <img
              src={whatWeDoImage}
              alt="What We Do"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text Block */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-[32px] font-semibold mb-4 leading-snug">
              What We Do
            </h1>
            <h2 className="text-[20px] font-normal mb-4 leading-relaxed text-gray-200">
              To create an online trading space that is safe, cutting-edge, and
              focused on the needs of users, where traders can grow, succeed,
              and become financially free.
            </h2>
            <ul className="list-disc text-[16px] leading-relaxed pl-5 text-left mt-4 space-y-2 text-gray-100">
              <li>Giving people the best trading tools and education</li>
              <li>Providing clear and low-cost trading conditions</li>
              <li>Making sure the funds are safe and following the rules</li>
              <li>
                Helping clients with support from real people who are quick to
                respond
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* RightTrade Capital in Numbers Section */}
      <section
        className="bg-white px-0 sm:px-0 lg:px-0 text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro", sans-serif', lineHeight: 1.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full">
          {/* Text Block */}
          <div className="text-left max-w-[600px] w-full flex flex-col justify-start pt-8 px-4 sm:px-6 lg:px-20">
            <h1 className="text-[36px] font-semibold mb-4 leading-tight">
              Learning and Understanding
            </h1>
            <h2 className="text-[22px] font-medium mb-4 leading-snug">
              We think that education is the most important part of trading.
              Here are some things our platform has:
            </h2>
            <ul className="list-disc pl-5 text-[16px] space-y-2 mb-4">
              <li>Guides and tutorials for trading</li>
              <li>Lessons in video for the market</li>
              <li>Webinars with experts in real time</li>
              <li>Daily reviews and calendars of economic events</li>
            </ul>
            <p className="text-[16px]">
              We give traders the information they need to make better choices.
            </p>
          </div>

          {/* Image Block */}
          <div className="w-full h-full">
            <img
              src={educationImage}
              alt="Education Illustration"
              className="w-full h-full object-cover m-0 p-0"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white font-[Source Sans Pro] py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-[#1c1f3c]">
          {/* Heading */}
          <h1 className="text-[40px] font-light mb-4 leading-tight text-center">
            What We Have
          </h1>

          {/* Subheading */}
          <h2 className="text-[25px] font-light mb-6 text-center">
            We give you access to a lot of different trading tools and
            instruments, all in one advanced trading environment:
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                1. Trading in Forex
              </h3>
              <p className="text-[16px] text-justify">
                You can trade more than 60 currency pairs, including major,
                minor, and exotic pairs, with spreads that start at 0.0 pips.
                Our platform makes sure that trades happen in real time and with
                as little slippage as possible.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">2. CFDs on Indexes</h3>
              <p className="text-[16px] text-justify">
                Guess how the prices of global indexes like the S&P 500, NASDAQ,
                FTSE 100, and DAX will change. Enjoy quick execution and
                flexible leverage.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">3. Goods</h3>
              <p className="text-[16px] text-justify">
                You can trade gold, silver, crude oil, and natural gas.
                Diversify your trading strategy and protect your portfolio from
                inflation.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                4. CFDs for Cryptocurrencies
              </h3>
              <p className="text-[16px] text-justify">
                You can get into the crypto market without a wallet. You can
                trade Bitcoin, Ethereum, Litecoin, and other major
                cryptocurrencies through CFDs 24 hours a day, five days a week.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">5. CFDs on Stocks</h3>
              <p className="text-[16px] text-justify">
                Get to know some of the biggest companies in the world, like
                Apple, Tesla, Amazon, and Microsoft. Use fractional share
                trading and leverage to take advantage of price changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1c1f3c] text-white font-[Source_Sans_Pro] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[40px] font-semibold mb-4 text-center leading-tight">
            Types of Accounts
          </h1>
          <h2 className="text-[25px] font-normal mb-8 text-center">
            We have different types of accounts to meet the needs of different
            traders:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Standard Account */}
            <div className="bg-white text-[#1c1f3c] rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Standard Account</h3>
              <ul className="list-disc list-inside space-y-1 text-[16px] text-justify">
                <li>No fees</li>
                <li>Spreads that are competitive</li>
                <li>You can use MT4, WebTrader, and mobile apps</li>
              </ul>
            </div>

            {/* ECN Account */}
            <div className="bg-white text-[#1c1f3c] rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Account for ECN</h3>
              <ul className="list-disc list-inside space-y-1 text-[16px] text-justify">
                <li>Raw spreads start at 0.0 pips</li>
                <li>Low fees for trading</li>
                <li>Execution at the level of institutions</li>
              </ul>
            </div>

            {/* Islamic Account */}
            <div className="bg-white text-[#1c1f3c] rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">
                Account with No Islamic Swaps
              </h3>
              <ul className="list-disc list-inside space-y-1 text-[16px] text-justify">
                <li>No interest</li>
                <li>Following Sharia</li>
                <li>No charges for staying overnight</li>
              </ul>
            </div>

            {/* Demo Account */}
            <div className="bg-white text-[#1c1f3c] rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Account for Demo</h3>
              <ul className="list-disc list-inside space-y-1 text-[16px] text-justify">
                <li>A trading experience with no risk</li>
                <li>A fake market environment</li>
                <li>Great for testing and learning strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exinity Group Section */}
      <section
        className="relative w-full text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fxtm9})`,
          fontFamily: "'Source Sans Pro', sans-serif",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1d2235]/80 backdrop-blur-sm z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[40px] font-semibold mb-4 leading-snug">
            Rules and Openness
          </h1>

          {/* <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] font-normal mb-6">
            We have licenses that are respected around the world and make sure
            everything is clear:
          </h2> */}

          <ul className="text-[16px] leading-loose text-white space-y-2 list-disc list-inside sm:text-left text-center sm:pl-6">
            <li>Reporting in real time</li>
            <li>Clear prices and actions</li>
            <li>Regular audits by a third party</li>
          </ul>
        </div>
      </section>

      <section className="w-full font-[Source Sans Pro]">
        {/* Section with Blue Background */}
        <div className="bg-[#1c1f3c] text-white py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                // src={supportImg}
                alt="Support"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-left">
              <h1 className="text-[40px] font-normal mb-4 leading-tight">
                Support Around the World
              </h1>
              <h2 className="text-[25px] font-normal mb-3">
                Our customer service is here to help you with your trading
                journey:
              </h2>
              <ul className="text-[16px] space-y-2 text-justify list-disc pl-5">
                <li>Support in many languages 24 hours a day, 5 days a week</li>
                <li>Help in the area</li>
                <li>Account managers who are dedicated</li>
                <li>Quick help through live chat and email</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full font-[Source Sans Pro]">
        {/* Section with White Background */}
        <div className="bg-white text-[#1c1f3c] py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Content */}
            <div className="w-full lg:w-1/2 text-left">
              <h1 className="text-[40px] font-semibold mb-4 leading-tight max-w-xl">
                Responsibility of Businesses
              </h1>
              <h2 className="text-[25px] font-normal mb-3 max-w-xl text-justify">
                We care about doing business in an honest way and being
                environmentally friendly:
              </h2>
              <ul className="text-[16px] text-justify list-disc space-y-2 pl-5 max-w-xl">
                <li>Teaching people about money</li>
                <li>Partnerships for charity</li>
                <li>Business practices that follow ESG rules</li>
              </ul>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                // src={responsibilityImg}
                alt="Responsibility"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full font-[Source Sans Pro]">
        {/* Section with Blue Background */}
        <div className="bg-[#1c1f3c] text-white py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                // src={edgeImg}
                alt="Our Edge"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-left lg:pl-16">
              <h1 className="text-[40px] font-medium mb-4 leading-tight">
                Our Edge
              </h1>
              <h2 className="text-[25px] font-normal mb-3">
                What makes us different is:
              </h2>
              <ul className="text-[16px] list-disc space-y-2 pl-5 text-justify">
                <li>Operations that are safe and regulated</li>
                <li>New trading platforms</li>
                <li>Low spreads and quick execution</li>
                <li>Putting the customer first</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white font-[Source Sans Pro] py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-justify">
            <h1 className="text-[40px] font-medium text-[#1c1f3c] mb-3 leading-snug tracking-tight">
              Come With Us
            </h1>
            <h2 className="text-[20px] font-normal text-[#1c1f3c] mb-3 leading-snug tracking-tight">
              When you trade with RightTrade Capital
              <br />
              , you're part of a global community <br />
              that cares, has experience, and uses <br />
              technology.
            </h2>
            <ul className="text-[16px] font-normal space-y-2 list-disc pl-5 text-[#1c1f3c] leading-relaxed">
              <li>Create a live or demo account</li>
              <li>Get access to more than 500 tools</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2">
            <img
              // src={comeWithUsImg}
              alt="Come With Us"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyRightTrade;
