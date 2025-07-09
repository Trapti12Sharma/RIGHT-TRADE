// src/pages/WhyFxtm.jsx
import React from "react";
import fxtm1 from "../../assets/fxtm1.png"; // update path if needed
import fxtm2 from '../../assets/fxtm2.svg';
import fxtm3 from '../../assets/fxtm3.svg';
import fxtm4 from '../../assets/fxtm4.svg';
import fxtm5 from '../../assets/fxtm5.svg';
import fxtm6 from '../../assets/fxtm6.png';
import fxtm7 from '../../assets/fxtm7.png';
import fxtm8 from '../../assets/fxtm8.png';

const WhyFxtm = () => {
  return (
    <>
    <div
      className="relative w-full h-screen flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url(${fxtm1})`,
        fontFamily: "'Source Sans Pro', sans-serif",
      }}
    >
      {/* Orange Polygon Overlay */}
      <div
        className="absolute inset-0 bg-[#f7421e] opacity-95"
        style={{
          clipPath: "polygon(0 0, 50% 0, 70% 70%, 0% 100%)",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 text-white px-10 max-w-xl">
        <h2 className="text-5xl font-bold mb-4">
          Ten years of<br />reliable trading
        </h2>
        <p className="text-xl mb-6">
          Trade FX, CFDs and stocks with a well-established global broker.
        </p>
        <button className="bg-lime-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-lime-600 transition">
          Get started
        </button>
      </div>
    </div>

{/* Why FXTM Section (Second Section)*/}
      <section className="py-16 px-6 md:px-20 text-[#1c1c1c] font-sans">
        {/* Breadcrumb */}
        <div className="text-sm text-[#0061eb] mb-6">
          {/* <Link to="/" className="hover:underline font-medium">FXTM</Link> */}
          <span className="text-black font-normal"> &nbsp;›&nbsp; About Us</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold mb-10 text-center md:text-center">
          Why FXTM
        </h1>

        {/* Two Columns */}
        <div style={{textAlign:"justify"}} className=" grid md:grid-cols-2 gap-10 leading-7 text-[17px] text-[#1c1c1c]">
          <div>
            <p className="mb-4">
              We built FXTM because we thought trading was too exciting to be kept for the few.
            </p>
            <p className="mb-4">
              Traders ourselves, we saw how the emerging web could bring opportunity to anyone who was ready to take on a little risk and put in the time to learn. We set out three rules to guide our mission to take opportunity to the world.
            </p>
            <p className="mb-4">
              <strong>Trust.</strong> With the right licensing and regulation, those who chose to trade with us would be able do so with full peace of mind. We agreed to keep customer funds segregated, so no one would be out of pocket if things went south. We promised to be transparent and honest. That meant no stealth fees and no secrets in our trading stats.
            </p>
          </div>

          <div>
            <p className="mb-4">
              <strong>Access.</strong> Nothing should be out of reach. If Warren Buffet could trade it, you should be able to trade it. And since you can’t profit from what you don’t know, we offer access to a world class, money-can’t-buy education for free.
            </p>
            <p className="mb-4">
              <strong>Value.</strong> We agreed to work to keep the cost of trading as low as possible and to offer our services in a spirit of partnership, helping our customers to be profitable traders, not just profitable customers. After all, if you do well, we do well.
            </p>
            <p>
              We still weigh everything we do against the ‘three mores’. More trust, more access, and more value. That’s what we mean when we say FXTM gives you more.
            </p>
          </div>
        </div>
      </section>


{/* Third Section – Watch Our Film */}
<section className="bg-[#2a2d45] py-16 px-6 md:px-20 text-white">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Vimeo Video */}
    <div className="w-full">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://player.vimeo.com/video/855939244?h=d15a5f1aab"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="FXTM Video"
          className="w-full h-[300px] md:h-[420px] rounded-lg"
        ></iframe>
      </div>
    </div>

    {/* Text Block */}
    <div>
      <h2 className="text-3xl font-semibold mb-4">Watch our film</h2>
      <p className="text-[17px] leading-7">
        Whether you're an experienced trader or completely new to it, we're here to help you
        get more from the financial markets.
      </p>
    </div>
  </div>
</section>


{/* Fourth Section – FXTM in Numbers */}
<section className="bg-white py-20 px-6 md:px-20 text-[#1c1c1c] text-center font-sans">
  <h2 className="text-3xl font-semibold mb-14">FXTM in numbers</h2>

  <div className="grid md:grid-cols-3 gap-10">
    {/* Clients */}
    <div>
      <h3 className="text-4xl font-bold mb-2">
        <span className="text-[#f7421e]">1</span>m
      </h3>
      <h4 className="uppercase font-bold mb-2 text-[#1c1c1c]">Clients</h4>
      <p className="text-[17px] leading-7 max-w-xs mx-auto">
        Over 1 million people worldwide have chosen FXTM, and thousands of new traders continue to jump on board each month.
      </p>
    </div>

    {/* Countries */}
    <div className="border-l border-r border-[#d3d3d3] px-6">
      <h3 className="text-4xl font-bold mb-2">
        <span className="text-[#f7421e]">150</span>+
      </h3>
      <h4 className="uppercase font-bold mb-2 text-[#1c1c1c]">Countries</h4>
      <p className="text-[17px] leading-7 max-w-xs mx-auto">
        We serve a global audience from over 150 countries, with a global network of offices, spanning Europe, Africa, and Asia.
      </p>
    </div>

    {/* Awards */}
    <div>
      <h3 className="text-4xl font-bold mb-2">
        <span className="text-[#f7421e]">45</span>+
      </h3>
      <h4 className="uppercase font-bold mb-2 text-[#1c1c1c]">Awards</h4>
      <p className="text-[17px] leading-7 max-w-xs mx-auto">
        We do it for you, not for the glory. But when one looks after their customers like we do, the awards pile up: We're proud to have received over 45 of them since we've started.
      </p>
    </div>
  </div>
</section>


{/* Fifth Section – Exinity Group */}
<section
  className="w-full text-white py-24 px-4 text-center"
  style={{
    background: 'linear-gradient(to right, #1e2235, #2a2f4a)',
    fontFamily: "'Source Sans Pro', sans-serif",
  }}
>
  <h2 className="text-3xl md:text-4xl font-semibold mb-6">Exinity Group</h2>
  <p className="text-lg md:text-xl max-w-4xl mx-auto leading-8">
    The leadership team behind Exinity Group has proven experience in banking, trading and financial technology.
    Their priority? Helping you to succeed.
  </p>
</section>

{/* Sixth Section  More reasons to trade with FXT */}

<section className="bg-white py-20 px-4 text-center font-sans text-[#1c1c1c]">
  <h2 className="text-3xl md:text-4xl font-semibold mb-14">More reasons to trade with FXTM</h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {/* Box 1 */}
    <div>
      <img src={fxtm2} alt="Account icon" className="mx-auto mb-4 h-14" />
      <h3 className="font-bold text-lg mb-2">Accounts to suit your trading needs</h3>
      <p className="text-[15px] leading-relaxed">
        Choose from two accounts, each one made to help you find your opportunity.
        All three are available in demo mode, too.
      </p>
    </div>

    {/* Box 2 */}
    <div>
      <img src={fxtm3} alt="Spread icon" className="mx-auto mb-4 h-14" />
      <h3 className="font-bold text-lg mb-2">Spreads as low as zero</h3>
      <p className="text-[15px] leading-relaxed">
        On the Advantage account we offer typically zero spreads on FX majors, and spreads
        that can go as low as zero on gold.
      </p>
    </div>

    {/* Box 3 */}
    <div>
      <img src={fxtm4} alt="Platform icon" className="mx-auto mb-4 h-14" />
      <h3 className="font-bold text-lg mb-2">The most popular trading platform</h3>
      <p className="text-[15px] leading-relaxed">
        Choose MetaTrader4 or MetaTrader5 on mobile, desktop or web, and enjoy trading
        with superfast trading execution.
      </p>
    </div>

    {/* Box 4 */}
    <div>
      <img src={fxtm5} alt="Education icon" className="mx-auto mb-4 h-14" />
      <h3 className="font-bold text-lg mb-2">A wealth of free educational content</h3>
      <p className="text-[15px] leading-relaxed">
        To get started or improve your trading skills, we offer
        <a href="#" className="text-sky-500"> education for beginners </a>
        and
        <a href="#" className="text-sky-500"> advanced traders </a>
        in a variety of formats.
      </p>
    </div>
  </div>
</section>



{/* Seventh Section  How to start trading with FXTM */}


<section className="bg-[#262a43] py-20 text-white font-sans">
  <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
    How to start trading with FXTM
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 max-w-6xl mx-auto">
    {[
      { num: 1, text: "Create a MyFXTM profile" },
      { num: 2, text: "Choose your account type" },
      { num: 3, text: "Fund your trading account" },
      { num: 4, text: "Log in to your MT platform" },
      { num: 5, text: "Start trading!" },
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center text-center">
        {/* Circle with number */}
        <div className="relative w-20 h-20 rounded-full border-4 border-[#262a43] bg-[#3a3f5a] flex items-center justify-center text-2xl font-semibold">
          <span className="z-10">{item.num}</span>
          {/* Orange ring - like screenshot */}
          <div className="absolute inset-0 rounded-full border-t-4 border-orange-500" style={{ transform: "rotate(50deg)" }}></div>
        </div>

        {/* Text under circle */}
        <p className="mt-4 text-sm md:text-base">{item.text}</p>
      </div>
    ))}
  </div>
</section>



{/* Eighth Section  How to start trading with FXTM */}


<section className="bg-[#f8f8f8] py-20 px-4 md:px-0 text-[#1c1c1c] font-sans">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
      Get more from the markets when <br className="hidden md:block" />
      you join FXTM
    </h2>
    <p className="text-base md:text-[16px] text-gray-700 leading-7 max-w-3xl mx-auto mb-14">
      We are a globally regulated broker, and for the safety of all our clients we offer segregated funds protection. If you can't decide which account is right for you, you're wondering how to get started as a complete beginner, or you'd like to ask us anything about our products or services, please get in touch. We're here to help.
    </p>

    {/* Icons Row */}
    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center">
      {/* Raise Request */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
          <img src="/assets/fxtm6.png" alt="Raise Request" className="w-8" />
        </div>
        <p className="mt-3 text-sm md:text-base font-medium">Raise Request</p>
      </div>

      {/* Help Centre */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
          <img src="/assets/fxtm7.png" alt="Help Centre" className="w-8" />
        </div>
        <p className="mt-3 text-sm md:text-base font-medium">Help Centre</p>
      </div>

      {/* Chat */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
          <img src="/assets/fxtm8.png" alt="Chat" className="w-8" />
        </div>
        <p className="mt-3 text-sm md:text-base font-medium">Chat</p>
      </div>
    </div>
  </div>
</section>


</>
  );
};

export default WhyFxtm;
