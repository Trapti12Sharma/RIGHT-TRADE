import React from "react";
import home4 from "../assets/RightTradeCapitalSpecial.jpg";

const ForexIntro = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image First in JSX — top in mobile, right side in desktop */}
        <div className="order-1 md:order-2">
          <img
            src={home4}
            alt="Forex Trading"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 flex items-center px-6 py-10 md:px-16">
          <div>
            <h1 className="text-[#1A1D30] text-4xl mb-6">
              Why Choose RightTrade Capital
            </h1>

            <ul
              style={{
                textAlign: "left",
              }}
              className="text-[#1A1D30] leading-8 mb-4 list-disc list-inside space-y-2"
            >
              <li>100% regulated and trusted forex broker</li>
              <li>
                Access to a vast array of over 500 distinct world markets.
              </li>
              <li>Low spreads and high depth of liquidity</li>
              <li>
                A fast trading platform that carries out transactions promptly.{" "}
              </li>
              <li>
                Sophisticated trading technologies that can work and
                inter-operate on multiple devices.{" "}
              </li>
              <li>
                Financial assistance for academic activity and use of community
                facilities
              </li>
            </ul>

            <a
              style={{
                textAlign: "left",
              }}
              href="#"
              className="text-[#4CB1FF]"
            >
              Learn more about forex trading with our beginners guide.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexIntro;
