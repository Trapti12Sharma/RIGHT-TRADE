import { useRef, useState, useEffect } from "react"
import { FaSearch, FaChevronDown, FaBars, FaTimes, FaUser, FaFileAlt, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const itemRefs = useRef({});
  const navContainerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Underline effect
  useEffect(() => {
    if (
      openDropdown &&
      itemRefs.current[openDropdown] &&
      navContainerRef.current
    ) {
      const itemRect = itemRefs.current[openDropdown].getBoundingClientRect();
      const containerRect = navContainerRef.current.getBoundingClientRect();
      setUnderlineStyle({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
      });
    }
  }, [openDropdown]);

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
  };

  const menuItems = [
    {
      name: "ABOUT",
      dropdown: [
        {
          heading: "ABOUT US",
          links: ["Why FXTM", "Awards", "Fund Safety", "Trading Statistics"],
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

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0d141e] text-white text-sm w-full font-sans">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-6 lg:space-x-12 pr-4 lg:pr-24">
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

      {/* Sticky Navbar2 */}
      <div
        ref={navContainerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-[rgba(26,29,48,0.76)] text-white backdrop-blur-md"
            : "bg-white text-black"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 pt-2 flex items-center space-x-14">
          <div>
            <img src={logo} alt="FXTM" className="w-[120px] h-auto" />
          </div>

          <ul className="flex space-x-10 font-medium text-sm relative">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative cursor-pointer px-3 py-4"
                ref={(el) => (itemRefs.current[item.name] = el)}
                onMouseEnter={() => {
                  handleMouseEnter();
                  setOpenDropdown(item.name);
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-full flex items-center">{item.name}</div>

                {openDropdown === item.name && (
                  <div
                    className={`fixed left-0 w-full bg-[#10162f] text-white py-10 px-20 z-40 text-sm transition-all duration-300 ${
                      scrolled ? "top-[65px]" : "top-[115px]"
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span
                      className="absolute top-0 h-1 bg-[#ff4c1b] transition-all duration-300"
                      style={{
                        left: underlineStyle.left,
                        width: underlineStyle.width,
                      }}
                    ></span>

                    <div className="max-w-7xl mx-auto flex gap-8">
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
                                className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-600"
                              >
                                {link}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
