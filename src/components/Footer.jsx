import React from "react";
import {
  FaTelegramPlane,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#10162f] text-white text-sm">
      <div className="max-w-7xl mx-auto px-10 py-12">
        {/* Join our community & social icons */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-gray-700 pb-6 mb-10">
          <h2 className="text-lg mb-4 md:mb-0">Join our community</h2>
          <div className="flex space-x-4 text-lg">
            <FaTelegramPlane className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
          </div>
        </div>

        {/* Footer links grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* MARKETS */}
          <div>
            <h4 className="font-bold mb-4">MARKETS</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Metals</li>
              <li>Stocks</li>
              <li>Currency Pairs (FX)</li>
              <li>Indices</li>
              <li>Commodities</li>
              <li>All Instruments</li>
            </ul>
          </div>

          {/* KNOWLEDGE HUB */}
          <div>
            <h4 className="font-bold mb-4">KNOWLEDGE HUB</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Full Library</li>
              <li>Trading Videos</li>
              <li>Ebooks</li>
              <li>Trading Tools</li>
              <li>Pip Calculator</li>
              <li>Glossary</li>
            </ul>
          </div>

          {/* REGULATION & LICENSING */}
          <div>
            <h4 className="font-bold mb-4">REGULATION & LICENSING</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Licensed Broker</li>
              <li>Privacy Statement</li>
              <li>Cookie Policy</li>
              <li>Risk Disclosure</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="font-bold mb-4">ABOUT</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <FaPhoneAlt className="mt-1" />
                <span>
                  Contact Us:
                  <br />
                  Customer Support: +44 20 3734 1025
                </span>
              </li>
              <li>+44 20 3734 1025</li>
              <li>
                <strong>Exinity Limited:</strong>
                <br />
                Exinity Limited, 5th Floor, 355 NEX Tower,
                <br />
                Rue du Savoir, Cybercity, Ebene 72201,
                <br />
                Mauritius
              </li>
              <li>
                <strong>Exinity Capital East Africa Ltd:</strong>
                <br />
                West End Towers, Waiyaki Way, 6th Floor,
                <br />
                P.O. Box 1896-00606, Nairobi, Republic of Kenya
              </li>
            </ul>
          </div>

          {/* Empty column for spacing in grid */}
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
