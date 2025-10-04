import { useRef, useState, useEffect } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUser,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isNavItemHovered, setIsNavItemHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const itemRefs = useRef({});

  useEffect(() => {
    if (openDropdown && itemRefs.current[openDropdown]) {
      requestAnimationFrame(() => {
        const rect = itemRefs.current[openDropdown].getBoundingClientRect();
        setUnderlineStyle({
          left: rect.left,
          width: rect.width,
        });
      });
    }
  }, [openDropdown]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when not hovered
  useEffect(() => {
    if (!isNavItemHovered && !isDropdownHovered) {
      setOpenDropdown(null);
    }
  }, [isNavItemHovered, isDropdownHovered]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    {
      name: "ABOUT",
      dropdown: [
        {
          heading: "About Us",
          links: [
            { title: "About Us", link: "/about-us" },
            {
              title: "Why Choose RightTrade Capital",
              link: "/trusted-forex-broker",
            },
          ],
        },
        {
          heading: "Costs",
          links: [
            {
              title: "Deposits and Withdrawals",
              link: "/forex-deposit-and-withdrawal",
            },
            {
              title: "Trading Commissions and Fees",
              link: "/trading-commission-calculator",
            },
          ],
        },
      ],
    },
    {
      name: "MARKETS",
      dropdown: [
        {
          heading: "Instruments",
          links: [
            { title: "Markets Overview", link: "/forex-market-tradingview" },
            {
              title: "Contract Specifications",
              link: "/forex-contract-specifications",
            },
          ],
        },
        {
          heading: "FX",
          links: [
            { title: "Forex", link: "/Forex-Trading-Platform" },
            {
              title: "Major Currency pairs",
              link: "/major-currency-pairs-in-forex",
            },
          ],
        },
        {
          heading: "Metals And Commodities",
          links: [
            { title: "Spot Metals", link: "/spot-metals-trading" },
            { title: "CFD Commodities", link: " /cfd-commodity-trading" },
          ],
        },
        {
          heading: "Stocks And Indices",
          links: [
            { title: "Stocks Trading", link: "/best-stock-trading-platform" },
            { title: "Stocks CFDs", link: "/best-stocks-for-cfd-trading" },
            { title: "CFD on Indices", link: "/cfd-index-trading" },
          ],
        },
        {
          heading: "Crypto",
          links: [
            {
              title: "Crypto CFDs",
              link: "/best-cryptocurrency-trading-platform",
            },
          ],
        },
        {
          heading: "Futures CFDS",
          links: [{ title: "Futures", link: "/best-futures-trading-platform" }],
        },
      ],
    },
    {
      name: "TRADING",
      dropdown: [
        {
          heading: "Accounts",
          links: [
            { title: "Accounts Overview", link: "/best-forex-trading-account" },
            { title: "Advantage Account", link: "/advantage-account" },
            {
              title: "Advantage Stocks Account",
              link: "/advantage-stocks-trading-account",
            },
            {
              title: "Advantage Plus Account",
              link: "/advantage-plus-trading-account",
            },
            { title: "Demo Accounts", link: "/forex-demo-trading-account" },
          ],
        },
        {
          heading: "Platforms",
          links: [
            {
              title: "Platforms Overview",
              link: "/MetaTrader-Trading-Platforms",
            },
            { title: "MT4", link: "/Best-Forex-Trading-Account" },
            { title: "Mobile Trading", link: "/advantage-trading-accounts" },
          ],
        },
        {
          heading: "Terms",
          links: [
            {
              title: "Leverage and Margin",
              link: "/leverage-margin-requirements",
            },
            { title: "Dividends", link: "/dividends" },
          ],
        },
      ],
    },
    {
      name: "TOOLS",
      dropdown: [
        {
          heading: "Tools",
          links: [
            { title: "Tools Overview", link: "/Trading-Tools" },

            { title: "Trading Signals", link: "/Trading-Signals" },
          ],
        },
        {
          heading: "Calculators",
          links: [
            { title: "Profit Calculator", link: "/Forex-Profit-Calculator" },
            { title: "Margin Calculator", link: "/Forex-Margin-Calculator" },
          ],
        },
      ],
    },
    {
      name: "CONTACT US",
      link: "/contact-us",
    },
  ];

  const toggleMobileDropdown = (itemName) => {
    setOpenMobileDropdown(openMobileDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0d141e] text-white text-sm w-full hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-10 pr-30">
          <span className="cursor-pointer flex items-center gap-1">
            EN <FaChevronDown size={10} />
          </span>
          <button className="bg-[#FBBD15] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#FBBD15] transition text-sm">
            OPEN ACCOUNT
          </button>
          <span className="cursor-pointer">LOGIN</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`fixed w-full top-0 z-50 transition-all ease-in-out shadow ${
          scrolled
            ? "bg-[rgba(26,29,48,0.76)] text-white backdrop-blur-md"
            : "bg-white text-black md:mt-13"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 pt-2 flex items-center justify-between lg:space-x-14">
          <Link to="/">
            <img
              src={logo}
              alt="RightTrade Capital"
              className="w-[70px] h-auto object-contain pb-1"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex h-full font-medium text-sm relative">
            {menuItems.map((item) =>
              item.link ? (
                <li
                  key={item.name}
                  className="relative cursor-pointer px-8 py-3 h-18 flex items-center"
                >
                  <Link to={item.link} className="font-medium">
                    {item.name}
                  </Link>
                </li>
              ) : (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    setIsNavItemHovered(true);
                    setOpenDropdown(item.name);
                  }}
                  onMouseLeave={() => setIsNavItemHovered(false)}
                >
                  <li
                    className="relative cursor-pointer px-8 py-3 h-18 hover:bg-opacity-10"
                    ref={(el) => (itemRefs.current[item.name] = el)}
                  >
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="font-medium">{item.name}</span>
                    </div>

                    {/* Dropdown */}
                    {openDropdown === item.name && (
                      <div
                        className={`fixed left-0 w-full bg-[#10162f] text-white py-10 px-20 z-40 text-sm transition-all duration-300 ${
                          scrolled ? "top-20" : "top-34"
                        }`}
                        onMouseEnter={() => setIsDropdownHovered(true)}
                        onMouseLeave={() => setIsDropdownHovered(false)}
                      >
                        <span
                          className="absolute top-0 h-1 bg-[#FBBD15] transition-all duration-300"
                          style={{
                            left: underlineStyle.left,
                            width: underlineStyle.width,
                            position: "absolute",
                          }}
                        ></span>
                        <div className="max-w-7xl mx-auto flex justify-center ml-13 gap-20">
                          {item.dropdown.map((section, idx) => (
                            <div key={idx}>
                              {section.heading && (
                                <h4 className="text-[#FBBD15] font-bold mb-4 text-base">
                                  {section.heading}
                                </h4>
                              )}
                              <ul className="space-y-3">
                                {section.links.map((link, index) => (
                                  <li
                                    key={index}
                                    className="cursor-pointer py-1 rounded-md hover:bg-gray-600"
                                  >
                                    <Link to={link.link}>{link.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                </div>
              )
            )}
          </ul>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 lg:hidden">
            <span className="cursor-pointer text-sm font-medium">LOGIN</span>
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-0 bg-[#1a1d30] text-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-600">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <FaTimes size={20} />
              </button>
              <img src={logo} alt="RightTrade Capital" className="w-[80px]" />
              <span className="text-sm font-medium">LOGIN</span>
            </div>
            <div className="p-4">
              {menuItems.map((item) =>
                item.link ? (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block py-4 border-b border-gray-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div
                    key={item.name}
                    className="border-b border-gray-600 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex items-center justify-between w-full py-4 text-left font-medium"
                    >
                      <span>{item.name}</span>
                      <FaChevronDown
                        className={`transition-transform duration-200 ${
                          openMobileDropdown === item.name ? "rotate-180" : ""
                        }`}
                        size={12}
                      />
                    </button>
                    {openMobileDropdown === item.name && (
                      <div className="pb-4 pl-4">
                        {item.dropdown.map((section, idx) => (
                          <div key={idx} className="mb-4">
                            {section.heading && (
                              <h4 className="text-[#ff4c1b] font-bold mb-2 text-sm">
                                {section.heading}
                              </h4>
                            )}
                            <ul className="space-y-2">
                              {section.links.map((link, index) => (
                                <li
                                  key={index}
                                  className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-600"
                                >
                                  <Link
                                    to={link.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {link.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
