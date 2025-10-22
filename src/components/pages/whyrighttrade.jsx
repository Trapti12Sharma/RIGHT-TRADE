import React from "react";
import StatsSection from "../common/StatsSection";
import fxtm1 from "../../assets/Compare.jpg";
import fxtm9 from "../../assets/fxtm9.png";
import whatWeDoImage from "../../assets/WhatWeDo.png";
import educationImage from "../../assets/account1.png";

const WhyRightTrade = () => {
  return (
    <>
      <StatsSection
        title="Reliable Forex Trading Company | RightTrade"
        subtitle="Get to know RightTrade: The most dependable Forex Trading Platform to make your trading experience stress-free."
        buttonText="Learn more"
        image={fxtm1}
      />

      {/* Introduction: About RightTrade Section */}
      <section
        className="py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-24 xl:px-36 bg-white text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <h1 className="text-[40px] font-medium text-center mb-6">
          Introduction: About RightTrade
        </h1>

        <div className="space-y-6 max-w-4xl mx-auto">
          <p
            className="text-[16px] text-center leading-relaxed text-[#1c1c1c]"
            style={{ lineHeight: "1.8" }}
          >
            RightTrade is a forex trading company that aims to provide its
            customers with a trading experience that is both reliable and safe.
            A trusted forex trading platform is what we are, and we do this by
            blending technology that is state-of-the-art, being open, and
            following the rules to make it easy for new and experienced traders
            to get the best forex trading broker services.
          </p>

          <p
            className="text-[16px] text-center leading-relaxed text-[#1c1c1c]"
            style={{ lineHeight: "1.8" }}
          >
            Our goal is to give the customer a trouble-free market trading space
            in which they will have no doubts about accessing financial markets
            all over the world. No matter if you are trading forex, commodities,
            or indices, RightTrade will take you on a journey through the most
            comprehensive online forex trading company which is built around the
            core values of security, efficiency, and performance.
          </p>

          <p
            className="text-[16px] text-center leading-relaxed text-[#1c1c1c]"
            style={{ lineHeight: "1.8" }}
          >
            We provide the trader with the right tools, educational resources,
            and analysis, that is, all what they need for being successful.
            RightTrade is there for you when you want to open a best stock
            trading platform account or carry out complicated trading
            strategies.
          </p>
        </div>
      </section>

      {/* Our Vision and Mission Section */}
      <section
        className="bg-[#2a2d45] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20 text-white"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[40px] font-semibold text-center mb-8">
            Our Vision and Mission
          </h1>

          <p className="text-[16px] text-center leading-relaxed mb-8 max-w-4xl mx-auto text-gray-200">
            RightTrade's vision is to create an unparalleled trading ecosystem
            that merges cutting-edge technology, trust, and transparency. Our
            goal is to build a platform that offers the most reliable forex
            trading platform review for traders around the globe.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Vision */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-[24px] font-semibold mb-4 text-center text-black">
                Our Vision
              </h2>
              <p className="text-[16px] leading-relaxed text-gray-950 text-justify">
                To become the most reliable forex trading platform that is
                trusted by the global community, providing the traders the
                access to financial achievements through revolutionary and
                transparent ways.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-[24px] font-semibold mb-4 text-center text-black">
                Our Mission
              </h2>
              <ul className="text-[16px] leading-relaxed text-gray-950 space-y-2">
                <li>
                  • Provide a safe and well-regulated forex trading company
                  environment
                </li>
                <li>
                  • Encourage the use of advanced tools and resources for both
                  novice and experienced traders
                </li>
                <li>
                  • Practice complete honesty in pricing, order execution, and
                  account management
                </li>
                <li>
                  • Make available learning resources such as tutorials,
                  webinars, and live trading insights to users at all times
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section
        className="bg-white py-16 px-4 sm:px-6 lg:px-12 text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[40px] font-medium text-center mb-8">
            Our Core Values
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trust & Security */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-[22px] font-semibold mb-4 text-[#1c1f3c]">
                1. Trust & Security
              </h3>
              <p className="text-[16px] text-justify leading-relaxed">
                What we care most about is security. RightTrade applies
                multi-level encryption, two-factor authentication (2FA), and
                operates under strict regulations. As a trustworthy forex
                trading platform, our users are guaranteed that their accounts
                and money are fully secured.
              </p>
            </div>

            {/* Innovation & Technology */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-[22px] font-semibold mb-4 text-[#1c1f3c]">
                2. Innovation & Technology
              </h3>
              <p className="text-[16px] text-justify leading-relaxed">
                We use state-of-the-art technology to offer market data in
                real-time, provide advanced charting tools, and execute trades
                quickly. Our platform is considered the leading forex trading
                broker for the seamless integration of user-friendly design and
                high-end tools.
              </p>
            </div>

            {/* Customer-Centric Approach */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-[22px] font-semibold mb-4 text-[#1c1f3c]">
                3. Customer-Centric Approach
              </h3>
              <p className="text-[16px] text-justify leading-relaxed">
                RightTrade revolves around the needs of our traders. Customer
                support in multiple languages is available 24/5, which ensures
                the resolution of the questions in no time. The customer support
                team, who is always at your disposal, is ready to assist
                beginners and professionals.
              </p>
            </div>

            {/* Transparency & Integrity */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-[22px] font-semibold mb-4 text-[#1c1f3c]">
                4. Transparency & Integrity
              </h3>
              <p className="text-[16px] text-justify leading-relaxed">
                We offer low commissions, the tightest spreads, and very
                detailed reporting of your account. Our traders are never in
                doubt regarding what they pay for, hence RightTrade is the most
                reliable forex trading platform when it comes to safe trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RightTrade Section */}
      <section
        className="bg-[#1c1f3c] py-16 px-4 sm:px-6 lg:px-12 text-white"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[40px] font-semibold text-center mb-8">
            Why Choose RightTrade?
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-black">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-[20px] font-semibold mb-3">
                  More than just trading Services
                </h3>
                <p className="text-[16px] text-justify leading-relaxed text-black">
                  RightTrade allows users to invest in over 500+ financial
                  instruments such as forex, commodities, indices, and stocks.
                  The best stock trading platform that we offer creates the
                  opportunity for traders to diversify portfolios and
                  efficiently apply various trading strategies.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-[20px] font-semibold mb-3">
                  Advanced Trading Tools
                </h3>
                <p className="text-[16px] text-justify leading-relaxed text-black">
                  From real-time charts and technical indicators up to risk
                  management tools, RightTrade has got every resource needed for
                  professional trading. Our platform is equipped with all levels
                  of learning material for beginners and advanced analytics for
                  skilled traders.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-[20px] font-semibold mb-3">
                  Fast & Reliable Execution
                </h3>
                <p className="text-[16px] text-justify leading-relaxed text-black">
                  The faster the better when dealing with sudden changes in
                  volatile markets. Our platform guarantees that orders are
                  executed straight away with least possible slippage thus
                  ensuring profit maximization.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-[20px] font-semibold mb-3">
                  Regulated & Safe
                </h3>
                <p className="text-[16px] text-justify leading-relaxed text-black">
                  RightTrade as a forex online platform with full regulation is
                  held accountable to good conduct towards customer funds.
                  Encryption takes care of all transactions, and for security
                  and compliance, there is monitoring of accounts.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-[20px] font-semibold mb-3">
                  Account Options with Flexibility
                </h3>
                <p className="text-[16px] text-justify leading-relaxed text-black">
                  RightTrade provides several different types of accounts such
                  as standard, pro, Islamic, and demo accounts. We have an
                  account type suitable either for you if you are looking for
                  the best funded forex account or just want to practice
                  risk-free trading.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-[20px] font-semibold mb-3">
                  Global Market Access
                </h3>
                <p className="text-[16px] text-justify leading-relaxed text-black">
                  Trade forex pairs (major, minor, and exotic), commodities like
                  gold, oil, and silver, stock indices, and cryptocurrencies -
                  all from one platform with internet access anywhere in the
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources & Community Support Section */}
      <section
        className="bg-white px-0 sm:px-0 lg:px-0 text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro", sans-serif', lineHeight: 1.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full">
          {/* Text Block */}
          <div className="text-left max-w-[600px] w-full flex flex-col justify-start pt-8 px-4 sm:px-6 lg:px-20">
            <h1 className="text-[36px] font-semibold mb-4 leading-tight">
              Educational Resources & Community Support
            </h1>
            <h2 className="text-[22px] font-medium mb-4 leading-snug">
              RightTrade cannot be termed merely as a trading platform, it also
              acts like a learning center. We furnish:
            </h2>
            <ul className="list-disc pl-5 text-[16px] space-y-2 mb-4">
              <li>Step-by-step guides and tutorials</li>
              <li>Webinars and live classes by market professionals</li>
              <li>
                Forums for community interaction and exchanging views among
                traders
              </li>
              <li>Daily reviews and calendars of economic events</li>
            </ul>
            <p className="text-[16px]">
              All these resources enable continuous skill development and
              confidence growth for traders at all levels.
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

      {/* Global Market Access Section */}
      <section className="w-full bg-white font-[Source Sans Pro] py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-[#1c1f3c]">
          <h1 className="text-[40px] font-light mb-4 leading-tight text-center">
            Global Market Access
          </h1>

          <h2 className="text-[25px] font-light mb-6 text-center">
            RightTrade helps traders obtain access to markets from all over the
            world:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Forex */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Forex Pairs</h3>
              <p className="text-[16px] text-justify">
                Major, minor, and exotic currency pairs with competitive spreads
                and real-time execution.
              </p>
            </div>

            {/* Commodities */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Commodities</h3>
              <p className="text-[16px] text-justify">
                Trade gold, oil, silver, and other precious metals to diversify
                your portfolio and hedge against inflation.
              </p>
            </div>

            {/* Stock Indices */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Stock Indices</h3>
              <p className="text-[16px] text-justify">
                Access NASDAQ, Dow Jones, S&P 500, FTSE 100, and more global
                indices with flexible leverage.
              </p>
            </div>

            {/* Cryptocurrencies */}
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Cryptocurrencies</h3>
              <p className="text-[16px] text-justify">
                Trade Bitcoin, Ethereum, Litecoin, and other major
                cryptocurrencies through CFDs without needing a wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Innovation Section */}
      <section
        className="bg-[#2a2d45] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20 text-white"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
          {/* Image Block */}
          <div className="w-full order-2 lg:order-1">
            <img
              src={whatWeDoImage}
              alt="Innovation"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text Block */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-[32px] font-semibold mb-4 leading-snug">
              Our Commitment to Innovation
            </h1>
            <h2 className="text-[20px] font-normal mb-4 leading-relaxed text-gray-200">
              RightTrade keeps updating its platform to match the changing needs
              of the market.
            </h2>
            <ul className="list-disc text-[16px] leading-relaxed pl-5 text-left mt-4 space-y-2 text-gray-100">
              <li>Mobile trading apps for trading on the go</li>
              <li>Forex profit calculator for better planning</li>
              <li>Real-time alerts to never miss opportunities</li>
              <li>Advanced charting tools with customizable indicators</li>
            </ul>
            <p className="text-[16px] leading-relaxed mt-4 text-gray-200">
              We care a lot about user experience and provide an interface
              suitable for beginners as well as professional traders.
            </p>
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="w-full bg-[#1c1f3c] text-white font-[Source_Sans_Pro] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[40px] font-semibold mb-4 text-center leading-tight">
            Account Types
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

            {/* Pro Account */}
            <div className="bg-white text-[#1c1f3c] rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Pro Account</h3>
              <ul className="list-disc list-inside space-y-1 text-[16px] text-justify">
                <li>Raw spreads start at 0.0 pips</li>
                <li>Low fees for trading</li>
                <li>Execution at the level of institutions</li>
              </ul>
            </div>

            {/* Islamic Account */}
            <div className="bg-white text-[#1c1f3c] rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Islamic Account</h3>
              <ul className="list-disc list-inside space-y-1 text-[16px] text-justify">
                <li>No interest charges</li>
                <li>Following Sharia principles</li>
                <li>No charges for staying overnight</li>
              </ul>
            </div>

            {/* Demo Account */}
            <div className="bg-white text-[#1c1f3c] rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Demo Account</h3>
              <ul className="list-disc list-inside space-y-1 text-[16px] text-justify">
                <li>A trading experience with no risk</li>
                <li>A simulated market environment</li>
                <li>Great for testing and learning strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About our Forex Trading Platform and Services */}
      <section
        className="bg-white py-16 px-4 sm:px-6 lg:px-12 text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[40px] font-medium text-center mb-8">
            About our Forex Trading Platform and Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[20px] font-semibold mb-4 text-[#1c1f3c]">
                Platform Features
              </h3>
              <ul className="text-[16px] space-y-2 list-disc pl-5">
                <li>Real-time pricing and liquidity for fast execution</li>
                <li>Advanced charting tools with customizable indicators</li>
                <li>Multi-device access via web, desktop, and mobile apps</li>
              </ul>
            </div>

            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[20px] font-semibold mb-4 text-[#1c1f3c]">
                Trading Services
              </h3>
              <ul className="text-[16px] space-y-2 list-disc pl-5">
                <li>Trading signals, analytics, and educational resources</li>
                <li>Complete trading experience for every trader level</li>
                <li>24/5 customer support in multiple languages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation and Transparency Section */}
      <section
        className="relative w-full text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fxtm9})`,
          fontFamily: "'Source Sans Pro', sans-serif",
        }}
      >
        <div className="absolute inset-0 bg-[#1d2235]/80 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-[40px] font-semibold mb-6 leading-snug">
            Regulation and Transparency
          </h1>

          <p className="text-[20px] font-normal mb-6 leading-relaxed">
            We have licenses that are respected around the world and make sure
            everything is clear:
          </p>

          <ul className="text-[16px] leading-loose text-white space-y-2 list-disc list-inside sm:text-left text-center sm:pl-6">
            <li>Reporting in real time</li>
            <li>Clear prices and actions</li>
            <li>Regular audits by a third party</li>
            <li>Compliance with international regulatory standards</li>
          </ul>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        className="bg-white py-16 px-4 sm:px-6 lg:px-12 text-[#1c1c1c]"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[40px] font-medium text-center mb-8">
            Frequently Asked Questions
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[18px] font-semibold mb-2 text-[#1c1f3c]">
                What is RightTrade?
              </h3>
              <p className="text-[16px] text-justify">
                RightTrade is a forex trading company that gives users the
                option of accessing a safe, dependable, and regulated trading
                platform.
              </p>
            </div>

            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[18px] font-semibold mb-2 text-[#1c1f3c]">
                Is RightTrade a trusted forex trading platform?
              </h3>
              <p className="text-[16px] text-justify">
                RightTrade complies with all the required regulatory standards
                and installs high-end security systems to ensure its clients'
                safety.
              </p>
            </div>

            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[18px] font-semibold mb-2 text-[#1c1f3c]">
                What instruments can I trade on RightTrade?
              </h3>
              <p className="text-[16px] text-justify">
                RightTrade offers a variety of instruments such as forex pairs,
                commodities, indices, stocks, and cryptocurrencies.
              </p>
            </div>

            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[18px] font-semibold mb-2 text-[#1c1f3c]">
                Does RightTrade provide educational resources?
              </h3>
              <p className="text-[16px] text-justify">
                Indeed, RightTrade offers a wide array of trading resources such
                as tutorials, webinars, trading guides, and a dedicated
                community for traders.
              </p>
            </div>

            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[18px] font-semibold mb-2 text-[#1c1f3c]">
                Can I trade on mobile?
              </h3>
              <p className="text-[16px] text-justify">
                RightTrade is available on the web, desktop, and mobile
                platforms, and all three have the same features.
              </p>
            </div>

            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[18px] font-semibold mb-2 text-[#1c1f3c]">
                What account types are available?
              </h3>
              <p className="text-[16px] text-justify">
                We offer Standard, Pro, Islamic, and Demo accounts to cater to
                the different needs of traders.
              </p>
            </div>

            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[18px] font-semibold mb-2 text-[#1c1f3c]">
                How fast is trade execution?
              </h3>
              <p className="text-[16px] text-justify">
                Trades are done immediately to the greatest extent with minimal
                slippage to maximize your opportunities.
              </p>
            </div>

            <div className="bg-[#f3f6fd] rounded-xl p-6 shadow-sm">
              <h3 className="text-[18px] font-semibold mb-2 text-[#1c1f3c]">
                Is my fund safe with RightTrade?
              </h3>
              <p className="text-[16px] text-justify">
                Several security measures are in place such as encryption,
                two-factor authentication and regulatory requirements to ensure
                that users' accounts and funds are very safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-[#1c1f3c] font-[Source Sans Pro] py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 text-justify text-white">
            <h1 className="text-[40px] font-medium mb-3 leading-snug tracking-tight">
              Join Us Today
            </h1>
            <h2 className="text-[20px] font-normal mb-6 leading-snug tracking-tight">
              When you trade with RightTrade, you're part of a global community
              that cares, has experience, and uses technology to provide the
              best trading experience.
            </h2>
            <ul className="text-[16px] font-normal space-y-3 list-disc pl-5 leading-relaxed">
              <li>Create a live or demo account</li>
              <li>Get access to more than 500+ trading instruments</li>
              <li>Join a community of successful traders worldwide</li>
              <li>Start your journey to financial freedom</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={whatWeDoImage}
              alt="Join Us Today"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyRightTrade;
