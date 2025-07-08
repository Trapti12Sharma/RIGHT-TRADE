import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#10162f] text-white text-sm">
      {/* Top full-width horizontal line */}
      <div className="w-full border-t border-gray-600"></div>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-lg font-medium mb-4 md:mb-0">Join our community</h2>
          <div className="flex space-x-6 text-xl">
            <FaPaperPlane className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
          </div>
        </div>
 <div className="w-full border-t border-gray-600 mt-8"></div>
        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* MARKETS + TRADING */}
          <div>
            <h3 className="font-bold mb-4">MARKETS</h3>
            <ul className="space-y-2 mb-6">
              <li>Metals</li>
              <li>Stocks</li>
              <li>Currency Pairs (FX)</li>
              <li>Indices</li>
              <li>Commodities</li>
              <li>All Instruments</li>
            </ul>

            <h3 className="font-bold mb-4">TRADING</h3>
            <ul className="space-y-2">
              <li>Accounts Overview & Comparison</li>
              <li>Advantage Account</li>
              <li>Demo Trading</li>
            </ul>
          </div>

          {/* KNOWLEDGE HUB + PLATFORMS */}
          <div>
            <h3 className="font-bold mb-4">KNOWLEDGE HUB</h3>
            <ul className="space-y-2 mb-6">
              <li>Full Library</li>
              <li>Trading Videos</li>
              <li>Ebooks</li>
              <li>Trading Tools</li>
              <li>Pip Calculator</li>
              <li>Glossary</li>
            </ul>

            <h3 className="font-bold mb-4">PLATFORMS</h3>
            <ul className="space-y-2">
              <li>MT4</li>
              <li>MT5</li>
              <li>Mobile Trading</li>
            </ul>
          </div>

          {/* REGULATION & LICENSING + PRICING */}
          <div>
            <h3 className="font-bold mb-4">REGULATION & LICENSING</h3>
            <ul className="space-y-2 mb-6">
              <li>Licensed Broker</li>
              <li>Privacy Statement</li>
              <li>Cookie Policy</li>
              <li>Risk Disclosure</li>
              <li>Terms and Conditions</li>
            </ul>

            <h3 className="font-bold mb-4">PRICING</h3>
            <ul className="space-y-2">
              <li>Performance Statistics</li>
              <li>Commissions and Fees</li>
              <li>Deposits and Withdrawals</li>
            </ul>
          </div>

          {/* ABOUT + CAREERS */}
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2 mb-6">
              <li>Contact Us</li>
              <li>Customer Support: +44 20 3734 1025</li>
              <li>+44 20 3734 1025</li>
              <li>
                Exinity Limited: <br />
                5th Floor, 355 NEX Tower, Rue du Savoir, Cybercity, Ebene
                72201, Mauritius
              </li>
              <li>
                Exinity Capital East Africa Ltd: <br />
                West End Towers, Waiyaki Way, 6th Floor, P.O. Box 1896-00606,
                Nairobi, Republic of Kenya
              </li>
            </ul>

            <h3 className="font-bold mb-4">CAREERS</h3>
            <ul className="space-y-2">
              <li>Careers</li>
              <li>FXTM in Nigeria</li>
              <li>FXTM Partnership - Affiliates</li>
              <li>Sponsorships and ESG</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom full-width horizontal line */}
      <div className="w-full border-t border-gray-600 mt-8"></div>
    </footer>
  );
};

export default Footer;
