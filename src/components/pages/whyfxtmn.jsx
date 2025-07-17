// src/pages/WhyFxtm.jsx
import React from "react";
import fxtm1 from "../../assets/fxtm1.png"; // update path if needed
import fxtm2 from '../../assets/fxtm2.svg';
import fxtm3 from '../../assets/fxtm3.svg';
import fxtm4 from '../../assets/fxtm4.svg';
import fxtm5 from '../../assets/fxtm5.svg';
import fxtm9 from '../../assets/fxtm9.png';
import { Link } from "react-router-dom";
import email from "../../assets/email.png"
import doc from "../../assets/doc.png"
import message from "../../assets/message.png"






const WhyFxtm = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: `url(${fxtm1})`,
          fontFamily: "'Source Sans Pro', sans-serif",
        }}
      >
        {/* Orange Polygon Overlay */}
        <div
          className="absolute inset-0 bg-[#f7421e] opacity-95"
          style={{
            clipPath: "polygon(0 0, 60% 0, 80% 70%, 0% 100%)",
          }}
        ></div>
        {/* Text Content */}
        <div className="relative z-10 text-white px-4 sm:px-6 lg:px-10 max-w-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
            Ten years of
            <br />
            reliable trading
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6">
            Trade FX, CFDs and stocks with a well-established global broker.
          </p>
          <button className="bg-lime-500 text-black font-semibold px-4 sm:px-6 py-2 rounded-full hover:bg-lime-600 transition text-sm sm:text-base">
            Get started
          </button>
        </div>
      </div>

      {/* Why FXTM Section */}
      <section
        className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20 xl:px-32 text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro"' }}
      >
        {/* Breadcrumb */}
        <div className="text-[#0061eb] mb-4 sm:mb-6 text-sm">
          <Link to="/" className="hover:underline font-medium">
            RightTrade Capital

          </Link>
          <span className="text-black"> › About Us</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-2xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 lg:mb-10 text-center font-semibold">
          Why RightTrade Capital
        </h1>

        {/* Two Columns */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 text-sm sm:text-base lg:text-sm text-[#1c1c1c] leading-relaxed"
          style={{ textAlign: "justify", lineHeight: 1.6 }}
        >
          <div>
            <p className="mb-4">We built RightTrade Capital because we thought trading was too exciting to be kept for the few.</p>
            <p className="mb-4">
              Traders ourselves, we saw how the emerging web could bring opportunity to anyone who was ready to take on
              a little risk and put in the time to learn. We set out three rules to guide our mission to take
              opportunity to the world.
            </p>
            <p className="mb-4">
              <strong>Trust.</strong> With the right licensing and regulation, those who chose to trade with us would be
              able do so with full peace of mind. We agreed to keep customer funds segregated, so no one would be out of
              pocket if things went south. We promised to be transparent and honest. That meant no stealth fees and no
              secrets in our trading stats.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Access.</strong> Nothing should be out of reach. If Warren Buffet could trade it, you should be
              able to trade it. And since you can't profit from what you don't know, we offer access to a world class,
              money-can't-buy education for free.
            </p>
            <p className="mb-4">
              <strong>Value.</strong> We agreed to work to keep the cost of trading as low as possible and to offer our
              services in a spirit of partnership, helping our customers to be profitable traders, not just profitable
              customers. After all, if you do well, we do well.
            </p>
            <p>
              We still weigh everything we do against the 'three mores'. More trust, more access, and more value. That's
              what we mean when we say RightTrade Capital gives you more.
            </p>
          </div>
        </div>
      </section>

      {/* Watch Our Film Section */}
      <section
        className="bg-[#2a2d45] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20 text-white"
        style={{ fontFamily: '"Source Sans Pro"' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
          {/* Vimeo Video */}
          <div className="w-full order-2 lg:order-1">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://player.vimeo.com/video/76979871"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="RightTrade Capital Video"
              ></iframe>
            </div>
          </div>

          {/* Text Block */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 font-semibold">Watch our film</h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Whether you're an experienced trader or completely new to it, we're here to help you get more from the
              financial markets.
            </p>
          </div>
        </div>
      </section>

      {/* RightTrade Capital in Numbers Section */}
      <section
        className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 text-[#1c1c1c] text-center"
        style={{ fontFamily: '"Source Sans Pro"', lineHeight: 1.4 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-8 sm:mb-12 lg:mb-14">
          RightTrade Capital in numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 max-w-6xl mx-auto">
          {/* Clients */}
          <div className="sm:border-r sm:border-[#d3d3d3] sm:pr-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              <span className="text-[#f7421e]">1</span>m
            </h3>
            <h4 className="uppercase font-bold mb-2 text-[#1c1c1c] text-sm sm:text-base">Clients</h4>
            <p className="text-xs sm:text-sm lg:text-base max-w-xs mx-auto">
              Over 1 million people worldwide have chosen RightTrade Capital, and thousands of new traders continue to jump on board
              each month.
            </p>
          </div>

          {/* Countries */}
          <div className="sm:border-r sm:border-[#d3d3d3] sm:px-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              <span className="text-[#f7421e]">150</span>+
            </h3>
            <h4 className="uppercase font-bold mb-2 text-[#1c1c1c] text-sm sm:text-base">Countries</h4>
            <p className="text-xs sm:text-sm lg:text-base max-w-xs mx-auto">
              We serve a global audience from over 150 countries, with a global network of offices, spanning Europe,
              Africa, and Asia.
            </p>
          </div>

          {/* Awards */}
          <div className="sm:pl-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              <span className="text-[#f7421e]">45</span>+
            </h3>
            <h4 className="uppercase font-bold mb-2 text-[#1c1c1c] text-sm sm:text-base">Awards</h4>
            <p className="text-xs sm:text-sm lg:text-base max-w-xs mx-auto">
              We do it for you, not for the glory. But when one looks after their customers like we do, the awards pile
              up: We're proud to have received over 45 of them since we've started.
            </p>
          </div>
        </div>
      </section>

      {/* Exinity Group Section */}
      <section
        className="relative w-full text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{
 backgroundImage: `url(${fxtm9})`,
           fontFamily: "'Source Sans Pro'",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1d2235]/80 backdrop-blur-sm z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6">Exinity Group</h2>
          <p className="text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-8">
            The leadership team behind Exinity Group has proven experience in banking, trading and financial technology.
            Their priority? Helping you to succeed.
          </p>
        </div>
      </section>

      {/* More Reasons Section */}
      <section
        className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro"', lineHeight: 1.4 }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-8 sm:mb-12 lg:mb-14">
          More reasons to trade with RightTrade Capital
          
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Box 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
              <img src={fxtm2} alt="Account icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="font-bold text-sm sm:text-base mb-2">Accounts to suit your trading needs</h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
              Choose from two accounts, each one made to help you find your opportunity. All three are available in demo
              mode, too.
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
              <img src={fxtm2}  alt="Spread icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="font-bold text-sm sm:text-base mb-2">Spreads as low as zero</h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
              On the Advantage account we offer typically zero spreads on FX majors, and spreads that can go as low as
              zero on gold.
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
              <img src={fxtm3}  alt="Platform icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="font-bold text-sm sm:text-base mb-2">The most popular trading platform</h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
              Choose MetaTrader4 or MetaTrader5 on mobile, desktop or web, and enjoy trading with superfast trading
              execution.
            </p>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
              <img src={fxtm4}  alt="Education icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="font-bold text-sm sm:text-base mb-2">A wealth of free educational content</h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
              To get started or improve your trading skills, we offer
              <a href="#" className="text-sky-500">
                {" "}
                education for beginners{" "}
              </a>
              and
              <a href="#" className="text-sky-500">
                {" "}
                advanced traders{" "}
              </a>
              in a variety of formats.
            </p>
          </div>
        </div>
      </section>

      {/* How to Start Trading Section */}
      <section
        className="bg-[#262a43] py-12 sm:py-16 lg:py-20 text-white"
        style={{ fontFamily: '"Source Sans Pro", sans-serif', lineHeight: 1.4 }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center mb-8 sm:mb-12 lg:mb-14 font-semibold px-4">
          How to start trading with RightTrade Capital
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-4 lg:gap-10 px-4 sm:px-6 max-w-6xl mx-auto">
          {[
            { num: 1, text: "Create a MyRightTrade Capital profile" },
            { num: 2, text: "Choose your account type" },
            { num: 3, text: "Fund your trading account" },
            { num: 4, text: "Log in to your MT platform" },
            { num: 5, text: "Start trading!" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circle with number */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#262a43] bg-[#3a3f5a] flex items-center justify-center text-xl sm:text-2xl font-semibold">
                <span className="z-10">{item.num}</span>
                {/* Orange ring */}
                <div
                  className="absolute inset-0 rounded-full border-t-4 border-orange-500"
                  style={{ transform: "rotate(50deg)" }}
                ></div>
              </div>
              {/* Text under circle */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm max-w-[120px] sm:max-w-none">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Contact Section */}
      <section
        className="bg-[#f8f8f8] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-32 text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro", sans-serif', lineHeight: 1.4 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 leading-tight font-semibold">
            Get more from the markets when <br className="hidden sm:block" />
            you join RightTrade Capital
          </h2>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm lg:text-base text-[#1c1c1c] text-center leading-relaxed mb-8 sm:mb-12 lg:mb-14 max-w-3xl mx-auto">
            We are a globally regulated broker, and for the safety of all our clients we offer segregated funds
            protection. If you can't decide which account is right for you, you're wondering how to get started as a
            complete beginner, or you'd like to ask us anything about our products or services, please get in touch.
            We're here to help.
          </p>

          {/* Icons Row */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 lg:gap-20 items-center">
            {/* Raise Request */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                <img src={email}  alt="Raise Request" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="mt-3 text-sm sm:text-base font-medium">Raise Request</p>
            </div>

            {/* Help Centre */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                <img src={doc}  alt="Help Centre" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="mt-3 text-sm sm:text-base font-medium">Help Centre</p>
            </div>

            {/* Chat */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                <img src={message}  alt="Chat" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="mt-3 text-sm sm:text-base font-medium">Chat</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyFxtm

