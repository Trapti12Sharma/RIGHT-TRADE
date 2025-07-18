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
          heading: "ABOUT US",
          links: [
            "Why RightTrade Capital",
            "Awards",
            "Fund Safety",
            "Trading Statistics",
          ],
        },
        {
          heading: "COSTS",
          links: ["Deposits and Withdrawals", "Trading Commissions and Fees"],
        },
      ],
    },
    {
      name: "MARKETS",
      dropdown: [
        {
          heading: "INSTRUMENTS",
          links: ["Markets Overview", "Contract Specifications"],
        },
        { heading: "FX", links: ["Forex", "Major Currency pairs"] },
        {
          heading: "METALS AND COMMODITIES",
          links: ["Spot Metals", "CFD Commodities"],
        },
        {
          heading: "STOCKS AND INDICES",
          links: ["Stocks Trading", "Stocks CFDs", "CFD on Indices"],
        },
        { heading: "CRYPTO", links: ["Crypto CFDs"] },
        { heading: "FUTURE CFDS", links: ["Futures"] },
      ],
    },
    {
      name: "TRADING",
      dropdown: [
        {
          heading: "Accounts",
          links: [
            "Accounts Overview",
            "Advantage Account",
            "Advantage Stocks Account",
            "Advantage Plus Account",
            "Demo Accounts",
          ],
        },
        {
          heading: "Platforms",
          links: ["Platforms Overview", "MT4", "MT5", "Mobile Trading"],
        },
        {
          heading: "Tools",
          links: [
            "Tools Overview",
            "Pro Trading Tools",
            "Profit Calculator",
            "Margin Calculator",
            "Trading Signals",
          ],
        },
        {
          heading: "Terms",
          links: [
            "Holiday Trading Schedule",
            "Leverage and Margin",
            "Dividends",
          ],
        },
      ],
    },
    {
      name: "EDUCATION",
      dropdown: [
        {
          heading: "Trading Education",
          links: ["Expert Trader", "Education Overview", "Glossary"],
        },
        {
          heading: "Market Analysis",
          links: [
            "Market Analysis",
            "Market Analyst Team",
            "Economic Calendar",
            "Economic Events",
          ],
        },
        {
          heading: "Top Guides",
          links: [
            "Forex Trading for Beginners",
            "CFD Trading for Beginners",
            "How to trade CFDs on indices",
            "How to trade natural gas",
            "ABC Trading Patterns",
            "Copy Trading: The Ultimate Guide",
          ],
        },
      ],
    },
    {
      name: "AFFILIATES",
      dropdown: [
        {
          links: ["Affiliates", "Commission"],
        },
      ],
    },
  ];

  const toggleMobileDropdown = (itemName) => {
    setOpenMobileDropdown(openMobileDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0d141e] text-white text-sm w-full hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-12 pr-24">
          <div
            className="relative flex items-center"
            onMouseEnter={() => setShowSearch(true)}
            onMouseLeave={() => setShowSearch(false)}
          >
            {showSearch ? (
              <div className="transition-all duration-300 ease-in-out overflow-hidden w-48 opacity-100 flex items-center bg-[#1f2937] px-3 py-1 rounded">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white focus:outline-none w-full"
                />
                <FaSearch className="ml-2 cursor-pointer" />
              </div>
            ) : (
              <FaSearch className="cursor-pointer" />
            )}
          </div>
          <span className="cursor-pointer">HELP CENTRE</span>
          <span className="cursor-pointer">CONTACT US</span>
          <span className="cursor-pointer flex items-center gap-1">
            EN <FaChevronDown size={10} />
          </span>
          <button className="bg-[#ff4c1b] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#e03f10] transition text-sm">
            OPEN ACCOUNT
          </button>
          <span className="cursor-pointer">LOGIN</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out shadow ${
          scrolled
            ? "bg-[rgba(26,29,48,0.76)] text-white backdrop-blur-md"
            : "bg-white text-black"
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
            {menuItems.map((item) => (
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
                        className="absolute top-0 h-1 bg-[#ff4c1b] transition-all duration-300"
                        style={{
                          left: underlineStyle.left,
                          width: underlineStyle.width,
                          position: "absolute",
                        }}
                      ></span>
                      <div className="max-w-7xl mx-auto flex ml-13 gap-20">
                        {item.dropdown.map((section, idx) => (
                          <div key={idx}>
                            {section.heading && (
                              <h4 className="text-[#ff4c1b] font-bold mb-4 text-base">
                                {section.heading}
                              </h4>
                            )}
                            <ul className="space-y-3">
                              {section.links.map((link, index) => (
                                <li
                                  key={index}
                                  className="cursor-pointer py-1 rounded-md hover:bg-gray-600"
                                >
                                  <Link
                                    to={`/${link
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                  >
                                    {link}
                                  </Link>
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
            ))}
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
              <img
                src={logo}
                alt="RightTrade Capital"
                className="w-[80px] h-[40px]"
              />
              <span className="text-sm font-medium">LOGIN</span>
            </div>
            <div className="p-4">
              {menuItems.map((item) => (
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
                                  to={`/${link
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                >
                                  {link}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
