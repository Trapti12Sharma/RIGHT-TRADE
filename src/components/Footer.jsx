import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import worldMap from "../assets/worldMap.png";

const Footer = () => {
  return (
    <footer
      className="bg-[#1a1f3c] text-white"
      style={{
        backgroundImage: `url(${worldMap})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: '"Source Sans Pro"',
      }}
    >
      {/* Top horizontal line */}
      <div className="w-full border-t border-gray-600"></div>

      {/* Join Community */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <h2 className="text-lg font-medium">Join our community</h2>
        <div className="flex gap-4 text-xl">
          <FaPaperPlane className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaTwitter className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaYoutube className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-gray-300 transition-colors" />
          <FaFacebookF className="cursor-pointer hover:text-gray-300 transition-colors" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-600"></div>

      {/* Main Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* MARKETS + TRADING */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-3 text-base">MARKETS</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Metals",
                  "Stocks",
                  "Currency Pairs (FX)",
                  "Indices",
                  "Commodities",
                  "All Instruments",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-base">TRADING</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Accounts Overview & Comparison",
                  "Advantage Account",
                  "Demo Trading",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* KNOWLEDGE HUB + PLATFORMS */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-3 text-base">KNOWLEDGE HUB</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Full Library",
                  "Trading Videos",
                  "Ebooks",
                  "Trading Tools",
                  "Pip Calculator",
                  "Glossary",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-base">PLATFORMS</h3>
              <ul className="space-y-2 text-sm">
                {["MT4", "MT5", "Mobile Trading"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* REGULATION + PRICING */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-3 text-base">
                REGULATION & LICENSING
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Licensed Broker",
                  "Privacy Statement",
                  "Cookie Policy",
                  "Risk Disclosure",
                  "Terms and Conditions",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-base">PRICING</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Performance Statistics",
                  "Commissions and Fees",
                  "Deposits and Withdrawals",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ABOUT + CAREERS */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-3 text-base">ABOUT</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">
                  Contact Us
                </li>
                <li>Customer Support: +44 20 3734 1025</li>
                <li>+44 20 3734 1025</li>
                <li className="leading-relaxed">
                  Exinity Limited: <br />
                  5th Floor, 355 NEX Tower, Rue du Savoir, Cybercity, Ebene
                  72201, Mauritius
                </li>
                <li className="leading-relaxed">
                  Exinity Capital East Africa Ltd: <br />
                  West End Towers, Waiyaki Way, 6th Floor, P.O. Box 1896-00606,
                  Nairobi, Kenya
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-base">CAREERS</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Careers",
                  "RightTrade Capital in Nigeria",
                  "RightTrade Capital Partnership - Affiliates",
                  "Sponsorships and ESG",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom horizontal line */}
      <div className="w-full border-t border-gray-600 mt-8"></div>

      {/* Legal and Disclosure Section */}
      <div
        className="text-white text-[10px] leading-relaxed px-6 py-8 max-w-7xl mx-auto space-y-4"
        style={{
          backgroundImage: `url(${worldMap})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>
          <strong>RightTrade Capital brand</strong> is authorized and regulated
          in various jurisdictions.
        </p>
        <p>
          <strong>Exinity Limited</strong> (www.RightTradeCapital.com) is
          regulated by the Financial Services Commission of the Republic of
          Mauritius, FSCA of South Africa, and is a licensed Over the Counter
          Derivative Provider.
        </p>
        <p>
          <strong>Exinity Global Financial Services L.L.C</strong> is regulated
          by the Securities and Commodities Authority of the UAE.
        </p>
        <p>
          <strong>Exinity Capital East Africa Ltd</strong> is regulated by the
          Capital Markets Authority of Kenya.
        </p>
        <p>
          <strong>Exinity UK Limited</strong> is authorized and regulated by the
          Financial Conduct Authority, UK.
        </p>
        <p>
          <strong>Risk Warning (Exinity Limited):</strong> Trading leveraged
          instruments carries risk. You may lose more than you invest. Please
          ensure you fully understand the risks or seek independent advice.
        </p>
        <p>
          <strong>Risk Warning (East Africa):</strong> 83% of retail investor
          accounts lose money. CFDs may not be suitable for you.
        </p>
        <p>
          <strong>Regional Restrictions:</strong> Services are not provided to
          residents of USA, Mauritius, Japan, Canada, Haiti, Iran, DPRK, Russia,
          India and others. See full list in{" "}
          <span className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors">
            Help Centre
          </span>
          .
        </p>

        <p className="pt-2">© 2011 - 2025 RightTrade Capital</p>
        <p>
          <span className="text-blue-400 font-semibold">Risk warning:</span>{" "}
          Trading is risky. Your capital is at risk.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
