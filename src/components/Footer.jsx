import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa"
import worldMap from "../assets/worldMap.png"

const Footer = () => {
  return (
    <footer
      className="bg-[#1a1f3c] text-white"
      style={{
        backgroundImage: `url(${worldMap})`,
        backgroundColor: "#1a1f3c",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top full-width horizontal line */}
      <div className="w-full border-t border-gray-600"></div>

      {/* Top section - Join our community */}
      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-8 sm:pt-12 lg:pt-16"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-0">Join our community</h2>
        <div className="flex space-x-4 sm:space-x-6 text-lg sm:text-xl">
          <FaPaperPlane className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaTwitter className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaYoutube className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaFacebookF className="cursor-pointer hover:text-gray-300 transition-colors" />
        </div>
      </div>

      <div className="w-full border-t border-gray-600"></div>

      {/* Main content section */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-8 sm:pt-12 lg:pt-16"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* MARKETS + TRADING */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">MARKETS</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Metals</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Stocks</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Currency Pairs (FX)</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Indices</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Commodities</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">All Instruments</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">TRADING</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Accounts Overview & Comparison</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Advantage Account</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Demo Trading</li>
              </ul>
            </div>
          </div>

          {/* KNOWLEDGE HUB + PLATFORMS */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">KNOWLEDGE HUB</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Full Library</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Trading Videos</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Ebooks</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Trading Tools</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Pip Calculator</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Glossary</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">PLATFORMS</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">MT4</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">MT5</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Mobile Trading</li>
              </ul>
            </div>
          </div>

          {/* REGULATION & LICENSING + PRICING */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">REGULATION & LICENSING</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Licensed Broker</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Statement</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Cookie Policy</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Risk Disclosure</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Terms and Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">PRICING</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Performance Statistics</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Commissions and Fees</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Deposits and Withdrawals</li>
              </ul>
            </div>
          </div>

          {/* ABOUT + CAREERS */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">ABOUT</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Contact Us</li>
                <li>Customer Support: +44 20 3734 1025</li>
                <li>+44 20 3734 1025</li>
                <li className="leading-relaxed">
                  Exinity Limited: <br />
                  5th Floor, 355 NEX Tower, Rue du Savoir, Cybercity, Ebene 72201, Mauritius
                </li>
                <li className="leading-relaxed">
                  Exinity Capital East Africa Ltd: <br />
                  West End Towers, Waiyaki Way, 6th Floor, P.O. Box 1896-00606, Nairobi, Republic of Kenya
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">CAREERS</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">RightTrade Capital in Nigeria</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">RightTrade Capital Partnership - Affiliates</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Sponsorships and ESG</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom full-width horizontal line */}
      <div className="w-full border-t border-gray-600 mt-4 sm:mt-8"></div>

      {/* Legal section */}
      <div
        className="bg-[#1a1f3c] text-white leading-relaxed"
        style={{
          backgroundImage: `url(${worldMap})`,
          backgroundColor: "#1a1f3c",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full border-t border-gray-600"></div>

        <div
          className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-6 sm:py-8 space-y-3 sm:space-y-4"
          style={{
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: "10px",
          }}
        >
          <p className="text-xs sm:text-sm">
            <strong>RightTrade Capital brand</strong> is authorized and regulated in various jurisdictions.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Exinity Limited</strong> (www.RightTrade Capital.com) with registration number C119470 C1/GBL and registration
            address at 5th Floor, NEX Tower, Rue du Savoir, Cybercity, 72201 Ebene, Republic of Mauritius is regulated
            by the Financial Services Commission of the Republic of Mauritius with an Investment Dealer License with
            license number C113012295, licensed by the Financial Sector Conduct Authority (FSCA) of South Africa, with
            FSP No. 50320 and is a licensed Over the Counter Derivative Provider.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Exinity Global Financial Services L.L.C</strong> is regulated by the Securities and Commodities
            Authority of the UAE, under license number 20200000270 for the activities of Introduction & Promotion.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Exinity Capital East Africa Ltd</strong> (www.RightTrade Capital.com) with registration number PVT-ZQU6JE7 and
            registration address at West End Towers, Waiyaki Way, 6th Floor, P.O. Box 1896-00606, Nairobi, Republic of
            Kenya is regulated by the Capital Markets Authority of the Republic of Kenya with a Non-Dealing Online
            Foreign Exchange Broker with license number 135.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Exinity UK Limited</strong> (www.RightTrade Capital.com/uk) with registration number 10599136 and
            registration address at 8-10 Old Jewry, London, England, EC2R 8DN, UK is authorised and regulated by the
            Financial Conduct Authority with license number 777911.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Risk Warning (Exinity Limited):</strong> Trading Leveraged Financial instruments involves
            significant risk and can result in the loss of your invested capital. You should not invest more than you
            can afford to lose and should ensure that you fully understand the risks involved. Trading leveraged
            products may not be suitable for all investors. The value of shares can fall as well as rise, which could
            mean getting back less than you originally put in. Past performance does not guarantee future results.
            Before trading, take into consideration your level of experience, investment objectives and seek independent
            financial advice if necessary. It is the responsibility of the client to ascertain whether they are
            permitted to use the services of Exinity brand based on the legal requirements in their country of
            residence. Please read our full{" "}
            <span className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors">
              Risk Disclosure
            </span>
            .
          </p>

          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Risk Warning (Exinity Capital East Africa Ltd):</strong> Online Forex and CFDs are complex
            instruments and come with a high risk of losing money rapidly due to leverage. 83% of retail investor
            accounts lose money when trading Online Forex and CFDs with this provider. You should consider whether you
            understand how CFDs work and whether you can afford to take the high risk of losing your money. It is the
            responsibility of the Client to ascertain whether they are permitted to use the services of Exinity Capital
            East Africa Ltd based on the legal requirements in their country of residence. Please read RightTrade Capital's full{" "}
            <span className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors">
              Risk Disclosure
            </span>
            .
          </p>

          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Regional restrictions</strong> Exinity Limited does not provide services to residents of the USA,
            Mauritius, Japan, Canada, Haiti, Iran, Suriname, the Democratic People's Republic of Korea, Puerto Rico, the
            Occupied Area of Cyprus, Quebec, Iraq, Syria, Cuba, Belarus, Myanmar, Russia and India. Find out more in the{" "}
            <span className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors">
              Help Centre
            </span>
            .
          </p>

          <p className="mt-4 text-xs sm:text-sm">© 2011 - 2025 RightTrade Capital</p>

          <p className="text-xs sm:text-sm">
            <span className="text-blue-400 font-semibold">Risk warning:</span> Trading is risky. Your capital is at
            risk.
          </p>
        </div>

        <div className="w-full border-t border-gray-600"></div>
      </div>
    </footer>
  )
}

export default Footer
