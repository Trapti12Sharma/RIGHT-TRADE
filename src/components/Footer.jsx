import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

import worldMap from "../assets/worldMap.png"

const Footer = () => {
  return (
    <footer className="bg-[#1a1f3c] text-white"   style={{
    backgroundImage: `url(${worldMap})`,
    backgroundColor: "#1a1f3c", // fallback
    backgroundRepeat: "no-repeat",
  }}>
      {/* Top full-width horizontal line */}
      <div className="w-full border-t border-gray-600"></div>
{/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8" style={{padding:'50px 136px 0 136px',fontFamily: '"Source Sans Pro", sans-serif', }}>
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

      <div className="max-w-7xl mx-auto" style={{padding:'50px 136px 0 136px',fontFamily: '"Source Sans Pro", sans-serif', }}>
        
        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* MARKETS + TRADING */}
          <div>
                        <h3 className="font-bold mb-4" style={{fontSize:'16px'}}>MARKETS</h3>
            <ul className="space-y-2 mb-36" style={{fontSize:'0.8rem'}}>
              <li>Metals</li>
              <li>Stocks</li>
              <li>Currency Pairs (FX)</li>
              <li>Indices</li>
              <li>Commodities</li>
              <li>All Instruments</li>
            </ul>

            <h3 className="font-bold mb-4" style={{fontSize:'16px'}}>TRADING</h3>
            <ul className="space-y-2" style={{fontSize:'0.8rem'}}>
              <li>Accounts Overview & Comparison</li>
              <li>Advantage Account</li>
              <li>Demo Trading</li>
            </ul>
          </div>

          {/* KNOWLEDGE HUB + PLATFORMS */}
          <div>
            <h3 className="font-bold mb-4" style={{fontSize:'16px'}}>KNOWLEDGE HUB</h3>
            <ul className="space-y-2 mb-36" style={{fontSize:'0.8rem'}}>
              <li>Full Library</li>
              <li>Trading Videos</li>
              <li>Ebooks</li>
              <li>Trading Tools</li>
              <li>Pip Calculator</li>
              <li>Glossary</li>
            </ul>

            <h3 className="font-bold mb-4" style={{fontSize:'16px'}}>PLATFORMS</h3>
            <ul className="space-y-2" style={{fontSize:'0.8rem'}}>
              <li>MT4</li>
              <li>MT5</li>
              <li>Mobile Trading</li>
            </ul>
          </div>

          {/* REGULATION & LICENSING + PRICING */}
          <div>
            <h3 className="font-bold mb-4" style={{fontSize:'16px'}}>REGULATION & LICENSING</h3>
            <ul className="space-y-2 mb-44" style={{fontSize:'0.8rem'}}>
              <li>Licensed Broker</li>
              <li>Privacy Statement</li>
              <li>Cookie Policy</li>
              <li>Risk Disclosure</li>
              <li>Terms and Conditions</li>
            </ul>

            <h3 className="font-bold mb-4" style={{fontSize:'16px'}}>PRICING</h3>
            <ul className="space-y-2" style={{fontSize:'0.8rem'}}>
              <li>Performance Statistics</li>
              <li>Commissions and Fees</li>
              <li>Deposits and Withdrawals</li>
            </ul>
          </div>

          {/* ABOUT + CAREERS */}
          <div >
            <h3 className="font-bold mb-4" style={{fontSize:'16px'}}>ABOUT</h3>
            <ul className="space-y-2 mb-10" style={{fontSize:'0.8rem'}}>
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

            <h3 className="font-bold mb-4" style={{fontSize:'16px'}}>CAREERS</h3>
            <ul className="space-y-2" style={{fontSize:'0.8rem'}}>
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
